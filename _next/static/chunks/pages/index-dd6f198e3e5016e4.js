(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7036:function(e,n,s){"use strict";var a=s(4836);n.Z=void 0;var i=a(s(4938)),r=s(5893),t=(0,i.default)((0,r.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");n.Z=t},3441:function(e,n,s){"use strict";var a=s(4836);n.Z=void 0;var i=a(s(4938)),r=s(5893),t=(0,i.default)((0,r.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");n.Z=t},2656:function(e,n,s){"use strict";var a=s(4836);n.Z=void 0;var i=a(s(4938)),r=s(5893),t=(0,i.default)((0,r.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),"LocalGroceryStore");n.Z=t},4048:function(e,n,s){"use strict";var a=s(4836);n.Z=void 0;var i=a(s(4938)),r=s(5893),t=(0,i.default)((0,r.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew");n.Z=t},3094:function(e,n,s){"use strict";var a=s(4836);n.Z=void 0;var i=a(s(4938)),r=s(5893),t=(0,i.default)((0,r.jsx)("path",{d:"M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"}),"QuestionMark");n.Z=t},2961:function(e,n,s){"use strict";var a=s(4836);n.Z=void 0;var i=a(s(4938)),r=s(5893),t=(0,i.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");n.Z=t},5557:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8964)}])},5680:function(e,n,s){"use strict";s.d(n,{Z:function(){return LinesContainer}});var a=s(5893),i=s(5675),r=s.n(i),t=s(1664),o=s.n(t);function LineContainer(e){let{line:n}=e;return(0,a.jsxs)("div",{className:"line-container ".concat(n.name),children:[(0,a.jsx)("div",{className:"line-image-wrapper",children:(0,a.jsx)(r(),{src:n.logo,alt:"Logo l\xednea ".concat(n.line),fill:!0})}),(0,a.jsx)("button",{children:(0,a.jsx)(o(),{href:n.link,children:"Conocelos"})}),(0,a.jsx)(r(),{className:"bg",src:n.indexImage,alt:"Logo l\xednea ".concat(n.line),fill:!0})]})}var l=s(3969);function LinesContainer(){return(0,a.jsx)("section",{className:"lines",children:l.Z.map((e,n)=>(0,a.jsx)(LineContainer,{line:e},n))})}},2297:function(e,n,s){"use strict";s.d(n,{Z:function(){return ProductCard}});var a=s(5893),i=s(2961),r=s(7036),t=s(594),o=s(4048),l=s(3094),c=s(3441),d=s(2656),x=s(5111),u=s(9263),h=s(7294),m=s(7056),p=s(3652),g=s(5675),j=s.n(g),f=s(1664),b=s.n(f);function ProductCard(e){let{sku:n,showName:s,showSku:g,showDesc:f,showButton:v,showGen:N,showTags:w,showDownload:k,showMenu:C,showViewing:Z}=e,A=u.R.find(e=>e.sku===n),[y,S]=(0,h.useState)(null),M=!!y;function toggleMenu(e){M?S(null):S(e.currentTarget)}return A?(0,a.jsxs)("div",{className:"product-card",children:[Z&&(0,a.jsx)(i.Z,{}),(0,a.jsx)(b(),{href:A.link||"#",children:(0,a.jsx)("div",{className:"image",children:(0,a.jsx)(j(),{width:"150",height:"150",src:A.imgs[0],alt:A.name,placeholder:"blur",blurDataURL:"/ph.png",priority:!0})})}),(0,a.jsxs)("div",{className:"texts",children:[g&&(0,a.jsx)("p",{className:"p-sku",children:A.sku}),s&&(0,a.jsx)(b(),{href:A.link||"#",children:(0,a.jsx)("p",{className:"p-name",children:A.name})}),f&&(0,a.jsx)("p",{className:"p-desc",children:(0,a.jsx)("small",{children:A.shortDesc})}),N&&(0,a.jsx)("p",{className:"p-desc",children:(0,a.jsx)("small",{children:A.gen})}),w&&(0,a.jsx)("div",{className:"p-tags",children:A.categories.some(e=>110===e)?(0,a.jsxs)("span",{style:{background:"grey"},children:[(0,a.jsx)(t.Z,{}),"No disponible"]}):(0,a.jsxs)("span",{style:{background:"#54ac45"},children:[(0,a.jsx)(r.Z,{}),"Disponible"]})}),k&&(0,a.jsxs)("a",{className:"p-download-button",href:A.downloads||"#",target:"_blank",rel:"noreferrer",children:[(0,a.jsx)(o.Z,{}),"Descargas"]}),C&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{className:"options-menu",onClick:toggleMenu,children:["Opciones",(0,a.jsx)(x.Z,{})]}),(0,a.jsxs)(p.Z,{anchorEl:y,open:M,onClose:toggleMenu,sx:{maxWidth:"300px"},children:[(0,a.jsx)(m.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,a.jsxs)(b(),{className:"search-menu-link",href:A.link||"#",children:[(0,a.jsx)(i.Z,{fontSize:"small"}),"Ver producto"]})}),A.buyLink&&(0,a.jsx)(m.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,a.jsxs)(b(),{className:"search-menu-link",target:"_blank",href:A.buyLink,children:[(0,a.jsx)(d.Z,{fontSize:"small"}),"Comprar"]})}),A.features&&(0,a.jsx)(m.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,a.jsxs)(b(),{className:"search-menu-link",href:"".concat(A.link||"#","#product-features-anchor"),children:[(0,a.jsx)(l.Z,{fontSize:"small"}),"Caracter\xedsticas"]})}),A.downloads&&(0,a.jsx)(m.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,a.jsxs)(b(),{className:"search-menu-link",href:A.downloads||"#",target:"_blank",children:[(0,a.jsx)(c.Z,{fontSize:"small"}),"Descargas"]})})]})]})]}),v&&(0,a.jsx)("button",{className:"see-more",children:(0,a.jsx)(b(),{href:A.link||"#",children:"Ver m\xe1s"})})]}):(0,a.jsx)("div",{children:"Producto no encontrado"})}},3969:function(e,n){"use strict";n.Z=[{name:"infinit",displayName:"Infinit",desc:"Posibilidades Ilimitadas",logo:"/lineas/infinit/logo.png",indexImage:"/lineas/infinit/indexImage.png",banner:"/lineas/infinit/banner-pc.jpg",bannerMobile:"/lineas/infinit/banner-mob.jpg",background:"/lineas/infinit/big-bg.jpg",link:"/lineas/infinit"},{name:"waterproof",displayName:"Waterproof",desc:"",logo:"/lineas/waterproof/logo.png",indexImage:"/lineas/waterproof/Banners_Parlantes-waterproof_Portatiles_03.png",banner:"/lineas/waterproof/banner-pc.webp",bannerMobile:"/lineas/waterproof/banner-mob.webp",background:"/lineas/waterproof/big-bg.jpg",link:"/lineas/waterproof"},{name:"flama",displayName:"Flama",desc:"Acercate al fuego",logo:"/lineas/flama/logo.png",indexImage:"/lineas/flama/bg.png",banner:"/lineas/flama/banner-pc.webp",bannerMobile:"/lineas/flama/banner-mob.webp",background:"/lineas/flama/big-bg.webp",link:"/lineas/flama"},{name:"ring",displayName:"Ring",desc:"Potencia insuperable",logo:"/lineas/ring/logo.png",indexImage:"/lineas/ring/bg.png",banner:"/lineas/ring/banner-pc.webp",bannerMobile:"/lineas/ring/banner-mob.webp",background:"/lineas/ring/big-bg.webp",link:"/lineas/ring"},{name:"party",displayName:"Party",desc:"Que la fiesta nunca pare",logo:"/lineas/party/logo.png",indexImage:"/lineas/party/bg.jpg",banner:"/lineas/party/banner-pc.webp",bannerMobile:"/lineas/party/banner-mob.webp",background:"/lineas/party/big-bg.webp",link:"/lineas/party"}]},4874:function(e,n){"use strict";n.Z={aiwaElec:"AIWA Electronics",spacer:" | ",irTienda:"Ir a la tienda",comprar:"Comprar",verMas:"Ver m\xe1s",continuar:"Continuar",masInfo:"M\xe1s informaci\xf3n",buscar:"Buscar",contactoTitle:"Contactanos",contactoDesc:"Pod\xe9s contactarnos, si necesit\xe1s ayuda, asesoramiento o sumarte a nuestro equipo.",contactoDisclaimer:"aiwaelectronics.com.ar es representante de la marca AIWA \xfanicamente en Argentina. Para los productos AIWA adquiridos fuera del pa\xeds no tiene la responsabilidad de la garant\xeda y no cuenta con la informaci\xf3n t\xe9cnica y ni de soporte. Por favor, contactarse con el distribuidor de AIWA correspondiente a su pa\xeds.",contactanos:"Escribinos",motivo:"Seleccione el motivo del mensaje",soporteTitle:"Soporte",soporteDesc:"Preguntas frecuentes y contenido espec\xedfico sobre nuestros productos. Consultas sobre garant\xeda de productos llamar al: 0800-444-1212",soporteBuscar:"Busc\xe1 tu producto AIWA por nombre"}},8964:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return b},default:function(){return Home}});var a=s(5893),i=s(9008),r=s.n(i),t=s(1664),o=s.n(t),l=s(5675),c=s.n(l);function MainBanner(e){let{banner:n,isFirst:s}=e;return n.link=n.link?n.link:"/",(0,a.jsxs)(o(),{href:n.link,className:"main-banner",children:[n.text&&(0,a.jsxs)("div",{className:"text ".concat(n.text.dark&&"dark"),align:n.text.align,valign:n.text.valign,children:[(0,a.jsx)("h2",{children:n.title}),n.text.cta&&(0,a.jsx)("button",{children:n.text.cta})]}),(0,a.jsx)("figure",{className:"desktop",children:(0,a.jsx)(c(),{alt:n.alt,src:n.img,width:1350,height:315,priority:s})}),(0,a.jsx)("figure",{className:"mobile",children:(0,a.jsx)(c(),{alt:n.alt,src:n.mobileImg,width:600,height:800,priority:s})})]})}var d=s(4874),x=s(1911),u=s(8494),h=s(5680),m=[{title:"Quiero tirar mi casa por la ventana",resultText:"Te presentamos los parlantes m\xe1s potentes",products:["AW-T2012","AW-T2010-PB","AW-P1500PS"]},{title:"Quiero darle un toque distinto a mi habitaci\xf3n",resultText:"Parlantes llamativos con luces espectaculares",products:["AW-T2022","AW-T1008F-PB","AW-T506R-PB"]},{title:"Quiero cantar toda la noche",resultText:"Micr\xf3fono incluido \xa1Arm\xe1 el karaoke!",products:["AW-T806F","AW-T2040","AW-T2050R"]},{title:"Quiero llevar mi m\xfasica en la mochila",resultText:"Parlantes ligeros \xa1llev\xe1 tu m\xfasica a cualquier lugar!",products:["AW-P240D-SN","AW-T604F","AW-P450D-SN"]}],p=s(7294);function DiscoverButton(e){let{d:n}=e,s=(0,u.oc)();return(0,a.jsx)(a.Fragment,{children:"r"===n?(0,a.jsx)("button",{onClick:()=>s.slideNext(),children:"\xa1Descubrilos!"}):(0,a.jsx)("button",{onClick:()=>s.slidePrev(),children:"Volver"})})}var g=s(2297);function DiscoverBanner(){let[e,n]=(0,p.useState)(-1);function swipe(s){let a=0;"l"===s?a=e-1:"r"===s&&(a=e+1),a>=m.length&&(a=0),a<0&&(a=m.length-1),n(a)}return(0,a.jsx)("section",{className:"discover-banner",children:(0,a.jsxs)(u.tq,{className:"wrapper-swiper",allowTouchMove:!1,autoHeight:!0,children:[(0,a.jsxs)(u.o5,{className:"first",children:[(0,a.jsx)("h3",{children:"Tenemos un AIWA especialmente para vos"}),(0,a.jsx)("h2",{children:"\xbfQu\xe9 estabas buscando?"}),(0,a.jsx)(u.tq,{className:"discover-swiper",modules:[x.W_],loop:!0,navigation:!0,style:{"--swiper-navigation-color":"#333","--swiper-navigation-size":"20px"},onSlideNextTransitionStart:()=>swipe("r"),onSlidePrevTransitionStart:()=>swipe("l"),children:m.map((e,n)=>(0,a.jsx)(u.o5,{className:"option-".concat(n),children:(0,a.jsx)("p",{children:e.title})},n))}),(0,a.jsx)(DiscoverButton,{d:"r"})]}),(0,a.jsxs)(u.o5,{className:"second",children:[(0,a.jsxs)("div",{className:"text",children:[e>=0&&(0,a.jsx)("h3",{children:m[e].resultText}),(0,a.jsx)(DiscoverButton,{d:"l"})]}),(0,a.jsx)("div",{className:"results",children:e>=0&&m[e].products.map((e,n)=>(0,a.jsx)(g.Z,{sku:e,showDesc:!0,showName:!0,showSku:!0},n))})]})]})})}function Constrictor(){return(0,a.jsxs)("section",{id:"constrictor",children:[(0,a.jsx)("div",{className:"backdrop"}),(0,a.jsxs)("div",{className:"logo",children:[(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(c(),{fill:!0,className:"constrictor-logo",src:"/images/components/Constrictor/constrictor-logo.png",alt:"constrictor logo"})}),(0,a.jsx)("h3",{children:"Nuestra l\xednea de productos gamer"})]}),(0,a.jsxs)("div",{className:"items",children:[(0,a.jsx)("div",{className:"item",children:(0,a.jsxs)("a",{href:"https://constrictor.com.ar/sillas/",children:[(0,a.jsx)(c(),{width:"255",height:"283",src:"/images/components/Constrictor/const-sillas.png",alt:"silla constrictor"}),(0,a.jsx)("h4",{children:"SILLAS"})]})}),(0,a.jsx)("div",{className:"item",children:(0,a.jsxs)("a",{href:"https://constrictor.com.ar/teclados/",children:[(0,a.jsx)(c(),{width:"255",height:"283",src:"/images/components/Constrictor/const-teclados.png",alt:"teclado constrictor"}),(0,a.jsx)("h4",{children:"TECLADOS"})]})}),(0,a.jsx)("div",{className:"item",children:(0,a.jsxs)("a",{href:"https://constrictor.com.ar/auriculares/",children:[(0,a.jsx)(c(),{width:"255",height:"283",src:"/images/components/Constrictor/const-headsets.png",alt:"headset constrictor"}),(0,a.jsx)("h4",{children:"AURICULARES"})]})}),(0,a.jsx)("div",{className:"item",children:(0,a.jsxs)("a",{href:"https://constrictor.com.ar/mouses/",children:[(0,a.jsx)(c(),{width:"255",height:"283",src:"/images/components/Constrictor/const-mouses.png",alt:"mouse constrictor"}),(0,a.jsx)("h4",{children:"MOUSES"})]})})]}),(0,a.jsx)("button",{children:(0,a.jsx)("a",{href:"https://constrictor.com.ar/",rel:"noopener noreferrer",target:"_blank",children:"Ver Todos"})})]})}var j=s(5079),f=s(9552);function CategoryBanner(){let e=(0,f.Z)();return(0,a.jsxs)("section",{className:"category-banner",children:[(0,a.jsx)("h2",{children:"BUSC\xc1 POR CATEGOR\xcdAS"}),(0,a.jsx)(u.tq,{className:"category-swiper",modules:[x.W_],slidesPerView:e.width>=850?"4":"1",initialSlide:e.width>=850?"4":"1",spaceBetween:0,loop:!0,navigation:!0,children:j.gD.filter(e=>!1==e.hidden).map((e,n)=>(0,a.jsx)(u.o5,{className:"category-banner-slide",children:(0,a.jsxs)(o(),{href:e.route,children:[(0,a.jsx)("div",{className:"image-wrapper",children:(0,a.jsx)(c(),{fill:!0,src:e.cover,alt:e.name})}),(0,a.jsx)("h3",{children:e.name})]})},n))})]})}var b=!0;function Home(e){let{banners:n}=e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:d.Z.aiwaElec}),(0,a.jsx)("meta",{name:"title",content:"Aiwa Electronics"})]}),(0,a.jsxs)("main",{className:"index",children:[(0,a.jsx)(u.tq,{tag:"section",className:"main-banner",modules:[x.W_,x.tl],loop:!0,navigation:!0,pagination:{clickable:!0},children:n.map((e,n)=>(0,a.jsx)(u.o5,{className:"main-banner-slide",children:(0,a.jsx)(MainBanner,{banner:e,isFirst:0==n})},n))}),(0,a.jsx)(h.Z,{}),(0,a.jsx)(DiscoverBanner,{}),(0,a.jsx)(Constrictor,{}),(0,a.jsx)(CategoryBanner,{})]})]})}}},function(e){e.O(0,[662,128,494,263,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);