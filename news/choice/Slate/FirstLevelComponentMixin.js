'use strict';

var React = require('react-native');
var { PropTypes, requireNativeComponent } = React;
var RNCellView = requireNativeComponent('RNCellView', null);
var BasicComponentMixin = require('./BasicComponentMixin');

/*
 * 第一级组件的抽象
 * 
 *    一般用RNCellView构成
 */
var FirstLevelComponentMixin = {
    propTypes: {
        widthRatio: PropTypes.number,
        heightRatio: PropTypes.number
    },

    mixins: [BasicComponentMixin],

    // 判断是否重新绘制
    shouldSlateComponentUpdate: function(nextProps, nextState) {
        return this.state.width !== nextState.width 
                || this.state.height !== nextState.height 
                || this.state.layout !== nextState.layout;
    },

    // 处理原生代码中发送的size变化通知
    onSizeChange: function(event) {
        this.setState(event.nativeEvent.size);
    },

    renderRNCellView(style : Object) {
        var widthRatio = this.state.widthRatio ? this.state.widthRatio : this.props.widthRatio;
        var heightRatio = this.state.heightRatio ? this.state.heightRatio : this.props.heightRatio;
        return <RNCellView 
                    style={style} 
                    onSizeChange={this.onSizeChange} 
                    widthRatio={widthRatio}
                    heightRatio={heightRatio} />;
    }
};

module.exports = FirstLevelComponentMixin;
