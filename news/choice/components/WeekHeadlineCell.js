'use strict';

var React = require('react-native');
var { Image, Text, StyleSheet, requireNativeComponent } = React;
var BasicComponentMixin = require('../Slate/BasicComponentMixin');
var SlateTouchable = requireNativeComponent('RNSlateTouchable', null);

var WeekHeadlineCell = React.createClass({
    mixins: [BasicComponentMixin],

    getDefaultProps() {
        return {
            widthRatio: 4,
            heightRatio: 2
        };
    },

    componentWillMount() {
        this.loadLayout();
    },

    render() {
        var layout = this.state.layout;
        var width = this.state.width;
        var height = this.state.height;

        if (!layout || !width || !height) {
            return null;
        }

        var image = this.getValue("image");
        var title = this.getValue("title");
        var url = this.getValue("url");

        var uri = "choice://news/" + title + "/" + url;

        // 渲染
        return <SlateTouchable style={this._cellStyles()}
                    enableDoubleTap={true}
                    onTap={()=>this.openURI(uri)} 
                    onDoubleTap={this.props.onDoubleTap} >
                    <Image style={this._imageStyles()} source={{uri: image}} />
                    <Text style={this._textStyles()} >{title}</Text>
                </SlateTouchable>;
    },

    _cellStyles() {
        var height = this.state.width * this.props.heightRatio / this.props.widthRatio;
        return {
            width:this.state.width,
            height:height,
            backgroundColor: 'white'
        };
    },

    _imageStyles() {
        var height = this.props.width * this.props.heightRatio / this.props.widthRatio;
        return {
            width:this.props.width,
            height:height
        };
    },

    _textStyles() {
        return {
            position: 'absolute',
            textAlign: 'left',
            backgroundColor: 'rgba(52,52,52,0.6)',
            color: 'white',
            bottom: 0,
            left: 0,
            paddingLeft: 12,
            paddingTop: 4,
            width: this.props.width,
            height: 25
        };
    },
});

module.exports = WeekHeadlineCell;
