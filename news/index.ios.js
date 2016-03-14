'use strict';

var React = require('react-native');
var { AppRegistry, Navigator, Text, View, Image, StyleSheet, PropTypes, NativeAppEventEmitter, TouchableOpacity } = React;
var { Actions, Router, Route, Schema, TabBar } = require('react-native-router-flux');


var SlateURI = require('./choice/Slate/SlateURI');
var SlateURIHandler = require('./choice/SlateURIHandler');
SlateURI.handler = SlateURIHandler;

var TabIcon = require('./Netease/TabIcon');
var News = require('./Netease/News');
var Reader = require('./Netease/Reader');
var Media = require('./Netease/Media');
var Bar = require('./Netease/Bar');
var Me = require('./Netease/Me');
var Messages = require('./Netease/Messages');
var Article = require('./Netease/Article');
var WriteComment = require('./Netease/WriteComment');
var Comments = require('./Netease/Comments');

// 页面路由
class NeteaseNews extends React.Component {

    renderNewsTitle() {
        return <Image style={styles.navbarTitle} source={require('./image/navbar_netease.png')}></Image>;
    }

    renderNewsLeftButton() {
        return <TouchableOpacity onPress={Actions.article}>
                  <Image style={styles.navbarLeftButton} source={require('./image/top_navi_bell_normal.png')}></Image>
                </TouchableOpacity>;
    }

    renderNewsRightButton() {
        return <TouchableOpacity onPress={Actions.article}>
                  <Image style={styles.navbarRightButton} source={require('./image/search_icon.png')}></Image>
                </TouchableOpacity>;
    }

    render(){
        return (
            <Router hideNavBar={true}>
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                <Schema name="tab" type="switch" icon={TabIcon}/>
                <Route name="tabbar" hideNavBar={true}>
                    <Router footer={TabBar}>
                        <Route name="news" schema="tab" 
                           title="新闻" component={News} 
                           navigationBarStyle={styles.navbar}
                           renderTitle={this.renderNewsTitle}
                           renderLeftButton={this.renderNewsLeftButton}
                           renderRightButton={this.renderNewsRightButton} />
                        <Route name="reader" schema="tab" title="阅读" component={Reader}
                            navigationBarStyle={styles.navbar} />
                        <Route name="media" schema="tab" title="视听" component={Media}
                            navigationBarStyle={styles.navbar} />
                        <Route name="bar" schema="tab" title="话题" component={Bar}
                            navigationBarStyle={styles.navbar} />
                        <Route name="me" schema="tab" title="我" component={Me} hideNavBar={true}
                            navigationBarStyle={styles.navbar} />
                    </Router>
                </Route>
                <Route name="messages" component={Messages} title="我的消息" type="push" hideNavBar={false}  />
                <Route name="article" component={Article} title="文章页" type="push" hideNavBar={false}  />
                <Route name="comments" component={Comments} title="评论页" type="push" hideNavBar={false}  />
                <Route name="writecomment" component={WriteComment} title="写评论" schema="modal" />
            </Router>
        );
    }
};

var styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#B01101'
  },
  navbarTitle: {
    marginTop: 10
  },
  navbarLeftButton: {
    marginTop: 10,
    marginLeft: 10
  },
  navbarRightButton: {
    marginTop: 10,
    marginRight: 10
  }
});

AppRegistry.registerComponent('news', () => NeteaseNews);
