(window.webpackJsonp=window.webpackJsonp||[]).push([[19,7,8,9,10,11,12,14],{254:function(t,e,n){"use strict";n.r(e);n(186),n(11);var r=n(69),c=n(70),o=n(126),l=n(127),f=n(90),d=n(15),h=(n(41),n(31),n(42),n(91));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(o.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).title="",t.description="",t.slug="",t.body="",t.img="",t.alt="",t.createdAt=new Date,t.references=[],t}return Object(c.a)(n,[{key:"createdAtFormatted",get:function(){var t;return null===(t=new Date(this.createdAt))||void 0===t?void 0:t.toLocaleDateString("en",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}]),n}(h.Vue),O=j=v([h.Component],j),R=n(13),component=Object(R.a)(O,undefined,undefined,!1,null,null,null);e.default=component.exports},255:function(t,e,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("5e5117c4",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n.r(e);n(186),n(11);var r=n(69),c=n(70),o=n(126),l=n(127),f=n(90),d=n(15),h=(n(41),n(91));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v,j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=v=function(t){Object(o.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,null,[{key:"getBodyAsHtml",value:function(content){var t,e=new(h.Vue.extend(v))({propsData:{content:content}});return e.$mount(),null===(t=e.$el)||void 0===t?void 0:t.outerHTML}}]),n}(h.Vue);j([Object(h.Prop)()],O.prototype,"content",void 0);var R=O=v=j([h.Component],O),m=n(13),component=Object(m.a)(R,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-content",{attrs:{document:t.content}})}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,n){"use strict";n.r(e);n(186),n(11);var r=n(7),c=n(69),o=n(70),l=n(126),f=n(127),d=n(90),h=n(15),y=(n(44),n(41),n(31),n(42),n(91));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(l.a)(h,t);var e,n,f,d=v(h);function h(){var t;return Object(c.a)(this,h),(t=d.apply(this,arguments)).globalContent=null,t.pageTitle="",t.pageDescription="",t}return Object(o.a)(h,[{key:"getGlobalData",value:(f=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.globalContent){t.next=4;break}return t.next=3,this.$content("global").fetch();case 3:this.globalContent=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)})},{key:"fetch",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"created",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getGlobalData();case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"head",value:function(){var t,e;return{title:(this.pageTitle?this.pageTitle+" — ":"")+(null===(t=this.globalContent)||void 0===t?void 0:t.title),meta:[{hid:"description",name:"description",content:this.pageDescription?this.pageDescription:null===(e=this.globalContent)||void 0===e?void 0:e.description}]}}}]),h}(y.Vue),R=O=j([y.Component],O),m=n(13),component=Object(m.a)(R,undefined,undefined,!1,null,null,null);e.default=component.exports},260:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("6f824354",content,!0,{sourceMap:!1})},261:function(t,e,n){"use strict";n(255)},262:function(t,e,n){var r=n(36)(!1);r.push([t.i,".blog-entry-header .blog-entry-img-wrapper{text-align:center}.blog-entry-header .blog-entry-img-wrapper img{max-height:200px}",""]),t.exports=r},263:function(t,e,n){"use strict";n.r(e);n(186),n(11);var r=n(69),c=n(70),o=n(126),l=n(127),f=n(90),d=n(15),h=(n(41),n(91));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(o.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"imgUrl",get:function(){return"/img/blog/"+this.img}}]),n}(n(254).default),O=j=v([h.Component],j),R=(n(261),n(13)),component=Object(R.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"blog-entry"},[n("header",{staticClass:"blog-entry-header"},[n("p",{staticClass:"blog-entry-img-wrapper"},[n("img",{attrs:{src:t.imgUrl,alt:t.alt}})]),t._v(" "),n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"created"},[n("time",[t._v(t._s(t.createdAtFormatted))])]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.description)+"\n    ")])]),t._v(" "),n("section",{staticClass:"blog-entry-body",domProps:{innerHTML:t._s(t.body)}}),t._v(" "),t.references?n("section",{staticClass:"blog-references"},[n("h2",[t._v("References")]),t._v(" "),n("ul",t._l(t.references,(function(e){return n("li",{key:e},[n("a",{attrs:{href:e,target:"_blank"}},[t._v("\n          "+t._s(e)+"\n        ")])])})),0)]):t._e()])}),[],!1,null,null,null);e.default=component.exports},264:function(t,e,n){"use strict";n.r(e);n(186),n(11);var r=n(69),c=n(70),o=n(126),l=n(127),f=n(90),d=n(15),h=(n(41),n(31),n(42),n(91)),y=n(257);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(o.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"created",value:function(){this.content&&(this.title=this.content.title,this.slug=this.content.slug,this.description=this.content.description,this.createdAt=this.content.createdAt,this.img=this.content.img,this.alt=this.content.alt,this.references=this.content.references,this.body=y.default.getBodyAsHtml(this.content))}}]),n}(n(263).default);j([Object(h.Prop)()],O.prototype,"content",void 0);var R=O=j([h.Component],O),m=n(13),component=Object(m.a)(R,undefined,undefined,!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n(260)},270:function(t,e,n){var r=n(36)(!1);r.push([t.i,".blog-entry-list{margin-top:1em;text-align:center}.blog-entry-list .blog-entries{margin:0;padding:0}.blog-entry-list .blog-entries li{clear:left;list-style-type:none;margin-bottom:3em}.blog-entry-list .blog-entries li img{width:300px;margin:5px}",""]),t.exports=r},272:function(t,e,n){"use strict";n.r(e);n(186),n(11);var r=n(69),c=n(126),o=n(127),l=n(90),f=n(15),d=(n(41),n(91));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},v=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).blogEntryList=[],t}return n}(d.Vue),j=v=y([d.Component],v),O=(n(269),n(13)),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.blogEntryList?n("section",{staticClass:"blog-entry-list"},[t.blogEntryList?n("ol",{staticClass:"blog blog-entries"},t._l(t.blogEntryList,(function(e){return n("li",{key:e.slug},[n("NuxtLink",{attrs:{to:"blog/"+e.slug}},[n("h3",[t._v(t._s(e.title))])]),t._v(" "),n("p",{staticClass:"created"},[n("time",[t._v(t._s(e.createdAtFormatted))])]),t._v(" "),n("NuxtLink",{attrs:{to:"blog/"+e.slug}},[n("p",[n("img",{attrs:{src:e.imgUrl,alt:e.alt}})])]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n        "+t._s(e.description)+"\n      ")])],1)})),0):t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);n(186),n(11);var r=n(69),c=n(70),o=n(126),l=n(127),f=n(90),d=n(15),h=(n(41),n(32),n(91)),y=n(272),v=n(264);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},R=function(t){Object(o.a)(n,t);var e=j(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"created",value:function(){var t,e=this;this.blogEntryList=[],null===(t=this.contentList)||void 0===t||t.forEach((function(content){e.blogEntryList.push(new v.default({propsData:{content:content}}))})),this.blogEntryList=this.blogEntryList.sort((function(t,e){return new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()}))}}]),n}(y.default);O([Object(h.Prop)()],R.prototype,"contentList",void 0);var m=R=O([h.Component],R),_=n(13),component=Object(_.a)(m,undefined,undefined,!1,null,null,null);e.default=component.exports},320:function(t,e,n){"use strict";n.r(e);n(186),n(11);var r=n(7),c=n(69),o=n(70),l=n(126),f=n(127),d=n(90),h=n(15),y=(n(44),n(41),n(91));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(l.a)(f,t);var e,n=v(f);function f(){var t;return Object(c.a)(this,f),(t=n.apply(this,arguments)).pageTitle="Blog",t}return Object(o.a)(f,[{key:"asyncData",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,t.next=3,n("blog",r.slug).fetch();case 3:return c=t.sent,t.abrupt("return",{blogContentList:c});case 5:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}]),f}(n(258).default),R=O=j([y.Component],O),m=n(13),component=Object(m.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"blog"},[t._m(0),t._v(" "),n("BlogList",{attrs:{"content-list":t.blogContentList}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"title-wrapper"},[n("h1",{staticClass:"title"},[t._v("\n      Blog\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogList:n(277).default})}}]);