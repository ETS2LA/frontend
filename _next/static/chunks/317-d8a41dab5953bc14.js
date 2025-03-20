"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[317],{98575:function(e,r,o){o.d(r,{F:function(){return l},e:function(){return s}});var t=o(2265);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function l(...e){return r=>{let o=!1,t=e.map(e=>{let t=n(e,r);return o||"function"!=typeof t||(o=!0),t});if(o)return()=>{for(let r=0;r<t.length;r++){let o=t[r];"function"==typeof o?o():n(e[r],null)}}}}function s(...e){return t.useCallback(l(...e),e)}},37053:function(e,r,o){o.d(r,{A4:function(){return a},g7:function(){return s}});var t=o(2265),n=o(98575),l=o(57437),s=t.forwardRef((e,r)=>{let{children:o,...n}=e,s=t.Children.toArray(o),a=s.find(d);if(a){let e=a.props.children,o=s.map(r=>r!==a?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,l.jsx)(i,{...n,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,o):null})}return(0,l.jsx)(i,{...n,ref:r,children:o})});s.displayName="Slot";var i=t.forwardRef((e,r)=>{let{children:o,...l}=e;if(t.isValidElement(o)){let e,s;let i=(e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?o.ref:(e=Object.getOwnPropertyDescriptor(o,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?o.props.ref:o.props.ref||o.ref,a=function(e,r){let o={...r};for(let t in r){let n=e[t],l=r[t];/^on[A-Z]/.test(t)?n&&l?o[t]=(...e)=>{l(...e),n(...e)}:n&&(o[t]=n):"style"===t?o[t]={...n,...l}:"className"===t&&(o[t]=[n,l].filter(Boolean).join(" "))}return{...e,...o}}(l,o.props);return o.type!==t.Fragment&&(a.ref=r?(0,n.F)(r,i):i),t.cloneElement(o,a)}return t.Children.count(o)>1?t.Children.only(null):null});i.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function d(e){return t.isValidElement(e)&&e.type===a}},61994:function(e,r,o){function t(){for(var e,r,o=0,t="",n=arguments.length;o<n;o++)(e=arguments[o])&&(r=function e(r){var o,t,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(o=0;o<l;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(t&&(t+=" "),t+=r);return t}o.d(r,{W:function(){return t}}),r.Z=t},53335:function(e,r,o){o.d(r,{m6:function(){return ep}});let t=e=>{let r=i(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:e=>{let o=e.split("-");return""===o[0]&&1!==o.length&&o.shift(),n(o,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let o=e[0],t=r.nextPart.get(o),l=t?n(e.slice(1),t):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},i=e=>{let{theme:r,classGroups:o}=e,t={nextPart:new Map,validators:[]};for(let e in o)a(o[e],t,e,r);return t},a=(e,r,o,t)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=o;return}if("function"==typeof e){if(c(e)){a(e(t),r,o,t);return}r.validators.push({validator:e,classGroupId:o});return}Object.entries(e).forEach(([e,n])=>{a(n,d(r,e),o,t)})})},d=(e,r)=>{let o=e;return r.split("-").forEach(e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o},c=e=>e.isThemeGetter,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,o=new Map,t=new Map,n=(n,l)=>{o.set(n,l),++r>e&&(r=0,t=o,o=new Map)};return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}},u=e=>{let{prefix:r,experimentalParseClassName:o}=e,t=e=>{let r;let o=[],t=0,n=0,l=0;for(let s=0;s<e.length;s++){let i=e[s];if(0===t&&0===n){if(":"===i){o.push(e.slice(l,s)),l=s+1;continue}if("/"===i){r=s;continue}}"["===i?t++:"]"===i?t--:"("===i?n++:")"===i&&n--}let s=0===o.length?e:e.substring(l),i=b(s);return{modifiers:o,hasImportantModifier:i!==s,baseClassName:i,maybePostfixModifierPosition:r&&r>l?r-l:void 0}};if(r){let e=r+":",o=t;t=r=>r.startsWith(e)?o(r.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:r,maybePostfixModifierPosition:void 0}}if(o){let e=t;t=r=>o({className:r,parseClassName:e})}return t},b=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,f=e=>{let r=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let o=[],t=[];return e.forEach(e=>{"["===e[0]||r[e]?(o.push(...t.sort(),e),t=[]):t.push(e)}),o.push(...t.sort()),o}},m=e=>({cache:p(e.cacheSize),parseClassName:u(e),sortModifiers:f(e),...t(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:n,sortModifiers:l}=r,s=[],i=e.trim().split(g),a="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{isExternal:d,modifiers:c,hasImportantModifier:p,baseClassName:u,maybePostfixModifierPosition:b}=o(r);if(d){a=r+(a.length>0?" "+a:a);continue}let f=!!b,m=t(f?u.substring(0,b):u);if(!m){if(!f||!(m=t(u))){a=r+(a.length>0?" "+a:a);continue}f=!1}let g=l(c).join(":"),h=p?g+"!":g,w=h+m;if(s.includes(w))continue;s.push(w);let x=n(m,f);for(let e=0;e<x.length;++e){let r=x[e];s.push(h+r)}a=r+(a.length>0?" "+a:a)}return a};function w(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=x(e))&&(t&&(t+=" "),t+=r);return t}let x=e=>{let r;if("string"==typeof e)return e;let o="";for(let t=0;t<e.length;t++)e[t]&&(r=x(e[t]))&&(o&&(o+=" "),o+=r);return o},y=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},v=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,k=/^\((?:(\w[\w-]*):)?(.+)\)$/i,z=/^\d+\/\d+$/,j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,E=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,N=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,M=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,P=e=>z.test(e),G=e=>!!e&&!Number.isNaN(Number(e)),W=e=>!!e&&Number.isInteger(Number(e)),I=e=>e.endsWith("%")&&G(e.slice(0,-1)),S=e=>j.test(e),$=()=>!0,O=e=>C.test(e)&&!E.test(e),R=()=>!1,_=e=>N.test(e),A=e=>M.test(e),F=e=>!q(e)&&!J(e),V=e=>ee(e,es,R),q=e=>v.test(e),D=e=>ee(e,ei,O),T=e=>ee(e,ea,G),Z=e=>ee(e,eo,R),B=e=>ee(e,en,A),H=e=>ee(e,R,_),J=e=>k.test(e),K=e=>er(e,ei),L=e=>er(e,ed),Q=e=>er(e,eo),U=e=>er(e,es),X=e=>er(e,en),Y=e=>er(e,ec,!0),ee=(e,r,o)=>{let t=v.exec(e);return!!t&&(t[1]?r(t[1]):o(t[2]))},er=(e,r,o=!1)=>{let t=k.exec(e);return!!t&&(t[1]?r(t[1]):o)},eo=e=>"position"===e,et=new Set(["image","url"]),en=e=>et.has(e),el=new Set(["length","size","percentage"]),es=e=>el.has(e),ei=e=>"length"===e,ea=e=>"number"===e,ed=e=>"family-name"===e,ec=e=>"shadow"===e,ep=function(e,...r){let o,t,n;let l=function(i){return t=(o=m(r.reduce((e,r)=>r(e),e()))).cache.get,n=o.cache.set,l=s,s(i)};function s(e){let r=t(e);if(r)return r;let l=h(e,o);return n(e,l),l}return function(){return l(w.apply(null,arguments))}}(()=>{let e=y("color"),r=y("font"),o=y("text"),t=y("font-weight"),n=y("tracking"),l=y("leading"),s=y("breakpoint"),i=y("container"),a=y("spacing"),d=y("radius"),c=y("shadow"),p=y("inset-shadow"),u=y("drop-shadow"),b=y("blur"),f=y("perspective"),m=y("aspect"),g=y("ease"),h=y("animate"),w=()=>["auto","avoid","all","avoid-page","page","left","right","column"],x=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],v=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],z=()=>[J,q,a],j=()=>[P,"full","auto",...z()],C=()=>[W,"none","subgrid",J,q],E=()=>["auto",{span:["full",W,J,q]},J,q],N=()=>[W,"auto",J,q],M=()=>["auto","min","max","fr",J,q],O=()=>["start","end","center","between","around","evenly","stretch","baseline"],R=()=>["start","end","center","stretch"],_=()=>["auto",...z()],A=()=>[P,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...z()],ee=()=>[e,J,q],er=()=>[I,D],eo=()=>["","none","full",d,J,q],et=()=>["",G,K,D],en=()=>["solid","dashed","dotted","double"],el=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],es=()=>["","none",b,J,q],ei=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",J,q],ea=()=>["none",G,J,q],ed=()=>["none",G,J,q],ec=()=>[G,J,q],ep=()=>[P,"full",...z()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[S],breakpoint:[S],color:[$],container:[S],"drop-shadow":[S],ease:["in","out","in-out"],font:[F],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[S],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[S],shadow:[S],spacing:["px",G],text:[S],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",P,q,J,m]}],container:["container"],columns:[{columns:[G,q,J,i]}],"break-after":[{"break-after":w()}],"break-before":[{"break-before":w()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...x(),q,J]}],overflow:[{overflow:v()}],"overflow-x":[{"overflow-x":v()}],"overflow-y":[{"overflow-y":v()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:j()}],"inset-x":[{"inset-x":j()}],"inset-y":[{"inset-y":j()}],start:[{start:j()}],end:[{end:j()}],top:[{top:j()}],right:[{right:j()}],bottom:[{bottom:j()}],left:[{left:j()}],visibility:["visible","invisible","collapse"],z:[{z:[W,"auto",J,q]}],basis:[{basis:[P,"full","auto",i,...z()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[G,P,"auto","initial","none",q]}],grow:[{grow:["",G,J,q]}],shrink:[{shrink:["",G,J,q]}],order:[{order:[W,"first","last","none",J,q]}],"grid-cols":[{"grid-cols":C()}],"col-start-end":[{col:E()}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":C()}],"row-start-end":[{row:E()}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":M()}],"auto-rows":[{"auto-rows":M()}],gap:[{gap:z()}],"gap-x":[{"gap-x":z()}],"gap-y":[{"gap-y":z()}],"justify-content":[{justify:[...O(),"normal"]}],"justify-items":[{"justify-items":[...R(),"normal"]}],"justify-self":[{"justify-self":["auto",...R()]}],"align-content":[{content:["normal",...O()]}],"align-items":[{items:[...R(),"baseline"]}],"align-self":[{self:["auto",...R(),"baseline"]}],"place-content":[{"place-content":O()}],"place-items":[{"place-items":[...R(),"baseline"]}],"place-self":[{"place-self":["auto",...R()]}],p:[{p:z()}],px:[{px:z()}],py:[{py:z()}],ps:[{ps:z()}],pe:[{pe:z()}],pt:[{pt:z()}],pr:[{pr:z()}],pb:[{pb:z()}],pl:[{pl:z()}],m:[{m:_()}],mx:[{mx:_()}],my:[{my:_()}],ms:[{ms:_()}],me:[{me:_()}],mt:[{mt:_()}],mr:[{mr:_()}],mb:[{mb:_()}],ml:[{ml:_()}],"space-x":[{"space-x":z()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":z()}],"space-y-reverse":["space-y-reverse"],size:[{size:A()}],w:[{w:[i,"screen",...A()]}],"min-w":[{"min-w":[i,"screen","none",...A()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[s]},...A()]}],h:[{h:["screen",...A()]}],"min-h":[{"min-h":["screen","none",...A()]}],"max-h":[{"max-h":["screen",...A()]}],"font-size":[{text:["base",o,K,D]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[t,J,T]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",I,q]}],"font-family":[{font:[L,q,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,J,q]}],"line-clamp":[{"line-clamp":[G,"none",J,T]}],leading:[{leading:[l,...z()]}],"list-image":[{"list-image":["none",J,q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",J,q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:ee()}],"text-color":[{text:ee()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...en(),"wavy"]}],"text-decoration-thickness":[{decoration:[G,"from-font","auto",J,D]}],"text-decoration-color":[{decoration:ee()}],"underline-offset":[{"underline-offset":[G,"auto",J,q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",J,q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",J,q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...x(),Q,Z]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",U,V]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},W,J,q],radial:["",J,q],conic:[W,J,q]},X,B]}],"bg-color":[{bg:ee()}],"gradient-from-pos":[{from:er()}],"gradient-via-pos":[{via:er()}],"gradient-to-pos":[{to:er()}],"gradient-from":[{from:ee()}],"gradient-via":[{via:ee()}],"gradient-to":[{to:ee()}],rounded:[{rounded:eo()}],"rounded-s":[{"rounded-s":eo()}],"rounded-e":[{"rounded-e":eo()}],"rounded-t":[{"rounded-t":eo()}],"rounded-r":[{"rounded-r":eo()}],"rounded-b":[{"rounded-b":eo()}],"rounded-l":[{"rounded-l":eo()}],"rounded-ss":[{"rounded-ss":eo()}],"rounded-se":[{"rounded-se":eo()}],"rounded-ee":[{"rounded-ee":eo()}],"rounded-es":[{"rounded-es":eo()}],"rounded-tl":[{"rounded-tl":eo()}],"rounded-tr":[{"rounded-tr":eo()}],"rounded-br":[{"rounded-br":eo()}],"rounded-bl":[{"rounded-bl":eo()}],"border-w":[{border:et()}],"border-w-x":[{"border-x":et()}],"border-w-y":[{"border-y":et()}],"border-w-s":[{"border-s":et()}],"border-w-e":[{"border-e":et()}],"border-w-t":[{"border-t":et()}],"border-w-r":[{"border-r":et()}],"border-w-b":[{"border-b":et()}],"border-w-l":[{"border-l":et()}],"divide-x":[{"divide-x":et()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":et()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...en(),"hidden","none"]}],"divide-style":[{divide:[...en(),"hidden","none"]}],"border-color":[{border:ee()}],"border-color-x":[{"border-x":ee()}],"border-color-y":[{"border-y":ee()}],"border-color-s":[{"border-s":ee()}],"border-color-e":[{"border-e":ee()}],"border-color-t":[{"border-t":ee()}],"border-color-r":[{"border-r":ee()}],"border-color-b":[{"border-b":ee()}],"border-color-l":[{"border-l":ee()}],"divide-color":[{divide:ee()}],"outline-style":[{outline:[...en(),"none","hidden"]}],"outline-offset":[{"outline-offset":[G,J,q]}],"outline-w":[{outline:["",G,K,D]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",c,Y,H]}],"shadow-color":[{shadow:ee()}],"inset-shadow":[{"inset-shadow":["none",J,q,p]}],"inset-shadow-color":[{"inset-shadow":ee()}],"ring-w":[{ring:et()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:ee()}],"ring-offset-w":[{"ring-offset":[G,D]}],"ring-offset-color":[{"ring-offset":ee()}],"inset-ring-w":[{"inset-ring":et()}],"inset-ring-color":[{"inset-ring":ee()}],opacity:[{opacity:[G,J,q]}],"mix-blend":[{"mix-blend":[...el(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":el()}],filter:[{filter:["","none",J,q]}],blur:[{blur:es()}],brightness:[{brightness:[G,J,q]}],contrast:[{contrast:[G,J,q]}],"drop-shadow":[{"drop-shadow":["","none",u,J,q]}],grayscale:[{grayscale:["",G,J,q]}],"hue-rotate":[{"hue-rotate":[G,J,q]}],invert:[{invert:["",G,J,q]}],saturate:[{saturate:[G,J,q]}],sepia:[{sepia:["",G,J,q]}],"backdrop-filter":[{"backdrop-filter":["","none",J,q]}],"backdrop-blur":[{"backdrop-blur":es()}],"backdrop-brightness":[{"backdrop-brightness":[G,J,q]}],"backdrop-contrast":[{"backdrop-contrast":[G,J,q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",G,J,q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[G,J,q]}],"backdrop-invert":[{"backdrop-invert":["",G,J,q]}],"backdrop-opacity":[{"backdrop-opacity":[G,J,q]}],"backdrop-saturate":[{"backdrop-saturate":[G,J,q]}],"backdrop-sepia":[{"backdrop-sepia":["",G,J,q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":z()}],"border-spacing-x":[{"border-spacing-x":z()}],"border-spacing-y":[{"border-spacing-y":z()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",J,q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[G,"initial",J,q]}],ease:[{ease:["linear","initial",g,J,q]}],delay:[{delay:[G,J,q]}],animate:[{animate:["none",h,J,q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[f,J,q]}],"perspective-origin":[{"perspective-origin":ei()}],rotate:[{rotate:ea()}],"rotate-x":[{"rotate-x":ea()}],"rotate-y":[{"rotate-y":ea()}],"rotate-z":[{"rotate-z":ea()}],scale:[{scale:ed()}],"scale-x":[{"scale-x":ed()}],"scale-y":[{"scale-y":ed()}],"scale-z":[{"scale-z":ed()}],"scale-3d":["scale-3d"],skew:[{skew:ec()}],"skew-x":[{"skew-x":ec()}],"skew-y":[{"skew-y":ec()}],transform:[{transform:[J,q,"","none","gpu","cpu"]}],"transform-origin":[{origin:ei()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ep()}],"translate-x":[{"translate-x":ep()}],"translate-y":[{"translate-y":ep()}],"translate-z":[{"translate-z":ep()}],"translate-none":["translate-none"],accent:[{accent:ee()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:ee()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",J,q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",J,q]}],fill:[{fill:["none",...ee()]}],"stroke-w":[{stroke:[G,K,D,T]}],stroke:[{stroke:["none",...ee()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}})}}]);