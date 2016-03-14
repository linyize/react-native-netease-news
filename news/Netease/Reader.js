'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet } = React;

var Column = require('../choice/Column');

var Reader = React.createClass({
    render(){
        return <View style={styles.container}>
                    <Column />
                </View>;
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

module.exports = Reader;