(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/color/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3f08":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"heading"},[e._v(" Get image dominant colors ")]),n("div",{staticStyle:{"text-align":"center",opacity:"0.66","font-size":"18px"}},[e._v(" (Drop an image file somewhere) ")]),n("div",{staticStyle:{"margin-top":"40px",display:"flex","justify-content":"center"}},[n("div",[e.imgSource?n("img",{attrs:{id:"image",width:"360",height:"360",src:e.imgSource}}):e._e()])]),n("div",{staticClass:"swatch-container"},e._l(e.swatches,(function(e,t){return n("swatch",{key:t,attrs:{value:{hex:e,name:t}}})})),1)])},a=[],i=n("0621"),c=n.n(i),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swatch pointer",on:{click:function(t){return e.copyToClipboard(e.value.hex)}}},[n("div",{staticClass:"circle",style:"background: "+e.value.hex}),n("div",{staticClass:"name"},[e._v(" "+e._s(e.value.name)+" ")]),n("div",{staticClass:"hex"},[n("div",{staticClass:"text"},[e._v(" "+e._s(e.value.hex)+" ")]),n("transition",{attrs:{name:"fade"}},[e.showCopiedMessage?n("div",{staticClass:"confirm"},[e._v(" Copied! ")]):e._e()])],1)])},u=[],l={name:"App",components:{},data:function(){return{showCopiedMessage:!1}},props:["value"],methods:{copyToClipboard:function(e){var t=this;navigator.clipboard.writeText(e).then((function(){t.showCopiedMessage=!0,setTimeout((function(){t.showCopiedMessage=!1}),1500)}),(function(){console.error("Error writing to clipboard")}))}}},d=l,f=(n("c830"),n("2877")),p=Object(f["a"])(d,s,u,!1,null,"6b13f476",null),v=p.exports,h={name:"App",components:{Swatch:v},data:function(){return{imgSource:null,swatches:{}}},mounted:function(){var e=this;function t(e){e.preventDefault(),e.dataTransfer.dropEffect="copy"}document.addEventListener("dragenter",t),document.addEventListener("dragover",t),document.addEventListener("dragend",t),document.addEventListener("drop",(function(t){t.preventDefault(),e.dropHandler(t)}))},methods:{copyToClipboard:function(e){navigator.clipboard.writeText(e).then((function(){}),(function(){console.error("Error writing to clipboard")}))},dropHandler:function(e){var t=e.dataTransfer.files;if(t){var n=t[0];n&&this.displayImage(n)}},displayImage:function(e){var t=this,n=new FileReader;n.addEventListener("load",(function(){t.imgSource=n.result,t.$nextTick((function(){t.getSwatches()}))}),!1),n.readAsDataURL(e)},getSwatches:function(){var e=this,t=document.getElementById("image");c.a.from(t).getPalette().then((function(t){for(var n in t){var o=t[n];r["a"].set(e.swatches,n,o.hex)}}))}}},g=h,m=(n("5c0b"),Object(f["a"])(g,o,a,!1,null,null,null)),b=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},c830:function(e,t,n){"use strict";var r=n("3f08"),o=n.n(r);o.a}});
//# sourceMappingURL=app.fa763b91.js.map