'use strict';

var React = require('react-native');
var { Image, Text, requireNativeComponent } = React;
var BasicComponentMixin = require('../Slate/BasicComponentMixin');
var SlateTouchable = requireNativeComponent('RNSlateTouchable', null);

var HeadlineCell = React.createClass({
    mixins: [BasicComponentMixin],

    componentWillMount() {
        this.loadLayout();
    },

    render() {
        var image = this.getValue("image");
        var title = this.getValue("title");
        var url = this.getValue("url");        
        var uri = "choice://news/" + title + "/" + url;
        return <SlateTouchable onTap={()=>this.openURI(uri)} style={this._cellStyles()}>
                    <Image style={this._imageStyles()} source={{uri: image}} />
                    <Text style={this._textStyles()} >{title}</Text>
                </SlateTouchable>;
    },

    _cellStyles() {
        return {
            width:this.state.width,
            height:this.state.height
        };
    },

    _imageStyles() {
        return {
            width:this.state.width,
            height:this.state.height
        };
    },

    _textStyles() {
        return {
            position: 'absolute',
            textAlign: 'center',
            backgroundColor: 'rgba(52,52,52,0.6)',
            color: 'white',
            bottom: 0,
            left: 0,
            paddingTop: 4,
            width: this.state.width,
            height: 25
        };
    },
});

module.exports = HeadlineCell;
