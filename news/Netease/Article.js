'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet, TouchableOpacity } = React;
var { Actions } = require('react-native-router-flux');

var Article = React.createClass({
    render(){
        return <View style={styles.container}>
        			<Text>文章页</Text>
                    <Text></Text>
                    <TouchableOpacity onPress={Actions.comments}>
                    <Text>评论页</Text>
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

module.exports = Article;