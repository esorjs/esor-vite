(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const qe="/vite.svg",De="/esor.svg";var G=Object.defineProperty,Y=e=>{throw TypeError(e)},ze=(e,t,r)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,a=(e,t)=>G(e,"name",{value:t,configurable:!0}),Ue=(e,t,r)=>ze(e,t+"",r),Z=(e,t,r)=>t.has(e)||Y("Cannot "+r),g=(e,t,r)=>(Z(e,t,"read from private field"),r?r.call(e):t.get(e)),X=(e,t,r)=>t.has(e)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Je=(e,t,r)=>(Z(e,t,"access private method"),r),h,I,ee,L=class te{constructor(){X(this,I),X(this,h,new Map),te.current=this}add(t,r){return Je(this,I,ee).call(this,t).add(r),()=>{var n;return(n=g(this,h).get(t))==null?void 0:n.delete(r)}}run(t,r){var n;(n=g(this,h).get(t))==null||n.forEach(o=>{try{o.call(r)}catch(i){r._catchError(i)}})}clear(t){t?g(this,h).delete(t):g(this,h).clear()}};h=new WeakMap,I=new WeakSet,ee=a(function(e){return g(this,h).has(e)||g(this,h).set(e,new Set),g(this,h).get(e)},"#hooks"),a(L,"Lifecycle"),Ue(L,"current");var re=L,Ke=a(()=>re.current||(()=>{throw"Lifecycle not initialized"})(),"getLC");a(e=>{let t=e();return t instanceof Function&&Ke().add("destroy",t)||(()=>{})},"onEffect");var w={currentEffect:null,currentComponent:null,pendingEffects:new Set,isEffectsFlushing:!1,globalEvents:{handlersByType:new Map,nextId:0}},d=w;function W(e,t){let r=w.currentComponent;w.currentComponent=e;try{return t()}finally{w.currentComponent=r}}a(W,"withCurrentComponent");function V(e,t){return!Object.is(e,t)}a(V,"valuesChanged");var Qe=a(e=>{var t;return e instanceof DocumentFragment&&e||((t=e==null?void 0:e.content)==null?void 0:t.cloneNode())||document.createDocumentFragment()},"getDocumentFragment");function ne(e,t){let r=e.nextSibling;for(;r&&r!==t;){let n=r.nextSibling;r.parentNode.removeChild(r),r=n}}a(ne,"removeChildNodesBetween");var oe=a((e,t)=>{let r=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),[n,o]=[null,null];for(;r.nextNode()&&!o;){let i=r.currentNode;!n&&i.nodeValue===t?n=i:n&&i.nodeValue===`//${t}`&&(o=i)}return[n,o]},"findCommentPlaceholders");function ie(e){let t=HTMLElement.prototype.hasOwnProperty("attachInternals")?e.attachInternals():null;t!=null&&t.shadowRoot?e.shadowRoot=t.shadowRoot:e.attachShadow({mode:"open"})}a(ie,"setupDeclarativeShadowRoot");var Xe=["map","filter","find","findIndex","slice","concat","reduce","every","some","includes","push","pop","shift","unshift","splice","reverse","sort"];function le(e,t){for(let r of Xe){let n=e[r];e[r]=(...o)=>{let i=n.apply(e,o);return i instanceof Array&&(i.__signalArray=!0,i.__signal=t,i.__mapFn=o[0]),i}}return e}a(le,"addSignalMap");function q(){d.isEffectsFlushing||(d.isEffectsFlushing=!0,Promise.resolve().then(()=>{let e=new Set(d.pendingEffects);d.pendingEffects.clear(),e.forEach(t=>{typeof t=="function"?t():console.error("Non-function in flushEffects:",t)}),d.isEffectsFlushing=!1}))}a(q,"flushEffects");function S(e){let t=a(()=>{let r=d.currentEffect;d.currentEffect=t;try{return e()}finally{d.currentEffect=r}},"effect");return t(),t}a(S,"useEffect");var A=0,$=new Set;function b(e){let t=new Set,r=e,n=a(()=>(d.currentEffect&&t.add(d.currentEffect),Array.isArray(r)?le(r,n):r),"read"),o=a(i=>{if(V(r,i)){if(r=i,A>0){t.forEach(l=>$.add(l));return}queueMicrotask(()=>{for(let l of t)typeof l=="function"&&d.pendingEffects.add(l);q()})}},"write");return n.valueOf=()=>n(),n.toString=()=>String(n()),n.signal=!0,n.cleanup=()=>{t.clear(),r=e},[n,o]}a(b,"useSignal");function Ge(e){let[t,r]=b(e());return S(()=>{let n=e();V(t(),n)&&queueMicrotask(()=>r(n))}),t}a(Ge,"useComputed");function Ye(e){A++;try{return e()}finally{if(A--,A===0&&$.size){for(let t of $)d.pendingEffects.add(t);$.clear(),q()}}}a(Ye,"useBatch");var D=a(e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;","/":"&#x2F;"})[t]),"escapeHTML");function ae(e){return e==null?"":String(e).replace(/^["']|["']$/g,"").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}a(ae,"cleanAttributeValue");function z(e,t,r,n,o){r=[...r||[]],n=[...n||[]];let i=t.parentNode,l=se(e,t),s=fe(n,l,r);he(i,l,s,t),x(o,e,t),e.__oldItems=[...n]}a(z,"reconcileArrays");function se(e,t){let r=[],n=e.nextSibling;for(;n&&n!==t;)r.push(n),n=n.nextSibling;return r}a(se,"collectNodes");function y(e){return e&&e.nodeType===Node.ELEMENT_NODE}a(y,"isValidDOMNode");function ue(e){return y(e)?e.getAttribute("data-key"):null}a(ue,"getNodeKey");function ce(e,t,r,n){var s,c;if(!e||!t||!(r!=null&&r.template)||!(n!=null&&n.template))return!1;((s=e.firstChild)==null?void 0:s.nodeType)===3&&e.normalize(),((c=t.firstChild)==null?void 0:c.nodeType)===3&&t.normalize();let o=k(e),i=k(t);if(o.length!==i.length)return!1;let l=!1;for(let u=0,f=o.length;u<f;u++){let p=o[u].textContent,m=i[u].textContent;p!==m&&(o[u].textContent=m,l=!0)}return l}a(ce,"updateNodeContent");function k(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1),n;for(;n=r.nextNode();)t.push(n);return t}a(k,"getTextNodes");function fe(e,t,r){let n=new Map,o=new Map,i=[e.length];for(let l=0,s=t.length;l<s;l++){let c=ue(t[l]);c&&n.set(c,t[l])}for(let l=0,s=r.length;l<s;l++)o.set(B(r[l],l),r[l]);for(let l=0,s=e.length;l<s;l++)i[l]=B(e[l],l);return e.map((l,s)=>{let c=i[s],u=n.get(c),f=o.get(c);if((u==null?void 0:u.nodeType)===1){if(!f||de(f,l)){let p=j(l,c);return ce(u,p,f,l)?(pe(u,p),u):p}return u}return j(l,c)})}a(fe,"createOrReuseNodes");function de(e,t){if(!e||!t)return!0;if(e!=null&&e.template&&(t!=null&&t.template)){let r=R(e),n=R(t);return!v(r,n)}return!v(e,t)}a(de,"hasChanged");function R(e){let t=e==null?void 0:e.template;if(!t)return null;let r=[],n=t.cloneNode(!0),o=document.createTreeWalker(n,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode(l){return l.nodeType===3?l.textContent.trim().length>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}}),i;for(;i=o.nextNode();)if(i.nodeType===3)r.push(i.textContent);else{let l=i.attributes;for(let s=0,c=l.length;s<c;s++){let u=l[s].value;u.includes("${")&&(r[r.length]=u)}}return r}a(R,"extractDynamicValues");function v(e,t){if(e===t)return!0;if(!e||!t||typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((r,n)=>v(r,t[n]));if(typeof e=="object"){let r=Object.keys(e),n=Object.keys(t);return r.length!==n.length?!1:r.every(o=>v(e[o],t[o]))}return String(e)===String(t)}a(v,"areValuesEqual");function pe(e,t){if(!y(e)||!y(t))return;let r="data-event-",n=e.attributes;for(let o=n.length;o--;){let i=n[o];i.name.lastIndexOf(r,0)===0&&t.setAttribute(i.name,i.value)}}a(pe,"copyEventAttributes");function B(e,t){if(e!=null&&e.template){let r=e.template.firstElementChild;if(e.id)return`item-${e.id}`;if(r&&y(r)){let n=r.getAttribute("key");if(n)return n}return`template-${t}`}if(e&&typeof e=="object"){if(e.id)return`item-${e.id}`;try{return`item-${t}-${JSON.stringify(e)}`}catch{return`item-${t}`}}return`item-${t}-${String(e)}`}a(B,"getItemKey");function j(e,t){let r;return e!=null&&e.template?r=e.template.cloneNode(!0).firstElementChild||document.createElement("div"):(r=document.createElement("div"),r.textContent=String(e)),y(r)&&r.setAttribute("data-key",t),r}a(j,"createNode");function he(e,t,r,n){let o=0,i=t.length,l=0,s=r.length,c=i>0&&t[i-1].nextSibling||n,u=null;if(i===0){for(let f=0;f<s;f++)e.insertBefore(r[f],c);return}if(s===0){for(;o<i;)e.removeChild(t[o++]);return}for(;o<i||l<s;){if(t[o]===r[l]){o++,l++;continue}for(;t[i-1]===r[s-1];)i--,s--;if(o===i){let f=s<r.length?l?r[l-1].nextSibling:r[s-l]:c;for(;l<s;)e.insertBefore(r[l++],f)}else if(l===s)for(;o<i;)(!u||!u.has(t[o]))&&e.removeChild(t[o]),o++;else if(t[o]===r[s-1]&&r[l]===t[i-1]){let f=t[--i].nextSibling;e.insertBefore(r[l++],t[o++].nextSibling),e.insertBefore(r[--s],f),t[i]=r[s]}else{if(!u){u=new Map;for(let p=l;p<s;p++)u.set(r[p],p)}let f=u.get(t[o]);if(f==null)e.removeChild(t[o++]);else if(l<f&&f<s){let p=1;for(;o+p<i&&f+p<s&&t[o+p]===r[f+p];)p++;if(p>f-l){let m=t[o];for(;l<f;)e.insertBefore(r[l++],m)}else e.replaceChild(r[l++],t[o++])}else o++}}}a(he,"ddiff");function C(e,t,r){let n=S(()=>{if(!e._isUpdating){e._isUpdating=!0;try{r(t())}finally{e._isUpdating=!1}}});e._cleanup.add(n)}a(C,"bindSignalToElement");function x(e,t,r){let{shadowRoot:n}=e,o=ge(n,t,r);me(e,o)}a(x,"bindEventsInRange");function ge(e,t,r){let n=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,null);if(!t&&!r)for(;o.nextNode();)n.push(o.currentNode);else{let i=(t==null?void 0:t.nextSibling)||e.firstChild;if(!i)return n;o.currentNode=i;do{if(o.currentNode===r)break;n.push(o.currentNode)}while(o.nextNode())}return n}a(ge,"getElementsInRange");function me(e,t){var r;for(let n of t)for(let o of Array.from(n.attributes)){if(!o.name.startsWith("data-event-"))continue;let i=o.name.replace("data-event-",""),l=parseInt(o.value,10),s=(r=d.globalEvents.handlersByType.get(i))==null?void 0:r.get(l);typeof s=="function"&&(n.addEventListener(i,(...c)=>W(e,()=>s.call(e,...c))),n.removeAttribute(o.name))}}a(me,"bindEvents");function ye(e,t){t&&t.forEach(({type:r,signal:n,bindAttr:o,attributeName:i})=>{if(r==="attribute"){let l=e.shadowRoot.querySelector(`[${o}]`);if(!l)return;l.removeAttribute(o),C(e,n,s=>{let c=String(s);l.getAttribute(i)!==c&&l.setAttribute(i,c)})}else if(r==="array"){let[l,s]=oe(e.shadowRoot,o);if(!l||!s)return;C(e,n,c=>{let u=l.__oldItems||[];z(l,s,u,Array.isArray(c)?c:[],e)})}else(r==="text"||r==="expression")&&Fe({host:e,type:r,signal:n,bindAttr:o})})}a(ye,"setupSignals");function be(e,t){if(t)for(let[r,n]of t.entries()){let o=e.shadowRoot.querySelector(`[data-ref-${r}]`);o&&(o.removeAttribute(`data-ref-${r}`),n(o))}}a(be,"setupRefs");var O={info:{color:"#0066cc",icon:"ℹ️"},warn:{color:"#FFA500",icon:"⚠️"},error:{color:"#FF0000",icon:"🚫"}},U=a((e="info",t="",...r)=>{var n,o;O[e]||(e="info"),console.groupCollapsed(`%c[ESOR ${O[e].icon}${Ze(e)}] ${t}`,`color: ${O[e].color}; font-weight: bold;`),console[e]({message:t,component:((o=(n=d.currentComponent)==null?void 0:n.constructor)==null?void 0:o.name)||"Unknown",time:new Date().toISOString(),data:r.length?r:void 0}),console[e==="error"?"trace":"debug"](),console.groupEnd()},"log"),Ze=a(e=>e?e.charAt(0).toUpperCase()+e.slice(1):"","capitalize");a((...e)=>U("info",...e),"info");a((...e)=>U("warn",...e),"warn");var N=a((...e)=>U("error",...e),"error"),T=new Map;function ve(e,t){if(!e||typeof t!="function")return N("Invalid event registration parameters"),-1;let r=T.get(e);r||(r=new Map,T.set(e,r));let n=d.globalEvents.handlersByType.get(e);n||(n=new Map,d.globalEvents.handlersByType.set(e,n));let o=d.globalEvents.nextId++,i=d.currentComponent;return i&&i._eventIds.push({type:e,id:o}),n.set(o,t),r.set(o,t),o}a(ve,"registerEvent");function et(e,t){let r=d.globalEvents.handlersByType.get(e);if(r){r.delete(t),r.size===0&&d.globalEvents.handlersByType.delete(e);let n=T.get(e);n&&(n.delete(t),n.size===0&&T.delete(e))}}a(et,"clearEventHandler");function tt(e,t){let r=d.currentComponent;if(!r)return N("useEmit must be used within a component"),null;let n=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0});return n.__esor={name:e,detail:t,receivedBy:[],timestamp:Date.now()},r.dispatchEvent(n),n}a(tt,"useEmit");var rt=/\s(\w[\w-]*)=(["'])?(?:(?!\2).)*$/,Ee=/ref=(["'])?\s*$/,Se=/(@\w+)=(["'])?\s*$/,nt=/(["'])\s*$/,ot=/^(script|style|textarea|title)$/i,it=a(e=>e.replace(nt,""),"trimQuote"),J=a(e=>e.charAt(e.length-1)==='"'?'"':"'","getQuote"),_=a(e=>e&&typeof e=="object"&&e.template,"isTemplateObject");function Ne(e,t,r,n){let o=J(t);return n.set(r,e),t.replace(Ee,`data-ref-${r}=${o}true${o}`)}a(Ne,"injectRef");function we(e,t,r){let n=J(r),o=ve(t,e);return e.isEventHandler=!0,r.replace(Se,`data-event-${t}=${n}${o}${n}`)}a(we,"injectEvent");function Ae(e,t,r,n,o){r=it(r);let i=J(r),l=typeof e=="function"?e():e,s=ot.test(t)?String(l):D(l),c=`data-bind-${n}`;return r+=`${s} '' ${c}=${i}true${i}`,o.set(n,{type:"attribute",signal:e,attributeName:t,bindAttr:c}),r}a(Ae,"injectSignalAttr");function H(e,t,r,n,o){let i=`data-expr-${n}`;o.set(n,{type:t?"expression":"text",signal:e,bindAttr:i});let l=t?e():e;return`${r}<!--${i}-->${D(String(l))}<!--//${i}-->`}a(H,"injectExpr");function P(e,t,r,n,o,i){let l=`data-expr-${t}`,s={type:"array",signal:o?()=>(e.__signal()||[]).map(e.__mapFn||(u=>u)):typeof i=="function"?i:()=>e,bindAttr:l};r.set(t,s);let c=(Array.isArray(e)?e:[]).map(E).join("");return`${n}<!--${l}-->${c}<!--//${l}-->`}a(P,"injectArray");function E(e){return e==null||e===!1?"":Array.isArray(e)?e.reduce((t,r)=>t+E(r),""):_(e)?[...e.template.childNodes].reduce((t,r)=>(r.nodeType===1&&r.hasAttribute("key")&&(r.setAttribute("data-key",r.getAttribute("key")),r.removeAttribute("key")),t+(r.outerHTML||r.textContent)),""):(e==null?void 0:e.type)==="template-array"?e.templates.reduce((t,r)=>t+E(r),""):D(String(e))}a(E,"processVal");function $e(e,...t){let r="",n=new Map,o=new Map,i=0,l=0;for(let c=0;c<e.length;c++)if(r+=e[c],c<t.length){let u=t[c],f=e[c].match(rt),p=!!f,m=f==null?void 0:f[1],He=r.match(Ee),F=r.match(Se),Pe=He&&typeof u=="function",We=F&&typeof u=="function",Ve=F?F[1].slice(1):null;Pe?r=Ne(u,r,l++,o):We?r=we(u,Ve,r):(u!=null&&u.signal||typeof u=="function")&&p?r=Ae(u,m,r,i++,n):Array.isArray(u)&&u.__signalArray===!0?r=P(u,i++,n,r,!0):u!=null&&u.signal?r=H(u,!1,r,i++,n):typeof u=="function"?r=H(u,!0,r,i++,n):Array.isArray(u)?r=P(u,i++,n,r,!1,u):u!=null&&(r+=E(u))}let s=document.createElement("template");return s.innerHTML=r.trim(),{template:s.content,signals:n,refs:o}}a($e,"processTemplate");function _e(e){try{return e()??null}catch{return null}}a(_e,"evalExpr");function Ce(e,...t){return $e(e,...t)}a(Ce,"html");var M=new Map;function Te(e,t){let r=Qe(t);return M.has(e)||M.set(e,r.cloneNode(!0)),M.get(e).cloneNode(!0)}a(Te,"cachedTemplate");function xe(e,{signal:t,bindAttr:r,renderer:n}){let[o,i]=oe(e.shadowRoot,r);!o||!i||C(e,t,l=>n(o,i,l))}a(xe,"bindPlaceholderSignal");function Fe({host:e,type:t,signal:r,bindAttr:n}){xe(e,{signal:r,bindAttr:n,renderer:a((o,i,l)=>{let s=t==="expression"?_e(()=>l):l;s!=null&&Oe(e,o,i,s)},"renderer")})}a(Fe,"handleSignalBinding");function Oe(e,t,r,n){if(Array.isArray(n)&&n.some(_)){z(t,r,t.__oldItems||[],n,e);return}let o=_(n)?n.template.cloneNode(!0).firstElementChild:document.createTextNode(String(n));ne(t,r),o&&(r.parentNode.insertBefore(o,r),_(n)&&x(e,t,r))}a(Oe,"renderEvaluated");var Me=a(e=>e&&!/^(data-|@|ref|key$)/.test(e)&&/^[a-z][\w\-_:]*$/i.test(e),"specialAttr");function K(e){if(typeof e!="string")return e;let t=e.trim();if(!t)return t;let r=t.toLowerCase(),n={true:!0,false:!1,null:null,undefined:void 0,nan:NaN,infinity:1/0,"-infinity":-1/0};if(r in n)return n[r];let o=Number(t);if(!Number.isNaN(o))return o;try{return JSON.parse(t)}catch{return t}}a(K,"coerceAttrValue");function Ie(e){for(let{name:t,value:r}of e.attributes){if(!Me(t))continue;let[n,o]=b(K(ae(r)));n.set=o,e._props[t]=n}}a(Ie,"generateSpecialAttrSignals");function Le(e){let t=new MutationObserver(r=>{for(let n of r){if(n.type!=="attributes"||!Me(n.attributeName))continue;let o=e._props[n.attributeName];o!=null&&o.set&&o.set(K(e.getAttribute(n.attributeName)))}});t.observe(e,{attributes:!0,attributeOldValue:!0}),e._cleanup.add(()=>t.disconnect())}a(Le,"observeAttrMutations");function ke(e){Ie(e),Le(e)}a(ke,"initPropsAndObserve");function Re(e,t){let r=class extends HTMLElement{constructor(){super(),ie(this),this._initInstanceState(),this.lifecycle=new re,d.currentComponent=this,ke(this),this.lifecycle.run("beforeMount",this),this._render()}_initInstanceState(){this._cleanup=new Set,this._isUpdating=!1,this._props={},this._eventIds=[]}connectedCallback(){this.lifecycle.run("mount",this)}disconnectedCallback(){this.lifecycle.run("destroy",this),this._cleanup.forEach(i=>i()),this._cleanup.clear(),this._eventIds.forEach(({type:i,id:l})=>{clearEventHandler(i,l)}),this._eventIds=[]}_render(){W(this,()=>{this.lifecycle.run("beforeUpdate",this);let i=t.call(this,this._props),{template:l,signals:s,refs:c}=typeof i=="function"?i():i||{};this.shadowRoot.hasChildNodes()||this.shadowRoot.appendChild(Te(e,l)),ye(this,s),x(this),be(this,c),this.lifecycle.run("update",this)})}};a(r,"EsorComponent");let n=r;return customElements.define(e,n),n}a(Re,"component");function lt(){let e=null;return new Proxy(()=>{},{apply:a((t,r,[n])=>e=n,"apply"),get:a((t,r)=>{var n,o;return((o=(n=e==null?void 0:e[r])==null?void 0:n.bind)==null?void 0:o.call(n,e))||(e==null?void 0:e[r])},"get"),set:a((t,r,n)=>e?(e[r]=n,!0):!1,"set")})}a(lt,"useRef");function at(e){let[t,r]=b();return S(()=>r(e())),t}a(at,"useMemo");var Q="esor-store:";a((e,t={})=>{let r=t.persist?Be(t.persist):null,[n,o]=b(r||e),i=new Set;return t.persist&&S(()=>{let l=a(s=>{if(s.key===Q+t.persist)try{o(JSON.parse(s.newValue))}catch(c){N(`Failed to sync state: ${c.message}`)}},"handleStorage");return window.addEventListener("storage",l),()=>window.removeEventListener("storage",l)}),[n,{setState(l){let s=typeof l=="function"?l(n()):l;o(s),t.persist&&je(t.persist,s),i.forEach(c=>c(s))},subscribe(l){return i.add(l),()=>i.delete(l)},getState:n}]},"useStore");function Be(e){try{let t=localStorage.getItem(Q+e);return t?JSON.parse(t):null}catch(t){return N(`Failed to load state: ${t.message}`),null}}a(Be,"loadFromStorage");function je(e,t){try{localStorage.setItem(Q+e,JSON.stringify(t))}catch(r){N(`Failed to save state: ${r.message}`)}}a(je,"saveToStorage");Re("my-counter",e=>{const[t,r]=b(Number(e.count)||0);return Ce`
    <div>
      <p>count is ${t}</p>
      <button @click="${()=>r(t+1)}">Increment</button>
    </div>
  `});document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${qe}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://github.com/esorjs/esor" target="_blank">
      <img src="${De}" class="logo esor" alt="Esor logo" />
    </a>
    
    <my-counter count="2" ></my-counter>     
  </div>
`;
