(function(e){function t(t){for(var a,u,o=t[0],c=t[1],l=t[2],s=0,d=[];s<o.length;s++)u=o[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,u=1;u<n.length;u++){var o=n[u];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},u={app:0},r={app:0},i=[];function o(e){return c.p+"js/"+({cubeui:"cubeui",d3:"d3",faseclick:"faseclick",i18n:"i18n",mintui:"mintui",randomnum:"randomnum",scroll:"scroll",vuecreateapi:"vuecreateapi",vuepdf:"vuepdf"}[e]||e)+"."+{cubeui:"cb9bc600",d3:"34d7d597",faseclick:"1c8ae658",i18n:"bfe905c2",mintui:"8b6c9437",randomnum:"3072f41d",scroll:"c6dd289b",vuecreateapi:"e00f38d0",vuepdf:"cd389838"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={cubeui:1,d3:1,faseclick:1,randomnum:1,scroll:1,vuepdf:1};u[e]?t.push(u[e]):0!==u[e]&&n[e]&&t.push(u[e]=new Promise((function(t,n){for(var a="css/"+({cubeui:"cubeui",d3:"d3",faseclick:"faseclick",i18n:"i18n",mintui:"mintui",randomnum:"randomnum",scroll:"scroll",vuecreateapi:"vuecreateapi",vuepdf:"vuepdf"}[e]||e)+"."+{cubeui:"429539c9",d3:"df668328",faseclick:"3685a485",i18n:"31d6cfe0",mintui:"31d6cfe0",randomnum:"d9a11cb5",scroll:"655581a6",vuecreateapi:"31d6cfe0",vuepdf:"5256f319"}[e]+".css",r=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===r))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],s=l.getAttribute("data-href");if(s===a||s===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete u[e],f.parentNode.removeChild(f),n(i)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){u[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+u+")",d.name="ChunkLoadError",d.type=a,d.request=u,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),u=n.n(a);u.a},"4f49":function(e,t,n){"use strict";var a=n("6a82"),u=n.n(a);u.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={name:"App",methods:{openToast:function(){this.$toast("ZhuXiaodong directive toast plugin",2e3)}}},o=i,c=(n("034f"),n("2877")),l=Object(c["a"])(o,u,r,!1,null,null,null),s=l.exports,d=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],p={name:"Home"},v=p,h=Object(c["a"])(v,f,m,!1,null,null,null),b=h.exports;a["default"].use(d["a"]);var g=[{path:"/",name:"Home",component:b},{path:"/fastclick",name:"Fastclick",component:function(){return n.e("faseclick").then(n.bind(null,"9bc3"))}},{path:"/cubeui",name:"Cubeui",component:function(){return n.e("cubeui").then(n.bind(null,"ab83"))}},{path:"/scroll",name:"Scroll",component:function(){return n.e("scroll").then(n.bind(null,"7715"))}},{path:"/mintui",name:"Mintui",component:function(){return n.e("mintui").then(n.bind(null,"2fd5"))}},{path:"/i18n",name:"I18n",component:function(){return n.e("i18n").then(n.bind(null,"e172"))}},{path:"/vuepdf",name:"VuePdf",component:function(){return n.e("vuepdf").then(n.bind(null,"b6ea"))}},{path:"/vuecreateapi",name:"VueCreateApi",component:function(){return n.e("vuecreateapi").then(n.bind(null,"8355"))}},{path:"/d3",name:"D3",component:function(){return n.e("d3").then(n.bind(null,"9282"))}},{path:"/randomnum",name:"RandomNum",component:function(){return n.e("randomnum").then(n.bind(null,"4409"))}}],y=new d["a"]({mode:"history",base:"",routes:g}),w=y,_=n("2f62");a["default"].use(_["a"]);var E=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}}),C=n("cadd");a["default"].use(C["a"]);var k=n("76a0"),S=n.n(k),O=(n("aa35"),n("5c96")),M=n.n(O),N=(n("0fae"),n("fe3c")),j=n.n(N),x=function(){document.addEventListener("DOMContentLoaded",(function(){document.getElementsByTagName("html")[0].style.fontSize=document.documentElement.clientWidth/750*100+"px"})),window.onresize=function(){document.getElementsByTagName("html")[0].style.fontSize=document.documentElement.clientWidth/750*100+"px"},window.onload=function(){var e=0;document.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()})),document.addEventListener("touchend",(function(t){var n=(new Date).getTime();n-e<=300&&t.preventDefault(),e=n}),!1),document.addEventListener("gesturestart",(function(e){e.preventDefault()}))}},D=n("a925"),P={music:{music:"网易云音乐",findMusic:"发现音乐",myMusic:"我的音乐",friend:"朋友",musician:"音乐人",download:"下载客户端"}},T={music:{music:"Music",findMusic:"FIND MUSIC",myMusic:"MY MUSIC",friend:"FRIEND",musician:"MUSICIAN",download:"DOWNLOAD"}},A=n("8943"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"mask"},[n("div",{staticClass:"dialog"},[n("h1",{staticClass:"title"},[e._v(e._s(e.title))]),n("div",{staticClass:"content"},[e._v(e._s(e.content))]),n("div",{staticClass:"btn",on:{click:e.hide}},[e._v("confirm")])])])},L=[],z={name:"z-dialog",props:{content:{type:String,default:"I am content"},title:{type:String,default:"I am title"}},data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1}}},$=z,B=(n("4f49"),Object(c["a"])($,I,L,!1,null,null,null)),U=B.exports;a["default"].use(A["a"]),a["default"].createAPI(U,!0);var F=n("c480"),H=n.n(F);a["default"].use(S.a),a["default"].use(M.a),j.a.attach(document.body),x(),a["default"].use(D["a"]);var V=new D["a"]({locale:"zh-CN",messages:{"zh-CN":P,"en-US":T}});a["default"].use(H.a),a["default"].config.productionTip=!1,new a["default"]({router:w,store:E,i18n:V,render:function(e){return e(s)}}).$mount("#app")},"6a82":function(e,t,n){},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.bc0bafc9.js.map