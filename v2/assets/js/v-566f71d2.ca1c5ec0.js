"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[637],{8901:(s,n,a)=>{a.r(n),a.d(n,{default:()=>i});var l=a(4386);const e=(0,l.uE)('<h1 id="会话-session" tabindex="-1"><a class="header-anchor" href="#会话-session" aria-hidden="true">#</a> 会话（Session）</h1><p>为<code>Uma</code>简化会话中间件。默认为基于 cookie 的会话</p><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><h3 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h3><blockquote><p>$ npm install -S @umajs/plugin-session</p></blockquote><h2 id="开启服务" tabindex="-1"><a class="header-anchor" href="#开启服务" aria-hidden="true">#</a> 开启服务</h2><p>请参照插件使用说明开启国际化支持</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// plugin.config.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">    </span><span style="color:#C9D1D9;">session: {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        enable: </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">        options: &lt;</span><span style="color:#7EE787;">sessionOptions</span><span style="color:#C9D1D9;">&gt;{</span></span>\n<span class="line"><span style="color:#C9D1D9;">            secret: </span><span style="color:#A5D6FF;">&#39;secret&#39;</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">        },</span></span>\n<span class="line"><span style="color:#C9D1D9;">    },</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',8),p=(0,l.Uk)("具体开启方式请参考"),o=(0,l.Uk)("plugin"),r=(0,l.Uk)("一节中的配置方式"),t=(0,l.uE)('<h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">sessionOptions</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">key</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// 保存session的Key，默认uma:sess</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">maxAge</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// 单位ms, 默认保存1天</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">secret</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// 加密签名，默认umasss，注意：不要使用默认值</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">overwrite</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Boolean</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// 是否重复覆盖，默认为true</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">crypto</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">ICrypto</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// 加密/解密方法，需要实现 ICrypto 接口(encrypt / decrypt)，实例化后传入</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>注意： secret 不要使用默认值</p></blockquote><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><ul><li><p>set(key, value):</p></li><li><p>get(key):</p></li><li><p>remove(key):</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">ctx.session.</span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(key, val) </span><span style="color:#8B949E;">// 根据 key，设置 value 到 session 中</span></span>\n<span class="line"><span style="color:#C9D1D9;">ctx.session.</span><span style="color:#D2A8FF;">get</span><span style="color:#C9D1D9;">(key) </span><span style="color:#8B949E;">// 根据 key 值获取 session 的值</span></span>\n<span class="line"><span style="color:#C9D1D9;">ctx.session.</span><span style="color:#D2A8FF;">remove</span><span style="color:#C9D1D9;">(key) </span><span style="color:#8B949E;">// 删除 session 中的 key 属性</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> example</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> Index </span><span style="color:#FF7B72;">extends</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">BaseController</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">setss</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.session.</span><span style="color:#D2A8FF;">set</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;haha&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;Hello World&#39;</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;set session done.&#39;</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">getss</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.session.</span><span style="color:#D2A8FF;">get</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;haha&#39;</span><span style="color:#C9D1D9;">))</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">rmss</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.session.</span><span style="color:#D2A8FF;">remove</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;haha&#39;</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;remove session done.&#39;</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',8),c={},i=(0,a(4110).Z)(c,[["render",function(s,n){const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[e,(0,l._)("blockquote",null,[(0,l._)("p",null,[p,(0,l.Wm)(a,{to:"/%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD/Plugin.html"},{default:(0,l.w5)((()=>[o])),_:1}),r])]),t],64)}]])},5738:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-566f71d2",path:"/%E6%8F%92%E4%BB%B6/Session.html",title:"会话（Session）",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v2/%E6%8F%92%E4%BB%B6/Session.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"会话（Session）"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"快速开始",slug:"快速开始",children:[{level:3,title:"install",slug:"install",children:[]}]},{level:2,title:"开启服务",slug:"开启服务",children:[{level:3,title:"options",slug:"options",children:[]},{level:3,title:"API",slug:"api",children:[]},{level:3,title:"example",slug:"example",children:[]}]}],filePathRelative:"插件/Session.md",git:{updatedTime:1630481998e3,contributors:[{name:"jiazengp",email:"jiazengp@gmail.com",commits:1}]}}},4110:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}}}]);