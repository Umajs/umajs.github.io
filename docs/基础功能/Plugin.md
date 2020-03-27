# Plugin

## 为什么使用插件

`Ursa`使用插件进行框架层面拓展。

## 插件使用

### 插件安装

插件可以通过npm方式进行安装。`Ursa`的插件一般使用`@ursajs/plugin-`作为前缀，方便我们去搜索。同时`Ursa`也可以加载应用目录内的用户自定义插件`plugins`目录。框架在读取配置后，插件的加载优先级如下：

1. {URSA_ROOT}/plugins/{packageName}
2. {URSA_ROOT}/node_modules/{packageName}

### 插件配置

插件一般有默认配置，我们也可以通过自定义配置来覆盖原有配置。

插件的配置在config目录下的`plugin.config.ts`文件中，插件顺序按照 `config/plugin.config.ts` 配置的顺序进行加载。

#### 插件配置说明
```javascript
export type TPluginConfig = {
    enable?: boolean        // 是否开启插件，默认值false
    name?: string           // 插件名，可选
    packageName?: string    // npm包名，可选，如不填写时，默认值为`@ursajs/plugin-$
    options?: object        // 框架会将此配置用参数形式传给纯中间件形式的插件
}
```

#### 插件配置实例
``` javascript
// config/plugin.config.ts

export default {
    'error-handler': {
        enable: true,
        name: 'error-handler',
        packageName: '@ursajs/plugin-error-handler',
        options: {
            foo: '1'
        } // 插件的实际配置
    }
}
```

如果只需开启插件或关闭插件，可以简化配置写法：

``` javascript
// config/plugin.config.ts

export default {
    'error-handler': true
}
```

## 插件开发
任何 Koa 的中间件都可以直接被框架使用。在实际使用场景中，中间件有全局加载（模版渲染中间件）和局部加载（要忽略的路由规则）的需求。针对这种情况，插件形式的中间件有下面两种形式。

### 纯中间件形式
比如我们想使用模版渲染中间件 koa-views，就可以通过插件形式，示例如下：

```javascript
// app/src/plugins/views/index.ts
import * as Koa from 'koa';
import * as views from 'koa-views';

import { Ursa } from '@ursajs/core';

export default (ursa: Ursa, options: any = {}): Koa.Middleware => {
    // ursa 实例化对象；options 插件配置的 options，等同于 ursa.plugin['error-handler'].options
    return views(options.root, options.opts);
};
```

### 复合插件形式

```javascript
export type TPlugin = {
    use?: {
        handler: (ctx: IContext, next?: Function, options?: any) => any;
    }
    filter?: {
        regexp: RegExp;
        handler: (ctx: IContext, next?: Function, options?: any) => any;
    };
    ignore?: {
        regexp: RegExp;
        handler: (ctx: IContext, next?: Function, options?: any) => any;
    };
    method?: {
        type: RequestMethod | RequestMethod[];
        handler: (ctx: IContext, next?: Function, options?: any) => any;
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
import { Ursa, IContext, TPlugin } from "@ursajs/core";

// 获取插件对应的配置
const { options } = Ursa.config.plugin.demo;

export default <TPlugin>{
    context: {
        test: 123,
    },
    request: {
        fileName: 'a.png'
    },
    use: { // 全局加载
        async handler(ctx: IContext, next: Function, options: any) {
            console.log(ctx.test, ctx.req.fileName, options);    // >> 123 a.png {}
            console.log('use before');
            await next();
            console.log('use after');
        }
    },
    filter: { // 局部加载 仅对/page/路由生效
        regexp: new RegExp(/page/),
        async handler(ctx: IContext, next: Function) {
            console.log('page get before');
            await next();
            console.log('page get after');
        }
    },
    ignore: { // 局部加载 忽略路由/Page/
        regexp: new RegExp(/page/),
        async handler(ctx: IContext, next: Function) {
            console.log('page ignore before');
            await next();
            console.log('page ignore after');
        }
    },
    method: { // 局部加载 仅对method=GET 生效
        type: 'GET',
        async handler(ctx: IContext, next: Function) {
            console.log('method get before');
            await next();
            console.log('method get after');
        }
    }
};
```


