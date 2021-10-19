"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[751],{6366:(s,l,n)=>{n.r(l),n.d(l,{default:()=>m});var e=n(4386),a=n(888);const o=(0,e._)("h1",{id:"框架介绍",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#框架介绍","aria-hidden":"true"},"#"),(0,e.Uk)(" 框架介绍")],-1),r=(0,e._)("p",null,[(0,e._)("img",{src:a,alt:"image"})],-1),c=(0,e._)("p",null,[(0,e._)("code",null,"Umajs"),(0,e.Uk)(" 是基于 Koa2 使用 TypeScript 开发、通过装饰器使用大部分功能的 Web 框架。")],-1),_=(0,e._)("h2",{id:"特性",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#特性","aria-hidden":"true"},"#"),(0,e.Uk)(" 特性")],-1),t=(0,e._)("ul",null,[(0,e._)("li",null,"基于 Koa2，兼容 middleware"),(0,e._)("li",null,"统一响应 (Result)， 让 Controller 响应数据更便捷清晰"),(0,e._)("li",null,"装饰器 (Decorator)，代码组织更优雅方便"),(0,e._)("li",null,"自定义装饰器 (createArgDecorator)， 可以快速的扩展参数装饰器，用于参数校验、参数转换、参数聚合等"),(0,e._)("li",null,[(0,e.Uk)("面向切面 (AOP)，基于装饰器的 "),(0,e._)("code",null,"Aspect"),(0,e.Uk)(" 可以很方便的对任意方法进行拦截、修改等，并且能将中间件转换成 "),(0,e._)("code",null,"Aspect.around"),(0,e.Uk)(" 使用")]),(0,e._)("li",null,"依赖注入 (IOC)，模块依赖不再需要引入和实例化"),(0,e._)("li",null,"插件、切面形式让中间件(Middleware)使用更优雅"),(0,e._)("li",null,"高稳定高性能，单元测试覆盖全"),(0,e._)("li",null,"路由分层，优化路由寻址"),(0,e._)("li",null,"推荐 TS 开发，开发维护更清晰，对于依赖注入的方法使用也更便捷"),(0,e._)("li",null,"统一约束和规范")],-1),p=(0,e._)("h2",{id:"特性展示",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#特性展示","aria-hidden":"true"},"#"),(0,e.Uk)(" 特性展示")],-1),y=(0,e._)("p",null,"下面代码展示了以下几个特性：",-1),F=(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("1、通过 "),(0,e._)("code",null,"createArgDecorator"),(0,e.Uk)(" 创建参数装饰器，对 "),(0,e._)("code",null,"age"),(0,e.Uk)(" 参数进行校验和类型转换")]),(0,e._)("p",null,[(0,e.Uk)("2、controller 通过框架提供的 "),(0,e._)("code",null,"Result"),(0,e.Uk)(" 便捷的响应数据")]),(0,e._)("p",null,[(0,e.Uk)("3、"),(0,e._)("code",null,"Aspect"),(0,e.Uk)(" 通过 "),(0,e._)("code",null,"around"),(0,e.Uk)(" 方法进行方法的拦截，对方法的 "),(0,e._)("code",null,"参数"),(0,e.Uk)(" 进行校验, 对 "),(0,e._)("code",null,"返回值"),(0,e.Uk)(" 进行校验/修改")])],-1),i=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"shiki",style:{"background-color":"#0d1117"}},[(0,e._)("code",null,[(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#8B949E"}},"// index.controller.ts")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FF7B72"}},"import"),(0,e._)("span",{style:{color:"#C9D1D9"}}," Method "),(0,e._)("span",{style:{color:"#FF7B72"}},"from"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#A5D6FF"}},"'./method.aspect'")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FF7B72"}},"import"),(0,e._)("span",{style:{color:"#C9D1D9"}}," { AgeCheck } "),(0,e._)("span",{style:{color:"#FF7B72"}},"from"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#A5D6FF"}},"'./ArgDecorator'")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"@"),(0,e._)("span",{style:{color:"#D2A8FF"}},"Aspect"),(0,e._)("span",{style:{color:"#C9D1D9"}},"(Method) "),(0,e._)("span",{style:{color:"#8B949E"}},"// 可以装饰在类上对所有方法进行装饰")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FF7B72"}},"export"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"default"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"class"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"extends"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#79C0FF"}},"BaseController"),(0,e._)("span",{style:{color:"#FFA657"}}," {")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FFA657"}},"  "),(0,e._)("span",{style:{color:"#8B949E"}},"// @Aspect(Method) // 可以装饰在方法上对单一方法进行装饰")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FFA657"}},"  @"),(0,e._)("span",{style:{color:"#D2A8FF"}},"Path"),(0,e._)("span",{style:{color:"#FFA657"}},"("),(0,e._)("span",{style:{color:"#A5D6FF"}},"'/hello'"),(0,e._)("span",{style:{color:"#FFA657"}},")")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FFA657"}},"  "),(0,e._)("span",{style:{color:"#D2A8FF"}},"index"),(0,e._)("span",{style:{color:"#FFA657"}},"(@"),(0,e._)("span",{style:{color:"#D2A8FF"}},"Query"),(0,e._)("span",{style:{color:"#FFA657"}},"("),(0,e._)("span",{style:{color:"#A5D6FF"}},"'name'"),(0,e._)("span",{style:{color:"#FFA657"}},") name"),(0,e._)("span",{style:{color:"#FF7B72"}},":"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#79C0FF"}},"string"),(0,e._)("span",{style:{color:"#FFA657"}},", @"),(0,e._)("span",{style:{color:"#D2A8FF"}},"AgeCheck"),(0,e._)("span",{style:{color:"#FFA657"}},"("),(0,e._)("span",{style:{color:"#A5D6FF"}},"'age'"),(0,e._)("span",{style:{color:"#FFA657"}},") age"),(0,e._)("span",{style:{color:"#FF7B72"}},":"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#79C0FF"}},"number"),(0,e._)("span",{style:{color:"#FFA657"}},") "),(0,e._)("span",{style:{color:"#C9D1D9"}},"{")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    "),(0,e._)("span",{style:{color:"#FF7B72"}},"return"),(0,e._)("span",{style:{color:"#C9D1D9"}}," Result."),(0,e._)("span",{style:{color:"#D2A8FF"}},"json"),(0,e._)("span",{style:{color:"#C9D1D9"}},"({")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"      name,")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"      age,")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    })")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"  }")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FFA657"}},"}")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"})])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"10"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"11"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"12"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"13"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"14"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"15"),(0,e._)("br")])],-1),D=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"shiki",style:{"background-color":"#0d1117"}},[(0,e._)("code",null,[(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#8B949E"}},"// ArgDecorator.ts")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FF7B72"}},"export"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"const"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#79C0FF"}},"AgeCheck"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"="),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#D2A8FF"}},"createArgDecorator"),(0,e._)("span",{style:{color:"#C9D1D9"}},"(("),(0,e._)("span",{style:{color:"#FFA657"}},"ctx"),(0,e._)("span",{style:{color:"#FF7B72"}},":"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#FFA657"}},"IContext"),(0,e._)("span",{style:{color:"#C9D1D9"}},", "),(0,e._)("span",{style:{color:"#FFA657"}},"ageKey"),(0,e._)("span",{style:{color:"#FF7B72"}},":"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#79C0FF"}},"string"),(0,e._)("span",{style:{color:"#C9D1D9"}},") "),(0,e._)("span",{style:{color:"#FF7B72"}},"=>"),(0,e._)("span",{style:{color:"#C9D1D9"}}," {")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    "),(0,e._)("span",{style:{color:"#FF7B72"}},"let"),(0,e._)("span",{style:{color:"#C9D1D9"}}," age "),(0,e._)("span",{style:{color:"#FF7B72"}},"="),(0,e._)("span",{style:{color:"#C9D1D9"}}," <"),(0,e._)("span",{style:{color:"#7EE787"}},"number"),(0,e._)("span",{style:{color:"#C9D1D9"}},"><"),(0,e._)("span",{style:{color:"#7EE787"}},"unknown"),(0,e._)("span",{style:{color:"#C9D1D9"}},">ctx.query[ageKey];")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    if (age === undefined) return Result.json({")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"        code: "),(0,e._)("span",{style:{color:"#79C0FF"}},"0"),(0,e._)("span",{style:{color:"#C9D1D9"}},",")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"        msg: "),(0,e._)("span",{style:{color:"#A5D6FF"}},"'请加上 age 参数'"),(0,e._)("span",{style:{color:"#C9D1D9"}},",")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    });")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    age = +age;")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    if (Number.isNaN(age) || age < 0 || age > 120) return Result.json({")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"        code: "),(0,e._)("span",{style:{color:"#79C0FF"}},"0"),(0,e._)("span",{style:{color:"#C9D1D9"}},",")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"        msg: "),(0,e._)("span",{style:{color:"#A5D6FF"}},"'请传入正确的 age 参数'"),(0,e._)("span",{style:{color:"#C9D1D9"}},",")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    });")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    return age;")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"});")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"})])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"10"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"11"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"12"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"13"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"14"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"15"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"16"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"17"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"18"),(0,e._)("br")])],-1),u=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"shiki",style:{"background-color":"#0d1117"}},[(0,e._)("code",null,[(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#8B949E"}},"// method.aspect.ts")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FF7B72"}},"import"),(0,e._)("span",{style:{color:"#C9D1D9"}}," { IAspect, IProceedJoinPoint } "),(0,e._)("span",{style:{color:"#FF7B72"}},"from"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#A5D6FF"}},"'@umajs/core'"),(0,e._)("span",{style:{color:"#C9D1D9"}},";")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FF7B72"}},"export"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"default"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"class"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"implements"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#79C0FF"}},"IAspect"),(0,e._)("span",{style:{color:"#FFA657"}}," {")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FFA657"}},"    "),(0,e._)("span",{style:{color:"#FF7B72"}},"async"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#D2A8FF"}},"around"),(0,e._)("span",{style:{color:"#FFA657"}},"(proceedPoint"),(0,e._)("span",{style:{color:"#FF7B72"}},":"),(0,e._)("span",{style:{color:"#FFA657"}}," IProceedJoinPoint) "),(0,e._)("span",{style:{color:"#C9D1D9"}},"{")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"        "),(0,e._)("span",{style:{color:"#FF7B72"}},"const"),(0,e._)("span",{style:{color:"#C9D1D9"}}," { "),(0,e._)("span",{style:{color:"#79C0FF"}},"proceed"),(0,e._)("span",{style:{color:"#C9D1D9"}},", "),(0,e._)("span",{style:{color:"#79C0FF"}},"args"),(0,e._)("span",{style:{color:"#C9D1D9"}}," } "),(0,e._)("span",{style:{color:"#FF7B72"}},"="),(0,e._)("span",{style:{color:"#C9D1D9"}}," proceedPoint;")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"        "),(0,e._)("span",{style:{color:"#8B949E"}},"// 校验参数")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"        "),(0,e._)("span",{style:{color:"#FF7B72"}},"if"),(0,e._)("span",{style:{color:"#C9D1D9"}}," (args["),(0,e._)("span",{style:{color:"#79C0FF"}},"0"),(0,e._)("span",{style:{color:"#C9D1D9"}},"] "),(0,e._)("span",{style:{color:"#FF7B72"}},"!=="),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#A5D6FF"}},"'Umajs'"),(0,e._)("span",{style:{color:"#C9D1D9"}},") "),(0,e._)("span",{style:{color:"#FF7B72"}},"return"),(0,e._)("span",{style:{color:"#C9D1D9"}}," Result."),(0,e._)("span",{style:{color:"#D2A8FF"}},"send"),(0,e._)("span",{style:{color:"#C9D1D9"}},"("),(0,e._)("span",{style:{color:"#A5D6FF"}},"'name 必须为 Umajs'"),(0,e._)("span",{style:{color:"#C9D1D9"}},");")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"        "),(0,e._)("span",{style:{color:"#FF7B72"}},"const"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#79C0FF"}},"result"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"="),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"await"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#D2A8FF"}},"proceed"),(0,e._)("span",{style:{color:"#C9D1D9"}},"("),(0,e._)("span",{style:{color:"#FF7B72"}},"..."),(0,e._)("span",{style:{color:"#C9D1D9"}},"args);")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"        "),(0,e._)("span",{style:{color:"#FF7B72"}},"if"),(0,e._)("span",{style:{color:"#C9D1D9"}}," (result.type "),(0,e._)("span",{style:{color:"#FF7B72"}},"==="),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#A5D6FF"}},"'json'"),(0,e._)("span",{style:{color:"#C9D1D9"}},") {")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"            "),(0,e._)("span",{style:{color:"#8B949E"}},"// 为 JSON 返回值加上时间戳")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"            result.data.time "),(0,e._)("span",{style:{color:"#FF7B72"}},"="),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"new"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#79C0FF"}},"Date"),(0,e._)("span",{style:{color:"#C9D1D9"}},"();")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"        }")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"        "),(0,e._)("span",{style:{color:"#FF7B72"}},"return"),(0,e._)("span",{style:{color:"#C9D1D9"}}," result;")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    }")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FFA657"}},"}")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"})])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"10"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"11"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"12"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"13"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"14"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"15"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"16"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"17"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"18"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"19"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"20"),(0,e._)("br")])],-1),b={},m=(0,n(4110).Z)(b,[["render",function(s,l){return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,r,c,_,t,p,y,F,i,D,u],64)}]])},4389:(s,l,n)=>{n.r(l),n.d(l,{data:()=>e});const e={key:"v-bf328ace",path:"/%E6%96%B0%E6%89%8B%E6%8C%87%E5%8D%97/%E6%A1%86%E6%9E%B6%E4%BB%8B%E7%BB%8D.html",title:"框架介绍",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v2/%E6%96%B0%E6%89%8B%E6%8C%87%E5%8D%97/%E6%A1%86%E6%9E%B6%E4%BB%8B%E7%BB%8D.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"框架介绍"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"特性",slug:"特性",children:[]},{level:2,title:"特性展示",slug:"特性展示",children:[]}],filePathRelative:"新手指南/框架介绍.md",git:{updatedTime:1630481998e3,contributors:[{name:"jiazengp",email:"jiazengp@gmail.com",commits:1}]}}},4110:(s,l)=>{l.Z=(s,l)=>{for(const[n,e]of l)s[n]=e;return s}},888:(s,l,n)=>{s.exports=n.p+"assets/img/UMajs.6dcd2c25.png"}}]);