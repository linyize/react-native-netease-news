'use strict';

var React = require('react-native');
var { RefreshControl } = React;
var QuiltView = require('react-native-quiltview');
var { Section } = QuiltView;
var BasicMixin = require('./BasicMixin');
var ContainerMixin = require('./ContainerMixin');
var TestMixin = require('./TestMixin');
var SlateApi = React.NativeModules.SlateApiManager;
var QuiltViewManager = React.NativeModules.RNQuiltViewManager;

/*
 * QuiltView主界面的抽象
 * 
 */
var MainMixin = {
    mixins: [BasicMixin, ContainerMixin, TestMixin],
    layoutURL: "http://7xpvul.com2.z0.glb.qiniucdn.com/layout12.json?t=1",

    componentWillMount() {

        var debug = false;
        if (debug) {
            // 加载假数据
            this.setFakeLayout();
            return;
        }

        // 加载线上数据
        this.loadLayout(this.layoutURL);
    },

    // 渲染QuiltView
    renderQuiltView(ref: String, style: Object) {
        var refreshControl = <RefreshControl
                            key="refresh"
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh}
                            tintColor="blue"
                            title="下拉刷新"/>;

        var container = <QuiltView style={style}
                                    refreshControl={refreshControl}
                                    pagingEnabled={false}
                                    horizontal={false} 
                                    bounces={true}/>;
        var width = this.state.width;
        var height = this.state.height;

        var sectionContainer = <Section key="section0"/>;
        var section = this.renderSlateContainer(sectionContainer, width, height, {onCellSizeChange: this.onCellSizeChange});

        return React.cloneElement(container, {ref}, [section]);
    },

    onCellSizeChange() {
        QuiltViewManager.invalidateLayout(React.findNodeHandle(this));
    },

    // 响应下拉刷新动作
    onRefresh() {
        this.setState({isRefreshing: true});
        this.layoutURL = "http://7xpvul.com2.z0.glb.qiniucdn.com/layout13.json?t=12";
        this.loadLayout(this.layoutURL);
    },

    // 加载布局数据
    loadLayout(url: String) {
        return this._loadLayoutWithSlateApi(url);
    },

    // 使用slate原生接口加载布局数据
    _loadLayoutWithSlateApi(url: String) {
        SlateApi.fetchJSON(url, (error, json)=>{
            if (error) {
                console.warn(error);
            }
            else {
                var layout = json;
                SlateApi.fetchJSON(layout.mapping, (error, json)=>{
                    if (error) {
                        console.warn(error);
                    }
                    else {
                        var mapping = json;
                        this.setState({layout, mapping, isRefreshing: false});
                    }
                });
            }
        });
    },

    // 使用js fetch加载布局数据
    _loadLayoutWithFetch(url: String) {
        // 用js fetch请求
        fetch(url)
        .then((response) => response.json())
        .then((responseJSON) => {
            var layout = responseJSON;
            if (!layout.mapping) {
                return false;
            }
            fetch(layout.mapping)
            .then((response) => response.json())
            .then((responseJSON) => {
                var mapping = responseJSON;
                this.setState({layout, mapping, isRefreshing: false});
            })
            .catch((error) => console.warn(error));
        })
        .catch((error) => console.warn(error));
    }
};

module.exports = MainMixin;
