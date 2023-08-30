import{r,l as A,k as u,j as g,a as V,o as i,c as l,g as h,v as x,d as m,b as e,w,H as a,u as k,F as b,p as M,f as _,s as B,I as z,h as J,i as U,n as q}from"./index-52d34a77.js";import{_ as N}from"./DialogModal-0af1feed.js";import{_ as G}from"./TitleBorder-ff85321c.js";import{_ as W}from"./ToastMsg-3159a1a9.js";import{_ as K}from"./PdfRenderer-8f8a4fe4.js";import{_ as Q}from"./Loading-436a1654.js";import{d as C}from"./dayjs.min-8d4ef725.js";import"./_commonjsHelpers-042e6b4d.js";const X={class:"max-w-7xl mx-auto px-6 max-md:px-3"},Z={key:0,class:"w-full bg-gray-50 rounded-md shadow-lg px-12 py-6 max-md:px-4 max-md:py-2"},ee={class:"mt-2 flex items-center gap-2"},te=e("i",{class:"bi bi-arrow-left text-xl"},null,-1),se=e("h2",null,"Interview List",-1),ae={class:"mt-4"},oe={class:"text-2xl font-bold text-center"},ie={class:"text-center"},le={class:"mt-4"},ne={class:"mt-4 flex gap-4 max-md:flex-col"},de=["src"],re={class:"max-md:text-[0.9rem]"},ce={class:"mb-4"},ue=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-person-badge"}),_("   User Profile ")],-1),_e={class:"list-disc list-inside px-2"},me={class:"mb-4"},pe=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-book"}),_("   Education ")],-1),ve={class:"list-disc list-inside px-2"},fe={key:1},ge={class:"mb-4"},he=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-briefcase"}),_("   Work experience ")],-1),be={class:"list-disc list-inside px-2"},ye={key:1},xe={class:"mb-4"},we=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-translate"}),_("   Language ability ")],-1),ke={class:"list-disc list-inside px-2"},Me={key:1},Ce={class:"mb-4"},Ie=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-hourglass-split"}),_("   Skill ")],-1),je={class:"list-disc list-inside px-2"},Te={key:1},Ye={class:"mb-4"},$e=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-file-earmark-text"}),_("   Resume ")],-1),Re={class:"list-disc list-inside px-2"},Ne={key:0},Se=e("i",{class:"bi bi-box-arrow-up-right"},null,-1),De={key:1},Le={class:"mb-4"},Oe=e("h4",{class:"text-lg"},[e("i",{class:"bi bi-blockquote-left"}),_("   Notes ")],-1),Ee={key:0,class:"text-gray-400 px-6"},Pe={key:1,class:"px-6"},Fe={class:"mt-6 flex gap-2 max-md:flex-col max-md:text-[1rem]"},He=e("br",null,null,-1),Ae=e("label",{class:"mb-2 block"},"Notes",-1),Ve={class:"mt-4"},Be={class:"mt-6 flex gap-2"},ze=["disabled"],Je=e("br",null,null,-1),Ue=e("br",null,null,-1),qe=e("br",{class:"mb-2"},null,-1),Ge=e("p",null,"Remove this candidate from interview list?",-1),We={class:"mt-6 flex gap-2"},Ke={key:1,class:"mt-4 h-full w-full grid place-items-center"},Qe=e("br",null,null,-1),nt={__name:"InterviewCandidateUI",setup(Xe){document.title="Interview Candidate Detail - Hireflash";const S=r(!1);A(async()=>{const n=u.currentRoute.value.params.jobId,t=u.currentRoute.value.params.candidateId,d=await fetch(g+"/job/"+n,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),s=await d.json();if(d.status!==200)d.status===404&&u.replace("/404-Not-Found");else{v.value=s.data;const L=await fetch(g+"/shortlisted-candidate/"+n+"/interview/"+t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),H=await L.json();L.status!==200||(o.value=H.data,c.value=o.value.notes,S.value=!0)}});const o=r({}),v=r({}),I=r(!1),j=r("");function f(n){j.value=n,I.value=!0,setTimeout(()=>{I.value=!1,j.value=""},3e3)}async function O(){const n=await fetch(g+"/successful-candidate",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({notes:"",monthly_salary:0,confirmation_status:"",candidate_profile_id:o.value.candidate_profile.id,job_id:v.value.id})});await n.json(),n.status!==201?f("Failed to add this candidate to successful list."):f("Successfully added this candidate to successful list")}const T=r(!1);function y(){T.value=!T.value}const c=r("");async function E(){const n=u.currentRoute.value.params.jobId,t=u.currentRoute.value.params.candidateId,d=await fetch(g+"/shortlisted-candidate/"+n+"/"+t+"/notes",{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({notes:c.value})});await d.json(),d.status!==200?f("Failed to add notes to this candidate. Please try again."):(y(),f("Notes successfully added"))}const Y=r(!1);function D(){Y.value=!Y.value}const $=r(!1);function R(){$.value=!$.value}async function P(){const n=u.currentRoute.value.params.jobId,t=u.currentRoute.value.params.candidateId,d=await fetch(g+"/shortlisted-candidate/"+n+"/interview-status/"+t,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({is_qualified_interview:!1})});await d.json(),d.status!==200?f("Failed to remove this candidate from shortlist. Please try again."):(successRemove.value="interview",u.replace("/recruitment/"+n+"/interview-list"))}const p=r(null);function F(){p.value.style.height="5rem",parseInt(p.value.scrollHeight)<500?p.value.style.height=p.value.scrollHeight+"px":p.value.style.height="500px"}return(n,t)=>{const d=V("router-link");return i(),l(b,null,[h(m(W,{msg:j.value},null,8,["msg"]),[[x,I.value]]),e("div",X,[S.value?(i(),l("div",Z,[e("div",ee,[m(d,{to:"/workspace/recruitment/"+v.value.id+"/interview-list",class:"py-1 px-2 hover:rounded-md hover:shadow-inner hover:bg-indigo-100"},{default:w(()=>[te]),_:1},8,["to"]),se]),e("div",ae,[e("h1",oe,a(v.value.designation),1),e("p",ie,[e("small",null,"Last updated : "+a(k(C)(v.value.last_modified_date).format("D MMMM YYYY")),1)])]),e("div",le,[m(G,{title:"Interview Candidate Detail"})]),e("div",ne,[e("img",{src:o.value.candidate_profile.user.pic,alt:"",class:"border-2 border-indigo-200 rounded-md w-28 h-28 bg-gray-200 max-md:self-center"},null,8,de),e("div",re,[e("div",ce,[ue,e("ul",_e,[e("li",null,a(o.value.candidate_profile.user.name),1),e("li",null,a(o.value.candidate_profile.user.email),1),e("li",null,a(o.value.candidate_profile.gender),1),e("li",null,a(o.value.candidate_profile.location),1),e("li",null,a("Preferred Salary : RM"+o.value.candidate_profile.preferred_salary),1)])]),e("div",me,[pe,e("ul",ve,[o.value.candidate_profile.education.length>0?(i(!0),l(b,{key:0},M(o.value.candidate_profile.education,s=>(i(),l("li",null,a(s.study_field)+" at "+a(s.institute_name)+" ("+a(k(C)(s.graduation_date,"D MMMM YYYY").year())+") ",1))),256)):(i(),l("li",fe,"-"))])]),e("div",ge,[he,e("ul",be,[o.value.candidate_profile.work_experience.length>0?(i(!0),l(b,{key:0},M(o.value.candidate_profile.work_experience,s=>(i(),l("li",null,a(s.duration)+" experience at "+a(s.company_name)+" as "+a(s.position)+" ("+a(k(C)(s.start_date,"D MMMM YYYY").year())+" - "+a(k(C)(s.end_date,"D MMMM YYYY").year())+") ",1))),256)):(i(),l("li",ye,"-"))])]),e("div",xe,[we,e("ul",ke,[o.value.candidate_profile.lang_ability.length>0?(i(!0),l(b,{key:0},M(o.value.candidate_profile.lang_ability,s=>(i(),l("li",null,a(s.language_name)+": "+a(s.scale_of_speaking)+" out of 5 for speaking and "+a(s.scale_of_writing)+" out of 5 for writing ",1))),256)):(i(),l("li",Me,"-"))])]),e("div",Ce,[Ie,e("ul",je,[o.value.candidate_profile.skill.length>0?(i(!0),l(b,{key:0},M(o.value.candidate_profile.skill,s=>(i(),l("li",null,a(s.skill_name)+" ("+a(s.proficiency)+") ",1))),256)):(i(),l("li",Te,"-"))])]),e("div",Ye,[$e,e("ul",Re,[o.value.candidate_profile.resume.length>0?(i(),l("li",Ne,[e("span",{class:"text-indigo-500 cursor-pointer select-none",onClick:t[0]||(t[0]=s=>D())},[_(" Open resume  "),Se])])):(i(),l("li",De,"-"))])]),e("div",Le,[Oe,c.value===""?(i(),l("p",Ee,"No notes added")):(i(),l("p",Pe,a(c.value),1))]),e("div",Fe,[e("button",{class:"rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:t[1]||(t[1]=s=>O())}," Add to Successful List "),e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:t[2]||(t[2]=s=>y())}," Add notes "),e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:t[3]||(t[3]=s=>R())}," Remove from Interview List ")]),He])]),h(m(N,{onToggle:t[8]||(t[8]=s=>y()),modaltype:"small"},{default:w(()=>[e("form",{class:"block w-[40vw] max-md:w-[80vw]",onSubmit:t[7]||(t[7]=J(s=>E(),["prevent"]))},[Ae,h(e("textarea",{class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 resize-y h-20 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"Add some remarks for this candidate...","onUpdate:modelValue":t[4]||(t[4]=s=>c.value=s),ref_key:"textareaElm",ref:p,onInput:t[5]||(t[5]=s=>F())},null,544),[[U,c.value]]),e("div",Ve,[e("div",Be,[e("button",{class:q(["rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",{"disabled:cursor-not-allowed opacity-60":c.value===""}]),type:"submit",disabled:c.value===""}," Save ",10,ze),e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",type:"button",onClick:t[6]||(t[6]=s=>y())}," Cancel ")])])],32)]),_:1},512),[[x,T.value]]),o.value.candidate_profile.resume.length>0?h((i(),B(N,{key:0,onToggle:t[9]||(t[9]=s=>D()),modaltype:"big"},{default:w(()=>[Je,Ue,m(K,{link:o.value.candidate_profile.resume[0].path},null,8,["link"])]),_:1},512)),[[x,Y.value]]):z("",!0),h(m(N,{onToggle:t[12]||(t[12]=s=>R()),modaltype:"small"},{default:w(()=>[qe,Ge,e("div",We,[e("button",{class:"rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:t[10]||(t[10]=s=>P())}," Yes "),e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:t[11]||(t[11]=s=>R())}," Cancel ")])]),_:1},512),[[x,$.value]])])):(i(),l("div",Ke,[m(Q,{color:"indigo"})])),Qe])],64)}}};export{nt as default};
