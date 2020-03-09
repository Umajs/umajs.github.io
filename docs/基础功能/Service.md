# Service

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
// /src/service/demo.service.ts 

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
// /src/controller/index.ts
import demo from '../service/demo.service';

export default class Index extends Controller {

    @Service('demo')
    demo: demo

    @Path('/demo')
    demoService() {
        console.log(this.demo.demoService())
        return this.demo.demoService();
    }
}
```

### 非 controller 中使用

因为 service 是挂载在 ctx.services 中的，因为只要有 ctx 的地方就能调用 service，例如在 Aspect.arround 中，可以使用 target.ctx.services.userService 来调用 userService。