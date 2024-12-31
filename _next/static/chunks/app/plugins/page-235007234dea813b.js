(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[570],{1759:function(e,t,n){Promise.resolve().then(n.bind(n,40525))},40525:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var s=n(57437),r=n(93772),i=n(63861),a=n(42306),l=n(62869),o=n(58293),d=n(30401),c=n(32489),u=n(81390),p=n(3991),f=n(95186),m=n(2265),g=n(9270),x=n(20653),h=n(94508);let b=m.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(g.fC,{ref:t,className:(0,h.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",n),...r,children:(0,s.jsx)(g.z$,{className:(0,h.cn)("flex items-center justify-center text-current"),children:(0,s.jsx)(x.nQG,{className:"h-4 w-4"})})})});b.displayName=g.fC.displayName;var N=n(35974),j=n(84190),v=n(81103),y=n(61312),I=n(44363),_=n(48614);function w(){let[e,t]=(0,m.useState)(""),[n,g]=(0,m.useState)([]),[x,h]=(0,m.useState)([]),{data:w,error:k,isLoading:C}=(0,i.ZP)("plugins",()=>(0,a.$3)(),{refreshInterval:1e3});if(C)return(0,s.jsx)("p",{className:"absolute left-5 top-5 font-semibold text-xs text-stone-400",children:(0,p.Iu)("loading")});if(k)return r.Am.error((0,p.Iu)("frontend.menubar.error_fetching_plugins",a.ip),{description:k.message}),(0,s.jsx)("p",{className:"absolute left-5 top-5 font-semibold text-xs text-stone-400",children:k.message});if(!w)return(0,s.jsx)("p",{className:"absolute left-5 top-5 font-semibold text-xs text-stone-400",children:(0,p.Iu)("frontend.menubar.error_fetching_plugins",a.ip)});console.log(w);let z=[];for(let e in w)if(isNaN(parseInt(e)))for(let t in w[e].description.tags)z.includes(w[e].description.tags[t])||z.push(w[e].description.tags[t]);let A=[];for(let e in w)if(isNaN(parseInt(e)))for(let t in w[e].authors)A.includes(w[e].authors[t].name)||A.push(w[e].authors[t].name);let R=0,T=[],O=[];for(let t in w)if(isNaN(parseInt(t))){if("Global"==t||"global_json"==t)continue;let s=(0,p.Iu)(w[t].description.name);if(""!=e&&!s.toLowerCase().includes(e.toLowerCase())){R++;continue}if(n.length>0){let e=[];for(let s in w[t].description.tags)n.includes(w[t].description.tags[s])&&e.push(w[t].description.tags[s]);if(e.length!=n.length){R++;continue}}if(x.length>0){let e=!1;for(let n in w[t].authors)x.includes(w[t].authors[n].name)&&(e=!0);if(!e){R++;continue}}w[t].enabled?T.push(t):O.push(t)}return(0,s.jsxs)(I.E.div,{className:"h-full font-geist p-2",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6},children:[(0,s.jsx)("div",{className:"flex flex-col gap-2 p-5 pb-0 pt-2",children:(0,s.jsxs)("div",{className:"flex gap-3 items-center pr-10",children:[(0,s.jsx)("p",{className:"text-lg font-semibold pr-2 min-w-20",children:(0,p.Iu)("frontend.sidebar.plugins")}),(0,s.jsx)(f.I,{placeholder:(0,p.Iu)("search"),value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)("div",{className:"p-0 h-3"})," ",(0,s.jsxs)(j.h_,{children:[(0,s.jsx)(j.$F,{asChild:!0,children:(0,s.jsx)(l.z,{variant:"outline",className:"flex text-left items-center justify-start",children:(0,s.jsx)("p",{className:n.length>0?"font-normal":"font-normal text-muted-foreground",children:n.length>0?(0,p.Iu)("frontend.plugins.selected_tags",n.length):(0,p.Iu)("frontend.plugins.select_tags")})})}),(0,s.jsx)(j.AW,{className:"w-56 bg-background font-geist",children:z.map((e,t)=>(0,s.jsx)(j.bO,{checked:n.includes(e),onClick:()=>{n.includes(e)?g(n.filter(t=>t!=e)):g([...n,e])},children:e},t))})]}),(0,s.jsxs)(j.h_,{children:[(0,s.jsx)(j.$F,{asChild:!0,children:(0,s.jsx)(l.z,{variant:"outline",className:"flex text-left items-center justify-start",children:(0,s.jsx)("p",{className:x.length>0?"font-normal":"font-normal text-muted-foreground",children:x.length>0?(0,p.Iu)("frontend.plugins.selected_authors",x.length):(0,p.Iu)("frontend.plugins.select_authors")})})}),(0,s.jsx)(j.AW,{className:"w-56 bg-background font-geist",children:A.map((e,t)=>(0,s.jsx)(j.bO,{checked:x.includes(e),onClick:()=>{x.includes(e)?h(x.filter(t=>t!=e)):h([...x,e])},children:e},t))})]}),""!=e||n.length>0||x.length>0?(0,s.jsx)(l.z,{variant:"outline",onClick:()=>{t(""),g([]),h([])},className:"text-muted-foreground font-normal",children:(0,p.Iu)("clear")}):null]})}),(0,s.jsx)("div",{className:"h-full pl-4 max-h-[calc(100vh-132px)]",children:(0,s.jsx)(v.pn,{children:(0,s.jsx)(u.pO,{direction:"horizontal",className:"text-center gap-6 pr-4 h-full",children:(0,s.jsx)(_.M,{children:(0,s.jsx)(u.ee,{defaultSize:100,className:"h-full w-full relative pt-5",children:(0,s.jsxs)(I.E.div,{className:"h-full w-full overflow-auto",layout:!0,children:[(0,s.jsxs)("div",{className:"w-full border rounded-t-md h-10 grid grid-cols-8 items-center text-left pl-12",children:[(0,s.jsx)("p",{className:"text-muted-foreground text-sm col-span-2",children:(0,p.Iu)("frontend.plugins.name")}),(0,s.jsx)("p",{className:"text-muted-foreground text-sm col-span-2",children:(0,p.Iu)("frontend.plugins.authors")}),(0,s.jsx)("p",{className:"text-muted-foreground text-sm col-span-2",children:(0,p.Iu)("frontend.plugins.tags")})]}),T.map((e,t)=>(0,s.jsxs)(I.E.div,{className:"w-full group relative border border-t-0 h-10 grid grid-cols-8 items-center text-left pl-12 cursor-pointer",layout:!0,animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},children:[(0,s.jsx)(b,{checked:w[e].enabled,onClick:()=>{w[e].enabled?r.Am.promise((0,a.r5)(e),{loading:(0,p.Iu)("frontend.plugins.disabling_plugin",(0,p.Iu)(w[e].description.name)),success:(0,p.Iu)("frontend.plugins.disabled_plugin",(0,p.Iu)(w[e].description.name)),error:(0,p.Iu)("frontend.plugins.error_disabling_plugin",(0,p.Iu)(w[e].description.name))}):r.Am.promise((0,a.TN)(e),{loading:(0,p.Iu)("frontend.plugins.enabling_plugin",(0,p.Iu)(w[e].description.name)),success:(0,p.Iu)("frontend.plugins.enabled_plugin",(0,p.Iu)(w[e].description.name)),error:(0,p.Iu)("frontend.plugins.error_enabling_plugin",(0,p.Iu)(w[e].description.name))}),setTimeout(()=>{(0,i.JG)("plugins")},200)},className:"absolute left-3.5"}),(0,s.jsxs)("div",{className:"flex col-span-2 gap-2 text-center items-center",children:[(0,s.jsxs)(v.u,{delayDuration:100,children:[(0,s.jsx)(v.aJ,{className:"col-span-2 text-start",children:(0,s.jsx)("p",{className:"text-sm",children:(0,p.Iu)(w[e].description.name)})}),(0,s.jsx)(y._v,{side:"right",className:"z-50",children:(0,s.jsx)("div",{className:"rounded-md max-w-72 bg-background p-4 border text-left",children:(0,s.jsx)("p",{className:"text-sm",children:(0,p.Iu)(w[e].description.description)})})})]}),(0,s.jsxs)("p",{className:"text-xs text-muted-foreground pt-[2.5px]",children:[w[e].frametimes[w[e].frametimes.length-1]?Math.round(1/w[e].frametimes[1]):"unknown"," fps"]})]}),(0,s.jsx)("div",{className:"text-sm col-span-2 flex gap-1",children:w[e].authors.map((t,n)=>(0,s.jsx)("div",{className:"flex items-center text-left gap-1",children:(0,s.jsxs)("p",{className:"text-xs",children:[n>0&&n<w[e].authors.length?"& ":"",t.name]})}))}),(0,s.jsx)("div",{className:"text-sm col-span-4",children:w[e].description.tags.map((e,t)=>(0,s.jsx)(N.C,{variant:"outline",className:"mr-1 font-customSans font-normal h-7 cursor-pointer",onClick:()=>{g([...n,e])},children:e},t))}),(0,s.jsx)("div",{className:"absolute right-0 opacity-0 group-hover:opacity-100 transition-all",children:(0,s.jsxs)(j.h_,{children:[(0,s.jsx)(j.$F,{asChild:!0,children:(0,s.jsx)(o.Z,{size:18,className:"opacity-50 hover:opacity-80 mx-3"})}),(0,s.jsx)(j.AW,{className:"scale-90",children:w[e].enabled?(0,s.jsxs)(j.Xi,{onClick:()=>{r.Am.promise((0,a.r5)(e),{loading:(0,p.Iu)("frontend.plugins.disabling_plugin",(0,p.Iu)(w[e].description.name)),success:(0,p.Iu)("frontend.plugins.disabled_plugin",(0,p.Iu)(w[e].description.name)),error:(0,p.Iu)("frontend.plugins.error_disabling_plugin",(0,p.Iu)(w[e].description.name))}),setTimeout(()=>{(0,i.JG)("plugins")},200)},className:"gap-2",children:[(0,s.jsx)(c.Z,{size:20}),(0,p.Iu)("frontend.menubar.plugins.plugin.disable")]}):(0,s.jsxs)(j.Xi,{onClick:()=>{r.Am.promise((0,a.TN)(e),{loading:(0,p.Iu)("frontend.plugins.enabling_plugin",(0,p.Iu)(w[e].description.name)),success:(0,p.Iu)("frontend.plugins.enabled_plugin",(0,p.Iu)(w[e].description.name)),error:(0,p.Iu)("frontend.plugins.error_enabling_plugin",(0,p.Iu)(w[e].description.name))}),setTimeout(()=>{(0,i.JG)("plugins")},200)},className:"gap-2",children:[(0,s.jsx)(d.Z,{size:20}),(0,p.Iu)("frontend.menubar.plugins.plugin.enable")]})})]})})]},e)),O.map((e,t)=>(0,s.jsxs)(I.E.div,{className:"w-full group relative border border-t-0 h-10 grid grid-cols-8 items-center text-left pl-12 cursor-pointer",layout:!0,animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},children:[(0,s.jsx)(b,{checked:w[e].enabled,onClick:()=>{w[e].enabled?r.Am.promise((0,a.r5)(e),{loading:(0,p.Iu)("frontend.plugins.disabling_plugin",(0,p.Iu)(w[e].description.name)),success:(0,p.Iu)("frontend.plugins.disabled_plugin",(0,p.Iu)(w[e].description.name)),error:(0,p.Iu)("frontend.plugins.error_disabling_plugin",(0,p.Iu)(w[e].description.name))}):r.Am.promise((0,a.TN)(e),{loading:(0,p.Iu)("frontend.plugins.enabling_plugin",(0,p.Iu)(w[e].description.name)),success:(0,p.Iu)("frontend.plugins.enabled_plugin",(0,p.Iu)(w[e].description.name)),error:(0,p.Iu)("frontend.plugins.error_enabling_plugin",(0,p.Iu)(w[e].description.name))}),setTimeout(()=>{(0,i.JG)("plugins")},200)},className:"absolute left-3.5 opacity-60 group-hover:opacity-100"}),(0,s.jsxs)(v.u,{delayDuration:100,children:[(0,s.jsx)(v.aJ,{className:"col-span-2 text-start",children:(0,s.jsx)("p",{className:"text-sm text-muted-foreground group-hover:text-foreground",children:(0,p.Iu)(w[e].description.name)})}),(0,s.jsx)(y._v,{side:"right",className:"z-50",children:(0,s.jsx)("div",{className:"rounded-md max-w-72 bg-background p-4 border",children:(0,s.jsx)("p",{className:"text-sm",children:(0,p.Iu)(w[e].description.description)})})})]}),(0,s.jsx)("div",{className:"text-sm col-span-2 flex gap-1",children:w[e].authors.map((t,n)=>(0,s.jsx)("div",{className:"flex items-center text-left gap-1",children:(0,s.jsxs)("p",{className:"text-xs text-muted-foreground group-hover:text-foreground",children:[n>0&&n<w[e].authors.length?"& ":"",t.name]})}))}),(0,s.jsx)("div",{className:"text-sm col-span-4",children:w[e].description.tags.map((e,t)=>(0,s.jsx)(N.C,{variant:"outline",className:"mr-1 font-customSans font-normal h-7 cursor-pointer opacity-60 group-hover:opacity-100",onClick:()=>{g([...n,e])},children:e},t))}),(0,s.jsx)("div",{className:"absolute right-0 opacity-0 group-hover:opacity-100 transition-all",children:(0,s.jsxs)(j.h_,{children:[(0,s.jsx)(j.$F,{asChild:!0,children:(0,s.jsx)(o.Z,{size:18,className:"opacity-50 hover:opacity-80 mx-3"})}),(0,s.jsx)(j.AW,{className:"scale-90",children:w[e].enabled?(0,s.jsxs)(j.Xi,{onClick:()=>{r.Am.promise((0,a.r5)(e),{loading:(0,p.Iu)("frontend.plugins.disabling_plugin",(0,p.Iu)(w[e].description.name)),success:(0,p.Iu)("frontend.plugins.disabled_plugin",(0,p.Iu)(w[e].description.name)),error:(0,p.Iu)("frontend.plugins.error_disabling_plugin",(0,p.Iu)(w[e].description.name))}),setTimeout(()=>{(0,i.JG)("plugins")},200)},className:"gap-2",children:[(0,s.jsx)(c.Z,{size:20}),(0,p.Iu)("frontend.menubar.plugins.plugin.disable")]}):(0,s.jsxs)(j.Xi,{onClick:()=>{r.Am.promise((0,a.TN)(e),{loading:(0,p.Iu)("frontend.plugins.enabling_plugin",(0,p.Iu)(w[e].description.name)),success:(0,p.Iu)("frontend.plugins.enabled_plugin",(0,p.Iu)(w[e].description.name)),error:(0,p.Iu)("frontend.plugins.error_enabling_plugin",(0,p.Iu)(w[e].description.name))}),setTimeout(()=>{(0,i.JG)("plugins")},200)},className:"gap-2",children:[(0,s.jsx)(d.Z,{size:20}),(0,p.Iu)("frontend.menubar.plugins.plugin.enable")]})})]})})]},e)),(0,s.jsx)(I.E.div,{className:"w-full border border-t-0 rounded-b-md h-10 items-center flex pl-4",layout:!0,children:R>0?(0,s.jsx)("p",{className:"text-muted-foreground text-xs",children:(0,p.Iu)("frontend.plugins.hidden",R)}):(0,s.jsx)("p",{className:"text-muted-foreground text-xs",children:(0,p.Iu)("frontend.plugins.end_list")})})]})})})})})})]})}},35974:function(e,t,n){"use strict";n.d(t,{C:function(){return l}});var s=n(57437);n(2265);var r=n(77712),i=n(94508);let a=(0,r.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function l(e){let{className:t,variant:n,...r}=e;return(0,s.jsx)("div",{className:(0,i.cn)(a({variant:n}),t),...r})}},84190:function(e,t,n){"use strict";n.d(t,{$F:function(){return d},AW:function(){return c},Xi:function(){return u},bO:function(){return p},h_:function(){return o}});var s=n(57437),r=n(2265),i=n(70085),a=n(20653),l=n(94508);let o=i.fC,d=i.xz;i.ZA,i.Uv,i.Tr,i.Ee,r.forwardRef((e,t)=>{let{className:n,inset:r,children:o,...d}=e;return(0,s.jsxs)(i.fF,{ref:t,className:(0,l.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",r&&"pl-8",n),...d,children:[o,(0,s.jsx)(a.XCv,{className:"ml-auto"})]})}).displayName=i.fF.displayName,r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(i.tu,{ref:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...r})}).displayName=i.tu.displayName;let c=r.forwardRef((e,t)=>{let{className:n,sideOffset:r=4,...a}=e;return(0,s.jsx)(i.Uv,{children:(0,s.jsx)(i.VY,{ref:t,sideOffset:r,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...a})})});c.displayName=i.VY.displayName;let u=r.forwardRef((e,t)=>{let{className:n,inset:r,...a}=e;return(0,s.jsx)(i.ck,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",r&&"pl-8",n),...a})});u.displayName=i.ck.displayName;let p=r.forwardRef((e,t)=>{let{className:n,children:r,checked:o,...d}=e;return(0,s.jsxs)(i.oC,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:o,...d,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(i.wU,{children:(0,s.jsx)(a.nQG,{className:"h-4 w-4"})})}),r]})});p.displayName=i.oC.displayName,r.forwardRef((e,t)=>{let{className:n,children:r,...o}=e;return(0,s.jsxs)(i.Rk,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...o,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(i.wU,{children:(0,s.jsx)(a.jXb,{className:"h-4 w-4 fill-current"})})}),r]})}).displayName=i.Rk.displayName,r.forwardRef((e,t)=>{let{className:n,inset:r,...a}=e;return(0,s.jsx)(i.__,{ref:t,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",n),...a})}).displayName=i.__.displayName,r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(i.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",n),...r})}).displayName=i.Z0.displayName},95186:function(e,t,n){"use strict";n.d(t,{I:function(){return a}});var s=n(57437),r=n(2265),i=n(94508);let a=r.forwardRef((e,t)=>{let{className:n,type:r,...a}=e;return(0,s.jsx)("input",{type:r,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...a})});a.displayName="Input"},81390:function(e,t,n){"use strict";n.d(t,{Dp:function(){return d},ee:function(){return o},pO:function(){return l}});var s=n(57437),r=n(20653),i=n(23374),a=n(94508);let l=e=>{let{className:t,...n}=e;return(0,s.jsx)(i.eh,{className:(0,a.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",t),...n})},o=i.s_,d=e=>{let{withHandle:t,className:n,...l}=e;return(0,s.jsx)(i.OT,{className:(0,a.cn)("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",n),...l,children:t&&(0,s.jsx)("div",{className:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",children:(0,s.jsx)(r.W1P,{className:"h-2.5 w-2.5"})})})}},81103:function(e,t,n){"use strict";n.d(t,{_v:function(){return c},aJ:function(){return d},pn:function(){return l},u:function(){return o}});var s=n(57437),r=n(2265),i=n(61312),a=n(94508);let l=i.zt,o=i.fC,d=i.xz,c=r.forwardRef((e,t)=>{let{className:n,sideOffset:r=4,...l}=e;return(0,s.jsx)(i.h_,{children:(0,s.jsx)(i.VY,{ref:t,sideOffset:r,className:(0,a.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...l})})});c.displayName=i.VY.displayName}},function(e){e.O(0,[310,137,48,199,363,312,632,374,85,737,341,971,117,744],function(){return e(e.s=1759)}),_N_E=e.O()}]);