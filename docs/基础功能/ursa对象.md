# ursa对象

框架向外暴露了ursa对象，方便在项目中随时调用

## API

### ursa.env

当前运行环境，可以在入口文件中定义

```javascript
// app.ts
import Ursa from '@ursa/core';
import { Router } from '@ursa/router';

const ursa = Ursa.instance({
    Router,
    ROOT: __dirname,
    env: process.argv.indexOf('production') > -1 ? 'production' : 'development',
});

ursa.start(8058);
```

### ursa.config

当前项目正在使用的配置信息，对config目录下的配置进行处理后得到

```json
{
    "plugin": {
        "logger": true,
        "model": true
    },
    "model": {
        "dialect": "mysql",
        "host": "47.105.94.52",
        "database": "test",
        "username": "root",
        "password": "12345"
    },
    "middleware": [
        {
            "enable": true, 
            "name": "test", 
            "options": {}, 
            "ignore": /aaa/
        }
    ]
}

```

### ursa.options

初始化`Ursa`时传入的参数，参数包括

```typescript
export type TUrsaOption = {
    Router: Function,
    ROOT: string,
    configPath?: string,
    env?: 'development' | 'production' | string,
    beforeLoad?: (ursa: Ursa) => void,
    afterLoaded?: (ursa: Ursa) => void,
}
```

### ursa.app

`Koa Application`对象的实例，初始化时生成

### ursa.start(port: number = 8058)

`Ursa`启动方法，需要在初始化时调用，默认端口是8058

```javascript
// app.ts
// ===> 调用start方法启动项目
ursa.start(8058);
```

### beforeLoad, afterLoad

服务启动前后的钩子函数，传入当前ursa实例

```ts
const ursa = Ursa.instance({
    ROOT: __dirname,
    beforeLoad(ursa: Ursa) {
        // 服务开始启动
    },
    afterLoad(ursa: Ursa) {
        // 服务启动完成
    }
});
```
