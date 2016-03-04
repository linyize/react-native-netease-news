'use strict';

var React = require('react-native');
var { AppRegistry, Navigator, Text, View, Image, StyleSheet, PropTypes, NativeAppEventEmitter } = React;
var { Actions, Router, Route, Schema, TabBar } = require('react-native-router-flux');
var TabIcon = require('./Netease/TabIcon');
var News = require('./Netease/News');
var Reader = require('./Netease/Reader');
var Media = require('./Netease/Media');
var Bar = require('./Netease/Bar');
var Me = require('./Netease/Me');

// 页面路由
class NeteaseNews extends React.Component {
    render(){
        return (
            <Router>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                <Schema name="tab" type="switch" icon={TabIcon} />
                <Route name="tabbar">
                    <Router footer={TabBar} showNavigationBar={false}>
                        <Route name="news" schema="tab" title="新闻" component={News}/>
                        <Route name="reader" schema="tab" title="阅读" component={Reader}/>
                        <Route name="media" schema="tab" title="视听" component={Media}/>
                        <Route name="bar" schema="tab" title="话题" component={Bar}/>
                        <Route name="me" schema="tab" title="我" component={Me}/>
                    </Router>
                </Route>
            </Router>
        );
    }
}

AppRegistry.registerComponent('news', () => NeteaseNews);
