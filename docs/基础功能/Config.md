# Config

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

### 配置写法

`xx.config.ts`需export一个default值，配置将以文件名为key，default值为value存在实例上，可以通过实例的config属性来获取到所有config值

``` javascript
const ursa = Ursa.instance({
    Router,
    ROOT: __dirname,
});

ursa.config // 配置数据
```
