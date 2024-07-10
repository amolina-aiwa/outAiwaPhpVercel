(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[385],{8210:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buscar",function(){return n(1151)}])},2297:function(e,a,n){"use strict";n.d(a,{Z:function(){return ProductCard}});var i=n(5893),s=n(2961),r=n(4048),t=n(3094),o=n(3441),d=n(2656),l=n(5111);n(1163);var c=n(7294),u=n(7056),m=n(3652),h=n(5675),f=n.n(h),p=n(1664),x=n.n(p);function ProductCard(e){let{sku:a,products:n,showName:h,showSku:p,showDesc:g,showButton:j,showGen:S,showTags:k,showDownload:w,showMenu:b,showViewing:C}=e,[N,v]=(0,c.useState)(null),P=!!N;if(!n)return console.error("Products array is undefined"),null;let T=n.find(e=>e.sku==a);if(!T)return console.error("Product not found for SKU:",a),null;function toggleMenu(e){P?v(null):v(e.currentTarget)}if("string"==typeof T.img_url)try{T.img_url=JSON.parse(T.img_url)}catch(e){return console.error("Error parsing imgUrls:",e),null}if(!Array.isArray(T.img_url))return console.error("imgUrls is not an array:",T.img_url),null;let _=T.img_url.length>0?T.img_url[0]:"/path/to/default-image.jpg";return(0,i.jsxs)("div",{className:"product-card",children:[C&&(0,i.jsx)(s.Z,{}),(0,i.jsx)(x(),{href:"#",children:(0,i.jsx)("div",{className:"image",children:(0,i.jsx)(f(),{width:"150",height:"150",src:_,alt:T.name,placeholder:"blur",blurDataURL:"/ph.png",priority:!0})})}),(0,i.jsxs)("div",{className:"texts",children:[p&&(0,i.jsx)("p",{className:"p-sku",children:T.sku}),h&&(0,i.jsx)(x(),{href:"#",children:(0,i.jsx)("p",{className:"p-name",children:T.name})}),g&&(0,i.jsx)("p",{className:"p-desc",children:(0,i.jsx)("small",{children:T.shortDesc})}),S&&(0,i.jsx)("p",{className:"p-desc",children:(0,i.jsx)("small",{children:T.gen})}),w&&(0,i.jsxs)("a",{className:"p-download-button",href:T.downloads,target:"_blank",rel:"noreferrer",children:[(0,i.jsx)(r.Z,{}),"Descargas"]}),b&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("button",{className:"options-menu",onClick:toggleMenu,children:["Opciones",(0,i.jsx)(l.Z,{})]}),(0,i.jsxs)(m.Z,{anchorEl:N,open:P,onClose:toggleMenu,sx:{maxWidth:"300px"},children:[(0,i.jsx)(u.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,i.jsxs)(x(),{className:"search-menu-link",href:T.link,children:[(0,i.jsx)(s.Z,{fontSize:"small"}),"Ver producto"]})}),T.buyLink&&(0,i.jsx)(u.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,i.jsxs)(x(),{className:"search-menu-link",target:"_blank",href:T.buyLink,children:[(0,i.jsx)(d.Z,{fontSize:"small"}),"Comprar"]})}),T.features&&(0,i.jsx)(u.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,i.jsxs)(x(),{className:"search-menu-link",href:"".concat(T.link,"#product-features-anchor"),children:[(0,i.jsx)(t.Z,{fontSize:"small"}),"Caracter\xedsticas"]})}),T.downloads&&(0,i.jsx)(u.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,i.jsxs)(x(),{className:"search-menu-link",href:T.downloads,target:"_blank",children:[(0,i.jsx)(o.Z,{fontSize:"small"}),"Descargas"]})})]})]})]}),j&&(0,i.jsx)("button",{className:"see-more",children:(0,i.jsx)(x(),{href:T.link,children:"Ver m\xe1s"})})]})}},1151:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return Buscar}});var i=n(5893);n(9263);var s=[{id:1,name:"Micr\xf3fono"},{id:2,name:"Potencia"},{id:3,name:"Woofers"},{id:4,name:"Tweeters"},{id:5,name:"Reguladores",hideInSearchPage:!0},{id:6,name:"Display"},{id:7,name:"Efectos de Luces"},{id:8,name:"Entradas"},{id:9,name:"Conectividad"},{id:10,name:"Bater\xeda"},{id:11,name:"Duraci\xf3n de Bater\xeda"},{id:12,name:"Luces"},{id:13,name:"Funciones"},{id:14,name:"Caja (cuerpo)"},{id:15,name:"Otras Caracter\xedsticas",hideInSearchPage:!0},{id:16,name:"Medidas del Producto",hideInSearchPage:!0},{id:17,name:"Medidas de la Caja",hideInSearchPage:!0},{id:18,name:"Peso",hideInSearchPage:!0},{id:19,name:"EAN",hideInSearchPage:!0},{id:20,name:"Radio FM"},{id:21,name:"Uso",hideInSearchPage:!0},{id:23,name:"Efectos"},{id:24,name:"Cuerpo"},{id:25,name:"Efectos de Voz"},{id:26,name:"Carry-On"},{id:27,name:"Controles"},{id:28,name:"Tipo de conexi\xf3n"},{id:29,name:"Longitud del cable"},{id:30,name:"Frecuencia de respuesta"},{id:31,name:"Impedancia"},{id:32,name:"Sensibilidad"},{id:33,name:"Sensibilidad (micr\xf3fono)"},{id:34,name:"Di\xe1metro del diafragma"},{id:35,name:"Alcance de Bluetooth"},{id:36,name:"Versi\xf3n de Bluetooth"},{id:37,name:"Formatos de Bluetooth"},{id:38,name:"Tiempo de carga"},{id:39,name:"Indicador de carga"},{id:40,name:"Tipo de bater\xeda"},{id:41,name:"Tama\xf1o de pantalla"},{id:42,name:"Resoluci\xf3n"},{id:43,name:"Procesador"},{id:44,name:"Memoria RAM"},{id:45,name:"Almacenamiento"},{id:46,name:"C\xe1mara"},{id:47,name:"Sistema Operativo"},{id:48,name:"Wifi"},{id:49,name:"Parlantes"},{id:50,name:"Micr\xf3fono"},{id:51,name:"Bater\xeda"},{id:52,name:"Tiempo de uso"},{id:53,name:"True Wireless Stereo"},{id:54,name:"Efectos de luces"},{id:55,name:"Empu\xf1adura de Transp."},{id:56,name:"Mobile Holder"},{id:57,name:"Altavoz"},{id:58,name:"Impermeabilidad"},{id:59,name:"Tensi\xf3n"},{id:60,name:"Capacidad"},{id:61,name:"Temporizador digital"},{id:62,name:"Duraci\xf3n de temporizador"},{id:63,name:"Cantidad de velocidades"},{id:64,name:"Es planetaria"},{id:65,name:"Funciones"},{id:66,name:"Cantidad de accesorios"},{id:67,name:"Material de los accesorios"},{id:68,name:"Panel digital touch"},{id:69,name:"Uso recomendado"},{id:70,name:"Frecuencia"},{id:71,name:"Peso"}],r=n(5079),t=n(7294),o=n(2297),d=n(8141),l=n(7169),c=n(788);function SearchContainer(){let e;let[a,n]=(0,t.useState)([]),[u,m]=(0,t.useState)(""),[h,f]=(0,t.useState)(""),[p,x]=(0,t.useState)(""),[g,j]=(0,t.useState)(!1),[S,k]=(0,t.useState)(!1),[w,b]=(0,t.useState)(!0),[C,N]=(0,t.useState)("");async function fetchProducts(){let e=await fetch("/api/audio"),a=await fetch("/api/cooks"),i=await fetch("/api/headsets"),s=await fetch("/api/tablets"),r=await fetch("/api/notebooks"),t=await e.json(),o=await a.json(),d=await i.json(),l=await s.json(),c=await r.json(),u=[...t,...o,...d,...l,...c];n(u)}function sortAlphabetically(e,a){return a?e.sort((e,n)=>e[a]>=n[[a]]?1:-1):e.sort((e,a)=>e>=a?1:-1)}function removeDuplicates(e){return Array.from(new Set(e))}if((0,t.useEffect)(()=>{fetchProducts()},[]),u){e=function(e,a){let n=r.gD.map(a=>a.parent==e&&a.id);return a.filter(e=>e.categories.some(e=>n.some(a=>a==e)))}(u,a);let n=s.filter(a=>e.some(e=>e.features.some(e=>e.id==a.id&&!a.hideInSearchPage)));if(finalFeatures=removeDuplicates(sortAlphabetically(n,"name")),h){let a=[];e.forEach(e=>{let n=e.features.find(e=>e.id==h);n&&a.push(n.value)}),finalValues=removeDuplicates(sortAlphabetically(a)),p&&(e=e.filter(e=>e.features.some(e=>e.id==h&&e.value==p)))}}else e=a;function changeSku(e){let a=e.target.value;N(a.toUpperCase())}C&&(e=e.filter(e=>e.sku.includes(C)));let scrollToTop=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,t.useEffect)(()=>{window.addEventListener("scroll",()=>{window.pageYOffset>300?k(!0):k(!1)})},[]),(0,i.jsxs)("main",{className:"search",children:[(0,i.jsxs)("aside",{className:"filters",children:[(0,i.jsx)("button",{className:"mobile-open ".concat(w&&"open"),onClick:function(){b(e=>!e),scrollToTop()},children:(0,i.jsx)(d.Z,{})}),(0,i.jsxs)("div",{className:"wrapper ".concat(w&&"open"),children:[(0,i.jsx)("h1",{children:"B\xfasqueda de productos"}),(0,i.jsx)(c.Z,{disablePortal:!0,id:"sku-input",options:e.map(e=>e.sku),fullWidth:!0,disableClearable:!0,onSelect:changeSku,value:C,isOptionEqualToValue:(e,a)=>!0,renderInput:e=>(0,i.jsx)(l.Z,{...e,onChange:changeSku,label:"Modelo"})}),(0,i.jsxs)("button",{className:"back-to-top ".concat(S&&"visible"),onClick:scrollToTop,value:"",children:[(0,i.jsx)(d.Z,{fontSize:"small"}),"Volver arriba"]})]})]}),(0,i.jsxs)("div",{className:"products",children:[(0,i.jsxs)("p",{className:"results",children:["Resultados: ",e.length]}),e.map((a,n)=>(0,i.jsx)(o.Z,{sku:a.sku,products:e,showName:!0,showSku:!0,showTags:!0,showMenu:!0,showViewing:!0},n))]})]})}function Buscar(){return(0,i.jsx)(SearchContainer,{})}}},function(e){e.O(0,[662,128,169,298,263,774,888,179],function(){return e(e.s=8210)}),_N_E=e.O()}]);