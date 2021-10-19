"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[101],{8776:(s,a,n)=>{n.r(a),n.d(a,{default:()=>d});var e=n(4386);const l=(0,e.uE)('<h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><ul><li>操作系统：支持 macOS，Linux，Windows</li><li>运行环境：支持 Node.js 8.x 及以上版本。</li></ul><h2 id="初始化工程" tabindex="-1"><a class="header-anchor" href="#初始化工程" aria-hidden="true">#</a> 初始化工程</h2><h3 id="安装-uma-命令" tabindex="-1"><a class="header-anchor" href="#安装-uma-命令" aria-hidden="true">#</a> 安装 Uma 命令</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">$ npm i @umajs/cli -g</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">$ uma</span></span>\n<span class="line"><span style="color:#C9D1D9;">or</span></span>\n<span class="line"><span style="color:#C9D1D9;">$ umajs</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="卸载旧版本命令" tabindex="-1"><a class="header-anchor" href="#卸载旧版本命令" aria-hidden="true">#</a> 卸载旧版本命令</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">npm uninstall @umajs/cli -g</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><h4 id="查看版本" tabindex="-1"><a class="header-anchor" href="#查看版本" aria-hidden="true">#</a> 查看版本</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">uma -V</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="初始化工程-1" tabindex="-1"><a class="header-anchor" href="#初始化工程-1" aria-hidden="true">#</a> 初始化工程</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">uma project [projectName]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="初始化目录结构" tabindex="-1"><a class="header-anchor" href="#初始化目录结构" aria-hidden="true">#</a> 初始化目录结构</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#79C0FF;">cd</span><span style="color:#C9D1D9;"> [projectname]</span></span>\n<span class="line"><span style="color:#C9D1D9;">npm install</span></span>\n<span class="line"><span style="color:#C9D1D9;">npm start</span></span>\n<span class="line"><span style="color:#C9D1D9;">http://127.0.0.1:8058</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">├── src</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├── app.ts  // 入口</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├── aspect      // 切面</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├── index.aspect.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├── config      // 配置文件目录</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├──plugin.config.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├── controller  // 控制器目录</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├──index.controller.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├── plugins     //插件</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├── error-handler</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├── index.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├── service     //服务</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├── test.service.ts</span></span>\n<span class="line"><span style="color:#C9D1D9;">├── static      //静态目录</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├── index.html</span></span>\n<span class="line"><span style="color:#C9D1D9;">├── views       //模板目录</span></span>\n<span class="line"><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;">   ├── index.html</span></span>\n<span class="line"><span style="color:#C9D1D9;">├── .eslintrc.js</span></span>\n<span class="line"><span style="color:#C9D1D9;">├── README.md</span></span>\n<span class="line"><span style="color:#C9D1D9;">├── package.json</span></span>\n<span class="line"><span style="color:#C9D1D9;">├── tsconfig.json   // ts配置文件</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h4 id="保留目录" tabindex="-1"><a class="header-anchor" href="#保留目录" aria-hidden="true">#</a> 保留目录</h4><blockquote><p>src 中 config、aspect、plugins 三个目录为保留目录</p></blockquote><h2 id="服务部署" tabindex="-1"><a class="header-anchor" href="#服务部署" aria-hidden="true">#</a> 服务部署</h2><h3 id="生产环境构建" tabindex="-1"><a class="header-anchor" href="#生产环境构建" aria-hidden="true">#</a> 生产环境构建</h3><blockquote><p>生产环境部署时，将会把 typescript 编译成 js 后运行。默认构建后 js 源码目录是 app</p></blockquote><h3 id="构建并启动命令" tabindex="-1"><a class="header-anchor" href="#构建并启动命令" aria-hidden="true">#</a> 构建并启动命令</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">npm run build   // 会自动先执行lint校验和build命令，然后才启动生产环境代码</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="如何区分多环境配置" tabindex="-1"><a class="header-anchor" href="#如何区分多环境配置" aria-hidden="true">#</a> 如何区分多环境配置</h3>',25),p=(0,e.Uk)("参考 "),r=(0,e.Uk)("config"),c=(0,e._)("h2",{id:"文档和社区",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#文档和社区","aria-hidden":"true"},"#"),(0,e.Uk)(" 文档和社区")],-1),i={href:"https://github.com/Umajs",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Uk)("官方站点 && 文档"),o={},d=(0,n(4110).Z)(o,[["render",function(s,a){const n=(0,e.up)("RouterLink"),o=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e._)("blockquote",null,[(0,e._)("p",null,[p,(0,e.Wm)(n,{to:"/%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD/Config.html"},{default:(0,e.w5)((()=>[r])),_:1})])]),c,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",i,[t,(0,e.Wm)(o)])])])],64)}]])},5773:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-1222ed3f",path:"/%E6%96%B0%E6%89%8B%E6%8C%87%E5%8D%97/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B.html",title:"快速开始",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/%E6%96%B0%E6%89%8B%E6%8C%87%E5%8D%97/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"快速开始"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"JiaZeng"}],["meta",{property:"og:restrictions:age",content:"3+"}],["meta",{name:"twitter:creator",content:"UMajs"}]]},excerpt:"",headers:[{level:2,title:"环境准备",slug:"环境准备",children:[]},{level:2,title:"初始化工程",slug:"初始化工程",children:[{level:3,title:"安装 Uma 命令",slug:"安装-uma-命令",children:[]},{level:3,title:"卸载旧版本命令",slug:"卸载旧版本命令",children:[]},{level:3,title:"使用",slug:"使用",children:[]}]},{level:2,title:"服务部署",slug:"服务部署",children:[{level:3,title:"生产环境构建",slug:"生产环境构建",children:[]},{level:3,title:"构建并启动命令",slug:"构建并启动命令",children:[]},{level:3,title:"如何区分多环境配置",slug:"如何区分多环境配置",children:[]}]},{level:2,title:"文档和社区",slug:"文档和社区",children:[]}],filePathRelative:"新手指南/快速开始.md",git:{updatedTime:1630481998e3,contributors:[{name:"jiazengp",email:"jiazengp@gmail.com",commits:1}]}}},4110:(s,a)=>{a.Z=(s,a)=>{for(const[n,e]of a)s[n]=e;return s}}}]);