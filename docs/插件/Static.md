# 静态资源（Static）

静态资源返回插件

## 安装

```shell
$ npm install -S @umajs/plugin-static
```

## 开启

在plugin.config.ts中开启plugin-status插件

```javascript
// plugin.config.ts
export default {
    static: {
        options: <staticOptions>{
            root: './static',
            opts: {
            },
        }
    }
}
```

> 具体开启方式请参考[plugin](../基础功能/Plugin.md)一节中的配置方式

### options.root
静态资源的根路径

### options.opts
静态资源插件配置
```js
type staticOptions = {
    /** If true, serves after return next(), allowing any downstream middleware to respond first. */
    defer?: boolean;
    /** Browser cache max-age in milliseconds. (defaults to 0) */
    maxage?: number;
    maxAge?: SendOptions["maxage"];
    /** Tell the browser the resource is immutable and can be cached indefinitely. (defaults to false) */
    immutable?: boolean;
    /** Allow transfer of hidden files. (defaults to false) */
    hidden?: boolean;
    /** Root directory to restrict file access. (defaults to '') */
    root?: string;
    /** Name of the index file to serve automatically when visiting the root location. (defaults to none) */
    index?: string | false;
    /** Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. (defaults to true). */
    gzip?: boolean;
    /** Try to serve the brotli version of a file automatically when brotli is supported by a client and if the requested file with .br extension exists. (defaults to true). */
    brotli?: boolean;
    /** If not false (defaults to true), format the path to serve static file servers and not require a trailing slash for directories, so that you can do both /directory and /directory/. */
    format?: boolean;
    /** Function to set custom headers on response. */
    setHeaders?: SetHeaders;
    /** Try to match extensions from passed array to search for file when no extension is sufficed in URL. First found is served. (defaults to false) */
    extensions?: string[] | false;
}
```



