'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet, TouchableOpacity } = React;
var { Actions } = require('react-native-router-flux');

var ColumnBar = React.createClass({
    render(){
        return <View style={styles.container}>
        			<TouchableOpacity style={styles.button}>
        				<Text style={styles.buttonTitleHighlight}>头条</Text>
        			</TouchableOpacity>
        			<TouchableOpacity style={styles.button}>
        				<Text style={styles.buttonTitle}>体育</Text>
        			</TouchableOpacity>
        			<TouchableOpacity style={styles.button}>
        				<Text style={styles.buttonTitle}>财经</Text>
        			</TouchableOpacity>
        			<TouchableOpacity style={styles.button}>
        				<Text style={styles.buttonTitle}>汽车</Text>
        			</TouchableOpacity>
        			<TouchableOpacity style={styles.button}>
        				<Text style={styles.buttonTitle}>热点</Text>
        			</TouchableOpacity>
        			<TouchableOpacity style={styles.button}>
        				<Text style={styles.buttonTitle}>订阅</Text>
        			</TouchableOpacity>
                </View>;
    }
});

var styles = StyleSheet.create({
  container: {
  	flexDirection: 'row',
    backgroundColor: 'lightgray',
    height: 30
  },
  button: {
  	width: 60,
  	height: 30,
  	alignItems: 'center'
  },
  buttonTitle: {
  	marginTop: 6,
  	color: 'black',
  	fontSize: 14
  },
  buttonTitleHighlight: {
  	marginTop: 6,
  	color: 'red',
  	fontSize: 16
  }
});

module.exports = ColumnBar;