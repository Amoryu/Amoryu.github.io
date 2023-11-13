import{_ as n,o as s,c as a,a as e}from"./app-52249f43.js";const p={},t=e(`<h1 id="底层实现原理" tabindex="-1"><a class="header-anchor" href="#底层实现原理" aria-hidden="true">#</a> 底层实现原理</h1><h2 id="_1-渲染函数" tabindex="-1"><a class="header-anchor" href="#_1-渲染函数" aria-hidden="true">#</a> 1 .渲染函数</h2><p>作用：不通过模板语法，创建虚拟DOM节点</p><p>用模板语法无法解决时，可以考虑使用渲染函数</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 完整参数签名</span>
<span class="token keyword">function</span> <span class="token function">h</span><span class="token punctuation">(</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Component<span class="token punctuation">,</span>  <span class="token comment">//既可以是一个字符串 (用于原生元素) 也可以是一个 Vue 组件定义</span>
  props<span class="token operator">?</span><span class="token operator">:</span> object <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>	<span class="token comment">//第二个参数是要传递的 prop</span>
  children<span class="token operator">?</span><span class="token operator">:</span> Children <span class="token operator">|</span> Slot <span class="token operator">|</span> Slots	<span class="token comment">//第三个参数是子节点。</span>
<span class="token punctuation">)</span><span class="token operator">:</span> VNode

<span class="token comment">// 省略 props</span>
<span class="token keyword">function</span> <span class="token function">h</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Component<span class="token punctuation">,</span> children<span class="token operator">?</span><span class="token operator">:</span> Children <span class="token operator">|</span> Slot<span class="token punctuation">)</span><span class="token operator">:</span> VNode

<span class="token keyword">type</span> <span class="token class-name">Children</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> VNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> Children<span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">type</span> <span class="token class-name">Slot</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Children

<span class="token keyword">type</span> <span class="token class-name">Slots</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> Slot <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插槽在渲染函数中的应用</p><h3 id="编译器与渲染函数" tabindex="-1"><a class="header-anchor" href="#编译器与渲染函数" aria-hidden="true">#</a> 编译器与渲染函数</h3><p>推断出静态的，永远不会改变的，使编译器不会对其进行diff对比</p><p>缓存事件处理程序，避免事情重复挂载，如果时间是绑定到子组件上，可以避免造成子组件重新渲染</p><h3 id="block和vnode" tabindex="-1"><a class="header-anchor" href="#block和vnode" aria-hidden="true">#</a> block和VNode</h3><h1 id="vue3是如何使用ast的" tabindex="-1"><a class="header-anchor" href="#vue3是如何使用ast的" aria-hidden="true">#</a> Vue3是如何使用AST的</h1><p>将template模板编译为浏览器能识别的Javascript</p><p>Abstract Syntax Tree：词法分析 =》token，语法分析 =》结构，代码转换 =》transform， 代码生成 =》 generate</p><p>template =&gt; js Vue的compiler</p><p>JSX =&gt; js babel</p>`,15),o=[t];function c(l,r){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","Vue3dicengshixianyuanli.html.vue"]]);export{d as default};
