'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet, TouchableOpacity } = React;
var { Actions } = require('react-native-router-flux');

var WriteComment = React.createClass({
    render(){
        return <View style={styles.container}>
        			<Text>写评论</Text>
                    <Text></Text>
                    <TouchableOpacity onPress={Actions.pop}>
                    <Text>返回</Text>
                    </TouchableOpacity>
        			</View>;
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

module.exports = WriteComment;