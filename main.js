!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=15)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")});return[t].concat(r).concat([i]).join("\n")}var a,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(n,e,t){var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),c=null,l=0,d=[],p=t(10);function u(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(x(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(x(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(n,e){for(var t=[],o={},i=0;i<n.length;i++){var r=n[i],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function m(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),d.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertAt.before,t);t.insertBefore(e,i)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=d.indexOf(n);e>=0&&d.splice(e,1)}function h(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return t.nc}();o&&(n.attrs.nonce=o)}return g(e,n.attrs),m(n,e),e}function g(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function x(n,e){var t,o,i,r;if(e.transform&&n.css){if(!(r="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=r}if(e.singleton){var a=l++;t=c||(c=h(e)),o=w.bind(null,t,a,!1),i=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(e,n.attrs),m(n,e),e}(e),o=function(n,e,t){var o=t.css,i=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=p(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),i=function(){b(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){b(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=f(n,e);return u(t,e),function(n){for(var o=[],i=0;i<t.length;i++){var a=t[i];(s=r[a.id]).refs--,o.push(s)}n&&u(f(n,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var v,y=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function w(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}},function(n,e,t){n.exports=t.p+"ac7da6e6f95c68037c2b5175a5801931.png"},function(n,e,t){n.exports=t.p+"ee56d4a30164c17f705a0da085aa3ac6.png"},function(n,e,t){n.exports=t.p+"e8decf62f7651818c0e1ee633f222826.png"},function(n,e,t){n.exports=t.p+"ffac757fc64d1e414422bf204f1a4f87.jpg"},function(n,e,t){n.exports=t.p+"1a4e634088a4fd70c0b1293700cdc692.jpeg"},function(n,e,t){n.exports=t.p+"883a5d2245395cb024ffab6203b7dcd6.jpg"},function(n,e,t){var o=t(9);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \'\';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical; }\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%; }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n[hidden] {\n  display: none; }\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\na:focus {\n  outline: thin dotted; }\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */ }\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\nfigure {\n  margin: 0; }\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\nform {\n  margin: 0; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */ }\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */ }\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\nbutton,\nhtml input[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\ninput[type="checkbox"],\ninput[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */ }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222; }\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none; }\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none; }\n\nimg {\n  vertical-align: middle; }\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\ntextarea {\n  resize: vertical; }\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0; }\n',""])},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,e,t){var o=t(12);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){(e=n.exports=t(0)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Questrial|Rubik+Mono+One|Slabo+27px&display=swap);",""]);var o=t(13)(t(14));e.push([n.i,"html {\n  position: relative; }\n\nbody {\n  font-family: 'Slabo 27px', serif;\n  height: 100%; }\n\n#content {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  min-height: 100%; }\n\nheader {\n  overflow: hidden;\n  position: relative; }\n\n.background-header {\n  color: #fff2e6;\n  max-height: 300px;\n  min-height: 300px;\n  background: url("+o+');\n  background-position: center 40%;\n  background-repeat: no-repeat;\n  background-attachment: local;\n  background-size: cover;\n  display: flex; }\n  .background-header p {\n    margin: auto;\n    font-size: 40px; }\n\n.body_wrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto 30px;\n  display: flex;\n  background: linear-gradient(to top, #6d523a, #1e1517); }\n\n.body_inner {\n  position: relative;\n  min-height: 100%;\n  width: 60%;\n  margin: 0 auto 0;\n  background-color: #1e1517;\n  color: #fff2e6; }\n  .body_inner::before {\n    content: "";\n    position: absolute;\n    left: 7px;\n    top: 0px;\n    width: 2px;\n    height: 100%;\n    background-color: #543d41; }\n  .body_inner::after {\n    content: "";\n    position: absolute;\n    right: 7px;\n    top: 0px;\n    width: 2px;\n    height: 100%;\n    background-color: #543d41; }\n\n.tabs_container {\n  position: absolute;\n  left: -149px;\n  top: .2em;\n  color: #fff2e6;\n  font-size: 24px; }\n  .tabs_container li {\n    width: 130px;\n    margin-top: .4em;\n    padding: .4em;\n    cursor: pointer;\n    text-align: right;\n    background-color: #1e1517; }\n    .tabs_container li:hover {\n      background-color: #585e69; }\n\n#selected_tab {\n  position: relative;\n  background-color: #6d523a; }\n  #selected_tab::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 3px;\n    background-color: #cc582b; }\n\n.about_page {\n  display: flex;\n  flex-direction: column;\n  padding: 100px; }\n  .about_page p {\n    line-height: 2;\n    margin: auto;\n    font-size: 24px; }\n\n.co_list {\n  margin: 100px 0;\n  display: flex;\n  justify-content: center; }\n  .co_list .companies:first-child {\n    margin-left: 0px; }\n\n.companies {\n  margin-left: 50px;\n  height: 150px;\n  width: 150px;\n  display: flex;\n  border-radius: 90px;\n  -webkit-border-radius: 90px;\n  -moz-border-radius: 90px;\n  -ms-border-radius: 90px;\n  -o-border-radius: 90px; }\n  .companies:first-child {\n    background-color: #4e2515; }\n  .companies:nth-child(2) {\n    background-color: #ffffff; }\n  .companies:nth-child(3) {\n    background-color: #ff194b; }\n  .companies img {\n    margin: auto;\n    max-width: 80%;\n    height: auto; }\n\n.contacts {\n  text-align: center; }\n  .contacts h2 {\n    margin: 10px 0;\n    font-size: 26px; }\n  .contacts p {\n    margin: 5px 0; }\n\n.generic_footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: 10px;\n  display: block;\n  width: 100%;\n  background-color: #352829;\n  text-align: center;\n  color: #adadad; }\n\n#map {\n  margin: 40px auto;\n  position: static;\n  height: 550px;\n  width: 80%; }\n\n.menu_page {\n  padding: 30px;\n  display: flex;\n  text-transform: uppercase; }\n  .menu_page ul {\n    margin: auto;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center; }\n    .menu_page ul li {\n      margin: 10px; }\n      .menu_page ul li img {\n        width: 500px;\n        height: 300px;\n        object-fit: cover; }\n      .menu_page ul li p {\n        margin: 10px auto;\n        text-align: center; }\n',""])},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){n.exports=t.p+"74ee6e0f75141a0cc1b34d37af4c182f.jpg"},function(n,e,t){"use strict";t.r(e);t(8),t(11);var o=t(2),i=t.n(o),r=t(3),a=t.n(r),s=t(4),c=t.n(s);let l=[i.a,a.a,c.a];const d=()=>{let n=document.getElementById("body_content");for(;n.firstChild;)n.removeChild(n.firstChild);let e=document.createElement("p");e.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In facere perspiciatis rerum adipisci explicabo. Minima tempore iste quasi officiis totam ad corporis, pariatur nobis dignissimos aliquid praesentium, sunt amet dolor!",n.appendChild(e);let t=document.createElement("ul");t.className="co_list";let o=[];for(let n=0;n<3;n++){o[n]=document.createElement("li"),o[n].className="companies",t.appendChild(o[n]);let e=new Image;e.src=l[n],o[n].appendChild(e)}n.classList=null,n.className="about_page",n.appendChild(t)};var p=t(5),u=t.n(p),f=t(6),m=t.n(f),b=t(7),h=t.n(b);let g=[u.a,m.a,h.a];(()=>{let n=document.getElementById("content"),e=document.createElement("header"),t=document.createElement("div"),o=document.createElement("div"),i=document.createElement("p"),r=document.createElement("section"),a=document.createElement("div"),s=document.createElement("ul"),c=[],l=document.createElement("div");let p=n=>{for(let n=0;n<3;n++)c[n].id="";c[n].id="selected_tab",console.log(c[n].className)};return{fillPageOnStart:()=>{t.className="background-header",o.className="content-header",i.textContent="LOREM IPSUM",t.appendChild(i),e.appendChild(t),n.appendChild(e),r.className="body_wrapper",a.className="body_inner",r.appendChild(a),n.appendChild(r),s.className="tabs_container",a.appendChild(s);for(let n=0;n<3;n++)c[n]=document.createElement("li"),s.appendChild(c[n]);c[0].textContent="About",c[0].addEventListener("click",()=>{d(),p(0)}),c[1].textContent="Menu",c[1].addEventListener("click",()=>{(()=>{let n=document.getElementById("body_content");for(;n.firstChild;)n.removeChild(n.firstChild);let e=document.createElement("ul"),t=["Burger","Pizza","Steak"];for(let n=0;n<3;n++){let o=document.createElement("li"),i=document.createElement("p");i.textContent=t[n];let r=new Image;r.src=g[n],o.appendChild(r),o.appendChild(i),e.appendChild(o)}n.appendChild(e),n.classList=null,n.className="menu_page",n.appendChild(e)})(),p(1)}),c[2].textContent="Contact Us",c[2].addEventListener("click",()=>{(()=>{let n=document.getElementById("body_content");for(;n.firstChild;)n.removeChild(n.firstChild);let e=document.createElement("h2");e.textContent="CONTACT";let t=document.createElement("p");t.textContent="Email: example@email.com";let o=document.createElement("p");o.textContent="Call us: 123-567-890",n.appendChild(e),n.appendChild(t),n.appendChild(o);let i=document.createElement("h2");i.textContent="LOCATION";let r=document.createElement("p");r.textContent="123 Ipsum St., Lorem City";let a=document.createElement("p");a.textContent="Opening Hours: 8:00 - 23:00",n.appendChild(i),n.appendChild(r),n.appendChild(a);let s=document.createElement("script");s.onload=function(){ymaps.ready(function(){var n=new ymaps.Map("map",{center:[55.76,37.64],zoom:17}),e=new ymaps.Placemark([55.76,37.64]);n.geoObjects.add(e)})},s.src="https://api-maps.yandex.ru/2.1/?apikey=596dd6f8-0363-4e8d-82e2-4c922dab6361&lang=ru_RU",document.head.appendChild(s);let c=document.createElement("div");c.id="map",n.appendChild(c),n.classList=null,n.className="contacts"})(),p(2)}),a.appendChild(l),l.id="body_content",p(0);let u=document.createElement("footer");u.className="generic_footer",u.textContent="Generic footer © 2077",n.appendChild(u)}}})().fillPageOnStart(),d()}]);