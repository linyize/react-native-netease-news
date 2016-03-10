'use strict';

var React = require('react-native');

/*
 * 容器组件的抽象
 *
 *     容器组件可以嵌套子组件
 */
var ContainerMixin = {

    renderSlateContainer(container : Object, width : Number, height : Number, otherProps : Object) {
        var layout = this.state.layout;
        var typeMap = this.state.typeMap;
        var mapping = this.state.mapping;

        if (!layout) {
            return container;
        }

        var components = [];
        var props = {};
        
        if (layout.components) {
            // 一级组件
            components = layout.components;
            if (otherProps) {
                props = otherProps;
            }
        }
        else if (layout.subComponents) {
            // 二级组件
            components = layout.subComponents;

            // 需要校验width height
            if (!width || !height) {
                return container;
            }
            props = {width, height, ...otherProps};
        }
        else {
            // 没有数据
            return container;
        }

        // 循环渲染子组件，插入container里面
        var children = [];
        for (var index = 0; index < components.length; index++) {
            var subLayout = components[index];
            var child = this.renderSlateComponent(index, 
                                    subLayout, 
                                    typeMap, 
                                    mapping, 
                                    props);
            children.push(child); 
        }
        return React.cloneElement(container, {key : 'container'}, children);
    }
};

module.exports = ContainerMixin;
