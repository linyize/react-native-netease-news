'use strict';

var React = require('react-native');
var { AppRegistry, Navigator, Text, View, StyleSheet, PropTypes, NativeAppEventEmitter } = React;
var { Actions, Router, Route, Schema, TabBar } = require('react-native-router-flux');

// 主界面
var Launch = React.createClass({
    render(){
        return <View style={styles.container}><Text> loading ... </Text></View>;
    }
});

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
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
                <Schema name="tab" type="switch" icon={TabIcon} />
                <Route name="tabbar">
                    <Router footer={TabBar} showNavigationBar={false}>
                        <Route name="tab1" schema="tab" title="新闻" component={Launch}/>
                        <Route name="tab2" schema="tab" title="阅读" component={Launch}/>
                        <Route name="tab3" schema="tab" title="视听" component={Launch}/>
                        <Route name="tab4" schema="tab" title="话题" component={Launch}/>
                        <Route name="tab5" schema="tab" title="我" component={Launch}/>
                    </Router>
                </Route>
            </Router>
        );
    }
}

AppRegistry.registerComponent('news', () => News);
