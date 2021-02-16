__NUXT_JSONP__("/", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){r[0]={slug:"spa",description:"The server sends static HTML and JavaScript files to the client. Then the client makes any API calls necessary to get initial data, and then it renders the application.",title:"Single-Page Applications",img:"spa.png",alt:"Diagram of a SPA",order:e,references:[s],features:{loading:"slow (first time)","browser support":"variable (good on modern browsers)",SEO:"poor",hosting:"very cheap (processing at browser)",UX:"depends on implementation"},toc:[{id:t,depth:e,text:u},{id:v,depth:e,text:w}],body:{type:p,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Client-side rendering was made popular with the advent of the Single Page Application (or SPA). JavaScript Frameworks like AngularJS, ReactJS, BackBone.JS and many more use this approach. With Client-Side-Rendered Applications, the server sends static HTML and JavaScript files to the client. Then the client makes any API calls necessary to get initial data, and then it renders the application."}]},{type:a,value:c},{type:b,tag:j,props:{id:t},children:[{type:b,tag:i,props:{ariaHidden:k,href:"#advantages-of-client-side-rendering",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"They are cheap and easy to host"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For client-side rendered applications, you don’t need a web server. You can simply host your application on any CDN or static file host like Amazon S3. There are lots of ways to host your client-side rendered application for free."}]},{type:a,value:c},{type:b,tag:f,props:{start:e},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"No full page reload required"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Users can navigate between your pages without having to make a server roundtrip. This makes your website feel fast, almost like a native application."}]},{type:a,value:c},{type:b,tag:j,props:{id:v},children:[{type:b,tag:i,props:{ariaHidden:k,href:"#disadvantages-of-client-side-rendering",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"They have poor SEO"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Client-side rendered applications often struggle with SEO. While Google claims they will crawl JavaScript rendered websites, they tend to rank poorly. If your website takes too long to load, it can end up being indexed as an empty page."}]},{type:a,value:c},{type:b,tag:f,props:{start:e},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Poor user experience on slower devices"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Leaving rendering to the client-side can add seconds of load time on slower laptops and mobile devices. This can lead to users getting frustrated and leaving your website before it finishes loading."}]},{type:a,value:c},{type:b,tag:f,props:{start:3},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"They load slower"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A client-side rendered application needs to make an additional round-trip to your API server to render. This means your website will always load slower than an equivalent server-side rendered or static application."}]}]},dir:x,path:"\u002Fantagonists\u002Fspa",extension:q,createdAt:h,updatedAt:h};r[1]={slug:"traditional",description:"Server-side rendered applications return the full HTML page of your application ready to be rendered, making server roundtrips as you navigate around the site.",title:"Traditional server-side rendering",img:"traditional.png",alt:"Diagram of traditional web",order:1,references:[s],features:{loading:"very fast (every page)","browser support":y,SEO:y,hosting:"needs server technology",UX:"standard web browsing"},toc:[{id:z,depth:e,text:A},{id:B,depth:e,text:C}],body:{type:p,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Server-side rendered applications return the full HTML page of your application ready to be rendered. They make any necessary API calls beforehand and pass all the necessary data in the initial request. This means your web browser has everything it needs to render the application right away and has a faster first interaction time for your users."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Server-side rendering is the traditional method for creating websites. The traditional disadvantage of server-side rendering was having to make server roundtrips as you navigate around the site. However, with tools like NextJS, we can create applications that offer the best of both worlds. By offering the first load with Server-Side rendering, and client-side routing afterwards."}]},{type:a,value:c},{type:b,tag:j,props:{id:z},children:[{type:b,tag:i,props:{ariaHidden:k,href:"#advantages-of-server-side-rendering",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"They load faster"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Server-side rendered applications load faster than equivalent client-side rendered applications. And since the server takes care of the heavy lifting, they also load quickly on less performant devices."}]},{type:a,value:c},{type:b,tag:f,props:{start:e},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"They have good SEO"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The SEO benefits of server-side rendering are well documented. Google rewards websites that load faster with higher page rankings. Google and other search engine crawlers will have no problems indexing your server-side rendered websites."}]},{type:a,value:c},{type:b,tag:j,props:{id:B},children:[{type:b,tag:i,props:{ariaHidden:k,href:"#disadvantages-of-server-side-rendering",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"They are expensive to host"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Compared to client-side rendered applications, server-side rendered applications are expensive to host. For every request to your server, your server will need to make API calls, and then render your HTML before passing it to the client."}]},{type:a,value:c},{type:b,tag:f,props:{start:e},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"They are more complicated to develop (with JS frameworks)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Setting up server-side rendering on your own with React can be a daunting task. However, this is made much easier by working with an established framework like NextJS."}]}]},dir:x,path:"\u002Fantagonists\u002Ftraditional",extension:q,createdAt:h,updatedAt:h};D[0]={slug:"spa-usability",description:"This time, the proposal is for a set of usability heuristics specifically compiled for rich internet applications (RIA), whose interfaces currently lack a standard set of principles or best practices.",title:"Single-Page Application usability heuristics",img:"ux-design.jpg",alt:"Stages of UX design",createdAt:"2021-02-03T00:00:00.000Z",references:["https:\u002F\u002Fjordisan.net\u002Fblog\u002F2011\u002Fria-rich-internet-applications-usability-heuristics\u002F","https:\u002F\u002Fdocs.google.com\u002Fspreadsheets\u002Fd\u002F1BZ3-4P55wqaaAnkb5j7uuMUzdbMScQTzrxoI-u9Py-4\u002Fedit#gid=500135220"],toc:[],body:{type:p,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Rich Internet applications (RIA) (or ‘web applications’ as opposed to ‘web pages’) are very common nowadays; they may come from a standard web page that has been improved with extra functionalities, or from a desktop application that has been migrated towards a web platform. In any case, there are very few well-established standards for that kind of interfaces."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That’s why I have compiled a list of RIA-specific usability heuristics (or best practices) that may help when it comes time to develop or to evaluate a rich web application. They are not intended to fully cover all the aspects of the application, but to address issues specific of rich web interfaces; these heuristics should be a complement of more general ones."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As with the psychological usability heuristics, they are in the form of a Google Docs spreadsheet to make it easy to download or clone it for your own work."}]}]},dir:E,path:"\u002Fblog\u002Fspa-usability",extension:q,updatedAt:h};D[1]={slug:"static-generation",description:"Static site generators work by generating all of your websites HTML files at build time.The server only needs to return the pre-rendered HTML file.",title:"Another approach: Static-Site Generation",img:"static-generation.png",alt:"Diagram of web static generation",createdAt:"2021-02-02T00:00:00.000Z",references:["https:\u002F\u002Fmedium.com\u002Ffrontend-digest\u002Fclient-side-rendering-vs-server-side-rendering-vs-static-site-generation-2a0702cbb08d#6834"],toc:[{id:F,depth:e,text:G},{id:H,depth:e,text:I}],body:{type:p,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Static site generators work by generating all of your websites HTML files at build time. The server makes your API calls and generates static HTML files for every and every page of your website. This means that when a client requests one of your webpages, the server doesn’t need to make any API calls, or render any HTML, it only needs to return the pre-rendered HTML file."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let’s say you are building a blog, and you have written ten blog posts. When your static site builds, it will generate one HTML file for each of your blog posts."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When you write another post, you need to rebuild your application and deploy the updated static assets."}]},{type:a,value:c},{type:b,tag:j,props:{id:F},children:[{type:b,tag:i,props:{ariaHidden:k,href:"#advantages-of-static-site-generation",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"They load fast"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since the HTML is already compiled and ready to go, static site’s load faster than both client-side rendered sites, and server-side rendered sites. You can"}]},{type:a,value:c},{type:b,tag:f,props:{start:e},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"They are cheap to host"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since your website is just made up of a bunch of different HTML files, you can host your site on any static file hosting service like S3, or use a CDN."}]},{type:a,value:c},{type:b,tag:j,props:{id:H},children:[{type:b,tag:i,props:{ariaHidden:k,href:"#disadvantages-of-static-site-generation",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"They don’t scale that well"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As your site grows, so will the build time of your static site. This can cause builds of websites with large amounts of posts to slow down to a crawl. Static sites work best for sites with data that doesn’t change that often, like blogs, and not so well for sites with ever-changing data, like shops."}]}]},dir:E,path:"\u002Fblog\u002Fstatic-generation",extension:q,updatedAt:h};return {data:[{antagonistContentList:r,blogContentList:D}],fetch:[{globalContent:{slug:"global",description:"Comparison between traditional web server-side frontend rendering and modern Single-Page Applications (client-side rendered)",title:"Server-side vs. SPA frontends",toc:[],body:{type:p,children:[{type:b,tag:d,props:{},children:[{type:a,value:"This is an example of site generated with "},{type:b,tag:i,props:{href:"https:\u002F\u002Fgithub.com\u002Fjordisan\u002Fnuxt-comparator\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Nuxt comparator"}]}]}]},dir:"\u002F",path:"\u002Fglobal",extension:q,createdAt:h,updatedAt:h},pageTitle:J,pageDescription:J,antagonistContentList:r,blogContentList:D}],mutations:void 0}}("text","element","\n","p",2,"ol","li","2021-02-16T00:42:27.369Z","a","h2","true",-1,"span","icon","icon-link","root",".md",Array(2),"https:\u002F\u002Fmedium.com\u002Ffrontend-digest\u002Fclient-side-rendering-vs-server-side-rendering-vs-static-site-generation-2a0702cbb08d","advantages-of-client-side-rendering","Advantages of client-side rendering","disadvantages-of-client-side-rendering","Disadvantages of client-side rendering","\u002Fantagonists","best","advantages-of-server-side-rendering","Advantages of Server-Side Rendering","disadvantages-of-server-side-rendering","Disadvantages of Server-Side Rendering",Array(2),"\u002Fblog","advantages-of-static-site-generation","Advantages of Static-Site Generation","disadvantages-of-static-site-generation","Disadvantages of Static-Site Generation","")));