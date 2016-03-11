'use strict';

var React = require('react-native');
var { Image, Text, View, StyleSheet, requireNativeComponent } = React;
var FirstLevelComponentMixin = require('../Slate/FirstLevelComponentMixin');
var SlateTouchable = requireNativeComponent('RNSlateTouchable', null);

var NormalCell = React.createClass({
    mixins: [FirstLevelComponentMixin],

    componentWillMount() {
        this.loadLayout(this.props);
    },

    componentWillReceiveProps(nextProps) {
        this.loadLayout(nextProps);
    },

    getDefaultProps() {
        return {
            widthRatio: 4,
            heightRatio: 1,
        };
    },

    render() {
        var layout = this.state.layout;
        var container = this.renderRNCellView(this._cellStyles());
        var containerWidth = this.state.width;
        var containerHeight = this.state.height;
        
        if (!layout || containerWidth == 0 || containerHeight == 0) {
            return container;
        }

        var image = this.getValue("image");
        var title = this.getValue("title");
        var subtitle = this.getValue("subtitle");
        var url = this.getValue("url");
        var uri = "choice://news/" + title + "/" + url;

        var content = <SlateTouchable key="touch" onTap={()=>this.openURI(uri)} style={styles.touch}>
                        <Image style={this._imageStyles()} source={{uri: image}} />
                        <View>
                            <Text style={this._titleStyles()}>{title}</Text>
                            <Text style={styles.desc}>{subtitle}</Text>
                        </View>
                    </SlateTouchable>;
        return React.cloneElement(container, {ref: 'NormalCell'}, [content]);
    },

    _cellStyles() {
        return {
            position: 'absolute',
            backgroundColor: 'lightgray',
            top: 0,
            left: 0,
            width: this.state.width,
            height: this.state.height
        };
    },

    _titleStyles() {
        var imageWidth = this.state.height - 24;
        return {
            textAlign: 'left',
            color: '#333333',
            marginTop: 10,
            marginLeft: 12,
            width: this.state.width - 4 - 12 - imageWidth - 12
        };
    },

    _imageStyles() {
        var width = this.state.height - 24;
        var height = width;
        return {
            marginLeft: 12,
            marginTop: 10,
            width: width,
            height: height,
        };
    }
});

var styles = StyleSheet.create({
  touch : {
    flex: 1,
    flexDirection: 'row',
  },
  desc: {
    textAlign: 'left',
    color: '#333333',
    marginLeft: 12,
  },
});

module.exports = NormalCell;
