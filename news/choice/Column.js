'use strict';

var React = require('react-native');
var { AppRegistry, Navigator, Text, View, StyleSheet, PropTypes, NativeAppEventEmitter } = React;
var { Actions, Router, Route, Schema } = require('react-native-router-flux');

// 详情页
var WebView = require('./WebView');

// 组件库
var Week = require('./components/Week');
var WeekHeadline = require('./components/WeekHeadline');
var WeekHeadlineCell = require('./components/WeekHeadlineCell');
var WeekNormal = require('./components/WeekNormal');
var Album = require('./othercomponents/Album');
var AlbumCell = require('./othercomponents/AlbumCell');
var Headline = require('./othercomponents/Headline');
var HeadlineCell = require('./othercomponents/HeadlineCell');
var NormalCell = require('./othercomponents/NormalCell');
var typeMap = {
    "week" : Week,
    "weekHeadline" : WeekHeadline,
    "weekHeadlineCell" : WeekHeadlineCell,
    "weekNormal" : WeekNormal,
    "album" : Album,
    "albumCell" : AlbumCell,
    "headline" : Headline,
    "headlineCell" : HeadlineCell,
    "normalCell" : NormalCell
};

// slate mixin
var MainMixin = require('./Slate/MainMixin');

// 栏目页
var Column = React.createClass({
    mixins: [MainMixin],

    getInitialState() {
        return {
            typeMap: typeMap
        };
    },

    render(){
        var layout = this.state.layout;
        if (!layout) {
            // loading view
            return <View style={styles.container}><Text> loading ... </Text></View>;
        }

        // 渲染主界面
        return this.renderQuiltView("bbwcchoice", styles.container);
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    marginTop: 64
  }
});

module.exports = Column;
