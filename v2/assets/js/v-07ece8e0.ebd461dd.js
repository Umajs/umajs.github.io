"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[181],{8366:(s,n,a)=>{a.r(n),a.d(n,{default:()=>y});var l=a(4386);const p=(0,l._)("h1",{id:"v1迁移指南",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#v1迁移指南","aria-hidden":"true"},"#"),(0,l.Uk)(" v1迁移指南")],-1),e=(0,l.Uk)("本文档介绍从V1版本升级到V2.0的迁移指南，想要了解V2中的变化，请查看"),o={href:"https://github.com/Umajs/Umajs/pull/74",target:"_blank",rel:"noopener noreferrer"},r=(0,l.Uk)("PR"),c=(0,l.Uk)("。"),t=(0,l.uE)('<p>V2版本和V1的最大改动是对目录文件夹的文件的默认约束，在V1时，框架对<code>controller,service,aspect,plugin,config</code>目录都进行了强制命名约束。这导致UMajs在启动时将不得不分配额外的时间去提前扫描加载文件；在V2中我们只保留了<code>controller</code>,<code>plugin</code>,<code>config</code>三个文件目录的约束不变。这导致我们在升级V2时，注意以下功能需要修改成V2最新的使用方法。</p><ul><li>取消默认文件路由，所有路由必须被@Path修饰使用</li><li>Aspect装饰器替换为Around</li><li>Service，Inject装饰器只能接受函数引用</li><li>删除@umajs/path包</li><li>Private装饰器已从@umajs/core中移除</li></ul><h2 id="取消默认文件路由-所有路由必须被-path修饰使用" tabindex="-1"><a class="header-anchor" href="#取消默认文件路由-所有路由必须被-path修饰使用" aria-hidden="true">#</a> 取消默认文件路由，所有路由必须被@Path修饰使用</h2><blockquote><p>在V2版本中，为了降低开发者对路由的了解；默认取消了基于文件的路由。</p></blockquote><p>以下路由匹配规则在V2版本中将无法匹配访问到资源。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">User</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">extends</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">BaseController</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// url: /user</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">index</span><span style="color:#C9D1D9;">() {}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// url: /user/list</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">list</span><span style="color:#C9D1D9;">() {}</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>修改成：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">@</span><span style="color:#D2A8FF;">Path</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;/user&#39;</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">User</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">extends</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">BaseController</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">  @</span><span style="color:#D2A8FF;">Path</span><span style="color:#C9D1D9;">()    </span><span style="color:#8B949E;">// url: /user</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">index</span><span style="color:#C9D1D9;">() {}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">  @</span><span style="color:#D2A8FF;">Path</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;/list&#39;</span><span style="color:#C9D1D9;">)  </span><span style="color:#8B949E;">// url: /user/list</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">list</span><span style="color:#C9D1D9;">() {}</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>所有被映射成路由的函数，都需要通过<code>@Path</code>装饰器进行修饰；这样的目的也是为了规范和对项目路由的管理，减少由于缺乏管理导致函数暴露的情况发生。</p><h2 id="aspect装饰器替换为around" tabindex="-1"><a class="header-anchor" href="#aspect装饰器替换为around" aria-hidden="true">#</a> Aspect装饰器替换为Around</h2><blockquote><p>@umajs/core v2.0移除 before,after,afterReturing, afterThrowing钩子函数。对于之前使用Aspect装饰器的代码，升级使用Around进行装饰;这意味着你不能继续使用Aspect装饰器。</p></blockquote><p>之前：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// src/aspect/method.aspect.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { IAspect, IJoinPoint, IProceedJoinPoint } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> Method </span><span style="color:#FF7B72;">implements</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">IAspect</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">before</span><span style="color:#FFA657;">(point</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> IJoinPoint) </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 前置通知</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">after</span><span style="color:#FFA657;">(point</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> IJoinPoint) </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 后置通知</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#FF7B72;">async</span><span style="color:#FFA657;"> </span><span style="color:#D2A8FF;">around</span><span style="color:#FFA657;">(proceedPoint</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> IProceedJoinPoint) </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> { </span><span style="color:#79C0FF;">proceed</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">args</span><span style="color:#C9D1D9;"> ，} </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> proceedPoint</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 环绕通知before</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">proceed</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">...</span><span style="color:#C9D1D9;">args)</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 环绕通知after</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">afterThrowing</span><span style="color:#FFA657;">(e</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> Error) </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 异常通知</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">afterReturning</span><span style="color:#FFA657;">(point</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> IJoinPoint, result</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">any</span><span style="color:#FFA657;">) </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 返回通知</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>现在：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// src/aspect/method.aspect.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { IProceedJoinPoint } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">async</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">method</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">proceedPoint</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IProceedJoinPoint</span><span style="color:#C9D1D9;">&lt;</span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;">&gt;) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">    console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;method: this is around&#39;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> { </span><span style="color:#79C0FF;">proceed</span><span style="color:#C9D1D9;"> , </span><span style="color:#79C0FF;">target</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">arg</span><span style="color:#C9D1D9;"> } </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> proceedPoint;</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// proceed 路由函数</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// target 等同于controller实例 this</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// arg 路由函数参数 数组类型</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">result</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">proceed</span><span style="color:#C9D1D9;">(); </span><span style="color:#8B949E;">// 继续执行method函数</span></span>\n<span class="line"><span style="color:#C9D1D9;">    console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;method: this is around after&#39;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> result;</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>也可通过middlewareToAround转换成中间件的形式</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { middlewareToAround } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">mw</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">middlewareToAround</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">async</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">ctx</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">next</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">    console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;****** mw before ******&quot;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">next</span><span style="color:#C9D1D9;">();</span></span>\n<span class="line"><span style="color:#C9D1D9;">    console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;****** mw after *******&quot;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">});</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>同时，v2版本中提供了Middleware装饰器，可为路由函数在执行之前调用指定koa中间件，具体使用请查看文档。</p><p>现在，你在controller中需要将Aspect用法修改使用为Around装饰器方式。注：Aspect在V2中彻底被删除。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { BaseController, Path, Around, Result } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { method } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;../aspect/method.aspect&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> Index </span><span style="color:#FF7B72;">extends</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">BaseController</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">    \t</span><span style="color:#8B949E;">// before</span></span>\n<span class="line"><span style="color:#FFA657;">    \t@</span><span style="color:#D2A8FF;">Get</span><span style="color:#FFA657;">(</span><span style="color:#A5D6FF;">&#39;/reg/:name*&#39;</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">      @</span><span style="color:#D2A8FF;">Aspect</span><span style="color:#FFA657;">(</span><span style="color:#A5D6FF;">&#39;method&#39;</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">      </span><span style="color:#D2A8FF;">methodOld</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">          </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">`this is reg router`</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">      }</span></span>\n<span class="line"><span style="color:#FFA657;">      </span></span>\n<span class="line"><span style="color:#FFA657;">    \t</span><span style="color:#8B949E;">// after</span></span>\n<span class="line"><span style="color:#FFA657;">      @</span><span style="color:#D2A8FF;">Get</span><span style="color:#FFA657;">(</span><span style="color:#A5D6FF;">&#39;/reg/:name*&#39;</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">      @</span><span style="color:#D2A8FF;">Around</span><span style="color:#FFA657;">(</span><span style="color:#C9D1D9;">method</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">      </span><span style="color:#D2A8FF;">method</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">          </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">`this is reg router`</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">      }</span></span>\n<span class="line"><span style="color:#FFA657;">     }</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="service-inject装饰器只能接受函数引用" tabindex="-1"><a class="header-anchor" href="#service-inject装饰器只能接受函数引用" aria-hidden="true">#</a> Service，Inject装饰器只能接受函数引用</h2><blockquote><p>当使用IOC时，在V1版本中，我们可以通过<code>xxx.service.ts</code>文件命名约束，在<code>controller</code>中，我们在使用时可通过<code>@Service(&#39;xxx&#39;)</code>实现Service实例的注入。这很方便；但对于TS环境，我们不得不需要手动<code>import</code>对<code>Service</code>文件的类型声明。而在文件类型声明时我们将再次导入该文件的引用。所以在V2中我们直接取消了对<code>Service</code>的文件命名的<code>强制约束</code>，启动时也不再提前预加载扫描该目录。这带来的改变就是，<strong><code>Service,Inject</code>装饰器不在支持字符串方式实现class注入。</strong></p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// before </span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { BaseController, Path, Around, Result } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> UserService </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;../service/user.service&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> Index </span><span style="color:#FF7B72;">extends</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">BaseController</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#8B949E;">// before</span></span>\n<span class="line"><span style="color:#FFA657;">  @</span><span style="color:#D2A8FF;">Service</span><span style="color:#FFA657;">(</span><span style="color:#A5D6FF;">&#39;user&#39;</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">  userService</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> UserService;</span></span>\n<span class="line"><span style="color:#FFA657;">  @</span><span style="color:#D2A8FF;">Path</span><span style="color:#FFA657;">(</span><span style="color:#A5D6FF;">&#39;/&#39;</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">indexOld</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.userService.</span><span style="color:#D2A8FF;">getDefaultUserAge</span><span style="color:#C9D1D9;">());</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">  </span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#8B949E;">// after</span></span>\n<span class="line"><span style="color:#FFA657;">  @</span><span style="color:#D2A8FF;">Service</span><span style="color:#FFA657;">(</span><span style="color:#C9D1D9;">UserService</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">  userService</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> UserService;</span></span>\n<span class="line"><span style="color:#FFA657;">  @</span><span style="color:#D2A8FF;">Path</span><span style="color:#FFA657;">(</span><span style="color:#A5D6FF;">&#39;/&#39;</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">index</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.userService.</span><span style="color:#D2A8FF;">getDefaultUserAge</span><span style="color:#C9D1D9;">());</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>虽然框架默认取消了对文件命名的强制约束，但为了更好的阅读体验和一致的风格。我们依然建议的Service进行统一风格的命名和定义。</p>',24),F={},y=(0,a(4110).Z)(F,[["render",function(s,n){const a=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[p,(0,l._)("blockquote",null,[(0,l._)("p",null,[e,(0,l._)("a",o,[r,(0,l.Wm)(a)]),c])]),t],64)}]])},6898:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-07ece8e0",path:"/other/v1%E5%8D%87%E7%BA%A7.html",title:"v1迁移指南",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v2/other/v1%E5%8D%87%E7%BA%A7.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"v1迁移指南"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"取消默认文件路由，所有路由必须被@Path修饰使用",slug:"取消默认文件路由-所有路由必须被-path修饰使用",children:[]},{level:2,title:"Aspect装饰器替换为Around",slug:"aspect装饰器替换为around",children:[]},{level:2,title:"Service，Inject装饰器只能接受函数引用",slug:"service-inject装饰器只能接受函数引用",children:[]}],filePathRelative:"other/v1升级.md",git:{updatedTime:1634634545e3,contributors:[{name:"dazjean",email:"zunyi_zjj@163.com",commits:1}]}}},4110:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}}}]);