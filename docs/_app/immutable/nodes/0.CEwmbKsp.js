import{e as Oe,k as ut,d as dt,a as O,c as z,t as H,l as E,b as ft,s as mt}from"../chunks/disclose-version.B862dS0a.js";import{G as ht,H as Me,I as xe,O as gt,ax as vt,Q as Ve,af as yt,am as bt,ak as pt,L as wt,ag as _t,q as kt,b as At,v as St,d as K,o as Et,p as ie,aA as B,aB as Tt,i as le,f as L,h as re,j as U,g as he,a9 as Ct,s as Ot,a8 as Fe,a2 as Mt,k as X,ab as xt,l as Z}from"../chunks/runtime.Bf0-zvF1.js";import{b as Vt,t as Ft,g as Nt,e as Ne,a as je,s as ae,d as oe,h as k,c as jt}from"../chunks/utils.X_B0sWpW.js";import{i as ce}from"../chunks/lifecycle.BV3Uu3ri.js";import{g as _e,d as ke,w as R,r as $}from"../chunks/index.C-K29gxg.js";import{p as C,i as ge,l as se,s as Lt}from"../chunks/props.DqcimHVX.js";import{s as Pt,a as Le}from"../chunks/store.DsHr7JTA.js";import{o as Rt,b as Pe}from"../chunks/index-client.Dhi_bKAz.js";function Re(t,e,n,r,i){var o=t,s="",c;ht(()=>{if(s===(s=e()??"")){Me&&xe();return}c!==void 0&&(vt(c),c=void 0),s!==""&&(c=gt(()=>{if(Me){Ve.data;for(var a=xe(),u=a;a!==null&&(a.nodeType!==8||a.data!=="");)u=a,a=yt(a);if(a===null)throw bt(),pt;Oe(Ve,u),o=wt(a);return}var d=s+"",b=ut(d);Oe(_t(b),b.lastChild),o.before(b)}))})}function Dt(t,e,n){kt(()=>{var r=At(()=>e(t,n==null?void 0:n())||{});if(n&&(r!=null&&r.update)){var i=!1,o={};St(()=>{var s=n();K(s),i&&Et(o,s)&&(o=s,r.update(s))}),i=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}let De,Ie;function We(t){if(typeof document>"u")return;clearTimeout(De),clearTimeout(Ie);const e=document.createElement("style"),n=document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);e.appendChild(n);const r=()=>document.head.appendChild(e),i=()=>document.head.removeChild(e);if(typeof window.getComputedStyle<"u"){r(),t(),window.getComputedStyle(e).opacity,i();return}if(typeof window.requestAnimationFrame<"u"){r(),t(),window.requestAnimationFrame(i);return}r(),De=window.setTimeout(()=>{t(),Ie=window.setTimeout(i,120)},120)}function Ke(t){return t.filter(e=>e.length>0)}const Je={getItem:t=>null,setItem:(t,e)=>{}},q=typeof document<"u",It=["dark","light","system"],ve=R("mode-watcher-mode"),ye=R("mode-watcher-theme"),Ae=zt(),be=qt(),Qe=R(void 0),Ye=Ut(),Se=R(!0),Xe=R([]),Ze=R([]),$e=Gt(),Kt=Bt();function zt(){const t="system",e=q?localStorage:Je,n=e.getItem(i());let r=pe(n)?n:t;function i(){return _e(ve)}const{subscribe:o,set:s}=R(r,()=>{if(!q)return;const a=u=>{if(u.key!==i())return;const d=u.newValue;pe(d)?s(r=d):s(r=t)};return addEventListener("storage",a),()=>removeEventListener("storage",a)});function c(a){s(r=a),e.setItem(i(),r)}return{subscribe:o,set:c}}function Ut(){const t=q?localStorage:Je,e=t.getItem(r());let n=e??"";function r(){return _e(ye)}const{subscribe:i,set:o}=R(n,()=>{if(!q)return;const c=a=>{if(a.key!==r())return;const u=a.newValue;o(u===null?n="":n=u)};return addEventListener("storage",c),()=>removeEventListener("storage",c)});function s(c){o(n=c),t.setItem(r(),n)}return{subscribe:i,set:s}}function qt(){let e=!0;const{subscribe:n,set:r}=R(void 0,()=>{if(!q)return;const s=a=>{e&&r(a.matches?"light":"dark")},c=window.matchMedia("(prefers-color-scheme: light)");return c.addEventListener("change",s),()=>c.removeEventListener("change",s)});function i(){if(!q)return;const s=window.matchMedia("(prefers-color-scheme: light)");r(s.matches?"light":"dark")}function o(s){e=s}return{subscribe:n,query:i,tracking:o}}function Gt(){const{subscribe:t}=ke([Ae,be,Qe,Se,Xe,Ze],([e,n,r,i,o,s])=>{if(!q)return;const c=e==="system"?n:e,a=Ke(o),u=Ke(s);function d(){const b=document.documentElement,A=document.querySelector('meta[name="theme-color"]');c==="light"?(a.length&&b.classList.remove(...a),u.length&&b.classList.add(...u),b.style.colorScheme="light",A&&r&&A.setAttribute("content",r.light)):(u.length&&b.classList.remove(...u),a.length&&b.classList.add(...a),b.style.colorScheme="dark",A&&r&&A.setAttribute("content",r.dark))}return i?We(d):d(),c});return{subscribe:t}}function Bt(){const{subscribe:t}=ke([Ye,Se],([e,n])=>{if(!q)return;function r(){document.documentElement.setAttribute("data-theme",e)}return n?We(r):r(),e});return{subscribe:t}}function pe(t){return typeof t!="string"?!1:It.includes(t)}function fe(){Ae.set(_e($e)==="dark"?"light":"dark")}function Ht(t){Ae.set(t)}function Wt(t){Ye.set(t)}function ze({defaultMode:t,themeColors:e,darkClassNames:n=["dark"],lightClassNames:r=[],defaultTheme:i=""}){const o=document.documentElement,s=localStorage.getItem("mode-watcher-mode")||t,c=localStorage.getItem("mode-watcher-theme")||i,a=s==="light"||s==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(a?(n.length&&o.classList.remove(...n),r.length&&o.classList.add(...r)):(r.length&&o.classList.remove(...r),n.length&&o.classList.add(...n)),o.style.colorScheme=a?"light":"dark",e){const u=document.querySelector('meta[name="theme-color"]');u&&u.setAttribute("content",s==="light"?e.light:e.dark)}c&&(o.setAttribute("data-theme",c),localStorage.setItem("mode-watcher-theme",c)),localStorage.setItem("mode-watcher-mode",s)}var Jt=H('<meta name="theme-color">'),Qt=H("<!> <!>",1);function Yt(t,e){ie(e,!1);const n=Pt(),r=()=>Le(ve,"$modeStorageKeyStore",n),i=()=>Le(ye,"$themeStorageKeyStore",n),o=Ct();let s=C(e,"track",8,!0),c=C(e,"defaultMode",8,"system"),a=C(e,"themeColors",24,()=>{}),u=C(e,"disableTransitions",8,!0),d=C(e,"darkClassNames",24,()=>["dark"]),b=C(e,"lightClassNames",24,()=>[]),A=C(e,"defaultTheme",8,""),N=C(e,"nonce",8,""),f=C(e,"themeStorageKey",8,"mode-watcher-theme"),x=C(e,"modeStorageKey",8,"mode-watcher-mode");Rt(()=>{const F=$e.subscribe(()=>{}),p=Kt.subscribe(()=>{});be.tracking(s()),be.query();const l=localStorage.getItem(r());Ht(pe(l)?l:c());const D=localStorage.getItem(i());return Wt(D||A()),()=>{F(),p()}});const T={defaultMode:c(),themeColors:a(),darkClassNames:d(),lightClassNames:b(),defaultTheme:A(),modeStorageKey:x(),themeStorageKey:f()};B(()=>K(u()),()=>{Se.set(u())}),B(()=>K(a()),()=>{Qe.set(a())}),B(()=>K(d()),()=>{Xe.set(d())}),B(()=>K(b()),()=>{Ze.set(b())}),B(()=>K(x()),()=>{ve.set(x())}),B(()=>K(f()),()=>{ye.set(f())}),B(()=>K(N()),()=>{Ot(o,typeof window>"u"?N():"")}),Tt(),ce(),dt(F=>{var p=Qt(),l=L(p);ge(l,a,G=>{var j=Jt();re(()=>Vt(j,"content",a().dark)),O(G,j)});var D=U(l,2);ge(D,()=>he(o),G=>{var j=z(),W=L(j);Re(W,()=>`<script nonce=${he(o)}>(`+ze.toString()+")("+JSON.stringify(T)+");<\/script>",!1,!1),O(G,j)},G=>{var j=z(),W=L(j);Re(W,()=>"<script>("+ze.toString()+")("+JSON.stringify(T)+");<\/script>",!1,!1),O(G,j)}),O(F,p)}),le()}var Ue=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,V=t=>!t||typeof t!="object"||Object.keys(t).length===0,Xt=(t,e)=>JSON.stringify(t)===JSON.stringify(e);function et(t,e){t.forEach(function(n){Array.isArray(n)?et(n,e):e.push(n)})}function tt(t){let e=[];return et(t,e),e}var nt=(...t)=>tt(t).filter(Boolean),rt=(t,e)=>{let n={},r=Object.keys(t),i=Object.keys(e);for(let o of r)if(i.includes(o)){let s=t[o],c=e[o];typeof s=="object"&&typeof c=="object"?n[o]=rt(s,c):Array.isArray(s)||Array.isArray(c)?n[o]=nt(c,s):n[o]=c+" "+s}else n[o]=t[o];for(let o of i)r.includes(o)||(n[o]=e[o]);return n},qe=t=>!t||typeof t!="string"?t:t.replace(/\s+/g," ").trim(),Zt={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},at=t=>t||void 0,ee=(...t)=>at(tt(t).filter(Boolean).join(" ")),me=null,P={},we=!1,Y=(...t)=>e=>e.twMerge?((!me||we)&&(we=!1,me=V(P)?Ft:Nt({...P,extend:{theme:P.theme,classGroups:P.classGroups,conflictingClassGroupModifiers:P.conflictingClassGroupModifiers,conflictingClassGroups:P.conflictingClassGroups,...P.extend}})),at(me(ee(t)))):ee(t),Ge=(t,e)=>{for(let n in e)t.hasOwnProperty(n)?t[n]=ee(t[n],e[n]):t[n]=e[n];return t},$t=(t,e)=>{let{extend:n=null,slots:r={},variants:i={},compoundVariants:o=[],compoundSlots:s=[],defaultVariants:c={}}=t,a={...Zt,...e},u=n!=null&&n.base?ee(n.base,t==null?void 0:t.base):t==null?void 0:t.base,d=n!=null&&n.variants&&!V(n.variants)?rt(i,n.variants):i,b=n!=null&&n.defaultVariants&&!V(n.defaultVariants)?{...n.defaultVariants,...c}:c;!V(a.twMergeConfig)&&!Xt(a.twMergeConfig,P)&&(we=!0,P=a.twMergeConfig);let A=V(n==null?void 0:n.slots),N=V(r)?{}:{base:ee(t==null?void 0:t.base,A&&(n==null?void 0:n.base)),...r},f=A?N:Ge({...n==null?void 0:n.slots},V(N)?{base:t==null?void 0:t.base}:N),x=V(n==null?void 0:n.compoundVariants)?o:nt(n==null?void 0:n.compoundVariants,o),T=p=>{if(V(d)&&V(r)&&A)return Y(u,p==null?void 0:p.class,p==null?void 0:p.className)(a);if(x&&!Array.isArray(x))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof x}`);if(s&&!Array.isArray(s))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);let l=(m,g,h=[],y)=>{let v=h;if(typeof g=="string")v=v.concat(qe(g).split(" ").map(w=>`${m}:${w}`));else if(Array.isArray(g))v=v.concat(g.reduce((w,_)=>w.concat(`${m}:${_}`),[]));else if(typeof g=="object"&&typeof y=="string"){for(let w in g)if(g.hasOwnProperty(w)&&w===y){let _=g[w];if(_&&typeof _=="string"){let S=qe(_);v[y]?v[y]=v[y].concat(S.split(" ").map(M=>`${m}:${M}`)):v[y]=S.split(" ").map(M=>`${m}:${M}`)}else Array.isArray(_)&&_.length>0&&(v[y]=_.reduce((S,M)=>S.concat(`${m}:${M}`),[]))}}return v},D=(m,g=d,h=null,y=null)=>{var v;let w=g[m];if(!w||V(w))return null;let _=(v=y==null?void 0:y[m])!=null?v:p==null?void 0:p[m];if(_===null)return null;let S=Ue(_),M=Array.isArray(a.responsiveVariants)&&a.responsiveVariants.length>0||a.responsiveVariants===!0,Q=b==null?void 0:b[m],I=[];if(typeof S=="object"&&M)for(let[de,Ce]of Object.entries(S)){let ct=w[Ce];if(de==="initial"){Q=Ce;continue}Array.isArray(a.responsiveVariants)&&!a.responsiveVariants.includes(de)||(I=l(de,ct,I,h))}let lt=S!=null&&typeof S!="object"?S:Ue(Q),ue=w[lt||"false"];return typeof I=="object"&&typeof h=="string"&&I[h]?Ge(I,ue):I.length>0?(I.push(ue),I):ue},G=()=>d?Object.keys(d).map(m=>D(m,d)):null,j=(m,g)=>{if(!d||typeof d!="object")return null;let h=new Array;for(let y in d){let v=D(y,d,m,g),w=m==="base"&&typeof v=="string"?v:v&&v[m];w&&(h[h.length]=w)}return h},W={};for(let m in p)p[m]!==void 0&&(W[m]=p[m]);let Ee=(m,g)=>{var h;let y=typeof(p==null?void 0:p[m])=="object"?{[m]:(h=p[m])==null?void 0:h.initial}:{};return{...b,...W,...y,...g}},Te=(m=[],g)=>{let h=[];for(let{class:y,className:v,...w}of m){let _=!0;for(let[S,M]of Object.entries(w)){let Q=Ee(S,g);if(Array.isArray(M)){if(!M.includes(Q[S])){_=!1;break}}else if(Q[S]!==M){_=!1;break}}_&&(y&&h.push(y),v&&h.push(v))}return h},st=m=>{let g=Te(x,m);if(!Array.isArray(g))return g;let h={};for(let y of g)if(typeof y=="string"&&(h.base=Y(h.base,y)(a)),typeof y=="object")for(let[v,w]of Object.entries(y))h[v]=Y(h[v],w)(a);return h},it=m=>{if(s.length<1)return null;let g={};for(let{slots:h=[],class:y,className:v,...w}of s){if(!V(w)){let _=!0;for(let S of Object.keys(w)){let M=Ee(S,m)[S];if(M===void 0||(Array.isArray(w[S])?!w[S].includes(M):w[S]!==M)){_=!1;break}}if(!_)continue}for(let _ of h)g[_]=g[_]||[],g[_].push([y,v])}return g};if(!V(r)||!A){let m={};if(typeof f=="object"&&!V(f))for(let g of Object.keys(f))m[g]=h=>{var y,v;return Y(f[g],j(g,h),((y=st(h))!=null?y:[])[g],((v=it(h))!=null?v:[])[g],h==null?void 0:h.class,h==null?void 0:h.className)(a)};return m}return Y(u,G(),Te(x),p==null?void 0:p.class,p==null?void 0:p.className)(a)},F=()=>{if(!(!d||typeof d!="object"))return Object.keys(d)};return T.variantKeys=F(),T.extend=n,T.base=u,T.slots=f,T.variants=d,T.defaultVariants=b,T.compoundSlots=s,T.compoundVariants=x,T};function en(t){return Object.keys(t).reduce((e,n)=>t[n]===void 0?e:e+`${n}:${t[n]};`,"")}en({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"});function Be(t){function e(n){return n(t),()=>{}}return{subscribe:e}}const te=t=>new Proxy(t,{get(e,n,r){return Reflect.get(e,n,r)},ownKeys(e){return Reflect.ownKeys(e).filter(n=>n!=="action")}}),He=t=>typeof t=="function";tn("empty");function tn(t,e){const{stores:n,action:r,returned:i}={},o=(()=>{if(n&&i)return ke(n,c=>{const a=i(c);if(He(a)){const u=(...d)=>te({...a(...d),[`data-melt-${t}`]:"",action:r??J});return u.action=r??J,u}return te({...a,[`data-melt-${t}`]:"",action:r??J})});{const c=i,a=c==null?void 0:c();if(He(a)){const u=(...d)=>te({...a(...d),[`data-melt-${t}`]:"",action:r??J});return u.action=r??J,Be(u)}return Be(te({...a,[`data-melt-${t}`]:"",action:r??J}))}})(),s=r??(()=>{});return s.subscribe=o.subscribe,s}function J(){}function ot(t,e,n,r){const i=Array.isArray(e)?e:[e];return i.forEach(o=>t.addEventListener(o,n,r)),()=>{i.forEach(o=>t.removeEventListener(o,n,r))}}function nn(t,...e){const n={};for(const r of Object.keys(t))e.includes(r)||(n[r]=t[r]);return n}const rn={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",A:"a",P:"p"};$(void 0,t=>{function e(r){t(r),t(void 0)}return ot(document,"pointerup",e,{passive:!1,capture:!0})});$(void 0,t=>{function e(r){r&&r.key===rn.ESCAPE&&t(r),t(void 0)}return ot(document,"keydown",e,{passive:!1})});$(!1),$(!1),$(void 0);const an={isDateDisabled:void 0,isDateUnavailable:void 0,value:void 0,preventDeselect:!1,numberOfMonths:1,pagedNavigation:!1,weekStartsOn:0,fixedWeeks:!1,calendarLabel:"Event Date",locale:"en",minValue:void 0,maxValue:void 0,disabled:!1,readonly:!1,weekdayFormat:"narrow"};({...nn(an,"isDateDisabled","isDateUnavailable","value","locale","disabled","readonly","minValue","maxValue","weekdayFormat")});function on(t,e){const n=[];return e.builders.forEach(r=>{const i=r.action(t);i&&n.push(i)}),{destroy:()=>{n.forEach(r=>{r.destroy&&r.destroy()})}}}function sn(t){const e={};return t.forEach(n=>{Object.keys(n).forEach(r=>{r!=="action"&&(e[r]=n[r])})}),e}function ln(t,e){const n=se(e,["children","$$slots","$$events","$$legacy"]),r=se(n,["href","type","builders","el"]);ie(e,!1);let i=C(e,"href",24,()=>{}),o=C(e,"type",24,()=>{}),s=C(e,"builders",24,()=>[]),c=C(e,"el",28,()=>{});const a={"data-button-root":""};ce();var u=z(),d=L(u);ge(d,()=>s()&&s().length,b=>{var A=z(),N=L(A);Ne(N,()=>i()?"a":"button",!1,(f,x)=>{Pe(f,l=>c(l),()=>c());let T;re(()=>T=je(f,T,{type:i()?void 0:o(),href:i(),tabindex:"0",...sn(s()),...r,...a},void 0,f.namespaceURI!==Fe,f.nodeName.includes("-"))),E("click",f,function(l){k.call(this,e,l)}),E("change",f,function(l){k.call(this,e,l)}),E("keydown",f,function(l){k.call(this,e,l)}),E("keyup",f,function(l){k.call(this,e,l)}),E("mouseenter",f,function(l){k.call(this,e,l)}),E("mouseleave",f,function(l){k.call(this,e,l)}),E("mousedown",f,function(l){k.call(this,e,l)}),E("pointerdown",f,function(l){k.call(this,e,l)}),E("mouseup",f,function(l){k.call(this,e,l)}),E("pointerup",f,function(l){k.call(this,e,l)}),Dt(f,(l,D)=>on(l,D),()=>({builders:s()}));var F=z(),p=L(F);ae(p,oe(e),{}),O(x,F)}),O(b,A)},b=>{var A=z(),N=L(A);Ne(N,()=>i()?"a":"button",!1,(f,x)=>{Pe(f,l=>c(l),()=>c());let T;re(()=>T=je(f,T,{type:i()?void 0:o(),href:i(),tabindex:"0",...r,...a},void 0,f.namespaceURI!==Fe,f.nodeName.includes("-"))),E("click",f,function(l){k.call(this,e,l)}),E("change",f,function(l){k.call(this,e,l)}),E("keydown",f,function(l){k.call(this,e,l)}),E("keyup",f,function(l){k.call(this,e,l)}),E("mouseenter",f,function(l){k.call(this,e,l)}),E("mouseleave",f,function(l){k.call(this,e,l)}),E("mousedown",f,function(l){k.call(this,e,l)}),E("pointerdown",f,function(l){k.call(this,e,l)}),E("mouseup",f,function(l){k.call(this,e,l)}),E("pointerup",f,function(l){k.call(this,e,l)});var F=z(),p=L(F);ae(p,oe(e),{}),O(x,F)}),O(b,A)}),O(t,u),le()}function ne(t,e){const n=se(e,["children","$$slots","$$events","$$legacy"]),r=se(n,["class","variant","size","builders"]);ie(e,!1);let i=C(e,"class",8,void 0),o=C(e,"variant",8,"default"),s=C(e,"size",8,"default"),c=C(e,"builders",24,()=>[]);ce();var a=Mt(()=>jt(cn({variant:o(),size:s(),className:i()})));ln(t,Lt({get builders(){return c()},get class(){return he(a)},type:"button"},()=>r,{$$events:{click(u){k.call(this,e,u)},keydown(u){k.call(this,e,u)}},children:(u,d)=>{var b=z(),A=L(b);ae(A,oe(e),{}),O(u,b)},$$slots:{default:!0}})),le()}const cn=$t({base:"ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});var un=H('<a href="/top">Top Posts</a>'),dn=H('<a href="/archive">Archive</a>'),fn=H('<a href="/about">About Me</a>'),mn=H('<nav class="p-4"><div class="container mx-auto flex justify-between items-center"><a href="/" class="text-2xl font-bold">My Blog</a> <div><!> <!> <!> <!></div></div></nav>');function hn(t){var e=mn(),n=X(e),r=U(X(n),2),i=X(r);ne(i,{variant:"ghost",class:" mr-4",children:(a,u)=>{var d=un();O(a,d)},$$slots:{default:!0}});var o=U(i,2);ne(o,{variant:"ghost",class:" mr-4",children:(a,u)=>{var d=dn();O(a,d)},$$slots:{default:!0}});var s=U(o,2);ne(s,{variant:"ghost",class:"",children:(a,u)=>{var d=fn();O(a,d)},$$slots:{default:!0}});var c=U(s,2);ne(c,{variant:"ghost",$$events:{click(...a){fe==null||fe.apply(this,a)}},children:(a,u)=>{xt();var d=ft("Toggle Mode");O(a,d)},$$slots:{default:!0}}),Z(r),Z(n),Z(e),O(t,e)}var gn=H('<!> <!> <main class="flex-grow container mx-auto p-4"><!></main> <footer style="height:50px" class="flex items-center m-4"> </footer>',1);function Sn(t,e){ie(e,!1),ce();var n=gn(),r=L(n);Yt(r,{});var i=U(r,2);hn(i);var o=U(i,2),s=X(o);ae(s,oe(e),{}),Z(o);var c=U(o,2),a=X(c);re(()=>mt(a,`Copyright © ${new Date().getFullYear()??""} Hunter Henrichsen. All Rights Reserved.`)),Z(c),O(t,n),le()}export{Sn as component};
