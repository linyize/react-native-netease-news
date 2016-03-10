'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet, TouchableOpacity } = React;
var { Actions } = require('react-native-router-flux');

var Me = React.createClass({
    render(){
        return <View style={styles.container}>
        			<Text>我</Text>
        			<Text></Text>
        			<TouchableOpacity onPress={Actions.messages}>
        			<Text>我的消息</Text>
        			</TouchableOpacity>
        			</View>;
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    marginTop: 20
  }
});

module.exports = Me;