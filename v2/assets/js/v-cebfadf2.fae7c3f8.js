"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[422],{2930:(s,a,n)=>{n.r(a),n.d(a,{default:()=>p});const e=(0,n(4386).uE)('<h1 id="渐进迁移" tabindex="-1"><a class="header-anchor" href="#渐进迁移" aria-hidden="true">#</a> 渐进迁移</h1><p>Uma 提供了中间件，方便 Koa 或者 Koa 衍生框架采用渐进迁移的方式迁移至 Umajs 框架。</p><h2 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h2><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p><code>Uma</code> 提供了 <code>middleware(options: TUmaOption, app: Koa)</code> 静态方法返回中间件供使用，示例如下：</p><h3 id="方式-1" tabindex="-1"><a class="header-anchor" href="#方式-1" aria-hidden="true">#</a> 方式 1</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">app</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Koa</span><span style="color:#C9D1D9;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">Uma.</span><span style="color:#D2A8FF;">middleware</span><span style="color:#C9D1D9;">(options, app).</span><span style="color:#D2A8FF;">then</span><span style="color:#C9D1D9;">((</span><span style="color:#FFA657;">mw</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">  app.</span><span style="color:#D2A8FF;">use</span><span style="color:#C9D1D9;">(mw)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">  app.</span><span style="color:#D2A8FF;">listen</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">8058</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"><span style="color:#C9D1D9;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="方式-2" tabindex="-1"><a class="header-anchor" href="#方式-2" aria-hidden="true">#</a> 方式 2</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">;(</span><span style="color:#FF7B72;">async</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">app</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Koa</span><span style="color:#C9D1D9;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">  app.</span><span style="color:#D2A8FF;">use</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> Uma.</span><span style="color:#D2A8FF;">middleware</span><span style="color:#C9D1D9;">(options, app))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">  app.</span><span style="color:#D2A8FF;">listen</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">8058</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"><span style="color:#C9D1D9;">})()</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="迁移" tabindex="-1"><a class="header-anchor" href="#迁移" aria-hidden="true">#</a> 迁移</h2><p>配置完 <code>Umajs</code> 中间件后，<code>Umajs</code> 就可以在框架中完整运行，这时就可以将代码按照 <code>Umajs</code> 的规则逐步迁移。例如先迁移 <code>Controller</code>……</p>',11),l={},p=(0,n(4110).Z)(l,[["render",function(s,a){return e}]])},9479:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-cebfadf2",path:"/other/%E6%B8%90%E8%BF%9B%E8%BF%81%E7%A7%BB.html",title:"渐进迁移",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v2/other/%E6%B8%90%E8%BF%9B%E8%BF%81%E7%A7%BB.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"渐进迁移"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"中间件",slug:"中间件",children:[{level:3,title:"使用",slug:"使用",children:[]},{level:3,title:"方式 1",slug:"方式-1",children:[]},{level:3,title:"方式 2",slug:"方式-2",children:[]}]},{level:2,title:"迁移",slug:"迁移",children:[]}],filePathRelative:"other/渐进迁移.md",git:{updatedTime:1630481998e3,contributors:[{name:"jiazengp",email:"jiazengp@gmail.com",commits:1}]}}},4110:(s,a)=>{a.Z=(s,a)=>{for(const[n,e]of a)s[n]=e;return s}}}]);