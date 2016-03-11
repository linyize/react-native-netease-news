'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet, TouchableOpacity } = React;
var { Actions } = require('react-native-router-flux');

var WebView = require('../choice/WebView');

var Article = React.createClass({
    render(){
        return <WebView style={styles.container} url={this.props.url} title={this.props.title}>
        			</WebView>;
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    marginTop: 64
  }
});

module.exports = Article;