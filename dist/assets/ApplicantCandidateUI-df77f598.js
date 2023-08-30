import{r as c,l as H,k as r,j as f,a as V,o as i,c as l,g,v as k,d as m,b as e,w,H as a,u as j,F as h,p as M,f as p,s as B,I as z,h as J,i as U,n as q,W as G}from"./index-52d34a77.js";import{_ as N}from"./DialogModal-0af1feed.js";import{_ as W}from"./TitleBorder-ff85321c.js";import{_ as K}from"./ToastMsg-3159a1a9.js";import{_ as Q}from"./PdfRenderer-8f8a4fe4.js";import{_ as X}from"./Loading-436a1654.js";import{d as I}from"./dayjs.min-8d4ef725.js";import"./_commonjsHelpers-042e6b4d.js";const Z={class:"max-w-7xl mx-auto px-6 max-md:px-3"},ee={key:0,class:"w-full bg-gray-50 rounded-md shadow-lg px-12 py-6 max-md:px-4 max-md:py-2"},te={class:"mt-2 flex items-center gap-2"},se=e("i",{class:"bi bi-arrow-left text-xl"},null,-1),ae=e("h2",null,"Applicant List",-1),oe={class:"mt-4"},ie={class:"text-2xl font-bold text-center"},le={class:"text-center"},ne={class:"mt-4"},de={class:"mt-4 flex gap-4 max-md:flex-col"},re=["src"],ce={class:"max-md:text-[0.9rem]"},ue={class:"mb-4"},pe=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-person-badge"}),p("   User Profile ")],-1),me={class:"list-disc list-inside px-2"},_e={class:"mb-4"},ve=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-book"}),p("   Education ")],-1),fe={class:"list-disc list-inside px-2"},ge={key:1},he={class:"mb-4"},be=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-briefcase"}),p("   Work experience ")],-1),ye={class:"list-disc list-inside px-2"},xe={key:1},ke={class:"mb-4"},we=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-translate"}),p("   Language ability ")],-1),je={class:"list-disc list-inside px-2"},Me={key:1},Ie={class:"mb-4"},Ce=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-hourglass-split"}),p("   Skill ")],-1),Te={class:"list-disc list-inside px-2"},Re={key:1},Ye={class:"mb-4"},$e=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-file-earmark-text"}),p("   Resume ")],-1),Ne={class:"list-disc list-inside px-2"},Se={key:0},Ae=e("i",{class:"bi bi-box-arrow-up-right"},null,-1),Ee={key:1},De={class:"mb-4"},Pe=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-blockquote-left"}),p("   Notes ")],-1),Fe={key:0,class:"text-indigo-300 italic px-6"},Oe={key:1,class:"px-6"},Le={class:"mt-6 flex gap-2 max-md:flex-col max-md:text-[1rem]"},He=e("br",null,null,-1),Ve=e("label",{class:"mb-2 block"},"Notes",-1),Be={class:"mt-4"},ze={class:"mt-6 flex gap-2"},Je=["disabled"],Ue=e("br",null,null,-1),qe=e("br",null,null,-1),Ge=e("br",{class:"mb-2"},null,-1),We=e("p",null,"Remove this candidate from applicant list?",-1),Ke={class:"mt-6 flex gap-2"},Qe={key:1,class:"mt-4 h-full w-full grid place-items-center"},Xe=e("br",null,null,-1),dt={__name:"ApplicantCandidateUI",setup(Ze){document.title="Applicant Candidate Detail - Hireflash";const S=c(!1);H(async()=>{const d=r.currentRoute.value.params.jobId,t=r.currentRoute.value.params.candidateId,n=await fetch(f+"/job/"+d,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),s=await n.json();if(n.status!==200)n.status===404&&r.replace("/404-Not-Found");else{b.value=s.data;const E=await fetch(f+"/applicant/"+d+"/"+t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),L=await E.json();E.status!==200||(o.value=L.data,u.value=o.value.notes,S.value=!0)}});const o=c({}),b=c({}),C=c(!1),T=c("");function _(d){T.value=d,C.value=!0,setTimeout(()=>{C.value=!1,T.value=""},3e3)}async function D(){const d=r.currentRoute.value.params.jobId,t=r.currentRoute.value.params.candidateId,n=await fetch(f+"/shortlisted-candidate",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({notes:"",is_qualified_interview:!1,candidate_profile_id:t,job_id:d})});await n.json(),n.status!==201?_("Failed to add the candidate to shortlist. Please try again."):_("Successfully added this candidate to shortlist")}const R=c(!1);function y(){R.value=!R.value}const u=c("");async function P(){const d=r.currentRoute.value.params.jobId,t=r.currentRoute.value.params.candidateId,n=await fetch(f+"/applicant/"+d+"/"+t+"/notes",{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({notes:u.value})});await n.json(),n.status!==200?_("Failed to add notes to this candidate. Please try again."):(y(),_("Notes successfully added"))}const x=c(!1);async function A(){if(x&&!o.value.is_viewed){const d=r.currentRoute.value.params.jobId,t=r.currentRoute.value.params.candidateId,n=await fetch(f+"/applicant/"+d+"/"+t+"/view-application",{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({is_viewed:!0})});await n.json(),n.status!==200&&_("Failed to update view application for this candidate. Please reopen the resume.")}x.value=!x.value}const Y=c(!1);function $(){Y.value=!Y.value}async function F(){const d=r.currentRoute.value.params.jobId,t=r.currentRoute.value.params.candidateId,n=await fetch(f+"/applicant/applied-job/"+t+"/"+d,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"});await n.json(),n.status!==200?_("Failed to remove this candidate from applicant list. Please try again."):(G.value="applicant",r.replace("/workspace/recruitment/"+d+"/applicant-list"))}const v=c(null);function O(){v.value.style.height="5rem",parseInt(v.value.scrollHeight)<500?v.value.style.height=v.value.scrollHeight+"px":v.value.style.height="500px"}return(d,t)=>{const n=V("router-link");return i(),l(h,null,[g(m(K,{msg:T.value},null,8,["msg"]),[[k,C.value]]),e("div",Z,[S.value?(i(),l("div",ee,[e("div",te,[m(n,{to:"/workspace/recruitment/"+b.value.id+"/applicant-list",class:"py-1 px-2 hover:rounded-md hover:shadow-inner hover:bg-indigo-100"},{default:w(()=>[se]),_:1},8,["to"]),ae]),e("div",oe,[e("h1",ie,a(b.value.designation),1),e("p",le,[e("small",null,"Last updated : "+a(j(I)(b.value.last_modified_date).format("D MMMM YYYY")),1)])]),e("div",ne,[m(W,{title:"Applicant Detail"})]),e("div",de,[e("img",{src:o.value.candidate_profile.user.pic,alt:"",class:"border-2 border-indigo-200 rounded-md w-28 h-28 bg-gray-200 max-md:self-center"},null,8,re),e("div",ce,[e("div",ue,[pe,e("ul",me,[e("li",null,a(o.value.candidate_profile.user.name),1),e("li",null,a(o.value.candidate_profile.user.email),1),e("li",null,a(o.value.candidate_profile.gender),1),e("li",null,a(o.value.candidate_profile.location),1),e("li",null,a("Preferred Salary : RM"+o.value.candidate_profile.preferred_salary),1)])]),e("div",_e,[ve,e("ul",fe,[o.value.candidate_profile.education.length>0?(i(!0),l(h,{key:0},M(o.value.candidate_profile.education,s=>(i(),l("li",null,a(s.study_field)+" at "+a(s.institute_name)+" ("+a(j(I)(s.graduation_date,"D MMMM YYYY").year())+") ",1))),256)):(i(),l("li",ge,"-"))])]),e("div",he,[be,e("ul",ye,[o.value.candidate_profile.work_experience.length>0?(i(!0),l(h,{key:0},M(o.value.candidate_profile.work_experience,s=>(i(),l("li",null,a(s.duration)+" experience at "+a(s.company_name)+" as "+a(s.position)+" ("+a(j(I)(s.start_date,"D MMMM YYYY").year())+" - "+a(j(I)(s.end_date,"D MMMM YYYY").year())+") ",1))),256)):(i(),l("li",xe,"-"))])]),e("div",ke,[we,e("ul",je,[o.value.candidate_profile.lang_ability.length>0?(i(!0),l(h,{key:0},M(o.value.candidate_profile.lang_ability,s=>(i(),l("li",null,a(s.language_name)+": "+a(s.scale_of_speaking)+" out of 5 for speaking and "+a(s.scale_of_writing)+" out of 5 for writing ",1))),256)):(i(),l("li",Me,"-"))])]),e("div",Ie,[Ce,e("ul",Te,[o.value.candidate_profile.skill.length>0?(i(!0),l(h,{key:0},M(o.value.candidate_profile.skill,s=>(i(),l("li",null,a(s.skill_name)+" ("+a(s.proficiency)+") ",1))),256)):(i(),l("li",Re,"-"))])]),e("div",Ye,[$e,e("ul",Ne,[o.value.candidate_profile.resume.length>0?(i(),l("li",Se,[e("span",{class:"text-indigo-500 cursor-pointer select-none",onClick:t[0]||(t[0]=s=>A())},[p(" Open resume  "),Ae])])):(i(),l("li",Ee,"-"))])]),e("div",De,[Pe,u.value===""?(i(),l("p",Fe," No notes added... ")):(i(),l("p",Oe,a(u.value),1))]),e("div",Le,[e("button",{class:"rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:t[1]||(t[1]=s=>D())}," Add to Shortlist "),e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:t[2]||(t[2]=s=>y())}," Add notes "),e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:t[3]||(t[3]=s=>$())}," Remove from Applicant List ")]),He])]),g(m(N,{onToggle:t[8]||(t[8]=s=>y()),modaltype:"small"},{default:w(()=>[e("form",{class:"block w-[40vw] max-xl:w-[60vw] max-md:w-[80vw]",onSubmit:t[7]||(t[7]=J(s=>P(),["prevent"]))},[Ve,g(e("textarea",{class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 resize-y h-20 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"Add some remarks for this candidate...","onUpdate:modelValue":t[4]||(t[4]=s=>u.value=s),ref_key:"textareaElm",ref:v,onInput:t[5]||(t[5]=s=>O())},null,544),[[U,u.value]]),e("div",Be,[e("div",ze,[e("button",{class:q(["rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",{"disabled:cursor-not-allowed opacity-60":u.value===""}]),type:"submit",disabled:u.value===""}," Save ",10,Je),e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",type:"button",onClick:t[6]||(t[6]=s=>y())}," Cancel ")])])],32)]),_:1},512),[[k,R.value]]),o.value.candidate_profile.resume.length>0?g((i(),B(N,{key:0,onToggle:t[9]||(t[9]=s=>A()),modaltype:"big"},{default:w(()=>[Ue,qe,m(Q,{link:o.value.candidate_profile.resume[0].path},null,8,["link"])]),_:1},512)),[[k,x.value]]):z("",!0),g(m(N,{onToggle:t[12]||(t[12]=s=>$()),modaltype:"small"},{default:w(()=>[Ge,We,e("div",Ke,[e("button",{class:"rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:t[10]||(t[10]=s=>F())}," Yes "),e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:t[11]||(t[11]=s=>$())}," Cancel ")])]),_:1},512),[[k,Y.value]])])):(i(),l("div",Qe,[m(X,{color:"indigo"})])),Xe])],64)}}};export{dt as default};