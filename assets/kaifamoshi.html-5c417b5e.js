import{_ as t,o as n,c as s,a as r,b as e,d as o}from"./app-52249f43.js";const a={},i=r('<h1 id="单点登录模式" tabindex="-1"><a class="header-anchor" href="#单点登录模式" aria-hidden="true">#</a> 单点登录模式:</h1><h2 id="_1-session-token模式" tabindex="-1"><a class="header-anchor" href="#_1-session-token模式" aria-hidden="true">#</a> 1.session+token模式</h2><p>子系统不停查询认证中心方式，优点是很容易控制用户在线状态，缺点是费钱。</p><h2 id="_2-token模式" tabindex="-1"><a class="header-anchor" href="#_2-token模式" aria-hidden="true">#</a> 2.token模式</h2><p>子系统自己查询token是否有效，优点是方便子系统扩容，缺点是不容易控制用户状态。</p><h2 id="_3-token-refreshtoken模式" tabindex="-1"><a class="header-anchor" href="#_3-token-refreshtoken模式" aria-hidden="true">#</a> 3.token+refreshtoken模式</h2><p>认证中心返回短期token和长期refreshtoken子系统查询token，优点是子系统容易扩容，可以控制用户状态</p><p>双token机制可以用于实现<strong>单点登录（SSO）</strong>，其中一个token是用户的身份验证信息，例如用户名和密码，另一个token则是由认证服务器生成的用于会话管理和授权的令牌。</p><p>以下是使用双token机制实现SSO的<strong>基本流程</strong>：</p><blockquote><ol><li>用户尝试访问某个需要身份验证的应用程序。</li><li>应用程序重定向到认证服务器，并要求用户提供其身份验证凭据。</li><li>认证服务器使用用户提供的凭据进行身份验证，并生成一个access token作为会话令牌，并将其返回给应用程序。</li><li>应用程序将access token保存在cookie或浏览器存储中，并使用该令牌来完成后续对服务端资源的请求。</li><li>如果access token过期或失效，应用程序可以使用refresh token来获取新的access token而无需再次提示用户进行身份验证。</li></ol></blockquote><p>用双token机制实现SSO具有<strong>以下优点：</strong></p><blockquote><ul><li><strong>提高安全性</strong>：用户只需输入一次凭据即可访问多个应用程序，从而降低了密码泄露和钓鱼攻击等安全风险。</li><li><strong>简化管理</strong>：管理员可以集中管理所有应用程序的访问控制策略，并轻松地撤销或更新访问权限。</li><li><strong>提高用户体验</strong>：用户不必在每个应用程序中都输入凭据，这样可以节省时间并提高用户满意度。</li></ul></blockquote>',12),c=e("div",{class:"custom-container tip"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])]),e("p",{class:"custom-container-title"},"TIP"),e("p",null,[o("需要注意的是， 使用双token机制实现SSO需要对访问控制和令牌管理进行严格的安全审计和监管。"),e("br"),o(" 如果认证服务器被攻击或失效，则可能会导致所有关联的应用程序受到影响。"),e("br"),o(" 因此，建议使用可靠的身份验证方案，并定期更新access token和refresh token的过期时间。")])],-1),l=[i,c];function h(k,d){return n(),s("div",null,l)}const _=t(a,[["render",h],["__file","kaifamoshi.html.vue"]]);export{_ as default};
