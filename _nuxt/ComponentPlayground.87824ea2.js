import{J as _,aq as S,I as a,d as u,Z as b,b as $,c as I,n as w,p as P,i as C,e as x,k as f,a4 as E,r as D,N as c}from"./entry.008bad11.js";import j from"./ComponentPlaygroundData.d6419eab.js";import"./TabsHeader.fc25d6f2.js";import"./ComponentPlaygroundProps.334ed93e.js";import"./ProseH4.222213cc.js";import"./ProseCodeInline.13812000.js";import"./Badge.0375a2a8.js";import"./slot.8a98a0cc.js";import"./node.676c5e99.js";import"./ProseP.07030ab9.js";import"./index.4c3889b0.js";import"./ComponentPlaygroundSlots.vue.49d3c5c4.js";import"./ComponentPlaygroundTokens.vue.acfdb174.js";async function z(e){const o=_(e);{const{data:n}=await S(`nuxt-component-meta${o?`-${o}`:""}`,()=>$fetch(`/api/component-meta${o?`/${o}`:""}`));return a(()=>n.value)}}const B=e=>(P("data-v-5fd4c706"),e=e(),C(),e),N=B(()=>x("div",{class:"ellipsis-item"},null,-1)),k=[N],q=u({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const o=a(()=>((t=s)=>t.top)()),n=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),i=a(()=>((t=s)=>t.zIndex)()),l=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),y=a(()=>((t=s)=>`blur(${t.blur})`)()),h=a(()=>((t=s)=>{var p,d,m;return`linear-gradient(97.62deg, ${(p=t==null?void 0:t.colors)==null?void 0:p[0]} 2.27%, ${(d=t==null?void 0:t.colors)==null?void 0:d[1]} 50.88%, ${(m=t==null?void 0:t.colors)==null?void 0:m[2]} 98.48%)`})()),s=e,{$pinceau:v}=b(s,void 0,{_cCN_top:o,_eih_insetInlineStart:n,_IfB_insetInlineEnd:r,_SsE_zIndex:i,_wj8_maxWidth:l,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,p)=>($(),I("div",{class:w(["ellipsis",[_(v)]])},k,2))}});const V=f(q,[["__scopeId","data-v-5fd4c706"]]),A=u({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const o=a(()=>E(e.component)),n=D({...e.props}),r=await z(e.component);return{as:o,formProps:n,componentData:r}},render(e){const o=Object.entries(this.$slots).reduce((n,[r,i])=>{if(r.startsWith("component-")){const l=r.replace("component-","");n[l]=i}return n},{});return c("div",{class:"component-playground"},[c("div",{class:"component-playground-wrapper"},[c(V,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),c(e.as,{...e.formProps,class:"component-playground-component"},{...o})]),c(j,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":n=>e.formProps=n})])}});const T=f(A,[["__scopeId","data-v-9ca9b996"]]);export{T as default};
