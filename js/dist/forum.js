/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t,e,r={648:(t,e,r)=>{var n=r(288).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),s=new S(n||[]);return a(i,"_invoke",{value:j(t,r,s)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d={};function v(){}function m(){}function y(){}var g={};p(g,u,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==r&&i.call(w,u)&&(g=w);var x=y.prototype=v.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,s,u){var c=h(t[o],t,a);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==n(p)&&i.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,s,u)}),(function(t){r("throw",t,s,u)})):e.resolve(p).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,u)}))}u(c.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t||""===t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(n(t)+" is not iterable")}return m.prototype=y,a(x,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:m,configurable:!0}),m.displayName=p(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,p(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(L.prototype),p(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),p(x,l,"Generator"),p(x,u,(function(){return this})),p(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,r)=>{var n=r(648)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,o),i.exports}o.m=r,o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,r)=>(o.f[r](t,e),e)),[])),o.u=t=>"chunk~swiper.js?ver=f3973a8200b5c2017413",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="module.exports:",o.l=(r,n,i,a)=>{if(t[r])t[r].push(n);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==e+i){s=p;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[n];var f=(e,n)=>{s.onerror=s.onload=null,clearTimeout(h);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((t=>t(n))),e)return e(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!t;)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{var t={315:0};o.f.j=(e,r)=>{var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,o)=>n=t[e]=[r,o]));r.push(n[2]=i);var a=o.p+o.u(e),s=new Error;o.l(a,(r=>{if(o.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}}),"chunk-"+e,e)}};var e=(e,r)=>{var n,i,[a,s,u]=r,c=0;if(a.some((e=>0!==t[e]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);u&&u(o)}for(e&&e(r);c<a.length;c++)i=a[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0},r=self.webpackChunkmodule_exports=self.webpackChunkmodule_exports||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var i={};(()=>{"use strict";function t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},t.apply(this,arguments)}function e(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function s(t){e(a,o,i,s,u,"next",t)}function u(t){e(a,o,i,s,u,"throw",t)}s(void 0)}))}}o.r(i);var n=o(357),a=o.n(n);const s=flarum.core.compat["forum/app"];var u=o.n(s);const c=flarum.core.compat["common/extend"],l=flarum.core.compat["forum/components/CommentPost"];var p=o.n(l);const f=flarum.core.compat["forum/components/DiscussionListItem"];var h=o.n(f);const d=flarum.core.compat["forum/components/ComposerPostPreview"];var v=o.n(d);const m=flarum.core.compat["forum/components/ReplyPlaceholder"];var y=o.n(m),g={centeredSlides:!0,centeredSlidesBounds:!0,spaceBetween:30,zoom:!0,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},b=!1,w=function(){var t=r(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b||(document.head.innerHTML+='<link\n  rel="stylesheet"\n  href="https://unpkg.com/swiper@10/swiper-bundle.min.css"\n/>',b=!0),t.prev=1,t.next=4,o.p=u().forum.attribute("baseUrl")+"/assets/extensions/datitisev-post-galleries/",o.e(390).then(o.bind(o,107));case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),console.error("Failed to load Swiper.",t.t0);case 10:return t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}(),x=function(){var e=r(a().mark((function e(r,n){var o,i,s,c,l,p,f,h;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((o=r.find("img:not(.emoji) + br + img:last-of-type, a:has(img:not(.emoji)) + br + a:has(img:not(.emoji)):last-of-type")).length){e.next=3;break}return e.abrupt("return");case 3:return i=u().forum.attribute("useSwiperZoom"),e.next=6,w();case 6:if(e.t0=e.sent,e.t0){e.next=9;break}e.t0={};case 9:if(s=e.t0,c=s.Swiper,l=s.Navigation,p=s.Pagination,f=s.Zoom,c){e.next=16;break}return e.abrupt("return");case 16:h=t({modules:[l,p,i&&f].filter(Boolean)},g),o.each((function(){if(!this.hasAttribute("data-flarum-post-gallery")){this.setAttribute("data-flarum-post-gallery","");var t=$(this).siblings("img:not(.emoji), a:has(img:not(.emoji))").add(this);$(t).siblings("br").remove(),t.wrapAll($("<div/>").addClass("swiper-wrapper")).wrap($("<div/>").addClass("swiper-slide")),i&&t.wrap($("<div/>").addClass("swiper-zoom-container"));var e=$(this).closest(".swiper-wrapper")[0];$(e).wrap($("<div/>").addClass("swiper"));var r=e.parentElement;$(r).append($("<div/>").addClass("swiper-pagination")).append($("<div/>").addClass("swiper-button-prev")).append($("<div/>").addClass("swiper-button-next")),n.push(new c(r,h))}}));case 18:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),E=function(t){return null==t||t.forEach((function(t){return t.destroy()})),[]},L=function(t){(0,c.extend)(t,"onremove",(function(){this.galleries=E(this.galleries)}))},j=function(t,e){(0,c.extend)(t,["oncreate","onupdate"],(function(){var t=this.$(e);t.length&&(this.galleries=E(this.imageGallery),x(t,this.galleries))})),L(t)};u().initializers.add("datitisev/flarum-post-galleries",(function(){j(p().prototype,".Post-body"),j(h().prototype,".DiscussionListItem-info"),(0,c.extend)(v().prototype,"oncreate",(function(){var t=this;(0,c.override)(this.attrs,"surround",(function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];e.apply(void 0,n),t.galleries=E(t.galleries),x(t.$(),t.galleries)}))})),(0,c.extend)(v().prototype,"onremove",(function(){this.galleries=E(this.galleries)})),(0,c.extend)(y().prototype,"anchorPreview",(function(){this.galleries=E(this.galleries),x(this.$(".Post-body"),this.galleries)})),L(v().prototype),L(y().prototype)}))})(),module.exports=i})();
//# sourceMappingURL=forum.js.map