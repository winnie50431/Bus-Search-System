(this["webpackJsonpbus-search-system"]=this["webpackJsonpbus-search-system"]||[]).push([[0],{134:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(12),s=n.n(i),r=n(17),o=n(44),l=n.n(o),j=n(83),u=n(84),d=n.n(u),b=n(85);function p(){var e=(new Date).toGMTString(),t=new b.a("SHA-1","TEXT");return t.setHMACKey("EesoQpOrDrpMVg-rr-tuMKkOoVQ","TEXT"),t.update("x-date: "+e),{Authorization:'hmac username="246448c88bce42bfa303e9edd65e4c4f", algorithm="hmac-sha1", headers="x-date", signature="'+t.getHMAC("B64")+'"',"X-Date":e}}var h=function(){var e=Object(j.a)(l.a.mark((function e(t,n,a){var c,i,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({lat:n,lng:a}),c="https://ptx.transportdata.tw/MOTC/v2/Tourism/".concat(t,"?$top=30&$spatialFilter=nearby(").concat(n,",").concat(a,",800)&$format=JSON"),i={headers:p()},e.prev=3,e.next=6,d.a.get(c,i);case 6:return s=e.sent,r=s.data,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t,n,a){return e.apply(this,arguments)}}(),m=n(90),x=n(164),O=n(165),g=n(166),f=n(180),v=n(181),y=n(91),C=n.n(y),w=n(64),N=n(162),k=n(16),S=Object(N.a)((function(e){return{title:Object(w.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(w.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(w.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),toolbar:{display:"flex",justifyContent:"space-between"}}})),T=n(5),P=function(){var e=S();return Object(T.jsx)(x.a,{position:"static",children:Object(T.jsxs)(O.a,{className:e.toolbar,children:[Object(T.jsx)(g.a,{variant:"h5",className:e.title,children:"Title"}),Object(T.jsxs)(f.a,{display:"flex",children:[Object(T.jsx)(g.a,{variant:"h6",className:e.title,children:"Explore new places"}),Object(T.jsx)(m.a,{children:Object(T.jsxs)("div",{className:e.search,children:[Object(T.jsx)("div",{className:e.searchIcon,children:Object(T.jsx)(C.a,{})}),Object(T.jsx)(v.a,{placeholder:"Search ...",classes:{root:e.inputRoot,input:e.inputInput}})]})})]})]})})},I=n(95),B=n(167),E=n(97),z=n(93),R=n.n(z),A=Object(N.a)((function(){return{paper:{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",width:"100px"},mapContainer:{height:"85vh",width:"100%"},markerContainer:{position:"absolute",transform:"translate(-50%, -50%)",zIndex:1,"&:hover":{zIndex:2}},pointer:{cursor:"pointer"}}})),D=function(e){var t=e.setCoordinates,n=e.setChildClicked,a=e.coordinates,c=e.places,i=A(),s=Object(B.a)("(min-width: 600px)");return Object(T.jsx)("div",{className:i.mapContainer,children:Object(T.jsx)(I.a,{bootstrapURLKeys:{key:"AIzaSyC9ODy2bGaog-iVTQzOAx7paJMcV3JWTR4"},defaultCenter:a,center:a,defaultZoom:14,margin:[50,50,50,50],onChange:function(e){console.log(e),t({lat:e.center.lat,lng:e.center.lng})},onChildClick:function(e){n(e)},children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(T.jsx)("div",{className:i.makerContainer,lat:Number(e.Position.PositionLat),lng:Number(e.Position.PositionLon),children:s?Object(T.jsxs)(E.a,{elevation:3,className:i.paper,children:[Object(T.jsx)(g.a,{className:i.Typography,variant:"subtitle2",gutterBottom:!0,children:e.Name}),Object(T.jsx)("img",{className:i.pointer,src:e.Picture?e.Picture.PictureUrl1:null,alt:e.Name})]}):Object(T.jsx)(R.a,{color:"primary",fontSize:"large"})},t)}))})})},L=n(175),M=n(176),J=n(183),V=n(179),H=n(184),U=n(177),K=n(168),Q=n(169),W=n(170),X=n(182),$=n(173),F=n(174),G=n(171),Z=n(172),_=Object(N.a)((function(){return{chip:{margin:"5px 5px 5px 0"},subtitle:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"10px"},spacing:{display:"flex",alignItems:"center",justifyContent:"space-between"}}})),q=function(e){var t,n=e.place,a=e.selected,c=e.refProp,i=_();a&&(null===c||void 0===c||null===(t=c.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"}));return Object(T.jsxs)(K.a,{children:[Object(T.jsx)(Q.a,{style:{height:350},image:n.Picture?n.Picture.PictureUrl1:"",title:n.Name}),Object(T.jsxs)(W.a,{children:[Object(T.jsx)(g.a,{gutterBottom:!0,variant:"h5",children:n.Name}),n.OpenTime?Object(T.jsxs)(f.a,{display:"flex",justifyContent:"space-between",children:[Object(T.jsx)(g.a,{variant:"subtitle1",children:"\u71df\u696d\u6642\u9593"}),Object(T.jsx)(g.a,{gutterBottom:!0,variant:"subtitle1",children:n.OpenTime})]}):null,Object(T.jsx)(f.a,{display:"flex",justifyContent:"space-between",children:Object(T.jsx)(g.a,{gutterBottom:!0,variant:"body1",color:"textSecondary",children:n.Description||n.DescriptionDetail})}),n.ParkingInfo?Object(T.jsx)(f.a,{display:"flex",justifyContent:"space-between",children:Object(T.jsx)(g.a,{gutterBottom:!0,variant:"subtitle1",children:n.ParkingInfo})}):null,Object(T.jsx)(X.a,{size:"small",label:n.Class||n.Class1,className:i.chip}),Object(T.jsxs)(g.a,{gutterBottom:!0,variant:"subtitle2",color:"textSecondary",className:i.subtitle,children:[Object(T.jsx)(G.a,{}),n.Address||n.City]}),Object(T.jsxs)(g.a,{variant:"subtitle2",color:"textSecondary",className:i.spacing,children:[Object(T.jsx)(Z.a,{}),n.Phone]}),Object(T.jsx)($.a,{children:Object(T.jsx)(F.a,{size:"small",color:"primary",onClick:function(){return window.open(n.WebsiteUrl,"_blank")},children:"\u5b98\u65b9\u7db2\u7ad9"})})]})]})},Y=Object(N.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,marginBottom:"30px"},selectEmpty:{marginTop:e.spacing(2)},loading:{height:"600px",display:"flex",justifyContent:"center",alignItems:"center"},container:{padding:"25px"},marginBottom:{marginBottom:"30px"},list:{height:"75vh",overflow:"auto"}}})),ee=function(e){var t=e.type,n=e.setType,c=e.places,i=e.childClicked,s=e.isLoading,o=Y(),l=Object(a.useState)([]),j=Object(r.a)(l,2),u=j[0],d=j[1];return Object(a.useEffect)((function(){var e=Array(null===c||void 0===c?void 0:c.length).fill().map((function(e,t){return u[t]||Object(a.createRef)()}));d(e)}),[c]),Object(T.jsxs)("div",{className:o.container,children:[Object(T.jsx)(g.a,{variant:"h4",children:"\u5468\u570d\u7684\u9910\u5ef3\u3001\u4f4f\u5bbf\u8207\u666f\u9ede"}),s?Object(T.jsx)("div",{className:o.loading,children:Object(T.jsx)(L.a,{size:"5rem"})}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(M.a,{className:o.formControl,children:[Object(T.jsx)(J.a,{children:"Type"}),Object(T.jsxs)(V.a,{value:t,onChange:function(e){return n(e.target.value)},children:[Object(T.jsx)(H.a,{value:"ScenicSpot",children:"\u666f\u9ede"}),Object(T.jsx)(H.a,{value:"Restaurant",children:"\u9910\u5ef3"}),Object(T.jsx)(H.a,{value:"Hotel",children:"\u65c5\u9928"})]})]}),Object(T.jsx)(U.a,{container:!0,spacing:3,className:o.list,children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(T.jsx)(U.a,{ref:u[t],item:!0,xs:12,children:Object(T.jsx)(q,{place:e,selected:Number(i)===t,refProp:u[t]})},t)}))})]})]})},te=n(178),ne=function(){var e=Object(a.useState)({lat:25.047675,lng:121.517055}),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)("ScenicSpot"),s=Object(r.a)(i,2),o=s[0],l=s[1],j=Object(a.useState)(null),u=Object(r.a)(j,2),d=u[0],b=u[1],p=Object(a.useState)(null),m=Object(r.a)(p,2),x=m[0],O=m[1],g=Object(a.useState)(!1),f=Object(r.a)(g,2),v=f[0],y=f[1];return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;c({lat:n,lng:a})}),(function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){y(!0),n&&h(o,n.lat,n.lng).then((function(e){b(e),y(!1)})).catch((function(e){return console.log(e)}))}),[n,o]),Object(T.jsxs)("div",{children:[Object(T.jsx)(te.a,{}),Object(T.jsx)(P,{}),Object(T.jsxs)(U.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(T.jsx)(U.a,{item:!0,xs:12,md:4,children:Object(T.jsx)(ee,{type:o,setType:l,places:d,childClicked:x,isLoading:v})}),Object(T.jsx)(U.a,{item:!0,xs:12,md:8,children:Object(T.jsx)(D,{setCoordinates:c,setChildClicked:O,coordinates:n,places:d})})]})]})},ae=n(94),ce=n(13);var ie=function(){return Object(T.jsx)(ae.a,{basename:"/Bus-Search-System",children:Object(T.jsx)(ce.c,{children:Object(T.jsx)(ce.a,{path:"/",element:Object(T.jsx)(ne,{})})})})};s.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(ie,{})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.d39dd44a.chunk.js.map