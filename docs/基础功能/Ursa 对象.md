# Ursa对象

框架向外暴露了 Ursa 对象，方便在项目中随时调用

## API

### ursa.env

当前运行环境，可以在入口文件中定义

```javascript
// app.ts
import Ursa from '@ursajs/core';
import { Router } from '@ursajs/router';

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
type TUrsaOption = {
    Router: Function,
    ROOT: string,
    env?: 'development' | 'production' | string,
    configPath?: string,
    proxy?: boolean,
    subdomainOffset?: number,
    jsonpBody?: TJsonpBody,
    bodyParser?: bodyParser.IKoaBodyOptions,
    createServer?: (cb: (req: IncomingMessage | Http2ServerRequest, res: ServerResponse | Http2ServerResponse) => void) => Server,
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

### 静态方法

#### options
获取运行 Ursa 的参数
```js
    static get options(): TUrsaOption;
```

#### config
获取所有 Ursa 的配置
```js
    static get config(): TConfig;
```

#### context
获取 context，可以对 context 进行扩展等。实例化之后就是我们使用的 ctx
```js
    static get context(): Koa.BaseContext & IContext;
```

#### instance
获取/实例化 Ursa，实例化必须传参，获取实例化后的 Ursa 不用传参
```js
    static instance(options?: TUrsaOption): Ursa;
```

#### controllersInfo
获取实例化之后的controller 信息，包括 controller、route 等
```js
    static get controllersInfo(): IterableIterator<TControllerInfo>;
```
