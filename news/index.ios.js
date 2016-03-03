'use strict';

var React = require('react-native');
var { AppRegistry, Navigator, Text, View, Image, StyleSheet, PropTypes, NativeAppEventEmitter } = React;
var { Actions, Router, Route, Schema, TabBar } = require('react-native-router-flux');

// 主界面
var Launch = React.createClass({
    render(){
        return <View style={styles.container}><Text> loading ... </Text></View>;
    }
});

class NeteaseNewsTabIcon extends React.Component {
    render(){
        var icon;
        if (this.props.name === 'news') {
            icon = this.props.selected ? require('./image/tabbar_icon_news_highlight.png') 
                        : require('./image/tabbar_icon_news_normal.png');
        }
        else if (this.props.name === 'reader') {
            icon = this.props.selected ? require('./image/tabbar_icon_reader_highlight.png') 
                        : require('./image/tabbar_icon_reader_normal.png');
        }
        else if (this.props.name === 'media') {
            icon = this.props.selected ? require('./image/tabbar_icon_media_highlight.png') 
                        : require('./image/tabbar_icon_media_normal.png');
        }
        else if (this.props.name === 'bar') {
            icon = this.props.selected ? require('./image/tabbar_icon_bar_highlight.png') 
                        : require('./image/tabbar_icon_bar_normal.png');
        }
        else if (this.props.name === 'me') {
            icon = this.props.selected ? require('./image/tabbar_icon_me_highlight.png') 
                        : require('./image/tabbar_icon_me_normal.png');
        }
        return (
            <View>
            <Image source={icon}></Image>
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    marginTop: 64
  }
});

// 页面路由
class News extends React.Component {
    render(){
        return (
            <Router>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                <Schema name="tab" type="switch" icon={NeteaseNewsTabIcon} />
                <Route name="tabbar">
                    <Router footer={TabBar} showNavigationBar={false}>
                        <Route name="news" schema="tab" title="新闻" component={Launch}/>
                        <Route name="reader" schema="tab" title="阅读" component={Launch}/>
                        <Route name="media" schema="tab" title="视听" component={Launch}/>
                        <Route name="bar" schema="tab" title="话题" component={Launch}/>
                        <Route name="me" schema="tab" title="我" component={Launch}/>
                    </Router>
                </Route>
            </Router>
        );
    }
}

AppRegistry.registerComponent('news', () => News);
