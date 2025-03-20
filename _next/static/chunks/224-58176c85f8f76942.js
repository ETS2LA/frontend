"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{39824:function(e,t,n){n.d(t,{Or:function(){return r},Yw:function(){return a},oB:function(){return o},on:function(){return l},wX:function(){return i}});var s=n(42306);async function a(e){let t=await fetch("http://".concat(s.ip,":37520/backend/plugins/").concat(e,"/settings"));return await t.json()}async function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;try{let a=await fetch("http://".concat(s.ip,":37520/backend/plugins/").concat(e,"/settings/").concat(t));if(!a.ok)return console.error("Failed to fetch: HTTP status ".concat(a.status)),n;try{let e=await a.json();if(null===e)return n;return e}catch(e){return console.error("Failed to parse JSON response:",e),n}}catch(e){return console.error("An error occurred while getting the setting by key:",e),n}}async function i(e,t,n){try{let a=await fetch("http://".concat(s.ip,":37520/backend/plugins/").concat(e,"/settings/").concat(t,"/set"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:n})});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}catch(e){console.error("An error occurred while setting the setting by key:",e)}}async function o(e){try{let t=await fetch("http://".concat(s.ip,":37520/api/controls/").concat(e,"/change"),{method:"POST",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}catch(e){console.error("An error occurred while triggering the keybind change:",e)}}async function l(e){try{let t=await fetch("http://".concat(s.ip,":37520/api/controls/").concat(e,"/unbind"),{method:"POST",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}catch(e){console.error("An error occurred while unbinding the keybind:",e)}}},69711:function(e,t,n){var s=n(57437),a=n(94508);t.Z=e=>{let{className:t}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:(0,a.cn)("animate-spin",t),children:(0,s.jsx)("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})})}},35182:function(e,t,n){n.d(t,{j:function(){return _}});var s=n(57437),a=n(93022),r=n(63861),i=n(42306),o=n(6512),l=n(95186),d=n(39824),c=n(53647),u=n(81103),p=n(1828),f=n(62869),m=n(93772),x=n(2265),h=n(85897),g=n(3991),b=n(19060),v=n(12339),j=n(32759),w=n(2296),y=n(48614),k=n(86574),N=n(12658);class z extends x.Component{render(){let{data:e,translate:t,pluginSettings:n}=this.props,{curSliderValue:a,tempSliderValue:r}=this.state,i=n[e.key]?parseFloat(n[e.key]):a,o=e.options.step||1,l=e.options.suffix||"";return(0,s.jsxs)("div",{className:"flex flex-col gap-3 w-full rounded-md border p-4",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("p",{className:"font-semibold",children:t(e.name)}),(0,s.jsxs)("p",{className:"text-muted-foreground",children:[i,l,null!==r&&r!=i?" → ".concat(r).concat(l):""]})]}),(0,s.jsx)(h.i,{min:e.options.min,max:e.options.max,defaultValue:[i],step:o,onValueChange:this.handleValueChange,onValueCommit:this.handleValueCommit}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:t(e.description)})]})}constructor(e){super(e),this.handleValueChange=e=>{this.setState({tempSliderValue:e[0]})},this.handleValueCommit=e=>{let{plugin:t,data:n,setNeedsRestart:s,mutate:a,translate:r}=this.props;(0,d.wX)(t,n.key,e[0]).then(()=>{n.requires_restart&&s(!0),a(t+"settings"),m.Am.success(r("frontend.settings.number.updated"),{duration:500}),this.setState({curSliderValue:e[0],tempSliderValue:null})})};let t=e.pluginSettings[e.data.key]?parseFloat(e.pluginSettings[e.data.key]):e.default;this.state={curSliderValue:t,tempSliderValue:null}}}function _(e){let{data:t,plugin:n,enabled:h,className:_}=e,{data:I,error:S,isLoading:C}=(0,r.ZP)(n+"settings",()=>(0,d.Yw)(n)),[A,T]=(0,x.useState)(!1);if((0,x.useEffect)(()=>{T(!1),(0,r.JG)(n+"settings")},[n]),(0,x.useEffect)(()=>{try{let e=null;if(h){let n=t[0];void 0==n.refresh_rate&&(n.refresh_rate=2),e=setInterval(()=>{(0,r.JG)("plugin_ui_plugins")},1e3*n.refresh_rate)}else e=setInterval(()=>{(0,r.JG)("plugin_ui_plugins")},2e3);return()=>clearInterval(e)}catch(e){}},[t,n,h]),void 0==h&&(h=!0),C)return(0,s.jsx)(a.O,{});if(S)return(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,g.Iu)("frontend.settings.error",S)});if(!t||!I)return(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,g.Iu)("frontend.settings.backend_no_data")});let V={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl"},E={thin:"font-thin",light:"font-light",normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},P=e=>(0,s.jsx)("p",{className:E[e.options.weight]+" "+V[e.options.size]+"! "+e.classname,style:{whiteSpace:"pre-wrap"},children:(0,g.Iu)(e.text)}),J=e=>(0,s.jsx)("p",{className:E[e.options.weight]+" text-muted-foreground "+V[e.options.size]+" "+e.classname,style:{whiteSpace:"pre-wrap"},children:(0,g.Iu)(e.text)}),Z=e=>(0,s.jsx)("p",{className:E[e.options.weight]+" "+V[e.options.size]+" "+e.classname,style:{whiteSpace:"pre-wrap"},children:(0,g.Iu)(e.text)}),O=e=>(0,s.jsx)("a",{href:e.url,className:E[e.options.weight]+" text-accent-foreground "+V[e.options.size]+" "+e.classname,style:{whiteSpace:"pre-wrap"},target:"_blank",children:(0,g.Iu)(e.text)});function G(e,t){return(0,s.jsx)(w.U,{components:{code(e){let{node:n,inline:a,className:r,children:i,...o}=e,l=String(i).includes("\n"),d=/language-(\w+)/.exec(r||""),c=d?d[1]:"json";return l?(0,s.jsx)(k.Z,{language:c,style:N.Z,customStyle:{margin:t?"0 0":"1rem 0",padding:"1rem",borderRadius:"0.5rem",fontSize:"0.75rem",fontFamily:"var(--font-geist-mono)"},children:String(i).replace(/\n$/,"")}):(0,s.jsx)("code",{className:"rounded-md bg-accent p-1 font-geist-mono text-xs",...o,children:i})},img(e){let{node:t,...n}=e;return(0,s.jsx)("img",{...n,className:"rounded-md"})}},className:e.classname,children:e})}let X=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Z,{})}),q=e=>e?(0,s.jsx)("div",{style:{height:e+"px"}}):(0,s.jsx)("div",{className:"h-4"}),F=e=>{if(void 0==I[e.key]&&(void 0!=e.options.default?(console.log("Setting default value for",e.key),I[e.key]=e.options.default):I[e.key]=e.options.type),"string"==e.options.type||"password"==e.options.type){let t="password"==e.options.type?"password":"text",a="";return a="password"==t?"•".repeat(I[e.key].length):I[e.key],(0,s.jsxs)("div",{className:"flex gap-4 w-full rounded-md p-4 border justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"font-semibold",children:(0,g.Iu)(e.name)}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,g.Iu)(e.description)})]}),(0,s.jsx)(l.I,{type:t,placeholder:a,onChange:t=>{(0,d.wX)(n,e.key,t.target.value).then(()=>{e.requires_restart&&T(!0),(0,r.JG)(n+"settings"),m.Am.success((0,g.Iu)("frontend.settings.string.updated"),{duration:500})})},className:"max-w-xs"})]})}if("number"==e.options.type)return(0,s.jsxs)("div",{className:"flex gap-4 w-full rounded-md p-4 border justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"font-semibold",children:(0,g.Iu)(e.name)}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,g.Iu)(e.description)})]}),(0,s.jsx)(l.I,{type:"number",placeholder:I[e.key],className:"font-geist-mono max-w-xs",onChange:t=>{(0,d.wX)(n,e.key,parseFloat(t.target.value)).then(()=>{e.requires_restart&&T(!0),(0,r.JG)(n+"settings"),m.Am.success((0,g.Iu)("frontend.settings.number.updated"),{duration:500})})}})]})},D=e=>(0,s.jsx)(z,{pluginSettings:I,data:e,plugin:n,setNeedsRestart:T,mutate:r.JG,toast:m.Am,translate:g.Iu,default:e.options.default}),U=e=>{let t=I[e.key];return(null==t||"boolean"!=typeof t)&&(void 0!=e.options.default?(console.log("Setting default value for",e.key),I[e.key]=e.options.default):I[e.key]=!1),(0,s.jsxs)("div",{className:"flex justify-between p-0 items-center"+$(e.options.border),children:[(0,s.jsxs)("div",{className:"flex flex-col gap-1 pr-12",children:[(0,s.jsx)("p",{className:"font-semibold",children:(0,g.Iu)(e.name)}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,g.Iu)(e.description)})]}),(0,s.jsx)(p.r,{checked:t,onCheckedChange:t=>{(0,d.wX)(n,e.key,t).then(()=>{e.requires_restart&&T(!0),(0,r.JG)(n+"settings"),m.Am.success((0,g.Iu)("frontend.settings.boolean.updated"),{duration:500})})}})]})},B=e=>(void 0==I[e.key]&&(void 0!=e.options.default?(console.log("Setting default value for",e.key),I[e.key]=e.options.default):I[e.key]=e.options.options[0]),(0,s.jsxs)("div",{className:"flex gap-6 items-center rounded-md border p-4",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"font-semibold",children:(0,g.Iu)(e.name)}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,g.Iu)(e.description)})]}),(0,s.jsxs)(c.Ph,{defaultValue:I[e.key],onValueChange:t=>{(0,d.wX)(n,e.key,t).then(()=>{e.requires_restart&&T(!0),(0,r.JG)(n+"settings"),m.Am.success((0,g.Iu)("frontend.settings.enum.updated"),{duration:500})})},children:[(0,s.jsx)(c.i4,{className:"grow",children:(0,s.jsx)(c.ki,{placeholder:I[e.key],children:I[e.key]})}),(0,s.jsx)(c.Bw,{className:"bg-background font-geist",children:e.options.options.map(e=>(0,s.jsx)(c.Ql,{value:e,children:e},e))})]})]})),Q=e=>{let t=I[e.key]&&I[e.key]||!1,a="items-top flex space-x-4 "+$(e.options.border);return e.options.border&&t&&(a+=" bg-input/30"),(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)(b.X,{checked:t,onCheckedChange:t=>{(0,d.wX)(n,e.key,t).then(()=>{e.requires_restart&&T(!0),(0,r.JG)(n+"settings"),m.Am.success((0,g.Iu)("frontend.settings.boolean.updated"),{duration:500})})}}),(0,s.jsxs)("div",{className:"grid gap-1.5 leading-none",children:[(0,s.jsx)("label",{htmlFor:"terms1",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:(0,g.Iu)(e.name)}),(0,s.jsx)("p",{className:"text-muted-foreground text-xs",children:(0,g.Iu)(e.description)})]})]})},Y=e=>""==e.title?(0,s.jsx)(f.z,{variant:"outline",onClick:()=>{(0,i.iq)(n,e.options.target,[],{}).then(()=>{m.Am.success((0,g.Iu)("Success"),{duration:500})})},className:"min-w-32 w-full "+e.classname,children:(0,g.Iu)(e.text)}):(0,s.jsxs)("div",{className:"flex justify-between p-4 items-center"+$(e.options.border)+" "+e.classname,children:[(0,s.jsxs)("div",{className:"flex flex-col gap-1 pr-12",children:[(0,s.jsx)("p",{className:"font-semibold",children:(0,g.Iu)(e.title)}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,g.Iu)(e.description)})]}),(0,s.jsx)(f.z,{variant:"outline",onClick:()=>{(0,i.iq)(n,e.options.target,[],{}).then(()=>{m.Am.success((0,g.Iu)("Success"),{duration:500})})},className:"min-w-32",children:(0,g.Iu)(e.text)})]}),H=e=>{let t=e.value,n=e.min,a=e.max;return(0,s.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,s.jsx)(j.E,{value:(t-n)/(a-n)*100}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,g.Iu)(e.description)})]})},M=()=>(0,s.jsxs)("div",{className:"flex justify-between p-4 items-center border rounded-md backdrop-blur-md gap-10",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{children:"Please enable the plugin."}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"This plugin is disabled. Enable it to access the rest of this plugin's settings."})]}),(0,s.jsxs)(f.z,{variant:"outline",onClick:()=>{(0,i.TN)(n).then(()=>{m.Am.success("Plugin enabled",{duration:500})})},className:"min-w-32",children:["Enable ",n]})]}),$=e=>e?" p-4 border rounded-md":"",L=e=>{Array.isArray(e)||(e=[e]);let t=[];for(let n of e){let e=Object.keys(n)[0],a=n[e];"enabled_lock"==e&&(h?t.push(L(a.components)):t.push((0,s.jsxs)("div",{className:"w-full relative",children:[(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center z-10 w-full",children:(0,s.jsx)(M,{})}),(0,s.jsx)("div",{className:"p-3 opacity-50 blur-xs",children:L(a.components)})]}))),"title"==e&&t.push(P(a)),"description"==e&&t.push(J(a)),"label"==e&&t.push(Z(a)),"link"==e&&t.push(O(a)),"markdown"==e&&t.push(G(a.text)),"separator"==e&&t.push(X()),"space"==e&&t.push(q(a.height)),"group"==e&&("horizontal"==a.direction?t.push((0,s.jsx)("div",{className:"flex w-full overflow-x-auto rounded-md"+$(a.border)+" "+a.classname,style:{gap:a.gap+"px",padding:a.padding+"px"},children:L(a.components)})):t.push((0,s.jsx)("div",{className:"flex flex-col overflow-x-auto w-full rounded-md"+$(a.border)+" "+a.classname,style:{gap:a.gap+"px",padding:a.padding+"px"},children:L(a.components)}))),"tabview"==e&&t.push((0,s.jsxs)(v.mQ,{className:"w-full",defaultValue:a.components[0].tab.name,children:[(0,s.jsx)(v.dr,{className:"w-full bg-transparent p-0",children:a.components.map((e,t)=>(0,s.jsx)(v.SP,{value:e.tab.name,children:(0,g.Iu)(e.tab.name)},t))}),(0,s.jsx)(y.M,{children:a.components.map((e,t)=>(0,s.jsx)(v.nU,{value:e.tab.name,className:"w-full rounded-md p-0 pt-4 flex gap-6 flex-col data-[state=inactive]:hidden",children:L(e)},t))})]})),"tab"==e&&t.push(L(a.components)),"padding"==e&&t.push((0,s.jsx)("div",{style:{padding:a.padding},children:L(a.components)})),"tooltip"==e&&t.push((0,s.jsxs)(u.u,{children:[(0,s.jsx)(u.aJ,{children:L(a.components)}),(0,s.jsx)(u._v,{className:a.classname,style:{whiteSpace:"pre-wrap"},children:G(a.text,!0)})]})),"geist"==e&&t.push((0,s.jsx)("div",{className:"flex flex-col gap-4 font-geist",children:L(a.components)})),"progress_bar"==e&&t.push(H(a)),"button"==e&&t.push(Y(a)),"input"==e&&t.push(F(a)),"slider"==e&&t.push(D(a)),"switch"==e&&t.push(U(a)),"toggle"==e&&t.push(Q(a)),"selector"==e&&t.push(B(a))}return t};return(0,s.jsx)(u.pn,{delayDuration:0,children:(0,s.jsxs)("div",{className:"text-left flex flex-col w-full max-w-[calc(60vw-64px)] gap-6 relative "+_,children:[L(t),(0,s.jsx)("div",{className:"h-12"})]})})}},54224:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(57437),a=n(35182),r=n(42306),i=n(63861),o=n(48614),l=n(44363),d=n(2265),c=n(69711);function u(e){let{url:t,className:n}=e,[u,p]=(0,d.useState)(1e3),[f,m]=(0,d.useState)(!1),[x,h]=(0,d.useState)(Date.now()),[g,b]=(0,d.useState)(!1),{data:v}=(0,i.ZP)("page "+t,()=>(0,r.qT)(t),{refreshInterval:u});return(0,d.useEffect)(()=>{v&&(b(!0),console.log(v)),v&&v[1]&&"refresh_rate"in v[1]&&p(1e3*v[1].refresh_rate)},[v]),(0,d.useEffect)(()=>{h(Date.now()),setTimeout(()=>{m(!0)},3e3)},[]),(0,s.jsx)(o.M,{mode:"wait",children:!g&&(0,s.jsxs)(l.E.div,{className:"w-full h-full flex flex-col items-center justify-center gap-2 font-geist",layout:!0,exit:{opacity:0},transition:{duration:Date.now()-x>.5&&.25||0},children:[(0,s.jsx)(c.Z,{className:"opacity-50"}),(0,s.jsxs)("p",{className:"text-muted-foreground text-xs text-center",children:["Fetching page...",f&&(0,s.jsx)(l.E.p,{className:"text-muted-foreground text-xs",initial:{opacity:0,height:0},animate:{opacity:1,height:15},transition:{duration:.4},children:"This page might not exist, or it has an error loading."})]})]},"loading")||v&&(0,s.jsx)(l.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:Date.now()-x>.5&&.6||0},children:(0,s.jsx)(a.j,{plugin:v[0].settings,data:v,enabled:!0,className:n})},"page")})}},19060:function(e,t,n){n.d(t,{X:function(){return o}});var s=n(57437);n(2265);var a=n(9270),r=n(30401),i=n(94508);function o(e){let{className:t,...n}=e;return(0,s.jsx)(a.fC,{"data-slot":"checkbox",className:(0,i.cn)("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",t),...n,children:(0,s.jsx)(a.z$,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:(0,s.jsx)(r.Z,{className:"size-3.5"})})})}},95186:function(e,t,n){n.d(t,{I:function(){return r}});var s=n(57437);n(2265);var a=n(94508);function r(e){let{className:t,type:n,...r}=e;return(0,s.jsx)("input",{type:n,"data-slot":"input",className:(0,a.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t),...r})}},32759:function(e,t,n){n.d(t,{E:function(){return i}});var s=n(57437);n(2265);var a=n(60610),r=n(94508);function i(e){let{className:t,value:n,...i}=e;return(0,s.jsx)(a.fC,{"data-slot":"progress",className:(0,r.cn)("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",t),...i,children:(0,s.jsx)(a.z$,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:"translateX(-".concat(100-(n||0),"%)")}})})}},53647:function(e,t,n){n.d(t,{Bw:function(){return p},Ph:function(){return d},Ql:function(){return f},i4:function(){return u},ki:function(){return c}});var s=n(57437);n(2265);var a=n(56873),r=n(40875),i=n(30401),o=n(22135),l=n(94508);function d(e){let{...t}=e;return(0,s.jsx)(a.fC,{"data-slot":"select",...t})}function c(e){let{...t}=e;return(0,s.jsx)(a.B4,{"data-slot":"select-value",...t})}function u(e){let{className:t,size:n="default",children:i,...o}=e;return(0,s.jsxs)(a.xz,{"data-slot":"select-trigger","data-size":n,className:(0,l.cn)("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...o,children:[i,(0,s.jsx)(a.JO,{asChild:!0,children:(0,s.jsx)(r.Z,{className:"size-4 opacity-50"})})]})}function p(e){let{className:t,children:n,position:r="popper",...i}=e;return(0,s.jsx)(a.h_,{children:(0,s.jsxs)(a.VY,{"data-slot":"select-content",className:(0,l.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:r,...i,children:[(0,s.jsx)(m,{}),(0,s.jsx)(a.l_,{className:(0,l.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:n}),(0,s.jsx)(x,{})]})})}function f(e){let{className:t,children:n,...r}=e;return(0,s.jsxs)(a.ck,{"data-slot":"select-item",className:(0,l.cn)("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",t),...r,children:[(0,s.jsx)("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:(0,s.jsx)(a.wU,{children:(0,s.jsx)(i.Z,{className:"size-4"})})}),(0,s.jsx)(a.eT,{children:n})]})}function m(e){let{className:t,...n}=e;return(0,s.jsx)(a.u_,{"data-slot":"select-scroll-up-button",className:(0,l.cn)("flex cursor-default items-center justify-center py-1",t),...n,children:(0,s.jsx)(o.Z,{className:"size-4"})})}function x(e){let{className:t,...n}=e;return(0,s.jsx)(a.$G,{"data-slot":"select-scroll-down-button",className:(0,l.cn)("flex cursor-default items-center justify-center py-1",t),...n,children:(0,s.jsx)(r.Z,{className:"size-4"})})}},6512:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(57437);n(2265);var a=n(55156),r=n(94508);function i(e){let{className:t,orientation:n="horizontal",decorative:i=!0,...o}=e;return(0,s.jsx)(a.f,{"data-slot":"separator-root",decorative:i,orientation:n,className:(0,r.cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",t),...o})}},93022:function(e,t,n){n.d(t,{O:function(){return r}});var s=n(57437),a=n(94508);function r(e){let{className:t,...n}=e;return(0,s.jsx)("div",{"data-slot":"skeleton",className:(0,a.cn)("bg-accent animate-pulse rounded-md",t),...n})}},85897:function(e,t,n){n.d(t,{i:function(){return o}});var s=n(57437),a=n(2265),r=n(38846),i=n(94508);function o(e){let{className:t,defaultValue:n,value:o,min:l=0,max:d=100,...c}=e,u=a.useMemo(()=>Array.isArray(o)?o:Array.isArray(n)?n:[l,d],[o,n,l,d]);return(0,s.jsxs)(r.fC,{"data-slot":"slider",defaultValue:n,value:o,min:l,max:d,className:(0,i.cn)("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",t),...c,children:[(0,s.jsx)(r.fQ,{"data-slot":"slider-track",className:(0,i.cn)("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),children:(0,s.jsx)(r.e6,{"data-slot":"slider-range",className:(0,i.cn)("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")})}),Array.from({length:u.length},(e,t)=>(0,s.jsx)(r.bU,{"data-slot":"slider-thumb",className:"border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"},t))]})}},1828:function(e,t,n){n.d(t,{r:function(){return i}});var s=n(57437);n(2265);var a=n(50721),r=n(94508);function i(e){let{className:t,...n}=e;return(0,s.jsx)(a.fC,{"data-slot":"switch",className:(0,r.cn)("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",t),...n,children:(0,s.jsx)(a.bU,{"data-slot":"switch-thumb",className:(0,r.cn)("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")})})}},12339:function(e,t,n){n.d(t,{SP:function(){return l},dr:function(){return o},mQ:function(){return i},nU:function(){return d}});var s=n(57437);n(2265);var a=n(20271),r=n(94508);function i(e){let{className:t,...n}=e;return(0,s.jsx)(a.fC,{"data-slot":"tabs",className:(0,r.cn)("flex flex-col gap-2",t),...n})}function o(e){let{className:t,...n}=e;return(0,s.jsx)(a.aV,{"data-slot":"tabs-list",className:(0,r.cn)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",t),...n})}function l(e){let{className:t,...n}=e;return(0,s.jsx)(a.xz,{"data-slot":"tabs-trigger",className:(0,r.cn)("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...n})}function d(e){let{className:t,...n}=e;return(0,s.jsx)(a.VY,{"data-slot":"tabs-content",className:(0,r.cn)("flex-1 outline-none",t),...n})}},81103:function(e,t,n){n.d(t,{_v:function(){return d},aJ:function(){return l},pn:function(){return i},u:function(){return o}});var s=n(57437);n(2265);var a=n(61312),r=n(94508);function i(e){let{delayDuration:t=0,...n}=e;return(0,s.jsx)(a.zt,{"data-slot":"tooltip-provider",delayDuration:t,...n})}function o(e){let{...t}=e;return(0,s.jsx)(i,{children:(0,s.jsx)(a.fC,{"data-slot":"tooltip",...t})})}function l(e){let{...t}=e;return(0,s.jsx)(a.xz,{"data-slot":"tooltip-trigger",...t})}function d(e){let{className:t,sideOffset:n=0,children:i,...o}=e;return(0,s.jsx)(a.h_,{children:(0,s.jsx)(a.VY,{"data-slot":"tooltip-content",sideOffset:n,className:(0,r.cn)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",t),...o,children:i})})}}}]);