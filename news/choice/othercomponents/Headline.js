'use strict';

var React = require('react-native');
var HeadlineMixin = require('../Slate/HeadlineMixin');
var FirstLevelComponentMixin = require('../Slate/FirstLevelComponentMixin');

var Headline = React.createClass({
    mixins: [HeadlineMixin, FirstLevelComponentMixin],

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
        this.startHeadlineTimer(3000);
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return this.shouldSlateComponentUpdate(nextProps, nextState);
    },

    render() {
        var container = this.renderRNCellView(this._headlineStyles());
        var width = this.state.width;
        var height = this.state.height;
        
        return this.renderHeadline(container, width, height);
    },

    _headlineStyles() {
        return {
            position: 'absolute',
            backgroundColor: 'lightgray',
            top: 0,
            left: 0,
            width: this.state.width,
            height: this.state.height
        };
    }
});

module.exports = Headline;
