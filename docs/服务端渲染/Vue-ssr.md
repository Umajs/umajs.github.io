# umajs-vue-ssr
> `Umajs-vue-ssr`是由[@umajs/plugin-vue-ssr](https://github.com/Umajs/plugin-vue-ssr) 搭配[Srejs](https://github.com/dazjean/Srejs)构建的轻量级，使用简单，灵活的`vue`服务端渲染解决方案;可以在`controller`和`middleware`中灵活使用,通过模板引擎式的语法对`vue`页面组件进行服务端渲染。

## 1、插件介绍
`plugin-vue-ssr`插件扩展了`Umajs`中提供的统一返回处理`Result`对象，新增了`Result.vue`页面组件渲染方法，可在`controller`自由调用,使用类似传统模板引擎；也同时将方法挂载到了koa中间件中的`ctx`对象上；当一些公关的页面组件，比如404、异常提示页面、登录或者需要在中间件中拦截跳转时可以在`middleware`中调用。

## 2、特性
- 不默认路由，不需区分前端路由和后端路由概念，且支持页面级组件AB测；`灵活`
- 页面组件中没有`__isBrowser__`之类变量对`ssr`和`csr`模式进行特殊区分处理;`统一`。
- 自定义`HTML`采用`htmlWebpackPlugin`,没有`runtime`，页面响应速度更高;`高性能`。
- 支持`html`中使用`nunjucks`类模板引擎语法实现`SEO`；`易上手`。
- 页面开发不依赖框架包装的任何模块，保持原生的`vue`开发体验;`友好,易升级`。
- 数据获取提供服务端注入方式，页面视图渲染和数据加工分开处理；`逻辑更清晰`。
- 支持`SSR`和`CSR`动态调整，支持`SSR`缓存,降级。`高可用`。
- 支持其他`koa`开发框架使用。`可扩展`。
- 支持MPA,各页面组件可单独构建，`可页面级更新`。

## 3、脚手架快速初始化项目[推荐]
> 在cli中支持快速创建`umajs-vue-ssr`模板工程。
```shell
$ npm i @umajs/cli -g  // 安装cli工具
$ uma project umajs-vue-demo  //通过uma初始化工程，选择vue2.0模板工程
✔ loading template
? please choise a template to create project (Use arrow keys)
  all,全套模板，包含部分代码示例 
  mini,极简模板，仅有核心代码 
  standard,标准模板，不包含示例代码 
  react,umajs-react-ssr模板，包含示例代码 
❯ vue2.0,umajs-vue-ssr模板，包含示例代码 

```
依赖安装和启动
```
cd umajs-vue-demo
yarn install
yarn start

```

## 4、手动安装集成插件

### 插件安装

```
 yarn add @umajs/plugin-vue-ssr --save
```

打开 `package.json` 文件并添加 `scripts` 配置段：

```
"scripts": {
    "start":'node app.js',
    "build":"npx ssr build",
    "analyzer": "npx ssr analyzer",
},
```

- `start` 启动你的node项目
- `build` 运行`npx ssr build`构建用于生产环境的应用程序，Srejs为多项目工程目录结构，可通过指定页面标识单独构建或者启动特定页面，命令为：`npm run build xxx`
- `analyzer` 运行`npx ssr analyzer` 用于分析页面组件打包依赖分析 可通过 `npm run analyzer xxx` xxx为页面组件标识，可指定分析某个页面组件打包结果

### 插件配置
```ts
    // plugin.config.ts
    export default <{ [key: string]: TPluginConfig }>{
        vue: {
            enable:true,
            options:{
                rootDir:'web', // 客户端页面组件根文件夹
                rootNode:'app', // 客户端页面挂载根元素ID
                ssr: true, // 全局开启服务端渲染
                cache: false, // 全局使用服务端渲染缓存 开发环境设置true无效
                prefixCDN: '/' // 客户端代码部署CDN前缀
            }
        }
    };
```

### 目录结构
框架默认配置属性`rootDir`默认为根目录下`web`，pages下是页面组件入口，比如`list`页面，vue主入口文件为`list/index.js`，页面组件为`list/App.vue`
```
└── web
    └── pages
        └── list
            ├── App.vue
            ├── index.js
```

### 页面组件(App.vue)
```vue
<template>
 <!--vue2.0版本APP.vue必须要设置根元素-->
  <div id ='app'>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
		return {
			'msg' : 'hi vue ssr!'
		}
    },
  }
</script>
```

### 页面主入口文件(index.js)
```js
import App from './App.vue';
export default {
    App, // 必须导出App
    Router, //如使用vue-router 导出路由配置对象
    Store, //如使用vuex 导出store对象
};
```
`Pages`下按照文件夹名称定义vue页面组件，每一个页面组件必须包含`inde.js`主入口文件,文件必须导出组件`App`。如果使用`vue-router`,则将路由配置导出为``Router``对象；当使用`vuex`时，则将初始化配置导出为`Store`。


## 5、插件使用
```ts
import { BaseController, Path } from '@umajs/core';
import { Result } from '../plugins/vue-ssr';

export default class Index extends BaseController {
    @Path('/')
    index() {
        return Result.vue('index', { title: 'umajs-vue-ssr'});
    }
}

```

## 6、插件API
>  插件扩展了`Umajs`中提供的统一返回处理`Result`方法，新增了`vue`页面组件可在`controller`自由调用,方式类似传统模板引擎使用方法；也同时将方法挂载到了koa中间件中的`ctx`对象上；当一些公关的页面组件，比如404、异常提示页面、登录或者需要在中间件中拦截跳转时可以在`middleware`中调用。
```ts
interface TviewOptions{
    ssr?: boolean, // 全局开启服务端渲染
    cache?: boolean, // 全局使用服务端渲染缓存
}
Result.vue(viewName:string,initProps?:object,options?:TviewOptions);
ctx.vue(viewName:string,initProps?:object,options?:TviewOptions);
```
*如果options参数传递为空 则默认会使用全局配置属性，全局配置采用插件集成时传递的options参数*

**注意** `cache`只在`生产环境`开启有效。

## 7、数据获取
> 在`Pages`页面中，vue页面组件获取数据有两种形式；我们分为服务端直出数据(Props和State)和vue组件静态方法`asyncData`获取两种形式。我们可以通过这两种方式对服务端渲染时首次页面渲染进行数据填充，使得服务端渲染时能返回完整的DOM结构，提高用户体验和更利于`SEO`.

### 服务端直出Props
> 框架在服务端提供了页面组件的渲染函数`Result.vue`,在调用函数渲染时我们可以在initProps参数中传递初始化的数据对象；这些数据可以在创建vue实例时会注册为组件实例的Props参数。在页面组件中我们可以将其定义为Props。 [了解vue组件Props](https://cn.vuejs.org/v2/guide/components-props.html)

```js
Result.vue('list',{title:'xxx',keywords:'xxx',description:'xxxx','say':"hi!"});
```

在页面组件中我们可以直接通过Props将服务端直出的数据在vue模板中使用。
```vue
<template>
 <!--vue2.0版本APP.vue必须要设置根元素-->
  <div id ='app'>
    <h1>{{title}}</h1>
    <p>{{say}}</p>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props:["say","title"]
  }
</script>
```

**特别说明：**在`initProps`参数中，`title,keywords,description`还会默认被解析为web网页头中的 标题，关键字，描述填充。

### 服务端初直出State
> 在initProps对象中，框架会默认将State属性初始化为store实例。从根组件“注入”到每一个子组件中。
```js
Result.vue('list',{title:'xxx',keywords:'xxx',description:'xxxx',state:{
    'say':"hi!"
}});
```

我们可以直接在 `Vue` 任意组件中直接获得 `Vuex` 状态。获取方式为`this.$store.state`。
```vue
<template>
 <!--vue2.0版本APP.vue必须要设置根元素-->
  <div id ='app'>
    <h1>{{title}}</h1>
    <p>{{say}}</p>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props:["title"],
    data:()=>{
        return {
            say:this.$store.state.say
        }
    }
  }
</script>
```
由于 Vuex 的状态存储是响应式的，从 store 实例中可以在计算属性中返回某个状态。
```vue
<script>
  export default {
    name: 'app',
    props:["title"],
    computed: {
        say () {
            return this.$store.state.say
        }
    }
  }
</script>
```
**更多获取Vuex状态的使用方法可查看官方文档[Vuex](https://vuex.vuejs.org/zh/guide/state.html)**

### asyncData静态方法
> `asyncData`是页面组件数据获取的钩子，`只能作用于页面`。其接收对象参数默认是`vuex`的`store`和当前`router`,通过`router`可以获取到当前路由的参数等数据，然后调用异步请求获取http类型的数据，然后通过`store`触发状态管理的更新,也可直接改写操作`store.state`属性。框架会合并到`store`数据上下文`state`中。
```vue
<script>
export default {
    name: 'app',
    data() {
        return {
            msg: this.$store.state.msg,
        };
    },
    async asyncData({ store, route }) {
      // store.state.msg = 'about来自asyncData的数据'
      // 触发 action 后，会返回 Promise
      return store.dispatch('fetchItem', route.params.id)
    },
};
</script>
```
**asyncData**灵感来自官方[vue-ssr示例](https://ssr.vuejs.org/zh/guide/data.html#%E6%95%B0%E6%8D%AE%E9%A2%84%E5%8F%96%E5%AD%98%E5%82%A8%E5%AE%B9%E5%99%A8-data-store)和[nuxtjs](https://zh.nuxtjs.org/docs/2.x/features/data-fetching#async-data)。

## 8、SEO和HTML
> 在`initProps`中通过,默认接收`title,keywords,description`作为页面标题，关键字，网页描述填充字段。
```js
Result.vue('list',{title:'xxx',keywords:'xxx',description:'xxxx'});
```

### 自定义html
> 框架内置`HTMLWebpackPlugin`插件，开发者在页面组件同级目录下可以覆盖默认html模板自定义引入第三方资源和脚本。自定义html文件名为页面下的`index.html`。

```html
<!-- web/pages/index/index.html -->
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="email=no">
    <meta name="format-detection" content="address=no;">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <title>vue ssr</title>
    <!-- 引入第三方组件库样式 -->
</head>
<body>
   <!--vue-ssr-outlet-->
</body>
<!-- 引入第三方sdk脚本 -->
</html>
```
### 模板插值
在html模板中，还可以使用模板插值。服务端渲染初始化时传递的`initProps`数据在服务端渲染时会被注入为`渲染上下文对象`。
```html
<html>
  <head>
    <!-- 使用双花括号(double-mustache)进行 HTML 转义插值(HTML-escaped interpolation) -->
    <title>{{ title }}</title>

    <!-- 使用三花括号(triple-mustache)进行 HTML 不转义插值(non-HTML-escaped interpolation) -->
    {{{ meta }}}
  </head>
  <body>
    <!--vue-ssr-outlet-->
  </body>
</html>
```


### 支持全局HTML
为满足业务引入第三方脚本也提供了以下方式自定义html模板。
- `web/pages/xxx/index.html`（局部页面生效）
- `web/index.html`（全局生效）

**优先级**`web/pages/xxx/index.html` > `web/index.html`

## 9、vuex
> 当项目比较复杂时，我们可以在页面组件入口文件中导出Vuex store对象。框架会自动从根页面组件注入vue子组件中，通过$store访问到实例化后的store。

```js
import App from './App.vue';
export default {
    App,
    Store: {
        state: {
            count: 100,
        },
        mutations: {
            increment: (state) => state.count++,
            decrement: (state) => state.count--,
        },
    },
};
```
框架接收到Store对象后，会实例化vuex。并且初始化到vue实例中,通过vue.use注入到全局。对于初始化的state数据，如果在initProps中也传入同名的属性，则initProps.state将会覆盖主入口文件传入store.state中的属性值。

### 服务端初始化state
```js
Result.vue(ctx,'vuex',{state:{count:200}});
```

### 页面组件获取状态
```vue
<template>
  <div id = "app">
      <p>{{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
  </div>
</template>

<script>
  export default {
    name: 'vuex',
    computed: {
      count () {
        return this.$store.state.count
      }
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
    }
  }
</script>
```
最后展示到页面上的`count`初始值为：`200`


## 10、vue-router
> 当vue页面组件需要和vue-router结合开发单页面应用时，在入口文件中我们也可以通过Router属性导出路由配置。

- 客户端页面组件入口文件路由配置
```js
import App from './App.vue';
import About from './about.vue';
import Home from './home.vue';

export default {
    App,
    Router: {
        mode: 'history',
        fallback: false,
        base: '/index/',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/about', props: true, component: About },
            { path: '/home', props: true, component: Home },
            { path: '/', redirect: '/home' }
        ]
    }
};
```
**注意：服务端渲染模式下不支持使用import动态导入组件方式进行路由懒加载**

- 服务端路由
> 对于服务端我们需要保持客户端和服务端路由一致，否则会出现子路由页面刷新`404`现象。



- 页面路由获取数据
>  在页面组件中页面数据获取方式和普通页面组件保持一致，我们可以使用服务端渲染props直出和asyncData钩子函数两种方式获取，具体使用参考`数据获取`章节。

## 11、内置css支持
> 框架内置了`vue-style-loader`以及css预处理器loader,支持`*.vue`单个文件组件内的 `<style>`提取为单独css样式文件。也支持CSS Modules。以下示例均开箱即用，无需额外配置。

### Scoped CSS
```vue
<template>
    <p class="scoped">
    style scoped
  </p>
</template>

<style scoped>
.scoped {
  color: red;
  font-size: 18px;
}
</style>
```

### 预处理器less/scss
```vue
<template>
    <p class="scoped">
    style scoped
  </p>
</template>

<style lang="less" scoped>
.scoped {
  color: red;
  font-size: 18px;
}
</style>

<style lang="scss" scoped>
.scoped_scss {
  color: red;
  font-size: 18px;
}
</style>
```

**当我们采用*.less或者*.scss文件编写样式时，也可以从 JavaScript 中导入 CSS，例如，import './foo.css'**

## 12、CSS Modules
- 使用style module
> 在你的 `<style> `上添加 module 特性,这个 module 特性指引 Vue Loader 作为名为 $style 的计算属性，向组件注入 CSS Modules 局部对象。然后你就可以在模板中通过一个动态类绑定来使用它了。
```vue
<template>
  <p :class="$style.red">
    This should be red
  </p>
</template>

<style module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>
```
**详细原理查看官方文档[vue-loader](https://vue-loader.vuejs.org/zh/guide/css-modules.html#css-modules)**

- 使用预处理器样
> 如果你的样式是从JavaScript中导入的，那么你只需要将把文件命名为`*.module.(less|scss|css)`。
```vue
<template>
    <p :class="styles.module">
    对于外部样式文件，框架默认支持以文件命名:
    xxx.module.(less|scss|css)
    开启使用css module  
  </p>
</template>

<script>
import styles from './index.module.less';
export default {
    data () {
      styles
    }
}
</script>
```

## 13、案例
- [css-module](https://github.com/Umajs/umajs-vue-ssr/tree/main/web/pages/css)
- [vuex](https://github.com/Umajs/umajs-vue-ssr/tree/main/web/pages/vuex)
- [vue-router](https://github.com/Umajs/umajs-vue-ssr/tree/main/web/pages/router)
- [elementUI](https://github.com/Umajs/umajs-vue-ssr/tree/main/web/pages/element)
- [ant-design-vue](https://github.com/Umajs/umajs-vue-ssr/tree/main/web/pages/andv)

## 14、源码
- [@srejs/vue](https://github.com/dazjean/srejs)
- [@umajs/plugin-vue-ssr](https://github.com/Umajs/plugin-vue-ssr)

**如果你觉得有用，请star支持下我们~谢谢！**