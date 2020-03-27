# Controller

## 什么是控制器

控制器负责解析用户输入，并向用户返回处理结果。

在控制器中，我们可以指定什么时候（**路由**）去响应，怎么样（**服务**）去返回结果。

## 控制器加载与编写

### 加载

控制器也是通过约定的策略进行加载：默认加载`${URSA_ROOT}/controller`下所有`*.controller`文件。

### 控制器编写

`Ursa`的控制器需要通过类的继承的方式实现，方法必须都返回框架内置的 Result 静态方法，如下代码

```javascript
import { BaseController } from '@ursajs/core';

export default class Index extends  BaseController {
    index() {
        // 等同于 return Result.send('this is index router');
        return this.send('this is index router');
    }
}
```

命中路由规则的控制器，在请求时会被实例化，以下属性可以通过`this`获取：

1. `ctx`:  当前请求上下文
2. `req`: `Request`实例
3. `res`: `Response`实例

## 获取请求参数

### query和路由参数

详见Router#@Param、@Query修饰器

### header

获取header参数可以用`this.header(name)`方法获取。

### cookie

在控制器中，可以通过`this.ctx.cookies.get`方法获取cookie。

### session

默认情况下，`Ursa`的Session插件通过cookie存储session，详细的配置和用法可以通过Plugin#Session获取。

在控制器中，可以通过`this.ctx.session`对象获取相应的session值。

### body和上传文件的获取

## 发送响应

返回的数据都可以通过`Result`来返回。 `BaseController`也内置了`Result`一样的方法，还内置了一些方便使用的方法。


### set status(status: number);

正确的设置http的状态码，可以增强请求的语义性。可以通过`this.status = code`设置返回的状态码。

### get userAgent(): any;

获取请求的 user-agent

### get param(): any;

获取请求的参数

### setHeader(name: string | any, value: string | string[]): void;

设置请求 header

### getHeader(name: string | any): any;

获取请求 header

### 统一返回 Result

在 controller 中可以 `return Result[...](...)`，也可以 `return this[...](...)`，更多介绍见[Result](./Result.md)。

#### `this.send(val, status)`

用于快捷返回文本内容，第二个参数为返回状态码。

#### `this.json(data)`

返回json数据，并将`content-type`设置为`application/json`。

#### `this.jsonp(data, callback)`

以jsonp的形式返回数据。

#### `this.view(templatePath, data)`

通过渲染模板的方式将数据返回。

#### `this.stream(data, fileName)`

将文件以流（stream）的方式返回

#### `this.download(filePath, opts)`

下载文件

#### `this.done()`

使用 ctx 进行完了操作，不需要使用 Result 进行其它的返回时使用此方法，常用于框架的迁移。

