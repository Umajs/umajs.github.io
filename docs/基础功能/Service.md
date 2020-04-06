# 服务（Service）

## 使用
### cli工具在初始化会自动生成service目录，可直接在service目录中编写service
```
app
|- src
  |-middleware
  |-config
  |-controller
  |-service
    |-demo.service.ts
```
### 命名规范: ```*.service.ts```
### 编写service时需继承默认baseService以便我们将service挂载到ctx中

```javascript
import { BaseService } from '@ursajs/core';

export default class demo extends BaseService {
    demoService() {
        return 'this is demo service';
    }
}
```

### controller中使用
- 引入service
- 依赖注入  ```@Service('demo')```
- 注入之后可直接使用无需再进行实例
```javascript
import DemoService from '../service/demo.service';

export default class Index extends  BaseController {

    @Service('demo')
    demoService: DemoService

    @Path('/demo')
    demoService() {
        // return this.demoService.loadAll();
    }
}
```

```javascript
import { BaseService } from '@ursajs/core';

export default class Demp extends BaseService {
    loadAll() {
        // return
    }
}
```

### 在非 Controller 中使用 Service 时，必须传入 ctx 进行实例化才能使用。

```javascript
// plugin
import DemoService from '../service/demo.service';

export default (ursa: Ursa, options: any = {}): Koa.Middleware => {
    return (ctx, next) = > {
        const demoService: DemoService = new DemoService(ctx);
        // ...
    };
};
```

```javascript
// Aspect
import DemoService from '../service/demo.service';

export default class Method implements IAspect {
    async around(proceedPoint: IProceedJoinPoint) {
        const { target,proceed, args } = proceedPoint;

        const demoService: DemoService = new DemoService(target.ctx);

        const result = await proceed(...args);

        return result;
    }
}
```
