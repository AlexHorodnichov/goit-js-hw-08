!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(T,t),d?g(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function T(){var e=b();if(O(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-l);return s?y(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?g(e):(r=i=void 0,u)}function S(){var e=b(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(T,t),g(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=h(t)||0,p(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},S.flush=function(){return void 0===f?u:w(b())},S}function p(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form");function O(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}j.addEventListener("input",e(t)((function(e){var t=O("feedback-form-state")||{},n=e.target.name;t[n]=e.target.value,r="feedback-form-state",o=t,i=JSON.stringify(o),localStorage.setItem(r,i);var r,o,i}),500)),j.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value;if(!t||!n)return alert("Всі поля повинні бути заповнені");var r=O("feedback-form-state")||{};console.log(r),localStorage.removeItem("feedback-form-state"),e.target.reset()})),function(){var e=O("feedback-form-state")||{},t=!0,n=!1,r=void 0;try{for(var o,i=Object.keys(e)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;j.elements[a].value=e[a]}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}()}();
//# sourceMappingURL=03-feedback.a7aee12d.js.map
