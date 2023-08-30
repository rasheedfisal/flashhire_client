import{k as _,r as n,l as S,o as b,c as w,g as l,v as k,d as $,b as o,h as B,i as u,n as U,F as j,e as E,j as K}from"./index-52d34a77.js";import{_ as M}from"./hireflash-de18c76a.js";import{_ as T}from"./email-checked-c1dba230.js";import{_ as C}from"./ToastMsg-3159a1a9.js";import{_ as F}from"./Loading-436a1654.js";const N={class:"bg-indigo-50 w-full min-h-screen grid place-items-center"},P=E('<div class="flex justify-center items-center"><img src="'+M+'" alt="" class="w-48 h-auto"></div><div class="my-8"><h2 class="font-semibold text-2xl">Get verified</h2></div><div class="flex justify-center items-center"><img src="'+T+'" alt="" class="w-32 h-auto mb-3"></div>',3),O={class:"my-2"},z=o("label",{class:"mb-2 block"},"Enter verification code we just emailed you",-1),D={class:"flex gap-1 max-w-sm mx-auto"},G=["disabled"],H=o("p",null,"Next",-1),J=o("i",{class:"bi bi-arrow-right text-lg"},null,-1),q=[H,J],A={key:1,class:"w-full h-10 mt-6 grid place-items-center"},Z={__name:"VerifyUI",setup(L){document.title="Verify Forgot Password - Hireflash",window.sessionStorage.getItem("verifyId")||_.replace("/auth/forgot-password"),console.log(window.sessionStorage.getItem("user_email"));const x=n(null);S(()=>{x.value.focus()});const r=n(""),i=n(""),d=n(""),p=n(""),m=n(""),c=n(""),v=n("");function a(s,e,t){document.getElementById(s).value.length?e!==""&&document.getElementById(e).focus():t!==""&&document.getElementById(t).focus()}const f=n(!1);async function I(){v.value=`${r.value}${i.value}${d.value}${p.value}${m.value}${c.value}`,f.value=!0;const s=await fetch(K+"/auth/forgot-password/verify",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({id:window.sessionStorage.getItem("verifyId"),verificationCode:v.value})}),e=await s.json();s.status!==200?(f.value=!1,V(e.message)):(f.value=!1,r.value="",i.value="",d.value="",p.value="",m.value="",c.value="",v.value="",window.sessionStorage.removeItem("verifyId"),_.push("/auth/forgot-password/new-password"))}function h(){return r.value===""||i.value===""||d.value===""||p.value===""||m.value===""||c.value===""}const g=n(!1),y=n("");function V(s){y.value=s,g.value=!0,setTimeout(()=>{g.value=!1,y.value=""},3e3)}return(s,e)=>(b(),w(j,null,[l($(C,{msg:y.value},null,8,["msg"]),[[k,g.value]]),o("main",N,[o("form",{class:"px-10 py-5 w-fit rounded-lg shadow-xl bg-gray-50 max-md:w-11/12 max-md:px-5",onSubmit:e[12]||(e[12]=B(t=>I(),["prevent"]))},[P,o("div",O,[z,o("div",D,[l(o("input",{type:"number",class:"w-1/4 text-center rounded-md border-2 border-gray-300 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",maxlength:"1",id:"input1",onKeyup:e[0]||(e[0]=t=>a("input1","input2","")),"onUpdate:modelValue":e[1]||(e[1]=t=>r.value=t),placeholder:"⚹",autocomplete:"off",ref_key:"toBeFocused",ref:x},null,544),[[u,r.value]]),l(o("input",{type:"number",class:"w-1/4 text-center rounded-md border-2 border-gray-300 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",maxlength:"1",id:"input2",onKeyup:e[2]||(e[2]=t=>a("input2","input3","input1")),"onUpdate:modelValue":e[3]||(e[3]=t=>i.value=t),placeholder:"⚹",autocomplete:"off"},null,544),[[u,i.value]]),l(o("input",{type:"number",class:"w-1/4 text-center rounded-md border-2 border-gray-300 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",maxlength:"1",id:"input3",onKeyup:e[4]||(e[4]=t=>a("input3","input4","input2")),"onUpdate:modelValue":e[5]||(e[5]=t=>d.value=t),placeholder:"⚹",autocomplete:"off"},null,544),[[u,d.value]]),l(o("input",{type:"number",class:"w-1/4 text-center rounded-md border-2 border-gray-300 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",maxlength:"1",id:"input4",onKeyup:e[6]||(e[6]=t=>a("input4","input5","input3")),"onUpdate:modelValue":e[7]||(e[7]=t=>p.value=t),placeholder:"⚹",autocomplete:"off"},null,544),[[u,p.value]]),l(o("input",{type:"number",class:"w-1/4 text-center rounded-md border-2 border-gray-300 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",maxlength:"1",id:"input5",onKeyup:e[8]||(e[8]=t=>a("input5","input6","input4")),"onUpdate:modelValue":e[9]||(e[9]=t=>m.value=t),placeholder:"⚹",autocomplete:"off"},null,544),[[u,m.value]]),l(o("input",{type:"number",class:"w-1/4 text-center rounded-md border-2 border-gray-300 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",maxlength:"1",id:"input6",onKeyup:e[10]||(e[10]=t=>a("input6","","input5")),"onUpdate:modelValue":e[11]||(e[11]=t=>c.value=t),placeholder:"⚹",autocomplete:"off"},null,544),[[u,c.value]])])]),f.value?(b(),w("div",A,[$(F,{color:"indigo"})])):(b(),w("button",{key:0,type:"submit",class:U(["w-full h-10 mt-6 rounded-md bg-indigo-800 text-gray-50 flex justify-center items-center gap-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",{"disabled:cursor-not-allowed opacity-60":h()}]),disabled:h()},q,10,G))],32)])],64))}};export{Z as default};