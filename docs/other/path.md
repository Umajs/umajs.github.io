# 快捷路由装饰器

框架在 `@Path` 装饰器的基础上还提供了一些其它快捷的路由装饰器 [@umajs/path](../other/path.md)


## 使用

> 安装 `npm install -S @umajs/arg-decorator`
>
> 注意：提供的路由装饰器仅支持方法使用，不支持 `class` 使用

```js
export declare const Get: (...value: string[]) => Function;
export declare const Post: (...value: string[]) => Function;
export declare const Delete: (...value: string[]) => Function;
export declare const Put: (...value: string[]) => Function;
```

### GET
```js
class {
    @Get('/get')
    get() {
        //...
    }
}
```

### POST
```js
class {
    @Post('/post')
    post() {
        //...
    }
}
```

### PUT
```js
class {
    @Put('/put')
    put() {
        //...
    }
}
```

### DELETE
```js
class {
    @Del('/del')
    del() {
        //...
    }
}
```
