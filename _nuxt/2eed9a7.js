(window.webpackJsonp=window.webpackJsonp||[]).push([[5,11],{254:function(t,e,n){"use strict";n.r(e);n(186),n(11);var r=n(69),c=n(70),o=n(126),f=n(127),l=n(90),d=n(15),h=(n(41),n(31),n(42),n(91));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var _=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(o.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).title="",t.description="",t.slug="",t.body="",t.img="",t.alt="",t.createdAt=new Date,t.references=[],t}return Object(c.a)(n,[{key:"createdAtFormatted",get:function(){var t;return null===(t=new Date(this.createdAt))||void 0===t?void 0:t.toLocaleDateString("en",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}]),n}(h.Vue),O=y=_([h.Component],y),m=n(13),component=Object(m.a)(O,undefined,undefined,!1,null,null,null);e.default=component.exports},259:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("3bb47402",content,!0,{sourceMap:!1})},265:function(t,e,n){n(2)({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},266:function(t,e,n){"use strict";var r=n(12),c=n(5),o=n(93),f=n(17),l=n(14),d=n(45),h=n(188),v=n(71),_=n(6),y=n(57),O=n(72).f,m=n(33).f,N=n(16).f,R=n(190).trim,j="Number",I=c.Number,E=I.prototype,A=d(y(E))==j,w=function(t){var e,n,r,c,o,f,l,code,d=v(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=R(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+d}for(f=(o=d.slice(2)).length,l=0;l<f;l++)if((code=o.charCodeAt(l))<48||code>c)return NaN;return parseInt(o,r)}return+d};if(o(j,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var C,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(A?_((function(){E.valueOf.call(n)})):d(n)!=j)?h(new I(w(e)),n,S):w(e)},k=r?O(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;k.length>x;x++)l(I,C=k[x])&&!l(S,C)&&N(S,C,m(I,C));S.prototype=E,E.constructor=S,f(c,j,S)}},267:function(t,e,n){"use strict";n(259)},268:function(t,e,n){var r=n(36)(!1);r.push([t.i,".antagonist-header{text-align:center}.antagonist-header img{max-height:300px}",""]),t.exports=r},271:function(t,e,n){"use strict";n.r(e);n(186),n(11);var r=n(69),c=n(70),o=n(126),f=n(127),l=n(90),d=n(15),h=(n(41),n(265),n(266),n(91));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var _=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(o.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).order=Number.MAX_SAFE_INTEGER,t.features={},t}return Object(c.a)(n,[{key:"imgUrl",get:function(){return"/img/antagonists/"+this.img}}]),n}(n(254).default),O=y=_([h.Component],y),m=(n(267),n(13)),component=Object(m.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"antagonist"},[n("header",{staticClass:"antagonist-header"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.description)+"\n    ")]),t._v(" "),n("img",{attrs:{src:t.imgUrl,alt:t.alt}})]),t._v(" "),n("section",{staticClass:"antagonist-body",domProps:{innerHTML:t._s(t.body)}}),t._v(" "),t.features?n("section",{staticClass:"antagonist-features"},[n("h2",[t._v("Features")]),t._v(" "),n("table",{staticClass:"features"},[n("tbody",t._l(t.features,(function(e,r){return n("tr",{key:r},[n("th",[t._v("\n            "+t._s(r)+"\n          ")]),t._v(" "),n("td",[t._v("\n            "+t._s(e)+"\n          ")])])})),0)])]):t._e(),t._v(" "),t.references?n("section",{staticClass:"antagonist-references"},[n("h2",[t._v("References")]),t._v(" "),n("ul",t._l(t.references,(function(e){return n("li",{key:e},[n("a",{attrs:{href:e,target:"_blank"}},[t._v("\n          "+t._s(e)+"\n        ")])])})),0)]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);