'use strict';

var React = require('react-native');
var { View, Text, StyleSheet, requireNativeComponent, LayoutAnimation } = React;
var FirstLevelComponentMixin = require('../Slate/FirstLevelComponentMixin');
var ContainerMixin = require('../Slate/ContainerMixin');
var SlateTouchable = requireNativeComponent('RNSlateTouchable', null);

var Week = React.createClass({
    mixins: [FirstLevelComponentMixin, ContainerMixin],
    padding: 10,

    getInitialState() {
        return {
            width: 0, 
            height: 0,
            widthRatio: this.props.widthRatio,
            heightRatio: this.props.heightRatio,
            expand: 1
        };
    },

    getDefaultProps() {
        return {
            widthRatio: 4,
            heightRatio: 4
        };
    },

    componentWillMount() {
        this.loadLayout(this.props);
    },

    componentWillReceiveProps(nextProps) {
        this.loadLayout(nextProps);
    },

    render() {
        var cellview = this.renderRNCellView(this._weekStyles());
        var width = this.state.width;
        var height = this.state.height;

        if (!width || !height) {
            return cellview;
        }

        if (this.state.expand == 0) {
            // 收起状态
            var title = this.getValue("title");
            var child = <SlateTouchable key="touch" onTap={this.expand} >
                            <View style={styles.content}>
                                <Text>{title}</Text>
                            </View>
                        </SlateTouchable>;
            return React.cloneElement(cellview, {ref:"week"}, [child]);
        }

        // 展开状态
        var otherProps = {onDoubleTap:this.shrink};
        var childwidth = width - this.padding * 2;
        var childheight = height - this.padding * 2;
        var container = <View style={styles.container} />;
        var containerWithChildren = this.renderSlateContainer(container, childwidth, childheight, otherProps);
        return React.cloneElement(cellview, {ref:"week"}, containerWithChildren);
    },

    // 展开动画
    expand() {
        LayoutAnimation.spring();
        var height = this.state.height * 4;
        this.setState({expand:1, heightRatio:4, height});
        this.props.onCellSizeChange();
    },

    // 收起动画
    shrink() {
        LayoutAnimation.spring();
        var height = this.state.height / 4;
        this.setState({expand:0, heightRatio:1, height});
        this.props.onCellSizeChange();
    },

    _weekStyles() {
        return {
            position: 'absolute',
            top: 0,
            left: 0,
            width: this.state.width,
            height: this.state.height,
            padding: this.padding
        };
    }
});

var styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        borderColor: 'gray',
        borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 8
    },
    content: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        margin: 5,
        borderRadius: 8,
        alignItems: 'center',
    }
});

module.exports = Week;
