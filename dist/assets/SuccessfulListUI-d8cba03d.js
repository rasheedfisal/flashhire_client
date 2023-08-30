import{r,l as M,k as x,j as m,W as k,a as L,o as a,c as i,g as j,v as F,d as c,b as e,w as b,H as n,u as E,L as I,F as w,p as N,f as u,I as T}from"./index-52d34a77.js";import{_ as R}from"./TitleBorder-ff85321c.js";import{_ as V}from"./Loading-436a1654.js";import{_ as $}from"./ToastMsg-3159a1a9.js";import{d as D}from"./dayjs.min-8d4ef725.js";import"./_commonjsHelpers-042e6b4d.js";const G={class:"max-w-7xl mx-auto px-6 max-md:px-3"},Y={class:"w-full bg-gray-50 rounded-md shadow-lg px-12 py-6 max-md:px-4 max-md:py-2"},B={class:"mt-2 flex items-center gap-2"},H=e("i",{class:"bi bi-arrow-left text-xl"},null,-1),U=e("h2",null,"Recruitment Detail",-1),A={class:"mt-4"},P={class:"text-2xl font-bold text-center"},W={class:"text-center"},q={class:"mt-4 flex justify-between max-md:block"},z=e("option",{value:""},"Apply filter",-1),J=e("option",{value:"Filter 1"},"Filter 1",-1),K=e("option",{value:"Filter 2"},"Filter 2",-1),O=[z,J,K],Q={class:"mt-4"},X={class:"relative group"},Z=e("button",{class:"absolute top-0 right-0"},[e("i",{class:"bi bi-three-dots-vertical text-lg relative"})],-1),ee={class:"absolute top-1 right-6 hidden group-focus-within:grid place-items-center bg-gray-50 min-w-fit py-4 px-2 rounded-md shadow-lg outline outline-2 outline-indigo-200"},te={class:"flex flex-col"},oe=["onClick"],se={class:"flex gap-4 py-4 max-md:block"},ae=e("img",{src:"",alt:"",class:"border-2 border-indigo-200 rounded-md w-28 h-28 bg-gray-200 max-md:w-16 max-md:h-16"},null,-1),ie={class:"flex flex-col gap-1"},ne={key:0},le=e("i",{class:"bi bi-book"},null,-1),de={key:1},re=e("i",{class:"bi bi-briefcase"},null,-1),ce=e("i",{class:"bi bi-cash"},null,-1),ue={key:1,class:"mt-4 py-4"},_e=e("h4",{class:"text-lg text-indigo-300 italic"}," No candidate successfully hired... ",-1),pe=[_e],fe={key:1,class:"mt-4 h-full w-full grid place-items-center"},me=e("br",null,null,-1),ke={__name:"SuccessfulListUI",setup(he){document.title="Successful List - Hireflash";const h=r(!1);M(async()=>{const l=x.currentRoute.value.params.jobId,o=await fetch(m+"/job/"+l,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),s=await o.json();if(o.status!==200)o.status===404&&x.replace("/404-Not-Found");else{d.value=s.data;const t=await fetch(m+"/successful-candidate/"+l,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),f=await t.json();t.status!==200||(_.value=f.data,h.value=!0)}});const _=r([]),d=r({});async function C(l){h.value=!1;const o=x.currentRoute.value.params.jobId,s=await fetch(m+"/successful-candidate/"+o+"/"+l,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"});if(await s.json(),s.status===200){const t=await fetch(m+"/successful-candidate/"+o,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),f=await t.json();t.status!==200||(_.value=f.data,y("Successfully removed the candidate from successful list."))}}const p=r("");function S(){p.value!==""&&alert(`${p.value} applied`)}const v=r(!1),g=r("");function y(l){g.value=l,v.value=!0,setTimeout(()=>{v.value=!1,g.value=""},3e3)}return k.value==="successful"&&(y("Successfully removed the candidate from successful list."),k.value=""),(l,o)=>{const s=L("router-link");return a(),i(w,null,[j(c($,{msg:g.value},null,8,["msg"]),[[F,v.value]]),e("div",G,[e("div",Y,[e("div",B,[c(s,{to:"/workspace/recruitment/"+d.value.id,class:"py-1 px-2 hover:rounded-md hover:shadow-inner hover:bg-indigo-100"},{default:b(()=>[H]),_:1},8,["to"]),U]),e("div",A,[e("h1",P,n(d.value.designation),1),e("p",W,[e("small",null,"Last updated : "+n(E(D)(d.value.last_modified_date).format("D MMMM YYYY")),1)])]),e("div",q,[e("div",null,[c(R,{title:"Successful List"})]),j(e("select",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 h-7 transition ease-in-out focus:scale-95 hover:-translate-y-1 text-sm cursor-pointer","onUpdate:modelValue":o[0]||(o[0]=t=>p.value=t),onChange:o[1]||(o[1]=t=>S())},O,544),[[I,p.value]])]),h.value?(a(),i(w,{key:0},[_.value.length>0?(a(!0),i(w,{key:0},N(_.value,t=>(a(),i("div",Q,[e("div",X,[Z,e("div",ee,[e("div",te,[c(s,{to:"/workspace/recruitment/"+d.value.id+"/successful-list/candidate/"+t.candidate_profile.id,class:"py-2 px-4 text-left hover:rounded-md hover:shadow-inner hover:bg-indigo-100"},{default:b(()=>[u(" View Detail ")]),_:2},1032,["to"]),e("button",{class:"py-2 px-4 text-left hover:rounded-md hover:shadow-inner hover:bg-indigo-100",onClick:f=>C(t.candidate_profile.id)}," Remove from Successful List ",8,oe)])])]),e("div",se,[ae,e("div",ie,[c(s,{to:"/workspace/recruitment/"+d.value.id+"/successful-list/candidate/"+t.candidate_profile.id,class:"text-xl font-semibold hover:underline cursor-pointer"},{default:b(()=>[u(n(t.candidate_profile.user.name),1)]),_:2},1032,["to"]),t.candidate_profile.education.length>0?(a(),i("p",ne,[le,u("    "+n(t.candidate_profile.education[t.candidate_profile.education.length-1].study_field),1)])):T("",!0),t.candidate_profile.work_experience.length>0?(a(),i("p",de,[re,u("    "+n(t.candidate_profile.work_experience[t.candidate_profile.work_experience.length-1].duration)+" experience at "+n(t.candidate_profile.work_experience[t.candidate_profile.work_experience.length-1].company_name)+" as "+n(t.candidate_profile.work_experience[t.candidate_profile.work_experience.length-1].role),1)])):T("",!0),e("p",null,[ce,u("    Preferred Salary : RM"+n(t.candidate_profile.preferred_salary),1)])])])]))),256)):(a(),i("div",ue,pe))],64)):(a(),i("div",fe,[c(V,{color:"indigo"})]))]),me])],64)}}};export{ke as default};