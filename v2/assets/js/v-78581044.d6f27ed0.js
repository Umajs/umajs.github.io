"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[629],{18:(s,n,a)=>{a.r(n),a.d(n,{default:()=>c});var l=a(4386);const p=(0,l.uE)('<h1 id="统一返回-result" tabindex="-1"><a class="header-anchor" href="#统一返回-result" aria-hidden="true">#</a> 统一返回（Result）</h1><p>在 koa 和大多数框架中，没有统一返回，这样在使用框架返回数据的时候需要额外处理，如果要对返回结果做处理可能需要修改很多地方，但是在进行了统一返回之后这些都变得很简单。</p><h2 id="result" tabindex="-1"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h2><h4 id="result-send-val-status" tabindex="-1"><a class="header-anchor" href="#result-send-val-status" aria-hidden="true">#</a> <code>Result.send(val, status)</code></h4><p>用于快捷返回文本内容，第二个参数为返回状态码。</p><h4 id="result-json-data" tabindex="-1"><a class="header-anchor" href="#result-json-data" aria-hidden="true">#</a> <code>Result.json(data)</code></h4><p>返回 json 数据，并将<code>content-type</code>设置为<code>application/json</code>。</p><h4 id="result-jsonp-data-callback" tabindex="-1"><a class="header-anchor" href="#result-jsonp-data-callback" aria-hidden="true">#</a> <code>Result.jsonp(data, callback)</code></h4><p>以 jsonp 的形式返回数据。</p><h4 id="result-view-templatepath-data" tabindex="-1"><a class="header-anchor" href="#result-view-templatepath-data" aria-hidden="true">#</a> <code>Result.view(templatePath, data)</code></h4><p>通过渲染模板的方式将数据返回。</p><h4 id="result-stream-data-filename" tabindex="-1"><a class="header-anchor" href="#result-stream-data-filename" aria-hidden="true">#</a> <code>Result.stream(data, fileName)</code></h4><p>将文件以流（stream）的方式返回</p><h4 id="result-download-filepath-opts" tabindex="-1"><a class="header-anchor" href="#result-download-filepath-opts" aria-hidden="true">#</a> <code>Result.download(filePath, opts)</code></h4><p>下载文件</p><h4 id="result-done" tabindex="-1"><a class="header-anchor" href="#result-done" aria-hidden="true">#</a> <code>Result.done()</code></h4><p>使用 ctx 进行完了操作，不需要使用 Result 进行其它的返回时使用此方法，常用于框架的迁移。</p><blockquote><p>例如下面两个方法 <code>json1</code> 和 <code>json2</code> 表示的意思是一样的。</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">extends</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">BaseController</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">json1</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.body </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;Hello&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;">// ctx 响应</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">done</span><span style="color:#C9D1D9;">()</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">json2</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;Hello&#39;</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><h3 id="controller-实例" tabindex="-1"><a class="header-anchor" href="#controller-实例" aria-hidden="true">#</a> controller 实例</h3><p>Uma 在需要的模板返回的数据中加入 version，这里我们用 Aspect.around 可以很容易做到。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// version.aspect.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { IAspect, IJoinPoint, IProceedJoinPoint, Result } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">implements</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">IAspect</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">    </span><span style="color:#FF7B72;">async</span><span style="color:#FFA657;"> </span><span style="color:#D2A8FF;">around</span><span style="color:#FFA657;">(proceedPoint</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> IProceedJoinPoint&lt;</span><span style="color:#79C0FF;">any</span><span style="color:#FFA657;">&gt;) </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">result</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Result</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> proceedPoint.</span><span style="color:#D2A8FF;">proceed</span><span style="color:#C9D1D9;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">        result.data.version </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;v1.0.0&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> result;</span></span>\n<span class="line"><span style="color:#C9D1D9;">    }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#8B949E;">// info.controller.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { BaseController, Aspect, Result } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> Info </span><span style="color:#FF7B72;">extends</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">BaseController</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFA657;">    @</span><span style="color:#C9D1D9;">Aspect</span><span style="color:#FFA657;">.</span><span style="color:#D2A8FF;">aournd</span><span style="color:#FFA657;">(</span><span style="color:#A5D6FF;">&#39;version&#39;</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">    </span><span style="color:#D2A8FF;">info</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">view</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;info.html&#39;</span><span style="color:#C9D1D9;">, {});</span></span>\n<span class="line"><span style="color:#C9D1D9;">    }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="controller-参数实例" tabindex="-1"><a class="header-anchor" href="#controller-参数实例" aria-hidden="true">#</a> controller 参数实例</h3>',24),e=(0,l.Uk)("createArgDecorator 参考文档"),o=(0,l.uE)('<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2><p>想要扩展 <code>Result</code> 的返回方法，请使用 <code>plugin</code> 的扩展方式，示例如下：</p><blockquote><p>扩展带状态的 redirect 方法</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// plugin.config.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#C9D1D9;">redirect: </span><span style="color:#79C0FF;">true</span><span style="color:#FFA657;">,</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// plugins/redirect/index.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { IContext, TPlugin, RequestMethod, Result </span><span style="color:#FF7B72;">as</span><span style="color:#C9D1D9;"> R } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">TRedirect2</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">url</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">status</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">class</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Result</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">extends</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">R</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">static</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">redirect2</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">url</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">status</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span><span style="color:#C9D1D9;">) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Result</span><span style="color:#C9D1D9;">({</span></span>\n<span class="line"><span style="color:#C9D1D9;">      type: </span><span style="color:#A5D6FF;">&#39;redirect2&#39;</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">      data: {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        url,</span></span>\n<span class="line"><span style="color:#C9D1D9;">        status,</span></span>\n<span class="line"><span style="color:#C9D1D9;">      },</span></span>\n<span class="line"><span style="color:#C9D1D9;">    })</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> ()</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> TPlugin </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">    results: {</span></span>\n<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#D2A8FF;">redirect2</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">ctx</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IContext</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">data</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">TRedirect2</span><span style="color:#C9D1D9;">) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> { </span><span style="color:#79C0FF;">url</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">status</span><span style="color:#C9D1D9;"> } </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> data</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">        ctx.status </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> status</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> ctx.</span><span style="color:#D2A8FF;">redirect</span><span style="color:#C9D1D9;">(url)</span></span>\n<span class="line"><span style="color:#C9D1D9;">      },</span></span>\n<span class="line"><span style="color:#C9D1D9;">    },</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// index.controller.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { BaseController, Path } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { Result } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;../plugins/test/index&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> Index </span><span style="color:#FF7B72;">extends</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">BaseController</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">  @</span><span style="color:#D2A8FF;">Path</span><span style="color:#FFA657;">(</span><span style="color:#A5D6FF;">&#39;/r&#39;</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">extendResult</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">redirect2</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;/&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">301</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',6),r={},c=(0,a(4110).Z)(r,[["render",function(s,n){const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[p,(0,l._)("p",null,[(0,l.Wm)(a,{to:"/%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD/Decorator.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%E8%A3%85%E9%A5%B0%E5%99%A8-createargdecorator"},{default:(0,l.w5)((()=>[e])),_:1})]),o],64)}]])},969:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-78581044",path:"/%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD/Result.html",title:"统一返回（Result）",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v2/%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD/Result.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"统一返回（Result）"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"Result",slug:"result",children:[]},{level:2,title:"实例",slug:"实例",children:[{level:3,title:"controller 实例",slug:"controller-实例",children:[]},{level:3,title:"controller 参数实例",slug:"controller-参数实例",children:[]}]},{level:2,title:"扩展",slug:"扩展",children:[]}],filePathRelative:"基础功能/Result.md",git:{updatedTime:1630481998e3,contributors:[{name:"jiazengp",email:"jiazengp@gmail.com",commits:1}]}}},4110:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}}}]);