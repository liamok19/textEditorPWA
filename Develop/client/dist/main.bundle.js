(()=>{var n={757:(n,t,e)=>{n.exports=e(666)},402:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([n.id,"/* app shell CSS */\n:root {\n  --primary: #31a9e1;\n  --gray: #ececec;\n  --whitesmoke: #f5f5f5;\n  --dark: #222;\n  --monoaki: #272822;\n  --navbar-height: 50px;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--monoaki);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n}\n\nh1 {\n  font-size: 22px;\n}\n\n#navbar {\n  height: var(--navbar-height);\n  background-color: var(--primary);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  font-size: 22px;\n  font-weight: 550;\n  letter-spacing: 0.9px;\n}\n\n.navbar-brand img {\n  padding-top: 10px;\n}\n\n.loading-spinner {\n  animation-duration: 0.75s;\n  animation-iteration-count: infinite;\n  animation-name: rotate-forever;\n  animation-timing-function: linear;\n  height: 30px;\n  width: 30px;\n  border: 3px solid var(--primary);\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - var(--navbar-height));\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.app-update {\n  display: none;\n  position: absolute;\n  right: 10px;\n}\n\n.app-update.show {\n  display: block;\n}\n\n.nav-btn {\n  margin: 25px;\n}\n\n.btn {\n  text-align: center;\n  display: inline-block;\n  padding: 0.5rem 1.2rem;\n  margin: 0;\n  text-decoration: none;\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  outline: none;\n  color: #1a1a1a;\n  background-color: #aeaeae;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: #cecece;\n  cursor: pointer;\n}\n\n.btn.btn-squared {\n  border-radius: 0;\n}\n\n.btn.btn-sm {\n  font-size: 0.85rem;\n  padding: 0.3rem 0.9rem;\n}\n\n.btn.btn-lg {\n  font-size: 1.25rem;\n  padding: 0.8rem 1.4rem;\n}\n\n.btn.btn-block {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.btn.btn-primary {\n  background-color: #2d3e50;\n  color: #d9e9e8;\n}\n\n.btn.btn-primary:hover {\n  background-color: #57779a;\n}\n\n.btn.btn-danger {\n  background-color: #e64c66;\n  color: #ffffff;\n}\n\n.btn.btn-danger:hover {\n  background-color: #ee8294;\n}\n\n.btn.btn-info {\n  background-color: #1bbc9b;\n  color: #ffffff;\n}\n\n.btn.btn-info:hover {\n  background-color: #31e1bd;\n}\n\n.btn.btn-light {\n  background-color: #d9e9e8;\n  color: #1a1a1a;\n}\n\n.btn.btn-light:hover {\n  background-color: #84b8b4;\n}\n\n.btn.btn-dark {\n  background-color: #1a1a1a;\n  color: #d9e9e8;\n}\n\n.btn.btn-dark:hover {\n  background-color: #5f5f5f;\n}\n\n.btn.btn-white {\n  background-color: #ffffff;\n  color: #1a1a1a;\n}\n\n.btn.btn-white:hover {\n  background-color: #cccccc;\n}\n\n.btn.btn-black {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.btn.btn-black:hover {\n  background-color: #666666;\n}\n\n.btn.btn-link {\n  background-color: #1b89bc;\n  color: #ffffff;\n}\n\n.btn.btn-link:hover {\n  background-color: #31a9e1;\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-btn {\n    display: none;\n  }\n\n  .navbar-brand {\n    display: none;\n  }\n\n  #navbar {\n    justify-content: center;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n}\n",""]);const c=a},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{"use strict";n.exports=function(n){return n[1]}},666:n=>{var t=function(n){"use strict";var t,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{s({},"")}catch(n){s=function(n,t,e){return n[t]=e}}function u(n,t,e,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),a=new I(r||[]);return i._invoke=function(n,t,e){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return T()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=p;var s=l(n,t,e);if("normal"===s.type){if(r=e.done?h:d,s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r=h,e.method="throw",e.arg=s.arg)}}}(n,e,a),i}function l(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=u;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};s(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==e&&r.call(x,i)&&(b=x);var k=y.prototype=g.prototype=Object.create(b);function _(n){["next","throw","return"].forEach((function(t){s(n,t,(function(n){return this._invoke(t,n)}))}))}function E(n,t){function e(o,i,a,c){var s=l(n[o],n,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(n){e("next",n,a,c)}),(function(n){e("throw",n,a,c)})):t.resolve(f).then((function(n){u.value=n,a(u)}),(function(n){return e("throw",n,a,c)}))}c(s.arg)}var o;this._invoke=function(n,r){function i(){return new t((function(t,o){e(n,r,t,o)}))}return o=o?o.then(i,i):i()}}function L(n,e){var r=n.iterator[e.method];if(r===t){if(e.delegate=null,"throw"===e.method){if(n.iterator.return&&(e.method="return",e.arg=t,L(n,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function j(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function I(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(S,this),this.reset(!0)}function P(n){if(n){var e=n[i];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,a=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:t,done:!0}}return m.prototype=y,s(k,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,y):(n.__proto__=y,s(n,c,"GeneratorFunction")),n.prototype=Object.create(k),n},n.awrap=function(n){return{__await:n}},_(E.prototype),s(E.prototype,a,(function(){return this})),n.AsyncIterator=E,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new E(u(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},_(k),s(k,c,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=[];for(var e in n)t.push(e);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=P,I.prototype={constructor:I,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),v},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),j(e),v}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:P(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),v}},n}(n.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var d=e(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var s=r(n,o),u=0;u<i.length;u++){var l=e(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{"use strict";try{self["workbox:window:6.5.1"]&&_()}catch(n){}function n(n,t){return new Promise((function(e){var r=new MessageChannel;r.port1.onmessage=function(n){e(n.data)},n.postMessage(t,[r.port2])}))}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function r(n,e){var r;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(r=function(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=n[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.1"]&&_()}catch(n){}var o=function(){var n=this;this.promise=new Promise((function(t,e){n.resolve=t,n.reject=e}))};function i(n,t){var e=location.href;return new URL(n,e).href===new URL(t,e).href}var a=function(n,t){this.type=n,Object.assign(this,t)};function c(n,t,e){return e?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function s(){}var u={type:"SKIP_WAITING"};function l(n,t){if(!t)return n&&n.then?n.then(s):Promise.resolve()}var f=function(t){var e,r;function s(n,e){var r,s;return void 0===e&&(e={}),(r=t.call(this)||this).nn={},r.tn=0,r.rn=new o,r.en=new o,r.on=new o,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,t=n.installing;r.tn>0||!i(t.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=t,n.removeEventListener("updatefound",r.cn)):(r.hn=t,r.an.add(t),r.rn.resolve(t)),++r.tn,t.addEventListener("statechange",r.ln)},r.ln=function(n){var t=r.fn,e=n.target,o=e.state,i=e===r.vn,c={sw:e,isExternal:i,originalEvent:n};!i&&r.mn&&(c.isUpdate=!0),r.dispatchEvent(new a(o,c)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&t.waiting===e&&r.dispatchEvent(new a("waiting",c))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(e))},r.dn=function(n){var t=r.hn,e=t!==navigator.serviceWorker.controller;r.dispatchEvent(new a("controlling",{isExternal:e,originalEvent:n,sw:t,isUpdate:r.mn})),e||r.on.resolve(t)},r.gn=(s=function(n){var t=n.data,e=n.ports,o=n.source;return c(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new a("message",{data:t,originalEvent:n,ports:e,sw:o}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(s.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=n,r.nn=e,navigator.serviceWorker.addEventListener("message",r.gn),r}r=t,(e=s).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var f,d=s.prototype;return d.register=function(n){var t=(void 0===n?{}:n).immediate,e=void 0!==t&&t;try{var r=this;return function(n,t){var e=n();return e&&e.then?e.then(t):t()}((function(){if(!e&&"complete"!==document.readyState)return l(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),c(r.bn(),(function(n){r.fn=n,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var t=r.fn.waiting;return t&&i(t.scriptURL,r.sn.toString())&&(r.hn=t,Promise.resolve().then((function(){r.dispatchEvent(new a("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(n){return Promise.reject(n)}},d.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},d.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},d.messageSW=function(t){try{return c(this.getSW(),(function(e){return n(e,t)}))}catch(n){return Promise.reject(n)}},d.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,u)},d.pn=function(){var n=navigator.serviceWorker.controller;return n&&i(n.scriptURL,this.sn.toString())?n:void 0},d.bn=function(){try{var n=this;return function(n,t){try{var e=n()}catch(n){return t(n)}return e&&e.then?e.then(void 0,t):e}((function(){return c(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(s.prototype,f),s}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.Sn(n).add(t)},t.removeEventListener=function(n,t){this.Sn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,e=r(this.Sn(n.type));!(t=e()).done;)(0,t.value)(n)},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());function d(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function p(n,t,e){return t&&d(n.prototype,t),e&&d(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function h(n,t,e,r,o,i,a){try{var c=n[i](a),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,o)}function v(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(n){h(i,r,o,a,c,"next",n)}function c(n){h(i,r,o,a,c,"throw",n)}a(void 0)}))}}var g=e(757),m=e.n(g);let y,b;const w=new WeakMap,x=new WeakMap,k=new WeakMap,E=new WeakMap,L=new WeakMap;let S={get(n,t,e){if(n instanceof IDBTransaction){if("done"===t)return x.get(n);if("objectStoreNames"===t)return n.objectStoreNames||k.get(n);if("store"===t)return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return I(n[t])},set:(n,t,e)=>(n[t]=e,!0),has:(n,t)=>n instanceof IDBTransaction&&("done"===t||"store"===t)||t in n};function j(n){return"function"==typeof n?(t=n)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(b||(b=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...n){return t.apply(P(this),n),I(w.get(this))}:function(...n){return I(t.apply(P(this),n))}:function(n,...e){const r=t.call(P(this),n,...e);return k.set(r,n.sort?n.sort():[n]),I(r)}:(n instanceof IDBTransaction&&function(n){if(x.has(n))return;const t=new Promise(((t,e)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",i),n.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{e(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",i),n.addEventListener("abort",i)}));x.set(n,t)}(n),e=n,(y||(y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((n=>e instanceof n))?new Proxy(n,S):n);var t,e}function I(n){if(n instanceof IDBRequest)return function(n){const t=new Promise(((t,e)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",i)},o=()=>{t(I(n.result)),r()},i=()=>{e(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&w.set(t,n)})).catch((()=>{})),L.set(t,n),t}(n);if(E.has(n))return E.get(n);const t=j(n);return t!==n&&(E.set(n,t),L.set(t,n)),t}const P=n=>L.get(n);function T(n,t,{blocked:e,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(n,t),c=I(a);return r&&a.addEventListener("upgradeneeded",(n=>{r(I(a.result),n.oldVersion,n.newVersion,I(a.transaction))})),e&&a.addEventListener("blocked",(()=>e())),c.then((n=>{i&&n.addEventListener("close",(()=>i())),o&&n.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const O=["get","getKey","getAll","getAllKeys","count"],D=["put","add","delete","clear"],M=new Map;function B(n,t){if(!(n instanceof IDBDatabase)||t in n||"string"!=typeof t)return;if(M.get(t))return M.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,o=D.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!O.includes(e))return;const i=async function(n,...t){const i=this.transaction(n,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[e](...t),o&&i.done]))[0]};return M.set(t,i),i}var C;C=S,S={...C,get:(n,t,e)=>B(n,t)||C.get(n,t,e),has:(n,t)=>!!B(n,t)||C.has(n,t)};var N=function(){var n=v(m().mark((function n(){return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",T("jate",1,{upgrade:function(n){n.objectStoreNames.contains("editor")?console.log("editor database already exists"):(n.createObjectStore("editor",{keyPath:"id",autoIncrement:!0}),console.log("editor database created"))}}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),W=function(){var n=v(m().mark((function n(t){var e,r,o,i,a;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T("jate",1);case 2:return e=n.sent,r=e.transaction("editor","readwrite"),o=r.objectStore("editor"),i=o.put({id:1,value:t}),n.next=8,i;case 8:a=n.sent,console.log("🚀 - data saved to the database",a);case 10:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),A=function(){var n=v(m().mark((function n(){var t,e,r,o,i;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T("jate",1);case 2:return t=n.sent,e=t.transaction("editor","readonly"),r=e.objectStore("editor"),o=r.get(1),n.next=8,o;case 8:return i=n.sent,console.log("result.value",i),n.abrupt("return",i);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();N();var R=p((function n(){var t=this;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var e=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),A().then((function(n){console.info("Loaded data from IndexedDB, injecting into editor"),t.editor.setValue(n||e||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",t.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),W(localStorage.getItem("content"))}))})),U=e(379),F=e.n(U),G=e(795),z=e.n(G),q=e(569),H=e.n(q),Z=e(565),K=e.n(Z),V=e(216),Y=e.n(V),$=e(589),J=e.n($),Q=e(402),X={};X.styleTagTransform=J(),X.setAttributes=K(),X.insert=H().bind(null,"head"),X.domAPI=z(),X.insertStyleElement=Y(),F()(Q.Z,X),Q.Z&&Q.Z.locals&&Q.Z.locals;var nn,tn=document.querySelector("#main");tn.innerHTML="",void 0===new R&&((nn=document.createElement("div")).classList.add("spinner"),nn.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',tn.appendChild(nn)),"serviceWorker"in navigator?new f("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();