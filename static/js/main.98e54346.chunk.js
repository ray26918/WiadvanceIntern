(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={wrap:"works_wrap__3Dr6f",title:"works_title__2yLwH"}},22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},3:function(e,t,a){e.exports={App:"App_App__3bY6Z",content:"App_content__235tG",header:"App_header__1bWrb",selected:"App_selected__ZtCB_",box:"App_box__2foHp",boxleft:"App_boxleft__316Q5",boxright:"App_boxright__1lIFY",footer:"App_footer__15d0v"}},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=(a(27),a(15)),c=a(16),s=a(20),m=a(17),u=a(21),p=a(3),d=a.n(p),h=a(39),f=a(40),v=a(42),w=a(5),g=a.n(w),b=a(6),_=a.n(b),E=function(e){var t=e.dataSource;return r.a.createElement("div",{className:_.a.worklist},r.a.createElement("ul",null,t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h.a,{to:"/works/".concat(e.id)},r.a.createElement("div",{className:_.a.cover},r.a.createElement("img",{src:e.cover})),r.a.createElement("div",{className:_.a.workbrief},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.brief),r.a.createElement("div",{className:_.a.tag},e.tags&&e.tags.map(function(e){return r.a.createElement("span",{key:e},e)})))))})))},k=a(8),y=function(){return r.a.createElement("div",{className:g.a.wrap},r.a.createElement("section",{className:g.a.brief},r.a.createElement("h2",null,"\u7def\u8b19\u79d1\u6280\u5be6\u7fd2\u6210\u679c"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u6307\u5c0e\u6559\u6388: \u9678\u627f\u5fd7"),r.a.createElement("li",null,"\u5be6\u7fd2\u751f: 1071610\u5433\u54c1\u71c1")),r.a.createElement("p",null,"I design applications, interactive systems and websites. I love using technology in creative contexts."),r.a.createElement("p",null,"I am a freelancer based in Utrecht, the Netherlands."),r.a.createElement("p",null,"Contact me at thijs@vauxlab.com")),r.a.createElement("section",{className:g.a.work},r.a.createElement("div",{className:g.a.title},r.a.createElement("h3",null,"A selection of work"),r.a.createElement("p",null,"You can find more in the work overview.")),r.a.createElement(E,{dataSource:k.data})))},x=a(11),N=a.n(x),A=function(){return r.a.createElement("div",{className:N.a.wrap},r.a.createElement("div",{className:N.a.title},r.a.createElement("h3",null,"My Work"),r.a.createElement("p",null,"A collection of different things I have worked on.")),r.a.createElement(E,{dataSource:k.data}))},j=a(7),z=a.n(j),I=function(){return r.a.createElement("div",{className:z.a.wrap},r.a.createElement("div",{className:z.a.box},r.a.createElement("div",{className:z.a.title},r.a.createElement("h1",null,"StaffTraveler"),r.a.createElement("p",null,"Sep 2017 to Aug 2018")),r.a.createElement("section",{className:z.a.content},r.a.createElement("p",null,"Airline employees are able to travel with other airlines either for free or a small fee if seats are available. This is known as flying non-revenue. But since airline computer systems all operating individually, it takes a lot of effort to request and keep track of the current availability (loads) for the flights you are interested in."),r.a.createElement("p",null,"StaffTraveler provides a way for users to quickly and easily find and share loads information via a communitiy driven platform. Users can spend credits to request loads information, or earn credits by replying to requests for the company they work for."),r.a.createElement("p",null,"In addition to loads, users are able to exchange travel tips and book hotels and cars with discounts through the app."),r.a.createElement("p",null,"In this project we did a full rewrite of the exising version 1 web application. We built the next version completely from scratch, re-thinking the infrastructure and logic and adopting a modern cloud computing platform."),r.a.createElement("p",null,"For version 2 we developed apps for iOS and Android devices as well as an admin web interface."),r.a.createElement("p",null,"I was solely responsible for designing and developing the backend infrastructure, APIs, database and the admin web application. This ambitious project took almost a year from start to the first product launch."),r.a.createElement("p",null,"The app has close to 100k users at the time of writing and potential to grow much larger. Both revenue and user engagement greatly increased within the first months after launch."))))},S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.location;return r.a.createElement("div",{className:d.a.App},r.a.createElement("header",{className:d.a.header},r.a.createElement("div",{className:d.a.box},r.a.createElement(h.a,{to:"/"},r.a.createElement("div",{className:d.a.boxleft},"\u5433\u54c1\u71c1\u7684\u5be6\u7fd2\u7db2\u9801")),r.a.createElement("div",{className:d.a.boxright},r.a.createElement(h.a,{to:"/"},r.a.createElement("p",{className:"/"===e.pathname?d.a.selected:null},"HOME")),r.a.createElement(h.a,{to:"/works"},r.a.createElement("p",{className:"/works"===e.pathname?d.a.selected:null},"WORKS"))))),r.a.createElement("section",{className:d.a.content},r.a.createElement(f.a,{path:"/",exact:!0,component:y}),r.a.createElement(f.a,{path:"/works",exact:!0,component:A}),r.a.createElement(f.a,{path:"/works/:id",exact:!0,component:I})),r.a.createElement("footer",{className:d.a.footer},r.a.createElement("p",null,"\xa9 ",r.a.createElement("b",null,"2018 Thijs Koerselman")),r.a.createElement("p",null,"Handmade with")))}}]),t}(n.Component),O=Object(v.a)(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(41);l.a.render(r.a.createElement(T.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,a){e.exports={wrap:"home_wrap__1YLLy",brief:"home_brief__2kiwZ",work:"home_work__1dV1x",title:"home_title__3ysIs"}},6:function(e,t,a){e.exports={worklist:"work_worklist__2Ug4n",cover:"work_cover__1kit0",workbrief:"work_workbrief__i3TuY",tag:"work_tag__1P7rI"}},7:function(e,t,a){e.exports={wrap:"detail_wrap__2TyNc",box:"detail_box__O4HhS",title:"detail_title__3kRX5",content:"detail_content__5V3eB"}},8:function(e){e.exports={code:200,msg:"\u8bf7\u6c42\u6210\u529f!",data:[{title:"StaffTraveler",brief:"A community driven app which allows airline staff to request and share loads information for non-rev flights",tags:["nodejs","react","styled components","google cloud platform","typescript","kubernetes","react native"],cover:"https://zhtutorial.oss-cn-hangzhou.aliyuncs.com/react/website/cover1.jpg",id:1},{title:"Vauxlab 2017",brief:"About this website, and what makes it awesome.",tags:["react","gatsby","styled components","contentful"],cover:"https://zhtutorial.oss-cn-hangzhou.aliyuncs.com/react/website/cover2.jpg",id:2},{title:"Re:Fuse",brief:"Fusing reactive programming with audiovisual composition using web technologies",tags:["web audio","nodejs","rx.js"],cover:"https://zhtutorial.oss-cn-hangzhou.aliyuncs.com/react/website/cover3.jpg",id:3},{title:"Kaliber",brief:"Front-end development for a digital media agency",tags:["postcss","react","redux"],cover:"https://zhtutorial.oss-cn-hangzhou.aliyuncs.com/react/website/cover4.jpg",id:4},{title:"NLN Live",brief:"A system for non-linear composition and live performance",tags:["nodejs","react","mongodb"],cover:"https://zhtutorial.oss-cn-hangzhou.aliyuncs.com/react/website/cover5.jpg",id:5},{title:"Coca-Cola Cascada",brief:"A huge interactive installation with generative graphics, music and sound",tags:["max"],cover:"https://zhtutorial.oss-cn-hangzhou.aliyuncs.com/react/website/cover6.jpg",id:6},{title:"4D Sound",brief:"A novel immersive system which allows for evolving changes in three-dimensional positioning of sound.",tags:["max","c/c++"],cover:"https://zhtutorial.oss-cn-hangzhou.aliyuncs.com/react/website/cover7.jpg",id:7}]}}},[[22,2,1]]]);
//# sourceMappingURL=main.98e54346.chunk.js.map