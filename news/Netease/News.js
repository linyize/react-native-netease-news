'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet, TouchableOpacity } = React;
var { Actions } = require('react-native-router-flux');

var Column = require('../choice/Column');
var ColumnBar = require('./ColumnBar');

var News = React.createClass({
    render(){
        return <View style={styles.container}>
                    <ColumnBar />
                    <Column />
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

module.exports = News;