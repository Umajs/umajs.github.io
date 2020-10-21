# 修饰器（Decorator）

框架大量功能都是以 Decorator（修饰器）的方式使用。

### @Resource、@Inject修饰器

[IOC 参考文档](./IOC.md#resource、-inject修饰器)

### @Service修饰器

[Service 参考文档](./IOC.md#service修饰器)

### @Aspect修饰器

[Acpect 参考文档](./AOP.md#aspect修饰器)

### @Path

[Router 参考文档](./Router.md#path修饰器)

框架在 `@Path` 装饰器的基础上还提供了一些其它快捷的路由装饰器 [@umajs/path](../other/path.md)

### @Private修饰器

[Router 参考文档](./Router.md##private修饰器)

### @Param、@Query修饰器

[Router 参考文档](./Router.md##param、-query修饰器)

### 自定义参数装饰器 createArgDecorator

#### 示例如下
```js
// user.controller.ts
import { BaseController, Param } from '@umajs/core';
import { AgeCheck } from '../decorator/AgeCheck';

export default class User extends BaseController {
    save(@Param('name') name: string, @AgeCheck('age') age: number) {
        // ...
    }
}

// decorator/AgeCheck.ts
import { createArgDecorator, Result, IContext } from '@umajs/core';

/**
 * 1、参数的聚合 Model
 * 2、参数的校验
 * 3、参数的转换
 * 4、便捷方法
 * 5、utils、config 等也可以通过此装饰器快速引用
 */
export const AgeCheck = createArgDecorator((ctx: IContext, ageKey: string) => {
    let age = ctx.query[ageKey];

    if (age === undefined) return Result.json({
        code: 0,
        msg: '请加上 age 参数',
    });

    age = +age;

    if (Number.isNaN(age) || age < 0 || age > 120) return Result.json({
        code: 0,
        msg: '请传入正确的 age 参数',
    });

    return age;
});
```

#### 框架提供的参数装饰器 [参数装饰](../other/ArgDecorator.md)