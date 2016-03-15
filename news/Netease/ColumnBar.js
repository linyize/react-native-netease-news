'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet, TouchableOpacity } = React;
var { Actions } = require('react-native-router-flux');


var ColumnBarButton = React.createClass({
    propTypes: {
        selected: React.PropTypes.bool,
        index: React.PropTypes.number,
        onPress: React.PropTypes.func
    },

    render() {
      var selected = this.props.selected;
      var index = this.props.index;
      return <TouchableOpacity style={styles.button} onPress={()=>this.props.onPress(index)}>
                <Text style={selected ? styles.buttonTitleHighlight : styles.buttonTitle}>{this.props.title}</Text>
              </TouchableOpacity>;
    }
});

var ColumnBar = React.createClass({
    propTypes: {
        onChangeTabs: React.PropTypes.func
    },

    render(){

      var index = this.props.index;
        return <View style={styles.container}>
        			<ColumnBarButton index={0} onPress={this.props.onChangeTabs} selected={index == 0} title='头条' />
              <ColumnBarButton index={1} onPress={this.props.onChangeTabs} selected={index == 1} title='体育' />
              <ColumnBarButton index={2} onPress={this.props.onChangeTabs} selected={index == 2} title='财经' />
              <ColumnBarButton index={3} onPress={this.props.onChangeTabs} selected={index == 3} title='汽车' />
              <ColumnBarButton index={4} onPress={this.props.onChangeTabs} selected={index == 4} title='热点' />
              <ColumnBarButton index={5} onPress={this.props.onChangeTabs} selected={index == 5} title='订阅' />
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