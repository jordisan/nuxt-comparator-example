__NUXT_JSONP__("/blog", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){k[0]={slug:"spa-usability",description:"This time, the proposal is for a set of usability heuristics specifically compiled for rich internet applications (RIA), whose interfaces currently lack a standard set of principles or best practices.",title:"Single-Page Application usability heuristics",img:"ux-design.jpg",alt:"Stages of UX design",createdAt:"2021-02-03T00:00:00.000Z",references:["https:\u002F\u002Fjordisan.net\u002Fblog\u002F2011\u002Fria-rich-internet-applications-usability-heuristics\u002F","https:\u002F\u002Fdocs.google.com\u002Fspreadsheets\u002Fd\u002F1BZ3-4P55wqaaAnkb5j7uuMUzdbMScQTzrxoI-u9Py-4\u002Fedit#gid=500135220"],toc:[],body:{type:e,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Rich Internet applications (RIA) (or ‘web applications’ as opposed to ‘web pages’) are very common nowadays; they may come from a standard web page that has been improved with extra functionalities, or from a desktop application that has been migrated towards a web platform. In any case, there are very few well-established standards for that kind of interfaces."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That’s why I have compiled a list of RIA-specific usability heuristics (or best practices) that may help when it comes time to develop or to evaluate a rich web application. They are not intended to fully cover all the aspects of the application, but to address issues specific of rich web interfaces; these heuristics should be a complement of more general ones."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As with the psychological usability heuristics, they are in the form of a Google Docs spreadsheet to make it easy to download or clone it for your own work."}]}]},dir:l,path:"\u002Fblog\u002Fspa-usability",extension:f,updatedAt:m};k[1]={slug:"static-generation",description:"Static site generators work by generating all of your websites HTML files at build time.The server only needs to return the pre-rendered HTML file.",title:"Another approach: Static-Site Generation",img:"static-generation.png",alt:"Diagram of web static generation",createdAt:"2021-02-02T00:00:00.000Z",references:["https:\u002F\u002Fmedium.com\u002Ffrontend-digest\u002Fclient-side-rendering-vs-server-side-rendering-vs-static-site-generation-2a0702cbb08d#6834"],toc:[{id:n,depth:g,text:o},{id:p,depth:g,text:q}],body:{type:e,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Static site generators work by generating all of your websites HTML files at build time. The server makes your API calls and generates static HTML files for every and every page of your website. This means that when a client requests one of your webpages, the server doesn’t need to make any API calls, or render any HTML, it only needs to return the pre-rendered HTML file."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let’s say you are building a blog, and you have written ten blog posts. When your static site builds, it will generate one HTML file for each of your blog posts."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When you write another post, you need to rebuild your application and deploy the updated static assets."}]},{type:a,value:c},{type:b,tag:r,props:{id:n},children:[{type:b,tag:h,props:{ariaHidden:s,href:"#advantages-of-static-site-generation",tabIndex:t},children:[{type:b,tag:u,props:{className:[v,w]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"They load fast"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since the HTML is already compiled and ready to go, static site’s load faster than both client-side rendered sites, and server-side rendered sites. You can"}]},{type:a,value:c},{type:b,tag:i,props:{start:g},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"They are cheap to host"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since your website is just made up of a bunch of different HTML files, you can host your site on any static file hosting service like S3, or use a CDN."}]},{type:a,value:c},{type:b,tag:r,props:{id:p},children:[{type:b,tag:h,props:{ariaHidden:s,href:"#disadvantages-of-static-site-generation",tabIndex:t},children:[{type:b,tag:u,props:{className:[v,w]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"They don’t scale that well"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As your site grows, so will the build time of your static site. This can cause builds of websites with large amounts of posts to slow down to a crawl. Static sites work best for sites with data that doesn’t change that often, like blogs, and not so well for sites with ever-changing data, like shops."}]}]},dir:l,path:"\u002Fblog\u002Fstatic-generation",extension:f,updatedAt:m};return {data:[{blogContentList:k}],fetch:{"Index:0":{pageTitle:"Blog",globalContent:{slug:"global",description:"Comparison between traditional web server-side frontend rendering and modern Single-Page Applications (client-side rendered)",title:"Server-side vs. SPA frontends",toc:[],body:{type:e,children:[{type:b,tag:d,props:{},children:[{type:a,value:"This is an example of site generated with "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fjordisan\u002Fnuxt-comparator\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Nuxt comparator"}]}]}]},dir:"\u002F",path:"\u002Fglobal",extension:f,createdAt:x,updatedAt:x},pageDescription:"",blogContentList:k}},mutations:void 0}}("text","element","\n","p","root",".md",2,"a","ol","li",Array(2),"\u002Fblog","2021-02-16T00:41:41.092Z","advantages-of-static-site-generation","Advantages of Static-Site Generation","disadvantages-of-static-site-generation","Disadvantages of Static-Site Generation","h2","true",-1,"span","icon","icon-link","2021-02-16T00:41:41.096Z")));