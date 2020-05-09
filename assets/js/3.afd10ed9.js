(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{324:function(s,t,a){s.exports=a.p+"assets/img/IOC-di4.9ea3f184.png"},325:function(s,t,a){s.exports=a.p+"assets/img/IOC-di5.47a7709c.png"},326:function(s,t,a){s.exports=a.p+"assets/img/IOC-di3.cb91c852.png"},343:function(s,t,a){"use strict";a.r(t);var n=a(33),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"依赖注入（ioc）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入（ioc）"}},[s._v("#")]),s._v(" 依赖注入（IOC）")]),s._v(" "),n("p",[s._v("IOC(Inversion of Control)控制反转，是面向对象编程中的一种设计原则，可以用来减低计算机代码之间的耦合度。")]),s._v(" "),n("h2",{attrs:{id:"什么是ioc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是ioc"}},[s._v("#")]),s._v(" 什么是IOC")]),s._v(" "),n("p",[n("code",[s._v("控制反转(Inversion of Control)")]),s._v("是一种借助于"),n("code",[s._v("第三方容器")]),s._v("，实现对具有依赖关系的"),n("code",[s._v("对象之间解耦")]),s._v("的一种"),n("code",[s._v("代码设计思路")]),s._v("。")]),s._v(" "),n("p",[s._v("例如我们的程序中有对象A、B、C、D像齿轮一样相互依赖的运作着，如下图：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(324),alt:"images"}})]),s._v(" "),n("p",[s._v("我们可以看到，在这样的齿轮组中，如果有一个齿轮出了问题，就可能会影响到整个齿轮组的正常运转。")]),s._v(" "),n("p",[s._v("为了解决对象之间的耦合度过高的问题，软件专家Michael Mattson提出了IOC理论，借助于“第三方容器”实现对象之间的解耦，如下图：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(325),alt:"images"}})]),s._v(" "),n("p",[s._v("由于引进了中间位置的“第三方容器”，也就是"),n("code",[s._v("IOC容器")]),s._v("，使得A、B、C、D这4个对象没有了耦合关系，齿轮之间的传动全部依靠“第三方容器”了，全部对象的控制权全部上缴给“第三方”IOC容器。")]),s._v(" "),n("p",[s._v("当对象A需要用到对象B的时候，只需要通过IOC容器来获取"),n("code",[s._v("对象B的实例")]),s._v("，而不需要自己创建一个对象B实例。而IOC容器又通过"),n("code",[s._v("依赖注入")]),s._v("的方式将对象A需要的对象B实例"),n("code",[s._v("注入")]),s._v("到对象A中。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(326),alt:"images"}})]),s._v(" "),n("h2",{attrs:{id:"resource、-inject修饰器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resource、-inject修饰器"}},[s._v("#")]),s._v(" @Resource、@Inject修饰器")]),s._v(" "),n("p",[s._v("Uma提供了"),n("code",[s._v("@Resource修饰器")]),s._v("和"),n("code",[s._v("@Inject修饰器")]),s._v("来实现"),n("code",[s._v("IOC容器")]),s._v("和"),n("code",[s._v("依赖注入")])]),s._v(" "),n("p",[s._v("@Resource修饰器可以修饰"),n("code",[s._v("${URSA_ROOT}中的任意class")]),s._v("，被@Resource修饰的class，将会在IOC容器中加入一个该"),n("code",[s._v("class的实例")])]),s._v(" "),n("blockquote",[n("p",[s._v("Resource 装饰器还可以传入参数作为 class 的实例化参数。\nexport declare function Resource(...props: any[]): Function;")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("@"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Resource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("readonly tablename")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("@Inject修饰器可以将"),n("code",[s._v("被@Resource修饰过")]),s._v("的class的"),n("code",[s._v("实例")]),s._v("注入到指定变量中")]),s._v(" "),n("p",[s._v("例如，我们在"),n("code",[s._v("${URSA_ROOT}/model")]),s._v("中创建一个"),n("code",[s._v("user.model.ts")]),s._v("，并使用@Resource将该类实例化后加入到资源容器中")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Resource "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@umajs/core'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ===> @Resource修饰器")]),s._v("\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Resource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserModel")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("findAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("然后我们可以在controller中获取该model实例")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" BaseController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Private"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Param"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" RequestMethod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Inject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Aspect "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@umajs/core'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" UserModel "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../model/user.model'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Index")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BaseController")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ===> 获取实例，实例的名称为@Resource修饰的class所在的文件名")]),s._v("\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Inject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    user"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" UserModel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("testModel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ===> 这里不需要创建user实例，@Resource已经将userModel实例化保存在容器中")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" userList "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("findAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("@Resource可以对"),n("code",[s._v("任何class进行修饰")]),s._v("，即任何资源都可以加入到容器中，然后通过依赖注入的方式使用。")]),s._v(" "),n("p",[n("code",[s._v("@Resource修饰器支持传入参数")]),s._v("，传入的参数将会被作为修饰类实例化时的"),n("code",[s._v("构造参数")]),s._v("使用。")]),s._v(" "),n("h2",{attrs:{id:"service修饰器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#service修饰器"}},[s._v("#")]),s._v(" @Service修饰器")]),s._v(" "),n("p",[s._v("除了提供的 Resource 和 Inject 装饰器，还有一个特殊的依赖注入装饰器 Service，Service 装饰器仅提供  BaseController 使用，为了方便使用，Service 注入中内置了 ctx，框架默认将"),n("code",[s._v("${URSA_ROOT}/service")]),s._v("下的文件实例化加入到"),n("code",[s._v("service的容器中")]),s._v("，当我们使用的时候，通过"),n("code",[s._v("@Service修饰器")]),s._v("去获取该实例。")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" DemoService "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../service/demo.service'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Index")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BaseController")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    demoService"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" DemoService\n\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/demo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("demoService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// return this.demoService.loadAll();")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" BaseService "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@umajs/core'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Demp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BaseService")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// return")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("blockquote",[n("p",[s._v("@Service和@Resource最大的不同是，在@Service修饰的方法中可以访问到"),n("code",[s._v("ctx")]),s._v("上下文对象，而@Resource没有")])]),s._v(" "),n("h3",{attrs:{id:"在非-controller-中使用-service-时，必须传入-ctx-进行实例化才能使用。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在非-controller-中使用-service-时，必须传入-ctx-进行实例化才能使用。"}},[s._v("#")]),s._v(" 在非 Controller 中使用 Service 时，必须传入 ctx 进行实例化才能使用。")]),s._v(" "),n("p",[n("RouterLink",{attrs:{to:"/基础功能/Service.html"}},[s._v("Service 参考文档")])],1)])}),[],!1,null,null,null);t.default=e.exports}}]);