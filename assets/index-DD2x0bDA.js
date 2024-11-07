import{u as le,e as $e,c as ee,f as z,I as se,b as ie,_ as ce,i as Me}from"./index-b727gE9_.js";/* empty css              */import{f as re,a6 as pe,ak as Ae,a2 as e,j as i,s as p,t,y as a,v as l,x as s,p as V,k as ae,P as De,F as Fe,u as m,a1 as oe,w as Re,c as Be,r as Oe,a8 as We,ae as Je,o as Qe,M as Xe,N as Ye,E as He,m as Ze}from"./libs-D-uoNQCp.js";import{c as et,d as tt,e as at}from"./data-rdhOsLF0.js";import{a5 as nt,S as ne,b as Ke,c as de,T as ue,t as Ve,E as ot,am as lt,K as st,w as it,ao as ct,j as rt,D as pt,L as dt,B as ut,h as _t,N as gt,ap as ft,aq as mt,ar as bt,$ as yt,ai as ht,C as St}from"./arcoDesign-CRyOpHTj.js";import{I as kt}from"./index-BChmPE3T.js";import{I as wt}from"./index-rThTObCo.js";const It=re({__name:"accessHistoryTable",props:{ip:{}},setup(te){const{t:d,d:o}=pe(),$=le(),{data:n,total:U,current:E,loading:I,pageSize:q,changeCurrent:y,changePageSize:j}=Ae(et,{defaultParams:[{ip:te.ip,page:1,pageSize:5}],pagination:{currentKey:"page",pageSizeKey:"pageSize",totalKey:"data.total"},cacheKey:c=>`${$.endpoint}-ipAccessHistory-${c==null?void 0:c[0].ip}-${(c==null?void 0:c[0].page)||1}-${(c==null?void 0:c[0].pageSize)||10}`}),G=[{title:()=>d("page.torrentList.accessHistory.column.downloader"),slotName:"downloader"},{title:"Peer ID",slotName:"peerId"},{title:()=>d("page.torrentList.accessHistory.column.traffic"),slotName:"traffic",width:120},{title:()=>oe(ne,[d("page.torrentList.accessHistory.column.offset"),oe(nt,{content:d("page.torrentList.accessHistory.column.offsetDescription")},()=>oe(ee))]),slotName:"offset",width:120},{title:()=>d("page.dashboard.peerList.column.flag"),slotName:"flags",width:120},{title:()=>d("page.torrentList.accessHistory.column.timeseen"),slotName:"time",width:260},{title:()=>d("page.ipList.accessHistory.column.torrent"),dataIndex:"torrent.name",ellipsis:!0,tooltip:!0}],A=c=>c.split(" ").map(g=>g+" - "+d("page.dashboard.peerList.column.flags."+g.trim()));return(c,g)=>{var L,B;const D=Ke,F=de,v=se,b=ue,h=ie,S=ne,f=Ve,M=ot;return(L=e(n))!=null&&L.data.results||e(I)?(i(),p(f,{key:0,stripe:!0,columns:G,data:(B=e(n))==null?void 0:B.data.results,loading:e(I),pagination:{total:e(U),current:e(E),pageSize:e(q),showPageSize:!0,baseSize:4,bufferSize:1},"column-resizable":"",size:"medium",class:"banlog-table",onPageChange:e(y),onPageSizeChange:e(j)},{downloader:t(({record:u})=>[a(D,{color:e($e)(u.downloader)},{default:t(()=>[l(s(u.downloader),1)]),_:2},1032,["color"])]),peerId:t(({record:u})=>[V("p",null,[l(s(u.peerId?u.peerId:e(d)("page.banlist.banlist.listItem.empty"))+" ",1),a(F,{content:u.clientName?u.clientName:e(d)("page.banlist.banlist.listItem.empty")},{default:t(()=>[a(e(ee))]),_:2},1032,["content"])])]),traffic:t(({record:u})=>[a(S,{fill:"",direction:"vertical"},{default:t(()=>[a(b,null,{default:t(()=>[a(v,{class:"green"}),l(" "+s(e(z)(u.uploaded)),1)]),_:2},1024),a(b,null,{default:t(()=>[a(h,{class:"red"}),l(" "+s(e(z)(u.downloaded)),1)]),_:2},1024)]),_:2},1024)]),offset:t(({record:u})=>[a(S,{fill:"",direction:"vertical"},{default:t(()=>[a(b,null,{default:t(()=>[a(v,{class:"green"}),l(" "+s(e(z)(u.uploadedOffset)),1)]),_:2},1024),a(b,null,{default:t(()=>[a(h,{class:"red"}),l(" "+s(e(z)(u.downloadedOffset)),1)]),_:2},1024)]),_:2},1024)]),flags:t(({record:u})=>[V("p",null,[l(s(u.lastFlags)+" ",1),u.lastFlags?(i(),p(F,{key:0},{content:t(()=>[(i(!0),ae(Fe,null,De(A(u.lastFlags),_=>(i(),ae("p",{key:_},s(_),1))),128))]),default:t(()=>[a(e(ee))]),_:2},1024)):m("",!0)])]),time:t(({record:u})=>[a(S,{fill:"",direction:"vertical"},{default:t(()=>[a(b,null,{default:t(()=>[l(s(e(d)("page.torrentList.accessHistory.column.timeseen.first"))+": "+s(e(o)(u.firstTimeSeen,"long")),1)]),_:2},1024),a(b,null,{default:t(()=>[l(s(e(d)("page.torrentList.accessHistory.column.timeseen.last"))+": "+s(e(o)(u.lastTimeSeen,"long")),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["data","loading","pagination","onPageChange","onPageSizeChange"])):(i(),p(M,{key:1,style:{height:"20vh","align-items":"center",display:"flex","justify-content":"center","flex-direction":"column"}},{default:t(()=>[l(s(e(d)("page.torrentList.accessHistory.empty")),1)]),_:1}))}}}),vt=ce(It,[["__scopeId","data-v-72781067"]]),zt=re({__name:"banHistoryTable",props:{ip:{}},setup(te){const d=le(),{t:o,d:$}=pe(),{data:n,total:U,current:E,loading:I,pageSize:q,changeCurrent:y,changePageSize:j,refresh:G}=Ae(tt,{defaultParams:[{ip:te.ip,page:1,pageSize:10}],pagination:{currentKey:"page",pageSizeKey:"pageSize",totalKey:"data.total"},cacheKey:g=>`${d.endpoint}-banlogs-${(g==null?void 0:g[0].page)||1}-${(g==null?void 0:g[0].pageSize)||10}`});Re(()=>d.endpoint,G);const A=[{title:()=>o("page.banlog.banlogTable.column.banTime")+"/"+o("page.banlog.banlogTable.column.unbanTime"),slotName:"banAt",width:220},{title:()=>o("page.banlog.banlogTable.column.peerPort"),dataIndex:"peerPort",width:80},{title:()=>o("page.banlog.banlogTable.column.peerId"),slotName:"peerId",width:120},{title:()=>o("page.banlog.banlogTable.column.trafficSnapshot"),slotName:"peerStatus",width:150},{title:()=>o("page.banlog.banlogTable.column.torrentName"),dataIndex:"torrentName",ellipsis:!0,tooltip:!0},{title:()=>o("page.banlog.banlogTable.column.torrentSize"),slotName:"torrentSize",width:120},{title:()=>o("page.banlog.banlogTable.column.description"),dataIndex:"description",ellipsis:!0,tooltip:!0}],c=Be(()=>{var g;return(g=n.value)==null?void 0:g.data.results});return(g,D)=>{const F=kt,v=ue,b=lt,h=ne,S=se,f=ie,M=st,L=de,B=ee,u=Ve;return i(),p(u,{stripe:!0,columns:A,data:c.value,loading:e(I),pagination:{total:e(U),current:e(E),pageSize:e(q),showPageSize:!0,baseSize:4,bufferSize:1},"column-resizable":"",size:"medium",class:"banlog-table",onPageChange:e(y),onPageSizeChange:e(j)},{banAt:t(({record:_})=>[a(h,{fill:"",direction:"vertical"},{default:t(()=>[a(v,null,{default:t(()=>[a(F),l(" "+s(e($)(_.banAt,"long")),1)]),_:2},1024),a(v,null,{default:t(()=>[a(b),l(" "+s(_.unbanAt?e($)(_.unbanAt,"long"):e(o)("page.banlog.banlogTable.notUnbanned")),1)]),_:2},1024)]),_:2},1024)]),peerStatus:t(({record:_})=>[a(h,{fill:"",style:{"justify-content":"space-between"}},{default:t(()=>[a(h,{fill:"",direction:"vertical"},{default:t(()=>[a(v,null,{default:t(()=>[a(S,{class:"green"}),l(" "+s(e(z)(_.peerUploaded)),1)]),_:2},1024),a(v,null,{default:t(()=>[a(f,{class:"red"}),l(" "+s(e(z)(_.peerDownloaded)),1)]),_:2},1024)]),_:2},1024),a(L,{content:(_.peerProgress*100).toFixed(2)+"%"},{default:t(()=>[a(M,{percent:_.peerProgress,size:"mini"},null,8,["percent"])]),_:2},1032,["content"])]),_:2},1024)]),peerId:t(({record:_})=>[V("p",null,[l(s(_.peerId?_.peerId:e(o)("page.banlist.banlist.listItem.empty"))+" ",1),a(L,{content:_.peerClientName?_.peerClientName:e(o)("page.banlist.banlist.listItem.empty")},{default:t(()=>[a(B)]),_:2},1032,["content"])])]),torrentSize:t(({record:_})=>[a(L,{content:`Hash: ${_.torrentInfoHash}`},{default:t(()=>[V("p",null,s(e(z)(_.torrentSize)),1)]),_:2},1032,["content"])]),_:1},8,["data","loading","pagination","onPageChange","onPageSizeChange"])}}}),Lt=ce(zt,[["__scopeId","data-v-009c3e8f"]]),Tt={class:"center searchContainer"},Pt={class:"result-container center"},xt=re({__name:"index",setup(te){const d=Oe(""),{t:o,d:$}=pe(),{data:n,loading:U,run:E,error:I}=We(at,{manual:!0}),q=le(),y=Be(()=>q.plusStatus),{query:j}=Je();Qe(()=>{j.ip&&(d.value=j.ip,E(d.value))});const G=A=>{A&&E(A)};return(A,c)=>{const g=it,D=ue,F=ct,v=rt,b=Ke,h=de,S=ne,f=pt,M=se,L=ie,B=ee,u=dt,_=ut,Ee=_t,_e=gt,ge=ft,fe=wt,me=mt,je=bt,Ue=yt,qe=ht,Ge=St;return i(),p(S,{direction:"vertical",fill:"",class:"center"},{default:t(()=>{var be,ye;return[a(F,{style:{"text-align":"center"}},{default:t(()=>[a(g,null,{default:t(()=>[l(s(e(o)("page.ipList.title")),1)]),_:1}),a(D,null,{default:t(()=>[l(s(e(o)("page.ipList.description")),1)]),_:1})]),_:1}),V("div",Tt,[a(v,{modelValue:d.value,"onUpdate:modelValue":c[0]||(c[0]=K=>d.value=K),"search-button":"",placeholder:"192.168.1.1....",class:"searchBox",loading:e(U),onSearch:G},null,8,["modelValue","loading"])]),V("div",Pt,[Xe(a(Ge,{class:"result-card",style:Ze({minWidth:(be=e(n))!=null&&be.data.found?"1150px":"400px"}),hoverable:""},{default:t(()=>[e(I)?(i(),p(qe,{key:1,status:"500",title:e(o)("page.ipList.error"),subtitle:e(I).message},{default:t(()=>[a(F,{style:{background:"var(--color-fill-2)",padding:"24px"}},{default:t(()=>{var K;return[a(Ue,null,{default:t(()=>c[6]||(c[6]=[l("Details:")])),_:1}),V("ul",null,[(i(!0),ae(Fe,null,De((K=e(I).stack)==null?void 0:K.split(`
`),k=>(i(),ae("li",{key:k},s(k),1))),128))])]}),_:1})]),_:1},8,["title","subtitle"])):(i(),p(S,{key:0,direction:"vertical",fill:""},{default:t(()=>{var K;return[a(Ee,null,{title:t(()=>[a(S,null,{default:t(()=>{var k,T;return[l(s((k=e(n))==null?void 0:k.data.address)+" ",1),(T=e(n))!=null&&T.data.found?m("",!0):(i(),p(h,{key:0,content:e(o)("page.ipList.notfound.tips")},{default:t(()=>[a(b,null,{default:t(()=>c[1]||(c[1]=[l("Not found")])),_:1})]),_:1},8,["content"]))]}),_:1})]),default:t(()=>{var k,T,R,O,P,x,C,he,Se,ke,we,Ie,ve,ze,Le,Te,Pe,xe,Ce,Ne;return[(k=e(n))!=null&&k.data.found?(i(),p(f,{key:0,label:e(o)("page.ipList.label.banCount"),span:2},{default:t(()=>{var r;return[l(s((r=e(n))==null?void 0:r.data.banCount),1)]}),_:1},8,["label"])):m("",!0),(T=e(n))!=null&&T.data.found?(i(),p(f,{key:1,label:e(o)("page.ipList.label.torrentAccessCount"),span:2},{default:t(()=>{var r;return[l(s((r=e(n))==null?void 0:r.data.torrentAccessCount),1)]}),_:1},8,["label"])):m("",!0),(R=e(n))!=null&&R.data.found?(i(),p(f,{key:2,label:e(o)("page.ipList.label.uploadedToPeer"),span:2},{default:t(()=>[a(D,null,{default:t(()=>{var r;return[a(M,{class:"green"}),l(" "+s(e(z)(((r=e(n))==null?void 0:r.data.uploadedToPeer)??0)),1)]}),_:1})]),_:1},8,["label"])):m("",!0),(O=e(n))!=null&&O.data.found?(i(),p(f,{key:3,label:e(o)("page.ipList.label.downloadedFromPeer"),span:2},{default:t(()=>[a(D,null,{default:t(()=>{var r;return[a(L,{class:"red"}),l(" "+s(e(z)(((r=e(n))==null?void 0:r.data.downloadedFromPeer)??0)),1)]}),_:1})]),_:1},8,["label"])):m("",!0),(P=e(n))!=null&&P.data.found?(i(),p(f,{key:4,label:e(o)("page.ipList.label.firstTimeSeen"),span:2},{default:t(()=>{var r;return[l(s(e($)(((r=e(n))==null?void 0:r.data.firstTimeSeen)??0,"long")),1)]}),_:1},8,["label"])):m("",!0),(x=e(n))!=null&&x.data.found?(i(),p(f,{key:5,label:e(o)("page.ipList.label.lastTimeSeen"),span:2},{default:t(()=>{var r;return[l(s(e($)(((r=e(n))==null?void 0:r.data.lastTimeSeen)??0,"long")),1)]}),_:1},8,["label"])):m("",!0),(Se=(he=(C=e(n))==null?void 0:C.data.geo)==null?void 0:he.country)!=null&&Se.iso||(Ie=(we=(ke=e(n))==null?void 0:ke.data.geo)==null?void 0:we.city)!=null&&Ie.name?(i(),p(f,{key:6,label:e(o)("page.banlist.banlist.listItem.geo"),span:2},{default:t(()=>{var r,w,W,J,Q,X,Y,Z;return[(w=(r=e(n).data.geo)==null?void 0:r.country)!=null&&w.iso?(i(),p(Me,{key:0,iso:((J=(W=e(n).data.geo)==null?void 0:W.country)==null?void 0:J.iso)??""},null,8,["iso"])):m("",!0),l(" "+s(`${((X=(Q=e(n).data.geo)==null?void 0:Q.country)==null?void 0:X.name)??""} ${((Z=(Y=e(n).data.geo)==null?void 0:Y.city)==null?void 0:Z.name)??""}`),1)]}),_:1},8,["label"])):m("",!0),(Le=(ze=(ve=e(n))==null?void 0:ve.data.geo)==null?void 0:ze.network)!=null&&Le.isp?(i(),p(f,{key:7,label:e(o)("page.banlist.banlist.listItem.network.isp"),span:1},{default:t(()=>{var r,w;return[l(s((w=(r=e(n).data.geo)==null?void 0:r.network)==null?void 0:w.isp),1)]}),_:1},8,["label"])):m("",!0),(xe=(Pe=(Te=e(n))==null?void 0:Te.data.geo)==null?void 0:Pe.network)!=null&&xe.netType?(i(),p(f,{key:8,label:e(o)("page.banlist.banlist.listItem.network.netType"),span:2},{default:t(()=>{var r,w;return[l(s((w=(r=e(n).data.geo)==null?void 0:r.network)==null?void 0:w.netType),1)]}),_:1},8,["label"])):m("",!0),(Ne=(Ce=e(n))==null?void 0:Ce.data.geo)!=null&&Ne.as?(i(),p(f,{key:9,label:e(o)("page.banlist.banlist.listItem.asn"),span:2},{default:t(()=>[a(S,null,{default:t(()=>{var r,w,W,J,Q,X,Y,Z;return[a(D,null,{default:t(()=>{var N,H;return[l(s((H=(N=e(n).data.geo)==null?void 0:N.as)==null?void 0:H.organization),1)]}),_:1}),a(b,{color:e($e)((((w=(r=e(n).data.geo)==null?void 0:r.as)==null?void 0:w.number)??0).toString())},{default:t(()=>{var N,H;return[l(s((H=(N=e(n).data.geo)==null?void 0:N.as)==null?void 0:H.number),1)]}),_:1},8,["color"]),a(h,{content:e(o)("page.banlist.banlist.listItem.asn.subnet")+((Q=(J=(W=e(n).data.geo)==null?void 0:W.as)==null?void 0:J.network)==null?void 0:Q.ipAddress)+"/"+((Z=(Y=(X=e(n).data.geo)==null?void 0:X.as)==null?void 0:Y.network)==null?void 0:Z.prefixLength)},{default:t(()=>{var N,H;return[a(u,{href:`https://2ip.io/analytics/asn-list/?asnId=${(H=(N=e(n).data.geo)==null?void 0:N.as)==null?void 0:H.number}`,hoverable:!1},{default:t(()=>[a(B)]),_:1},8,["href"])]}),_:1},8,["content"])]}),_:1})]),_:1},8,["label"])):m("",!0),a(f,{span:8},{label:t(()=>[a(S,null,{default:t(()=>[l(s(e(o)("page.ipList.shortcut"))+" ",1),a(h,{content:e(o)("page.ipList.shortcut.tips")},{default:t(()=>[a(B)]),_:1},8,["content"])]),_:1})]),default:t(()=>[a(S,null,{default:t(()=>[a(_,{href:`https://ip.ping0.cc/ip/${d.value}`,type:"outline"},{default:t(()=>c[2]||(c[2]=[l(" ping0 ")])),_:1},8,["href"]),a(_,{href:`https://search.censys.io/hosts/${d.value}`,type:"outline"},{default:t(()=>c[3]||(c[3]=[l(" Censys ")])),_:1},8,["href"])]),_:1})]),_:1})]}),_:1}),(K=e(n))!=null&&K.data.found?(i(),p(je,{key:0,bordered:!1,"destroy-on-hide":""},{default:t(()=>{var k,T,R,O;return[a(me,{key:"1",header:e(o)("page.ipList.label.accessHistory"),disabled:!((k=y.value)!=null&&k.activated),class:"collapse-table"},He({"expand-icon":t(({active:P})=>{var x,C;return[(x=y.value)!=null&&x.activated&&!P?(i(),p(_e,{key:0})):(C=y.value)!=null&&C.activated&&P?(i(),p(ge,{key:1})):(i(),p(fe,{key:2}))]}),default:t(()=>[a(vt,{ip:d.value},null,8,["ip"])]),_:2},[(T=y.value)!=null&&T.activated?void 0:{name:"extra",fn:t(()=>[a(h,{content:e(o)("page.ipList.plusLock")},{default:t(()=>[a(b,{size:"small"},{default:t(()=>c[4]||(c[4]=[l("Plus")])),_:1})]),_:1},8,["content"])]),key:"0"}]),1032,["header","disabled"]),a(me,{key:"2",header:e(o)("page.ipList.label.banHistory"),disabled:!((R=y.value)!=null&&R.activated)},He({"expand-icon":t(({active:P})=>{var x,C;return[(x=y.value)!=null&&x.activated&&!P?(i(),p(_e,{key:0})):(C=y.value)!=null&&C.activated&&P?(i(),p(ge,{key:1})):(i(),p(fe,{key:2}))]}),default:t(()=>[a(Lt,{ip:d.value},null,8,["ip"])]),_:2},[(O=y.value)!=null&&O.activated?void 0:{name:"extra",fn:t(()=>[a(h,{content:e(o)("page.ipList.plusLock")},{default:t(()=>[a(b,{size:"small"},{default:t(()=>c[5]||(c[5]=[l("Plus")])),_:1})]),_:1},8,["content"])]),key:"0"}]),1032,["header","disabled"])]}),_:1})):m("",!0)]}),_:1}))]),_:1},8,["style"]),[[Ye,((ye=e(n))==null?void 0:ye.data)||e(I)]])])]}),_:1})}}}),Bt=ce(xt,[["__scopeId","data-v-694cb74f"]]);export{Bt as default};