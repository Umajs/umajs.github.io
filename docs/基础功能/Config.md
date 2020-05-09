# 配置（Config）

## config loader

Uma的配置通过自动合并app及框架的配置，并根据不同环境读取不同的配置，最终配置通过`Uma.config`获取。

> 插件的配置的 options 最终会和对应名称的 config 合并后传给插件。

### 配置目录

框架默认会加载`${URSA_ROOT}/config`目录下以`xx.config.xx`命名的配置文件

```
|- config
  |- plugin.config.ts
```

你也可以根据需求在实例化时通过`configPath`来指定配置目录

```ts
const uma = Uma.instance({
    Router,
    ROOT: __dirname,
    configPath: path.join(__dirname, 'defaultConfig')
});
```

### cli 初始化配置
通过 ```uma``` 命令可以快速的给工程添加插件或者可发布的插件工程
```shell
$ uma config init [configName]
```

### 配置获取

`xx.config.ts`需 export 一个 default 值，配置将以文件名为 key，default 值为 value 存在实例上，可以通过```Uma```的 config 属性来获取到所有 config 值

``` javascript
Uma.config         // 获取 config 所有数据
Uma.config.status  // 获取 status 配置
```

