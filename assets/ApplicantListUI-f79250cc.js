import{r as d,l as L,k as x,j as h,W as k,a as M,o as a,c as i,g as j,v as E,d as c,b as e,w as b,H as n,u as A,L as D,F as w,p as I,f as u,I as T}from"./index-52d34a77.js";import{_ as N}from"./TitleBorder-ff85321c.js";import{_ as R}from"./Loading-436a1654.js";import{_ as S}from"./ToastMsg-3159a1a9.js";import{d as V}from"./dayjs.min-8d4ef725.js";import"./_commonjsHelpers-042e6b4d.js";const $={class:"max-w-7xl mx-auto px-6 max-md:px-3"},Y={class:"w-full bg-gray-50 rounded-md shadow-lg px-12 py-6 max-md:px-4 max-md:py-2"},B={class:"mt-2 flex items-center gap-2"},G=e("i",{class:"bi bi-arrow-left text-xl"},null,-1),H=e("h2",null,"Recruitment Detail",-1),P={class:"mt-4"},U={class:"text-2xl font-bold text-center"},W={class:"text-center"},q={class:"mt-4 flex justify-between max-md:block"},z=e("option",{value:""},"Apply filter",-1),J=e("option",{value:"Filter 1"},"Filter 1",-1),K=e("option",{value:"Filter 2"},"Filter 2",-1),O=[z,J,K],Q={class:"mt-4"},X={class:"relative group"},Z=e("button",{class:"absolute top-0 right-0"},[e("i",{class:"bi bi-three-dots-vertical text-lg relative"})],-1),ee={class:"absolute top-1 right-6 hidden group-focus-within:grid place-items-center bg-gray-50 min-w-fit py-4 px-2 rounded-md shadow-lg outline outline-2 outline-indigo-200"},te={class:"flex flex-col"},oe=["onClick"],se={class:"flex items-center gap-4 max-md:gap-1 max-md:items-start max-md:flex-col"},ae=["src"],ie={class:"flex flex-col gap-1"},ne={key:0},le=e("i",{class:"bi bi-book"},null,-1),re={key:1},de=e("i",{class:"bi bi-briefcase"},null,-1),ce=e("i",{class:"bi bi-cash"},null,-1),ue={key:1,class:"mt-4 py-4"},pe=e("h4",{class:"text-lg text-indigo-300 italic"},"No applicant here...",-1),_e=[pe],me={key:1,class:"mt-4 h-full w-full grid place-items-center"},he=e("br",null,null,-1),ke={__name:"ApplicantListUI",setup(fe){document.title="Applicant List - Hireflash";const y=d(!1);L(async()=>{const l=x.currentRoute.value.params.jobId,o=await fetch(h+"/job/"+l,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),s=await o.json();if(o.status!==200)o.status===404&&x.replace("/404-Not-Found");else{r.value=s.data;const t=await fetch(h+"/applicant/"+l,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),m=await t.json();t.status!==200||(p.value=m.data,y.value=!0)}});const p=d([]),r=d({}),_=d("");function C(){_.value!==""&&alert(`${_.value} applied`)}async function F(l){const o=x.currentRoute.value.params.jobId,s=await fetch(h+"/applicant/applied-job/"+l+"/"+o,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"});if(await s.json(),s.status!==200)g("Failed to remove the applicant. Please try again.");else{const t=await fetch(h+"/applicant/"+o,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),m=await t.json();t.status!==200||(p.value=m.data,g("Successfully removed the candidate from applicant list."))}}const f=d(!1),v=d("");function g(l){v.value=l,f.value=!0,setTimeout(()=>{f.value=!1,v.value=""},3e3)}return k.value==="applicant"&&(g("Successfully removed the candidate from applicant list."),k.value=""),(l,o)=>{const s=M("router-link");return a(),i(w,null,[j(c(S,{msg:v.value},null,8,["msg"]),[[E,f.value]]),e("div",$,[e("div",Y,[e("div",B,[c(s,{to:"/workspace/recruitment/"+r.value.id,class:"py-1 px-2 hover:rounded-md hover:shadow-inner hover:bg-indigo-100"},{default:b(()=>[G]),_:1},8,["to"]),H]),e("div",P,[e("h1",U,n(r.value.designation),1),e("p",W,[e("small",null,"Last updated : "+n(A(V)(r.value.last_modified_date).format("D MMMM YYYY")),1)])]),e("div",q,[e("div",null,[c(N,{title:"Applicant List"})]),j(e("select",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 h-7 transition ease-in-out focus:scale-95 hover:-translate-y-1 text-sm cursor-pointer","onUpdate:modelValue":o[0]||(o[0]=t=>_.value=t),onChange:o[1]||(o[1]=t=>C())},O,544),[[D,_.value]])]),y.value?(a(),i(w,{key:0},[p.value.length>0?(a(!0),i(w,{key:0},I(p.value,t=>(a(),i("div",Q,[e("div",X,[Z,e("div",ee,[e("div",te,[c(s,{to:"/workspace/recruitment/"+r.value.id+"/applicant-list/candidate/"+t.candidate_profile.id,class:"py-2 px-4 text-left hover:rounded-md hover:shadow-inner hover:bg-indigo-100"},{default:b(()=>[u(" View Detail ")]),_:2},1032,["to"]),e("button",{class:"py-2 px-4 text-left hover:rounded-md hover:shadow-inner hover:bg-indigo-100",onClick:m=>F(t.candidate_profile.id)}," Remove from Applicant List ",8,oe)])])]),e("div",se,[e("img",{src:t.candidate_profile.user.pic,class:"border-2 border-indigo-200 rounded-md w-28 h-28 bg-gray-200 max-md:w-16 max-md:h-16"},null,8,ae),e("div",ie,[c(s,{to:"/workspace/recruitment/"+r.value.id+"/applicant-list/candidate/"+t.candidate_profile.id,class:"text-xl font-semibold hover:underline cursor-pointer"},{default:b(()=>[u(n(t.candidate_profile.user.name),1)]),_:2},1032,["to"]),t.candidate_profile.education.length>0?(a(),i("p",ne,[le,u("    "+n(t.candidate_profile.education[t.candidate_profile.education.length-1].study_field),1)])):T("",!0),t.candidate_profile.work_experience.length>0?(a(),i("p",re,[de,u("    "+n(t.candidate_profile.work_experience[t.candidate_profile.work_experience.length-1].duration)+" experience at "+n(t.candidate_profile.work_experience[t.candidate_profile.work_experience.length-1].company_name)+" as "+n(t.candidate_profile.work_experience[t.candidate_profile.work_experience.length-1].position),1)])):T("",!0),e("p",null,[ce,u("    Preferred Salary : RM"+n(t.candidate_profile.preferred_salary),1)])])])]))),256)):(a(),i("div",ue,_e))],64)):(a(),i("div",me,[c(R,{color:"indigo"})]))]),he])],64)}}};export{ke as default};
