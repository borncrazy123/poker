"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[745],{6924:function(B,p,t){t.r(p),t.d(p,{default:function(){return L}});var E=t(93236),d=t(89172),s=t(83621),g=t(22348),k=t(9622),j=t(132),y=t(17710),f={container:"container___RKXp0",app:"app___fGUiQ",top:"top___ySxWg",body:"body___egDGb",bottom:"bottom___R7WDV"},e=t(62086),D=void 0,C=function(v){for(var n=(0,d.useModel)("center_model"),r=n.Desk_List,u=n.createDeskInfo,i=n.enterDeskByDidCallback,a=(0,d.useModel)("index_model"),o=a.setTabbarActiveKeyInfo,c=(0,d.useModel)("desk_model"),K=c.setDeskInfoCallback,x=[],h=0;h<r.length;h++)x.push({id:r[h].id,avatar:"https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",name:r[h].name,description:"\u5F53\u524D\u6709"+r[h].peson_cnt+"\u4E2A\u4EBA\u8FDB\u5165"});var T=function(m){console.log("_deskItem:",m),i(m),K(m),o("/desk")};return(0,e.jsx)("div",{style:{width:"100%",height:"100%",overflowY:"scroll"},children:(0,e.jsx)(s.aV,{header:(0,e.jsxs)("div",{children:["\u684C\u5B50\u5217\u8868",(0,e.jsx)(s.zx,{style:{float:"right"},size:"mini",color:"primary",onClick:function(){u()},children:"\u65B0\u5EFA"})]}),style:{height:"200px"},children:x.map(function(l){return(0,e.jsx)(s.aV.Item,{prefix:(0,e.jsx)(s.Ee,{src:l.avatar,fit:"cover",width:40,height:40}),description:l.description,onClick:T.bind(D,l),children:l.name},l.name)})})})},P=C,I=function(v){var n=(0,d.useModel)("desk_model"),r=n.Current_Dest_Person_List,u=n.getCurrentDeskPersonListInfo,i=n.Desk_Info;u(i);for(var a=[],o=0;o<r.length;o++)a.push({id:o,avatar:"https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",name:r[o].name});return(0,e.jsx)("div",{style:{width:"100%",height:"100%",overflowY:"scroll"},children:(0,e.jsx)(s.aV,{header:i.name,style:{height:"200px"},children:a.map(function(c){return(0,e.jsx)(s.aV.Item,{prefix:(0,e.jsx)(s.Ee,{src:c.avatar,fit:"cover",width:40,height:40}),description:c.description,children:c.name},c.name)})})})},M=I,A=function(){var v=(0,d.useModel)("index_model"),n=v.Tabbar_Active_Key,r=v.setTabbarActiveKeyInfo,u=[{key:"/home",title:"\u4E2D\u5FC3",icon:(0,e.jsx)(g.Z,{})},{key:"/desk",title:"\u684C\u9762",icon:(0,e.jsx)(k.Z,{})},{key:"/message",title:"\u6D88\u606F",icon:(0,e.jsx)(j.Z,{})},{key:"/me",title:"\u6211\u7684",icon:(0,e.jsx)(y.Z,{}),badge:s.Ct.dot}],i=(0,e.jsx)(P,{});return n=="/desk"&&(i=(0,e.jsx)(M,{})),(0,e.jsxs)("div",{className:f.app,children:[(0,e.jsx)("div",{className:f.top,children:(0,e.jsx)(s.l2,{backArrow:!1,children:"\u6E38\u620F\u4E2D\u5FC3"})}),(0,e.jsx)("div",{className:f.body,children:i}),(0,e.jsx)("div",{className:f.bottom,children:(0,e.jsx)(s.nj,{activeKey:n,onChange:function(o){return r(o)},children:u.map(function(a){return(0,e.jsx)(s.nj.Item,{icon:a.icon,title:a.title,badge:a.badge},a.key)})})})]})},L=A}}]);
