# Uma 与 Koa

> 使用客户端与服务端通用开发语言的问题是一直是开发者需要面临的问题，而NodeJs的出现使得JavaScript一跃成为最流行的web开发语言。各类node web框架层出不穷，其中不乏著名的Express、Koa......

## Koa

Express无疑是使用最广泛的node框架，从github start可以看出来其受欢迎的程度，但基于ECMAScript版本的变化，Express很多功能受到ES5的约束，比如一直令人头疼的[Callback Hell](http://callbackhell.com/)。

为解决一系列问题，[TJ](https://github.com/tj)发现对Express进行重构似乎更加困难，于是就有了现在的Koa。

### 架构设计

Express一体式的架构设计能够让开发者快速的搭建一个node server，其自身集成了例如
[static](https://expressjs.com/en/starter/static-files.html)、
[router](https://expressjs.com/en/guide/routing.html)、
[views](https://expressjs.com/en/guide/using-template-engines.html)
等功能，能够为开发者提供静态文件、路由方法、模板引擎等服务。庞大的社区也为其提供了众多中间件模块，其成熟稳定的生态环境是众多开发者选择的关键因素。但是这也使整个框架显得较为厚重，毕竟一部分功能开发者可能并不会使用到。

而Koa则是摒弃了原有思想，致力于实现一个轻量级应用框架,事实上它确实非常轻巧，只有大约550行代码。它将原有功能进行拆分，分包成各个模块，因此拥有大量有用的方法但占用空间很小,开发者可以根据需要进行引用。核心设计的不同也使得Koa与Express风格的中间件不兼容，大量原社区资源无法直接利用。

### Middleware

- **async function**

Express对于异步函数的处理可以说是相当不友好，当你想创建一个使用promise的控制器或中间件函数时，你必须使用`.then`。当然我们并不想这么做。  

Koa对于异步函数的支持是一个重要的变化之一。  
在 koa 1.x中，使用 `co` + `generator` 作为异步处理的主要方式。  
随着 ES7 官方异步方案 `async/await` 的发布以及 Node.js v7.6.0对其的支持，koa 2.x中间件异步方案已经完全替换为async/await的调用机制。

- **模型**  

相比Express中间件执行的线性流程，Koa采用堆栈形式的先进后出，可以更全面的对HTTP流程做出响应，下图为Koa洋葱模型：  
![Koa onion](../assets/images/KoaOnion.png)  

Express中间件只有两个参数request与response，Koa 2.x比Express增加了一个上下文的对象
[Context](https://github.com/koajs/koa/blob/master/docs/api/context.md)，
并且将request与response挂载在context上作为第一个参数传入。

开发者可以很方便地对ctx对象进行拓展，并且在所有中间件中进行共享。

### Error handling

Express附带一个错误处理程序，但使用起来较为繁琐，对于异步代码需要手动调用next传递错误信息。  
Koa配合 `try..catch..` 的错误处理方式便显得更加优雅。  

```js
app.use(async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.status = err.status || 500
        ctx.body = { info: 'error...' }
        ctx.app.emit('error', err, this)
    }
})
```

## Uma

使用Koa，你可以很快构建出性能出色的web应用程序，不再被回调所困扰、更快的处理错误......但Koa作为一个轻量级框架它更多地只是提供一些基础性服务。

Uma 在 Koa 2 的基础上对其进行了拓展，致力于为开发者提供一个更加强大、便捷、易于管理的企业级web应用框架。

### TypeScript

如果你有过Java开发经验，那你一定体会过静态语言所带来的优势。
[TypeScript](https://www.typescriptlang.org/)
作为JavaScript的超集，使得js能够实现静态类型检测，更加有利于构建复杂的大型项目。

Uma使用ts进行源码开发，我们强烈建议开发者配合使用 `Uma` + `ts` 。

- **易于理解**  

代码中有函数参数类型、返回值类型、变量类型以及泛型约束这些类型信息作为辅助，能让生疏的代码更易于理解。这在接手新项目、阅读开源代码以及代码评审实践中都能带来很多便利。

- **IDE支持**

由于静态类型的原因，一些 IDE 能够为开发者提供比往常更多的预测性辅助功能，如智能补全与路径跟踪。如果你不想在运行时才发现一堆错误提示，那么ts将是一个很好的选择。

- **新特性与兼容**

ts较好的兼容了一些未来语法，你可以使用ES6、ES7及更高版本中的新功能，编译器会为你将他们转换为ES5或者你所指定的内容。

### IOC / DI

事实上
[控制反转](https://www.tutorialsteacher.com/ioc/inversion-of-control)与
[依赖注入](https://www.tutorialsteacher.com/ioc/dependency-injection)
是同一个概念，Uma框架设计继承了这样的思想，你可以将与核心业务无关的代码抽离出去交给系统来为你寻找依赖，这对于代码解耦有着重要的意义。

对于某几个类，你可以选择不使用DI，但是对于一个大型项目来说依赖管理要复杂得多，而Uma框架可以很好的来帮助你管理你的依赖项和对象之间的交互。特别是在编写单元测试时，你可以独立于其他对象添加和测试对象，而不需要设置任何无关项。

### AOP

AOP（面向切面编程）扩展了传统的OOP（面向对象编程）模型，以改善跨不同对象层次结构的代码重用。AOP基本概念是一个切面，这是一种常见的行为，通常分散在方法，类，对象层次结构甚至整个对象模型中。

例如：我们需要在代码中添加日志功能，但日志打印并不是我们核心业务需要关注的。  
在AOP中，日志功能作为横切关注点，会建议将其抽象化并封装到一个切面中去。

Uma提供@Aspect装饰器作为IOC容器，你可以在aspect文件夹下新建自己的切面，并且定义5类通知：

- 前置通知
- 后置通知
- 异常通知
- 最终通知
- 环绕通知

开发者可以通过调用@Aspect('xx')的方式在类或方法中织入切面。

更多使用方式可查看[AOP](../基础功能/AOP.md)一节。