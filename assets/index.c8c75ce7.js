var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,r=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,a=(e,a)=>{for(var c in a||(a={}))t.call(a,c)&&r(e,c,a[c]);if(n)for(var c of n(a))o.call(a,c)&&r(e,c,a[c]);return e};import{c,d as l,a as i,b as s,u,r as d,g as m,e as h,f as p,l as g,h as f,i as y,j as b,k as E,R as C,L as _,T as S,P as w,B as k,I as v,A as M,m as T,S as I,n as O,F as L,o as D,p as x,q as z,s as j,t as P,v as A,M as U,w as V,x as F,y as N,z as $,C as R,D as B,E as H,G as W,H as K}from"./vendor.f72143a7.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,a)=>{const c=new URL(e,o);if(self[t].moduleMap[c])return n(self[t].moduleMap[c]);const l=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){a(new Error(`Failed to import: ${e}`)),r(i)},onload(){n(self[t].moduleMap[c]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");const G="DemoModel",q="DemoCloned",J="Counter";function X(e,t){window.document&&window.document.documentElement.style.setProperty(e,t)}function Y(e,t=.8){return new c(e).lighten(t).hex()}function Q(e){!function(e){X("--theme-color",e)}(e);const t=Y(e);return function(e){X("--theme-color-light",e)}(t),{themeColor:e,themeColorLight:t}}var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",toggleSiderVisible:function(e,t){return{siderVisible:!t.siderVisible}},changeThemeColor:Q,switchSiderTheme:function(e,t){return{siderTheme:e?"dark":"light"}},switchHeaderTheme:function(e,t){return{headerTheme:e?"dark":"light"}},changeIsInnerMock:function(e,t){return{isInnerMock:e}},prepareApp:async function(){const e=await Promise.resolve({user:"hi concent pro",icon:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3662109890,1098716941&fm=15&gp=0.jpg",isAdmin:!0});return{userName:e.user,uesrIcon:e.icon,isAdmin:e.isAdmin,isAppReady:!0}}});const ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DEMO:"/demo",DEMO_USE_SETUP:"/demo-use-setup"}),te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",siderWidth:200,siderWidthPx:"200px",buttomBgColor:"#f0f2f5",contentBgColor:"#fff",webHeaderImg:"https://raw.githubusercontent.com/fantasticsoul/assets/master/c2pro/c2pro-banner.png",img404:"404_img_url",img403:"403_img_url"});var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",contentLayoutStyle:function(e){const t="calc(100vh - 120px)";return e.siderVisible?{marginLeft:te.siderWidthPx,minHeight:t}:{marginLeft:"0",minHeight:t}},headerStyle:function(e){const{headerTheme:t,themeColor:n,siderVisible:o}=e,r={marginLeft:"",color:"",backgroundColor:""};return r.marginLeft=o?te.siderWidthPx:"0",r.color="dark"===t?"white":n,r.backgroundColor="dark"===t?"black":"white",r},siderIconDes:function(e){return e.siderVisible?"left":"right"},siderThemeSwitchChecked:function(e){const{siderTheme:t}=e;return"dark"===t},headerThemeSwitchChecked:function(e){const{headerTheme:t}=e;return"dark"===t}});function oe(){return window._staffList||[]}function re(e){if(0===e.length)return oe().slice(0,10);if(e.length<2)return[];const t=new RegExp(`^${e}`);return oe().filter((e=>{const[n]=e;return t.test(n)})).slice(0,10)}l(re,300);var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",loaded:function(e,t){const{themeColor:n}=t;e(Q,n),window._staffList=[["jack","jack(Beijing)"],["mark","mark(Beijing)"],["zzk","zzk(NewYork)"],["hi concent","concent(Landon)"],["hi concent2","concent(Beijing)"],["hi concent3","concent(ShangHai)"]]}}),ce={[i.MODULE_GLOBAL]:{state:function(){const e="#025232";return{siderVisible:!0,siderTheme:"dark",headerTheme:"dark",themeColor:e,themeColorLight:Y(e),someInfo:"overWrite built-in module global's state",isAppReady:!1,userName:"",uesrIcon:"",isAdmin:!1,isInnerMock:!0,innerMockApis:["get /api/todo/list"]}},reducer:Z,computed:ne,lifecycle:ae}};let le;const ie={},se=function(e,t){if(!t)return e();if(void 0===le){const e=document.createElement("link").relList;le=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in ie)return;ie[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":le,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},ue={},de=["info","error","success","warn","warning"];function me(e,t,n,o,r){if(!de.includes(e))return console.error(`messageService call invalid method[${e}]`),t("ignored");if(r<0)return t(s[e](n,o));const a=`${e}_${n}`;if(ue[a])return t("ignored");ue[a]=setTimeout((()=>{delete ue[a]}),r),t(s[e](n,o))}function he(e,t=3,n=1200){return new Promise((o=>{me("error",o,e,t,n)}))}function pe(e,t=3,n=1200){return new Promise((o=>{me("warn",o,e,t,n)}))}function ge(e){return Object.keys(e)}function fe(e,t=!0){return!!e&&(t?"object"==typeof e:"object"==typeof e&&!Array.isArray(e))}function ye(e,t,n){try{return JSON.parse(e)}catch(o){if(t)return t;if(n)throw new Error(n);throw o}}function be(e,t={}){const{nullValues:n=[null,void 0,""],checkObjValues:o=!1,emptyObjIsNull:r=!0,emptyArrIsNull:a=!0}=t;if(n.includes(e))return!0;if(Array.isArray(e))return!!a&&0===e.length;if("object"==typeof e){const t=ge(e),n=t.length;if(o){let o=!0;for(let r=0;r<n;r++){if(!be(e[t[r]])){o=!1;break}}return o}return!!r&&0===n}return!1}function Ee(e,t){return function(e){const t=(e,n,o)=>{const r=ge(e),a=n+1;for(let c=0;c<r.length;c++){const n=e[r[c]];fe(n)&&(o.num<a&&(o.num=a),t(n,a,o))}},n={num:1};return t(e,1,n),n.num}(e)>t}function Ce(e,t,n){const o=n||{},{setup:r,tag:a,extra:c,staticExtra:l,cuDesc:i,passCuDesc:s=!0,props:u={},ccClassKey:d}=o,m={module:e,connect:t,setup:r,props:u,tag:a,extra:c,staticExtra:l,cuDesc:null};return s&&(m.cuDesc=i),{regOpt:m,ccClassKey:d}}async function _e(e,t){try{if(Array.isArray(e)){const[n,o]=e;await t.dispatch(n,o)}else{const{fnName:n,payload:o,renderKey:r,delay:a}=e;await t.dispatch(n,o,r,a)}}catch(n){alert(n.message)}}function Se(e,t){const{regOpt:n,ccClassKey:o}=Ce(e,[],t);return u(n,o)}function we(e,t){const n=a({setup:e},t),{regOpt:o,ccClassKey:r}=Ce(i.MODULE_DEFAULT,[],n),{settings:c}=u(o,r);return c}const ke=d;function ve(e){return e.on}h.setConfig({retryCount:3,timeout:5e4});const Me={headers:{"Content-Type":"application/json"},withCredentials:!0,mockData:null};function Te(e={}){const{returnLogicData:r,defaultValue:a="",check:c=!0,alertErrorMsg:l=!0,failStrategy:i=h.const.KEEP_ALL_BEEN_EXECUTED}=e,s=((e,r)=>{var a={};for(var c in e)t.call(e,c)&&r.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&n)for(var c of n(e))r.indexOf(c)<0&&o.call(e,c)&&(a[c]=e[c]);return a})(e,["returnLogicData","defaultValue","check","alertErrorMsg","failStrategy"]);return s.failStrategy=i,{logicOptions:{returnLogicData:r,defaultValue:a,check:c,alertErrorMsg:l},cuteOptions:s}}const Ie=(e,t="",n={})=>{const{returnLogicData:o=!0,check:r=!0}=n,{statusCode:a=0}=e,c=e.data||e;if(a>=400)throw new Error(`服务器内部错误${a}`);const{status:l="0",message:i="接口格式错误",response:s,code:u,data:d,msg:m}=c,h=m||i;let p=null;if(p=o?d||s:c,!r)return p;if(void 0!==l&&"0"!=l){const e=new Error(h);throw e.status=l,e.url=t,e}if(void 0!==u&&0!=u)throw new Error(`url: ${t} ${h}`);return p},Oe=(e,t)=>{const n=e.replace(/ /g,"");let o=`${n}`;return t?n.includes("?")?`${o}&${g.stringify(t)}`:`${o}?${g.stringify(t)}`:o};function Le(e,t,n){if(!n)throw t.check&&t.alertErrorMsg&&he(e.message),e;return e&&e.response&&e.response.status>=400&&he(`服务器内部错误 ${e.response.status}`),n}async function De(e,t,n,o={}){const{logicOptions:r,cuteOptions:c}=Te(o),{returnLogicData:l,defaultValue:i="",check:s=!0}=r;try{const o=a(a({},Me),c);let r;const{isInnerMock:i,innerMockApis:u}=m();if(i&&u.includes(`${e} ${t}`)){const{mockImpl:o}=await se((()=>__import__("./mockHttpService.3f22eea4.js")),void 0);if("get"!==e&&"post"!==e)throw new Error(`method[${e}] not implemented in mockHttpService`);r={statusCode:200,data:o()[e](t,n)}}else r="get"===e?await h[e](Oe(t,n||""),"",o):await h[e](Oe(t,""),n,o);return Ie(r,t,{returnLogicData:l,check:s})}catch(u){return Le(u,o,i)}}async function xe(e,t,n,o={}){const{logicOptions:r,cuteOptions:c}=Te(o),{returnLogicData:l,defaultValue:i="",check:s=!0}=r;try{const o=a(a({},{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},withCredentials:!0}),c);let r=n;if(fe(n)){r={};for(let e in n){const t=n[e];r[e]=fe(t)?JSON.stringify(t):t}}const i=await h[e](Oe(t,""),g.stringify(r),o);return Ie(i,t,{returnLogicData:l,check:s})}catch(u){return Le(u,o,i)}}var ze={downloadFile:function(e,t={}){const n=document.createElement("form");if(n.style.display="none",n.action=e,n.method="post",document.body.appendChild(n),t)for(const o in t){const e=document.createElement("input");e.type="hidden",e.name=o;const r=t[o];e.value=fe(r)?JSON.stringify(r):r,n.appendChild(e)}n.submit(),n.remove()},get:async function(e,t,n){return De("get",e,t,n)},put:async function(e,t,n){return De("put",e,t,n)},post:async function(e,t,n){return De("post",e,t,n)},xFormPost:async function(e,t,n={}){return xe("post",e,t,n)},xFormPut:async function(e,t,n={}){return xe("put",e,t,n)},postFormData:async function(e,t,n){const{logicOptions:o,cuteOptions:r}=Te(n),{returnLogicData:a,defaultValue:c="",check:l=!0}=o,i=Oe(e,""),s=new FormData;t&&Object.keys(t).forEach((e=>{const n=t[e];if(Object.prototype.hasOwnProperty.call(t,e)&&t[e])if(n instanceof File)s.append(e,n);else{const t=fe(n)?JSON.stringify(n):n;s.append(e,t)}}));const u=p.create({withCredentials:!0});try{const t=await u.post(i,s,r);return Ie(t,e,{returnLogicData:a,check:l})}catch(d){return Le(d,n,c)}},multiGet:async function(e,t={}){const{logicOptions:n,cuteOptions:o}=Te(t),{returnLogicData:r,defaultValue:c="",check:l=!0}=n;try{delete t.returnLogicData;const n=e.map((e=>Oe(e,"")));return(await h.multiGet(n,a(a({},Me),o))).map(((e,t)=>Ie(e,n[t],{returnLogicData:r,check:l})))}catch(i){return Le(i,t,c)}},multiPost:async function(e,t={}){const{logicOptions:n,cuteOptions:o}=Te(t),{returnLogicData:r,defaultValue:c="",check:l=!0}=n;try{delete t.returnLogicData,e.forEach((e=>e.url=Oe(e.url,"")));return(await h.multiPost(e,a(a({},Me),o))).map(((t,n)=>Ie(t,e[n].url,{returnLogicData:r,check:l})))}catch(i){return Le(i,t,c)}}};function je(){console.log("call foo")}function Pe(){console.log("clear")}var Ae={DemoModel:{state:function(){return{num:1,desc:"this is a demo model!!!!!"}},reducer:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",aNormalMethod:function(e,t,n){console.log("for copy - ",n.dispatch)},changeDesc:function(e,t,n){let o=`module--${n.module} ${Date.now()}`;return e&&(o="string"==typeof e?e:`module--${n.module} ${e.currentTarget.nodeName} ${Date.now()}`),{desc:o}},fetchList:async function({current:e,pageSize:t}){const n=await ze.get("api/todos");return console.log(e,t,n),{pageList:n,total:1e3}},foo:je,clear:Pe}),computed:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",revesedDesc:function(e){return e.desc.split("").reverse().join("")}}),lifecycle:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",mounted:function(e){e(je)},willUnmount:function(e){e(Pe)}})}};var Ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",doubleCount:function({value:e}){return 2*e}});function Ve(){console.log("call foo")}function Fe(){console.log("call clear")}var Ne={Counter:{state:function(){return{value:0,bigValue:100,toInc:2}},computed:Ue,reducer:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",incrementBigValue:function(e,t){return{bigValue:t.bigValue+50}},incrementOne:function(e,t){return{value:t.value+1}},decrementOne:function(e,t){return{value:t.value-1}},increment:function(e,t){return{value:t.value+t.toInc}},incBy:function(e,t){return{value:t.value+e}},incrementAsync:async function(e,t,n){return await((e=1e3)=>new Promise((t=>setTimeout(t,e))))(),{value:t.value+t.toInc}},foo:Ve,clear:Fe}),lifecycle:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",mounted:function(e){e(Ve)},willUnmount:function(e){e(Fe)}})}};function $e(e=1e3){return new Promise((t=>setTimeout(t,e)))}function Re(){console.log("call foo")}function Be(){return console.log("clear"),{value:1}}const He={DemoTodoList:{state:function(){return{value:0,bigValue:100,keyword:""}},computed:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",doubleCount:function({value:e}){return 2*e},formattedInput:function({keyword:e}){return`用户正在输入 ${e}`}}),reducer:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",forCopy:function(e,t,n){console.log("call ac.setState or ac.dispatch when needed",n.setState)},fetchList:async function({current:e,pageSize:t},n){const o=await async function(){return await $e(1e3),await ze.get("/api/todo/list")}();return{pageList:o.list,total:o.total}},foo:Re,clear:Be,addBig:function(e,t){const{bigValue:n}=t;return{bigValue:n+1}}}),lifecycle:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",mounted:function(e){e(Re)},willUnmount:function(e){e(Be)}})}},We=f.makeUseModelWithSetup("DemoTodoList");f.makeUseModelWithSetupCuf("DemoTodoList");const Ke=f.makeUseModel("DemoTodoList");y(He);var Ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",doubleCount:function({value:e}){return 2*e}});function qe(){console.log("call foo")}function Je(){console.log("clear")}var Xe={Home:{state:function(){return{value:0,bigValue:100}},computed:Ge,reducer:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",forCopy:function(e,t,n){console.log("call ac.setState or ac.dispatch when needed",n.setState)},incrementBigValue:function(e,t){return{bigValue:t.bigValue+50}},increment:function(e,t){return{value:t.value+1}},decrement:function(e,t){return{value:t.value-1}},incrementByAmount:function(e,t){return{value:t.value+e}},incrementAsync:async function(e,t){return await((e=1e3)=>new Promise((t=>setTimeout(t,e))))(),{value:t.value+e}},foo:qe,clear:Je}),lifecycle:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",mounted:function(e){e(qe)},willUnmount:function(e){e(Je)}})}};const Ye={DemoCloned:Ae.DemoModel};b(a(a(a(a(a(a({},ce),Ne),Ae),Ye),Xe),He),{errorHandler:e=>{he(e.message)},alwaysRenderCaller:!0,isStrict:!0});const Qe={position:"fixed",top:"48%",zIndex:"999999"};function Ze({style:e=Qe,des:t="left",onClick:n}){const o="left"===t?E.createElement(C,null):E.createElement(_,null);return E.createElement("div",{className:"ccpro-drawer__icon",style:e,onClick:()=>n&&n()},E.createElement("span",null,o))}"tnfe.github.io"===window.location.host&&localStorage.setItem("someBaseNameKey","vite-concent-pro/");const et=localStorage.getItem("someBaseNameKey")||"";function tt(){return et||""}function nt(){const{pathname:e}=window.location,t=tt();let n=e;if(t){const o=t.length+1;n=e.substr(o)}return n||(n="/"),n}function ot(e=!1,t=50){return{lockId:"init_lock",hasMoreMode:e,hasMore:!0,current:1,pageSize:t,total:0,list:[],loading:!1}}function rt(e,t){return function(e,t,n){let o=e[t];return o||(o=e[t]=n),o}(e,t,ot())}function at({tableId:e,toMod:t},n){const{meta:o}=n,r=rt(o,e);var a;return null!=(a=t.pageSize)&&""!==a&&"number"!=typeof t.pageSize&&(t.pageSize=parseInt(t.pageSize,10)),function(e,t={}){Object.keys(t).forEach((n=>{e[n]=t[n]}))}(r,t),{meta:o}}async function ct({current:e,tableId:t,fetchFn:n},o,r){await r.dispatch(at,{tableId:t,toMod:{loading:!0,current:e,lockId:Date.now()}}),await r.dispatch(lt,{tableId:t,fetchFn:n})}async function lt({tableId:e,fetchFn:t},n,o){const{meta:r}=n,{current:a,pageSize:c,lockId:l,list:i,hasMoreMode:s}=rt(r,e),u=await t({current:a,pageSize:c,list:i});if(!u)return void(await o.dispatch(at,{tableId:e,toMod:{loading:!1}}));const{pageList:d,page_list:m,total:h=0,hasMore:p=!0}=u,g=d||m||[];if(rt(r,e).lockId!==l)return;const f=(a-1)*c;g.forEach(((e,t)=>{e&&(e.__seq=f+(t+1))}));let y=g;s&&(y=i.concat(g)),await o.dispatch(at,{tableId:e,toMod:{list:y,total:h,hasMore:p,loading:!1}})}localStorage.getItem("someApiHostKey");const it={GeneralTable:{state:function(){return{meta:{}}},computed:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",doubleCount:function(e){}}),reducer:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",modTableMeta:at,handlePageCurrentChange:ct,handleNextPage:async function({tableId:e,fetchFn:t},{meta:n},o){const{current:r}=rt(n,e);await o.dispatch(ct,{current:r+1,tableId:e,fetchFn:t})},handlePageSizeChange:async function({tableId:e,pageSize:t,fetchFn:n},o,r){await r.dispatch(at,{tableId:e,toMod:{loading:!0,pageSize:t,lockId:Date.now()}}),await r.dispatch(lt,{tableId:e,fetchFn:n})},clearTable:function({tableId:e},t,n){n.dispatch(at,{tableId:e,toMod:{list:[],total:0,loading:!1}})},fetchTableData:lt}),lifecycle:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",mounted:function(e){},willUnmount:function(e){}})}},st=f.makeUseModelWithSetup("GeneralTable");f.makeUseModelWithSetupCuf("GeneralTable"),f.makeUseModel("GeneralTable"),y(it);const ut=e=>{const{tid:t,fetchAfterMounted:n=!0,hasMoreMode:o=!1,fetchFn:r,pageSizeOptions:a=["50","100","200"]}=e.props,{ccUniqueKey:c}=e;if(!e.state.meta[t]){const n=parseInt(a[0],10)||50;e.state.meta[t]=ot(o,n)}e.on(["refreshTable",t],(async n=>{const o=n||r;await e.mr.clearTable({tableId:t},c),await e.mr.handlePageCurrentChange({tableId:t,current:1,fetchFn:o},c)})),e.on(["clearTable",t],(()=>{e.mr.clearTable({tableId:t},c)})),e.on(["refreshTableCurPage",t],(n=>{const o=n||r,a=e.state.meta[t];e.mr.handlePageCurrentChange({tableId:t,current:a.current,fetchFn:o},c)})),e.effect((()=>(n&&l(1),()=>e.dispatch("clearTable",{tableId:t},c))),[]);const l=n=>{const{fetchFn:o}=e.props;e.mr.handlePageCurrentChange({tableId:t,current:n,fetchFn:o},c)};return{handlePageCurrentChange:l,handelPageSizeChange:(n,o)=>{const{fetchFn:r}=e.props;e.mr.handlePageSizeChange({tableId:t,pageSize:o,fetchFn:r},c)},handleNextPage:()=>{const{fetchFn:n}=e.props;e.mr.handleNextPage({tableId:t,fetchFn:n},c)},pageSizeOptions:a}};function dt(e){const{state:t,settings:n}=st(ut,{props:e}),{tid:o,columns:r,rowKey:a="id",scroll:c={x:"100%"},hasMoreMode:l=!1,disableBtnWhenNoMore:i,size:s}=e,{list:u,loading:d,current:m,total:h,pageSize:p,hasMore:g}=t.meta[o],{handelPageSizeChange:f,handlePageCurrentChange:y,handleNextPage:b,pageSizeOptions:C}=n;return E.createElement(E.Fragment,null,E.createElement(S,{rowKey:a,columns:r,dataSource:u,size:s,loading:d,pagination:!1,scroll:c}),E.createElement("div",{style:{height:"19px",width:"100%"}}),l?i&&!g?E.createElement(k,{disabled:!0,style:{width:"100%"}},"没有更多了"):E.createElement(k,{onClick:b,style:{width:"100%"}},"加载更多"):E.createElement(w,{onShowSizeChange:f,onChange:y,current:m,total:h,showSizeChanger:!0,pageSizeOptions:C,pageSize:p}))}var mt=E.memo(dt);function ht(e){const{mr:t}=e;return{columns:[{key:"id",dataIndex:"id",title:"id"},{key:"text",dataIndex:"text",title:"文案"},{key:"done",dataIndex:"done",title:"是否完成",render:e=>e?"done":"uncomplish"}],refreshTable:()=>{e.emit(["refreshTable","todoTable"])},fetchList:e=>t.fetchList(e)}}var pt=E.memo((function(){const{settings:e}=We(ht);return E.createElement("div",null,E.createElement(k,{id:"refreshBtn",onClick:e.refreshTable},"refresh"),E.createElement(mt,{tid:"todoTable",columns:e.columns,fetchFn:e.fetchList}))}));var gt=E.memo((function(){const{sync:e,state:t,mr:n}=Ke();return E.createElement("div",null,E.createElement(v,{onChange:e("keyword"),value:t.keyword}),E.createElement("span",{id:"bigValue"},t.bigValue),E.createElement(k,{id:"addBigBtn",onClick:n.addBig}))}));function ft(e){return{hiThere:()=>"hiThere",changeBigTo(t){e.setState({bigValue:t})}}}var yt=E.memo((function(e){return We(ft,{tag:"Dpt"}),E.createElement("div",null,E.createElement(gt,null),E.createElement(pt,null))}));function bt(e,t){const{desc:n}=t;if(n.length>8)return{desc:n.substr(0,8)}}async function Et(e,t,n){return await n.setState({loading:!0}),await _e(e,n),{loading:!1}}const Ct={SomeModule:{state:function(){return{desc:"I am an empty module",loading:!1}},computed:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",reversedDesc:function(e){return e.desc.split("").reverse().join("")}}),reducer:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",forCopy:function(e,t,n){console.log("call ac.setState or ac.dispatch when needed",n.setState)},tryCutDesc:bt,tryAsyncCutDesc:async function(e,t,n){await $e(666),await n.dispatch(bt)},innerLoadingTryAsyncCutDesc:async function(e,t,n){n.dispatch(Et,[bt,e])},loading:Et,initState:function(){console.log("call initState")},clear:function(){console.log("call clear")}}),lifecycle:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",mounted:function(e){},willUnmount:function(e){}}),ghosts:["loading"]}};f.makeUseModelWithSetup("SomeModule"),f.makeUseModelWithSetupCuf("SomeModule");const _t=f.makeUseModel("SomeModule");y(Ct);const St=E.memo((()=>{const{state:e,sync:t}=_t();return E.createElement("div",null,"请输入的描述 ",E.createElement(v,{value:e.desc,onChange:t("desc")}))})),wt=E.memo((()=>{const{moduleComputed:e}=_t();return E.createElement(M,{message:e.reversedDesc,type:"success"})}));var kt=E.memo((function(e){const{state:t,mr:n,mrg:o}=_t();return E.createElement("div",null,E.createElement(T,null,t.desc),E.createElement(I,{spinning:t.loading},E.createElement(k,{onClick:n.tryCutDesc},"裁减描述"),E.createElement(k,{onClick:n.innerLoadingTryAsyncCutDesc},"内部函数包裹loading"),E.createElement(k,{onClick:o.loading.tryAsyncCutDesc},"使用ghost功能复用loading函数（推荐）"),E.createElement(St,null),E.createElement(wt,null)))}));const vt=E.lazy((()=>se((()=>__import__("./index.c0c3ab5e.js")),["./assets/index.c0c3ab5e.js","./assets/vendor.f72143a7.js"]))),Mt=E.lazy((()=>se((()=>__import__("./index.ef3b7002.js")),["./assets/index.ef3b7002.js","./assets/index.8aca9244.css","./assets/vendor.f72143a7.js"]))),Tt=[{showInSider:""!==window.location.port,label:"todoList",path:"/todolist",Component:yt},{label:"template",path:"/template",Component:kt},{label:"分步表单",path:"/step-form",Component:E.lazy((()=>se((()=>__import__("./index.40e62f24.js")),["./assets/index.40e62f24.js","./assets/index.61ae3218.css","./assets/vendor.f72143a7.js"])))},{key:"someExamples",label:"一些示例",Icon:O,children:[{Icon:L,label:"简单列表",path:ee.DEMO,Component:vt,isHomePage:!0},{Icon:C,label:"计数器",path:"/somelist",Component:Mt},{Icon:C,label:"useSteup",path:ee.DEMO_USE_SETUP,Component:E.lazy((()=>se((()=>__import__("./index.1c2c120c.js")),["./assets/index.1c2c120c.js","./assets/vendor.f72143a7.js"])))}]}];const It=function(){const e={},t={};let n="";return Tt.forEach((o=>{const r=o;if(r.children)return void r.children.map((o=>{t[o.path]=r,e[o.path]=o,o.isHomePage&&(n=o.path,t["/"]=r,e["/"]=o)}));const a=o;e[a.path]=a,a.isHomePage&&(e["/"]=a,n=a.path)})),{path2menuGroup:t,path2menuItem:e,homePageFullPath:n}}(),Ot=It.path2menuGroup,Lt=It.path2menuItem,Dt=It.homePageFullPath,xt=function(){const e=[],t=t=>{e.push(t)};return Tt.forEach((e=>{const n=e;if(n.children)return void n.children.forEach(t);t(e)})),e}();var zt="_asyncButton_15sup_33 _button_15sup_1";function jt(e){return E.createElement("button",a({},e),e.children)}function Pt(e){return E.createElement(jt,a({className:zt},e))}function At({children:e="",type:t="horizon",height:n="16px",width:o="28px",style:r={}}){const c=a({display:"inline-block",width:o,height:n},r);return"vertical"===t&&(c.display="block"),E.createElement("div",{style:c},e)}function Ut(e){return E.createElement(At,a({},a({width:"8px"},e)))}function Vt(e){return E.createElement(At,a({},a({type:"vertical"},e)))}function Ft(){return E.createElement("span",{style:{display:"none"}})}var Nt=E.memo((function(){return E.createElement("h1",null," not found")}));var $t="_header_1yohq_1",Rt="_headerSetting_1yohq_6",Bt="_userIconWrap_1yohq_14",Ht="_siderWrap_1yohq_26",Wt="_contentWrap_1yohq_35";const{Content:Kt}=D,Gt=()=>E.createElement("div",null,"Loading...");class qt extends E.Component{constructor(){super(...arguments),this.ctx={},this.errOccurred=!1,this.state={err:"",curMenus:[]},this.changeNavData=()=>{const e=nt(),t=Lt[e];if(t){const n=[];n.unshift(t);const o=Ot[e];o&&n.unshift(o),this.setState({curMenus:n})}},this.renderCrashTip=()=>E.createElement(D,{style:this.ctx.globalComputed.contentLayoutStyle},E.createElement("h1",{style:{color:"red",padding:"64px"}},"当前路由页面崩溃，请联系 xxx开发者 做进一步跟踪，如果是开发者，可打开console查看具体错误, 如想继续访问当前页面，可刷新留浏览器重试。")),this.renderNavBreadcrumb=()=>E.createElement(x,{style:{paddingLeft:"16px",height:"32px",lineHeight:"32px",backgroundColor:"white"}},this.state.curMenus.map(((e,t)=>{const n=e.Icon?E.createElement(e.Icon,null):"";return E.createElement(x.Item,{key:t},n,E.createElement(Ut,null),e.label)}))),this.makeCompWrap=e=>t=>{const{showBreadcrumb:n=!0,setContentLayout:o=!0}=e;let r="";n&&(r=this.renderNavBreadcrumb());const{contentLayoutStyle:c}=this.ctx.globalComputed;return o?E.createElement(D,{style:c},r,E.createElement(D,{style:{padding:"24px"}},E.createElement(Kt,{className:Wt},E.createElement(e.Component,a({},t))))):E.createElement(D,{style:c},r,E.createElement(e.Component,a({},t)))},this.cachedUi={uiRoutes:null,uiHomeRoute:null},this.buildRouteUi=()=>{if(this.cachedUi.uiRoutes)return this.cachedUi;let e=null;const t=xt.map((t=>{t.isHomePage&&(e=t);const n=this.makeCompWrap(t);return E.createElement(z,{key:t.path,exact:t.exact,path:t.path,component:n})}));let n="";if(e){const t=this.makeCompWrap(e);n=E.createElement(z,{exact:!0,path:"/",component:t})}return this.cachedUi={uiRoutes:t,uiHomeRoute:n},this.cachedUi}}$$setup(){this.ctx.effect((()=>{this.changeNavData()}),[]),this.ctx.on(j.getUrlChangedEvName(),((e,t,n)=>{console.log(e,t,n),this.errOccurred&&(this.errOccurred=!1,this.setState({err:""})),this.changeNavData()}))}componentDidCatch(e){this.errOccurred=!0,this.setState({err:e.message})}render(){if(this.errOccurred)return this.renderCrashTip();const{uiRoutes:e,uiHomeRoute:t}=this.buildRouteUi();return E.createElement(E.Suspense,{fallback:E.createElement(Gt,null)},E.createElement(P,null,e,t,E.createElement(z,{component:Nt})))}}var Jt=A(i.MODULE_DEFAULT)(qt);const{Sider:Xt}=D,{SubMenu:Yt,Item:Qt}=U,{webHeaderImg:Zt,siderWidth:en,siderWidthPx:tn}=te;function nn(){var e;let t=nt();"/"===t&&(t=Dt);return{selectedKeys:[t],openKeys:[null==(e=Ot[t])?void 0:e.key]}}function on(e){e.initState(nn);return{changeSelectedKeys:({selectedKeys:t})=>{e.setState({selectedKeys:t})},openMenus:t=>{e.setState({openKeys:t})},renderMenuItem:e=>{const{showInSider:t=!0,Icon:n,path:o,label:r}=e;if(!t)return"";const a=n?E.createElement(n,null):"";return E.createElement(Qt,{key:o},E.createElement(V,{to:o},a,r))},logoStyle:{width:en-30,position:"fixed",left:19,top:10}}}var rn=E.memo((function(){const{settings:e,state:t,globalState:n}=u({setup:on,tag:"Sider"});return E.createElement(Xt,{width:tn,className:Ht,theme:n.siderTheme},E.createElement("img",{style:e.logoStyle,src:Zt}),E.createElement(U,{theme:n.siderTheme,onSelect:e.changeSelectedKeys,onOpenChange:e.openMenus,mode:"inline",selectedKeys:t.selectedKeys,openKeys:t.openKeys,style:{height:"100%",borderRight:0}},Tt.map((t=>{const n=t;if(n.children){const t=n.Icon?E.createElement(n.Icon,null):"";return E.createElement(Yt,{key:n.key,className:"siderSubMenu",title:E.createElement("span",null," ",t,n.label," ")},n.children.map((t=>e.renderMenuItem(t))))}const o=t;return e.renderMenuItem(o)}))))}));const an=()=>E.createElement("div",{style:{textAlign:"center",padding:"5px"}},"Powered by ",E.createElement("a",{href:"https://github.com/concentjs/concent",target:"blank"},"Concent 2021"));function cn({color:e,onChangeComplete:t,onWebsiteColorChange:n,siderThemeChecked:o,onSiderThemeChange:r,headerThemeChecked:a,onHeaderThemeChange:c,innerMockChecked:l,onInnerMockChange:i}){return E.createElement("div",{style:{padding:"12px 28px"}},E.createElement(T,{color:"geekblue"},"站点主题设置："),E.createElement(Vt,null),E.createElement(R,{color:e,onChange:n,onChangeComplete:t}),E.createElement(Vt,null),E.createElement("div",null,E.createElement(T,{color:"geekblue"},"边栏设置："),E.createElement(At,null),E.createElement(B,{checkedChildren:"关闭暗黑边栏",unCheckedChildren:"开启暗黑边栏",checked:o,onChange:r})),E.createElement(Vt,null),E.createElement("div",null,E.createElement(T,{color:"geekblue"},"顶栏设置："),E.createElement(At,null),E.createElement(B,{checkedChildren:"关闭暗黑顶栏",unCheckedChildren:"开启暗黑顶栏",checked:a,onChange:c})),E.createElement(Vt,null),E.createElement("div",null,E.createElement(T,{color:"geekblue"},"mock设置："),E.createElement(At,null),E.createElement(B,{checkedChildren:"关闭innerMock",unCheckedChildren:"开启innerMock",checked:l,onChange:i})))}function ln(e){const{globalReducer:t}=e;return{onWebsiteColorChange(e){t.changeThemeColor(e.hex)},onSiderThemeChange(e){t.switchSiderTheme(e)},onHeaderThemeChange(e){t.switchHeaderTheme(e)},onInnerMockChange(e){t.changeIsInnerMock(e)}}}var sn=E.memo((function(){const{globalState:e,globalComputed:t,settings:n}=u({setup:ln,tag:"Header"}),o=E.createElement(cn,{color:e.themeColor,onWebsiteColorChange:n.onWebsiteColorChange,headerThemeChecked:t.headerThemeSwitchChecked,onHeaderThemeChange:n.onHeaderThemeChange,siderThemeChecked:t.siderThemeSwitchChecked,onSiderThemeChange:n.onSiderThemeChange,innerMockChecked:e.isInnerMock,onInnerMockChange:n.onInnerMockChange,onChangeComplete:n.onWebsiteColorChange});return E.createElement(D.Header,{className:$t,style:t.headerStyle},E.createElement("div",{className:Bt},E.createElement(F,{size:40,src:e.uesrIcon}),E.createElement(At,{width:"8px"}),e.userName),E.createElement(N,{placement:"bottomLeft",content:o,title:"主题设置",trigger:"click"},E.createElement($,{className:Rt,style:{color:t.headerStyle.color}})))}));function un({effect:e,globalReducer:t,globalState:n,globalComputed:o}){return e((()=>{t.prepareApp()}),[]),{renderContentArea(){const{contentLayoutStyle:e}=o;let t="";return t=n.isAppReady?E.createElement("div",{style:{minHeight:"calc(100vh - 120px)"}},E.createElement(Jt,null)):E.createElement(D,{style:a(a({},e),{padding:"64px"})},E.createElement(W,{avatar:!0,paragraph:{rows:4}}),E.createElement(W,{avatar:!0,paragraph:{rows:4}}),E.createElement(I,null,E.createElement("div",{style:{textAlign:"center"}},"系统初始化中..."))),t}}}function dn(){const{globalReducer:e,globalState:t,globalComputed:n,settings:o}=Se(i.MODULE_DEFAULT,{setup:un,tag:"App"});return E.createElement(D,null,E.createElement(D,null,E.createElement(sn,null)),E.createElement(D,null,E.createElement(Ze,{des:n.siderIconDes,onClick:e.toggleSiderVisible}),t.siderVisible&&E.createElement(rn,null)),o.renderContentArea(),E.createElement(an,null))}var mn=E.memo((()=>E.createElement(H,{basename:`/${tt()}`},E.createElement(j.ConnectRouter,{callUrlChangedOnInit:!0},E.createElement(dn,null)))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),K.render(E.createElement(mn,null),function(e="root"){let t=document.getElementById(e);return t||(t=document.createElement("div"),t.id=e,document.body.appendChild(t)),t}("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}));export{Pt as A,At as B,J as C,G as D,Ft as E,dt as G,Vt as V,q as a,mt as b,ke as c,$e as d,re as e,he as f,_e as g,be as h,Ee as i,we as j,ve as k,ge as o,ye as s,Se as u,pe as w};