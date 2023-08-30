import{l as Y,k as H,j as B,V as G,r as o,a as W,o as p,c as C,g as n,v as X,d as r,b as l,h as K,i as s,w as R,F as j,p as S,n as V,H as Q,s as Z,U as ee}from"./index-52d34a77.js";import{_ as le}from"./TitleBorder-ff85321c.js";import{_ as F,a as $}from"./OptionCustom-cd5bbf2e.js";import{_ as ae}from"./ToastMsg-3159a1a9.js";import{d as oe}from"./dayjs.min-8d4ef725.js";import"./_commonjsHelpers-042e6b4d.js";const te={class:"max-w-7xl mx-auto px-6 max-md:px-3"},ne={class:"w-full bg-gray-50 rounded-md shadow-lg px-12 py-6 max-md:px-4 max-md:py-2"},se={class:"mt-4 max-w-lg"},ie=l("label",{class:"mb-2 block"},"Designation",-1),re={class:"mt-4 max-w-lg"},ue=l("label",{class:"mb-2 block"},"Department",-1),de={class:"mt-4 max-w-lg"},ce=l("label",{class:"mb-2 block"},"Minimum monthly salary",-1),me={class:"mt-4 max-w-lg"},ve=l("label",{class:"mb-2 block"},"Maximum monthly salary",-1),pe={class:"mt-4 max-w-lg"},be=l("label",{class:"mb-2 block"},"Candidate nationality",-1),ge={class:"mt-4 max-w-lg"},he=l("label",{class:"mb-2 block"},"Candidate minimum education level",-1),ye={class:"mt-4 max-w-lg"},_e=l("label",{class:"mb-2 block"},"Candidate year(s) of experience",-1),fe={class:"mt-4 max-w-lg"},xe=l("label",{class:"mb-2 block"},"Candidate Language requirement",-1),we={class:"mt-4 max-w-lg"},ke=l("label",{class:"mb-2 block"},"Other requirement",-1),Ce={class:"mt-4 max-w-lg"},je=l("label",{class:"mb-2 block"},"Job responsibilities",-1),Ve={class:"mt-4 max-w-lg"},Ee=l("label",{class:"mb-2 block"},"Other information",-1),Me={class:"mt-4 max-w-lg"},Ue=l("label",{class:"mb-2 block"},"Job type",-1),Te={class:"flex flex-wrap gap-2 justify-center"},Re=["onClick"],Se={class:"mt-4 max-w-lg"},De=l("label",{class:"mb-2 block"},"Job field",-1),Ie={class:"mt-4 max-w-lg"},Ae=l("label",{class:"mb-2 block"},"Recruitment status",-1),He={class:"mt-6 flex gap-2 max-md:mb-4"},Fe=l("p",null,"Cancel",-1),$e=["disabled"],qe=l("br",null,null,-1),Ye={__name:"EditRecruitUI",setup(Be){document.title="Edit Recruitment - Hireflash",Y(async()=>{const m=H.currentRoute.value.params.jobId,a=await fetch(B+"/job/"+m,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),A=await a.json();if(a.status!==200){H.push("/404-Not-Found");return}t.value=A.data,b.value=t.value.designation,g.value=t.value.department,h.value=t.value.min_monthly_salary,y.value=t.value.max_monthly_salary,_.value=t.value.candidate_nationality,f.value=t.value.candidate_min_edu_level,u.value=t.value.candidate_min_of_exp,x.value=t.value.candidate_lang_req,w.value=t.value.candidate_other_req,k.value=t.value.job_responsibilities,T.value=t.value.other_info,v.value=t.value.job_type,d.value=t.value.job_field,c.value=t.value.recruitment_status,i.value=v.value.split(","),G(()=>{document.getElementById("main-section").scrollTo({top:0,behavior:"smooth"})})});const t=o({}),E=o(null),M=o(null),U=o(null);function L(){E.value.style.height="11rem",E.value.style.height=E.value.scrollHeight+"px"}function z(){M.value.style.height="11rem",M.value.style.height=M.value.scrollHeight+"px"}function N(){U.value.style.height="11rem",U.value.style.height=U.value.scrollHeight+"px"}const b=o(""),g=o(""),h=o(""),y=o(""),_=o(""),f=o(""),u=o(""),x=o(""),w=o(""),k=o(""),T=o(""),v=o(""),d=o(""),c=o(""),i=o([]),D=o(!1),I=o("");function J(m){I.value=m,D.value=!0,setTimeout(()=>{D.value=!1,I.value=""},3e3)}async function P(){const m=await fetch(B+"/job/"+t.value.company_id+"/"+t.value.id,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({designation:b.value,department:g.value,min_monthly_salary:h.value,max_monthly_salary:y.value,candidate_nationality:_.value,candidate_min_edu_level:f.value,candidate_min_of_exp:u.value,candidate_lang_req:x.value,candidate_other_req:w.value,job_responsibilities:k.value,other_info:T.value,last_modified_date:oe().format("YYYY-MM-DD"),recruitment_status:c.value,job_type:v.value,job_field:d.value})});await m.json(),m.status!==200?J("Failed to update the job recruitment. Please try again."):(ee.value="edit",H.push("/workspace/recruitment/"+t.value.id))}function q(){return b.value==""||g.value===""||h.value===""||y.value===""||_.value===""||f.value===""||u.value===""||x.value===""||w.value===""||k.value===""||v.value===""||d.value===""||c.value===""}return(m,a)=>{const A=W("router-link");return p(),C(j,null,[n(r(ae,{msg:I.value},null,8,["msg"]),[[X,D.value]]),l("div",te,[l("div",ne,[r(le,{title:"Edit New Recruitment"}),l("form",{onSubmit:a[16]||(a[16]=K(e=>P(),["prevent"]))},[l("div",se,[ie,n(l("input",{type:"text",class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"Accountant","onUpdate:modelValue":a[0]||(a[0]=e=>b.value=e)},null,512),[[s,b.value]])]),l("div",re,[ue,n(l("input",{type:"text",class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"Department of Financial","onUpdate:modelValue":a[1]||(a[1]=e=>g.value=e)},null,512),[[s,g.value]])]),l("div",de,[ce,n(l("input",{type:"number",class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"3000","onUpdate:modelValue":a[2]||(a[2]=e=>h.value=e)},null,512),[[s,h.value]])]),l("div",me,[ve,n(l("input",{type:"number",class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"4000","onUpdate:modelValue":a[3]||(a[3]=e=>y.value=e)},null,512),[[s,y.value]])]),l("div",pe,[be,n(l("input",{type:"text",class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"Malaysia","onUpdate:modelValue":a[4]||(a[4]=e=>_.value=e)},null,512),[[s,_.value]])]),l("div",ge,[he,n(l("input",{type:"text",class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"Bachelor's Degree in Accounting","onUpdate:modelValue":a[5]||(a[5]=e=>f.value=e)},null,512),[[s,f.value]])]),l("div",ye,[_e,r(F,{modelValue:u.value,"onUpdate:modelValue":a[6]||(a[6]=e=>u.value=e),heightselect:"40",widthselect:"full",placeholderval:"Choose year(s) of experience",isdisabled:!1},{default:R(()=>[(p(),C(j,null,S(["0","1","2","3","4","5","10"],e=>r($,{optionvalue:e,onClick:()=>{u.value=e},class:V({"rounded-md shadow-inner bg-indigo-100":u.value===e})},null,8,["optionvalue","onClick","class"])),64))]),_:1},8,["modelValue"])]),l("div",fe,[xe,n(l("input",{type:"text",class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"English","onUpdate:modelValue":a[7]||(a[7]=e=>x.value=e)},null,512),[[s,x.value]])]),l("div",we,[ke,n(l("textarea",{class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 h-44 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"Have an ACCA certificate",ref_key:"textareaElm1",ref:E,"onUpdate:modelValue":a[8]||(a[8]=e=>w.value=e),onInput:a[9]||(a[9]=e=>L())},null,544),[[s,w.value]])]),l("div",Ce,[je,n(l("textarea",{class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 resize-y h-44 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"Track the internal and external payment record",ref_key:"textareaElm2",ref:M,"onUpdate:modelValue":a[10]||(a[10]=e=>k.value=e),onInput:a[11]||(a[11]=e=>z())},null,544),[[s,k.value]])]),l("div",Ve,[Ee,n(l("textarea",{class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 resize-y h-44 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"Free insurance coverage",ref_key:"textareaElm3",ref:U,"onUpdate:modelValue":a[12]||(a[12]=e=>T.value=e),onInput:a[13]||(a[13]=e=>N())},null,544),[[s,T.value]])]),l("div",Me,[Ue,l("div",Te,[(p(),C(j,null,S(["Permanent","Contract","Internship","Full-Time","Part-Time"],e=>l("button",{type:"button",class:V(["rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none hover:border-indigo-400 focus:outline-none focus:scale-95 hover:-translate-y-1",{"border-0 bg-indigo-800 text-gray-50":i.value.includes(e)}]),onClick:()=>{i.value.includes(e)?(i.value=i.value.filter(O=>O!==e),v.value=i.value.join(",")):(i.value.push(e),v.value=i.value.join(","))}},Q(e),11,Re)),64))])]),l("div",Se,[De,r(F,{modelValue:d.value,"onUpdate:modelValue":a[14]||(a[14]=e=>d.value=e),heightselect:"40",widthselect:"full",placeholderval:"Choose job field",isdisabled:!1},{default:R(()=>[(p(!0),C(j,null,S(["Computer Technology/IT/Software","Finance/Accounting","Marketing/Advertising","Sales/Business Development","Human Resources","Operations/Logistics","Customer Service/Support","Healthcare/Medical","Engineering (e.g., Civil, Mechanical, Electrical)","Education/Teaching","Administration/Management","Consulting","Legal","Design/Creative (e.g., Graphic Design, UX/UI Design)","Research/Development","Science/Laboratory","Media/Communications","Hospitality/Travel/Tourism","Manufacturing/Production","Social Services/Non-profit"],e=>(p(),Z($,{optionvalue:e,onClick:()=>{d.value=e},class:V({"rounded-md shadow-inner bg-indigo-100":d.value===e})},null,8,["optionvalue","onClick","class"]))),256))]),_:1},8,["modelValue"])]),l("div",Ie,[Ae,r(F,{modelValue:c.value,"onUpdate:modelValue":a[15]||(a[15]=e=>c.value=e),heightselect:"40",widthselect:"full",placeholderval:"Choose recruitment status",isdisabled:!1},{default:R(()=>[(p(),C(j,null,S(["Saved Later","Waiting Approval","Approved"],e=>r($,{optionvalue:e,onClick:()=>{c.value=e},class:V({"rounded-md shadow-inner bg-indigo-100":c.value===e})},null,8,["optionvalue","onClick","class"])),64))]),_:1},8,["modelValue"])]),l("div",He,[r(A,{to:"/workspace/recruitment/"+t.value.id,class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1 grid place-items-center",type:"button"},{default:R(()=>[Fe]),_:1},8,["to"]),l("button",{class:V(["rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",{"disabled:cursor-not-allowed opacity-60":q()}]),type:"submit",disabled:q()}," Save ",10,$e)])],32)]),qe])],64)}}};export{Ye as default};
