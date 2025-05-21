(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(n){if(n.ep)return;n.ep=!0;const l=r(n);fetch(n.href,l)}})();const I=`.card {
  padding: 2em;
}
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
`;var T=Object.defineProperty,L=e=>{throw TypeError(e)},X=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>T(e,"name",{value:t,configurable:!0}),x=(e,t,r)=>X(e,typeof t!="symbol"?t+"":t,r),C=(e,t,r)=>t.has(e)||L("Cannot "+r),M=(e,t,r)=>(C(e,t,"read from private field"),r?r.call(e):t.get(e)),y=(e,t,r)=>t.has(e)?L("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),G=(e,t,r,o)=>(C(e,t,"write to private field"),t.set(e,r),r),v=(e,t,r)=>(C(e,t,"access private method"),r);function j(e,t,r="error"){let o=r==="warn"?console.warn:console.error,n=t instanceof Error?t:new Error(String(t));return o(`[Esor Error] ${e}:`,n.message),n}s(j,"handleError");var b=null,V=["beforeMount","mount","beforeUpdate","update","destroy"],Q=s(e=>{b=e,e._lifecycles=Object.fromEntries(V.map(t=>[t,[]])),e.runHook=t=>{var o;let r=(o=e._lifecycles)==null?void 0:o[t];if(r!=null&&r.length)for(let n=0;n<r.length;n++)queueMicrotask(()=>r[n].call(e))}},"createLifecycle"),R=s((e,t)=>{b&&b._lifecycles?b._lifecycles[e].push(t):j("lifecycle",`Hook called outside ctx setup for "${e}"`)},"addHook");V.forEach(e=>{e.startsWith("before")||e.charAt(0).toUpperCase()+e.slice(1)});s(e=>{let t=e();return typeof t=="function"&&R("destroy",t),()=>{}},"onEffect");var d=null,E=0,N=new Set,w=s(e=>{let t=e,r=[],o=s(n=>{var i;if(n===void 0)return d&&!r.includes(d)&&(r.push(d),(i=d.subs)==null||i.add(o)),t;let l=typeof n=="function"?n(t):n;return Object.is(l,t)||(t=l,E>0?r.forEach(u=>N.add(u)):r.slice().forEach(u=>u())),t},"getterSetter");return o.subs=r,o},"signal"),A=s(e=>{let t=new Set,r=!1,o=s(()=>{if(r)return;r=!0;let n=d;d=o;try{e()}finally{d=n,r=!1}},"reactive");return o.subs=t,o(),()=>{t.forEach(n=>{let l=n.subs.indexOf(o);l>-1&&n.subs.splice(l,1)}),t.clear()}},"effect");s(e=>{let t=w(e());return A(()=>t(e())),()=>t()},"computed");s(e=>{E++;try{return e()}finally{if(--E===0){let t=Array.from(N);N.clear();for(let r=0;r<t.length;r++)t[r]()}}},"batch");var Y=/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/;function $(e){if(e==null)return"";if(e==="true")return!0;if(e==="false")return!1;if(Y.test(e))return Number(e);if(typeof e=="string"&&(e[0]==="{"||e[0]==="["))try{return JSON.parse(e)}catch{}return e}function H(e){for(let t of e.attributes){let{name:r,value:o}=t;r.startsWith("on")||r.startsWith("ref")||(e.props[r]=w($(o)))}}function W(e,t,r=null){let o=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0});return r==null||r.dispatchEvent(o),o}function z(e){e&&(e.emit=(t,r)=>W(t,r,e))}function p(e,{mark:t=!1,parent:r=null}={}){let o=document.createDocumentFragment();if(!(e!=null&&e.length))return o;for(let n of e)n&&(t&&(n._marker=!0),o.appendChild(Array.isArray(n)?p(n,{mark:t}):n));return r&&o.childNodes.length&&r.appendChild(o),o}function P(e){return Object.keys(e).reduce((t,r)=>e[r]?t+r+" ":t,"").trim()}s($,"parseAttributeValue"),s(H,"initializeProps"),s(W,"emit"),s(z,"initDispatch"),s(p,"createFragment"),s(P,"joinTruthy");var Z=/^[a-z][a-z0-9]*-[a-z0-9-]*$/,ee=s((e,t={})=>{var r,o,n,l,i,u;return u=class extends HTMLElement{constructor(){super(),y(this,n),y(this,r,this.attachShadow({mode:t.shadowMode||"open"})),y(this,o,!1),x(this,"props",Object.create(null)),x(this,"_cleanup",[]),v(this,n,l).call(this),this.runHook("beforeMount")}connectedCallback(){v(this,n,i).call(this,!0)&&this.runHook("mount")}disconnectedCallback(){this.runHook("destroy"),this._cleanup.forEach(a=>a()),this._cleanup=[],v(this,n,i).call(this,!1)}},r=new WeakMap,o=new WeakMap,n=new WeakSet,l=s(function(){Q(this),z(this),H(this);let a=e==null?void 0:e.call(this,this.props),c=typeof a=="function"?a():a;p(c||[c],{parent:M(this,r)})},"#initializeComponent"),i=s(function(a){return M(this,o)!==a&&(G(this,o,a),!0)},"#setMounted"),u},"BaseComponent"),te=s((e,t,r={})=>{typeof customElements<"u"&&Z.test(e)&&!customElements.get(e)&&customElements.define(e,ee(t,r))},"component"),re=s(e=>e==null?"":String(e).replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),"sanitizeHtml");function q(e,t){if(!(t!=null&&t.parentNode))return;let r=t.parentNode,o=t._marker||[];if(!(e!=null&&e.length)){for(let a of o)a.nodes.forEach(c=>{var f;return(f=c==null?void 0:c.parentNode)==null?void 0:f.removeChild(c)});return void(t._marker=[])}let n=new Map(o.map(a=>[a.key,a])),l=e.map((a,c)=>{var f;return a=Array.isArray(a)?a.filter(Boolean):[a],{key:((f=a.find(h=>{var S;return(S=h==null?void 0:h.getAttribute)==null?void 0:S.call(h,"key")}))==null?void 0:f.getAttribute("key"))||`__index_${c}`,nodes:a}}),i=new Map(l.map(a=>[a.key,a]));for(let a of o)i.has(a.key)||a.nodes.forEach(c=>{var f;return(f=c==null?void 0:c.parentNode)==null?void 0:f.removeChild(c)});let u=t;for(let a of l){let c=n.get(a.key);c?(_(c.nodes,a.nodes,r),c.nodes[0]!==u.nextSibling&&r.insertBefore(p(c.nodes),u.nextSibling),a.nodes=c.nodes):r.insertBefore(p(a.nodes,{mark:!0}),u.nextSibling),u=a.nodes[a.nodes.length-1]||u}t._marker=l}function _(e,t,r){var o;for(let n=0;n<Math.max(e.length,t.length);n++){let l=e[n],i=t[n];!l&&i?r.appendChild(i):l&&!i?((o=l._cleanup)==null||o.call(l),r.removeChild(l)):l&&i&&(l.nodeType!==i.nodeType||l.tagName!==i.tagName?r.replaceChild(i,l):l.nodeType===3?l.nodeValue!==i.nodeValue&&(l.nodeValue=i.nodeValue):l.nodeType===1&&(B(l,i),_([...l.childNodes],[...i.childNodes],l)))}}function B(e,t){let r={},o=new Set;for(let{name:n,value:l}of e.attributes)r[n]=l;for(let{name:n,value:l}of t.attributes)r[n]!==l&&e.setAttribute(n,l),o.add(n);for(let n in r)o.has(n)||e.removeAttribute(n)}s(q,"reconcile"),s(_,"patchNodes"),s(B,"patchAttributes");var O=new WeakMap,m="\uFEFF",k=s((e,t,r)=>{if(t)if(e.removeAttribute(t),t==="ref")typeof r=="function"?r(e):r&&(r.current=e);else if(t[0]=="o"&&t[1]=="n"&&typeof r=="function"){let o=t.slice(2).toLowerCase();e.addEventListener(o,r),e._cleanup=()=>e.removeEventListener(o,r)}else A(t==="style"&&typeof r=="object"?()=>Object.assign(e.style,r):()=>F(e,t,typeof r=="function"?r():r));else J(e,r)},"render");function F(e,t,r){t==="value"||t==="checked"?e[t]=r:r===!1||r==null?e.removeAttribute(t):e.setAttribute(t,typeof r=="object"?P(r):r)}function D(e,t){var n;let r=e.parentNode,o=e.nextSibling;for(;o&&o._marker;)(n=o._cleanup)==null||n.call(o),r.removeChild(o),o=e.nextSibling;t!=null&&t.length&&K(p(t,{mark:!0}),r,e.nextSibling)}function J(e,t){let r=s(o=>{if((o===!0||o===!1)&&(o=""),Array.isArray(o))q(o,e);else{let n=o==null?"":String(o),l=document.createTextNode(re(n));D(e,[l])}},"updateContent");typeof t=="function"?A(()=>r(t())):r(t)}function K(e,t,r=null){!e||!t||(r&&r.parentNode===t?t.insertBefore(e,r):t.appendChild(e))}function U(e,t){let r=[],o=document.createTreeWalker(e.content,5);for(;o.nextNode();)r.push(o.currentNode);let n=0;for(let l=0;l<r.length;l++){let i=r[l];if(i.nodeType===1&&i.attributes.length)for(let u of Array.from(i.attributes))u.value===m&&k(i,u.name,t[n++]);else if(i.nodeType===3&&i.nodeValue.includes(m))if(i.nodeValue===m){let u=document.createComment("");i.parentNode.replaceChild(u,i),k(u,null,t[n++])}else{let u=g(i.nodeValue.replaceAll(m,"<!>")),a=Array.from(u.content.childNodes);for(let c=0;c<a.length;c++){let f=a[c];f.nodeType===8&&k(f,null,t[n++])}i.parentNode.replaceChild(u.content,i)}}}s(F,"setAttribute"),s(D,"replaceNodes"),s(J,"setContent"),s(K,"insertFragment"),s(U,"processTemplate");var g=s((e,t)=>{let r=document.createElement("template");return r.innerHTML=e,(t==null?void 0:t.as)==="nodes"?[...r.content.childNodes]:r},"createNodes"),ne=s((e,...t)=>{let r=O.get(e)||(O.set(e,e),e);if(!t.length)return r.length===1?g(r[0],{as:"nodes"}):g(r.join(""),{as:"nodes"});let o=g(r.join(m));return U(o,t),[...o.content.childNodes]},"html");function oe(e=null){let t=e;return r=>r!==void 0?t=r:t}s(oe,"ref");te("my-counter",()=>{const e=w(0);return ne`
      <div class="card">
        <button onclick=${()=>e(e()+1)}>Count is: ${e}</button>
      </div>

      <style>
        ${I}
      </style>
    `});const le="/assets/esor-CmqOm-n0.svg",ie="/vite.svg";document.querySelector("#app").innerHTML=`
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="${ie}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://github.com/esorjs/esor" target="_blank">
        <img src="${le}" class="logo esor" alt="Esor logo" />
      </a>
      <h1>Vite + Esor</h1>
       <my-counter></my-counter>
      <p class="read-the-docs">
        Click on the Vite and Esor logos to learn more
      </p>
    </div>
`;
