'use strict';

var React = require('react-native');
var { Text, View, StyleSheet, requireNativeComponent } = React;
var FirstLevelComponentMixin = require('../Slate/FirstLevelComponentMixin');
var ContainerMixin = require('../Slate/ContainerMixin');
var SlateTouchable = requireNativeComponent('RNSlateTouchable', null);

var Album = React.createClass({
    mixins: [FirstLevelComponentMixin, ContainerMixin],

    getDefaultProps() {
        return {
            widthRatio: 4,
            heightRatio: 2
        };
    },

    componentWillMount() {
        this.loadLayout(this.props);
    },

    componentWillReceiveProps(nextProps) {
        this.loadLayout(nextProps);
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return this.shouldSlateComponentUpdate(nextProps, nextState);
    },

    render() {
        var layout = this.state.layout;
        var container = this.renderRNCellView(this._cellStyles());
        var width = this.state.width;
        var height = this.state.height;
        
        if (!layout || !layout.subComponents || !width || !height) {
            return container;
        }

        var title = this.getValue("title");
        var url = this.getValue("url");
        var uri = "choice://news/" + title + "/" + url;

        var children = [];

        var titleText = <Text style={this._titleStyles()} key="title">{title}</Text>;
        children.push(titleText);

        var imageContainer = <View style={styles.imageContainer}/>;
        var images = this.renderSlateContainer(imageContainer, width, height);
        children.push(images);
        
        var touch = <SlateTouchable onTap={()=>this.openURI(uri)} style={styles.cell} />;
        var touchWithChildren = React.cloneElement(touch, {ref : 'touch', key : 'touch'}, children);

        return React.cloneElement(container, {ref : 'album'}, touchWithChildren);
    },

    _cellStyles() {
        return {
            position: 'absolute',
            flexDirection: 'column',
            backgroundColor: '#F6F6F6',
            top: 0,
            left: 0,
            width: this.state.width,
            height: this.state.height
        };
    },

    _titleStyles() {
        var marginLeft = (this.state.width * 0.1) / 4.0;
        var marginTop = this.state.height * 0.2;
        var width = this.state.width - 4 - marginLeft * 2;
        return {
            textAlign: 'left',
            color: '#333333',
            marginTop: marginTop,
            marginLeft: marginLeft,
            width: width,
        };
    }
});

var styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'row'
  },
});

module.exports = Album;
