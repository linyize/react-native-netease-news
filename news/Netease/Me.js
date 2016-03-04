'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet } = React;


var Me = React.createClass({
    render(){
        return <View style={styles.container}><Text>我</Text></View>;
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

module.exports = Me;