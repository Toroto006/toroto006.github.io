(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{117:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(30),c=t.n(l),s=(t(84),t(52)),o=t(6),i=!0,m={gradientColors:"#000022, #001242, #0094c6, #005e7c, #040f16",firstName:"Tobias",middleName:"",lastName:"Oberd\xf6rfer",message:" Having a challenge to follow is the most fun! ",icons:[{image:"fa fa-linkedin",url:"https://linkedin.com/in/tobias-oberdoerfer"},{image:"fa fa-github",url:"https://github.com/Toroto006"},{image:"fa fa-comments",url:"https://matrix.to/#/@toroto008:matrx.me"},{image:"fa fa-envelope",url:"mailto:tobias.ober@hotmail.com"},{image:"fa fa-twitter",url:"https://twitter.com/toroto008"}]},u={show:!0,heading:"About Me",imageLink:t(85),imageSize:375,message:"My name is Tobias Oberd\xf6rfer and I am currently doing my masters degree with Major in Cyber Security at ETH Zurich. I am passionate about anything that has to do with computer systems, from how the linux kernel works over board management controllers to overall cyber security. In my free time I am currently most often occupied with playing CTFs as part of flagbot or organizers.",resume:"tobias-oberdoerfer-resume-en.pdf"},d={show:!0,heading:"Recent Projects",specificRepos:["InfoSecLab-ETHZ-HS21","SysSec-ETHZ-HS21","routingSimEngine-ETHZ-FS20","IML-ETHZ-FS21"],gitHubUsername:"Toroto006",reposLength:4},f={show:!1},h={show:!0,heading:"Skills",hardSkills:[{name:"Python",value:90},{name:"C",value:80},{name:"Java",value:70},{name:"Haskell",value:65},{name:"IDA Pro",value:65},{name:"GIT",value:60},{name:"Ansible",value:50},{name:"React",value:40}],softSkills:[{name:"Goal-Oriented",value:90},{name:"Communication",value:85},{name:"Problem Solving",value:80},{name:"Teamwork",value:75},{name:"Leadership",value:75},{name:"Adaptability",value:70},{name:"Time management",value:65},{name:"Creativity",value:65}]},g=!0,p="Get In Touch",b="I'm currently looking for an internship or part-time job in the field of Cyber Security! If you know of any positions available, have any questions, or just want to say hi, please feel free to email me at",E="tobias.ober@hotmail.com",v={show:!1},w=t(70),k=t.n(w),y=t(25),N=t(39),x=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,l=e.message,c=e.icons;return r.a.createElement(N.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(y.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(k.a,{className:"lead typist",cursor:{show:!1}}," ",l),r.a.createElement("div",{className:"p-5"},c.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me")))})),S=t(17),j=t.n(S),_=t(26),O=t(8),T=t(21),C=t.n(T),R=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),z=function(e){var a=e.heading,t=e.message,n=e.link,l=e.imgSize,c=e.resume,s=r.a.useState(""),o=Object(O.a)(s,2),i=o[0],m=o[1],u=r.a.useState(Boolean(n)),d=Object(O.a)(u,2),f=d[0],h=d[1];r.a.useEffect((function(){n&&!R.test(n)?g():m(n)}),[n]);var g=function(){var e=Object(_.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.instagram.com/","/?__a=1",e.prev=2,e.next=5,C.a.get("https://www.instagram.com/"+n+"/?__a=1");case 5:a=e.sent,m(a.data.graphql.user.profile_pic_url_hd),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),h(!1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},f&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:i,alt:"profilepicture",width:l,height:l})),r.a.createElement("div",{className:"col-lg-".concat(f?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),c&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:c,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},L=t(55),I=t(71),P=t(34),H=t(33),M=t(37),F=t(31),A=t.n(F),Z=function(e){var a=e.svn_url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"".concat(a,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa fa-github"})," Clone Project"),r.a.createElement("a",{href:a,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa fa-github"})," Repo"))},B=function(e){var a=e.languages_url,t=e.repo_url,l=Object(n.useState)([]),c=Object(O.a)(l,2),s=c[0],o=c[1],i=Object(n.useCallback)(Object(_.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(a);case 3:return t=e.sent,e.abrupt("return",o(t.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);Object(n.useEffect)((function(){i()}),[i]);var m=[],u=0;for(var d in s)m.push(d),u+=s[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",m.length?m.map((function(e){return r.a.createElement("a",{key:e,className:"badge badge-light card-link",href:t+"/search?l=".concat(e),target:" _blank"},e,":"," ",Math.trunc(s[e]/u*1e3)/10," %")})):"code yet to be deployed.")},W=function(e){e.star_count;var a=e.repo_url,t=e.pushed_at,l=Object(n.useState)("0 mints"),c=Object(O.a)(l,2),s=c[0],o=c[1],i=Object(n.useCallback)((function(){var e=new Date(t),a=(new Date).getTime()-e.getTime(),n=Math.trunc(a/1e3/60/60);if(n<24){if(n<1)return o("just now");var r=1===n?"hour":"hours";return o("".concat(n.toString()," ").concat(r," ago"))}var l=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(e);return o("on ".concat(l))}),[t]);return Object(n.useEffect)((function(){i()}),[i]),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:a+"/stargazers",target:" _blank",className:"text-dark text-decoration-none"},r.a.createElement("i",{className:"fab fa fa-github"})," "),r.a.createElement("small",{className:"text-muted"},"Updated ",s))},D=function(e){var a=e.value,t=a.name,n=a.description,l=a.svn_url,c=a.stargazers_count,s=a.languages_url,o=a.pushed_at;return r.a.createElement(H.a,{md:6},r.a.createElement(M.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(M.a.Body,null,r.a.createElement(M.a.Title,{as:"h5"},t||r.a.createElement(A.a,null)," "),r.a.createElement(M.a.Text,null,n?n||r.a.createElement(A.a,{count:3}):""," "),l?r.a.createElement(Z,{svn_url:l}):r.a.createElement(A.a,{count:2}),r.a.createElement("hr",null),s?r.a.createElement(B,{languages_url:s,repo_url:l}):r.a.createElement(A.a,{count:3}),a?r.a.createElement(W,{star_count:c,repo_url:l,pushed_at:o}):r.a.createElement(A.a,null))))},G={name:null,description:null,svn_url:null,stargazers_count:null,languages_url:null,pushed_at:null},U="https://api.github.com",J=function(e){var a=e.heading,t=e.username,l=e.length,c=e.specfic,s="".concat(U,"/users/").concat(t,"/repos?sort=updated&direction=desc"),o="".concat(U,"/repos/").concat(t),i=new Array(l+c.length).fill(G),m=Object(n.useState)([]),u=Object(O.a)(m,2),d=u[0],f=u[1],h=Object(n.useCallback)(Object(_.a)(j.a.mark((function e(){var a,t,n,r,i,m,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],e.prev=1,e.prev=2,t=Object(I.a)(c),e.prev=4,t.s();case 6:if((n=t.n()).done){e.next=14;break}return r=n.value,e.next=10,C.a.get("".concat(o,"/").concat(r));case 10:i=e.sent,a.push(i.data);case 12:e.next=6;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),t.e(e.t0);case 19:return e.prev=19,t.f(),e.finish(19);case 22:e.next=27;break;case 24:e.prev=24,e.t1=e.catch(2),console.error(e.t1.message);case 27:return e.next=29,C.a.get(s);case 29:m=e.sent,a=[].concat(Object(L.a)(a),Object(L.a)(m.data)),u=[],a.map((function(e){u.find((function(a){return a.full_name===e.full_name}))||u.push(e)})),f(u.slice(0,l)),e.next=39;break;case 36:e.prev=36,e.t2=e.catch(1),console.error(e.t2.message);case 39:case"end":return e.stop()}}),e,null,[[1,36],[2,24],[4,16,19,22]])}))),[s,l,c,o]);return Object(n.useEffect)((function(){h()}),[h]),r.a.createElement(N.a,{fluid:!0,id:"projects",className:"bg-light m-0"},r.a.createElement(y.a,{className:""},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement(P.a,null,d.length?d.map((function(e,a){return r.a.createElement(D,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})):i.map((function(e,a){return r.a.createElement(D,{key:"dummy-".concat(a),id:"dummy-".concat(a),value:e})})))))},K=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(y.a,null,e.children,r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"},"This page is built with React and and a fork from the Developer's Portfolio by ",r.a.createElement("a",{className:"badge badge-dark",href:"https://github.com/hashirshoaeb","aria-label":"My GitHub"},"Hashir Shoaib"),"."))))},q="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,V="undefined"!==typeof window;function X(e){var a=e.element,t=e.useWindow;if(!V)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function Y(e,a,t,r,l){var c=Object(n.useRef)(X({useWindow:r})),s=null,o=function(){var a=X({element:t,useWindow:r});e({prevPos:c.current,currPos:a}),c.current=a,s=null};q((function(){if(V){var e=function(){l?null===s&&(s=setTimeout(o,l)):o()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),s&&clearTimeout(s)}}}),a)}Y.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var $=function(e){var a=r.a.useState(null),t=Object(O.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){l(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},Q=t(36),ee=t(20),ae=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),l=Object(O.a)(t,2),c=l[0],s=l[1],o=Object(n.useState)(0),i=Object(O.a)(o,2),f=i[0],g=i[1],p=r.a.useRef(),b=$(p),E=b?b.bottom:0;return Y((function(e){e.prevPos;var t=e.currPos;b&&(t.y+a.current.offsetTop-b.bottom>5?s(!0):s(!1),g(t.y))}),[E]),r.a.useEffect((function(){b&&(E-f>=a.current.offsetTop?s(!1):s(!0))}),[E,b,a,f]),r.a.createElement(Q.a,{ref:p,className:" fixed-top  ".concat(c?"navbar-transparent":"navbar-white"),expand:"lg",variant:"dark"},r.a.createElement(Q.a.Brand,{className:"brand",href:"/#home"},"<".concat(m.firstName," />")),r.a.createElement(Q.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement(Q.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(ee.a,{className:"mr-auto"},u.show&&r.a.createElement(ee.a.Link,{className:"nav-link lead",href:"/#aboutme"},"About"),h.show&&r.a.createElement(ee.a.Link,{className:"nav-link lead",href:"/#skills"},"Skills"),d.show&&r.a.createElement(ee.a.Link,{className:"nav-link lead",href:"/#projects"},"Projects"),r.a.createElement(ee.a.Link,{className:"nav-link lead",href:u.resume,target:"_blank",rel:"noreferrer noopener"},"Resume"))))})),te=t(53),ne=t(75),re=t(74);var le=function(e){var a=e.skill,t=e.value,n=e.isScrolled;return r.a.createElement("div",{style:{width:"95%"}},r.a.createElement("p",{className:"lead mb-1 mt-2"},a),r.a.createElement(re.a,{className:n?" progress-bar-animation":"progress",now:t}))};function ce(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement(le,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var se=function(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{xs:12,md:6},r.a.createElement(ce,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),r.a.createElement(H.a,{xs:12,md:6},r.a.createElement(ce,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))};var oe=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,l=r.a.useRef(),c=r.a.useState(!1),s=Object(O.a)(c,2),o=s[0],i=s[1];return Y((function(e){e.prevPos;var a=e.currPos;!o&&a.y-400<0&&i(!0)}),[],l),r.a.createElement(N.a,{ref:l,fluid:!0,className:"bg-white m-0",id:"skills"},r.a.createElement(y.a,{className:"p-5 "},r.a.createElement("h2",{ref:l,className:"display-4 pb-5 text-center"},a),r.a.createElement(ne.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},r.a.createElement(te.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},r.a.createElement(P.a,{className:"pt-3 px-1"},r.a.createElement(se,{skills:t,isScrolled:o}))),r.a.createElement(te.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},r.a.createElement(P.a,{className:"pt-3 px-1"},r.a.createElement(se,{skills:n,isScrolled:o}))))))},ie=function(e){var a=e.heading,t=e.message,n=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t,", ",r.a.createElement("a",{href:"mailto:".concat(n)},n),"."))},me=t(48),ue=function(e){var a=e.heading,t=e.message,n=e.img,l=e.imageSize;return r.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("p",{className:"lead"},t)),r.a.createElement("div",{className:"col-md-7"},r.a.createElement(me.a,null,n.map((function(e,a){return r.a.createElement(me.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:e.img,alt:"First slide",width:l.width,height:l.height}),r.a.createElement(me.a.Caption,null,r.a.createElement("h3",null,e.label),r.a.createElement("p",null,e.paragraph)))})))))))},de=function(e){var a=e.data;return r.a.createElement(H.a,{lg:"6"},r.a.createElement("div",{className:"pb-5 text-center"},r.a.createElement("img",{className:" bg-white mb-3",src:a.companylogo,alt:""}),r.a.createElement("p",{className:"lead"},a.role,r.a.createElement("br",null),a.date)))},fe=function(e){var a=e.experiences;return r.a.createElement("section",{className:"section"},r.a.createElement(y.a,null,r.a.createElement(N.a,{fluid:!0,className:"bg-white"},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a.heading),r.a.createElement(P.a,null,a.data.map((function(e){return r.a.createElement(de,{key:e.company,data:e})}))))))},he=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{gradient:m.gradientColors,title:"".concat(m.firstName," ").concat(m.middleName," ").concat(m.lastName),message:m.message,icons:m.icons,ref:a}),u.show&&r.a.createElement(z,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}),v.show&&r.a.createElement(fe,{experiences:v}),h.show&&r.a.createElement(oe,{heading:h.heading,hardSkills:h.hardSkills,softSkills:h.softSkills}),d.show&&r.a.createElement(J,{heading:d.heading,username:d.gitHubUsername,length:d.reposLength,specfic:d.specificRepos}),f.show&&r.a.createElement(ue,{heading:f.heading,message:f.message,img:f.images,imageSize:f.imageSize}))})),ge=function(){var e=r.a.useRef();return r.a.createElement(s.a,{basename:"/"},i&&r.a.createElement(ae,{ref:e}),r.a.createElement(o.a,{path:"/",exact:!0,component:function(){return r.a.createElement(he,{ref:e})}}),r.a.createElement(K,null,g&&r.a.createElement(ie,{heading:p,message:b,email:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},79:function(e,a,t){e.exports=t(117)},84:function(e,a,t){},85:function(e,a,t){e.exports=t.p+"static/media/professional-2022-03-resized.1543b581.jpg"}},[[79,1,2]]]);
//# sourceMappingURL=main.42ed491b.chunk.js.map