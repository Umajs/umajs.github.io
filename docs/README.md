---
home: true
# heroImage: ./assets/images/UMajs.png
heroText: 基于Typescript开发的轻量级Node.js web框架
tagline: 从 2018 年立项至今，Umajs 团队持续的对框架打磨、迭代，在生产环境稳定运行近两年后，于 2020 年 8 月份对外开源
actionText: 开始学习 →
actionLink: /新手指南/快速开始
features:
- title: 插件
  details: 插件支持Koa社区中间件，提供cli快速开发中间件和插件扩展。
- title: 装饰器
  details: 框架提供了常用装饰器，让开发者代码组织更优雅方便。丰富的扩展参数装饰器，用于参数校验、参数转换、参数聚合等。
- title: AOP和IOC
  details: 基于装饰器的 Aspect 可以很方便的对任意方法进行拦截、修改等。 提供了@Resource修饰器和@Inject修饰器来实现IOC容器和依赖注入。
- title: 统一响应 (Result)
  details: 让响应数据更便捷清晰和统一
- title: 稳定
  details: 高稳定高性能，单元测试覆盖全
- title: 其他
  details: 全面拥抱TS开发，完善的类型校验，开发维护更清晰；框架和SSR结合，提供前后端同构的最佳实践方案umajs-react-ssr

footer: MIT Licensed | Copyright © 2021
---

```ts
// src/app.ts
import Uma from '@umajs/core';
import { Router } from '@umajs/router';

const uma = Uma.instance({
    Router,
    ROOT: __dirname,
    env: process.argv.indexOf('--production') > -1 ? 'production' : 'development',
});

uma.start(8058);
```

```ts
// src/controller/test.controller.ts
import { BaseController, Path ,Result} from '@umajs/core';

@Path('/page')		// 根路由
export default class Test extends BaseController {

    @Path()			// 路由： /page
    @Path('/home')	// 路由： /page/home
    index() {
        return Result.send('this is test/index router');
    }
}
```