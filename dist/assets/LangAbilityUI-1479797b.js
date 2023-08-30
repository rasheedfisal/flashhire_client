import{r as l,l as D,j as p,G as f,o,c as n,g as T,v as E,d as r,b as e,F as b,p as L,H as h,n as y,h as G,i as U,w as $}from"./index-52d34a77.js";import{_ as B}from"./TitleBorder-ff85321c.js";import{_ as O}from"./ToastMsg-3159a1a9.js";import{_ as F}from"./DialogModal-0af1feed.js";import{_ as V,a as A}from"./OptionCustom-cd5bbf2e.js";import{_ as H}from"./Loading-436a1654.js";const I={class:"bg-gray-50 w-full px-12 py-6 rounded-md shadow-lg max-md:px-6 max-md:py-3"},R={class:"mb-8"},z={key:0,class:"mt-4"},J={key:0,class:"border-2 border-indigo-200 rounded-md lg:w-fit overflow-x-auto"},P={class:"table-auto border-collapse"},Y=e("tr",{class:"border-b-2 border-b-indigo-200"},[e("th",{class:"px-4 py-2"},"Language"),e("th",{class:"px-4 py-2"},"Scale for Speaking"),e("th",{class:"px-4 py-2"},"Scale for Writing"),e("th",{class:"px-4 py-2"})],-1),q={class:"group/item"},K={class:"px-4 py-2"},Q={class:"px-4 py-2"},X={class:"px-4 py-2"},Z={class:"px-2 py-1"},ee=["onClick"],ae=e("i",{class:"bi bi-trash3"},null,-1),se=[ae],te={key:1,class:"mt-8 text-lg text-indigo-300 italic"},le={key:1,class:"mt-4 grid place-items-center"},oe={class:"mt-6"},ne={class:"mt-4"},ie=e("label",{class:"mb-2 block"},"Language",-1),de={class:"mt-4"},re=e("label",{class:"mb-2 block"},"Scale for Speaking",-1),ce={class:"mt-4"},ue=e("label",{class:"mb-2 block"},"Scale for Writing",-1),ge={class:"mt-6"},ve=["disabled"],me=e("br",{class:"mb-2"},null,-1),pe=e("p",null,"Confirm to remove from your language ability list?",-1),_e={class:"mt-6 flex gap-2"},Se={__name:"LangAbilityUI",setup(fe){document.title="Language Ability - Hireflash";const u=l(!1);D(async()=>{const t=await fetch(p+"/lang-ability/"+f.value.id,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),s=await t.json();t.status!==200?alert("error occured"):(v.value=s.data,u.value=!0)});const _=l(!0),w=l("Add New");function j(){_.value=!_.value,_.value?w.value="Add New":w.value="Cancel"}const g=l(""),i=l(""),d=l("");let c={language:"",scaleSpeak:"",scaleWrite:""};const v=l([]),x=l(!1),k=l("");function N(t){k.value=t,x.value=!0,setTimeout(()=>{x.value=!1,k.value=""},3e3)}async function M(){c.language=g.value,c.scaleSpeak=i.value,c.scaleWrite=d.value,console.log(c);const t=await fetch(p+"/lang-ability",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({language_name:c.language,scale_of_writing:c.scaleWrite,scale_of_speaking:c.scaleSpeak,candidate_profile_id:f.value.id})});if(await t.json(),t.status!==201)alert("error occured");else{u.value=!1;const s=await fetch(p+"/lang-ability/"+f.value.id,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),a=await s.json();s.status!==200?alert("error occured"):(v.value=a.data,u.value=!0,g.value="",d.value="",i.value="",N("New language ability has been added"),j())}}const C=l(!1),S=l("");function m(t){t&&(S.value=t),C.value=!C.value}async function W(){const t=await fetch(p+"/lang-ability/"+S.value,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"});if(await t.json(),t.status!==200)alert("error occured");else{u.value=!1;const s=await fetch(p+"/lang-ability/"+f.value.id,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),a=await s.json();s.status!==200?(alert("error occured"),m(),S.value=""):(v.value=a.data,u.value=!0,m(),langId.value="",N("Successfully removed from your language ability list."))}}return(t,s)=>(o(),n(b,null,[T(r(O,{msg:k.value},null,8,["msg"]),[[E,x.value]]),e("div",I,[e("div",R,[r(B,{title:"Language ability"}),u.value?(o(),n("div",z,[v.value.length>0?(o(),n("div",J,[e("table",P,[Y,(o(!0),n(b,null,L(v.value,a=>(o(),n("tr",q,[e("td",K,h(a.language_name),1),e("td",Q,h(a.scale_of_speaking)+"/5 ",1),e("td",X,h(a.scale_of_writing)+"/5 ",1),e("td",Z,[e("button",{class:"py-1 px-2 invisible group-hover/item:visible hover:rounded-md hover:shadow-inner hover:bg-indigo-100",onClick:be=>m(a.id),title:"Delete"},se,8,ee)])]))),256))])])):(o(),n("div",te," No language ability added... "))])):(o(),n("div",le,[r(H,{color:"indigo"})])),e("div",oe,[e("button",{class:"rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:s[0]||(s[0]=a=>j())},h(w.value),1)])]),e("form",{class:y(["mb-8",{hidden:_.value}]),onSubmit:s[4]||(s[4]=G(a=>M(),["prevent"]))},[e("div",ne,[ie,T(e("input",{type:"text",class:"block w-96 max-md:w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-500 placeholder:text-gray-300",placeholder:"English","onUpdate:modelValue":s[1]||(s[1]=a=>g.value=a)},null,512),[[U,g.value]])]),e("div",de,[re,r(V,{modelValue:i.value,"onUpdate:modelValue":s[2]||(s[2]=a=>i.value=a),heightselect:"40",widthselect:"96",placeholderval:"Select scale",isdisabled:!1},{default:$(()=>[(o(),n(b,null,L(["1","2","3","4","5"],a=>r(A,{optionvalue:a,onClick:()=>{i.value=a},class:y({"rounded-md shadow-inner bg-indigo-100":i.value===a})},null,8,["optionvalue","onClick","class"])),64))]),_:1},8,["modelValue"])]),e("div",ce,[ue,r(V,{modelValue:d.value,"onUpdate:modelValue":s[3]||(s[3]=a=>d.value=a),heightselect:"40",widthselect:"96",placeholderval:"Select scale",isdisabled:!1},{default:$(()=>[(o(),n(b,null,L(["1","2","3","4","5"],a=>r(A,{optionvalue:a,onClick:()=>{d.value=a},class:y({"rounded-md shadow-inner bg-indigo-100":d.value===a})},null,8,["optionvalue","onClick","class"])),64))]),_:1},8,["modelValue"])]),e("div",ge,[e("button",{class:y(["rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",{"disabled:cursor-not-allowed opacity-60":g.value===""||i.value===""||d.value===""}]),disabled:g.value===""||i.value===""||d.value===""}," Save ",10,ve)])],34),T(r(F,{onToggle:s[7]||(s[7]=a=>m()),modaltype:"small"},{default:$(()=>[me,pe,e("div",_e,[e("button",{class:"rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:s[5]||(s[5]=a=>W())}," Yes "),e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:s[6]||(s[6]=a=>m())}," Cancel ")])]),_:1},512),[[E,C.value]])])],64))}};export{Se as default};