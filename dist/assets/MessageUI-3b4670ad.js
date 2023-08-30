import{r as o,l as T,j as u,E as v,k as E,a as H,o as k,c as D,b as s,d as j,w as $,H as C,h as B,g as P,i as F,n as I}from"./index-52d34a77.js";import{l as S}from"./index-7f83b671.js";import{d as l}from"./dayjs.min-8d4ef725.js";import"./_commonjsHelpers-042e6b4d.js";const z={class:"max-w-7xl mx-auto px-6 max-md:px-3"},G={class:"w-full bg-gray-50 rounded-md shadow-lg px-12 py-6 max-md:px-4 max-md:py-2"},L={class:"mt-2 flex items-center gap-2"},N=s("i",{class:"bi bi-arrow-left text-xl"},null,-1),V=s("h2",null,"Inbox",-1),O={class:"m-6 max-md:m-0"},R={class:"flex flex-col items-center gap-2 mb-2"},U=s("img",{src:"https://api.dicebear.com/5.x/initials/svg?seed=yasir&backgroundColor=E5E7EB&scale=83",alt:"",class:"border-2 border-indigo-200 rounded-md w-20 h-20 bg-gray-200"},null,-1),A={class:"text-xl font-bold max-md:text-lg"},J=["innerHTML"],q=["disabled"],K=s("i",{class:"bi bi-send text-2xl"},null,-1),Q=[K],W=s("br",null,null,-1),te={__name:"MessageUI",setup(X){const r=o(""),d=o([]);T(async()=>{const e=await fetch(u+"/user/"+c,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),a=await e.json();if(e.status!==200)p("Failed to load user. Please try again.");else{f.value=a.data;const n=await fetch(u+"/message/sender/"+v.value.id+"/recipient/"+c,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),t=await n.json();if(n.status!==200)p("Failed to load messages. Please try again.");else{d.value=t.data;const y=await fetch(u+"/message/sender/"+c+"/recipient/"+v.value.id,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin"}),Y=await y.json();if(y.status!==200)p("Failed to load messages. Please try again.");else{if(d.value=[...d.value,...Y.data],d.value.length<1)return;d.value.sort(b),d.value.forEach(m=>{c===m.recipient_id?r.value+=`
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
                                    <small class="text-gray-500">${l(m.created_date).format("DD/MM/YYYY HH:mm")}</small>
                                </div>
                            </div>
                        </div>
                        `:r.value+=`
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
                                    <small class="text-gray-500">${l(m.created_date).format("DD/MM/YYYY HH:mm")}</small>
                                </div>
                            </div>
                        </div>
                        `})}}}});const b=(e,a)=>{const n=l(e.created_date),t=l(a.created_date);return n.diff(t)},x=o(null),c=E.currentRoute.value.params.receiverId,f=o({});function w(){x.value.style.height="3rem",x.value.style.height=x.value.scrollHeight+"px"}const i=o(""),g=o(!1),h=o("");function p(e){h.value=e,g.value=!0,setTimeout(()=>{g.value=!1,h.value=""},3e3)}const _=S("http://localhost:3000");async function M(){const e={content:i.value,is_read:!1,created_date:l(),recipient_id:c,sender_id:v.value.id},a=await fetch(u+"/message",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify(e)});await a.json(),a.status!==201?p("Failed to send message. Please try again."):(_.emit("chat",e),r.value+=`
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
                    <small class="text-gray-500">${l(e.created_date).format("DD/MM/YYYY HH:mm")}</small>
                </div>
            </div>
        </div>
        `,i.value="")}return _.on("chat",e=>{r.value+=`
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
                <small class="text-gray-500">${l(e.created_date).format("DD/MM/YYYY HH:mm")}</small>
            </div>
        </div>
    </div>
    `}),(e,a)=>{const n=H("router-link");return k(),D("div",z,[s("div",G,[s("div",L,[j(n,{to:"/workspace/inbox",class:"py-1 px-2 hover:rounded-md hover:shadow-inner hover:bg-indigo-100"},{default:$(()=>[N]),_:1}),V]),s("div",O,[s("div",R,[U,s("h1",A,C(f.value.name),1)]),s("div",{innerHTML:r.value},null,8,J),s("form",{class:"mt-4 flex items-center max-md:mb-4",onSubmit:a[2]||(a[2]=B(t=>M(),["prevent"]))},[P(s("textarea",{class:"block w-full rounded-md border-2 border-gray-300 px-4 py-2 h-12 bg-gray-50 resize-none overflow-y-hidden hover:outline-none focus:outline-none focus:border-indigo-400 placeholder:text-gray-300 max-md:py-1 max-md:px-2",ref_key:"textareaElm",ref:x,onInput:a[0]||(a[0]=t=>w()),"onUpdate:modelValue":a[1]||(a[1]=t=>i.value=t)},null,544),[[F,i.value]]),s("button",{type:"submit",class:I(["px-4 py-2 rounded-md hover:shadow-inner hover:bg-indigo-100 max-md:py-1 max-md:px-2",{"disabled:cursor-not-allowed opacity-60":i.value===""}]),disabled:i.value===""},Q,10,q)],32)])]),W])}}};export{te as default};
