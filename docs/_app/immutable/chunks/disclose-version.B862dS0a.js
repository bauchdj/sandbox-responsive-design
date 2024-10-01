import{t as F,a5 as W,F as B,w as q,ac as T,G,ad as U,H as c,ae as C,af as k,M as E,L as b,Q as d,ag as S,C as R,ah as Y,ai as j,I as V,aj as I,ak as A,al as $,am as z,an as Q,ao as x,ap as J,aq as K,O as X,p as Z,i as ee,c as te}from"./runtime.Bf0-zvF1.js";const H=new Set,M=new Set;function re(e,t,a,o){function n(r){if(o.capture||w.call(t,r),!r.cancelBubble)return a.call(this,r)}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?q(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function ce(e,t,a,o,n){var r={capture:o,passive:n},i=re(e,t,a,r);(t===document.body||t===window||t===document)&&F(()=>{t.removeEventListener(e,i,r)})}function _e(e){for(var t=0;t<e.length;t++)H.add(e[t]);for(var a of M)a(e)}function w(e){var D;var t=this,a=t.ownerDocument,o=e.type,n=((D=e.composedPath)==null?void 0:D.call(e))||[],r=n[0]||e.target,i=0,h=e.__root;if(h){var _=n.indexOf(h);if(_!==-1&&(t===document||t===window)){e.__root=t;return}var v=n.indexOf(t);if(v===-1)return;_<=v&&(i=_)}if(r=n[i]||e.target,r!==t){W(e,"currentTarget",{configurable:!0,get(){return r||a}});try{for(var y,l=[];r!==null;){var u=r.assignedSlot||r.parentNode||r.host||null;try{var s=r["__"+o];if(s!==void 0&&!r.disabled)if(B(s)){var[m,...L]=s;m.apply(r,[e,...L])}else s.call(r,e)}catch(N){y?l.push(N):y=N}if(e.cancelBubble||u===t||u===null)break;r=u}if(y){for(let N of l)queueMicrotask(()=>{throw N});throw y}}finally{e.__root=t,delete e.currentTarget}}}let f;function ae(){f=void 0}function he(e){let t=null,a=c;var o;if(c){for(t=d,f===void 0&&(f=S(document.head));f!==null&&(f.nodeType!==8||f.data!==C);)f=k(f);f===null?E(!1):f=b(k(f))}c||(o=document.head.appendChild(T()));try{G(()=>e(o),U)}finally{a&&(E(!0),f=d,b(t))}}function ne(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function p(e,t){var a=R;a.nodes_start===null&&(a.nodes_start=e,a.nodes_end=t)}function pe(e,t){var a=(t&Y)!==0,o=(t&j)!==0,n,r=!e.startsWith("<!>");return()=>{if(c)return p(d,null),d;n===void 0&&(n=ne(r?e:"<!>"+e),a||(n=S(n)));var i=o?document.importNode(n,!0):n.cloneNode(!0);if(a){var h=S(i),_=i.lastChild;p(h,_)}else p(i,i);return i}}function ve(e=""){if(!c){var t=T(e+"");return p(t,t),t}var a=d;return a.nodeType!==3&&(a.before(a=T()),b(a)),p(a,a),a}function me(){if(c)return p(d,null),d;var e=document.createDocumentFragment(),t=document.createComment(""),a=T();return e.append(t,a),p(t,a),e}function ye(e,t){if(c){R.nodes_end=d,V();return}e!==null&&e.before(t)}function ge(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const oe=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ee(e){return oe.includes(e)}const ie={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function we(e){return e=e.toLowerCase(),ie[e]??e}const se=["touchstart","touchmove"];function ue(e){return se.includes(e)}function Te(e,t){t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function de(e,t){return P(e,t)}function be(e,t){I(),t.intro=t.intro??!1;const a=t.target,o=c,n=d;try{for(var r=S(a);r&&(r.nodeType!==8||r.data!==C);)r=k(r);if(!r)throw A;E(!0),b(r),V();const i=P(e,{...t,anchor:r});if(d===null||d.nodeType!==8||d.data!==$)throw z(),A;return E(!1),i}catch(i){if(i===A)return t.recover===!1&&Q(),I(),x(a),E(!1),de(e,t);throw i}finally{E(o),b(n),ae()}}const g=new Map;function P(e,{target:t,anchor:a,props:o={},events:n,context:r,intro:i=!0}){I();var h=new Set,_=l=>{for(var u=0;u<l.length;u++){var s=l[u];if(!h.has(s)){h.add(s);var m=ue(s);t.addEventListener(s,w,{passive:m});var L=g.get(s);L===void 0?(document.addEventListener(s,w,{passive:m}),g.set(s,1)):g.set(s,L+1)}}};_(J(H)),M.add(_);var v=void 0,y=K(()=>{var l=a??t.appendChild(T());return X(()=>{if(r){Z({});var u=te;u.c=r}n&&(o.$$events=n),c&&p(l,null),v=e(l,o)||{},c&&(R.nodes_end=d),r&&ee()}),()=>{var m;for(var u of h){t.removeEventListener(u,w);var s=g.get(u);--s===0?(document.removeEventListener(u,w),g.delete(u)):g.set(u,s)}M.delete(_),O.delete(v),l!==a&&((m=l.parentNode)==null||m.removeChild(l))}});return O.set(v,y),v}let O=new WeakMap;function Le(e){const t=O.get(e);t&&t()}const fe="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);export{ye as a,ve as b,me as c,he as d,p as e,re as f,_e as g,be as h,ge as i,Ee as j,ne as k,ce as l,de as m,we as n,Te as s,pe as t,Le as u};
