const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CEwmbKsp.js","../chunks/disclose-version.B862dS0a.js","../chunks/runtime.Bf0-zvF1.js","../chunks/utils.X_B0sWpW.js","../chunks/lifecycle.BV3Uu3ri.js","../chunks/index.C-K29gxg.js","../chunks/props.DqcimHVX.js","../chunks/store.DsHr7JTA.js","../chunks/index-client.Dhi_bKAz.js","../assets/0.DsPjLbUx.css","../nodes/1.CKEyxWm_.js","../chunks/entry.jErOj9kM.js","../nodes/2.DNljcjmd.js"])))=>i.map(i=>d[i]);
var U=n=>{throw TypeError(n)};var G=(n,e,r)=>e.has(n)||U("Cannot "+r);var l=(n,e,r)=>(G(n,e,"read from private field"),r?r.call(n):e.get(n)),O=(n,e,r)=>e.has(n)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,r),S=(n,e,r,a)=>(G(n,e,"write to private field"),a?a.call(n,r):e.set(n,r),r);import{H,I as K,G as X,O as Y,P as Z,Q as p,g as v,s as R,a4 as M,a5 as N,m as $,p as ee,u as te,a as re,a6 as se,f as w,j as ne,i as ae,a7 as C,a1 as A,k as oe,h as ie,l as ce}from"../chunks/runtime.Bf0-zvF1.js";import{h as le,m as ue,u as fe,c as j,a as P,t as W,b as de,s as me}from"../chunks/disclose-version.B862dS0a.js";import{p as I,a as he,i as T}from"../chunks/props.DqcimHVX.js";import{o as _e,b as B}from"../chunks/index-client.Dhi_bKAz.js";function D(n,e,r){H&&K();var a=n,o,c;X(()=>{o!==(o=e())&&(c&&(Z(c),c=null),o&&(c=Y(()=>r(a,o))))}),H&&(a=p)}function ve(n){return class extends ge{constructor(e){super({component:n,...e})}}}var g,f;class ge{constructor(e){O(this,g);O(this,f);var c;var r=new Map,a=(s,t)=>{var d=$(t);return r.set(s,d),d};const o=new Proxy({...e.props||{},$$events:{}},{get(s,t){return v(r.get(t)??a(t,Reflect.get(s,t)))},has(s,t){return v(r.get(t)??a(t,Reflect.get(s,t))),Reflect.has(s,t)},set(s,t,d){return R(r.get(t)??a(t,d),d),Reflect.set(s,t,d)}});S(this,f,(e.hydrate?le:ue)(e.component,{target:e.target,props:o,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((c=e==null?void 0:e.props)!=null&&c.$$host)||e.sync===!1)&&M(),S(this,g,o.$$events);for(const s of Object.keys(l(this,f)))s==="$set"||s==="$destroy"||s==="$on"||N(this,s,{get(){return l(this,f)[s]},set(t){l(this,f)[s]=t},enumerable:!0});l(this,f).$set=s=>{Object.assign(o,s)},l(this,f).$destroy=()=>{fe(l(this,f))}}$set(e){l(this,f).$set(e)}$on(e,r){l(this,g)[e]=l(this,g)[e]||[];const a=(...o)=>r.call(this,...o);return l(this,g)[e].push(a),()=>{l(this,g)[e]=l(this,g)[e].filter(o=>o!==a)}}$destroy(){l(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;const ye="modulepreload",be=function(n,e){return new URL(n,e).href},Q={},V=function(e,r,a){let o=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),d=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));o=Promise.allSettled(r.map(u=>{if(u=be(u,a),u in Q)return;Q[u]=!0;const y=u.endsWith(".css"),x=y?'[rel="stylesheet"]':"";if(!!a)for(let m=s.length-1;m>=0;m--){const _=s[m];if(_.href===u&&(!y||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${x}`))return;const i=document.createElement("link");if(i.rel=y?"stylesheet":ye,y||(i.as="script"),i.crossOrigin="",i.href=u,d&&i.setAttribute("nonce",d),document.head.appendChild(i),y)return new Promise((m,_)=>{i.addEventListener("load",m),i.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function c(s){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=s,window.dispatchEvent(t),!t.defaultPrevented)throw s}return o.then(s=>{for(const t of s||[])t.status==="rejected"&&c(t.reason);return e().catch(c)})},Ce={};var Ee=W('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Pe=W("<!> <!>",1);function ke(n,e){ee(e,!0);let r=I(e,"components",23,()=>[]),a=I(e,"data_0",3,null),o=I(e,"data_1",3,null);te(()=>e.stores.page.set(e.page)),re(()=>{e.stores,e.page,e.constructors,r(),e.form,a(),o(),e.stores.page.notify()});let c=C(!1),s=C(!1),t=C(null);_e(()=>{const b=e.stores.page.subscribe(()=>{v(c)&&(R(s,!0),se().then(()=>{R(t,he(document.title||"untitled page"))}))});return R(c,!0),b});const d=A(()=>e.constructors[1]);var u=Pe(),y=w(u);T(y,()=>e.constructors[1],b=>{var i=j();const m=A(()=>e.constructors[0]);var _=w(i);D(_,()=>v(m),(E,L)=>{B(L(E,{get data(){return a()},get form(){return e.form},children:(h,we)=>{var q=j(),z=w(q);D(z,()=>v(d),(F,J)=>{B(J(F,{get data(){return o()},get form(){return e.form}}),k=>r()[1]=k,()=>{var k;return(k=r())==null?void 0:k[1]})}),P(h,q)},$$slots:{default:!0}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),P(b,i)},b=>{var i=j();const m=A(()=>e.constructors[0]);var _=w(i);D(_,()=>v(m),(E,L)=>{B(L(E,{get data(){return a()},get form(){return e.form}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),P(b,i)});var x=ne(y,2);T(x,()=>v(c),b=>{var i=Ee(),m=oe(i);T(m,()=>v(s),_=>{var E=de();ie(()=>me(E,v(t))),P(_,E)}),ce(i),P(b,i)}),P(n,u),ae()}const Ae=ve(ke),je=[()=>V(()=>import("../nodes/0.CEwmbKsp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),()=>V(()=>import("../nodes/1.CKEyxWm_.js"),__vite__mapDeps([10,1,2,4,7,5,11]),import.meta.url),()=>V(()=>import("../nodes/2.DNljcjmd.js"),__vite__mapDeps([12,1,2,3,4,6]),import.meta.url)],Ie=[],Te={"/":[2]},Be={handleError:({error:n})=>{console.error(n)},reroute:()=>{}};export{Te as dictionary,Be as hooks,Ce as matchers,je as nodes,Ae as root,Ie as server_loads};
