# Session

为`Uma`简化会话中间件。默认为基于cookie的会话

## 快速开始

### install
> $ npm install -S @umajs/plugin-session


## 开启服务
请参照插件使用说明开启国际化支持
```js
// plugin.config.ts
export default {
    session: {
        enable: true,
        options: <sessionOptions>{
            secret: 'secret',
        },
    },
}
```

> 具体开启方式请参考[plugin](../基础功能/Plugin.md)一节中的配置方式

### options
```js
type sessionOptions = {
    key: string,        // 保存session的Key，默认uma:sess 
    maxAge: number,     // 单位ms, 默认保存1天 
    secret: string,     // 加密签名，默认umasss，注意：不要使用默认值
    overwrite: Boolean, // 是否重复覆盖，默认为true
}
```
> 注意： secret 不要使用默认值


### API 
* set(key, value): 
* get(key): 
* remove(key): 
```js
ctx.session.set(key, val);  // 根据 key，设置 value 到 session 中
ctx.session.get(key);       // 根据 key 值获取 session 的值
ctx.session.remove(key);    // 删除 session 中的 key 属性
```

### example

```javascript
export default class Index extends BaseController {
    setss() {
        this.ctx.session.set('haha', 'Hello World');
        return Result.send('set session done.');
    }

    getss() {
        return Result.send(this.ctx.session.get('haha'));
    }

    rmss() {
        this.ctx.session.remove('haha');
        return Result.send('remove session done.');
    }
}
```
