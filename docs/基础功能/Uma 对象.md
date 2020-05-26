# Uma 对象

框架向外暴露了 Uma 对象，方便在项目中随时调用

## API

### uma.env

当前运行环境，可以在入口文件中定义

```javascript
// app.ts
import Uma from '@umajs/core';
import { Router } from '@umajs/router';

const uma = Uma.instance({
    Router,
    ROOT: __dirname,
    env: process.argv.indexOf('production') > -1 ? 'production' : 'development',
});

uma.start(8058);
```

### uma.config

当前项目正在使用的配置信息，对 ```config``` 目录下的配置进行处理后得到

```json
{
    "plugin": {
        "logger": true,
        "model": true
    },
    "status": {
        "_404": "[object, function]"
    }
}

```

### uma.options

初始化`Uma`时传入的参数，参数包括

```typescript
type TUmaOption = {
    Router: Function,
    ROOT: string,
    env?: 'development' | 'production' | string,
    configPath?: string,
    proxy?: boolean,
    subdomainOffset?: number,
    jsonpBody?: TJsonpBody,
    bodyParser?: bodyParser.IKoaBodyOptions,
    createServer?: (cb: (req: IncomingMessage | Http2ServerRequest, res: ServerResponse | Http2ServerResponse) => void) => Server,
    beforeLoad?: (uma: Uma) => void,
    afterLoaded?: (uma: Uma) => void,
}
```

### uma.app

`Koa Application`对象的实例，初始化时生成

### uma.start(port: number = 8058)

`Uma`启动方法，需要在初始化时调用，默认端口是8058

```javascript
// app.ts
// ===> 调用start方法启动项目
uma.start(8058);
```

### beforeLoad, afterLoad

服务启动前后的钩子函数，传入当前uma实例

```ts
const uma = Uma.instance({
    ROOT: __dirname,
    beforeLoad(uma: Uma) {
        // 服务开始启动
    },
    afterLoad(uma: Uma) {
        // 服务启动完成
    }
});
```

### 静态方法

#### instance
获取/实例化 Uma，实例化必须传参，获取实例化后的 Uma 不用传参
```js
    static instance(options?: TUmaOption): Uma;
```

#### 获取运行环境
```js
    static get env(): string;
```

获取 app
```js
    static get app(): Koa<Koa.DefaultState, IContext>;
```

获取 server
```js
    static get server(): http.Server | https.Server;
```

#### options
获取运行 Uma 的参数
```js
    static get options(): TUmaOption;
```

#### config
获取所有 Uma 的配置
```js
    static get config(): TConfig;
```

#### 获取插件配置
```js
    static get pluginConfig(): {
        [pluginName: string]: boolean | import("../types/TPluginConfig").TPluginConfig;
    };
```

### 获取生效的plugin key
```js
    static get pluginKeys(): any[];
```

#### 或者某个插件的参数
```js
    static pluginOptions(pluginName: string): object;
```

#### context
获取 context，可以对 context 进行扩展等。实例化之后就是我们使用的 ctx
```js
    static get context(): Koa.BaseContext & IContext;
```

#### controllersInfo
获取实例化之后的controller 信息，包括 controller、route 等
```js
    static get controllersInfo(): IterableIterator<import("..").TControllerInfo>;
```
