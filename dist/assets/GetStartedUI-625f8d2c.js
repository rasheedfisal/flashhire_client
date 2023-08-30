import{r as n,a as _,o as u,c as m,g as p,v as h,d as v,b as e,h as w,i as y,n as b,F as x,j as S,k}from"./index-52d34a77.js";import{_ as T}from"./hireflash-de18c76a.js";import{_ as j}from"./ToastMsg-3159a1a9.js";const C={class:"bg-indigo-50 w-full min-h-screen grid place-items-center"},F=e("div",{class:"flex justify-center items-center"},[e("img",{src:T,alt:"",class:"w-48 h-auto"})],-1),N=e("div",{class:"my-8"},[e("h2",{class:"font-semibold text-2xl"},"Let's get started!"),e("p",null,"Create an organization account")],-1),E={class:"my-2"},M=e("label",{class:"mb-2 block"},"Enter your email",-1),O=["disabled"],P=e("p",null,"Next",-1),V=e("i",{class:"bi bi-arrow-right text-lg"},null,-1),I=[P,V],L={key:1,class:"w-full h-10 mt-6 grid place-items-center"},q={__name:"GetStartedUI",setup($){document.title="Get Started - Hireflash";const t=n(""),i=n(!1);async function g(){i.value=!0;const o=await fetch(S+"/auth/get-started/email",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({email:t.value})}),s=await o.json();if(o.status!==200)i.value=!1,c("Failed to continue. Please try again.");else{const d={service_id:"service_td6p4lb",template_id:"template_v9xf3os",user_id:"t0woNaWcCw5_Jq2iF",accessToken:"Hv7klwL929awUfcr-aP2X",template_params:{subject:"Verification Code",content:`Your verification code is ${s.data.verificationCode}. 

 Please do not share with others.`,receiverEmail:t.value}};fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}).then(a=>{if(a.ok)i.value=!1,window.sessionStorage.setItem("verifyId",s.data.id),window.sessionStorage.setItem("user_email",t.value),t.value="",k.push("/get-started/verify");else throw c("Failed to send verification code to given email."),new Error("Request failed.")}).catch(a=>{c("Failed to send verification code to given email."),console.log("Oops... "+a.message)})}}function f(){return t.value===""||!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(t.value)}const l=n(!1),r=n("");function c(o){r.value=o,l.value=!0,setTimeout(()=>{l.value=!1,r.value=""},3e3)}return(o,s)=>{const d=_("Loading");return u(),m(x,null,[p(v(j,{msg:r.value},null,8,["msg"]),[[h,l.value]]),e("main",C,[e("form",{class:"px-10 py-5 rounded-lg shadow-xl bg-gray-50 w-fit max-sm:w-11/12 max-md:px-5",onSubmit:s[1]||(s[1]=w(a=>g(),["prevent"]))},[F,N,e("div",E,[M,p(e("input",{type:"email",class:"block w-96 max-md:w-full rounded-md border-2 border-gray-300 px-4 py-2 bg-gray-50 hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300",placeholder:"email@example.com","onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a)},null,512),[[y,t.value]])]),i.value?(u(),m("div",L,[v(d,{color:"indigo"})])):(u(),m("button",{key:0,type:"submit",class:b(["w-full h-10 mt-6 rounded-md bg-indigo-800 text-gray-50 flex justify-center items-center gap-2 transition ease-in-out focus:scale-95 hover:-translate-y-1",{"disabled:cursor-not-allowed opacity-60":f()}]),disabled:f()},I,10,O))],32)])],64)}}};export{q as default};
