(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{36911:function(e,t,n){Promise.resolve().then(n.bind(n,77457))},42306:function(e,t,n){"use strict";n.d(t,{$3:function(){return i},A2:function(){return c},BN:function(){return s},Bx:function(){return d},CX:function(){return g},D1:function(){return w},DK:function(){return j},TN:function(){return f},UP:function(){return r},Xm:function(){return m},ZX:function(){return p},ip:function(){return a},iq:function(){return h},qT:function(){return y},r5:function(){return u},sm:function(){return o},ue:function(){return x},wx:function(){return l}});let a="localhost";async function r(){console.log("Checking for update");let e=await fetch("http://"+a+":37520/backend/updates");return await e.json()}async function s(){console.log("Updating");let e=await fetch("http://"+a+":37520/backend/update");await e.json()}async function o(){console.log("Closing backend");let e=await fetch("http://"+a+":37520/backend/quit");await e.json()}async function l(){console.log("Minimizing backend");let e=await fetch("http://"+a+":37520/window/minimize");await e.json()}async function i(){let e=await fetch("http://"+a+":37520/backend/plugins");return await e.json()}async function c(){let e=await fetch("http://"+a+":37520/backend/statistics");return await e.json()}async function d(){let e=await fetch("http://"+a+":37520/backend/plugins/states");return await e.json()}async function u(e){console.log("Disabling plugin");let t=await fetch("http://"+a+":37520/backend/plugins/".concat(e,"/disable"));await t.json()}async function f(e){console.log("Enabling plugin");let t=await fetch("http://"+a+":37520/backend/plugins/".concat(e,"/enable"));await t.json()}async function p(){let e=await fetch("http://".concat(a,":37520/api/metadata"));return await e.json()}async function h(e,t,n,r){console.log(t);let s=await fetch("http://".concat(a,":37520/backend/plugins/").concat(e,"/function/call"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target:t,args:n,kwargs:r})});return await s.json()}async function m(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=await fetch("http://".concat(a,":37520/window/stay_on_top/").concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});return await t.json()}async function x(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=await fetch("http://".concat(a,":37520/window/transparency/").concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});return await t.json()}async function g(){let e=await fetch("http://".concat(a,":37520/api/language"),{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()}async function y(e){let t=await fetch("http://".concat(a,":37520/api/page"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:e})});return await t.json()}async function j(){let e=await fetch("http://".concat(a,":37520/backend/devmode"),{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()}async function w(){let e=await fetch("http://".concat(a,":37520/api/plugins/reload"),{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()}},77457:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var a=n(57437),r=n(2265),s=n(47625),o=n(8147),l=n(22190),i=n(94508);let c={light:"",dark:".dark"},d=r.createContext(null);function u(){let e=r.useContext(d);if(!e)throw Error("useChart must be used within a <ChartContainer />");return e}let f=r.forwardRef((e,t)=>{let{id:n,className:o,children:l,config:c,...u}=e,f=r.useId(),h="chart-".concat(n||f.replace(/:/g,""));return(0,a.jsx)(d.Provider,{value:{config:c},children:(0,a.jsxs)("div",{"data-chart":h,ref:t,className:(0,i.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",o),...u,children:[(0,a.jsx)(p,{id:h,config:c}),(0,a.jsx)(s.h,{children:l})]})})});f.displayName="Chart";let p=e=>{let{id:t,config:n}=e,r=Object.entries(n).filter(e=>{let[t,n]=e;return n.theme||n.color});return r.length?(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(c).map(e=>{let[n,a]=e;return"\n".concat(a," [data-chart=").concat(t,"] {\n").concat(r.map(e=>{var t;let[a,r]=e,s=(null===(t=r.theme)||void 0===t?void 0:t[n])||r.color;return s?"  --color-".concat(a,": ").concat(s,";"):null}).join("\n"),"\n}\n")}).join("\n")}}):null},h=o.u,m=r.forwardRef((e,t)=>{let{active:n,payload:s,className:o,indicator:l="dot",hideLabel:c=!1,hideIndicator:d=!1,label:f,labelFormatter:p,labelClassName:h,formatter:m,color:g,nameKey:y,labelKey:j}=e,{config:w}=u(),b=r.useMemo(()=>{var e;if(c||!(null==s?void 0:s.length))return null;let[t]=s,n="".concat(j||t.dataKey||t.name||"value"),r=x(w,t,n),o=j||"string"!=typeof f?null==r?void 0:r.label:(null===(e=w[f])||void 0===e?void 0:e.label)||f;return p?(0,a.jsx)("div",{className:(0,i.cn)("font-medium",h),children:p(o,s)}):o?(0,a.jsx)("div",{className:(0,i.cn)("font-medium",h),children:o}):null},[f,p,s,c,h,w,j]);if(!n||!(null==s?void 0:s.length))return null;let v=1===s.length&&"dot"!==l;return(0,a.jsxs)("div",{ref:t,className:(0,i.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",o),children:[v?null:b,(0,a.jsx)("div",{className:"grid gap-1.5",children:s.map((e,t)=>{let n="".concat(y||e.name||e.dataKey||"value"),r=x(w,e,n),s=g||e.payload.fill||e.color;return(0,a.jsx)("div",{className:(0,i.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground","dot"===l&&"items-center"),children:m&&(null==e?void 0:e.value)!==void 0&&e.name?m(e.value,e.name,e,t,e.payload):(0,a.jsxs)(a.Fragment,{children:[(null==r?void 0:r.icon)?(0,a.jsx)(r.icon,{}):!d&&(0,a.jsx)("div",{className:(0,i.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":"dot"===l,"w-1":"line"===l,"w-0 border-[1.5px] border-dashed bg-transparent":"dashed"===l,"my-0.5":v&&"dashed"===l}),style:{"--color-bg":s,"--color-border":s}}),(0,a.jsxs)("div",{className:(0,i.cn)("flex flex-1 gap-2 justify-between leading-none",v?"items-end":"items-center"),children:[(0,a.jsxs)("div",{className:"grid gap-1.5",children:[v?b:null,(0,a.jsx)("span",{className:"text-muted-foreground",children:(null==r?void 0:r.label)||e.name})]}),e.value&&(0,a.jsx)("span",{className:"font-mono font-medium tabular-nums text-foreground",children:e.value.toLocaleString()})]})]})},e.dataKey)})})]})});function x(e,t,n){if("object"!=typeof t||null===t)return;let a="payload"in t&&"object"==typeof t.payload&&null!==t.payload?t.payload:void 0,r=n;return n in t&&"string"==typeof t[n]?r=t[n]:a&&n in a&&"string"==typeof a[n]&&(r=a[n]),r in e?e[r]:e[n]}m.displayName="ChartTooltip",l.D,r.forwardRef((e,t)=>{let{className:n,hideIcon:r=!1,payload:s,verticalAlign:o="bottom",nameKey:l}=e,{config:c}=u();return(null==s?void 0:s.length)?(0,a.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center justify-center gap-4","top"===o?"pb-3":"pt-3",n),children:s.map(e=>{let t="".concat(l||e.dataKey||"value"),n=x(c,e,t);return(0,a.jsxs)("div",{className:(0,i.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),children:[(null==n?void 0:n.icon)&&!r?(0,a.jsx)(n.icon,{}):(0,a.jsx)("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:e.color}}),null==n?void 0:n.label]},e.value)})}):null}).displayName="ChartLegend";var g=n(42306),y=n(5481),j=n(56940),w=n(97059),b=n(62994),v=n(23263),N=n(75169),k=n(3574),C=n(26680),_=n(63861),A=n(53647),T=n(61312);let R={};function O(){let{data:e,isLoading:t,error:n}=(0,_.ZP)("statistics",g.A2,{refreshInterval:1e3}),[s,o]=(0,r.useState)("Please select a plugin");if(n)return(0,a.jsxs)("div",{className:"w-full h-full font-geist pl-28 pr-20 pt-20 flex flex-col gap-6 border",children:[(0,a.jsx)("div",{className:"text-2xl font-bold",children:"Error"}),(0,a.jsx)("div",{className:"text-lg",children:"An error occurred while fetching the statistics."})]});if(t)return(0,a.jsxs)("div",{className:"w-full h-full font-geist pl-28 pr-20 pt-20 flex flex-col gap-6 border",children:[(0,a.jsx)("div",{className:"text-2xl font-bold",children:"Loading"}),(0,a.jsx)("div",{className:"text-lg",children:"Fetching the statistics..."})]});let l=null==e?void 0:e.global,i=null==e?void 0:e.plugins,c=Object.keys(i),d=Object.keys(i).map(e=>({name:e,memory:i[e].memory[i[e].memory.length-1],cpu:i[e].cpu[i[e].cpu.length-1],performance:i[e].performance[i[e].performance.length-1]})),u=l.ram.python-d.reduce((e,t)=>e+t.memory,0),p=l.cpu.python,x=d.reduce((e,t)=>e+t.cpu,0);d=[{name:"Other",memory:l.ram.other,cpu:l.cpu.other,performance:0},{name:"Frontend",memory:l.ram.node,cpu:l.cpu.node,performance:0},{name:"Backend",memory:u,cpu:p,performance:0},...d,{name:"Free",memory:l.ram.free,cpu:100-x,performance:0}];let O=(e,t)=>0==e?"#6c757d":1==e?"#00b4d8 ":2==e?"#00b4d8 ":e==t-1?"#50C878":(e-=2,"#FFA500"),P=d.map((e,t)=>({...e,fill:O(t,d.length)})),K=i[s];return void 0!=K&&(K={...K,metrics:K.memory.map((e,t)=>({time:t,ram:K.memory[t]||0,cpu:K.cpu[t]||0,fps:K.performance&&K.performance.length>t&&1/K.performance[t][1]||0}))}),(0,a.jsxs)("div",{className:"w-full h-full font-geist flex flex-col gap-6 p-10 relative",children:[(0,a.jsx)(f,{config:R,className:"absolute w-72 h-72 -my-8",children:(0,a.jsxs)(N.u,{width:300,height:300,children:[(0,a.jsx)(k.b,{data:P,dataKey:"memory",nameKey:"name",innerRadius:90,outerRadius:110,paddingAngle:2,cornerRadius:5,children:(0,a.jsx)(C._,{content:e=>{let{viewBox:t}=e;if(t&&"cx"in t&&"cy"in t)return(0,a.jsxs)("text",{x:t.cx,y:t.cy,textAnchor:"middle",dominantBaseline:"middle",children:[(0,a.jsxs)("tspan",{x:t.cx,y:t.cy,className:"fill-foreground text-3xl font-bold",children:[Math.round((100-l.ram.free)*10)/10,"%"]}),(0,a.jsx)("tspan",{x:t.cx,y:(t.cy||0)+24,className:"fill-muted-foreground",children:"Total RAM %"})]})}})}),(0,a.jsx)(h,{content:(0,a.jsx)(m,{className:"",indicator:"line"}),formatter:(e,t)=>"".concat(t," - ").concat(Math.round(10*e)/10+"%")}),(0,a.jsx)(T.u,{})]})}),(0,a.jsx)(f,{config:R,className:"absolute w-72 h-72 -my-8 right-12",children:(0,a.jsxs)(N.u,{width:300,height:300,children:[(0,a.jsx)(k.b,{data:P,dataKey:"cpu",nameKey:"name",innerRadius:90,outerRadius:110,paddingAngle:2,cornerRadius:5,children:(0,a.jsx)(C._,{content:e=>{let{viewBox:t}=e;if(t&&"cx"in t&&"cy"in t)return(0,a.jsxs)("text",{x:t.cx,y:t.cy,textAnchor:"middle",dominantBaseline:"middle",children:[(0,a.jsxs)("tspan",{x:t.cx,y:t.cy,className:"fill-foreground text-3xl font-bold",children:[Math.round(10*x)/10,"%"]}),(0,a.jsx)("tspan",{x:t.cx,y:(t.cy||0)+24,className:"fill-muted-foreground",style:{whiteSpace:"pre-line"},children:"~ ETS2LA CPU %"})]})}})}),(0,a.jsx)(h,{content:(0,a.jsx)(m,{className:"",indicator:"line"}),formatter:(e,t)=>"".concat(t," - ").concat(Math.round(10*e)/10+"%")}),(0,a.jsx)(T.u,{})]})}),(0,a.jsxs)("div",{className:"w-full h-full flex flex-col gap-6 pt-64",children:[(0,a.jsxs)(A.Ph,{value:s,onValueChange:o,children:[(0,a.jsx)(A.i4,{className:"w-72",children:(0,a.jsx)(A.ki,{children:s||"Select a plugin"})}),(0,a.jsx)(A.Bw,{className:"bg-background font-geist",children:c.map(e=>(0,a.jsx)(A.Ql,{value:e,children:e},e))})]}),void 0==K?(0,a.jsx)("div",{className:"w-full h-96 border rounded-md",children:(0,a.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,a.jsx)("div",{className:"text-2xl font-bold",children:"Select a plugin"})})}):(0,a.jsx)(f,{config:R,className:"w-full h-80 border rounded-md",children:(0,a.jsxs)(y.T,{data:K.metrics,margin:{top:10,right:10,left:10,bottom:0},children:[(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"fillRAM",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"#8884d8",stopOpacity:.8}),(0,a.jsx)("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})]}),(0,a.jsxs)("linearGradient",{id:"fillCPU",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"5%",stopColor:"#82ca9d",stopOpacity:.8}),(0,a.jsx)("stop",{offset:"95%",stopColor:"#82ca9d",stopOpacity:0})]}),(0,a.jsxs)("linearGradient",{id:"fillPerformance",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"5%",stopColor:"#ff7300",stopOpacity:.8}),(0,a.jsx)("stop",{offset:"95%",stopColor:"#ff7300",stopOpacity:0})]})]}),(0,a.jsx)(j.q,{strokeDasharray:"3 3"}),(0,a.jsx)(w.K,{dataKey:"time",tickCount:6}),(0,a.jsx)(b.B,{yAxisId:"left",label:{value:"RAM/CPU %",angle:-90,position:"insideLeft",offset:0,style:{textAnchor:"middle"},dx:6},width:40}),(0,a.jsx)(b.B,{yAxisId:"right",orientation:"right",label:{value:"FPS",angle:90,position:"insideRight",offset:0,style:{textAnchor:"middle"},dx:-6},width:40}),(0,a.jsx)(v.u,{type:"monotone",dataKey:"ram",stroke:"#8884d8",fill:"url(#fillRAM)",yAxisId:"left"}),(0,a.jsx)(v.u,{type:"monotone",dataKey:"cpu",stroke:"#82ca9d",fill:"url(#fillCPU)",yAxisId:"left"}),(0,a.jsx)(v.u,{type:"monotone",dataKey:"fps",stroke:"#ff7300",fill:"url(#fillPerformance)",yAxisId:"right"}),(0,a.jsx)(h,{content:(0,a.jsx)(m,{className:"",indicator:"line"})})]})})]})]})}},53647:function(e,t,n){"use strict";n.d(t,{Bw:function(){return p},Ph:function(){return i},Ql:function(){return h},i4:function(){return d},ki:function(){return c}});var a=n(57437),r=n(2265),s=n(20653),o=n(56873),l=n(94508);let i=o.fC;o.ZA;let c=o.B4,d=r.forwardRef((e,t)=>{let{className:n,children:r,...i}=e;return(0,a.jsxs)(o.xz,{ref:t,className:(0,l.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",n),...i,children:[r,(0,a.jsx)(o.JO,{asChild:!0,children:(0,a.jsx)(s.jnn,{className:"h-4 w-4 opacity-50"})})]})});d.displayName=o.xz.displayName;let u=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(o.u_,{ref:t,className:(0,l.cn)("flex cursor-default items-center justify-center py-1",n),...r,children:(0,a.jsx)(s.g8U,{})})});u.displayName=o.u_.displayName;let f=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(o.$G,{ref:t,className:(0,l.cn)("flex cursor-default items-center justify-center py-1",n),...r,children:(0,a.jsx)(s.v4q,{})})});f.displayName=o.$G.displayName;let p=r.forwardRef((e,t)=>{let{className:n,children:r,position:s="popper",...i}=e;return(0,a.jsx)(o.h_,{children:(0,a.jsxs)(o.VY,{ref:t,className:(0,l.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:s,...i,children:[(0,a.jsx)(u,{}),(0,a.jsx)(o.l_,{className:(0,l.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,a.jsx)(f,{})]})})});p.displayName=o.VY.displayName,r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(o.__,{ref:t,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",n),...r})}).displayName=o.__.displayName;let h=r.forwardRef((e,t)=>{let{className:n,children:r,...i}=e;return(0,a.jsxs)(o.ck,{ref:t,className:(0,l.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...i,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(o.wU,{children:(0,a.jsx)(s.nQG,{className:"h-4 w-4"})})}),(0,a.jsx)(o.eT,{children:r})]})});h.displayName=o.ck.displayName,r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(o.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",n),...r})}).displayName=o.Z0.displayName},94508:function(e,t,n){"use strict";n.d(t,{cn:function(){return s}});var a=n(61994),r=n(53335);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,a.W)(t))}}},function(e){e.O(0,[310,317,861,312,396,899,819,971,117,744],function(){return e(e.s=36911)}),_N_E=e.O()}]);