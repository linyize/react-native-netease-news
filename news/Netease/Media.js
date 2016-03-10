'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet } = React;

var Column = require('../choice/Column');

var Media = React.createClass({
    render(){
        return <Column style={styles.container}></Column>;
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

module.exports = Media;