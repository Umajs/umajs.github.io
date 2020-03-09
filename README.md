# Ursa

## 框架介绍

Ursa 是基于 Koa2 使用 TypeScript 开发、通过装饰器使用大部分功能的 Web 框架。

## 特性

* 基于 Koa2，兼容 middleware
* 装饰器 (decorator)，代码组织更优雅方便
* 依赖注入 (IOC)，模块依赖不再需要引入和实例化
* 面向切面 (AOP)，基于装饰器的 AOP 可以很方便的使用在各种方法上
* 高稳定高性能，单元测试覆盖全
* 路由分层，优化路由寻址
* 推荐 TS 开发，开发维护更清晰，对于依赖注入的方法使用也更便捷
* 统一约束和规范

## 快速开始

### 环境准备

- 操作系统：支持 macOS，Linux，Windows
- 运行环境：支持 Node.js 8.x 及以上版本。

### 初始化工程

#### 安装 Ursa 命令

```shell
$ npm i @ursajs/cli -g
```

#### 卸载旧版本命令

```shell
$ npm uninstall @ursajs/cli -g
```

#### 使用

##### 查看版本

```shell
$ ursa-node -v
```

##### 初始化工程

```shell
$ ursa-node project [projectName]
```

##### 初始化目录结构

```bash
$ cd [projectname]
$ npm install
$ npm start
$ http://127.0.0.1:8058
```

##### 项目结构

```bash
|--- package.json
|--- README.md
|--- .eslintrc.js
|--- tsconfig.json // ts配置文件
|--- src
| |--- app.ts  // 入口
| |--- aspect // 切面
| | |--- index.aspect.ts
| |--- config  // 配置文件目录
| | |--- plugin.config.ts
| |--- controller  // 控制器目录 
| | |--- index.controller.ts
| |--- decorator  // 控制器目录 
| | |--- index.controller.ts
| |--- plugins //插件
| | |--- error-handler
| |--- service //服务
| | |--- test.service.ts
|--- static  //静态目录
| |--- index_index.html
|--- views  //模板目录
| |--- index.html
```

### 服务部署

#### 生产环境构建
> 生产环境部署时，将会把typescript编译成js后运行。默认构建后js源码目录是app

#### 构建并启动命令
```shell
$ npm run prod   // 会自动先执行lint校验和build命令，然后才启动生产环境代码
```

### 文档和社区

- [官方站点 && 文档](https://github.com/Ursajs)
