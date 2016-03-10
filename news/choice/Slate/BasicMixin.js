'use strict';

var React = require('react-native');
var SlateURI = require('./SlateURI');

/*
 * 基础功能
 *
 */
var BasicMixin = {

    // 打开slate uri
    openURI(uri: String) {
        return SlateURI.openURI(uri);
    },

    // 渲染基本组件
    renderSlateComponent(index: Number, layout: Object, typeMap: Object, mapping: Object, otherProps: Object = null) {
        var type = typeMap[layout.componentType];
        var offset = "";
        if (layout.offset) {
        	offset = layout.offset;
        }
        var updateTime = "";
        if (layout.updateTime) {
            updateTime = layout.updateTime;
        }
        // key要体现唯一性，关系到数据刷新
        var key = "component" + index + offset + updateTime;
        return React.createElement(type, {key, layout, typeMap, mapping, ...otherProps});
    }
};

module.exports = BasicMixin;
