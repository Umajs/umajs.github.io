if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-12ba96f4"],(function(e){"use strict";e.setCacheNameDetails({prefix:"UMajs"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/220.styles.e1a03294.css",revision:"7efc4913ca7eaa6d4d1a47f81236adf4"},{url:"assets/css/418.styles.0023687b.css",revision:"c43ef4bb76c0e2f845336e77d93ffbbb"},{url:"assets/css/869.styles.c29f51d1.css",revision:"9aa0169b0f1e646d7270fe52eed96ff7"},{url:"assets/css/styles.c73a419c.css",revision:"6c551918e5dfbb71415d350336eec9be"},{url:"assets/img/back-to-top.8b37f773.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/img/search.b017a09f.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/208.60320659.js",revision:"953608590387d66dc8aeea6e12533da1"},{url:"assets/js/311.f89ea54b.js",revision:"2ca3a27e694a94a0f43433141ac8b8ec"},{url:"assets/js/406.9960f699.js",revision:"6ddb2ae2558b46955a323c47ae667b51"},{url:"assets/js/467.6bbdfee3.js",revision:"37f386b0bb33b2fb8648cc2bebb2f7c9"},{url:"assets/js/59.b3968af1.js",revision:"7be6b3d4498c202d44f1033002e42ae3"},{url:"assets/js/928.281726b9.js",revision:"82d52e268db04b3dc1249f93145817df"},{url:"assets/js/app.6e6074cf.js",revision:"f8e56c9f2b6c1545c130d32875e3605d"},{url:"assets/js/runtime~app.630c33c8.js",revision:"fa775150ae4fd434ae32efa295fbf8b6"},{url:"assets/js/v-00bd68cf.3a551c09.js",revision:"e603c630fcdedf31145ce27617ee6b10"},{url:"assets/js/v-00fd51ea.6186504e.js",revision:"92225e18fd4893e413ec608cbf582fdd"},{url:"assets/js/v-03970ce8.38be9e73.js",revision:"763176c42a5227cf0db8bf1f9323ffb3"},{url:"assets/js/v-067e8178.135cc164.js",revision:"bc95a26ffbc11ce5c2d6bbd10b0fc133"},{url:"assets/js/v-0ceaf927.24262097.js",revision:"2a2303db62c36be5b73431bce07f16d2"},{url:"assets/js/v-0e4506fa.9a8a5463.js",revision:"2fa0df0f029eb66355bbbcd79ca69a25"},{url:"assets/js/v-10ded304.f264b6d8.js",revision:"ff5710fe3bbd69354e2bb12dcb41b4a3"},{url:"assets/js/v-136b4ad0.f8a57503.js",revision:"825694dff686fac30909eab712741f2d"},{url:"assets/js/v-1f045e08.c0d315f4.js",revision:"16b9464cd489b2d92c9a7f8858c3f6d1"},{url:"assets/js/v-215c6649.36fa2f17.js",revision:"9b9042ff021f60461e606ea541185e56"},{url:"assets/js/v-21cbdcca.04169cc7.js",revision:"ad18d49623a3b2a6d489beff3cf669af"},{url:"assets/js/v-2992f330.fa4df9e2.js",revision:"bdfee25108f4055f04a64ce524b7ad7b"},{url:"assets/js/v-2d0a870d.f32413ca.js",revision:"2087409783aa3e77c2cbf122f991fca9"},{url:"assets/js/v-2d0a983f.be84ed0e.js",revision:"5b2303e7ca5b008648ec800134230e24"},{url:"assets/js/v-3393dde6.bb4df6d9.js",revision:"ba14ad25dbf87ce4d9c06647bfd3c8f8"},{url:"assets/js/v-3706649a.dcaef8ec.js",revision:"dbc5776e3480a85fe6da5f2234ebe745"},{url:"assets/js/v-39b939e9.1bd64894.js",revision:"78320062ae08002e7c46fc387b564ef9"},{url:"assets/js/v-3b306084.d46b3027.js",revision:"dceb5d3b88630fc5692b7121414c8772"},{url:"assets/js/v-4185a3dd.79d17614.js",revision:"bdb4a5cf85d62acd250c11fd2af39f59"},{url:"assets/js/v-4211f214.cd1bb355.js",revision:"0b0d5eb56f38a1fbb62f73a3f9c1fa8e"},{url:"assets/js/v-52d0e6ab.3761f9c5.js",revision:"8b6ec63688896d2658406a85fd741ff3"},{url:"assets/js/v-52e395ba.49ddbe2f.js",revision:"593886ffb9cac8d073374cb91743191a"},{url:"assets/js/v-563ebf79.59efe6e1.js",revision:"529f53e8b61e2f07f7dba73a6560e4d1"},{url:"assets/js/v-5e52bbb1.616ba52e.js",revision:"240ccd4b437d35cdc6933f6b5c6584a5"},{url:"assets/js/v-73eda344.6fac3d1f.js",revision:"75d5202a9198834403b005fff06e1d4c"},{url:"assets/js/v-79ac88c4.59310e54.js",revision:"d164495c77bc9ecd16d1a8fc83682cca"},{url:"assets/js/v-7b2f72fa.8d5743ce.js",revision:"de371accaf2823e57a62ec42c82f5cd7"},{url:"assets/js/v-7d2fea0c.96420e1b.js",revision:"621b05f1d01e0612c89b1d0cecab66dd"},{url:"assets/js/v-7e73a89d.d80ce95e.js",revision:"ebc9d598cc39ddff36d086e102669867"},{url:"assets/js/v-8daa1a0e.30caebf5.js",revision:"bfd548db7abea1e7f971576486495960"},{url:"assets/js/v-8e546182.044b13dd.js",revision:"91a67b63d406fc121a17aee3bd02ea11"},{url:"assets/js/v-9c8aec64.9403c0ed.js",revision:"4c2da3576522244565b654bb1da0a1b5"},{url:"assets/js/v-b5dbe9f4.7f1873fe.js",revision:"70507cd315c100e8b2d35031a405cec9"},{url:"assets/js/v-cca14438.f290e768.js",revision:"e7d14b192af7325220551ea8c9ce2873"},{url:"assets/js/v-f599b738.8dac1621.js",revision:"c1db7c3185efd422fe3b494c3131d116"},{url:"img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"404.html",revision:"0c86f37929e31e17fa9e434755e865b2"},{url:"development/AOP.html",revision:"27c4cb649a225e34fffdd6b8f07473c3"},{url:"development/Config.html",revision:"e48560948848a44909944a0d0f198169"},{url:"development/Controller.html",revision:"d484727a631ce7e54b66afaa590aed84"},{url:"development/Decorator.html",revision:"b4b9db2d0969ececa779ff951fab0d56"},{url:"development/IOC.html",revision:"2343368e1b37a14c20b47e6653543c28"},{url:"development/Middleware.html",revision:"526f6c4ebf72d1e10371852ada2bba26"},{url:"development/Plugin.html",revision:"680451808925ccc466de8af86335df16"},{url:"development/Result.html",revision:"e20df93fcc2a9632695c370d1d73395e"},{url:"development/Router.html",revision:"0773f9a9d8990f63fa839dd2a9da152a"},{url:"development/Service.html",revision:"31c23064c78cd50a9c9b8ca88a8deef4"},{url:"development/Uma.html",revision:"786c09261bd098bf3e3444ec8b93e762"},{url:"en/index.html",revision:"7c69ff27a5142ce5a8f1df2bd7212dd4"},{url:"index.html",revision:"b562751f261663c064c385b25e7d7aac"},{url:"ja/index.html",revision:"32485bf00344f9539a894d8cf12d7d73"},{url:"newbieGuide/introduce.html",revision:"49254d8e57a6e88c727bcb97eca56fa9"},{url:"newbieGuide/quickstart.html",revision:"3183698f876cd05a392d3f2e6c2ccb70"},{url:"newbieGuide/Uma.html",revision:"2955f94b3c4c41e58a0389c44b640265"},{url:"other/ArgDecorator.html",revision:"3a02769c51ab5f1dc26ef721651ebf54"},{url:"other/debug.html",revision:"94a2c67e8983cdd5a252211506052ca7"},{url:"other/errorHandling.html",revision:"cacf55b438b3cb9fad0e12e036119ea7"},{url:"other/expressUpdate.html",revision:"6e58d52dbab272e9ce8f2d7d6cbcd6d8"},{url:"other/preMigration.html",revision:"7b87a1b1d452a6ddd2f853e0ade1b557"},{url:"other/v1Update.html",revision:"28679057ec95589b14416d72691fe847"},{url:"plugin/Cors.html",revision:"2157b38c9f05b16f406bb431dd45b927"},{url:"plugin/dev.html",revision:"dba97141afb81041c6494a72ffca2701"},{url:"plugin/i18n.html",revision:"295870fe3ab4723a0b00e600f1a078fc"},{url:"plugin/Logger.html",revision:"b3f5c5cc25a50959d4ed4e8fd93ffbc6"},{url:"plugin/schedule.html",revision:"054c6e3d1d01ea4c410d6ddcf1f03592"},{url:"plugin/Session.html",revision:"08a7a43a61634c1be89f039062926453"},{url:"plugin/Static.html",revision:"cd8a125909a3b4599ed0339363053d50"},{url:"plugin/Status.html",revision:"e68a67490a7fa375ae4c9fd61f47416f"},{url:"plugin/Views.html",revision:"b48c0876828fa90ddaadabc5bedc449b"},{url:"ssr/React-ssr.html",revision:"49b7d6d6f9732b7382d6d28ec3cc1f40"},{url:"ssr/Vue-ssr.html",revision:"96bc389bbd0c2332bdfeb1d4b0f450e6"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
