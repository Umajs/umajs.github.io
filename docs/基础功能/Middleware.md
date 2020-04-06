# 中间件（Middleware）
Ursa 基于 Koa2，兼容 middleware。在已有中间件的基础上提供两种使用形式：插件形式、AOP 形式。

## 插件形式
[Plugin 参考文档](./Plugin.md#插件开发)


## AOP 装饰器形式
中间件和 Aspect.around 方式很相似，都是包裹异步方法。中间件是 next，around 是 proceed，但是他们有一些区别：
> 1、中间件不能处理参数，不能处理返回结果
>
> 2、切面可以对参数进行修改、判断、注入等操作，还可以对返回结果进行修改、校验、统一封装等操作


Ursa 内置了将中间件转换为切面的方法 `middlewareToAround`，因此我们可以以 AOP 的装饰器形式使用中间件，使用示例如下：

```javascript
// app/src/controller/index.controller.ts AOP形式使用中间件
import * as path from 'path';
import { BaseController, Path, Aspect, Result } from '@ursajs/core';

export default class Index extends BaseController {
    @Aspect.around('mw')
    @Path('/page')
    page() {
       console.log(this.userService.getDefaultUserAge());
       return Result.view('index.html', { test: 3 })
    }
}

// app/src/aspect/mw.aspect.ts 定义AOP
import { IAspect, middlewareToAround } from '@ursajs/core';

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
```

对于有局部加载需求的中间件，使用AOP形式代码结构更清晰，可读性更强，可以在`controller`中直观的看到当前中间件的使用。