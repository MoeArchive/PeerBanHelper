import"./index-Mz1L-OKH.js";import{f as g,a6 as b,ao as v,j as c,k as h,y as l,t,a2 as i,v as s,x as y,F as M}from"./libs-Bgy1OBX3.js";import{o as U,F as P,R as S,n as w,W as x}from"./arcoDesign-DMuFiq-Z.js";const q=g({__name:"biglybt",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(f){const{t:d}=b(),a=v(f,"modelValue"),V={type:"string",required:!0,validator:(n,e)=>{if(!n)return e("Please input URL");!n.startsWith("http://")&&!n.startsWith("https://")&&e(d("page.dashboard.editModal.label.endpoint.error.invalidSchema"));try{new URL(n),e()}catch{e(d("page.dashboard.editModal.label.endpoint.error.invalidUrl"))}}};return(n,e)=>{const u=U,r=P,p=S,_=w,m=x;return c(),h(M,null,[l(r,{field:"config.endpoint",label:i(d)("page.dashboard.editModal.label.endpoint"),"validate-trigger":"blur",required:"",rules:V},{default:t(()=>[l(u,{modelValue:a.value.endpoint,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value.endpoint=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),l(r,{field:"config.token",label:"Token",required:""},{default:t(()=>[l(u,{modelValue:a.value.token,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value.token=o),"allow-clear":""},null,8,["modelValue"])]),_:1}),l(r,{field:"config.httpVersion",label:i(d)("page.dashboard.editModal.label.httpVersion")},{extra:t(()=>[s(y(i(d)("page.dashboard.editModal.label.httpVersion.description")),1)]),default:t(()=>[l(_,{modelValue:a.value.httpVersion,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value.httpVersion=o)},{default:t(()=>[l(p,{value:"HTTP_1_1"},{default:t(()=>[s("1.1")]),_:1}),l(p,{value:"HTTP_2"},{default:t(()=>[s("2.0")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(r,{field:"config.verifySsl","default-checked":"",label:i(d)("page.dashboard.editModal.label.verifySsl")},{default:t(()=>[l(m,{modelValue:a.value.verifySsl,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value.verifySsl=o)},null,8,["modelValue"])]),_:1},8,["label"]),l(r,{field:"config.ignorePrivate",label:i(d)("page.dashboard.editModal.label.ignorePrivate")},{default:t(()=>[l(m,{modelValue:a.value.ignorePrivate,"onUpdate:modelValue":e[4]||(e[4]=o=>a.value.ignorePrivate=o)},null,8,["modelValue"])]),_:1},8,["label"])],64)}}});export{q as default};
