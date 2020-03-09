# Session

为`Ursa`简化会话中间件。默认为基于cookie的会话，并支持外部存储。

## 快速开始

### install
> $ npm install -S @ursajs/plugin-session

### config
```
key               (string) 保存session的Key，默认ursa:sess 
maxAge            (number) 单位ms, 默认保存1天 
secret            (string) 加密签名，默认ursa:sess
overwrite         (Boolean)是否重复覆盖，默认为true
```

### example

```javascript
import session from '@ursajs/session';
const CONFIG = {
    key: 'ursa:sess', 
    maxAge: 10000,   
    secret: '12345678',
    overwrite: true 
}

session(CONFIG, app)

app.use(ctx => {
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.body = n + ' views';
})
```


### API 

* set(key, value): 根据key，设置value到session中
* get(key): 根据key值获取session的值
* remove(key): 删除session中的key属性