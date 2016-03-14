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
                            <Text style={styles.desc} numberOfLines={2}>{subtitle}</Text>
                        </View>
                        <View style={styles.rightBottom}>
                            <Text style={styles.button}>专题</Text>
                        </View>
                    </SlateTouchable>;
        return React.cloneElement(container, {ref: 'NormalCell'}, [content]);
    },

    _cellStyles() {
        return {
            position: 'absolute',
            backgroundColor: '#F6F6F6',
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
            color: 'black',
            marginTop: 10,
            marginLeft: 8,
            fontSize: 17,
            width: this.state.width - 4 - 12 - imageWidth - 12
        };
    },

    _imageStyles() {
        var width = this.state.height;
        var height = width * 140 / 186;
        return {
            marginLeft: 10,
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
    color: '#A6A6A6',
    marginTop: 6,
    marginLeft: 8,
    lineHeight: 22,
    width: 260
  },
  rightBottom: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 26,
    alignItems: 'center',
    height: 15,
    borderColor: '#EB9394',
    borderWidth: 0.5,
    borderRadius: 3,
    overflow: 'hidden'
  },
  button: {
    color: '#DF3031',
    marginTop: 1.5,
    fontSize: 11
  }
});

module.exports = NormalCell;
