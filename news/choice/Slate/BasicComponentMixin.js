'use strict';

var React = require('react-native');
var { NativeModules } = React;
var SlateApi = NativeModules.SlateApiManager;
var BasicMixin = require('./BasicMixin');

/*
 * slate基本组件的抽象
 *
 */
var BasicComponentMixin = {
    mixins: [BasicMixin],

    // 加载布局数据
    loadLayout(props: Object) {
        var layout = props.layout;
        if (layout.dataSource) {
            if (!this.state.layout) {
                this.loadDataSource(layout.dataSource);
            }
        }
        else {
            this.setLayout(layout, props);
        }
    },

    // 字段映射 获取key对应的值
    getValue(key: String) {
        var layout = this.state.layout;
        var mapping = this.state.mapping;
        var keyMap = mapping[layout.componentType];

        try {
            var value = eval("layout." + keyMap[key]);
            return value;
        }
        catch (e) {
            console.log(e);
        }
    },

    // 加载自定义数据源
    loadDataSource(url: String) {
        SlateApi.fetchJSON(url, (error, json)=>{
            if (error) {
                console.warn(error);
            }
            else {
                this.setLayout(json, this.props);
            }
        });
    },

    // 把layout和其他props一起设置为组件state
    setLayout(layout: Object, props: Object) {
        var newState = {};
        if (layout) {
            newState.layout = layout;
        }
        if (props.typeMap) {
            newState.typeMap = props.typeMap;
        }
        if (props.mapping) {
            newState.mapping = props.mapping;
        }
        if (props.width) {
            newState.width = props.width;
        }
        if (props.height) {
            newState.height = props.height;
        }
        this.setState(newState);
    }
};

module.exports = BasicComponentMixin;
