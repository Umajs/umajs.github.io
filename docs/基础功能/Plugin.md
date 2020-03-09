# Plugin

## 为什么使用插件

`Ursa`使用插件进行框架层面拓展。

## 插件使用

### 插件安装

插件可以通过npm方式进行安装。`Ursa`的插件一般使用`@ursajs/plugin-`作为前缀，方便我们去搜索。同时`Ursa`也可以加载应用目录内的用户自定义插件`plugins`目录。框架在读取配置后，插件的加载优先级如下：

1. {URSA_ROOT}/plugins/{packageName}
2. {URSA_ROOT}/node_modules/{packageName}

### 插件配置

插件一般有默认配置，我们也可以通过自定义配置来覆盖原有配置。

插件的配置可以放在config目录下的`plugin.config.ts`文件中

``` javascript
// config/plugin.config.ts

export default {
    'error-handler': {
        enable: true, // 是否开启插件，默认值false
        name: 'error-handler', // 插件名，可选
        packageName: '@ursajs/plugin-error-handler', // npm包名，可选，如不填写时，默认值为`@ursajs/plugin-${name}`
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