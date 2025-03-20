(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{36911:function(e,t,n){Promise.resolve().then(n.bind(n,77457))},42306:function(e,t,n){"use strict";n.d(t,{$3:function(){return l},A2:function(){return c},BN:function(){return s},Bx:function(){return d},CX:function(){return g},D1:function(){return v},DK:function(){return y},TN:function(){return f},UP:function(){return r},Xm:function(){return m},ZX:function(){return h},ip:function(){return a},iq:function(){return p},qT:function(){return j},r5:function(){return u},sm:function(){return o},ue:function(){return x},wx:function(){return i}});let a="localhost";async function r(){console.log("Checking for update");let e=await fetch("http://"+a+":37520/backend/updates");return await e.json()}async function s(){console.log("Updating");let e=await fetch("http://"+a+":37520/backend/update");await e.json()}async function o(){console.log("Closing backend");let e=await fetch("http://"+a+":37520/backend/quit");await e.json()}async function i(){console.log("Minimizing backend");let e=await fetch("http://"+a+":37520/window/minimize");await e.json()}async function l(){let e=await fetch("http://"+a+":37520/backend/plugins");return await e.json()}async function c(){let e=await fetch("http://"+a+":37520/backend/statistics");return await e.json()}async function d(){let e=await fetch("http://"+a+":37520/backend/plugins/states");return await e.json()}async function u(e){console.log("Disabling plugin");let t=await fetch("http://"+a+":37520/backend/plugins/".concat(e,"/disable"));await t.json()}async function f(e){console.log("Enabling plugin");let t=await fetch("http://"+a+":37520/backend/plugins/".concat(e,"/enable"));await t.json()}async function h(){let e=await fetch("http://".concat(a,":37520/api/metadata"));return await e.json()}async function p(e,t,n,r){console.log(t);let s=await fetch("http://".concat(a,":37520/backend/plugins/").concat(e,"/function/call"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target:t,args:n,kwargs:r})});return await s.json()}async function m(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=await fetch("http://".concat(a,":37520/window/stay_on_top/").concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});return await t.json()}async function x(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=await fetch("http://".concat(a,":37520/window/transparency/").concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});return await t.json()}async function g(){let e=await fetch("http://".concat(a,":37520/api/language"),{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()}async function j(e){let t=await fetch("http://".concat(a,":37520/api/page"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:e})});return await t.json()}async function y(){let e=await fetch("http://".concat(a,":37520/backend/devmode"),{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()}async function v(){let e=await fetch("http://".concat(a,":37520/api/plugins/reload"),{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()}},77457:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var a=n(57437),r=n(2265),s=n(47625),o=n(8147),i=n(22190),l=n(94508);let c={light:"",dark:".dark"},d=r.createContext(null);function u(e){let{id:t,className:n,children:o,config:i,...c}=e,u=r.useId(),h="chart-".concat(t||u.replace(/:/g,""));return(0,a.jsx)(d.Provider,{value:{config:i},children:(0,a.jsxs)("div",{"data-slot":"chart","data-chart":h,className:(0,l.cn)("[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",n),...c,children:[(0,a.jsx)(f,{id:h,config:i}),(0,a.jsx)(s.h,{children:o})]})})}let f=e=>{let{id:t,config:n}=e,r=Object.entries(n).filter(e=>{let[,t]=e;return t.theme||t.color});return r.length?(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(c).map(e=>{let[n,a]=e;return"\n".concat(a," [data-chart=").concat(t,"] {\n").concat(r.map(e=>{var t;let[a,r]=e,s=(null===(t=r.theme)||void 0===t?void 0:t[n])||r.color;return s?"  --color-".concat(a,": ").concat(s,";"):null}).join("\n"),"\n}\n")}).join("\n")}}):null},h=o.u;function p(e){let{active:t,payload:n,className:s,indicator:o="dot",hideLabel:i=!1,hideIndicator:c=!1,label:u,labelFormatter:f,labelClassName:h,formatter:p,color:x,nameKey:g,labelKey:j}=e,{config:y}=function(){let e=r.useContext(d);if(!e)throw Error("useChart must be used within a <ChartContainer />");return e}(),v=r.useMemo(()=>{var e;if(i||!(null==n?void 0:n.length))return null;let[t]=n,r="".concat(j||(null==t?void 0:t.dataKey)||(null==t?void 0:t.name)||"value"),s=m(y,t,r),o=j||"string"!=typeof u?null==s?void 0:s.label:(null===(e=y[u])||void 0===e?void 0:e.label)||u;return f?(0,a.jsx)("div",{className:(0,l.cn)("font-medium",h),children:f(o,n)}):o?(0,a.jsx)("div",{className:(0,l.cn)("font-medium",h),children:o}):null},[u,f,n,i,h,y,j]);if(!t||!(null==n?void 0:n.length))return null;let b=1===n.length&&"dot"!==o;return(0,a.jsxs)("div",{className:(0,l.cn)("border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",s),children:[b?null:v,(0,a.jsx)("div",{className:"grid gap-1.5",children:n.map((e,t)=>{let n="".concat(g||e.name||e.dataKey||"value"),r=m(y,e,n),s=x||e.payload.fill||e.color;return(0,a.jsx)("div",{className:(0,l.cn)("[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5","dot"===o&&"items-center"),children:p&&(null==e?void 0:e.value)!==void 0&&e.name?p(e.value,e.name,e,t,e.payload):(0,a.jsxs)(a.Fragment,{children:[(null==r?void 0:r.icon)?(0,a.jsx)(r.icon,{}):!c&&(0,a.jsx)("div",{className:(0,l.cn)("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",{"h-2.5 w-2.5":"dot"===o,"w-1":"line"===o,"w-0 border-[1.5px] border-dashed bg-transparent":"dashed"===o,"my-0.5":b&&"dashed"===o}),style:{"--color-bg":s,"--color-border":s}}),(0,a.jsxs)("div",{className:(0,l.cn)("flex flex-1 justify-between leading-none",b?"items-end":"items-center"),children:[(0,a.jsxs)("div",{className:"grid gap-1.5",children:[b?v:null,(0,a.jsx)("span",{className:"text-muted-foreground",children:(null==r?void 0:r.label)||e.name})]}),e.value&&(0,a.jsx)("span",{className:"text-foreground font-mono font-medium tabular-nums",children:e.value.toLocaleString()})]})]})},e.dataKey)})})]})}function m(e,t,n){if("object"!=typeof t||null===t)return;let a="payload"in t&&"object"==typeof t.payload&&null!==t.payload?t.payload:void 0,r=n;return n in t&&"string"==typeof t[n]?r=t[n]:a&&n in a&&"string"==typeof a[n]&&(r=a[n]),r in e?e[r]:e[n]}i.D;var x=n(42306),g=n(5481),j=n(56940),y=n(97059),v=n(62994),b=n(23263),w=n(75169),k=n(3574),N=n(26680),_=n(63861),C=n(53647),A=n(61312);let T={};function z(){let{data:e,isLoading:t,error:n}=(0,_.ZP)("statistics",x.A2,{refreshInterval:1e3}),[s,o]=(0,r.useState)("Please select a plugin");if(n)return(0,a.jsxs)("div",{className:"w-full h-full font-geist pl-28 pr-20 pt-20 flex flex-col gap-6 border",children:[(0,a.jsx)("div",{className:"text-2xl font-bold",children:"Error"}),(0,a.jsx)("div",{className:"text-lg",children:"An error occurred while fetching the statistics."})]});if(t)return(0,a.jsxs)("div",{className:"w-full h-full font-geist pl-28 pr-20 pt-20 flex flex-col gap-6 border",children:[(0,a.jsx)("div",{className:"text-2xl font-bold",children:"Loading"}),(0,a.jsx)("div",{className:"text-lg",children:"Fetching the statistics..."})]});let i=null==e?void 0:e.global,l=null==e?void 0:e.plugins,c=Object.keys(l),d=Object.keys(l).map(e=>({name:e,memory:l[e].memory[l[e].memory.length-1],cpu:l[e].cpu[l[e].cpu.length-1],performance:l[e].performance[l[e].performance.length-1]})),f=i.ram.python-d.reduce((e,t)=>e+t.memory,0),m=i.cpu.python,z=d.reduce((e,t)=>e+t.cpu,0);d=[{name:"Other",memory:i.ram.other,cpu:i.cpu.other,performance:0},{name:"Frontend",memory:i.ram.node,cpu:i.cpu.node,performance:0},{name:"Backend",memory:f,cpu:m,performance:0},...d,{name:"Free",memory:i.ram.free,cpu:100-z,performance:0}];let O=(e,t)=>0==e?"#6c757d":1==e?"#00b4d8 ":2==e?"#00b4d8 ":e==t-1?"#50C878":(e-=2,"#FFA500"),P=d.map((e,t)=>({...e,fill:O(t,d.length)})),K=l[s];return void 0!=K&&(K={...K,metrics:K.memory.map((e,t)=>({time:t,ram:K.memory[t]||0,cpu:K.cpu[t]||0,fps:K.performance&&K.performance.length>t&&1/K.performance[t][1]||0}))}),(0,a.jsxs)("div",{className:"w-full h-full font-geist flex flex-col gap-6 p-10 relative",children:[(0,a.jsx)(u,{config:T,className:"absolute w-72 h-72 -my-8",children:(0,a.jsxs)(w.u,{width:300,height:300,children:[(0,a.jsx)(k.b,{data:P,dataKey:"memory",nameKey:"name",innerRadius:90,outerRadius:110,paddingAngle:2,cornerRadius:5,children:(0,a.jsx)(N._,{content:e=>{let{viewBox:t}=e;if(t&&"cx"in t&&"cy"in t)return(0,a.jsxs)("text",{x:t.cx,y:t.cy,textAnchor:"middle",dominantBaseline:"middle",children:[(0,a.jsxs)("tspan",{x:t.cx,y:t.cy,className:"fill-foreground text-3xl font-bold",children:[Math.round((100-i.ram.free)*10)/10,"%"]}),(0,a.jsx)("tspan",{x:t.cx,y:(t.cy||0)+24,className:"fill-muted-foreground",children:"Total RAM %"})]})}})}),(0,a.jsx)(h,{content:(0,a.jsx)(p,{className:"",indicator:"line"}),formatter:(e,t)=>"".concat(t," - ").concat(Math.round(10*e)/10+"%")}),(0,a.jsx)(A.u,{})]})}),(0,a.jsx)(u,{config:T,className:"absolute w-72 h-72 -my-8 right-12",children:(0,a.jsxs)(w.u,{width:300,height:300,children:[(0,a.jsx)(k.b,{data:P,dataKey:"cpu",nameKey:"name",innerRadius:90,outerRadius:110,paddingAngle:2,cornerRadius:5,children:(0,a.jsx)(N._,{content:e=>{let{viewBox:t}=e;if(t&&"cx"in t&&"cy"in t)return(0,a.jsxs)("text",{x:t.cx,y:t.cy,textAnchor:"middle",dominantBaseline:"middle",children:[(0,a.jsxs)("tspan",{x:t.cx,y:t.cy,className:"fill-foreground text-3xl font-bold",children:[Math.round(10*z)/10,"%"]}),(0,a.jsx)("tspan",{x:t.cx,y:(t.cy||0)+24,className:"fill-muted-foreground",style:{whiteSpace:"pre-line"},children:"~ ETS2LA CPU %"})]})}})}),(0,a.jsx)(h,{content:(0,a.jsx)(p,{className:"",indicator:"line"}),formatter:(e,t)=>"".concat(t," - ").concat(Math.round(10*e)/10+"%")}),(0,a.jsx)(A.u,{})]})}),(0,a.jsxs)("div",{className:"w-full h-full flex flex-col gap-6 pt-64",children:[(0,a.jsxs)(C.Ph,{value:s,onValueChange:o,children:[(0,a.jsx)(C.i4,{className:"w-72",children:(0,a.jsx)(C.ki,{children:s||"Select a plugin"})}),(0,a.jsx)(C.Bw,{className:"bg-background font-geist",children:c.map(e=>(0,a.jsx)(C.Ql,{value:e,children:e},e))})]}),void 0==K?(0,a.jsx)("div",{className:"w-full h-96 border rounded-md",children:(0,a.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,a.jsx)("div",{className:"text-2xl font-bold",children:"Select a plugin"})})}):(0,a.jsx)(u,{config:T,className:"w-full h-80 border rounded-md",children:(0,a.jsxs)(g.T,{data:K.metrics,margin:{top:10,right:10,left:10,bottom:0},children:[(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"fillRAM",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"#8884d8",stopOpacity:.8}),(0,a.jsx)("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})]}),(0,a.jsxs)("linearGradient",{id:"fillCPU",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"5%",stopColor:"#82ca9d",stopOpacity:.8}),(0,a.jsx)("stop",{offset:"95%",stopColor:"#82ca9d",stopOpacity:0})]}),(0,a.jsxs)("linearGradient",{id:"fillPerformance",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"5%",stopColor:"#ff7300",stopOpacity:.8}),(0,a.jsx)("stop",{offset:"95%",stopColor:"#ff7300",stopOpacity:0})]})]}),(0,a.jsx)(j.q,{strokeDasharray:"3 3"}),(0,a.jsx)(y.K,{dataKey:"time",tickCount:6}),(0,a.jsx)(v.B,{yAxisId:"left",label:{value:"RAM/CPU %",angle:-90,position:"insideLeft",offset:0,style:{textAnchor:"middle"},dx:6},width:40}),(0,a.jsx)(v.B,{yAxisId:"right",orientation:"right",label:{value:"FPS",angle:90,position:"insideRight",offset:0,style:{textAnchor:"middle"},dx:-6},width:40}),(0,a.jsx)(b.u,{type:"monotone",dataKey:"ram",stroke:"#8884d8",fill:"url(#fillRAM)",yAxisId:"left"}),(0,a.jsx)(b.u,{type:"monotone",dataKey:"cpu",stroke:"#82ca9d",fill:"url(#fillCPU)",yAxisId:"left"}),(0,a.jsx)(b.u,{type:"monotone",dataKey:"fps",stroke:"#ff7300",fill:"url(#fillPerformance)",yAxisId:"right"}),(0,a.jsx)(h,{content:(0,a.jsx)(p,{className:"",indicator:"line"})})]})})]})]})}},53647:function(e,t,n){"use strict";n.d(t,{Bw:function(){return f},Ph:function(){return c},Ql:function(){return h},i4:function(){return u},ki:function(){return d}});var a=n(57437);n(2265);var r=n(56873),s=n(40875),o=n(30401),i=n(22135),l=n(94508);function c(e){let{...t}=e;return(0,a.jsx)(r.fC,{"data-slot":"select",...t})}function d(e){let{...t}=e;return(0,a.jsx)(r.B4,{"data-slot":"select-value",...t})}function u(e){let{className:t,size:n="default",children:o,...i}=e;return(0,a.jsxs)(r.xz,{"data-slot":"select-trigger","data-size":n,className:(0,l.cn)("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...i,children:[o,(0,a.jsx)(r.JO,{asChild:!0,children:(0,a.jsx)(s.Z,{className:"size-4 opacity-50"})})]})}function f(e){let{className:t,children:n,position:s="popper",...o}=e;return(0,a.jsx)(r.h_,{children:(0,a.jsxs)(r.VY,{"data-slot":"select-content",className:(0,l.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:s,...o,children:[(0,a.jsx)(p,{}),(0,a.jsx)(r.l_,{className:(0,l.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:n}),(0,a.jsx)(m,{})]})})}function h(e){let{className:t,children:n,...s}=e;return(0,a.jsxs)(r.ck,{"data-slot":"select-item",className:(0,l.cn)("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",t),...s,children:[(0,a.jsx)("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:(0,a.jsx)(r.wU,{children:(0,a.jsx)(o.Z,{className:"size-4"})})}),(0,a.jsx)(r.eT,{children:n})]})}function p(e){let{className:t,...n}=e;return(0,a.jsx)(r.u_,{"data-slot":"select-scroll-up-button",className:(0,l.cn)("flex cursor-default items-center justify-center py-1",t),...n,children:(0,a.jsx)(i.Z,{className:"size-4"})})}function m(e){let{className:t,...n}=e;return(0,a.jsx)(r.$G,{"data-slot":"select-scroll-down-button",className:(0,l.cn)("flex cursor-default items-center justify-center py-1",t),...n,children:(0,a.jsx)(s.Z,{className:"size-4"})})}},94508:function(e,t,n){"use strict";n.d(t,{cn:function(){return s}});var a=n(61994),r=n(53335);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,a.W)(t))}}},function(e){e.O(0,[317,861,794,39,763,819,971,117,744],function(){return e(e.s=36911)}),_N_E=e.O()}]);