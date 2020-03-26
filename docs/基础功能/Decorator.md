# Decorator

框架大量功能都是以 Decorator（修饰器）的方式使用。

### @Resource、@Inject修饰器

[参考文档](./IOC.html#resource、-inject修饰器)

### @Service修饰器

[参考文档](./IOC.html#service修饰器)

### @Aspect修饰器

[参考文档](./AOP.html#aspect修饰器)

### @Path

[参考文档](./Router.html#path修饰器)

### @Private修饰器

[参考文档](./Router.html##private修饰器)

### @Param、@Query修饰器

[参考文档](./Router.html##param、-query修饰器)

### 自定义参数装饰器 createArgDecorator
```js
// user.controller.ts
import { BaseController, Param } from '@ursajs/core';
import { AgeCheck } from '../decorator/AgeCheck';

export default class User extends BaseController {
    save(@Param('name') name: string, @AgeCheck('age') age: number) {
        // ...
    }
}

// decorator/AgeCheck.ts
import { createArgDecorator, Result, IContext } from '@ursajs/core';

/**
 * 1、参数的聚合 Entity
 * 2、参数的校验
 * 3、参数的转换
 * 4、便捷方法
 * 5、utils、config 等也可以通过此装饰器快速引用
 */
export const AgeCheck = createArgDecorator((ageKey: string, ctx: IContext) => {
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
