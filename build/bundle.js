var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function c(t,n,e,o,r,s,i){const c=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(c){const r=l(n,e,o,i);t.p(r,c)}}const u="undefined"!=typeof window;let a=u?()=>window.performance.now():()=>Date.now(),f=u?t=>requestAnimationFrame(t):t;const d=new Set;function p(t){d.forEach((n=>{n.c(t)||(d.delete(n),n.f())})),0!==d.size&&f(p)}function y(t,n){t.appendChild(n)}function $(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function h(){return w(" ")}function b(){return w("")}function C(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function _(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function B(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}const O=new Set;let E,W=0;function k(t,n,e,o,r,s,i,l=0){const c=16.666/o;let u="{\n";for(let t=0;t<=1;t+=c){const o=n+(e-n)*s(t);u+=100*t+`%{${i(o,1-o)}}\n`}const a=u+`100% {${i(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${l}`,d=t.ownerDocument;O.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(g("style")).sheet),y=d.__svelte_rules||(d.__svelte_rules={});y[f]||(y[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${f} ${o}ms linear ${r}ms 1 both`,W+=1,f}function A(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),W-=r,W||f((()=>{W||(O.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),O.clear())})))}function F(t){E=t}function P(){if(!E)throw new Error("Function called outside component initialization");return E}function z(t,n){P().$$.context.set(t,n)}const S=[],D=[],N=[],j=[],T=Promise.resolve();let L=!1;function R(t){N.push(t)}let q=!1;const M=new Set;function K(){if(!q){q=!0;do{for(let t=0;t<S.length;t+=1){const n=S[t];F(n),Z(n.$$)}for(F(null),S.length=0;D.length;)D.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];M.has(n)||(M.add(n),n())}N.length=0}while(S.length);for(;j.length;)j.pop()();L=!1,q=!1,M.clear()}}function Z(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(R)}}let G;function I(t,n,e){t.dispatchEvent(B(`${n?"intro":"outro"}${e}`))}const Y=new Set;let H;function J(){H={r:0,c:[],p:H}}function Q(){H.r||r(H.c),H=H.p}function U(t,n){t&&t.i&&(Y.delete(t),t.i(n))}function V(t,n,e,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),H.c.push((()=>{Y.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const X={duration:0};function tt(e,o,i,l){let c=o(e,i),u=l?0:1,y=null,$=null,m=null;function g(){m&&A(e,m)}function w(t,n){const e=t.b-u;return n*=Math.abs(e),{a:u,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function h(o){const{delay:s=0,duration:i=300,easing:l=n,tick:h=t,css:b}=c||X,C={start:a()+s,b:o};o||(C.group=H,H.r+=1),y||$?$=C:(b&&(g(),m=k(e,u,o,i,s,l,b)),o&&h(0,1),y=w(C,i),R((()=>I(e,o,"start"))),function(t){let n;0===d.size&&f(p),new Promise((e=>{d.add(n={c:t,f:e})}))}((t=>{if($&&t>$.start&&(y=w($,i),$=null,I(e,y.b,"start"),b&&(g(),m=k(e,u,y.b,y.duration,0,l,c.css))),y)if(t>=y.end)h(u=y.b,1-u),I(e,y.b,"end"),$||(y.b?g():--y.group.r||r(y.group.c)),y=null;else if(t>=y.start){const n=t-y.start;u=y.a+y.d*l(n/y.duration),h(u,1-u)}return!(!y&&!$)})))}return{run(t){s(c)?(G||(G=Promise.resolve(),G.then((()=>{G=null}))),G).then((()=>{c=c(),h(t)})):h(t)},end(){g(),y=$=null}}}const nt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function et(t){t&&t.c()}function ot(t,n,o,i){const{fragment:l,on_mount:c,on_destroy:u,after_update:a}=t.$$;l&&l.m(n,o),i||R((()=>{const n=c.map(e).filter(s);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(R)}function rt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){-1===t.$$.dirty[0]&&(S.push(t),L||(L=!0,T.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function it(n,e,s,i,l,c,u=[-1]){const a=E;F(n);const f=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let d=!1;if(f.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&l(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&st(n,t)),e})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();e.intro&&U(n.$$.fragment),ot(n,e.target,e.anchor,e.customElement),K()}F(a)}class lt{$destroy(){rt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ct(n){let e,o,r;return{c(){e=g("body"),o=w("BLA BLA\r\n    "),r=w(n[0]),v(e,"class","svelte-1v9or93")},m(t,n){$(t,e,n),y(e,o),y(e,r)},p(t,[n]){1&n&&x(r,t[0])},i:t,o:t,d(t){t&&m(e)}}}function ut(t,n,e){let{texte:o}=n;return t.$$set=t=>{"texte"in t&&e(0,o=t.texte)},[o]}class at extends lt{constructor(t){super(),it(this,t,ut,ct,i,{texte:0})}}function ft(n){let e,o,r,s,i,l;return{c(){e=g("section"),o=g("div"),r=g("b"),s=w(n[0]),_(o,"font-family",n[2]),_(o,"color",n[3]),_(o,"font-size",n[4]),_(e,"background-color",n[1]),v(e,"class","svelte-l38am1")},m(t,c){$(t,e,c),y(e,o),y(o,r),y(r,s),i||(l=C(e,"click",n[5]),i=!0)},p(t,[n]){1&n&&x(s,t[0]),4&n&&_(o,"font-family",t[2]),8&n&&_(o,"color",t[3]),16&n&&_(o,"font-size",t[4]),2&n&&_(e,"background-color",t[1])},i:t,o:t,d(t){t&&m(e),i=!1,l()}}}function dt(t,n,e){let{title:o}=n,{color:r}=n,{typo:s}=n,{typoColor:i}=n,{typoSize:l}=n;const{open:c}=(u="simple-modal",P().$$.context.get(u));var u;return t.$$set=t=>{"title"in t&&e(0,o=t.title),"color"in t&&e(1,r=t.color),"typo"in t&&e(2,s=t.typo),"typoColor"in t&&e(3,i=t.typoColor),"typoSize"in t&&e(4,l=t.typoSize)},[o,r,s,i,l,()=>{c(at,{texte:o})}]}class pt extends lt{constructor(t){super(),it(this,t,dt,ft,i,{title:0,color:1,typo:2,typoColor:3,typoSize:4})}}function yt(t,{delay:e=0,duration:o=400,easing:r=n}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*s}}const{window:$t}=nt;function mt(t){let n,e,o,i,l,c,u,a,f,d,p,w=t[0].closeButton&&gt(t);var b=t[1];return b&&(c=new b({})),{c(){n=g("div"),e=g("div"),o=g("div"),w&&w.c(),i=h(),l=g("div"),c&&et(c.$$.fragment),v(l,"class","content svelte-2wx9ab"),v(l,"style",t[8]),v(o,"class","window svelte-2wx9ab"),v(o,"role","dialog"),v(o,"aria-modal","true"),v(o,"style",t[7]),v(e,"class","window-wrap svelte-2wx9ab"),v(e,"style",t[6]),v(n,"class","bg svelte-2wx9ab"),v(n,"style",t[5])},m(r,u){$(r,n,u),y(n,e),y(e,o),w&&w.m(o,null),y(o,i),y(o,l),c&&ot(c,l,null),t[37](o),t[38](e),t[39](n),f=!0,d||(p=[C(o,"introstart",(function(){s(t[12])&&t[12].apply(this,arguments)})),C(o,"outrostart",(function(){s(t[13])&&t[13].apply(this,arguments)})),C(o,"introend",(function(){s(t[14])&&t[14].apply(this,arguments)})),C(o,"outroend",(function(){s(t[15])&&t[15].apply(this,arguments)})),C(n,"click",t[19])],d=!0)},p(r,s){if((t=r)[0].closeButton?w?(w.p(t,s),1&s[0]&&U(w,1)):(w=gt(t),w.c(),U(w,1),w.m(o,i)):w&&(J(),V(w,1,1,(()=>{w=null})),Q()),b!==(b=t[1])){if(c){J();const t=c;V(t.$$.fragment,1,0,(()=>{rt(t,1)})),Q()}b?(c=new b({}),et(c.$$.fragment),U(c.$$.fragment,1),ot(c,l,null)):c=null}(!f||256&s[0])&&v(l,"style",t[8]),(!f||128&s[0])&&v(o,"style",t[7]),(!f||64&s[0])&&v(e,"style",t[6]),(!f||32&s[0])&&v(n,"style",t[5])},i(e){f||(U(w),c&&U(c.$$.fragment,e),R((()=>{u||(u=tt(o,t[11],t[0].transitionWindowProps,!0)),u.run(1)})),R((()=>{a||(a=tt(n,t[10],t[0].transitionBgProps,!0)),a.run(1)})),f=!0)},o(e){V(w),c&&V(c.$$.fragment,e),u||(u=tt(o,t[11],t[0].transitionWindowProps,!1)),u.run(0),a||(a=tt(n,t[10],t[0].transitionBgProps,!1)),a.run(0),f=!1},d(e){e&&m(n),w&&w.d(),c&&rt(c),t[37](null),e&&u&&u.end(),t[38](null),t[39](null),e&&a&&a.end(),d=!1,r(p)}}}function gt(t){let n,e,o,r,s;const i=[ht,wt],l=[];function c(t,e){return 1&e[0]&&(n=!!t[16](t[0].closeButton)),n?0:1}return e=c(t,[-1]),o=l[e]=i[e](t),{c(){o.c(),r=b()},m(t,n){l[e].m(t,n),$(t,r,n),s=!0},p(t,n){let s=e;e=c(t,n),e===s?l[e].p(t,n):(J(),V(l[s],1,1,(()=>{l[s]=null})),Q(),o=l[e],o?o.p(t,n):(o=l[e]=i[e](t),o.c()),U(o,1),o.m(r.parentNode,r))},i(t){s||(U(o),s=!0)},o(t){V(o),s=!1},d(t){l[e].d(t),t&&m(r)}}}function wt(n){let e,o,r;return{c(){e=g("button"),v(e,"class","close svelte-2wx9ab"),v(e,"style",n[9])},m(t,s){$(t,e,s),o||(r=C(e,"click",n[17]),o=!0)},p(t,n){512&n[0]&&v(e,"style",t[9])},i:t,o:t,d(t){t&&m(e),o=!1,r()}}}function ht(t){let n,e,o;var r=t[0].closeButton;function s(t){return{props:{onClose:t[17]}}}return r&&(n=new r(s(t))),{c(){n&&et(n.$$.fragment),e=b()},m(t,r){n&&ot(n,t,r),$(t,e,r),o=!0},p(t,o){if(r!==(r=t[0].closeButton)){if(n){J();const t=n;V(t.$$.fragment,1,0,(()=>{rt(t,1)})),Q()}r?(n=new r(s(t)),et(n.$$.fragment),U(n.$$.fragment,1),ot(n,e.parentNode,e)):n=null}},i(t){o||(n&&U(n.$$.fragment,t),o=!0)},o(t){n&&V(n.$$.fragment,t),o=!1},d(t){t&&m(e),n&&rt(n,t)}}}function bt(t){let n,e,o,r,s=t[1]&&mt(t);const i=t[36].default,u=function(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}(i,t,t[35],null);return{c(){s&&s.c(),n=h(),u&&u.c()},m(i,l){s&&s.m(i,l),$(i,n,l),u&&u.m(i,l),e=!0,o||(r=C($t,"keydown",t[18]),o=!0)},p(t,o){t[1]?s?(s.p(t,o),2&o[0]&&U(s,1)):(s=mt(t),s.c(),U(s,1),s.m(n.parentNode,n)):s&&(J(),V(s,1,1,(()=>{s=null})),Q()),u&&u.p&&(!e||16&o[1])&&c(u,i,t,t[35],o,null,null)},i(t){e||(U(s),U(u,t),e=!0)},o(t){V(s),V(u,t),e=!1},d(t){s&&s.d(t),t&&m(n),u&&u.d(t),o=!1,r()}}}function Ct(t,n,e){let{$$slots:o={},$$scope:r}=n;const s=function(){const t=P();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=B(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}(),i=z;let{show:l=null}=n,{key:c="simple-modal"}=n,{closeButton:u=!0}=n,{closeOnEsc:a=!0}=n,{closeOnOuterClick:f=!0}=n,{styleBg:d={}}=n,{styleWindowWrap:p={}}=n,{styleWindow:y={}}=n,{styleContent:$={}}=n,{styleCloseButton:m={}}=n,{setContext:g=i}=n,{transitionBg:w=yt}=n,{transitionBgProps:h={duration:250}}=n,{transitionWindow:b=w}=n,{transitionWindowProps:C=h}=n;const v={closeButton:u,closeOnEsc:a,closeOnOuterClick:f,styleBg:d,styleWindowWrap:p,styleWindow:y,styleContent:$,styleCloseButton:m,transitionBg:w,transitionBgProps:h,transitionWindow:b,transitionWindowProps:C};let x,_,O,E,W,k,A,F,S,N,j,T,L,R={...v},q=null;const M=t=>Object.keys(t).reduce(((n,e)=>`${n}; ${(t=>t.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase())(e)}: ${t[e]}`),""),K=t=>!!(t&&t.constructor&&t.call&&t.apply),Z=()=>{};let G=Z,I=Z,Y=Z,H=Z;const J=(t,n={},o={},r={})=>{e(1,q=function(t,n={}){return function(e){return new t({...e,props:{...n,...e.props}})}}(t,n)),e(0,R={...v,...o}),e(5,W=M(R.styleBg)),e(6,k=M(R.styleWindowWrap)),e(7,A=M(R.styleWindow)),e(8,F=M(R.styleContent)),e(9,S=M(R.styleCloseButton)),e(10,N=R.transitionBg),e(11,j=R.transitionWindow),U(),e(12,G=t=>{r.onOpen&&r.onOpen(t),s("open"),s("opening")}),e(13,I=t=>{r.onClose&&r.onClose(t),s("close"),s("closing")}),e(14,Y=t=>{r.onOpened&&r.onOpened(t),s("opened")}),e(15,H=t=>{r.onClosed&&r.onClosed(t),s("closed")})},Q=(t={})=>{e(13,I=t.onClose||I),e(15,H=t.onClosed||H),e(1,q=null),V()},U=()=>{E=window.scrollY,T=document.body.style.position,L=document.body.style.overflow,document.body.style.position="fixed",document.body.style.top=`-${E}px`,document.body.style.overflow="hidden"},V=()=>{document.body.style.position=T||"",document.body.style.top="",document.body.style.overflow=L||"",window.scrollTo(0,E)};var X;return g(c,{open:J,close:Q}),X=()=>{Q()},P().$$.on_destroy.push(X),t.$$set=t=>{"show"in t&&e(20,l=t.show),"key"in t&&e(21,c=t.key),"closeButton"in t&&e(22,u=t.closeButton),"closeOnEsc"in t&&e(23,a=t.closeOnEsc),"closeOnOuterClick"in t&&e(24,f=t.closeOnOuterClick),"styleBg"in t&&e(25,d=t.styleBg),"styleWindowWrap"in t&&e(26,p=t.styleWindowWrap),"styleWindow"in t&&e(27,y=t.styleWindow),"styleContent"in t&&e(28,$=t.styleContent),"styleCloseButton"in t&&e(29,m=t.styleCloseButton),"setContext"in t&&e(30,g=t.setContext),"transitionBg"in t&&e(31,w=t.transitionBg),"transitionBgProps"in t&&e(32,h=t.transitionBgProps),"transitionWindow"in t&&e(33,b=t.transitionWindow),"transitionWindowProps"in t&&e(34,C=t.transitionWindowProps),"$$scope"in t&&e(35,r=t.$$scope)},t.$$.update=()=>{1048576&t.$$.dirty[0]&&(K(l)?J(l):Q())},[R,q,x,_,O,W,k,A,F,S,N,j,G,I,Y,H,K,Q,t=>{if(R.closeOnEsc&&q&&"Escape"===t.key&&(t.preventDefault(),Q()),q&&"Tab"===t.key){const n=O.querySelectorAll("*"),e=Array.from(n).filter((t=>t.tabIndex>=0));let o=e.indexOf(document.activeElement);-1===o&&t.shiftKey&&(o=0),o+=e.length+(t.shiftKey?-1:1),o%=e.length,e[o].focus(),t.preventDefault()}},t=>{!R.closeOnOuterClick||t.target!==x&&t.target!==_||(t.preventDefault(),Q())},l,c,u,a,f,d,p,y,$,m,g,w,h,b,C,r,o,function(t){D[t?"unshift":"push"]((()=>{O=t,e(4,O)}))},function(t){D[t?"unshift":"push"]((()=>{_=t,e(3,_)}))},function(t){D[t?"unshift":"push"]((()=>{x=t,e(2,x)}))}]}class vt extends lt{constructor(t){super(),it(this,t,Ct,bt,i,{show:20,key:21,closeButton:22,closeOnEsc:23,closeOnOuterClick:24,styleBg:25,styleWindowWrap:26,styleWindow:27,styleContent:28,styleCloseButton:29,setContext:30,transitionBg:31,transitionBgProps:32,transitionWindow:33,transitionWindowProps:34},[-1,-1])}}function xt(n){let e,o,r,s,i,l,c,u,a,f,d,p,y,g;return e=new pt({props:{color:"#E423F0",title:"On m’appelait le fils du diable",typo:"Patua One",typoColor:"#FFCF2A",typoSize:"5em"}}),r=new pt({props:{color:"#785BCA",title:"On me comparait à un porcidou",typo:"Recursive",typoColor:"#55EFDB",typoSize:"5em"}}),i=new pt({props:{color:"#5FC9FA",title:"AAAAAA",typo:"Abril Fatface",typoColor:"#FFFFFE",typoSize:"5em"}}),c=new pt({props:{color:"#E9CECE",title:"purple",typo:"Days One",typoColor:"#C92525",typoSize:"5em"}}),a=new pt({props:{color:"#F4A6D0",title:"yellow",typo:"Goblin One",typoColor:"#0060FF",typoSize:"5em"}}),d=new pt({props:{color:"#3E4797",title:"brown",typo:"Newsreader",typoColor:"#FF9000",typoSize:"5em"}}),y=new pt({props:{color:"#C0AAFF",title:"orange",typo:"Orbitron",typoColor:"#90F2A0",typoSize:"5em"}}),{c(){et(e.$$.fragment),o=h(),et(r.$$.fragment),s=h(),et(i.$$.fragment),l=h(),et(c.$$.fragment),u=h(),et(a.$$.fragment),f=h(),et(d.$$.fragment),p=h(),et(y.$$.fragment)},m(t,n){ot(e,t,n),$(t,o,n),ot(r,t,n),$(t,s,n),ot(i,t,n),$(t,l,n),ot(c,t,n),$(t,u,n),ot(a,t,n),$(t,f,n),ot(d,t,n),$(t,p,n),ot(y,t,n),g=!0},p:t,i(t){g||(U(e.$$.fragment,t),U(r.$$.fragment,t),U(i.$$.fragment,t),U(c.$$.fragment,t),U(a.$$.fragment,t),U(d.$$.fragment,t),U(y.$$.fragment,t),g=!0)},o(t){V(e.$$.fragment,t),V(r.$$.fragment,t),V(i.$$.fragment,t),V(c.$$.fragment,t),V(a.$$.fragment,t),V(d.$$.fragment,t),V(y.$$.fragment,t),g=!1},d(t){rt(e,t),t&&m(o),rt(r,t),t&&m(s),rt(i,t),t&&m(l),rt(c,t),t&&m(u),rt(a,t),t&&m(f),rt(d,t),t&&m(p),rt(y,t)}}}function _t(t){let n,e,o;return e=new vt({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){n=g("main"),et(e.$$.fragment)},m(t,r){$(t,n,r),ot(e,n,null),o=!0},p(t,[n]){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(U(e.$$.fragment,t),o=!0)},o(t){V(e.$$.fragment,t),o=!1},d(t){t&&m(n),rt(e)}}}return new class extends lt{constructor(t){super(),it(this,t,null,_t,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map