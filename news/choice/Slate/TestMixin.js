'use strict';

var React = require('react-native');

/*
 * QuiltView主界面的抽象
 * 
 */
var TestMixin = {

    setFakeNeteaseLayout() {
        // 伪造数据
        this.setState({"layout" : {
            "nodeName" : "网易新闻",
            "components" : [{
                    "componentType" : "headline",
                    "offset" : 1,
                    "subComponents" : [{
                        "componentType" : "headlineCell",
                        "leaf" : { 
                            "leafName" : "leaf_1_1",
                            "updateTime" : "1448935284",
                            "title" : "“双12”袭来　丰田RAV4再掀购车狂潮",
                            "link" : "http://auto.ycwb.com/2015-12/14/content_20991507.htm",
                            "picture" : "http://img.ycwb.com/auto/attachement/jpg/site2/20151214/448a5bb0f5b617d8c39801.jpg"
                        }
                    },
                    {
                        "componentType" : "headlineCell",
                        "leaf" : { 
                            "leafName" : "leaf_1_2",
                            "updateTime" : "1448935284",
                            "title" : "iPhone 7五大传闻曝光 6s用户已哭瞎",
                            "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                            "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                        }
                    },
                    {
                        "componentType" : "headlineCell",
                        "leaf" : { 
                            "leafName" : "leaf_1_3",
                            "updateTime" : "1448935284",
                            "title" : "奥地利警方逮捕2名嫌犯 调查其与巴黎恐袭联系",
                            "link" : "http://news.sohu.com/20151216/n431547423.shtml",
                            "picture" : "http://photocdn.sohu.com/20151216/Img431547424.jpg"
                        }
                    }]
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 2,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://photocdn.sohu.com/20151216/Img431547424.jpg"
                    }
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 3,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 4,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 5,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 6,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 7,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                },
                {
                    "componentType" : "album",
                    "offset" : 100,
                    "leaf" : { 
                        "leafName" : "leaf_4",
                        "updateTime" : "1448935284",
                        "title" : "习大大参观百度展台 李彦宏介绍无人车和百度翻译",
                        "link" : "http://tech.ifeng.com/a/20151216/41524711_0.shtml",
                    },
                    "subComponents" : [{
                        "componentType" : "albumCell",
                        "leaf" : { 
                            "leafName" : "leaf_4_1",
                            "updateTime" : "1448935284",
                            "picture" : "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2983569372,3003115457&fm=80",
                        },
                    },
                    {
                        "componentType" : "albumCell",
                        "leaf" : { 
                            "leafName" : "leaf_4_2",
                            "updateTime" : "1448935284",
                            "picture" : "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3478739337,2534079207&fm=80",
                        },
                    },
                    {
                        "componentType" : "albumCell",
                        "leaf" : { 
                            "leafName" : "leaf_4_3",
                            "updateTime" : "1448935284",
                            "picture" : "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3262148077,2591697069&fm=80",
                        }, 
                    }],
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 8,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 9,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 10,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 11,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 12,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 13,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 14,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 15,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "习近平两会为这五种人\"撑腰\"",
                        "summary" : "为民营企业家\"撑腰\"，为敢担当善作为的干部\"撑腰\"。",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                }
                ]
            }, 
            "mapping" : {
                "weekHeadlineCell" : {
                    "image" : "leaf.picture",
                    "title" : "leaf.title",
                    "url" : "leaf.link"
                },
                "weekNormal" : {
                    "title" : "leaf.title",
                    "image" : "leaf.picture",
                    "url" : "leaf.link"
                },
                "album" : {
                    "title" : "leaf.title",
                    "url" : "leaf.link"
                },
                "albumCell" : {
                    "image" : "leaf.picture"
                },
                "headlineCell" : {
                    "image" : "leaf.picture",
                    "title" : "leaf.title",
                    "url" : "leaf.link"
                },
                "normalCell" : {
                    "title" : "leaf.title",
                    "subtitle" : "leaf.summary",
                    "image" : "leaf.picture",
                    "url" : "leaf.link"
                }
            }
        });
    },
    
    setFakeLayout() {
        // 伪造数据
        this.setState({"layout" : {
            "nodeName" : "商周精选",
            "components" : [{
                    "componentType" : "week",
                    "offset" : 1,
                    "updateTime" : "1448935284",
                    "subComponents" : [{
                        "componentType" : "weekHeadline",
                        "subComponents" : [{
                            "componentType" : "weekHeadlineCell",
                            "leaf" : { 
                                "leafName" : "leaf_1_1_1",
                                "updateTime" : "1448935284",
                                "title" : "千年古刹的品牌奥秘",
                                "link" : "http://mobile.bbwc.cn/article/10062461/1/",
                                "picture" : "http://s.qiniu.bb.bbwc.cn/issue_0/category/2016/0111/5693521c22330_640x0.jpg"
                            }
                        },
                        {
                            "componentType" : "weekHeadlineCell",
                            "leaf" : { 
                                "leafName" : "leaf_1_1_2",
                                "updateTime" : "1448935284",
                                "title" : "奥巴马做客谐星乘客买咖啡",
                                "link" : "http://mobile.bbwc.cn/article/10062391/1/",
                                "picture" : "http://s.qiniu.bb.bbwc.cn/issue_0/category/2016/0107/568e08b2b6a78_640x0.jpg"
                            }
                        },
                        {
                            "componentType" : "weekHeadlineCell",
                            "leaf" : { 
                                "leafName" : "leaf_1_1_3",
                                "updateTime" : "1448935284",
                                "title" : "石油巨无霸沙特阿美考虑上市",
                                "link" : "http://mobile.bbwc.cn/article/10062447/1/",
                                "picture" : "http://s.qiniu.bb.bbwc.cn/issue_0/category/2016/0111/56931e7cbf35b_640x0.jpg"
                            }
                        }]
                    },
                    {
                        "componentType" : "weekNormal",
                        "leaf" : { 
                            "leafName" : "leaf_1_2",
                            "updateTime" : "1448935284",
                            "title" : "iPhone 7五大传闻曝光 6s用户已哭瞎",
                            "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                            "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                        }
                    },
                    {
                        "componentType" : "weekNormal",
                        "leaf" : { 
                            "leafName" : "leaf_1_3",
                            "updateTime" : "1448935284",
                            "title" : "奥地利警方逮捕2名嫌犯 调查其与巴黎恐袭联系",
                            "link" : "http://news.sohu.com/20151216/n431547423.shtml",
                            "picture" : "http://photocdn.sohu.com/20151216/Img431547424.jpg"
                        }
                    }]
                },
                {
                    "componentType" : "headline",
                    "offset" : 1,
                    "subComponents" : [{
                        "componentType" : "headlineCell",
                        "leaf" : { 
                            "leafName" : "leaf_1_1",
                            "updateTime" : "1448935284",
                            "title" : "“双12”袭来　丰田RAV4再掀购车狂潮",
                            "link" : "http://auto.ycwb.com/2015-12/14/content_20991507.htm",
                            "picture" : "http://img.ycwb.com/auto/attachement/jpg/site2/20151214/448a5bb0f5b617d8c39801.jpg"
                        }
                    },
                    {
                        "componentType" : "headlineCell",
                        "leaf" : { 
                            "leafName" : "leaf_1_2",
                            "updateTime" : "1448935284",
                            "title" : "iPhone 7五大传闻曝光 6s用户已哭瞎",
                            "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                            "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                        }
                    },
                    {
                        "componentType" : "headlineCell",
                        "leaf" : { 
                            "leafName" : "leaf_1_3",
                            "updateTime" : "1448935284",
                            "title" : "奥地利警方逮捕2名嫌犯 调查其与巴黎恐袭联系",
                            "link" : "http://news.sohu.com/20151216/n431547423.shtml",
                            "picture" : "http://photocdn.sohu.com/20151216/Img431547424.jpg"
                        }
                    }]
                },
                {
                    "componentType" : "album",
                    "offset" : 4,
                    "leaf" : { 
                        "leafName" : "leaf_4",
                        "updateTime" : "1448935284",
                        "title" : "习大大参观百度展台 李彦宏介绍无人车和百度翻译",
                        "link" : "http://tech.ifeng.com/a/20151216/41524711_0.shtml",
                    },
                    "subComponents" : [{
                        "componentType" : "albumCell",
                        "leaf" : { 
                            "leafName" : "leaf_4_1",
                            "updateTime" : "1448935284",
                            "picture" : "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2983569372,3003115457&fm=80",
                        },
                    },
                    {
                        "componentType" : "albumCell",
                        "leaf" : { 
                            "leafName" : "leaf_4_2",
                            "updateTime" : "1448935284",
                            "picture" : "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3478739337,2534079207&fm=80",
                        },
                    },
                    {
                        "componentType" : "albumCell",
                        "leaf" : { 
                            "leafName" : "leaf_4_3",
                            "updateTime" : "1448935284",
                            "picture" : "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3262148077,2591697069&fm=80",
                        }, 
                    }],
                },
                {
                    "componentType" : "normalCell",
                    "offset" : 2,
                    "updateTime" : "1448935284",
                    "leaf" : { 
                        "leafName" : "leaf_2_2",
                        "updateTime" : "1448935284",
                        "title" : "iPhone 7五大传闻曝光 6s用户已哭瞎",
                        "link" : "http://finance.eastmoney.com/news/1670,20151214575421513.html",
                        "picture" : "http://z1.dfcfw.com/2015/12/14/201512141343461702074190.jpg"
                    }
                }]
            }, 
            "mapping" : {
                "weekHeadlineCell" : {
                    "image" : "leaf.picture",
                    "title" : "leaf.title",
                    "url" : "leaf.link"
                },
                "weekNormal" : {
                    "title" : "leaf.title",
                    "image" : "leaf.picture",
                    "url" : "leaf.link"
                },
                "album" : {
                    "title" : "leaf.title",
                    "url" : "leaf.link"
                },
                "albumCell" : {
                    "image" : "leaf.picture"
                },
                "headlineCell" : {
                    "image" : "leaf.picture",
                    "title" : "leaf.title",
                    "url" : "leaf.link"
                },
                "normalCell" : {
                    "title" : "leaf.title",
                    "image" : "leaf.picture",
                    "url" : "leaf.link"
                }
            }
        });
    }
};

module.exports = TestMixin;
