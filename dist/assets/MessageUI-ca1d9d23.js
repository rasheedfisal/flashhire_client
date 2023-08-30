import{r as l,l as T,j as p,E as u,k as E,a as H,o as D,c as j,b as a,d as k,w as $,H as C,h as B,g as P,i as F,n as I}from"./index-52d34a77.js";import{l as S}from"./index-7f83b671.js";import{d}from"./dayjs.min-8d4ef725.js";import"./_commonjsHelpers-042e6b4d.js";const z={class:"bg-gray-50 w-full px-12 py-6 rounded-md shadow-lg max-md:px-6 max-md:py-3"},G={class:"mb-8"},L={class:"mt-2 flex items-center gap-2"},N=a("i",{class:"bi bi-arrow-left text-xl"},null,-1),V=a("h2",null,"Inbox",-1),O={class:"m-6 max-md:m-0"},R={class:"flex flex-col items-center gap-2 mb-2"},U=a("img",{src:"https://api.dicebear.com/5.x/initials/svg?seed=yasir&backgroundColor=E5E7EB&scale=83",alt:"",class:"border-2 border-indigo-200 rounded-md w-20 h-20 bg-gray-200"},null,-1),A={class:"text-xl font-bold max-md:text-lg"},J=["innerHTML"],q=["disabled"],K=a("i",{class:"bi bi-send text-2xl"},null,-1),Q=[K],ae={__name:"MessageUI",setup(W){const i=l(""),t=l([]);T(async()=>{const e=await fetch(p+"/user/"+c,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),s=await e.json();if(e.status!==200)v("Failed to load user. Please try again.");else{g.value=s.data;const r=await fetch(p+"/message/sender/"+u.value.id+"/recipient/"+c,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),o=await r.json();if(r.status!==200)v("Failed to load messages. Please try again.");else{t.value=o.data;const _=await fetch(p+"/message/sender/"+c+"/recipient/"+u.value.id,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),b=await _.json();if(console.log(b.data),_.status!==200)v("Failed to load messages. Please try again.");else{if(t.value=[...t.value,...b.data],t.value.length<1)return;t.value.sort(w),t.value.forEach(m=>{c===m.recipient_id?i.value+=`
                        <!-- sender side -->
                        <div class="flex flex-row-reverse gap-2">
                            <!-- message content -->
                            <div class="flex flex-col items-end gap-2">
                                <div class="flex flex-col items-end">
                                    <div
                                        class="py-2 px-4 bg-indigo-800 text-white rounded-md w-fit max-w-sm max-md:text-sm max-md:py-1 max-md:px-2"
                                    >
                                        ${m.content}
                                    </div>
                                    <small class="text-gray-500">${d(m.created_date).format("DD/MM/YYYY HH:mm")}</small>
                                </div>
                            </div>
                        </div>
                        `:i.value+=`
                        <!-- receiver side -->
                        <div class="flex gap-2">
                            <!-- message content -->
                            <div class="flex flex-col gap-2">
                                <div class="flex flex-col">
                                    <div
                                        class="py-2 px-4 bg-indigo-200 rounded-md w-fit max-w-sm max-md:text-sm max-md:py-1 max-md:px-2"
                                    >
                                        ${m.content}
                                    </div>
                                    <small class="text-gray-500">${d(m.created_date).format("DD/MM/YYYY HH:mm")}</small>
                                </div>
                            </div>
                        </div>
                        `}),console.log(t.value)}}}});const w=(e,s)=>{const r=d(e.created_date),o=d(s.created_date);return r.diff(o)},x=l(null),c=E.currentRoute.value.params.receiverId,g=l({});function M(){x.value.style.height="3rem",x.value.style.height=x.value.scrollHeight+"px"}const n=l(""),f=l(!1),h=l("");function v(e){h.value=e,f.value=!0,setTimeout(()=>{f.value=!1,h.value=""},3e3)}const y=S("http://localhost:3000");async function Y(){const e={content:n.value,is_read:!1,created_date:d(),recipient_id:c,sender_id:u.value.id},s=await fetch(p+"/message",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify(e)});await s.json(),s.status!==201?v("Failed to send message. Please try again."):(y.emit("chat",e),i.value+=`
        <!-- sender side -->
        <div class="flex flex-row-reverse gap-2">
            <!-- message content -->
            <div class="flex flex-col items-end gap-2">
                <div class="flex flex-col items-end">
                    <div
                        class="py-2 px-4 bg-indigo-800 text-white rounded-md w-fit max-w-sm max-md:text-sm max-md:py-1 max-md:px-2"
                    >
                        ${e.content}
                    </div>
                    <small class="text-gray-500">${d(e.created_date).format("DD/MM/YYYY HH:mm")}</small>
                </div>
            </div>
        </div>
        `,console.log(i.value),n.value="")}return y.on("chat",e=>{i.value+=`
    <!-- receiver side -->
    <div class="flex gap-2">
        <!-- message content -->
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div
                    class="py-2 px-4 bg-indigo-200 rounded-md w-fit max-w-sm max-md:text-sm max-md:py-1 max-md:px-2"
                >
                    ${e.content}
                </div>
                <small class="text-gray-500">${d(e.created_date).format("DD/MM/YYYY HH:mm")}</small>
            </div>
        </div>
    </div>
    `}),(e,s)=>{const r=H("router-link");return D(),j("div",z,[a("div",G,[a("div",L,[k(r,{to:"/profile/inbox",class:"py-1 px-2 hover:rounded-md hover:shadow-inner hover:bg-indigo-100"},{default:$(()=>[N]),_:1}),V]),a("div",O,[a("div",R,[U,a("h1",A,C(g.value.name),1)]),a("div",{innerHTML:i.value},null,8,J),a("form",{class:"mt-4 flex items-center max-md:mb-4",onSubmit:s[2]||(s[2]=B(o=>Y(),["prevent"]))},[P(a("textarea",{class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 h-12 bg-gray-50 resize-none overflow-y-hidden hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300 max-md:py-1 max-md:px-2",ref_key:"textareaElm",ref:x,onInput:s[0]||(s[0]=o=>M()),"onUpdate:modelValue":s[1]||(s[1]=o=>n.value=o)},null,544),[[F,n.value]]),a("button",{type:"submit",class:I(["px-4 py-2 rounded-md hover:shadow-inner hover:bg-indigo-100 max-md:py-1 max-md:px-2",{"disabled:cursor-not-allowed opacity-60":n.value===""}]),disabled:n.value===""},Q,10,q)],32)])])])}}};export{ae as default};
