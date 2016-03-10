'use strict';

var React = require('react-native');
var { Image, Text, requireNativeComponent } = React;
var BasicComponentMixin = require('../Slate/BasicComponentMixin');
var SlateTouchable = requireNativeComponent('RNSlateTouchable', null);

var WeekNormal = React.createClass({
    mixins: [BasicComponentMixin],

    getDefaultProps() {
        return {
            widthRatio: 4,
            heightRatio: 1
        };
    },

    componentWillMount() {
        this.loadLayout();
    },

    render() {
        var layout = this.state.layout;
        var width = this.state.width;
        var height = this.state.height;
        
        if (!layout || width == 0 || height == 0) {
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
                    <Text style={this._textStyles()} >{title}</Text>
                    <Image style={this._imageStyles()} source={{uri: image}} />
                </SlateTouchable>;
    },

    _cellStyles() {
        var height = this.state.width * this.props.heightRatio / this.props.widthRatio;
        return {
            flex: 1,
            flexDirection: 'row',
            width: this.state.width,
            height: height,
            borderTopColor: 'lightgray',
            borderTopWidth: 2,
            backgroundColor: 'white'
        };
    },

    _imageStyles() {
        var height = this.state.width * this.props.heightRatio / this.props.widthRatio;
        var width = height - 24;
        return {
            marginLeft: 12,
            marginTop: 10,
            width: width,
            height: width
        };
    },

    _textStyles() {
        var height = this.state.width * this.props.heightRatio / this.props.widthRatio;
        var imageWidth = height - 24;
        return {
            textAlign: 'left',
            color: '#333333',
            marginTop: 10,
            marginLeft: 12,
            width: this.state.width - 4 - 12 - imageWidth - 12 - 10
        };
    },
});

module.exports = WeekNormal;
