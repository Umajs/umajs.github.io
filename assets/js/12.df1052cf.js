(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{165:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[s._v("#")]),s._v(" Config")]),s._v(" "),t("h2",{attrs:{id:"config-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-loader","aria-hidden":"true"}},[s._v("#")]),s._v(" config loader")]),s._v(" "),t("p",[s._v("Ursa的配置通过自动合并app及框架的配置，并根据不同环境读取不同的配置，最终配置通过"),t("code",[s._v("ursa.config")]),s._v("获取。")]),s._v(" "),t("h3",{attrs:{id:"配置目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置目录")]),s._v(" "),t("p",[s._v("框架默认会加载"),t("code",[s._v("${URSA_ROOT}/config")]),s._v("目录下以"),t("code",[s._v("xx.config.xx")]),s._v("命名的配置文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("|- config\n  |- middleware.config.ts\n  |- plugin.config.ts\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("你也可以根据需求在实例化时通过"),t("code",[s._v("configPath")]),s._v("来指定配置目录")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ursa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Ursa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("instance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Router"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ROOT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" __dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    configPath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'defaultConfig'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"配置写法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置写法","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置写法")]),s._v(" "),t("p",[t("code",[s._v("xx.config.ts")]),s._v("需export一个default值，配置将以文件名为key，default值为value存在实例上，可以通过实例的config属性来获取到所有config值")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ursa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Ursa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("instance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Router"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ROOT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" __dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nursa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置数据")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])},[],!1,null,null,null);a.default=e.exports}}]);