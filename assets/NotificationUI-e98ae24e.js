import{l as b,r as l,o,c as n,g as y,v,d as c,b as t,F as u,p as g,n as d,f as p,H as _}from"./index-52d34a77.js";import{_ as h}from"./TitleBorder-ff85321c.js";import{_ as w}from"./ToastMsg-3159a1a9.js";const R={class:"bg-gray-50 w-full px-12 py-6 rounded-md shadow-lg max-md:px-6 max-md:py-3"},k={class:"mb-8"},x=["onClick"],C={class:"mt-6"},A=["disabled"],H={__name:"NotificationUI",setup(I){document.title="Notifications - Hireflash",b(async()=>{});const s=l([{id:"abcd126",content:"CyberSecurity Analyst from Umbrella Inc. has been closed.",category:"recruit",isRead:!1},{id:"abcd125",content:"You have been listed in Interview List! (CyberSecurity Analyst from Umbrella Inc.)",category:"listed",isRead:!1},{id:"abcd124",content:"You have been listed in Shortlist! (CyberSecurity Analyst from Umbrella Inc.)",category:"listed",isRead:!0},{id:"abcd123",content:"HR Officer from Umbrella Inc. has viewed your resume",category:"view",isRead:!0}]);function m(i){s.value.forEach(e=>{e.id===i&&(e.isRead=!0)}),s.value.filter(e=>e.isRead===!1).length===0&&(r.value=!0)}const f=l(!0),r=l(s.value.filter(i=>i.isRead===!1).length===0);function N(){}return(i,e)=>(o(),n(u,null,[y(c(w,{msg:"All notifications has been read"},null,512),[[v,!f.value]]),t("div",R,[t("div",k,[c(h,{title:"Notifications"}),(o(!0),n(u,null,g(s.value,a=>(o(),n("div",{class:d(["p-4 mt-2",{"rounded-md shadow-inner bg-indigo-100 cursor-pointer":a.isRead===!1}]),onClick:S=>m(a.id)},[t("p",null,[t("i",{class:d(["bi",{"bi-journal-bookmark":a.category==="recruit","bi-card-checklist":a.category==="listed","bi-people":a.category==="view"}])},null,2),p("   "+_(a.content),1)])],10,x))),256)),t("div",C,[t("button",{class:d(["rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",{"cursor-not-allowed opacity-60":r.value}]),onClick:e[0]||(e[0]=a=>void 0),disabled:r.value}," Mark All as Read ",10,A)])])])],64))}};export{H as default};
