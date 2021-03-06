'use strict';

var React = require('react-native');
var { Text, View, Image, StyleSheet } = React;

class TabIcon extends React.Component {
    render(){
        var icon;
        if (this.props.name === 'news') {
            icon = this.props.selected ? require('../image/tabbar_icon_news_highlight.png') 
                        : require('../image/tabbar_icon_news_normal.png');
        }
        else if (this.props.name === 'reader') {
            icon = this.props.selected ? require('../image/tabbar_icon_reader_highlight.png') 
                        : require('../image/tabbar_icon_reader_normal.png');
        }
        else if (this.props.name === 'media') {
            icon = this.props.selected ? require('../image/tabbar_icon_media_highlight.png') 
                        : require('../image/tabbar_icon_media_normal.png');
        }
        else if (this.props.name === 'bar') {
            icon = this.props.selected ? require('../image/tabbar_icon_bar_highlight.png') 
                        : require('../image/tabbar_icon_bar_normal.png');
        }
        else if (this.props.name === 'me') {
            icon = this.props.selected ? require('../image/tabbar_icon_me_highlight.png') 
                        : require('../image/tabbar_icon_me_normal.png');
        }
        return (
            <View style={styles.container}>
            <View style={styles.iconContainer}>
            <Image style={styles.icon} source={icon}></Image>
            </View>
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center'
  },
  iconContainer: {
    height: 20,
    marginTop: 5,
    marginBottom: 3,
    alignItems: 'center'
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

module.exports = TabIcon;