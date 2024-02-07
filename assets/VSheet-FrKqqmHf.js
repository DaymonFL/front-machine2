import{w as Be,n as W,x as N,t as q,l as oe,p as se,q as ue,B as j,a1 as ie,a2 as re,Z as ce,c as Ae,G as ye,a3 as ze,a4 as $e,g as De,a5 as Oe,D as Ye,a6 as We,I as Fe,T as Xe,U as qe,J as Ze,W as Ue,X as je}from"./VTextField-4S7uySAp.js";import{p as R,R as be,C as r,l as ve,ag as U,a4 as H,a1 as Me,A as C,a3 as de,M as Ee,L as Ke,as as Ge,at as Je,au as me,av as Qe,n as G,q as A,y as J,x as Se,a as y,E as O,B as Pe,_ as et,V as z,s as Re,a2 as le,G as K,Z as tt,aw as at,ax as lt,z as nt,ay as ot,az as st,F as ut,J as it}from"./index-zMbi89Zt.js";import{g as we}from"./VList-_zHkZkXc.js";const ne=Symbol.for("vuetify:layout"),Le=Symbol.for("vuetify:layout-item"),Te=1e3,rt=R({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),pe=R({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ct(){const e=be(ne);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function xe(e){const o=be(ne);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Ke()}`,n=Me("useLayoutItem");Ee(Le,{id:t});const l=C(!1);Ge(()=>l.value=!0),Je(()=>l.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:i}=o.register(n,{...e,active:r(()=>l.value?!1:e.active.value),id:t});return me(()=>o.unregister(t)),{layoutItemStyles:a,layoutRect:o.layoutRect,layoutItemScrimStyles:i}}const vt=(e,o,t,n)=>{let l={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...l}}];for(const i of e){const g=o.get(i),b=t.get(i),m=n.get(i);if(!g||!b||!m)continue;const u={...l,[g.value]:parseInt(l[g.value],10)+(m.value?parseInt(b.value,10):0)};a.push({id:i,layer:u}),l=u}return a};function dt(e){const o=be(ne,null),t=r(()=>o?o.rootZIndex.value-100:Te),n=ve([]),l=U(new Map),a=U(new Map),i=U(new Map),g=U(new Map),b=U(new Map),{resizeRef:m,contentRect:u}=Be(),h=r(()=>{const s=new Map,f=e.overlaps??[];for(const c of f.filter(x=>x.includes(":"))){const[x,p]=c.split(":");if(!n.value.includes(x)||!n.value.includes(p))continue;const P=l.get(x),L=l.get(p),Y=a.get(x),$=a.get(p);!P||!L||!Y||!$||(s.set(p,{position:P.value,amount:parseInt(Y.value,10)}),s.set(x,{position:L.value,amount:-parseInt($.value,10)}))}return s}),v=r(()=>{const s=[...new Set([...i.values()].map(c=>c.value))].sort((c,x)=>c-x),f=[];for(const c of s){const x=n.value.filter(p=>{var P;return((P=i.get(p))==null?void 0:P.value)===c});f.push(...x)}return vt(f,l,a,g)}),d=r(()=>!Array.from(b.values()).some(s=>s.value)),V=r(()=>v.value[v.value.length-1].layer),T=r(()=>({"--v-layout-left":H(V.value.left),"--v-layout-right":H(V.value.right),"--v-layout-top":H(V.value.top),"--v-layout-bottom":H(V.value.bottom),...d.value?void 0:{transition:"none"}})),B=r(()=>v.value.slice(1).map((s,f)=>{let{id:c}=s;const{layer:x}=v.value[f],p=a.get(c),P=l.get(c);return{id:c,...x,size:Number(p.value),position:P.value}})),w=s=>B.value.find(f=>f.id===s),I=Me("createLayout"),k=C(!1);de(()=>{k.value=!0}),Ee(ne,{register:(s,f)=>{let{id:c,order:x,position:p,layoutSize:P,elementSize:L,active:Y,disableTransitions:$,absolute:fe}=f;i.set(c,x),l.set(c,p),a.set(c,P),g.set(c,Y),$&&b.set(c,$);const Q=Qe(Le,I==null?void 0:I.vnode).indexOf(s);Q>-1?n.value.splice(Q,0,c):n.value.push(c);const ee=r(()=>B.value.findIndex(D=>D.id===c)),Z=r(()=>t.value+v.value.length*2-ee.value*2),M=r(()=>{const D=p.value==="left"||p.value==="right",F=p.value==="right",ae=p.value==="bottom",Ve={[p.value]:0,zIndex:Z.value,transform:`translate${D?"X":"Y"}(${(Y.value?0:-110)*(F||ae?-1:1)}%)`,position:fe.value||t.value!==Te?"absolute":"fixed",...d.value?void 0:{transition:"none"}};if(!k.value)return Ve;const _=B.value[ee.value];if(!_)throw new Error(`[Vuetify] Could not find layout item "${c}"`);const he=h.value.get(c);return he&&(_[he.position]+=he.amount),{...Ve,height:D?`calc(100% - ${_.top}px - ${_.bottom}px)`:L.value?`${L.value}px`:void 0,left:F?void 0:`${_.left}px`,right:F?`${_.right}px`:void 0,top:p.value!=="bottom"?`${_.top}px`:void 0,bottom:p.value!=="top"?`${_.bottom}px`:void 0,width:D?L.value?`${L.value}px`:void 0:`calc(100% - ${_.left}px - ${_.right}px)`}}),te=r(()=>({zIndex:Z.value-1}));return{layoutItemStyles:M,layoutItemScrimStyles:te,zIndex:Z}},unregister:s=>{i.delete(s),l.delete(s),a.delete(s),g.delete(s),b.delete(s),n.value=n.value.filter(f=>f!==s)},mainRect:V,mainStyles:T,getLayoutItem:w,items:B,layoutRect:u,rootZIndex:t});const E=r(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),S=r(()=>({zIndex:o?t.value:void 0,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:E,layoutStyles:S,getLayoutItem:w,items:B,layoutRect:u,layoutRef:m}}const Lt="/frontend-maquin2/assets/FQ-s9RMfSgf.svg",mt=R({...W(),...rt({fullHeight:!0}),...G()},"VApp"),_t=A()({name:"VApp",props:mt(),setup(e,o){let{slots:t}=o;const n=J(e),{layoutClasses:l,getLayoutItem:a,items:i,layoutRef:g}=dt(e),{rtlClasses:b}=Se();return N(()=>{var m;return y("div",{ref:g,class:["v-application",n.themeClasses.value,l.value,b.value,e.class],style:[e.style]},[y("div",{class:"v-application__wrap"},[(m=t.default)==null?void 0:m.call(t)])])}),{getLayoutItem:a,items:i,theme:n}}}),_e=R({text:String,...W(),...q()},"VToolbarTitle"),He=A()({name:"VToolbarTitle",props:_e(),setup(e,o){let{slots:t}=o;return N(()=>{const n=!!(t.default||t.text||e.text);return y(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[n&&y("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),ft=[null,"prominent","default","comfortable","compact"],Ne=R({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ft.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...oe(),...W(),...se(),...ue(),...q({tag:"header"}),...G()},"VToolbar"),Ie=A()({name:"VToolbar",props:Ne(),setup(e,o){var d;let{slots:t}=o;const{backgroundColorClasses:n,backgroundColorStyles:l}=j(O(e,"color")),{borderClasses:a}=ie(e),{elevationClasses:i}=re(e),{roundedClasses:g}=ce(e),{themeClasses:b}=J(e),{rtlClasses:m}=Se(),u=C(!!(e.extended||(d=t.extension)!=null&&d.call(t))),h=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=r(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Pe({VBtn:{variant:"text"}}),N(()=>{var w;const V=!!(e.title||t.title),T=!!(t.image||e.image),B=(w=t.extension)==null?void 0:w.call(t);return u.value=!!(e.extended||B),y(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,a.value,i.value,g.value,b.value,m.value,e.class],style:[l.value,e.style]},{default:()=>[T&&y("div",{key:"image",class:"v-toolbar__image"},[t.image?y(ye,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):y(Ae,{key:"image-img",cover:!0,src:e.image},null)]),y(ye,{defaults:{VTabs:{height:H(h.value)}}},{default:()=>{var I,k,E;return[y("div",{class:"v-toolbar__content",style:{height:H(h.value)}},[t.prepend&&y("div",{class:"v-toolbar__prepend"},[(I=t.prepend)==null?void 0:I.call(t)]),V&&y(He,{key:"title",text:e.title},{text:t.title}),(k=t.default)==null?void 0:k.call(t),t.append&&y("div",{class:"v-toolbar__append"},[(E=t.append)==null?void 0:E.call(t)])])]}}),y(ye,{defaults:{VTabs:{height:H(v.value)}}},{default:()=>[y(ze,null,{default:()=>[u.value&&y("div",{class:"v-toolbar__extension",style:{height:H(v.value)}},[B])]})]})]})}),{contentHeight:h,extensionHeight:v}}}),gt=R({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ht(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=o;let n=0;const l=ve(null),a=C(0),i=C(0),g=C(0),b=C(!1),m=C(!1),u=r(()=>Number(e.scrollThreshold)),h=r(()=>et((u.value-a.value)/u.value||0)),v=()=>{const d=l.value;!d||t&&!t.value||(n=a.value,a.value="window"in d?d.pageYOffset:d.scrollTop,m.value=a.value<n,g.value=Math.abs(a.value-u.value))};return z(m,()=>{i.value=i.value||a.value}),z(b,()=>{i.value=0}),de(()=>{z(()=>e.scrollTarget,d=>{var T;const V=d?document.querySelector(d):window;V&&V!==l.value&&((T=l.value)==null||T.removeEventListener("scroll",v),l.value=V,l.value.addEventListener("scroll",v,{passive:!0}))},{immediate:!0})}),me(()=>{var d;(d=l.value)==null||d.removeEventListener("scroll",v)}),t&&z(t,v,{immediate:!0}),{scrollThreshold:u,currentScroll:a,currentThreshold:g,isScrollActive:b,scrollRatio:h,isScrollingUp:m,savedScroll:i}}const yt=R({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ne(),...pe(),...gt(),height:{type:[Number,String],default:64}},"VAppBar"),Ht=A()({name:"VAppBar",props:yt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=ve(),l=Re(e,"modelValue"),a=r(()=>{var I;const w=new Set(((I=e.scrollBehavior)==null?void 0:I.split(" "))??[]);return{hide:w.has("hide"),inverted:w.has("inverted"),collapse:w.has("collapse"),elevate:w.has("elevate"),fadeImage:w.has("fade-image")}}),i=r(()=>{const w=a.value;return w.hide||w.inverted||w.collapse||w.elevate||w.fadeImage||!l.value}),{currentScroll:g,scrollThreshold:b,isScrollingUp:m,scrollRatio:u}=ht(e,{canScroll:i}),h=r(()=>e.collapse||a.value.collapse&&(a.value.inverted?u.value>0:u.value===0)),v=r(()=>e.flat||a.value.elevate&&(a.value.inverted?g.value>0:g.value===0)),d=r(()=>a.value.fadeImage?a.value.inverted?1-u.value:u.value:void 0),V=r(()=>{var k,E;if(a.value.hide&&a.value.inverted)return 0;const w=((k=n.value)==null?void 0:k.contentHeight)??0,I=((E=n.value)==null?void 0:E.extensionHeight)??0;return w+I});le(r(()=>!!e.scrollBehavior),()=>{tt(()=>{a.value.hide?a.value.inverted?l.value=g.value>b.value:l.value=m.value||g.value<b.value:l.value=!0})});const{ssrBootStyles:T}=we(),{layoutItemStyles:B}=xe({id:e.name,order:r(()=>parseInt(e.order,10)),position:O(e,"location"),layoutSize:V,elementSize:C(void 0),active:l,absolute:O(e,"absolute")});return N(()=>{const w=Ie.filterProps(e);return y(Ie,K({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...B.value,"--v-toolbar-image-opacity":d.value,height:void 0,...T.value},e.style]},w,{collapse:h.value,flat:v.value}),t)}),{}}}),bt=R({...$e({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Nt=A()({name:"VAppBarNavIcon",props:bt(),setup(e,o){let{slots:t}=o;return N(()=>y(De,K(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),At=A()({name:"VAppBarTitle",props:_e(),setup(e,o){let{slots:t}=o;return N(()=>y(He,K(e,{class:"v-app-bar-title"}),t)),{}}}),St=R({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...oe(),...W(),...se(),...pe(),...ue(),...q({tag:"footer"}),...G()},"VFooter"),zt=A()({name:"VFooter",props:St(),setup(e,o){let{slots:t}=o;const{themeClasses:n}=J(e),{backgroundColorClasses:l,backgroundColorStyles:a}=j(O(e,"color")),{borderClasses:i}=ie(e),{elevationClasses:g}=re(e),{roundedClasses:b}=ce(e),m=C(32),{resizeRef:u}=Be(d=>{d.length&&(m.value=d[0].target.clientHeight)}),h=r(()=>e.height==="auto"?m.value:parseInt(e.height,10)),{layoutItemStyles:v}=xe({id:e.name,order:r(()=>parseInt(e.order,10)),position:r(()=>"bottom"),layoutSize:h,elementSize:r(()=>e.height==="auto"?void 0:h.value),active:r(()=>e.app),absolute:O(e,"absolute")});return N(()=>y(e.tag,{ref:u,class:["v-footer",n.value,l.value,i.value,g.value,b.value,e.class],style:[a.value,e.app?v.value:{height:H(e.height)},e.style]},t)),{}}}),wt=R({scrollable:Boolean,...W(),...q({tag:"main"})},"VMain"),$t=A()({name:"VMain",props:wt(),setup(e,o){let{slots:t}=o;const{mainStyles:n}=ct(),{ssrBootStyles:l}=we();return N(()=>y(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,l.value,e.style]},{default:()=>{var a,i;return[e.scrollable?y("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}});function pt(e){let{rootEl:o,isSticky:t,layoutItemStyles:n}=e;const l=C(!1),a=C(0),i=r(()=>{const m=typeof l.value=="boolean"?"top":l.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[m]:H(a.value)}:{top:n.value.top}]});de(()=>{z(t,m=>{m?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),me(()=>{window.removeEventListener("scroll",b)});let g=0;function b(){const m=g>window.scrollY?"up":"down",u=o.value.getBoundingClientRect(),h=parseFloat(n.value.top??0),v=window.scrollY-Math.max(0,a.value-h),d=u.height+Math.max(a.value,h)-window.scrollY-window.innerHeight,V=parseFloat(getComputedStyle(o.value).getPropertyValue("--v-body-scroll-y"))||0;u.height<window.innerHeight-h?(l.value="top",a.value=h):m==="up"&&l.value==="bottom"||m==="down"&&l.value==="top"?(a.value=window.scrollY+u.top-V,l.value=!0):m==="down"&&d<=0?(a.value=0,l.value="bottom"):m==="up"&&v<=0&&(V?l.value!=="top"&&(a.value=-v+V+h,l.value="top"):(a.value=u.top+v,l.value="top")),g=window.scrollY}return{isStuck:l,stickyStyles:i}}const xt=100,Vt=20;function ke(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Ce(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const n=ke(o),l=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);o+=(l-n)*Math.abs(l),t===e.length-1&&(o*=.5)}return ke(o)*1e3}function Tt(){const e={};function o(l){Array.from(l.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new at(Vt))).push([l.timeStamp,a])})}function t(l){Array.from(l.changedTouches).forEach(a=>{delete e[a.identifier]})}function n(l){var m;const a=(m=e[l])==null?void 0:m.values().reverse();if(!a)throw new Error(`No samples for touch id ${l}`);const i=a[0],g=[],b=[];for(const u of a){if(i[0]-u[0]>xt)break;g.push({t:u[0],d:u[1].clientX}),b.push({t:u[0],d:u[1].clientY})}return{x:Ce(g),y:Ce(b),get direction(){const{x:u,y:h}=this,[v,d]=[Math.abs(u),Math.abs(h)];return v>d&&u>=0?"right":v>d&&u<=0?"left":d>v&&h>=0?"down":d>v&&h<=0?"up":It()}}}return{addMovement:o,endTouch:t,getVelocity:n}}function It(){throw new Error}function kt(e){let{isActive:o,isTemporary:t,width:n,touchless:l,position:a}=e;de(()=>{window.addEventListener("touchstart",w,{passive:!0}),window.addEventListener("touchmove",I,{passive:!1}),window.addEventListener("touchend",k,{passive:!0})}),me(()=>{window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",I),window.removeEventListener("touchend",k)});const i=r(()=>["left","right"].includes(a.value)),{addMovement:g,endTouch:b,getVelocity:m}=Tt();let u=!1;const h=C(!1),v=C(0),d=C(0);let V;function T(S,s){return(a.value==="left"?S:a.value==="right"?document.documentElement.clientWidth-S:a.value==="top"?S:a.value==="bottom"?document.documentElement.clientHeight-S:X())-(s?n.value:0)}function B(S){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const f=a.value==="left"?(S-d.value)/n.value:a.value==="right"?(document.documentElement.clientWidth-S-d.value)/n.value:a.value==="top"?(S-d.value)/n.value:a.value==="bottom"?(document.documentElement.clientHeight-S-d.value)/n.value:X();return s?Math.max(0,Math.min(1,f)):f}function w(S){if(l.value)return;const s=S.changedTouches[0].clientX,f=S.changedTouches[0].clientY,c=25,x=a.value==="left"?s<c:a.value==="right"?s>document.documentElement.clientWidth-c:a.value==="top"?f<c:a.value==="bottom"?f>document.documentElement.clientHeight-c:X(),p=o.value&&(a.value==="left"?s<n.value:a.value==="right"?s>document.documentElement.clientWidth-n.value:a.value==="top"?f<n.value:a.value==="bottom"?f>document.documentElement.clientHeight-n.value:X());(x||p||o.value&&t.value)&&(u=!0,V=[s,f],d.value=T(i.value?s:f,o.value),v.value=B(i.value?s:f),b(S),g(S))}function I(S){const s=S.changedTouches[0].clientX,f=S.changedTouches[0].clientY;if(u){if(!S.cancelable){u=!1;return}const x=Math.abs(s-V[0]),p=Math.abs(f-V[1]);(i.value?x>p&&x>3:p>x&&p>3)?(h.value=!0,u=!1):(i.value?p:x)>3&&(u=!1)}if(!h.value)return;S.preventDefault(),g(S);const c=B(i.value?s:f,!1);v.value=Math.max(0,Math.min(1,c)),c>1?d.value=T(i.value?s:f,!0):c<0&&(d.value=T(i.value?s:f,!1))}function k(S){if(u=!1,!h.value)return;g(S),h.value=!1;const s=m(S.changedTouches[0].identifier),f=Math.abs(s.x),c=Math.abs(s.y);(i.value?f>c&&f>400:c>f&&c>3)?o.value=s.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||X()):o.value=v.value>.5}const E=r(()=>h.value?{transform:a.value==="left"?`translateX(calc(-100% + ${v.value*n.value}px))`:a.value==="right"?`translateX(calc(100% - ${v.value*n.value}px))`:a.value==="top"?`translateY(calc(-100% + ${v.value*n.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${v.value*n.value}px))`:X(),transition:"none"}:void 0);return{isDragging:h,dragProgress:v,dragStyles:E}}function X(){throw new Error}const Ct=["start","end","left","right","top","bottom"],Bt=R({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ct.includes(e)},sticky:Boolean,...oe(),...W(),...lt(),...se(),...pe(),...ue(),...q({tag:"nav"}),...G()},"VNavigationDrawer"),Dt=A()({name:"VNavigationDrawer",props:Bt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){let{attrs:t,emit:n,slots:l}=o;const{isRtl:a}=Se(),{themeClasses:i}=J(e),{borderClasses:g}=ie(e),{backgroundColorClasses:b,backgroundColorStyles:m}=j(O(e,"color")),{elevationClasses:u}=re(e),{displayClasses:h,mobile:v}=nt(e),{roundedClasses:d}=ce(e),V=Oe(),T=Re(e,"modelValue",null,M=>!!M),{ssrBootStyles:B}=we(),{scopeId:w}=Ye(),I=ve(),k=C(!1),E=r(()=>e.rail&&e.expandOnHover&&k.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),S=r(()=>We(e.location,a.value)),s=r(()=>!e.permanent&&(v.value||e.temporary)),f=r(()=>e.sticky&&!s.value&&S.value!=="bottom");le(()=>e.expandOnHover&&e.rail!=null,()=>{z(k,M=>n("update:rail",!M))}),le(()=>!e.disableResizeWatcher,()=>{z(s,M=>!e.permanent&&it(()=>T.value=!M))}),le(()=>!e.disableRouteWatcher&&!!V,()=>{z(V.currentRoute,()=>s.value&&(T.value=!1))}),z(()=>e.permanent,M=>{M&&(T.value=!0)}),ot(()=>{e.modelValue!=null||s.value||(T.value=e.permanent||!v.value)});const{isDragging:c,dragProgress:x,dragStyles:p}=kt({isActive:T,isTemporary:s,width:E,touchless:O(e,"touchless"),position:S}),P=r(()=>{const M=s.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):E.value;return c.value?M*x.value:M}),{layoutItemStyles:L,layoutItemScrimStyles:Y}=xe({id:e.name,order:r(()=>parseInt(e.order,10)),position:S,layoutSize:P,elementSize:E,active:r(()=>T.value||c.value),disableTransitions:r(()=>c.value),absolute:r(()=>e.absolute||f.value&&typeof $.value!="string")}),{isStuck:$,stickyStyles:fe}=pt({rootEl:I,isSticky:f,layoutItemStyles:L}),ge=j(r(()=>typeof e.scrim=="string"?e.scrim:null)),Q=r(()=>({...c.value?{opacity:x.value*.2,transition:"none"}:void 0,...Y.value}));Pe({VList:{bgColor:"transparent"}});function ee(){k.value=!0}function Z(){k.value=!1}return N(()=>{const M=l.image||e.image;return y(ut,null,[y(e.tag,K({ref:I,onMouseenter:ee,onMouseleave:Z,class:["v-navigation-drawer",`v-navigation-drawer--${S.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":k.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":s.value,"v-navigation-drawer--active":T.value,"v-navigation-drawer--sticky":f.value},i.value,b.value,g.value,h.value,u.value,d.value,e.class],style:[m.value,L.value,p.value,B.value,fe.value,e.style]},w,t),{default:()=>{var te,D,F,ae;return[M&&y("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?(te=l.image)==null?void 0:te.call(l,{image:e.image}):y("img",{src:e.image,alt:""},null)]),l.prepend&&y("div",{class:"v-navigation-drawer__prepend"},[(D=l.prepend)==null?void 0:D.call(l)]),y("div",{class:"v-navigation-drawer__content"},[(F=l.default)==null?void 0:F.call(l)]),l.append&&y("div",{class:"v-navigation-drawer__append"},[(ae=l.append)==null?void 0:ae.call(l)])]}}),y(st,{name:"fade-transition"},{default:()=>[s.value&&(c.value||T.value)&&!!e.scrim&&y("div",K({class:["v-navigation-drawer__scrim",ge.backgroundColorClasses.value],style:[Q.value,ge.backgroundColorStyles.value],onClick:()=>T.value=!1},w),null)]})])}),{isStuck:$}}}),Mt=R({color:String,...oe(),...W(),...Fe(),...se(),...Xe(),...qe(),...ue(),...q(),...G()},"VSheet"),Ot=A()({name:"VSheet",props:Mt(),setup(e,o){let{slots:t}=o;const{themeClasses:n}=J(e),{backgroundColorClasses:l,backgroundColorStyles:a}=j(O(e,"color")),{borderClasses:i}=ie(e),{dimensionStyles:g}=Ze(e),{elevationClasses:b}=re(e),{locationStyles:m}=Ue(e),{positionClasses:u}=je(e),{roundedClasses:h}=ce(e);return N(()=>y(e.tag,{class:["v-sheet",n.value,l.value,i.value,b.value,u.value,h.value,e.class],style:[a.value,g.value,m.value,e.style]},t)),{}}});export{_t as V,Lt as _,Nt as a,At as b,Ht as c,Dt as d,Ot as e,$t as f,zt as g};
