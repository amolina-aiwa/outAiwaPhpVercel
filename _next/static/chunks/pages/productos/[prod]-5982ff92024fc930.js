(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[907],{3620:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos/[prod]",function(){return r(8575)}])},2297:function(e,s,r){"use strict";r.d(s,{Z:function(){return ProductCard}});var a=r(5893),n=r(2961),t=r(4048),i=r(3094),l=r(3441),c=r(2656),o=r(5111);r(1163);var d=r(7294),u=r(7056),p=r(3652),m=r(5675),h=r.n(m),x=r(1664),g=r.n(x);function ProductCard(e){let{sku:s,products:r,showName:m,showSku:x,showDesc:f,showButton:j,showGen:b,showTags:w,showDownload:N,showMenu:k,showViewing:v}=e,[y,S]=(0,d.useState)(null),_=!!y;if(!r)return console.error("Products array is undefined"),null;let A=r.find(e=>e.sku==s);if(!A)return console.error("Product not found for SKU:",s),null;function toggleMenu(e){_?S(null):S(e.currentTarget)}if("string"==typeof A.img_url)try{A.img_url=JSON.parse(A.img_url)}catch(e){return console.error("Error parsing imgUrls:",e),null}if(!Array.isArray(A.img_url))return console.error("imgUrls is not an array:",A.img_url),null;let C=A.img_url.length>0?A.img_url[0]:"/path/to/default-image.jpg";return(0,a.jsxs)("div",{className:"product-card",children:[v&&(0,a.jsx)(n.Z,{}),(0,a.jsx)(g(),{href:"/productos/".concat(A.sku),children:(0,a.jsx)("div",{className:"image",children:(0,a.jsx)(h(),{width:"150",height:"150",src:C,alt:A.name,placeholder:"blur",blurDataURL:"/ph.png",priority:!0})})}),(0,a.jsxs)("div",{className:"texts",children:[x&&(0,a.jsx)("p",{className:"p-sku",children:A.sku}),m&&(0,a.jsx)(g(),{href:"/productos/".concat(A.sku),children:(0,a.jsx)("p",{className:"p-name",children:A.name})}),f&&(0,a.jsx)("p",{className:"p-desc",children:(0,a.jsx)("small",{children:A.shortDesc})}),b&&(0,a.jsx)("p",{className:"p-desc",children:(0,a.jsx)("small",{children:A.gen})}),N&&(0,a.jsxs)("a",{className:"p-download-button",href:A.downloads,target:"_blank",rel:"noreferrer",children:[(0,a.jsx)(t.Z,{}),"Descargas"]}),k&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{className:"options-menu",onClick:toggleMenu,children:["Opciones",(0,a.jsx)(o.Z,{})]}),(0,a.jsxs)(p.Z,{anchorEl:y,open:_,onClose:toggleMenu,sx:{maxWidth:"300px"},children:[(0,a.jsx)(u.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,a.jsxs)(g(),{className:"search-menu-link",href:"/productos/".concat(A.sku),children:[(0,a.jsx)(n.Z,{fontSize:"small"}),"Ver producto"]})}),A.buyLink&&(0,a.jsx)(u.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,a.jsxs)(g(),{className:"search-menu-link",target:"_blank",href:A.buyLink,children:[(0,a.jsx)(c.Z,{fontSize:"small"}),"Comprar"]})}),A.features&&(0,a.jsx)(u.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,a.jsxs)(g(),{className:"search-menu-link",href:"/productos/".concat(A.sku,"#product-features-anchor"),children:[(0,a.jsx)(i.Z,{fontSize:"small"}),"Caracter\xedsticas"]})}),A.downloads&&(0,a.jsx)(u.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,a.jsxs)(g(),{className:"search-menu-link",href:A.downloads,target:"_blank",children:[(0,a.jsx)(l.Z,{fontSize:"small"}),"Descargas"]})})]})]})]}),j&&(0,a.jsx)("button",{className:"see-more",children:(0,a.jsx)(g(),{href:"/productos/".concat(A.sku),children:"Ver m\xe1s"})})]})}},3969:function(e,s){"use strict";s.Z=[{name:"infinit",displayName:"Infinit",desc:"Posibilidades Ilimitadas",logo:"/lineas/infinit/logo.png",indexImage:"/lineas/infinit/indexImage.png",banner:"/lineas/infinit/banner-pc.jpg",bannerMobile:"/lineas/infinit/banner-mob.jpg",background:"/lineas/infinit/big-bg.jpg",link:"/lineas/infinit"},{name:"waterproof",displayName:"Waterproof",desc:"",logo:"/lineas/waterproof/logo.png",indexImage:"/lineas/waterproof/Banners_Parlantes-waterproof_Portatiles_03.png",banner:"/lineas/waterproof/banner-pc.webp",bannerMobile:"/lineas/waterproof/banner-mob.webp",background:"/lineas/waterproof/big-bg.jpg",link:"/lineas/waterproof"},{name:"flama",displayName:"Flama",desc:"Acercate al fuego",logo:"/lineas/flama/logo.png",indexImage:"/lineas/flama/bg.png",banner:"/lineas/flama/banner-pc.webp",bannerMobile:"/lineas/flama/banner-mob.webp",background:"/lineas/flama/big-bg.webp",link:"/lineas/flama"},{name:"ring",displayName:"Ring",desc:"Potencia insuperable",logo:"/lineas/ring/logo.png",indexImage:"/lineas/ring/bg.png",banner:"/lineas/ring/banner-pc.webp",bannerMobile:"/lineas/ring/banner-mob.webp",background:"/lineas/ring/big-bg.webp",link:"/lineas/ring"},{name:"party",displayName:"Party",desc:"Que la fiesta nunca pare",logo:"/lineas/party/logo.png",indexImage:"/lineas/party/bg.jpg",banner:"/lineas/party/banner-pc.webp",bannerMobile:"/lineas/party/banner-mob.webp",background:"/lineas/party/big-bg.webp",link:"/lineas/party"}]},4874:function(e,s){"use strict";s.Z={aiwaElec:"AIWA Electronics",spacer:" | ",irTienda:"Ir a la tienda",comprar:"Comprar",verMas:"Ver m\xe1s",continuar:"Continuar",masInfo:"M\xe1s informaci\xf3n",buscar:"Buscar",contactoTitle:"Contactanos",contactoDesc:"Pod\xe9s contactarnos, si necesit\xe1s ayuda, asesoramiento o sumarte a nuestro equipo.",contactoDisclaimer:"aiwaelectronics.com.ar es representante de la marca AIWA \xfanicamente en Argentina. Para los productos AIWA adquiridos fuera del pa\xeds no tiene la responsabilidad de la garant\xeda y no cuenta con la informaci\xf3n t\xe9cnica y ni de soporte. Por favor, contactarse con el distribuidor de AIWA correspondiente a su pa\xeds.",contactanos:"Escribinos",motivo:"Seleccione el motivo del mensaje",soporteTitle:"Soporte",soporteDesc:"Preguntas frecuentes y contenido espec\xedfico sobre nuestros productos. Consultas sobre garant\xeda de productos llamar al: 0800-444-1212",soporteBuscar:"Busc\xe1 tu producto AIWA por nombre"}},8575:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return Producto}});var a=r(5893),n=r(1163),t=r(7294);function Loading(){return(0,a.jsx)("div",{className:"spinner-wrapper",children:(0,a.jsxs)("div",{className:"lds-facebook",children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{})]})})}var i=r(6693),l=r(5938),c=r(5500),o=r(1023),d=r(5675),u=r.n(d),p=r(1911),m=r(8494),h=r(9755),x=r.n(h),g=r(6939);function ProductMorePhotos(e){let{sku:s,shortDesc:r,arr:n,fs:i,setFs:l}=e,[c,o]=(0,t.useState)(null);if("string"==typeof n)try{n=JSON.parse(n)}catch(e){return console.error("Error parsing imgUrls:",e),null}return Array.isArray(n)?(0,a.jsxs)("div",{className:"product-more-photos",children:[(0,a.jsx)("div",{className:"text",children:!i&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"sku",children:s}),(0,a.jsx)("h1",{children:r})]})}),(0,a.jsxs)(m.tq,{tag:"div",className:"more-photos",active:i?"true":"false",modules:[p.W_,p.tl],loop:!0,navigation:!0,pagination:{clickable:!0},onInit:e=>o(e),children:[(0,a.jsx)("button",{className:"mui-button fs-btn ".concat(i&&"active"),onClick:function(){l(e=>!e)},children:(0,a.jsx)(g.Z,{fontSize:"large"})}),n.map((e,r)=>(0,a.jsx)(m.o5,{className:"more-photos-slide",children:(0,a.jsx)(x(),{src:e,layout:"fill",alt:"".concat(s," photos")})},r))]}),(0,a.jsx)("div",{className:"thumbnails",children:n.map((e,s)=>(0,a.jsx)("button",{onClick:()=>c.slideTo(s+1),children:(0,a.jsx)(x(),{src:e,width:"105",height:"105",alt:"thumbnail"})},s))})]}):(console.error("imgUrls is not an array:",n),null)}var f=r(569),j=r(9956);function ProductBanners(e){let{banners:s,line:r}=e;if("string"==typeof s)try{s=JSON.parse(s)}catch(e){return console.error("Error parsing banners:",e),null}return Array.isArray(s)?(0,a.jsx)("section",{className:"product-banners",line:r,children:s.map((e,s)=>(0,a.jsxs)("div",{className:"product-banner ".concat(s%2==0&&"inv"),children:[(0,a.jsx)("div",{className:"img-wrapper",children:(0,a.jsx)(x(),{src:e.img,alt:e.title,width:"800",height:"350",sizes:"100vw",priority:e.priority?"true":"false"})}),(0,a.jsxs)("div",{className:"text",children:[(0,a.jsx)("h3",{children:e.title}),(0,a.jsx)("p",{children:e.desc})]})]},e.title))}):(console.error("banners is not an array:",s),null)}var b=r(5121),w=r(9008),N=r.n(w);function ProductFeatures(e){let{prod:s}=e,[r,n]=(0,t.useState)(null),[i,l]=(0,t.useState)([]);(0,t.useEffect)(()=>{let fetchFeaturesFeatured=async()=>{try{let e=await b.Z.get("https://www.aiwaelectronics.com.ar/featuredFeatures.php"),s=e.data;l(s),s.length>0&&n(s[0].id)}catch(e){console.error("Error al obtener datos de featuredFeatures:",e)}};fetchFeaturesFeatured()},[]);let c=[];if("string"==typeof s.featuredFeatures)try{c=JSON.parse(s.featuredFeatures)}catch(e){console.error("Error parsing featuredFeatures:",e)}else Array.isArray(s.featuredFeatures)?c=s.featuredFeatures:console.error("Formato de featuredFeatures incorrecto:",s.featuredFeatures);let o=i.filter(e=>c.some(s=>e.id.toString()===s.id.toString())),handleFeatureClick=e=>{n(e)},d=o.find(e=>e.id.toString()===(null==r?void 0:r.toString()));return(0,a.jsxs)("section",{className:"product-features",id:"product-features",children:[(0,a.jsx)("a",{className:"anchor",id:"product-features-anchor"}),(0,a.jsx)(N(),{children:(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"},"no-scale")}),(0,a.jsxs)("div",{className:"left",children:[(0,a.jsx)("p",{children:"Seleccion\xe1 una caracter\xedstica"}),(0,a.jsx)("div",{className:"icons",children:o.map(e=>(0,a.jsx)("div",{className:"button-wrapper",children:(0,a.jsx)("button",{className:r===e.id?"active":void 0,onClick:()=>handleFeatureClick(e.id),children:(0,a.jsx)("div",{className:"background",children:(0,a.jsx)("img",{src:e.imgUrl,alt:e.name,width:40,height:40})})})},e.id))})]}),(0,a.jsx)("div",{className:"right",children:d?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"icon-shadow",children:(0,a.jsx)("img",{src:d.imgUrl,alt:d.name,width:400,height:400})}),(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("img",{src:d.imgUrl,alt:d.name,width:140,height:140,style:{filter:"brightness(3) invert(1) sepia(100%) saturate(10000%) hue-rotate(0deg)",borderColor:"#e02327"}}),(0,a.jsxs)("div",{className:"text",children:[(0,a.jsx)("h2",{children:d.name&&d.name.toUpperCase()}),(0,a.jsx)("p",{children:d.desc?d.desc:d.name})]})]})]}):(0,a.jsx)("h2",{children:"Hac\xe9 click en uno de los iconos de la izquierda"})})]})}var k=r(4065),v=r(9618),y=r(7028),S=r(3508);function AccordionItem(e){let{classes:s,name:r,children:n,open:t}=e;return(0,a.jsxs)(k.Z,{className:s,defaultExpanded:t,children:[(0,a.jsx)(v.Z,{expandIcon:(0,a.jsx)(S.Z,{}),children:r}),(0,a.jsx)(y.Z,{className:"".concat(s," details"),children:n})]})}var _=r(7431);function IncludesItem(e){let{item:s}=e;return(0,a.jsxs)("div",{className:"includes-item",children:[(0,a.jsx)(u(),{src:s.img,alt:s.name,width:"100",height:"100"}),(0,a.jsx)("p",{children:s.name})]})}var A=r(2297);function ProductSpecsTable(e){let{prod:s,features:r,includes:n}=e,i=[];if("string"==typeof s.features)try{i=JSON.parse(s.features)}catch(e){console.error("Error parsing prod.features:",e)}else i=s.features||[];let l=r.map(e=>({id:e.id,name:e.name})),c=i.filter(e=>l.some(s=>s.id===e.id)),o=c.map(e=>{let s=l.find(s=>s.id===e.id);return{...e,name:s.name}}),d=[];if("string"==typeof s.includes)try{d=JSON.parse(s.includes)}catch(e){console.error("Error parsing prod.includes:",e)}else d=s.includes||[];let u=(e=>{if("string"==typeof e)try{let s=JSON.parse(e);if(Array.isArray(s)&&s.length>0)return s[0]}catch(e){console.error("Error parsing recetario URL:",e)}return e})(s.recetario);return(0,a.jsxs)("section",{id:"prod-specs",children:[(0,a.jsx)(AccordionItem,{classes:"prod-specs-table",name:"Especificaciones",children:(0,a.jsxs)("div",{className:"table-cell-container",children:[(0,a.jsx)("div",{className:"table-cell sku",children:(0,a.jsx)("div",{className:"title",children:s.sku})}),s.featuresSections&&s.featuresSections.map((e,s)=>(0,a.jsxs)(t.Fragment,{children:[(0,a.jsx)("div",{className:"table-cell sku",children:(0,a.jsx)("div",{className:"title",children:e.title})}),e.items.map((e,s)=>(0,a.jsxs)("div",{className:"table-cell",children:[(0,a.jsx)("div",{className:"title",children:e.name}),(0,a.jsx)("p",{className:"desc",children:e.value})]},s))]},s)),!s.featuresSections&&o.map((e,s)=>(0,a.jsxs)("div",{className:"table-cell",children:[(0,a.jsx)("div",{className:"title",children:e.name}),(0,a.jsx)("p",{className:"desc",children:e.value})]},s))]})}),(0,a.jsxs)(AccordionItem,{classes:"prod-specs-table",name:"Incluye",children:[(0,a.jsx)("div",{className:"includes-container",children:d.map((e,s)=>{let r=n.find(s=>e.id===s.id);return r?(0,a.jsx)(IncludesItem,{item:r},s):null})}),s.certNo&&(0,a.jsx)("p",{children:(0,a.jsxs)("small",{children:["*N\xfamero de certificado de Seguridad El\xe9ctrica: ",s.certNo]})})]}),(0,a.jsx)(AccordionItem,{classes:"prod-specs-table",name:"Descargas",children:(0,a.jsxs)("div",{className:"download-items",children:["6"===s.categories&&u&&(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:u,target:"_blank",rel:"noreferrer",className:"to-right recetario",children:(0,a.jsx)("span",{className:"pc-only",children:"RECETARIO"})})}),(0,a.jsxs)("a",{href:s.driveLink,target:"_blank",rel:"noreferrer",children:[(0,a.jsx)(_.Z,{}),s.noManual?"Acced\xe9 a las im\xe1genes y ficha del producto":"Acced\xe9 al manual, im\xe1genes y ficha del producto"]})]})}),s.variants&&s.variants.length>0&&(0,a.jsx)(AccordionItem,{classes:"prod-specs-table variants",name:"Generaciones",open:!0,children:(0,a.jsx)("div",{className:"wrapper",children:s.variants.map((e,r)=>(0,a.jsx)(A.Z,{sku:e,showName:!0,showSku:!0,showGen:!0,showTags:!0,showViewing:e===s.sku},r))})})]})}var C=r(4871);function YoutubeBanner(){return(0,a.jsxs)("section",{className:"youtube-banner",children:[(0,a.jsx)(C.Z,{}),(0,a.jsxs)("div",{className:"text",children:[(0,a.jsx)("h2",{children:"Seguinos en Youtube"}),(0,a.jsx)("p",{children:"Mantenete al dia con nuestros \xfaltimos lanzamientos"}),(0,a.jsx)("button",{children:(0,a.jsx)("a",{href:"https://www.youtube.com/channel/UCRkTF2nWEUD3-KcAwwoVwrg",target:"_blank",rel:"noopener noreferrer",children:"Ir al canal"})})]})]})}var F=r(3969);function ProductContent(e){let{prod:s,features:r,includes:n,featuredFeatures:d}=e,[p,m]=(0,t.useState)(0),[h,x]=(0,t.useState)(0),[g,b]=(0,t.useState)(!1),w=F.Z.find(e=>e.name===s.line);if((0,t.useEffect)(()=>{window&&x(window.screen.width)},[]),"string"==typeof s.img_url)try{s.img_url=JSON.parse(s.img_url)}catch(e){return console.error("Error parsing imgUrls:",e),null}if(!Array.isArray(s.img_url))return console.error("imgUrls is not an array:",s.img_url),null;let N=s.img_url&&s.img_url.length>0?s.img_url[0]:"/path/to/default-image.jpg",k="6"===s.categories?"https://www.aiwaelectronics.com.ar/photoserver/backgrounds/banner-cooks.webp":w?w.background:"/path/to/default-background.jpg";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"top-wrapper",fullscreen:g?"true":"false",children:[(0,a.jsxs)("div",{className:"always-on-top ".concat(3==p&&"video-open"),children:[(0==p||2==p)&&s[360]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{className:"video pc-only",onClick:()=>m(1),children:[(0,a.jsx)("img",{src:"/360-logo.svg",className:"three-sixty",alt:"360-logo"}),(0,a.jsx)("video",{width:"145",height:"145",muted:!0,autoPlay:!0,loop:!0,children:(0,a.jsx)("source",{src:"/products/".concat(s.sku,"/360.mp4"),type:"video/mp4"})})]}),(0,a.jsx)("button",{className:"to-right mobile-only",onClick:()=>m(1),children:(0,a.jsx)(f.Z,{})})]}),(1==p||2==p||3==p)&&(0,a.jsxs)("button",{className:"to-right",onClick:()=>{m(0),b(!1)},children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)("span",{className:"pc-only",children:"VOLVER"})]}),2!=p&&(0,a.jsxs)("button",{className:"to-right",onClick:()=>m(2),children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)("span",{className:"pc-only",children:"FOTOS"})]}),3!=p&&s.videos&&s.videos.length>0&&(0,a.jsxs)("button",{className:"to-right",onClick:()=>m(3),children:[(0,a.jsx)(j.Z,{}),(0,a.jsx)("span",{className:"pc-only",children:"VIDEOS"})]}),(0,a.jsx)("a",{href:"#product-features-anchor",children:(0,a.jsxs)("button",{className:"to-right",children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)("span",{className:"pc-only",children:"DETALLES"})]})}),s.buyLink&&(0,a.jsx)("a",{href:s.buyLink,target:"_blank",rel:"noreferrer",children:(0,a.jsxs)("button",{className:"to-right",children:[(0,a.jsx)(c.Z,{}),(0,a.jsx)("span",{className:"pc-only",children:"COMPRAR"})]})})]}),0==p&&(0,a.jsxs)("div",{className:"default".concat("6"===s.categories?" bg-yellow":s.altBackground?" bg-alt":""),style:{backgroundImage:"url(".concat(k,")")},children:[(0,a.jsx)("div",{className:"text-wrapper",children:(0,a.jsxs)("div",{className:"text",children:[s.line&&(0,a.jsx)("div",{className:"line-logo",children:w&&(0,a.jsx)(u(),{src:w.logo,alt:w.displayName,layout:"fill",objectFit:"contain",objectPosition:h<850?"center":"left"})}),(0,a.jsx)("p",{className:"sku",children:s.sku}),(0,a.jsx)("h1",{children:s.shortDesc}),(0,a.jsx)("p",{className:"description",children:s.longDesc})]})}),(0,a.jsx)("div",{className:"cover-wrapper",children:(0,a.jsx)(u(),{className:"cover",src:N,fill:!0,alt:"product-cover",priority:!0})})]}),2==p&&(0,a.jsx)(ProductMorePhotos,{arr:s.img_url,fs:g,setFs:b,sku:s.sku,shortDesc:s.shortDesc})]}),(0,a.jsx)(ProductBanners,{banners:s.banners,line:s.line}),(0,a.jsx)(ProductFeatures,{prod:s}),(0,a.jsx)(ProductSpecsTable,{prod:s,features:r,includes:n}),(0,a.jsx)(YoutubeBanner,{})]})}var P=r(4874);function Producto(){let e=(0,n.useRouter)(),{prod:s}=e.query,[r,i]=(0,t.useState)(null),[l,c]=(0,t.useState)([]),[o,d]=(0,t.useState)([]),[u,p]=(0,t.useState)([]);return((0,t.useEffect)(()=>{if(!s)return;let fetchData=async()=>{let e=await Promise.all(["https://www.aiwaelectronics.com.ar/audio.php","https://www.aiwaelectronics.com.ar/headsets.php","https://www.aiwaelectronics.com.ar/discontinuos.php","https://www.aiwaelectronics.com.ar/cooks.php","https://www.aiwaelectronics.com.ar/tablets.php","https://www.aiwaelectronics.com.ar/notebooks.php","https://www.aiwaelectronics.com.ar/features.php","https://www.aiwaelectronics.com.ar/includes.php","https://www.aiwaelectronics.com.ar/featuredFeatures.php","https://www.aiwaelectronics.com.ar/mainBanner.php"].map(e=>fetch(e).then(e=>e.json()))),[r,a,n,t,l,o,u,m,h,x]=e,g=r.find(e=>e.sku===s)||a.find(e=>e.sku===s)||n.find(e=>e.sku===s)||t.find(e=>e.sku===s)||l.find(e=>e.sku===s)||o.find(e=>e.sku===s)||x.find(e=>e.sku===s)||u.find(e=>e.sku===s)||m.find(e=>e.sku===s)||h.find(e=>e.sku===s);i(g),c(u),d(m),p(h)};fetchData()},[s]),e.isFallback||!r)?(0,a.jsx)(Loading,{}):(0,a.jsxs)(a.Fragment,{children:[r&&(0,a.jsx)(N(),{children:(0,a.jsx)("title",{children:r.sku+P.Z.spacer+P.Z.aiwaElec})}),(0,a.jsx)("section",{className:"product-page",children:(0,a.jsx)(ProductContent,{prod:r,features:l,includes:o,featuredFeatures:u})})]})}}},function(e){e.O(0,[662,128,494,121,863,774,888,179],function(){return e(e.s=3620)}),_N_E=e.O()}]);