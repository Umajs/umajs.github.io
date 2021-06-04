# 插件开发
任何 Koa 的中间件都可以直接被框架使用。在实际使用场景中，中间件有全局加载（模版渲染中间件）和局部加载（要忽略的路由规则）的需求。针对这种情况，插件形式的中间件有下面两种形式。

## 初始化插件
通过 ```uma``` 命令可以快速的给工程添加插件或者可发布的插件工程
```shell
$ uma plugin init [pluginName]
```

## 纯中间件形式
比如我们想使用模版渲染中间件 koa-views，就可以通过插件形式，示例如下：

```javascript
// app/src/plugins/views/index.ts
import * as Koa from 'koa';
import * as views from 'koa-views';

import { Uma } from '@umajs/core';

type TView = {
    root: string
    opts: {
        // views options
    }
};

// options 是插件的配置及 [pluginName].config.ts 的配置结合配置
export default (uma: Uma, options: TView = {}): Koa.Middleware => {
    // uma 实例化对象；options 插件配置的 options，等同于 uma.plugin['error-handler'].options
    return views(options.root, options.opts);
};
```

## 复合插件形式

```javascript
export type TPlugin = {
    use?: {
        handler: (ctx: IContext, next?: Function) => any;
    }
    filter?: {
        regexp: RegExp;
        handler: (ctx: IContext, next?: Function) => any;
    };
    ignore?: {
        regexp: RegExp;
        handler: (ctx: IContext, next?: Function) => any;
    };
    method?: {
        type: RequestMethod | RequestMethod[];
        handler: (ctx: IContext, next?: Function) => any;
    };
    results?: { [key: string]: any };
    context?: { [key: string]: any };
    request?: { [key: string]: any };
    response?: { [key: string]: any };
}
```
复合插件形式不仅可以用中间件进行扩展，还可以对我们常用的 Context、Request、Response 进行扩展，扩展之后我们就可以在代码中使用 ctx、req、res 中使用我们扩展的方法。

复合插件形式还提供了`use、filter、ignore、method`四种局部加载中间件的配置形式，具体配置局部加载规则如下：
- use 直接使用已有的中间件
- filter 通过 `regexp: RegExp;` 属性配置局部加载规则，仅对匹配的规则生效
- ignore 通过 `regexp: RegExp;` 属性配置局部加载规则，忽略匹配到的规则
- method 通过 `type: RequestMethod | RequestMethod[];` 属性配置局部加载规则

```javascript
// plugins/demo.plugin.ts
import { Uma, IContext, TPlugin } from "@umajs/core";

export default (uma: Uma, options: any = {}): TPlugin => {
    return {
        context: {
            test: 123,          // 给 ctx 加上 test
        },
        request: {
            fileName: 'a.png'   // 给 request 加上 fileName
        },
        use: { // 全局加载
            async handler(ctx: IContext, next: Function) {
                console.log(ctx.test, ctx.req.fileName, options);    // >> 123 a.png {}
                console.log('use before');
                await next();
                console.log('use after');
            },
        },
        filter: { // 局部加载 仅对/page/路由生效
            regexp: new RegExp(/page/),
            async handler(ctx: IContext, next: Function) {
                console.log('page get before');
                await next();
                console.log('page get after');
            },
        },
        ignore: { // 局部加载 忽略路由/Page/
            regexp: new RegExp(/page/),
            async handler(ctx: IContext, next: Function) {
                console.log('page ignore before');
                await next();
                console.log('page ignore after');
            },
        },
        method: { // 局部加载 仅对method=GET 生效
            type: 'GET',
            async handler(ctx: IContext, next: Function) {
                console.log('method get before');
                await next();
                console.log('method get after');
            },
        },
    },
};
```

## npm包名规范
> 欢迎大家在社区中发布支持Umajs的插件，为保持插件生态的统一。我们推荐使用`umajs-plugin-xxx`的命名方式发布自定义的插件包到npm中。以方便其他更多人搜索和使用。