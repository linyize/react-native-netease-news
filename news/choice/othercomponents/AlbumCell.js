'use strict';

var React = require('react-native');
var { Image } = React;
var BasicComponentMixin = require('../Slate/BasicComponentMixin');

var AlbumCell = React.createClass({
    mixins: [BasicComponentMixin],

    componentWillMount() {
        this.loadLayout(this.props);
    },

    componentWillReceiveProps(nextProps) {
        this.loadLayout(nextProps);
    },

    render() {
        var image = this.getValue("image");

        // 渲染
        return <Image style={this._imageStyles()} source={{uri: image}} />;
    },

    _imageStyles() {
        var imageWidth = this.state.width * 0.9 / 3.0;
        var imageHeight = imageWidth * 54.0 / 88.0;
        var marginLeft = (this.state.width * 0.1) / 4.0;
        var marginTop = this.state.height * 0.2;
        return {
            marginLeft: marginLeft,
            marginTop: marginTop,
            width: imageWidth,
            height: imageHeight,
        };
    }
});

module.exports = AlbumCell;
