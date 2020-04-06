# 统一返回（Result）

在 koa 和大多数框架中，没有统一返回，这样在使用框架返回数据的时候需要额外处理，如果要对返回结果做处理可能需要修改很多地方，但是在进行了统一返回之后这些都变得很简单。

## Result 

#### `Result.send(val, status)`

用于快捷返回文本内容，第二个参数为返回状态码。

#### `Result.json(data)`

返回json数据，并将`content-type`设置为`application/json`。

#### `Result.jsonp(data, callback)`

以jsonp的形式返回数据。

#### `Result.view(templatePath, data)`

通过渲染模板的方式将数据返回。

#### `Result.stream(data, fileName)`

将文件以流（stream）的方式返回

#### `Result.download(filePath, opts)`

下载文件

#### `Result.done()`

使用 ctx 进行完了操作，不需要使用 Result 进行其它的返回时使用此方法，常用于框架的迁移。



## 实例
Ursa 在需要的模板返回的数据中加入 version，这里我们用 Aspect.around 可以很容易做到。

```javascript
// version.aspect.ts
import { IAspect, IJoinPoint, IProceedJoinPoint, Result } from '@ursajs/core';

export default class implements IAspect {
    async around(proceedPoint: IProceedJoinPoint<any>) {
        const result: Result = await proceedPoint.proceed();

        result.data.version = 'v1.0.0';

        return result;
    }
}

// info.controller.ts
import { BaseController, Aspect, Result } from '@ursajs/core';

export default class Info extends BaseController {

    @Aspect.aournd('version')
    info() {
        return Result.view('info.html', {});
    }
}
```
