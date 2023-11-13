import{_ as r,r as i,o as d,c as l,b as e,e as a,d as n,a as s}from"./app-52249f43.js";const c={},o=s(`<h1 id="纯函数" tabindex="-1"><a class="header-anchor" href="#纯函数" aria-hidden="true">#</a> 纯函数</h1><p>纯函数具有如下特征</p><ol><li>只负责自己的任务，不会更改已存在的对象或变量</li><li>给定同样的输入，总是返回相同的结果</li></ol><p><strong>总结</strong>：<strong>纯函数不会改变函数作用域外的变量、或在函数调用前创建的对象</strong>——这会使函数变得不纯粹！<strong>React 会假设你编写的所有组件都是纯函数</strong></p><h1 id="副作用" tabindex="-1"><a class="header-anchor" href="#副作用" aria-hidden="true">#</a> 副作用</h1><p>副作用就是与渲染过程无关，额外发生的不符合预期的后果（改变了 在渲染前已经存在的任何对象或变量）</p><p>非纯函数的组件，就会带来副作用</p><h2 id="检测不纯的计算" tabindex="-1"><a class="header-anchor" href="#检测不纯的计算" aria-hidden="true">#</a> 检测不纯的计算</h2><p>React==严格模式可以检验不纯的计算==，在 “严格模式” 下开发时，React 会调用每个组件的函数两次，这可以帮助发现由不纯函数引起的错误。（确保相同输出，返回的是相同的结果）</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;React.StrictMode&gt;		
	{/*根组件*/}
&lt;/React.StrictMode&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染时读取的三种输入props，state，context应该始终视为只读</p><h1 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> Hooks</h1><p>Hooks是以<code>use</code>开头的特殊函数，只能在组件或自定义Hook==最顶层==调用，不能在条件，循环，嵌套函数类调用Hook</p><p><strong>==在同一组件的每次渲染中，Hooks 都依托于一个稳定的调用顺序==</strong></p><h2 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate" aria-hidden="true">#</a> useState</h2>`,15),u={href:"https://zh-hans.react.dev/reference/react/useState",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"useState(state,stateSetter)",-1),v=s(`<ol><li><strong>State 变量</strong> 用于保存渲染间的数据。</li><li><strong>State setter 函数</strong> 更新变量并触发 React 再次渲染组件。</li></ol><p><strong>state 完全私有于声明它的组件</strong>。父组件无法更改它</p><p>setter函数是异步的，只会在下一次渲染是变更state的值，多次执行setter无法改变当前state的值</p><p><strong>React 会使 state 的值始终”固定“在一次渲染的各个事件处理函数内部</strong>，所以<strong>一个 state 变量的值永远不会在一次渲染的内部发生变化</strong></p><h2 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h2><h3 id="引用一个不需要渲染的值" tabindex="-1"><a class="header-anchor" href="#引用一个不需要渲染的值" aria-hidden="true">#</a> 引用一个不需要渲染的值</h3><p>改变ref不会出发重新渲染，用于存储一些不影响视图的信息</p><p>通常情况下，在渲染过程中写入或读取 <code>ref.current</code> 是不允许的</p><h3 id="操作dom" tabindex="-1"><a class="header-anchor" href="#操作dom" aria-hidden="true">#</a> 操作DOM</h3><p>默认情况下，自定义组件不会暴露内部DOM节点的ref，需要在想获得ref的组件包装在forwardRef里</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>//parent
const inputRef = useRef(null);

return &lt;MyInput ref={inputRef} /&gt;;


//child
import { forwardRef } from &#39;react&#39;;

export default forwardRef(({ value, onChange }, ref) =&gt; {
  return (
    &lt;input
      value={value}
      onChange={onChange}
      ref={ref}
    /&gt;
  );
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback</h2>`,12),p={href:"https://zh-hans.react.dev/reference/react/useCallback",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"useCallback(fn, dependencies)",-1),f=e("p",null,[e("code",null,"useCallback(fn, dependencies)"),n(" 能根据dependencies（数组）中的依赖项是否变化决定是否缓存fn")],-1),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"Object.is",-1),g=e("code",null,"useCallback",-1),x=e("code",null,"useCallback",-1),C=e("strong",null,"此次",-1),k=e("p",null,[e("strong",null,"==useCallback 只应作用于性能优化==")],-1),R=e("h2",{id:"usememo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usememo","aria-hidden":"true"},"#"),n(" useMemo")],-1),I={href:"https://zh-hans.react.dev/reference/react/useMemo",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"useMemo(calculateValue, dependencies)",-1),M=e("p",null,"calculateValue是一个纯函数，不带参数，返回要计算的值，dependencies依赖项数组不变时，返回缓存值，否则再次调用calculateValue，返回新结果",-1),V=e("p",null,"作用：",-1),w=e("p",null,"跳过组件的重新渲染或者代价昂贵的重新计算",-1),H=e("p",null,"记忆另一个Hook的依赖",-1),z=e("p",null,"记忆一个函数",-1),O=e("h2",{id:"usecontext",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usecontext","aria-hidden":"true"},"#"),n(" useContext")],-1),E={href:"https://zh-hans.react.dev/reference/react/useContext",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"useContext(SomeContext)",-1),y=s(`<p>作用：向组件树深层传递数据</p><h3 id="createcontext" tabindex="-1"><a class="header-anchor" href="#createcontext" aria-hidden="true">#</a> createContext</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>const someContext = createContext(defaultValue)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数：<code>someContext</code>是通过createContext创建的context，本身不包含信息，只代表信息类型</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import { createContext,useContext } from &#39;react&#39;
const someContext = createContext(null)

//highLevelComponent
export default function App() {
    return (
    	&lt;SomeContext.Provider value =&quot;往下传递的context值&quot;&gt;
        	&lt;someComponent/&gt;
        &lt;/SomeContext.Provider&gt;
    )
}

//lowLevelComponent
function someComponent() {
    const phone = useContext(someContext)	
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h2>`,6),D={href:"https://zh-hans.react.dev/reference/react/useEffect",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"useEffect(setup, dependencieds?)",-1),j={href:"https://zh-hans.react.dev/learn/synchronizing-with-effects",target:"_blank",rel:"noopener noreferrer"},B=s(`<h2 id="usetransition" tabindex="-1"><a class="header-anchor" href="#usetransition" aria-hidden="true">#</a> useTransition</h2><p>让你在不阻塞 UI 的情况下来更新状态</p><h2 id="useimperativehandle" tabindex="-1"><a class="header-anchor" href="#useimperativehandle" aria-hidden="true">#</a> useImperativeHandle</h2><p>自定义由ref暴露出来的句柄</p><h3 id="向父组件暴露一个自定义的ref句柄" tabindex="-1"><a class="header-anchor" href="#向父组件暴露一个自定义的ref句柄" aria-hidden="true">#</a> 向父组件暴露一个自定义的ref句柄</h3><p>举例来说，假设你不想暴露出整个 <code>&lt;input&gt;</code> DOM 节点，但你想要它其中两个方法：<code>focus</code> 和 <code>scrollIntoView</code>。为此，用单独额外的 ref 来指向真实的浏览器 DOM。然后使用 <code>useImperativeHandle</code> 来暴露一个句柄，它只返回你想要父组件去调用的方法：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import { forwardRef, useRef, useImperativeHandle } from &#39;react&#39;;

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () =&gt; {		//父组件只能通过ref访问返回的方法
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
    };
  }, []);

  return &lt;input {...props} ref={inputRef} /&gt;;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function q(P,T){const t=i("ExternalLinkIcon");return d(),l("div",null,[o,e("p",null,[e("a",u,[h,a(t)]),n(" 向函数式组件添加一个状态变量")]),v,e("p",null,[e("a",p,[m,a(t)]),n(" 允许你==在多次渲染中缓存函数==")]),f,e("p",null,[n("React 将会使用 "),e("a",b,[_,a(t)]),n(" 把 当前的依赖 和已传入之前的依赖进行比较。如果没有任何依赖改变，"),g,n(" 将会返回与之前一样的函数。否则 "),x,n(" 将返回 "),C,n(" 渲染中传递的函数。")]),k,R,e("p",null,[e("a",I,[S,a(t)]),n("在==每次重新渲染的时候能够缓存计算的结果。==")]),M,V,w,H,z,O,e("p",null,[e("a",E,[N,a(t)]),n("==让你读取和订阅组件中的context==")]),y,e("p",null,[e("a",D,[L,a(t)]),n("允许你 "),e("a",j,[n("将组件与外部系统同步"),a(t)]),n("。")]),B])}const G=r(c,[["render",q],["__file","React18.html.vue"]]);export{G as default};
