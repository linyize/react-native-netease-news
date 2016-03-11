'use strict';

var React = require('react-native');
var { View } = React;
var BasicComponentMixin = require('../Slate/BasicComponentMixin');
var HeadlineMixin = require('../Slate/HeadlineMixin');

var WeekHeadline = React.createClass({
    mixins: [BasicComponentMixin, HeadlineMixin],

    getInitialState() {
        return {
            width: 0, 
            height: 0, 
            scrollIndex: 0
        };
    },

    getDefaultProps() {
        return {
            widthRatio: 4,
            heightRatio: 2
        };
    },

    componentWillMount() {
        this.loadLayout(this.props);
    },

    componentWillReceiveProps(nextProps) {
        this.loadLayout(nextProps);
    },

    componentDidMount() {
        this.startHeadlineTimer(5000);
    },

    render() {
        var layout = this.state.layout;
        var container = <View style={this._headlineStyles()} />;
        var width = this.state.width;
        var height = this.state.width * this.props.heightRatio / this.props.widthRatio;
        
        if (!layout || !layout.subComponents || !width || !height) {
            return container;
        }

        var otherProps = {onDoubleTap:this.props.onDoubleTap};
        return this.renderHeadline(container, width, height, otherProps);
    },

    _headlineStyles() {
        var height = this.state.width * this.props.heightRatio / this.props.widthRatio;
        return {
            width: this.state.width,
            height: height
        };
    }
});

module.exports = WeekHeadline;
