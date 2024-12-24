(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4081:function(e,t,s){Promise.resolve().then(s.bind(s,2447))},2447:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return page}});var a=s(7437),r=s(717),n={page:"",tabs:[{id:1,url:"",name:"Intro",img:"",show:!1,dynamicSegments:[]}]};s(8139);var o=s(2230),i=s(8252),l=s(1723),c=s(8368),d=s(2265);s(8559);var intro_MenuGrid=()=>{let e=[{id:1,text:"Campaign",icon:"/navbar/Navbar_Campaign.webp",link:"/campaign"},{id:2,text:"Heroes",icon:"/navbar/Navbar_Heroes.webp",link:"/heroes"},{id:3,text:"Resources",icon:"/navbar/Navbar_Resources.webp",link:"/resources"},{id:4,text:"Treasure Hunt",icon:"/navbar/Navbar_TreasureHunt.webp",link:"/treasure-hunt"},{id:5,text:"Allied Cultures",icon:"/navbar/Navbar_AlliedCultures.webp",link:"/allied-cultures"},{id:6,text:"Season Pass",icon:"/navbar/Navbar_Seasons.webp",link:"/seasons"},{id:7,text:"Events",icon:"/navbar/Navbar_Events.webp",link:"/events"}],t=e.length%3;return(0,a.jsx)("div",{className:"menu-grid",children:e.map((s,r)=>(0,a.jsx)("a",{href:s.link,className:"text-link-skin ".concat(1===t&&r===e.length-1?"single-item":""),children:(0,a.jsxs)("div",{className:"menu-item",children:[(0,a.jsx)("span",{className:"menu-text",children:s.text}),(0,a.jsx)("img",{src:s.icon?s.icon:"/navbar/Navbar_Home.webp",alt:"Icon",className:"menu-icon"})]})},s.id))})};s(5411);var text_container_TextContainer=e=>{let{centered:t,headerTexts:s=[],texts:r=[],imageUrls:n=[],links:o,style:i,textRectangleHeight:l,pulsate:h,autoSlideSeconds:u}=e,m=Math.max(s.length,r.length,n.length),[p,x]=(0,d.useState)(0),[b,g]=(0,d.useState)(!0),[f,y]=(0,d.useState)(!0),v=m>1,w=m>0?p%m:0,j=Array.isArray(o)?o[w]:o,nextSlide=()=>{g(!1),setTimeout(()=>{x(e=>e===m-1?0:e+1)},500),resetAutoSlide()},resetAutoSlide=()=>{v&&u&&y(!0)};(0,d.useEffect)(()=>{g(!0)},[p]),(0,d.useEffect)(()=>{let e;return v&&u&&(e=setInterval(()=>{f&&nextSlide()},1e3*u)),()=>clearInterval(e)},[f,p,v,u]);let _=s[w]||"",N=r[w]||"",k=n[w]||"",S=(0,a.jsxs)("div",{className:"intro-container ".concat(t?"centered":""," ").concat(h?"pulsate":""),style:i,onMouseEnter:()=>y(!1),onMouseLeave:()=>resetAutoSlide(),children:[(0,a.jsx)("div",{className:"intro-heading-wrapper",children:(0,a.jsx)(c.Z,{className:"intro-heading",style:{color:"white"},children:_})}),(0,a.jsxs)("div",{className:"intro-text-wrapper",style:{backgroundImage:"url(".concat(k,")"),height:l},children:[(0,a.jsx)("div",{className:"intro-text-container",children:(0,a.jsx)("p",{className:"intro-text ".concat(b?"show":""),children:N})}),v&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"slider-arrow left-arrow",onClick:()=>{g(!1),setTimeout(()=>{x(e=>0===e?m-1:e-1)},500),resetAutoSlide()},"aria-label":"Previous Slide",children:"<"}),(0,a.jsx)("button",{className:"slider-arrow right-arrow",onClick:nextSlide,"aria-label":"Next Slide",children:">"})]})]})]});return j?(0,a.jsx)("a",{href:j,className:"text-link-white",style:{textDecoration:"none"},rel:"noopener noreferrer",children:S}):S},intro_Intro=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(text_container_TextContainer,{centered:!0,headerTexts:["Welcome to the Heroes of History Wiki, the home of all things Heroes of History!"],texts:[""],style:{marginBottom:"20px",marginTop:"5px"},textRectangleHeight:"150px",imageUrls:["/home/intro/hoh_banner.webp"]}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(c.Z,{center:!0,style:{marginBottom:"0px"},children:"Frequently Used Menu"}),(0,a.jsx)(intro_MenuGrid,{}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(text_container_TextContainer,{centered:!0,headerTexts:["Dynamic Rewards on the Wiki (Dec 14th 2024)","The Winter Event is running! (Dec 11th 2024)"],texts:["Introducing Dynamic Rewards for the Wiki! What does this mean? You can now use a new dropdown menu in the navigation bar of the website to preset your current era from the game.\nThis information will be used throughout the Wiki to ensure the values we display are always accurate to your current in-game progress. From Daily Specials for events to customizations and more, everything will now be 100% precise for you.",""],style:{marginBottom:"20px",marginTop:"5px"},textRectangleHeight:"150px",imageUrls:["","/events/intro/EventBackgroundWinterEvent.webp"],links:["https://heroesofhistory.wiki/#/events/daily-specials","https://heroesofhistory.wiki/#/events"],pulsate:!1,autoSlideSeconds:10}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(i.Z,{card1:(0,a.jsx)(o.Z,{title:"<b>Where to play?</b>",centered:!0,backgroundImage:"/home/intro/hoh_background.webp",blurred:!0,footer:"<b>Or play in browser: <a href='https://un-play.heroesofhistorygame.com/' class='text-link-skin'>Heroes of History</a></b>",children:(0,a.jsxs)("div",{className:"store-links",children:[(0,a.jsxs)("a",{href:"https://apps.apple.com/us/app/heroes-of-history-epic-empire/id6468993261",target:"_blank",children:[(0,a.jsx)("img",{src:"https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg",alt:"App Store"})," "]}),(0,a.jsxs)("a",{href:"https://play.google.com/store/apps/details?id=com.innogames.heroesofhistory&gl=US",target:"_blank",children:[(0,a.jsx)("img",{src:"https://i.ibb.co/sV03Rwp/Google-Play.png",style:{height:"50px",width:"167px"},alt:"Google Play"})," "]})]})}),card2:(0,a.jsx)(o.Z,{title:"<b>Social Media</b>",centered:!0,backgroundImage:"/home/intro/hoh_background.webp",blurred:!0,footer:"<b>\xa0</b>",children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("a",{href:"https://www.facebook.com/playheroesofhistory/",target:"_blank",children:(0,a.jsx)("img",{src:"/home/intro/social_facebook.webp",alt:"Facebook"})}),(0,a.jsx)("a",{href:"https://www.instagram.com/playheroesofhistory",target:"_blank",children:(0,a.jsx)("img",{src:"/home/intro/social_instagram.webp",alt:"Instagram"})}),(0,a.jsx)("a",{href:"https://www.youtube.com/@playheroesofhistory",target:"_blank",children:(0,a.jsx)("img",{src:"/home/intro/social_youtube.webp",alt:"Youtube"})}),(0,a.jsx)("a",{href:"https://www.discord.com/invite/rsA24Hrzca",target:"_blank",children:(0,a.jsx)("img",{src:"/home/intro/social_discord.webp",alt:"Discord"})})]})}),style:{marginTop:"20px",marginBottom:"20px"}}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(text_container_TextContainer,{centered:!0,headerTexts:["About the game"],texts:["The Heroes of History are ready for your command!\n                Forge your city through time - from the stone age to the future in the strategic city-building game. Start a legendary journey through history and ancient cultures, \n                as you collect powerful heroes from each era. Engage in thrilling PvE combat or challenge your friends in PvP. It's time to rise your empire and become the world's greatest leader in history."],style:{marginBottom:"20px"},textRectangleHeight:"80px",autoSlideSeconds:3})]}),h=s(7699),page=e=>{let t=(0,h.J)(n),s=t.url?(0,a.jsxs)("span",{children:[(0,a.jsx)("a",{href:"/".concat(""),className:"text-link-white",children:"Heroes of History Wiki"})," > ",t.name]}):"Heroes of History Wiki";return(0,a.jsx)(r.Z,{basePath:"",tabs:n.tabs,pageName:s,children:(t.url,(0,a.jsx)(intro_Intro,{tab:e.tab}))})}},8252:function(e,t,s){"use strict";var a=s(7437);s(5313),t.Z=e=>(0,a.jsxs)("div",{className:"card-container",style:e.style,children:[e.card1,e.card2]})},2230:function(e,t,s){"use strict";var a=s(7437);s(6239),t.Z=e=>{let{title:t,centered:s,children:r,backgroundImage:n,blurred:o=!1,footer:i=""}=e;return(0,a.jsxs)("div",{className:s?"card card-centered":"card",children:[(0,a.jsx)("header",{className:"card-header",dangerouslySetInnerHTML:{__html:t}}),(0,a.jsx)("main",{className:"card-body ".concat(o?"blurred":""),style:n?{backgroundImage:"url(".concat(n,")")}:{},children:(0,a.jsx)("div",{className:"card-body-content",children:(0,a.jsx)("p",{children:r})})}),i&&(0,a.jsx)("footer",{className:"card-footer",dangerouslySetInnerHTML:{__html:i}})]})}},717:function(e,t,s){"use strict";s.d(t,{Z:function(){return container_Container}});var a=s(7437),r=s(2265);s(6675),s(2845);var tabs_Tabs=e=>{let t=e.tabs.filter(e=>!1!==e.show);return(0,a.jsx)("div",{className:"tabs-container",children:(0,a.jsx)("section",{className:"section-tabs",children:t.map(t=>{let{id:s,url:r,name:n,img:o}=t,i=e.selectedTab.url===r,l=1===s?"tab tab-first":"tab";return(0,a.jsx)("div",{className:"".concat(l," ").concat(i?"active":""),children:(0,a.jsxs)("a",{href:"#".concat(r),className:"link-regular",children:[(0,a.jsx)("img",{src:o,alt:"",style:{verticalAlign:"middle",marginTop:"-2px"}}),(0,a.jsx)("span",{children:1!==s?n:""})]})},s)})})})};s(6994);var n=s(8368),feedback_modal_FeedbackModal=e=>{let t,{show:s,handleClose:o}=e,[i,l]=(0,r.useState)(!1),[c,d]=(0,r.useState)(""),h=(0,r.useRef)(null);t=window.location.hash;let handleSubmit=async e=>{e.preventDefault();let s=localStorage.getItem("contactLastSentMin");if(s&&15>Math.round((new Date-new Date(s))/6e4)){d("You need to wait some time before you can send an email again.");return}let a=new FormData(e.target);a.set("entry.599192843",t);try{await fetch("https://docs.google.com/forms/d/199XGBJpGUvv6za8yPYybuYdf6qHqTaWjpjuNyX-wsfY/formResponse",{method:"POST",body:a,mode:"no-cors"}),l(!0),localStorage.setItem("contactLastSentMin",new Date().toString()),setTimeout(()=>{o()},3e3)}catch(e){console.error("Error submitting form:",e),d("There was a problem submitting your form.")}},handleClickOutside=e=>{};return((0,r.useEffect)(()=>(s?document.addEventListener("mousedown",handleClickOutside):document.removeEventListener("mousedown",handleClickOutside),()=>document.removeEventListener("mousedown",handleClickOutside)),[s]),s)?(0,a.jsx)("div",{className:"modal-backdrop",children:(0,a.jsxs)("div",{className:"modal-content",ref:h,children:[(0,a.jsx)(n.Z,{children:"Let us know"}),(0,a.jsx)("p",{className:"modal-description",children:"Have you encountered an error or missing information on this page? Please fill out the form below. Leave us an email if you want a response."}),i&&(0,a.jsx)("p",{className:"modal-description message-success",children:"Successfully sent. I will get to your email soon."}),c&&(0,a.jsx)("p",{className:"modal-description message-error",children:c}),(0,a.jsxs)("form",{onSubmit:handleSubmit,children:[(0,a.jsx)("input",{type:"hidden",name:"entry.599192843",value:t}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{htmlFor:"email",className:"modal-description",children:"Email:"}),(0,a.jsx)("input",{type:"email",id:"email",name:"entry.1694799912"})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{htmlFor:"message",className:"modal-description",children:"Message: *"}),(0,a.jsx)("textarea",{id:"message",name:"entry.1554266932",required:!0})]}),(0,a.jsxs)("div",{className:"modal-actions",children:[(0,a.jsx)("button",{type:"button",className:"btn-close",onClick:o,children:"Close"}),(0,a.jsx)("button",{type:"submit",className:"btn-submit",children:"Send"})]})]})]})}):null},container_Container=e=>{let{children:t,basePath:s,tabs:n,selectedTab:o,pageName:i,selectBox:l}=e,[c,d]=(0,r.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(tabs_Tabs,{basePath:s,tabs:n,selectedTab:o}),(0,a.jsxs)("section",{className:"section-header",children:[(0,a.jsx)("div",{className:"header-left ".concat(l?"":"empty-selectbox"),children:i}),(0,a.jsx)("div",{className:"header-center ".concat(l?"":"empty"),children:l}),(0,a.jsx)("div",{className:"header-right",children:(0,a.jsx)("img",{src:"/shared/i_icon.webp",alt:"Info Icon",onClick:()=>{d(!0)},style:{cursor:"pointer"}})})]}),(0,a.jsx)("section",{className:"section-body",children:(0,a.jsx)("div",{className:"content-section",children:t})}),(0,a.jsx)(feedback_modal_FeedbackModal,{show:c,handleClose:()=>{d(!1)}})]})}},8368:function(e,t,s){"use strict";var a=s(7437);s(2265),s(6777),t.Z=e=>{let{children:t,center:s,style:r}=e;return(0,a.jsx)("h3",{className:s?"custom-h1 center":"custom-h1",style:r,children:t})}},1723:function(e,t,s){"use strict";var a=s(7437);s(1041),t.Z=()=>(0,a.jsx)("div",{className:"section-divider"})},7699:function(e,t,s){"use strict";s.d(t,{J:function(){return useTabHandler}});var a=s(2265);let useTabHandler=e=>{let[t,s]=(0,a.useState)(()=>{let t=window.location.hash.split("?")[0].replace("#","").toLowerCase(),s=e.tabs.find(e=>e.url.toLowerCase()===t);return s||e.tabs[0]});return(0,a.useEffect)(()=>{let handleHashChange=()=>{let t=window.location.hash.split("?")[0].replace("#","").toLowerCase(),a=e.tabs.find(e=>e.url.toLowerCase()===t);s(a||e.tabs[0])};return window.addEventListener("hashchange",handleHashChange),()=>{window.removeEventListener("hashchange",handleHashChange)}},[e]),t}},8139:function(){},8559:function(){},5313:function(){},6239:function(){},6675:function(){},6994:function(){},6777:function(){},1041:function(){},2845:function(){},5411:function(){},622:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=s(2265),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,s){var a,n={},c=null,d=null;for(a in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:d,props:n,_owner:i.current}}t.Fragment=n,t.jsx=q,t.jsxs=q},7437:function(e,t,s){"use strict";e.exports=s(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=4081)}),_N_E=e.O()}]);