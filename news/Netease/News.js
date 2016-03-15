'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet, TouchableOpacity } = React;
var { Actions } = require('react-native-router-flux');
var Button = require('react-native-button');
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';
var Column = require('../choice/Column');
var ColumnBar = require('./ColumnBar');

var News = React.createClass({
    getInitialState() {
        return {
            index: 0
        };
    },

    handleChangeTabs(value : Number) {
        this.setState({
            index: value,
        });
    },

    handleChangeIndex(index : Number) {
        this.setState({
            index: index,
        });
    },

    render(){
        var index = this.state.index;

        return <View style={styles.container}>
                <ColumnBar index={index} onChangeTabs={this.handleChangeTabs} />
                <SwipeableViews
                    index={index}
                    onChangeIndex={this.handleChangeIndex}
                    containerStyle={styles.slideContainer}
                >
                    <Column />
                    <Column />
                    <Column />
                    <Column />
                    <Column />
                    <Column />
                </SwipeableViews>
            </View>;
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    marginTop: 64
  },
  slideContainer: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  }
});

module.exports = News;