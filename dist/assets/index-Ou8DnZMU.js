(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const P=`.card {
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
`;var A=Object.defineProperty,O=e=>{throw TypeError(e)},W=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>A(e,"name",{value:t,configurable:!0}),C=(e,t,n)=>W(e,typeof t!="symbol"?t+"":t,n),x=(e,t,n)=>t.has(e)||O("Cannot "+n),k=(e,t,n)=>(x(e,t,"read from private field"),n?n.call(e):t.get(e)),_=(e,t,n)=>t.has(e)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),S=(e,t,n)=>(x(e,t,"access private method"),n),y=null,b=0,w=c(e=>{let t=e,n=new Set;return(...i)=>{if(i.length===0)return y&&n.add(y),t;let s=i[0];if(t!==s&&(t=s,b===0))for(let l of n)l();return t}},"signal"),m=c(e=>{let t=c(()=>{y=t,e(),y=null},"execute");return t(),t},"effect");c(e=>{let t=w(void 0);return m(()=>t(e())),t},"computed");c(e=>{b++;let t=e();return--b,t},"batch");function L(e,t){var s;let n=new Map;for(let l of e.children)l._key!==void 0&&n.set(l._key,l);let i=[];for(let l of t){let r=l._key,o=n.get(r),a=document.createElement("div");N(a,l);let u=a.firstElementChild;o&&u?(E(o,u),i.push(o),n.delete(r)):u&&(u._key=r,i.push(u))}for(let l of n.values())(s=l._cleanup)==null||s.call(l),e.removeChild(l);for(let l=0;l<i.length;l++){let r=i[l],o=e.children[l];o!==r&&e.insertBefore(r,o||null)}}function E(e,t){var n;if(e.nodeType===Node.ELEMENT_NODE&&t.nodeType===Node.ELEMENT_NODE){if(e.tagName!==t.tagName)return void e.replaceWith(t.cloneNode(!0));let i=new Map;for(let{name:o,value:a}of e.attributes)i.set(o,a);for(let{name:o,value:a}of t.attributes)o==="value"||o==="checked"?e[o]!==a&&(e[o]=a):e.getAttribute(o)!==a&&e.setAttribute(o,a),i.delete(o);for(let o of i.keys())e.removeAttribute(o);let s=Array.from(e.childNodes),l=Array.from(t.childNodes),r=Math.max(s.length,l.length);for(let o=0;o<r;o++){let a=s[o],u=l[o];a?u?E(a,u):((n=a._cleanup)==null||n.call(a),e.removeChild(a)):e.appendChild(u.cloneNode(!0))}}else e.nodeType===Node.TEXT_NODE&&t.nodeType===Node.TEXT_NODE?e.textContent!==t.textContent&&(e.textContent=t.textContent):e.replaceWith(t.cloneNode(!0))}c(L,"reconcileArray"),c(E,"patchNode");var h="\uFEFF",T=new WeakMap,j=c((e,...t)=>{let n=T.get(e);if(!n){let o=document.createElement("template");o.innerHTML=e.join(h),n={template:o,keyAttrIndex:e.findIndex(a=>a.trim().endsWith("key="))},T.set(e,n)}let i,{template:s,keyAttrIndex:l}=n,r=[...t];return l!==-1&&(i=t[l],r.splice(l,1)),{template:s,values:r,_isTemplate:!0,_key:i}},"html"),g=c((e,t)=>{var n;if(Array.isArray(t)&&t.length>0&&((n=t[0])==null?void 0:n._key)!==void 0)L(e,t);else{for(;e.firstChild;)e.removeChild(e.firstChild);t==null||t===!1||(t._isTemplate?N(e,t):Array.isArray(t)?t.forEach(i=>{let s=document.createDocumentFragment();g(s,i),e.appendChild(s)}):t instanceof Node?e.appendChild(t):e.appendChild(document.createTextNode(String(t))))}},"renderValue"),N=c((e,{template:t,values:n})=>{let i=t.content.cloneNode(!0),s=0,l=c(r=>{if(r.nodeType===Node.TEXT_NODE&&r.nodeValue.includes(h)){let o=r.nodeValue.split(h),a=document.createDocumentFragment();for(let u=0;u<o.length;u++){if(u>0){let d=n[s++];if(typeof d=="function"){let f=document.createElement("span");a.appendChild(f),m(()=>g(f,d()))}else g(a,d)}o[u]&&a.appendChild(document.createTextNode(o[u]))}r.parentNode.replaceChild(a,r)}else r.nodeType===Node.ELEMENT_NODE&&([...r.attributes].filter(o=>o.name!=="key"&&o.value===h).forEach(o=>{var u;let a=n[s++];if(r.removeAttribute(o.name),o.name==="ref")typeof a=="function"?a(r):a.current=r;else if(o.name==="style"&&typeof a=="object"&&a!==null)typeof a=="function"?m(()=>Object.assign(r.style,a())):Object.assign(r.style,a);else if(typeof a=="function"&&((u=r.tagName)!=null&&u.includes("-")))r._functionProps||(r._functionProps={}),r._functionProps[o.name]=a;else if(o.name.startsWith("on")){let d=o.name.slice(2).toLowerCase();typeof a=="function"&&(r.addEventListener(d,a),r._cleanup=()=>r.removeEventListener(d,a))}else{let d=c(f=>{["value","checked","selected"].includes(o.name)?r[o.name]=f:f==null||f===!1?r.removeAttribute(o.name):r.setAttribute(o.name,f===!0?"":f)},"setAttribute");typeof a=="function"?m(()=>d(a())):d(a)}}),r.hasAttribute("key")&&r.removeAttribute("key"),[...r.childNodes].forEach(l))},"processNode");[...i.childNodes].forEach(l),e.appendChild(i)},"renderTemplate"),p=null,M=["beforeMount","mount","beforeUpdate","update","destroy"],H=c(e=>{p=e,e._lifecycles=Object.fromEntries(M.map(t=>[t,[]])),e.runHook=t=>{var i;let n=(i=e._lifecycles)==null?void 0:i[t];n!=null&&n.length&&n.forEach(s=>queueMicrotask(()=>s.call(e)))}},"createLifecycle"),$=c((e,t)=>{if(!(p!=null&&p._lifecycles))throw new Error(`[Esor] Hook called outside ctx setup for "${e}"`);p._lifecycles[e].push(t)},"addHook");M.forEach(e=>{e.startsWith("before")||`${e[0].toUpperCase()}${e.slice(1)}`});c(e=>{let t=e();return typeof t=="function"&&$("destroy",t),()=>{}},"onEffect");c(()=>(!p&&console.warn("getCurrentContext called outside of component lifecycle"),p),"getCurrentContext");var D=/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/,V=c(e=>{if(e==null)return"";if(e==="true")return!0;if(e==="false")return!1;if(D.test(e))return Number(e);if(typeof e=="string"&&(e[0]==="{"||e[0]==="["))try{return JSON.parse(e)}catch{}return e},"parseAttributeValue"),z=c(e=>{var t;e._functionProps&&Object.assign(e.props,e._functionProps);for(let{name:n,value:i}of e.attributes)n.startsWith("on")||n.startsWith("ref")||i==="function"&&((t=e._functionProps)!=null&&t[n])||(e.props[n]=V(i))},"initializeProps"),v=c(()=>v.cache||(v.cache=[...document.querySelectorAll("head style, head link[rel=stylesheet]")]),"s"),q=/^[a-z][a-z0-9]*-[a-z0-9-]*$/,F=c((e,t={})=>{var n,i,s,l;return l=class extends HTMLElement{constructor(){super(),_(this,i),_(this,n,this.attachShadow({mode:t.shadowMode||"open"})),C(this,"props",Object.create(null)),C(this,"_cleanup",[]),S(this,i,s).call(this),this.runHook("beforeMount")}connectedCallback(){this.runHook("mount")}disconnectedCallback(){this._cleanup.forEach(r=>r()),this._cleanup=[],this.runHook("destroy")}},n=new WeakMap,i=new WeakSet,s=c(function(){H(this),z(this),t.gobalStyles&&v().forEach(o=>k(this,n).appendChild(o.cloneNode(!0)));let r=e==null?void 0:e.call(this,this.props);N(k(this,n),r)},"#initializeComponent"),l},"BaseComponent"),I=c((e,t,n={})=>{typeof customElements<"u"&&q.test(e)&&!customElements.get(e)&&customElements.define(e,F(t,n))},"component");function X(e=null){let t=e;return(...n)=>n.length===0?t:t=n[0]}function B(e,t,n=null){let i=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0});return n==null||n.dispatchEvent(i),i}c(X,"ref"),c(B,"emit");I("my-counter",()=>{const e=w(0);return j`
      <div class="card">
        <button onclick=${()=>e(e()+1)}>Count is: ${e}</button>
      </div>

      <style>
        ${P}
      </style>
    `});const J="/assets/esor-CmqOm-n0.svg",U="/vite.svg";document.querySelector("#app").innerHTML=`
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="${U}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://github.com/esorjs/esor" target="_blank">
        <img src="${J}" class="logo esor" alt="Esor logo" />
      </a>
      <h1>Vite + Esor</h1>
       <my-counter></my-counter>
      <p class="read-the-docs">
        Click on the Vite and Esor logos to learn more
      </p>
    </div>
`;
