(function(t){function e(e){for(var n,c,u=e[0],i=e[1],f=e[2],s=0,d=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,f||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/drag-drop-vue/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"02f0":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function o(t,e,r,o,a,c){var u=Object(n["i"])("vDragDrop");return Object(n["f"])(),Object(n["c"])(u)}var a=["onDragstart"],c=["onDragstart"];function u(t,e,r,o,u,i){return Object(n["f"])(),Object(n["d"])("div",null,[Object(n["e"])("div",{class:"drop-zone",onDrop:e[0]||(e[0]=function(t){return o.onDrop(t,1)}),onDragenter:e[1]||(e[1]=Object(n["k"])((function(){}),["prevent"])),onDragover:e[2]||(e[2]=Object(n["k"])((function(){}),["prevent"]))},[(Object(n["f"])(!0),Object(n["d"])(n["a"],null,Object(n["h"])(o.getList(1),(function(t){return Object(n["f"])(),Object(n["d"])("div",{key:t.id,class:"drag-el",draggable:"true",onDragstart:function(e){return o.starDrag(e,t)}},Object(n["j"])(t.title),41,a)})),128))],32),Object(n["e"])("div",{class:"drop-zone",onDrop:e[3]||(e[3]=function(t){return o.onDrop(t,2)}),onDragenter:e[4]||(e[4]=Object(n["k"])((function(){}),["prevent"])),onDragover:e[5]||(e[5]=Object(n["k"])((function(){}),["prevent"]))},[(Object(n["f"])(!0),Object(n["d"])(n["a"],null,Object(n["h"])(o.getList(2),(function(t){return Object(n["f"])(),Object(n["d"])("div",{key:t.id,class:"drag-el",draggable:"true",onDragstart:function(e){return o.starDrag(e,t)}},Object(n["j"])(t.title),41,c)})),128))],32)])}r("4de4"),r("7db0");var i={setup:function(){var t=Object(n["g"])([{id:0,title:"Item A",list:1},{id:1,title:"Item B",list:1},{id:2,title:"Item C",list:2}]),e=function(e){return t.value.filter((function(t){return t.list==e}))},r=function(t,e){console.log(e),t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("itemId",e.id)},o=function(e,r){var n=e.dataTransfer.getData("itemId"),o=t.value.find((function(t){return t.id==n}));o.list=r};return{getList:e,starDrag:r,onDrop:o}}};r("777a");i.render=u;var f=i,l={name:"App",components:{vDragDrop:f}};r("a7bb");l.render=o;var s=l;Object(n["b"])(s).mount("#app")},"777a":function(t,e,r){"use strict";r("ce90")},a7bb:function(t,e,r){"use strict";r("02f0")},ce90:function(t,e,r){}});
//# sourceMappingURL=app.c07f5343.js.map