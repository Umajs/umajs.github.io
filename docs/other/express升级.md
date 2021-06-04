# express老项目升级
> 对于一些历史项目，我们可以采取逐步升级，将umajs集成到express项目中。新的接口和逻辑通过Umajs来写，然后再慢慢将老的逻辑迁移到Umajs中。

## Uma.callback
> 通过uma.callback函数可以获取到框架实例化后的koa.callback.然后采用中间件形式集成到express,connect框架中。

## 接入方式步骤

```ts
//app.ts
import { Uma } from '@umajs/core';
import express from 'express';
(async () => {
    const callback = <any> await Uma.callback(options);
    const app = express();
    /** 老项目中间件加载 **/

    // callback在express放到最后一个中间件中
    app.use((req, res, next) => callback(req, res).then(() => {
        if (res.headersSent) return;
        next();
    }));
})();

```

## 注意事项

1、建议在umajs中间件中重置ctx.status=200状态码。

2、umajs中配置的view插件和express中使用的模板引擎保持一致.或者直接通过插件挂载到context和Result对象

3、express老项目中如果有存储的token和session建议通过umajs自定义插件转移到ctx后再uma逻辑中进行复用

4、在express中使用Umajs时，Umajs中间件的执行顺序需要在express所有中间件之后，如果之前项目有设置404路由需要删掉404中间件。


## 其他方案
> 对于只想使用express框架路线的项目，框架也提供了express版本的Umajs.API几乎与Umajs保持一致，详情查看[umajs-express](https://github.com/Umajs/umajs-express)