'use strict';

var React = require('react-native');
var { ScrollView } = React;
var TimerMixin = require('react-native-timer-mixin');
var ContainerMixin = require('./ContainerMixin');

/*
 * 头条轮播组件的抽象
 * 
 *    嵌套多个子组件，可滑动，可自动定时轮播 
 */
var HeadlineMixin = {
    mixins: [TimerMixin, ContainerMixin],

    startHeadlineTimer(timeInterval : Number) {
        this.setInterval(()=>{
            // 自动轮播
            var width = this.state.width;
            var layout = this.state.layout;
            if (!layout) {
                return false;
            }
            var scrollIndex = this.state.scrollIndex;
            if (scrollIndex > layout.subComponents.length - 1) {
                scrollIndex = 0;
                this.myScroll.scrollTo({y:0, x:width * scrollIndex, animated:false});
            }
            else {
                this.myScroll.scrollTo({y:0, x:width * scrollIndex, animated:true});
            }
            scrollIndex++;
            this.setState({scrollIndex});
        }, timeInterval);
    },

    renderHeadline(container : Object, width : Number, height : Number, otherProps : Object) {
        var scrollview = <ScrollView ref={(ref) => this.myScroll = ref}
                                    pagingEnabled={true}
                                    horizontal={true} 
                                    bounces={false}
                                    automaticallyAdjustContentInsets={false}
                                    style={{flex:1,flexDirection: 'row'}}/>;
        var scrollviewWithChildren = this.renderSlateContainer(scrollview, width, height, otherProps);
        return React.cloneElement(container, {ref : 'headline'}, scrollviewWithChildren);
    },
};

module.exports = HeadlineMixin;
