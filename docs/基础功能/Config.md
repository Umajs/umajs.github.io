# 配置（Config）

## config loader

Ursa的配置通过自动合并app及框架的配置，并根据不同环境读取不同的配置，最终配置通过`ursa.config`获取。

### 配置目录

框架默认会加载`${URSA_ROOT}/config`目录下以`xx.config.xx`命名的配置文件

```
|- config
  |- middleware.config.ts
  |- plugin.config.ts
```

你也可以根据需求在实例化时通过`configPath`来指定配置目录

```ts
const ursa = Ursa.instance({
    Router,
    ROOT: __dirname,
    configPath: path.join(__dirname, 'defaultConfig')
});
```

### cli 初始化配置
通过 ```ursa``` 命令可以快速的给工程添加插件或者可发布的插件工程
```shell
$ ursa config init [configName]
```

### 配置获取

`xx.config.ts`需 export 一个 default 值，配置将以文件名为 key，default 值为 value 存在实例上，可以通过```Ursa```的 config 属性来获取到所有 config 值

``` javascript
Ursa.config         // 获取 config 所有数据
Ursa.config.status  // 获取 status 配置
```

