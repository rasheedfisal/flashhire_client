import{l as p,r as o,o as n,c as d,g as b,v as y,d as u,b as s,F as m,p as _,n as c,f as h,H as g}from"./index-52d34a77.js";import{_ as x}from"./TitleBorder-ff85321c.js";import{_ as R}from"./ToastMsg-3159a1a9.js";const w={class:"max-w-7xl mx-auto px-6 max-md:px-3"},k={class:"w-full bg-gray-50 rounded-md shadow-lg px-12 py-6 max-md:px-4 max-md:py-2"},A=["onClick"],C={class:"max-md:text-[0.95rem]"},N={class:"mt-6 mb-8"},B=["disabled"],S=s("br",null,null,-1),V={__name:"NotificationUI",setup($){document.title="Notifications - Hireflash",p(async()=>{});const i=o([{id:"abcd126",content:"CyberSecurity Analyst position has been created with Waiting Approval status.",category:"recruit",isRead:!1},{id:"abcd125",content:"Recruitment status for CyberSecurity Analyst has been updated. (Approved)",category:"listed",isRead:!0},{id:"abcd124",content:"Recruitment status for CyberSecurity Analyst has been updated. (Advertised)",category:"listed",isRead:!0},{id:"abcd123",content:"James Bond has been invited to Umbrella Inc. as HR Officer.",category:"view",isRead:!0}]);async function f(e){i.value.forEach(a=>{a.id===e&&(a.isRead=!0)}),i.value.filter(a=>a.isRead===!1).length===0&&(r.value=!0)}const l=o(!0),r=o(i.value.filter(e=>e.isRead===!1).length===0);async function v(){i.value.forEach(e=>{e.isRead===!1&&(e.isRead=!0)}),l.value=!l.value,setTimeout(()=>{l.value=!l.value},3e3),r.value=i.value.filter(e=>e.isRead===!1).length===0}return(e,a)=>(n(),d(m,null,[b(u(R,{msg:"All notifications has been read"},null,512),[[y,!l.value]]),s("div",w,[s("div",k,[u(x,{title:"Notifications"}),(n(!0),d(m,null,_(i.value,t=>(n(),d("div",{class:c(["p-4 mt-2",{"rounded-md shadow-inner bg-indigo-100 cursor-pointer":t.isRead===!1}]),onClick:E=>f(t.id)},[s("p",C,[s("i",{class:c(["bi",{"bi-journal-bookmark":t.category==="recruit","bi-card-checklist":t.category==="listed","bi-people":t.category==="view"}])},null,2),h("   "+g(t.content),1)])],10,A))),256)),s("div",N,[s("button",{class:c(["rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",{"cursor-not-allowed":r.value}]),onClick:a[0]||(a[0]=t=>v()),disabled:r.value}," Mark All as Read ",10,B)])]),S])],64))}};export{V as default};
