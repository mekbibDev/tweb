(this.webpackJsonp=this.webpackJsonp||[]).push([[15,20,23],{13:function(e,t,s){"use strict";function n(e,t,s=!0,n=!0){let i=null;return(...r)=>{i?(clearTimeout(i),i=null):s&&e(...r),i=setTimeout(()=>{n&&e(...r),i=null},t)}}function i(e,t,s=!0){let n,i,r=null;return(...o)=>{n=!0,i=o,r||(s&&(n=!1,e(...i)),r=setInterval(()=>{if(!n)return clearInterval(r),void(r=null);n=!1,e(...i)},t))}}s.d(t,"a",(function(){return n})),s.d(t,"e",(function(){return i})),s.d(t,"d",(function(){return r})),s.d(t,"c",(function(){return c})),s.d(t,"b",(function(){return l}));const r=e=>new Promise(t=>{setTimeout(t,e)});let o;function c(e){o?o.push(e):(o=[e],requestAnimationFrame(()=>{const e=o;o=void 0,e.forEach(e=>e())}))}function l(){return new Promise(e=>{c(()=>{c(e)})})}},18:function(e,t,s){"use strict";s.r(t),s.d(t,"isTouchSupported",(function(){return n}));const n="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch},22:function(e,t,s){"use strict";s.r(t),s.d(t,"ripple",(function(){return l}));var n=s(1),i=s(51),r=s(18),o=s(8);let c=0;function l(e,t=(()=>Promise.resolve()),s=null,l=!1){if(e.querySelector(".c-ripple"))return;e.classList.add("rp");let u=document.createElement("div");u.classList.add("c-ripple");let a;e.classList.contains("rp-square")&&u.classList.add("is-square"),e[l?"prepend":"append"](u);const d=(e,n)=>{const o=Date.now(),l=document.createElement("div"),d=c++,h=1e3*+window.getComputedStyle(u).getPropertyValue("--ripple-duration").replace("s","");a=()=>{let e=Date.now()-o;const t=()=>{i.a.mutate(()=>{l.remove()}),s&&s(d)};if(e<h){let s=Math.max(h-e,h/2);setTimeout(()=>l.classList.add("hiding"),Math.max(s-h/2,0)),setTimeout(t,s)}else l.classList.add("hiding"),setTimeout(t,h/2);r.isTouchSupported||window.removeEventListener("contextmenu",a),a=null,m=!1},t&&t(d),window.requestAnimationFrame(()=>{const t=u.getBoundingClientRect();l.classList.add("c-ripple__circle");const s=e-t.left,i=n-t.top,r=Math.sqrt(Math.pow(Math.abs(i-t.height/2)+t.height/2,2)+Math.pow(Math.abs(s-t.width/2)+t.width/2,2)),o=s-r/2,c=i-r/2;l.style.width=l.style.height=r+"px",l.style.left=o+"px",l.style.top=c+"px",u.append(l)})},h=t=>t.target!==e&&(["BUTTON","A"].includes(t.target.tagName)||Object(n.a)(t.target,"c-ripple")!==u);let m=!1;if(r.isTouchSupported){let t=()=>{a&&a()};e.addEventListener("touchstart",s=>{if(!o.default.settings.animationsEnabled)return;if(s.touches.length>1||m||h(s))return;m=!0;let{clientX:n,clientY:i}=s.touches[0];d(n,i),e.addEventListener("touchend",t,{once:!0}),window.addEventListener("touchmove",s=>{s.cancelBubble=!0,s.stopPropagation(),t(),e.removeEventListener("touchend",t)},{once:!0})},{passive:!0})}else e.addEventListener("mousedown",t=>{if(![0,2].includes(t.button))return;if(!o.default.settings.animationsEnabled)return;if("0"===e.dataset.ripple||h(t))return;if(m)return void(m=!1);let{clientX:s,clientY:n}=t;d(s,n),window.addEventListener("mouseup",a,{once:!0,passive:!0}),window.addEventListener("contextmenu",a,{once:!0,passive:!0})},{passive:!0})}},23:function(e,t,s){"use strict";function n(){let e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach(e=>e(...t))},lastNotify:void 0,listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise((s,n)=>{e.resolve=e=>{t.isFulfilled||(t.isFulfilled=!0,s(e))},e.reject=(...e)=>{t.isRejected||(t.isRejected=!0,n(...e))}});return t.finally(()=>{t.notify=null,t.listeners.length=0,t.lastNotify=null,t.cancel&&(t.cancel=()=>{})}),Object.assign(t,e),t}s.d(t,"a",(function(){return n}))},33:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));class n{constructor(e){this._constructor(e)}_constructor(e=!1){this.reuseResults=e,this.listeners={},this.listenerResults={}}addEventListener(e,t,s){var n;this.listenerResults.hasOwnProperty(e)&&(t(...this.listenerResults[e]),s)||(null!==(n=this.listeners[e])&&void 0!==n?n:this.listeners[e]=[]).push({callback:t,once:s})}addMultipleEventsListeners(e){for(const t in e)this.addEventListener(t,e[t])}removeEventListener(e,t){this.listeners[e]&&this.listeners[e].findAndSplice(e=>e.callback===t)}dispatchEvent(e,...t){this.reuseResults&&(this.listenerResults[e]=t);const s=[],n=this.listeners[e];if(n){n.slice().forEach(i=>{-1!==n.findIndex(e=>e.callback===i.callback)&&(s.push(i.callback(...t)),i.once&&this.removeEventListener(e,i.callback))})}return s}cleanup(){this.listeners={},this.listenerResults={}}}},37:function(e,t,s){"use strict";function n(e){return null==e?void 0:e.isConnected}s.d(t,"a",(function(){return n}))},51:function(e,t,s){"use strict";var n=s(13),i=s(23),r=s(9),o=s(37);const c=new class{constructor(){this.promises={},this.raf=n.c.bind(null),this.scheduled=!1}do(e,t){let s=this.promises[e];return s||(this.scheduleFlush(),s=this.promises[e]=Object(i.a)()),void 0!==t&&s.then(()=>t()),s}measure(e){return this.do("read",e)}mutate(e){return this.do("write",e)}mutateElement(e,t){const s=Object(o.a)(e)?this.mutate():Promise.resolve();return void 0!==t&&s.then(()=>t()),s}scheduleFlush(){this.scheduled||(this.scheduled=!0,this.raf(()=>{this.promises.read&&this.promises.read.resolve(),this.promises.write&&this.promises.write.resolve(),this.scheduled=!1,this.promises={}}))}};r.a&&(r.a.sequentialDom=c),t.a=c},59:function(e,t,s){"use strict";const n={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1};t.a=n},8:function(e,t,s){"use strict";s.r(t),s.d(t,"RootScope",(function(){return r}));var n=s(33),i=s(9);class r extends n.a{constructor(){super(),this._overlayIsActive=!1,this.myId=0,this.idle={isIDLE:!0,focusPromise:Promise.resolve(),focusResolve:()=>{}},this.connectionStatus={},this.peerId=0,this.broadcast=(e,t)=>{this.dispatchEvent(e,t)},this.on=(e,t,s)=>{super.addEventListener(e,t,s)},this.addEventListener=this.on,this.off=(e,t)=>{super.removeEventListener(e,t)},this.removeEventListener=this.off,this.on("peer_changed",e=>{this.peerId=e}),this.on("user_auth",e=>{this.myId=e}),this.on("connection_status_change",e=>{const t=e;this.connectionStatus[e.name]=t}),this.on("idle",e=>{e?this.idle.focusPromise=new Promise(e=>{this.idle.focusResolve=e}):this.idle.focusResolve()})}setThemeListener(){const e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{this.systemTheme=e.matches?"night":"day",this.myId?this.broadcast("theme_change"):this.setTheme()};e.addEventListener("change",t),t()}setTheme(){const e="night"===this.getTheme().name,t=document.head.querySelector('[name="color-scheme"]');t&&t.setAttribute("content",e?"dark":"light"),document.documentElement.classList.toggle("night",e)}get overlayIsActive(){return this._overlayIsActive}set overlayIsActive(e){this._overlayIsActive=e,this.broadcast("overlay_toggle",e)}getTheme(e=("system"===this.settings.theme?this.systemTheme:this.settings.theme)){return this.settings.themes.find(t=>t.name===e)}}const o=new r;i.a.rootScope=o,t.default=o},9:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));const n=s(59).a.debug,i="undefined"!=typeof window?window:self;t.b=n}}]);
//# sourceMappingURL=15.bffb53bcf21e90047eee.chunk.js.map