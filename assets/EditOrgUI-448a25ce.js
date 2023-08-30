import{l as te,r as l,S as a,j as T,a as le,o as D,c as A,g as i,v as P,d as u,b as e,w as b,h as G,i as r,n as d,H as W,u as p,F as q,p as ae,s as se,I as ne,f as ie}from"./index-52d34a77.js";import{_ as K}from"./TitleBorder-ff85321c.js";import{_ as de,a as re}from"./OptionCustom-cd5bbf2e.js";import{c as ue}from"./CountryList-7ca74b8e.js";import{_ as B}from"./DialogModal-0af1feed.js";import{_ as ce}from"./ToastMsg-3159a1a9.js";import{r as pe,L as ve}from"./FileUploader.vue_vue_type_style_index_0_lang-23436be6.js";const me={class:"max-w-7xl mx-auto px-6 max-md:px-3"},be={class:"w-full bg-gray-50 rounded-md shadow-lg px-12 py-6 max-md:px-4 max-md:py-2"},ge={class:"mt-2 flex items-center gap-2"},fe=e("i",{class:"bi bi-arrow-left text-xl"},null,-1),ye=e("h2",null,"Settings",-1),he={class:"mt-4"},_e={class:"mt-4 flex items-center gap-4 max-md:flex-col max-md:items-start"},xe={class:"border-2 border-indigo-200 rounded-md w-28 grid place-items-center"},we=["src"],ke={class:"flex flex-col gap-2"},Ce={class:"flex gap-4"},Se=e("small",{class:"text-gray-500"},"Support JPG and PNG. Max file size 3MB. Make sure image scale is 1x1",-1),$e={class:"mt-4 max-w-lg"},Ue=e("label",{class:"mb-2 block"},"Organization Name",-1),Oe=["disabled"],Te={class:"mt-4 max-w-lg"},De=e("label",{class:"mb-2 block"},"Official Website",-1),Pe=["disabled"],Ve={class:"mt-4 max-w-lg"},ze=e("label",{class:"mb-2 block"},"Address Line 1",-1),Ee=["disabled"],Ne={class:"mt-4 max-w-lg"},Me=e("label",{class:"mb-2 block"},"Address Line 2 (Optional)",-1),je=["disabled"],Le={class:"mt-4 max-w-lg"},Ie=e("label",{class:"mb-2 block"},"Postal Code",-1),Ae=["disabled"],Be={class:"mt-4 max-w-lg"},Fe=e("label",{class:"mb-2 block"},"Town/City",-1),He=["disabled"],Je={class:"mt-4 max-w-lg"},Re=e("label",{class:"mb-2 block"},"State",-1),Ye=["disabled"],Ge={class:"mt-4 max-w-lg"},We=e("label",{class:"mb-2 block"},"Country",-1),qe={class:"mt-4 max-w-lg"},Ke=e("label",{class:"mb-2 block"},"Description",-1),Qe=["disabled"],Xe={class:"mt-6 flex gap-2"},Ze=["disabled"],eo=e("br",null,null,-1),oo={class:"mb-8"},to={class:"mt-4"},lo=e("label",{class:"mb-2 block"},"Once you delete an organization, there is no going back. Please be certain.",-1),ao=e("p",{class:"font-semibold mt-4"}," This action cannot be undone. This will permanently delete your organization info and other information associated to your organization. Are you absolutely sure? ",-1),so={class:"mt-4"},no=e("label",{class:"mb-2 block"},"Please type the organization name and official website to confirm your action",-1),io=["placeholder"],ro=e("br",null,null,-1),uo=["placeholder"],co={class:"mt-6"},po=["disabled"],vo=e("br",null,null,-1),mo=e("br",null,null,-1),bo=e("br",null,null,-1),go={class:"h-[80vh] w-[75vw] max-md:w-screen flex flex-col gap-2 justify-center border-2 border-indigo-200 rounded-md"},fo={"css-src":"https://esm.sh/@uploadcare/blocks@0.22.3/web/file-uploader-regular.min.css","ctx-name":"my-uploader",class:"my-config"},yo={key:0,class:"text-center"},ho=e("br",{class:"mb-2"},null,-1),_o=e("p",null,"Set your picture to default settings?",-1),xo={class:"mt-6 flex gap-2"},wo=e("br",{class:"mb-2"},null,-1),ko=e("p",null," Your account was successfully deleted. Thank you for using Hireflash. ",-1),Co={class:"mt-6 flex gap-2"},zo={__name:"EditOrgUI",setup(So){pe(ve),document.title="Edit Organization - Hireflash",te(()=>{window.addEventListener("LR_UPLOAD_FINISH",async n=>{const o=n.detail.data[0];await ee(o.cdnUrl+o.name)})});const g=l(a.value.pic||`https://api.dicebear.com/5.x/initials/svg?seed=${a.value.name}&backgroundColor=3730a3&scale=83`),w=l(a.value.name),f=l(a.value.website),k=l(a.value.address_line1),V=l(a.value.address_line2),C=l(a.value.postal_code),S=l(a.value.city),$=l(a.value.state),v=l(a.value.country),y=l(a.value.desc);async function Q(){const n=await fetch(T+"/company/"+a.value.id,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({name:m.value,website:f.value,description:y.value,address_line1:k.value,address_line2:V.value,postal_code:C.value,state:$.value,city:S.value,country:v.value})});await n.json(),n.status!==200?c("Failed to update new information about this organization. Please try again."):(H(),c("Successfully modified this organization info."))}function F(){return w.value===""||f.value===""||k.value===""||C.value===""||S.value===""||$.value===""||v.value===""||y.value===""||!/^.{3,}$/gm.test(w.value)||!/^https?:\/\/.*/.test(f.value)||!/^.{10,}$/gm.test(y.value)}const s=l(!0),h=l("Edit Detail"),U=l(!0);function H(){s.value=!s.value,U.value=!U.value,h.value==="Edit Detail"?h.value="Cancel":h.value==="Cancel"&&(h.value="Edit Detail")}const _=l("Continue to delete"),z=l(!0),m=l(""),x=l("");function J(){z.value=!z.value,_.value==="Continue to delete"?_.value="Cancel":_.value==="Cancel"&&(_.value="Continue to delete",m.value="",x.value="")}const E=l(!1);function R(){E.value=!E.value}async function X(){const n=await fetch(T+"/company/"+a.value.id,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({})});await n.json(),n.status!==200?c("Failed to delete organization. Please try again."):R()}const N=l(!1);function M(){N.value=!N.value}const j=l(!1);function O(){j.value=!j.value}async function Z(){const n=await fetch(T+"/company/"+a.value.id+"/pic",{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"});await n.json(),n.status!==200?c("Failed to change company logo to default. Please try again."):(g.value=`https://api.dicebear.com/5.x/initials/svg?seed=${a.value.name}&backgroundColor=3730a3&scale=83`,a.value.pic=g.value,O(),c("Company logo has been change to default."))}async function ee(n){const o=await fetch(T+"/company/"+a.value.id+"/pic",{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({path:n})});await o.json(),o.status!==200?c("Failed to upload new company logo. Please try again."):(g.value=n,a.value.pic=g.value,M(),c("Company logo has been updated."))}const L=l(!1),I=l("");function c(n){I.value=n,L.value=!0,setTimeout(()=>{L.value=!1,I.value=""},3e3)}l({});const oe=l(!1);return(n,o)=>{const Y=le("router-link");return D(),A(q,null,[i(u(ce,{msg:I.value},null,8,["msg"]),[[P,L.value]]),e("div",me,[e("div",be,[e("div",ge,[u(Y,{to:"/workspace/settings",class:"py-1 px-2 hover:rounded-md hover:shadow-inner hover:bg-indigo-100"},{default:b(()=>[fe]),_:1}),ye]),e("div",he,[u(K,{title:"Edit Organization Info"})]),e("div",_e,[e("div",xe,[e("img",{src:g.value,alt:"",class:"w-full h-auto"},null,8,we)]),e("div",ke,[e("div",Ce,[e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:o[0]||(o[0]=t=>O())}," Set Default "),e("button",{class:"rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:o[1]||(o[1]=t=>M())}," Upload new ")]),Se])]),e("form",{onSubmit:o[12]||(o[12]=G(t=>Q(),["prevent"]))},[e("div",$e,[Ue,i(e("input",{type:"text",class:d(["block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",{"disabled:cursor-not-allowed":s.value}]),placeholder:"Hireflash Inc.","onUpdate:modelValue":o[2]||(o[2]=t=>w.value=t),disabled:s.value},null,10,Oe),[[r,w.value]])]),e("div",Te,[De,i(e("input",{type:"url",class:d(["block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",{"disabled:cursor-not-allowed":s.value}]),placeholder:"https://hireflash.io","onUpdate:modelValue":o[3]||(o[3]=t=>f.value=t),disabled:s.value},null,10,Pe),[[r,f.value]])]),e("div",Ve,[ze,i(e("input",{type:"text",class:d(["block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",{"disabled:cursor-not-allowed":s.value}]),placeholder:"15, University Street 22","onUpdate:modelValue":o[4]||(o[4]=t=>k.value=t),disabled:s.value},null,10,Ee),[[r,k.value]])]),e("div",Ne,[Me,i(e("input",{type:"text",class:d(["block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",{"disabled:cursor-not-allowed":s.value}]),placeholder:"University Park, Parit Raja","onUpdate:modelValue":o[5]||(o[5]=t=>V.value=t),disabled:s.value},null,10,je),[[r,V.value]])]),e("div",Le,[Ie,i(e("input",{type:"text",class:d(["block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",{"disabled:cursor-not-allowed":s.value}]),placeholder:"86400","onUpdate:modelValue":o[6]||(o[6]=t=>C.value=t),disabled:s.value},null,10,Ae),[[r,C.value]])]),e("div",Be,[Fe,i(e("input",{type:"text",class:d(["block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",{"disabled:cursor-not-allowed":s.value}]),placeholder:"Batu Pahat","onUpdate:modelValue":o[7]||(o[7]=t=>S.value=t),disabled:s.value},null,10,He),[[r,S.value]])]),e("div",Je,[Re,i(e("input",{type:"text",class:d(["block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",{"disabled:cursor-not-allowed":s.value}]),placeholder:"Johor","onUpdate:modelValue":o[8]||(o[8]=t=>$.value=t),disabled:s.value},null,10,Ye),[[r,$.value]])]),e("div",Ge,[We,u(de,{modelValue:v.value,"onUpdate:modelValue":o[9]||(o[9]=t=>v.value=t),heightselect:"40",widthselect:"full",placeholderval:"Choose recruitment status",isdisabled:s.value},{default:b(()=>[(D(!0),A(q,null,ae(p(ue),t=>(D(),se(re,{optionvalue:t,onClick:()=>{v.value=t},class:d({"rounded-md shadow-inner bg-indigo-100":v.value===t})},null,8,["optionvalue","onClick","class"]))),256))]),_:1},8,["modelValue","isdisabled"])]),e("div",qe,[Ke,i(e("textarea",{class:d(["block w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 resize-y h-44 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",{"disabled:cursor-not-allowed":s.value}]),placeholder:"This is the best explanation...","onUpdate:modelValue":o[10]||(o[10]=t=>y.value=t),disabled:s.value},null,10,Qe),[[r,y.value]])]),e("div",Xe,[e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",type:"button",onClick:o[11]||(o[11]=t=>H())},W(h.value),1),e("button",{class:d(["rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",{"disabled:cursor-not-allowed opacity-60":U.value||F()}]),type:"submit",disabled:U.value||F()}," Save ",10,Ze)])],32),eo,e("div",oo,[u(K,{title:"Delete this organization"}),e("div",to,[lo,e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1 mt-2",onClick:o[13]||(o[13]=t=>J())},W(_.value),1)]),e("form",{onSubmit:o[17]||(o[17]=G(t=>X(),["prevent"])),class:d({hidden:z.value})},[ao,e("div",so,[no,i(e("input",{type:"text",class:"block w-96 max-md:w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:p(a).name,"onUpdate:modelValue":o[14]||(o[14]=t=>m.value=t)},null,8,io),[[r,m.value]]),ro,i(e("input",{type:"url",class:"block w-96 max-md:w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:p(a).website,"onUpdate:modelValue":o[15]||(o[15]=t=>x.value=t)},null,8,uo),[[r,x.value]])]),e("div",co,[e("button",{class:d(["rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",{"disabled:cursor-not-allowed opacity-60":m.value!==p(a).name||x.value!==p(a).website}]),onClick:o[16]||(o[16]=t=>J()),disabled:m.value!==p(a).name||x.value!==p(a).website}," I understand the consequences, delete this organization ",10,po)])],34)]),vo]),mo,i(u(B,{onToggle:o[19]||(o[19]=t=>M()),modaltype:"small"},{default:b(()=>[bo,e("div",go,[e("lr-file-uploader-inline",fo,[e("lr-data-output",{onLrDataOutput:o[18]||(o[18]=t=>n.$emit("upload")),"use-event":"",hidden:"",class:"my-config"},null,32)]),oe.value?(D(),A("p",yo," Successfully uploaded your resume. You can close the modal dialog. ")):ne("",!0)])]),_:1},512),[[P,N.value]]),i(u(B,{onToggle:o[22]||(o[22]=t=>O()),modaltype:"small"},{default:b(()=>[ho,_o,e("div",xo,[e("button",{class:"rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:o[20]||(o[20]=t=>Z())}," Yes "),e("button",{class:"rounded-md bg-gray-50 border-2 border-indigo-800 text-indigo-800 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",onClick:o[21]||(o[21]=t=>O())}," Cancel ")])]),_:1},512),[[P,j.value]]),i(u(B,{onToggle:o[23]||(o[23]=t=>R()),modaltype:"small"},{default:b(()=>[wo,ko,e("div",Co,[u(Y,{class:"rounded-md bg-indigo-800 text-gray-50 px-4 py-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",to:"/"},{default:b(()=>[ie(" Ok ")]),_:1})])]),_:1},512),[[P,E.value]])])],64)}}};export{zo as default};
