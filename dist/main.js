!function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=8)}([function(n,e,o){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=function(n,e){var o=n[1]||"",t=n[3];if(!t)return o;if(e&&"function"==typeof btoa){var r=(a=t,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),i=t.sources.map(function(n){return"/*# sourceURL=".concat(t.sourceRoot).concat(n," */")});return[o].concat(i).concat([r]).join("\n")}var a,l,c;return[o].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(o,"}"):o}).join("")},e.i=function(n,o){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(t[i]=!0)}for(var a=0;a<n.length;a++){var l=n[a];null!=l[0]&&t[l[0]]||(o&&!l[2]?l[2]=o:o&&(l[2]="(".concat(l[2],") and (").concat(o,")")),e.push(l))}},e}},function(n,e,o){"use strict";var t,r={},i=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var n={};return function(e){if(void 0===n[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}n[e]=o}return n[e]}}();function l(n,e){for(var o=[],t={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(l):o.push(t[a]={id:a,parts:[l]})}return o}function c(n,e){for(var o=0;o<n.length;o++){var t=n[o],i=r[t.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](t.parts[a]);for(;a<t.parts.length;a++)i.parts.push(h(t.parts[a],e))}else{for(var l=[];a<t.parts.length;a++)l.push(h(t.parts[a],e));r[t.id]={id:t.id,refs:1,parts:l}}}}function d(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var t=o.nc;t&&(n.attributes.nonce=t)}if(Object.keys(n.attributes).forEach(function(o){e.setAttribute(o,n.attributes[o])}),"function"==typeof n.insert)n.insert(e);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var s,u=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function p(n,e,o,t){var r=o?"":t.css;if(n.styleSheet)n.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}var f=null,g=0;function h(n,e){var o,t,r;if(e.singleton){var i=g++;o=f||(f=d(e)),t=p.bind(null,o,i,!1),r=p.bind(null,o,i,!0)}else o=d(e),t=function(n,e,o){var t=o.css,r=o.media,i=o.sourceMap;if(r&&n.setAttribute("media",r),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,o,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var o=l(n,e);return c(o,e),function(n){for(var t=[],i=0;i<o.length;i++){var a=o[i],d=r[a.id];d&&(d.refs--,t.push(d))}n&&c(l(n,e),e);for(var s=0;s<t.length;s++){var u=t[s];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete r[u.id]}}}}},function(n,e,o){var t=o(3);"string"==typeof t&&(t=[[n.i,t,""]]);var r={insert:"head",singleton:!1};o(1)(t,r);t.locals&&(n.exports=t.locals)},function(n,e,o){(n.exports=o(0)(!1)).push([n.i,'\n\nh1{\n    color: #973153;\n    background-color: antiquewhite;\n  }\n  \nheader{\n  color: #973153;\n  \n}\n  \n.scrollit {\n  overflow:scroll;\n  height:100px;\n}\n  \n   .divtable\n    {\n        display:  table;\n        width:100%;\n        background-color:#eee;\n        border:1px solid  black;\n        border-spacing:5px;\n       \n    }\n\n    .divrow\n    {\n       display:table-row;\n       width:auto;\n       border:1px solid  black;\n    }\n\n    .divcell\n    {\n        float:left;\n        display:table-column;\n        width:200px;\n        background-color:#ccc;\n        text-align: center;\n        opacity: 0.8;\n    } \n  \n  h2 {\n    color :#973153;\n  }\n  \n  * {\n    box-sizing: border-box;\n  }\n  \n\n  .div{\n    width:100%;\n  }\n  \n  .col-sm-3 {\n    float: left;\n    width:20%;\n    padding: 10px;\n    height: 500px;\n  }\n  .col-sm-6 {\n    float: left;\n    width:60%;\n    padding: 10px;\n    height: 500px;\n  }\n  \n  \n  .row:after {\n    content: "";\n    display: table;\n    clear: both;\n  } \n  \n  ',""])},function(n,e,o){var t=o(5);"string"==typeof t&&(t=[[n.i,t,""]]);var r={insert:"head",singleton:!1};o(1)(t,r);t.locals&&(n.exports=t.locals)},function(n,e,o){e=n.exports=o(0)(!1);var t=o(6)(o(7));e.push([n.i,'.header{\n  color: #973153;\n  background-color: rgb(185, 214, 185);\n  text-align: center;\n  margin-top: 15px;\n}\n\n.nav{\n  color: rgb(34, 27, 27);\n  padding: 28px;\n  background-color: rgb(185, 214, 185);\n  width:9%;\n  height:100%;\n}\n\n.btn-primary{\n  color: #000;\n  background-color: FFF;\n  border-color: #ccc;\n  margin-left: 17px;\n  opacity: 0.8;\n}\n\n.delete{\n  margin: 0 0 3px 95px;\n  padding: 3px;\n\n}\n.bookrecord{\n  display: inline-block;\n  width: 264px;\n}\n.col-sm-7{\n  \n  width:45%;\n  padding: 10px;\n}\n\n.col-sm-3{\n  width:45%;\n  padding: 10px;\n}\n\n\n\n*:focus{\noutline:1px solid;\n}\n.foodapp{\n  font-family: sans-serif;\n}\n\n\n.welcometxt{\n  color:#FFF;\n  height:auto;\n  width: 80%;\n}\n\na {\n  color: #ffff;\n  text-decoration: none;\n}\n\nimg {\n  width: 100%;\n  padding-bottom: 2em;\n  position: center;\n  height: 510px;\n}\n\n.divtable\n{   \n    margin: 0 auto;\n    display: table;\n    background-color:transparent;\n    border:1px ;\n    border-spacing:30px;\n   \n}\n.divheader{\n  color: #fff;\n  display: inline;\n  padding: 14px;\n}\n.records{\n  color: #fff;\n  display: inline;\n  padding: 0px 0px 0 5px;\n}\n.booklist{\n  margin-top: 31px;\n  height:250px;\n  overflow: auto;\n}\n\n.divrow{ \n   display:inline;\n   /* width:100%; */\n   border:1px solid transparent;\n}\n\n.divcell\n{\n    float:left;\n    display:table-column;\n    width:170px;\n    background-color:#ffff;\n    border: black;\n    border:1px solid black;\n    opacity: 0.8;\n    padding-left: 15px;\n\n} \n\nh2 {\n  color :#FFF;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n\n.row:after {\n  content: "";\n  display: table;\n  clear: both;\n} \n\n.row{\n  background-image: url('+t+");\n  color: black;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  height:100%;\n}\n\nmarquee{\n  height:500px;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n\n}\n\nli {\n  float: left;\n  border: none;\n\n}\n\nli a {\n  display: block;\n  color: black;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 20px;\n}\n\nli a:hover {\n color: #4a4444;\n text-decoration: none;\n\n}\n\n\n.footer{\n  text-align: center; \n  color: #973153;\n  background-color: rgb(25, 34, 25);\n}\n.scrollbar {\n  overflow: auto;\n    height: 400px;\n    color: #555;\n    width: 650px;\n}",""])},function(n,e,o){"use strict";n.exports=function(n,e){return"string"!=typeof(n=n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,o){n.exports=o.p+"891ac961c5bde4763fb78a082b5a8da5.jpeg"},function(n,e,o){"use strict";o.r(e);angular.module("receipe.controller",[]);angular.module("receipe.controller",[]).controller("indexController",function(n,e){n.message="hello index",e.get("/api/receipe").then(function(n){console.log(n.data.json)})});angular.module("receipe",["receipe.controller"]);angular.module("receipe",["receipe.controller"]);angular.module("book.service",[]);angular.module("book.service",[]).factory("bookService",["$http",function(n){var e={},o="/api/book";return e.validate=function(){n.get(o);return n.get(o)},e.addBook=function(e){return n.post(o,JSON.stringify(e))},e.deleteBook=function(e){var t=o+"/"+e;return n.delete(t)},e}]);angular.module("book.services",["book.service"]);angular.module("book.services",["book.service"]);angular.module("book.controller",[]);angular.module("book.controller",["book.services"]).controller("tableCtrl",function(n,e,o){o.validate().then(function(e){console.log(e.data.message),n.Books=e.data.message}),n.hideField=!0,n.newBook={name:"",author:""},n.checkFieldVal=function(){n.newBook.name&&n.newBook.author?n.hideField=!1:n.hideField=!0},n.checkFieldVal(),n.checkInputVal=function(){n.checkFieldVal()},n.addBook=function(){console.log(n.newBook),o.addBook(n.newBook).then(function(e){console.log(e.data.message),n.Books.unshift(e.data.book),console.log(n.Books)}),n.newBook.name="",n.newBook.author="",n.checkFieldVal(),n.addField=function(){n.hideField=!1,n.newBook={name:"",author:""}}},n.deleteBook=function(e,t){console.log(e),o.deleteBook(e).then(function(n){}),n.Books.splice(t,1),console.log("Book Id",t),console.log(e)}});angular.module("book",["book.controller"]);angular.module("book",["book.controller"]).config(["$routeProvider",function(n){n.when("/Book",{templateUrl:"src/modules/book/views/book.html",controller:"tableCtrl"})}]);o(2),o(4);angular.module("myApp",["ngRoute","receipe","book"]).config(["$routeProvider",function(n){n.when("/Home",{templateUrl:"/src/modules/receipe/views/receipe.html",controller:"indexController"}).otherwise({redirectTo:"/Home"})}]).component("app",{templateUrl:"./src/components/Views/home.html"})}]);