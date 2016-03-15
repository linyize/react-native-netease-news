'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet, TouchableOpacity } = React;
var { Actions } = require('react-native-router-flux');

var ColumnBar = React.createClass({
    propTypes: {
        onChangeTabs: React.PropTypes.func
    },

    onPressTab(index) {
      this.props.onChangeTabs(index);
    },

    render(){

      var index = this.props.index;
        return <View style={styles.container}>
        			<TouchableOpacity style={styles.button} onPress={()=>this.onPressTab(0)}>
        				<Text style={index == 0 ? styles.buttonTitleHighlight : styles.buttonTitle}>头条</Text>
        			</TouchableOpacity>
        			<TouchableOpacity style={styles.button} onPress={()=>this.onPressTab(1)}>
        				<Text style={index == 1 ? styles.buttonTitleHighlight : styles.buttonTitle}>体育</Text>
        			</TouchableOpacity>
        			<TouchableOpacity style={styles.button} onPress={()=>this.onPressTab(2)}>
        				<Text style={index == 2 ? styles.buttonTitleHighlight : styles.buttonTitle}>财经</Text>
        			</TouchableOpacity>
        			<TouchableOpacity style={styles.button} onPress={()=>this.onPressTab(3)}>
        				<Text style={index == 3 ? styles.buttonTitleHighlight : styles.buttonTitle}>汽车</Text>
        			</TouchableOpacity>
        			<TouchableOpacity style={styles.button} onPress={()=>this.onPressTab(4)}>
        				<Text style={index == 4 ? styles.buttonTitleHighlight : styles.buttonTitle}>热点</Text>
        			</TouchableOpacity>
        			<TouchableOpacity style={styles.button} onPress={()=>this.onPressTab(5)}>
        				<Text style={index == 5 ? styles.buttonTitleHighlight : styles.buttonTitle}>订阅</Text>
        			</TouchableOpacity>
                </View>;
    }
});

var styles = StyleSheet.create({
  container: {
  	flexDirection: 'row',
    backgroundColor: '#F6F6F6',
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