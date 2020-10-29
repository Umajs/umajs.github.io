# 模板引擎（Views）

模板引擎插件

## 安装

```shell
$ npm install -S @umajs/plugin-views
```

## 开启

在plugin.config.ts中开启plugin-views插件

```javascript
// plugin.config.ts
export default {
    views: {
        options: <viewsOptions>{
            root: './views',
            opts: {
            },
        }
    }
}
```

### options.root
模板文件的根路径

### options.opts
模板文件插件配置
```js
type TKoaViewsOptions = {
    /*
    * autoRender the result into ctx.body, defaults to true
    */
    autoRender?: boolean,
    /*
    * default extension for your views
    */
    extension?: string,
    /*
    * these options will get passed to the view engine
    */
    options?: any,
    /*
    * map a file extension to an engine
    */
    map?: any,
    /*
    * replace consolidate as default engine source
    */
    engineSource?: any,
}
```
