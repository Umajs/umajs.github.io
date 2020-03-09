# Middleware
Ursa 基于 Koa2，兼容 middleware。在已有中间件的基础上提供两种使用形式：插件形式 、 AOP形式。

## 插件形式
任何 Koa 的中间件都可以直接被框架使用。在实际使用场景中，中间件有全局加载（模版渲染中间件）和局部加载（要忽略的路由规则）的需求。针对这种情况，插件形式的中间件有两种使用形式。

### 全局加载中间件
比如我们想使用模版渲染中间件 koa-views，就可以通过插件形式，示例如下：

```javascript
// app/src/plugins/views/index.ts
import * as Koa from 'koa';
import * as views from 'koa-views';

import { Ursa } from '@ursa/core';

export default (ursa: Ursa, options: any = {}): Koa.Middleware => {
    return views(options.root, options.opts);
};
```

### 局部加载中间件

插件提供`filter、ignore、method`三种局部加载中间件的配置形式，具体配置局部加载规则如下：
- filter 通过 `regexp: RegExp;` 属性配置局部加载规则，仅对匹配的规则生效
- ignore 通过 `regexp: RegExp;` 属性配置局部加载规则，忽略匹配到的规则
- method 通过 `type: RequestMethod | RequestMethod[];` 属性配置局部加载规则

```javascript
import { IContext, TPlugin } from "@ursa/core";

export default <TPlugin>{
    context: {
        test: 123,
    },
    use: { // 全局加载
        async handler(ctx: IContext, next: Function) {
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

插件形式的中间件按照 `config/plugin.config.ts` 配置的顺序进行加载。

## AOP形式

Ursa 内置了将中间件转换为切面的方法 `middlewareToAround`，因此我们可以以AOP形式使用中间件，使用示例如下：

```javascript
// app/src/aspect/mw.aspect.ts 定义AOP
import { IAspect, middlewareToAround } from '@ursa/core';

const mwFn = function() { // 定义中间件
  return async (ctx, next) => {
    console.log("****** mw before ******");
    await next();
    console.log("****** mw after *******");
  }
}

// 将中间件转换为切面方法
export default class implements IAspect {
    async around({ target, proceed, args }) {
        return await middlewareToAround(mwFn())({target, proceed, args});
    }
}

// app/src/controller/index.controller.ts AOP形式使用中间件
import * as path from 'path';
import { BaseController, Path, Aspect, Result } from '@ursa/core';

export default class Index extends BaseController {
    @Aspect.around('mw')
    @Path('/page')
    page() {
       console.log(this.userService.getDefaultUserAge());
       return Result.view('index.html', { test: 3 })
    }
}
```

对于有局部加载需求的中间件，使用AOP形式代码结构更清晰，可读性更强，可以在`controller`中直观的看到当前中间件的使用。