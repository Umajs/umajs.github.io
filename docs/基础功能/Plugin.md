# 插件（Plugin）

## 为什么使用插件

`Uma` 的插件内部机制就是借用了 `Koa` 的中间件，但是仅有中间件无法满足框架的扩展，另外中间件的配置对于业务多样性解决也偏单一。

`Uma` 使用插件进行框架层面拓展，不仅可以使用中间件模式进行扩展，还可以采用复合模式对 context、request、response 进行扩展，还可以对中间件的使用场景进行快速开发，例如 results(返回值)、use(无设定场景)、filter(对符合条件的路由加载中间件)、ignore(对符合条件之外的路由加载中间件)、method(对 MethodType 符合的请求加载中间件)

## 插件使用

### 插件安装

插件可以通过npm方式进行安装。`Uma`官方提供的插件一般使用`@umajs/plugin-`作为前缀，方便我们去搜索。同时`Uma`也可以加载应用目录内的用户自定义插件`plugins`目录。框架在读取配置后，插件的加载优先级如下：

1. {URSA_ROOT}/plugins/{packageName}
2. {URSA_ROOT}/node_modules/{packageName}

### 插件配置

插件一般有默认配置，我们也可以通过自定义配置来覆盖原有配置。

插件的配置在config目录下的`plugin.config.ts`文件中，插件顺序按照 `config/plugin.config.ts` 配置的顺序进行加载。

> 注意：插件的顺序会影响到插件调用其它插件的功能。

#### 插件配置说明
```javascript
export type TPluginConfig = {
    enable?: boolean        // 是否开启插件，默认值false
    name?: string           // 插件名，可选
    packageName?: string    // npm包名，可选，如不填写时，默认值为`@umajs/plugin-$
    options?: object        // 框架会将此配置用参数形式传给插件
}
```
> 当 [pluginName].config.ts 存在时， 会和配置混合后传给插件

#### 插件配置实例
``` javascript
// config/plugin.config.ts

export default {
    'error-handler': {
        enable: true,
        name: 'error-handler',
        packageName: '@umajs/plugin-error-handler',
        options: {
            foo: '1'
        } // 插件的实际配置
    }
}
```

如果只需开启插件或关闭插件，可以简化配置写法：

``` javascript
// config/plugin.config.ts

export default {
    'error-handler': true
}
```

## [插件开发](../插件/dev.md)

