(window.webpackJsonp=window.webpackJsonp||[]).push([[1,12],{247:function(t,e,n){"use strict";n.r(e);n(242),n(243),n(171);var r=n(52),c=n(53),o=n(111),f=n(112),l=n(74),d=n(10),h=n(75);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(o.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).title="",t.description="",t.slug="",t.body="",t.img="",t.alt="",t.createdAt=new Date,t.references=[],t}return Object(c.a)(n,[{key:"createdAtFormatted",get:function(){var t;return null===(t=new Date(this.createdAt))||void 0===t?void 0:t.toLocaleDateString("en",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}]),n}(h.Vue),O=j=y([h.Component],j),R=n(11),component=Object(R.a)(O,undefined,undefined,!1,null,null,null);e.default=component.exports},250:function(t,e,n){"use strict";n.r(e);n(171);var r=n(52),c=n(53),o=n(111),f=n(112),l=n(74),d=n(10),h=n(75);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y,j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=y=function(t){Object(o.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,null,[{key:"getBodyAsHtml",value:function(content){var t,e=new(h.Vue.extend(y))({propsData:{content:content}});return e.$mount(),null===(t=e.$el)||void 0===t?void 0:t.outerHTML}}]),n}(h.Vue);j([Object(h.Prop)()],O.prototype,"content",void 0);var R=O=y=j([h.Component],O),_=n(11),component=Object(_.a)(R,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-content",{attrs:{document:t.content}})}),[],!1,null,null,null);e.default=component.exports},252:function(t,e,n){var content=n(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("3bb47402",content,!0,{sourceMap:!1})},260:function(t,e,n){"use strict";n(252)},261:function(t,e,n){var r=n(29)(!1);r.push([t.i,".antagonist-header{text-align:center}.antagonist-header img{max-height:300px}",""]),t.exports=r},264:function(t,e,n){"use strict";n.r(e);n(258),n(259),n(171);var r=n(52),c=n(53),o=n(111),f=n(112),l=n(74),d=n(10),h=n(75);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(o.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).order=Number.MAX_SAFE_INTEGER,t.features={},t}return Object(c.a)(n,[{key:"imgUrl",get:function(){return"/img/antagonists/"+this.img}}]),n}(n(247).default),O=j=y([h.Component],j),R=(n(260),n(11)),component=Object(R.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"antagonist"},[n("header",{staticClass:"antagonist-header"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.description)+"\n    ")]),t._v(" "),n("img",{attrs:{src:t.imgUrl,alt:t.alt}})]),t._v(" "),n("section",{staticClass:"antagonist-body",domProps:{innerHTML:t._s(t.body)}}),t._v(" "),t.features?n("section",{staticClass:"antagonist-features"},[n("h2",[t._v("Features")]),t._v(" "),n("table",{staticClass:"features"},[n("tbody",t._l(t.features,(function(e,r){return n("tr",{key:r},[n("th",[t._v("\n            "+t._s(r)+"\n          ")]),t._v(" "),n("td",[t._v("\n            "+t._s(e)+"\n          ")])])})),0)])]):t._e(),t._v(" "),t.references?n("section",{staticClass:"antagonist-references"},[n("h2",[t._v("References")]),t._v(" "),n("ul",t._l(t.references,(function(e){return n("li",{key:e},[n("a",{attrs:{href:e,target:"_blank"}},[t._v("\n          "+t._s(e)+"\n        ")])])})),0)]):t._e()])}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,n){var content=n(294);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("4ea18dde",content,!0,{sourceMap:!1})},269:function(t,e,n){"use strict";n.r(e);n(242),n(243),n(171),n(57),n(44);var r=n(52),c=n(53),o=n(111),f=n(112),l=n(74),d=n(10),h=n(75),v=n(250),y=n(264);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O,R=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},_=O=function(t){Object(o.a)(n,t);var e=j(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"created",value:function(){var t=this;this.content&&(this.order=this.content.order,this.title=this.content.title,this.slug=this.content.slug,this.description=this.content.description,this.createdAt=this.content.createdAt,this.img=this.content.img,this.alt=this.content.alt,this.references=this.content.references,this.features={},this.content[O.FEATURES_KEY]&&Object.keys(this.content[O.FEATURES_KEY]).forEach((function(e){t.features[e]=t.content[O.FEATURES_KEY][e]})),this.body=v.default.getBodyAsHtml(this.content))}}]),n}(y.default);_.FEATURES_KEY="features",R([Object(h.Prop)()],_.prototype,"content",void 0);var m=_=O=R([h.Component],_),x=n(11),component=Object(x.a)(m,undefined,undefined,!1,null,null,null);e.default=component.exports},293:function(t,e,n){"use strict";n(268)},294:function(t,e,n){var r=n(29)(!1);r.push([t.i,".antagonist-comparison{margin-top:3em;overflow-y:auto}.antagonist-comparison th img{max-height:200px}@media(max-width:768px){.antagonist-comparison th .description{display:none}}.antagonist-comparison .feature-name{white-space:nowrap}",""]),t.exports=r},296:function(t,e,n){"use strict";n.r(e);n(58),n(171),n(57),n(13),n(271),n(45),n(275),n(277),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(44),n(59);var r=n(71),c=n(52),o=n(53),f=n(111),l=n(112),d=n(74),h=n(10),v=n(75);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(f.a)(n,t);var e=y(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).antagonistList=[],t}return Object(o.a)(n,[{key:"allFeaturesNames",get:function(){var t=[];return this.antagonistList.forEach((function(e){t=Object(r.a)(new Set([].concat(Object(r.a)(t),Object(r.a)(Object.keys(e.features)))))})),t}}]),n}(v.Vue),R=O=j([v.Component],O),_=(n(293),n(11)),component=Object(_.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.antagonistList?n("section",{staticClass:"antagonist-comparison"},[n("table",{staticClass:"comparison features"},[n("thead",[n("tr",[n("th"),t._v(" "),t._l(t.antagonistList,(function(e){return n("th",{key:e.slug},[n("NuxtLink",{attrs:{to:"antagonists/"+e.slug}},[n("h3",[t._v(t._s(e.title))])]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n            "+t._s(e.description)+"\n          ")]),t._v(" "),n("p",[n("img",{attrs:{src:e.imgUrl,alt:e.alt}})])],1)}))],2)]),t._v(" "),n("tbody",t._l(t.allFeaturesNames,(function(e){return n("tr",{key:e},[n("th",{staticClass:"feature-name"},[t._v("\n          "+t._s(e)+"\n        ")]),t._v(" "),t._l(t.antagonistList,(function(r){return n("td",{key:r.slug,staticClass:"feature-value"},[t._v("\n          "+t._s(r.features[e])+"\n        ")])}))],2)})),0)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);n(171),n(44);var r=n(52),c=n(53),o=n(111),f=n(112),l=n(74),d=n(10),h=n(75),v=n(296),y=n(269);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},R=function(t){Object(o.a)(n,t);var e=j(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"created",value:function(){var t,e=this;this.antagonistList=[],null===(t=this.contentList)||void 0===t||t.forEach((function(content){e.antagonistList.push(new y.default({propsData:{content:content}}))})),this.antagonistList=this.antagonistList.sort((function(t,e){return t.order-e.order}))}}]),n}(v.default);O([Object(h.Prop)()],R.prototype,"contentList",void 0);var _=R=O([h.Component],R),m=n(11),component=Object(m.a)(_,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);