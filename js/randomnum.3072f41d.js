(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["randomnum"],{1148:function(t,e,r){"use strict";var n=r("a691"),a=r("577e"),i=r("1d80");t.exports=function(t){var e=a(i(this)),r="",o=n(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(r+=e);return r}},"176c":function(t,e,r){"use strict";var n=r("7fd9"),a=r.n(n);a.a},"408a":function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},4409:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"head"},[t._v("随机分配n份金额")]),r("mt-field",{attrs:{label:"金额",placeholder:"请输入金额",type:"number"},model:{value:t.total,callback:function(e){t.total=e},expression:"total"}}),r("mt-field",{attrs:{label:"份数",placeholder:"请输入份数",type:"number"},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}}),r("div",{staticClass:"balnk"},[t._v(" 温馨提示：单份金额不得低于0.01元 ")]),r("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.getRandomNum}},[t._v("请分配")]),r("div",t._l(t.arr,(function(e,n){return r("mt-badge",{key:n,attrs:{size:"normal",type:t.type()}},[t._v(t._s(e))])})),1)],1)},a=[],i=(r("99af"),r("90d7"),r("a9e3"),r("b680"),r("acd8"),r("e25e"),r("76a0")),o={data:function(){return{total:200,number:10,arr:[],flag:!0}},methods:{getRandomNum:function(){var t=this;this.arr=[];var e=Math.E,r=Math.PI,n=.01;function a(e,r){if(/^((-\d+)|(0+))$/.test(e)||""==e)Object(i["Toast"])({message:"请输入正确金额",duration:2e3});else if(/^[1-9]+$/.test(r))if(1!=r){var a=(e-r*n).fixed(2);if(a<0)return null;var u=r,l=a;while(0!=u){var f=void 0,s=o(u,l),d=s.h,h=s.r;f=1===u?l+.01:c(0,l,d,h).fixed(2)+n,f=f.fixed(2),t.arr.push(f),u--,l-=(f-n).fixed(2)}}else t.arr.push(e);else Object(i["Toast"])({message:"请输入正确份数",duration:2e3})}function o(t,e){var r=e/t,n=e/(10*t);return n=n<.01?.01:n,{r:n,h:r.fixed(2)}}function u(t,n,a){var i=1/Math.log2(2*r)*e,o=-Math.pow(a-t,2)/(2*Math.pow(n,2));return Math.pow(i,o)}function l(t,e){return Math.random()*(e-t)+t}function c(e,r,n,a){if("number"!==typeof e||"number"!==typeof r||e>r)throw new Error("数据异常");if(e===r)return e;while(t.flag){var i=l(e,r),o=Math.random();if(u(n,a,i)>o)return i}}Number.prototype.fixed=function(t){return t>0?parseFloat(this.toFixed(t)):parseInt(this)},a(this.total,this.number)},type:function(){var t=["primary","error","success","warning"];return t[Math.floor(4*Math.random())]}}},u=o,l=(r("176c"),r("2877")),c=Object(l["a"])(u,n,a,!1,null,null,null);e["default"]=c.exports},"7e12":function(t,e,r){var n=r("da84"),a=r("d039"),i=r("577e"),o=r("58a8").trim,u=r("5899"),l=n.parseFloat,c=n.Symbol,f=c&&c.iterator,s=1/l(u+"-0")!==-1/0||f&&!a((function(){l(Object(f))}));t.exports=s?function(t){var e=o(i(t)),r=l(e);return 0===r&&"-"==e.charAt(0)?-0:r}:l},"7fd9":function(t,e,r){},"90d7":function(t,e,r){var n=r("23e7"),a=Math.log,i=Math.LN2;n({target:"Math",stat:!0},{log2:function(t){return a(t)/i}})},acd8:function(t,e,r){var n=r("23e7"),a=r("7e12");n({global:!0,forced:parseFloat!=a},{parseFloat:a})},b680:function(t,e,r){"use strict";var n=r("23e7"),a=r("a691"),i=r("408a"),o=r("1148"),u=r("d039"),l=1..toFixed,c=Math.floor,f=function(t,e,r){return 0===e?r:e%2===1?f(t,e-1,r*t):f(t*t,e/2,r)},s=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},d=function(t,e,r){var n=-1,a=r;while(++n<6)a+=e*t[n],t[n]=a%1e7,a=c(a/1e7)},h=function(t,e){var r=6,n=0;while(--r>=0)n+=t[r],t[r]=c(n/e),n=n%e*1e7},v=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var n=String(t[e]);r=""===r?n:r+o.call("0",7-n.length)+n}return r},p=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){l.call({})}));n({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,r,n,u,l=i(this),c=a(t),p=[0,0,0,0,0,0],m="",b="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(m="-",l=-l),l>1e-21)if(e=s(l*f(2,69,1))-69,r=e<0?l*f(2,-e,1):l/f(2,e,1),r*=4503599627370496,e=52-e,e>0){d(p,0,r),n=c;while(n>=7)d(p,1e7,0),n-=7;d(p,f(10,n,1),0),n=e-1;while(n>=23)h(p,1<<23),n-=23;h(p,1<<n),d(p,1,1),h(p,2),b=v(p)}else d(p,0,r),d(p,1<<-e,0),b=v(p)+o.call("0",c);return c>0?(u=b.length,b=m+(u<=c?"0."+o.call("0",c-u)+b:b.slice(0,u-c)+"."+b.slice(u-c))):b=m+b,b}})}}]);
//# sourceMappingURL=randomnum.3072f41d.js.map