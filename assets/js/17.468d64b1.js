(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{474:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"memcached-应用指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memcached-应用指南"}},[t._v("#")]),t._v(" Memcached 应用指南")]),t._v(" "),s("h2",{attrs:{id:"一、memcached-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、memcached-简介"}},[t._v("#")]),t._v(" 一、Memcached 简介")]),t._v(" "),s("p",[t._v("Memcached 是一个自由开源的，高性能，分布式内存对象缓存系统。")]),t._v(" "),s("p",[t._v("Memcached 是一种基于内存的 key-value 存储，用来存储小块的任意数据（字符串、对象）。这些数据可以是数据库调用、API 调用或者是页面渲染的结果。")]),t._v(" "),s("p",[t._v("Memcached 简洁而强大。它的简洁设计便于快速开发，减轻开发难度，解决了大数据量缓存的很多问题。它的 API 兼容大部分流行的开发语言。本质上，它是一个简洁的 key-value 存储系统。")]),t._v(" "),s("h3",{attrs:{id:"memcached-特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memcached-特性"}},[t._v("#")]),t._v(" Memcached 特性")]),t._v(" "),s("p",[t._v("memcached 作为高速运行的分布式缓存服务器，具有以下的特点。")]),t._v(" "),s("ul",[s("li",[t._v("协议简单")]),t._v(" "),s("li",[t._v("基于 libevent 的事件处理")]),t._v(" "),s("li",[t._v("内置内存存储方式")]),t._v(" "),s("li",[t._v("memcached 不互相通信的分布式")])]),t._v(" "),s("h2",{attrs:{id:"二、memcached-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、memcached-命令"}},[t._v("#")]),t._v(" 二、Memcached 命令")]),t._v(" "),s("p",[t._v("可以通过 telnet 命令并指定主机ip和端口来连接 Memcached 服务。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("telnet 127.0.0.1 11211\n\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is '^]'.\nset foo 0 0 3                                                   保存命令\nbar                                                             数据\nSTORED                                                          结果\nget foo                                                         取得命令\nVALUE foo 0 3                                                   数据\nbar                                                             数据\nEND                                                             结束行\nquit                                                            退出\n")])])]),s("h2",{attrs:{id:"三、java-连接-memcached"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、java-连接-memcached"}},[t._v("#")]),t._v(" 三、Java 连接 Memcached")]),t._v(" "),s("p",[t._v("使用 Java 程序连接 Memcached，需要在你的 classpath 中添加 Memcached jar 包。")]),t._v(" "),s("p",[t._v("本站 jar 包下载地址："),s("a",{attrs:{href:"https://www.runoob.com/try/download/spymemcached-2.10.3.jar",target:"_blank",rel:"noopener noreferrer"}},[t._v("spymemcached-2.10.3.jar"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("Google Code jar 包下载地址："),s("a",{attrs:{href:"http://code.google.com/p/spymemcached/downloads/list",target:"_blank",rel:"noopener noreferrer"}},[t._v("spymemcached-2.10.3.jar"),s("OutboundLink")],1),t._v("（需要科学上网）。")]),t._v(" "),s("p",[t._v("以下程序假定 Memcached 服务的主机为 127.0.0.1，端口为 11211。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("memcached"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemcachedClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemcachedJava")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本地连接 Memcached 服务")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemcachedClient")]),t._v(" mcc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemcachedClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InetSocketAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11211")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection to server sucessful."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         \n         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭连接")]),t._v("\n         mcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         \n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://memcached.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Memcached 官网"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/memcached/memcached/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Memcached Github"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.runoob.com/memcached/memcached-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Memcached 教程"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);