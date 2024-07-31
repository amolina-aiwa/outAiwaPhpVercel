(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4337)}])},5680:function(e,n,a){"use strict";a.d(n,{Z:function(){return LinesContainer}});var s=a(5893),r=a(5675),i=a.n(r),t=a(1664),l=a.n(t);function LineContainer(e){let{line:n}=e;return(0,s.jsxs)("div",{className:"line-container ".concat(n.name),children:[(0,s.jsx)("div",{className:"line-image-wrapper",children:(0,s.jsx)(i(),{src:n.logo,alt:"Logo l\xednea ".concat(n.line),fill:!0})}),(0,s.jsx)("button",{children:(0,s.jsx)(l(),{href:n.link,children:"Conocelos"})}),(0,s.jsx)(i(),{className:"bg",src:n.indexImage,alt:"Logo l\xednea ".concat(n.line),fill:!0})]})}var o=a(3969);function LinesContainer(){return(0,s.jsx)("section",{className:"lines",children:o.Z.map((e,n)=>(0,s.jsx)(LineContainer,{line:e},n))})}},2297:function(e,n,a){"use strict";a.d(n,{Z:function(){return ProductCard}});var s=a(5893),r=a(2961),i=a(4048),t=a(3094),l=a(3441),o=a(2656),c=a(5111);a(1163);var d=a(7294),m=a(7056),g=a(3652),u=a(5675),p=a.n(u),x=a(1664),h=a.n(x);function ProductCard(e){let{sku:n,products:a,showName:u,showSku:x,showDesc:b,showButton:j,showGen:f,showTags:N,showDownload:w,showMenu:k,showViewing:v}=e,[A,_]=(0,d.useState)(null),C=!!A;if(!a)return console.error("Products array is undefined"),null;let y=a.find(e=>e.sku==n);if(!y)return console.error("Product not found for SKU:",n),null;function toggleMenu(e){C?_(null):_(e.currentTarget)}if("string"==typeof y.img_url)try{y.img_url=JSON.parse(y.img_url)}catch(e){return console.error("Error parsing imgUrls:",e),null}if(!Array.isArray(y.img_url))return console.error("imgUrls is not an array:",y.img_url),null;let P=y.img_url.length>0?y.img_url[0]:"/path/to/default-image.jpg";return(0,s.jsxs)("div",{className:"product-card",children:[v&&(0,s.jsx)(r.Z,{}),(0,s.jsx)(h(),{href:"#",children:(0,s.jsx)("div",{className:"image",children:(0,s.jsx)(p(),{width:"150",height:"150",src:P,alt:y.name,placeholder:"blur",blurDataURL:"/ph.png",priority:!0})})}),(0,s.jsxs)("div",{className:"texts",children:[x&&(0,s.jsx)("p",{className:"p-sku",children:y.sku}),u&&(0,s.jsx)(h(),{href:"#",children:(0,s.jsx)("p",{className:"p-name",children:y.name})}),b&&(0,s.jsx)("p",{className:"p-desc",children:(0,s.jsx)("small",{children:y.shortDesc})}),f&&(0,s.jsx)("p",{className:"p-desc",children:(0,s.jsx)("small",{children:y.gen})}),w&&(0,s.jsxs)("a",{className:"p-download-button",href:y.downloads,target:"_blank",rel:"noreferrer",children:[(0,s.jsx)(i.Z,{}),"Descargas"]}),k&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("button",{className:"options-menu",onClick:toggleMenu,children:["Opciones",(0,s.jsx)(c.Z,{})]}),(0,s.jsxs)(g.Z,{anchorEl:A,open:C,onClose:toggleMenu,sx:{maxWidth:"300px"},children:[(0,s.jsx)(m.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,s.jsxs)(h(),{className:"search-menu-link",href:y.link,children:[(0,s.jsx)(r.Z,{fontSize:"small"}),"Ver producto"]})}),y.buyLink&&(0,s.jsx)(m.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,s.jsxs)(h(),{className:"search-menu-link",target:"_blank",href:y.buyLink,children:[(0,s.jsx)(o.Z,{fontSize:"small"}),"Comprar"]})}),y.features&&(0,s.jsx)(m.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,s.jsxs)(h(),{className:"search-menu-link",href:"".concat(y.link,"#product-features-anchor"),children:[(0,s.jsx)(t.Z,{fontSize:"small"}),"Caracter\xedsticas"]})}),y.downloads&&(0,s.jsx)(m.Z,{onClick:toggleMenu,sx:{fontSize:"14px"},children:(0,s.jsxs)(h(),{className:"search-menu-link",href:y.downloads,target:"_blank",children:[(0,s.jsx)(l.Z,{fontSize:"small"}),"Descargas"]})})]})]})]}),j&&(0,s.jsx)("button",{className:"see-more",children:(0,s.jsx)(h(),{href:y.link,children:"Ver m\xe1s"})})]})}},3969:function(e,n){"use strict";n.Z=[{name:"infinit",displayName:"Infinit",desc:"Posibilidades Ilimitadas",logo:"/lineas/infinit/logo.png",indexImage:"/lineas/infinit/indexImage.png",banner:"/lineas/infinit/banner-pc.jpg",bannerMobile:"/lineas/infinit/banner-mob.jpg",background:"/lineas/infinit/big-bg.jpg",link:"/lineas/infinit"},{name:"waterproof",displayName:"Waterproof",desc:"",logo:"/lineas/waterproof/logo.png",indexImage:"/lineas/waterproof/Banners_Parlantes-waterproof_Portatiles_03.png",banner:"/lineas/waterproof/banner-pc.webp",bannerMobile:"/lineas/waterproof/banner-mob.webp",background:"/lineas/waterproof/big-bg.jpg",link:"/lineas/waterproof"},{name:"flama",displayName:"Flama",desc:"Acercate al fuego",logo:"/lineas/flama/logo.png",indexImage:"/lineas/flama/bg.png",banner:"/lineas/flama/banner-pc.webp",bannerMobile:"/lineas/flama/banner-mob.webp",background:"/lineas/flama/big-bg.webp",link:"/lineas/flama"},{name:"ring",displayName:"Ring",desc:"Potencia insuperable",logo:"/lineas/ring/logo.png",indexImage:"/lineas/ring/bg.png",banner:"/lineas/ring/banner-pc.webp",bannerMobile:"/lineas/ring/banner-mob.webp",background:"/lineas/ring/big-bg.webp",link:"/lineas/ring"},{name:"party",displayName:"Party",desc:"Que la fiesta nunca pare",logo:"/lineas/party/logo.png",indexImage:"/lineas/party/bg.jpg",banner:"/lineas/party/banner-pc.webp",bannerMobile:"/lineas/party/banner-mob.webp",background:"/lineas/party/big-bg.webp",link:"/lineas/party"}]},4874:function(e,n){"use strict";n.Z={aiwaElec:"AIWA Electronics",spacer:" | ",irTienda:"Ir a la tienda",comprar:"Comprar",verMas:"Ver m\xe1s",continuar:"Continuar",masInfo:"M\xe1s informaci\xf3n",buscar:"Buscar",contactoTitle:"Contactanos",contactoDesc:"Pod\xe9s contactarnos, si necesit\xe1s ayuda, asesoramiento o sumarte a nuestro equipo.",contactoDisclaimer:"aiwaelectronics.com.ar es representante de la marca AIWA \xfanicamente en Argentina. Para los productos AIWA adquiridos fuera del pa\xeds no tiene la responsabilidad de la garant\xeda y no cuenta con la informaci\xf3n t\xe9cnica y ni de soporte. Por favor, contactarse con el distribuidor de AIWA correspondiente a su pa\xeds.",contactanos:"Escribinos",motivo:"Seleccione el motivo del mensaje",soporteTitle:"Soporte",soporteDesc:"Preguntas frecuentes y contenido espec\xedfico sobre nuestros productos. Consultas sobre garant\xeda de productos llamar al: 0800-444-1212",soporteBuscar:"Busc\xe1 tu producto AIWA por nombre"}},4337:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return Home}});var s=a(5893),r=a(9008),i=a.n(r),t=a(1664),l=a.n(t),o=a(5675),c=a.n(o);function MainBanner(e){let{banner:n,isFirst:a}=e;return n.link=n.link?n.link:"/",(0,s.jsxs)(l(),{href:n.link,className:"main-banner",children:[n.text&&(0,s.jsxs)("div",{className:"text ".concat(n.text.dark&&"dark"),align:n.text.align,valign:n.text.valign,children:[(0,s.jsx)("h2",{children:n.text.title}),(0,s.jsx)("h3",{children:n.text.subtitle}),n.text.cta&&(0,s.jsx)("button",{children:n.text.cta})]}),(0,s.jsx)("figure",{className:"desktop",children:(0,s.jsx)(c(),{alt:n.alt,src:n.img,width:1350,height:315,priority:a})}),(0,s.jsx)("figure",{className:"mobile",children:(0,s.jsx)(c(),{alt:n.alt,src:n.mobileImg,width:600,height:800,priority:a})})]})}let d=[{img:"/banners/BANNER_AIWA-COOK.png",mobileImg:(()=>{let e=["/banners/Banner_AW-FA244_00.png","/banners/Banner_AWKCE200N_00.png","/banners/Banner_AW-YG816_00.png"],n=Math.floor(Math.random()*e.length);return e[n]})(),link:"categorias/cook/",alt:'Banner "de otro mundo"'},{img:"/banners/Banner_3010-3012_00.png",mobileImg:"/banners/Banner_3010-3012_01.png",link:"categorias/torres-de-sonido/",alt:'Banner "de otro mundo"'},{img:"/banners/Banners_Parlantes-waterproof_Portatiles_00.png",mobileImg:"/banners/Banners_Parlantes-waterproof_Portatiles_01.png",link:"/lineas/waterproof",alt:'Banner "de otro mundo"'},{img:"/banners/2202b.jpg",mobileImg:"/banners/2202b-m.jpg",link:"/lineas/infinit",alt:'Banner "de otro mundo"',text:{title:"Sonido de otro mundo",subtitle:"Explor\xe1 nuevas sensaciones con la mejor calidad de sonido.",cta:"",align:"left",valign:"top"}},{img:"/banners/2016b.jpg",mobileImg:"/banners/2016b-m.jpg",link:"/lineas/infinit",alt:"Parlantes P2016A y P2016B",text:{title:"Potente y compacto",subtitle:"Te ofrecemos el balance perfecto entre portabilidad y potencia.",cta:"",align:"left",valign:"top",dark:!0}},{img:"/banners/ata.jpg",mobileImg:"/banners/ata-m.jpg",link:"/categorias/in-ear",alt:"Auriculares ATA"},{img:"/banners/flama.jpg",mobileImg:"/banners/flama-m.jpg",link:"/lineas/flama",alt:"Linea Flama",text:{title:"L\xednea Flama",subtitle:"Incre\xedbles efectos de luces que deslumbrar\xe1n cualquier espacio.",cta:"",align:"left",valign:"top"}},{img:"/banners/ring.jpg",mobileImg:"/banners/ring-m.jpg",link:"/lineas/ring",alt:"Linea Ring",text:{title:"L\xednea Ring",subtitle:"Anillos de luces + calidad de sonido es igual a diversi\xf3n toda la noche.",cta:"",align:"right",valign:"top"}}];var m=a(4874),g=a(1911),u=a(8494),p=a(5680),x=[{title:"Quiero tirar mi casa por la ventana",resultText:"Te presentamos los parlantes m\xe1s potentes",products:["AW-T2012","AW-T2010-PB","AW-P1500PS"]},{title:"Quiero darle un toque distinto a mi habitaci\xf3n",resultText:"Parlantes llamativos con luces espectaculares",products:["AW-T2022","AW-T1008F-PB","AW-T506R-PB"]},{title:"Quiero cantar toda la noche",resultText:"Micr\xf3fono incluido \xa1Arm\xe1 el karaoke!",products:["AW-T806F","AW-T2040","AW-T2050R"]},{title:"Quiero llevar mi m\xfasica en la mochila",resultText:"Parlantes ligeros \xa1llev\xe1 tu m\xfasica a cualquier lugar!",products:["AW-P240D-SN","AW-T604F","AW-P450D-SN"]}],h=a(7294);function DiscoverButton(e){let{d:n}=e,a=(0,u.oc)();return(0,s.jsx)(s.Fragment,{children:"r"===n?(0,s.jsx)("button",{onClick:()=>a.slideNext(),children:"\xa1Descubrilos!"}):(0,s.jsx)("button",{onClick:()=>a.slidePrev(),children:"Volver"})})}var b=a(2297);function DiscoverBanner(){let[e,n]=(0,h.useState)(-1);function swipe(a){let s=0;"l"===a?s=e-1:"r"===a&&(s=e+1),s>=x.length&&(s=0),s<0&&(s=x.length-1),n(s)}return(0,s.jsx)("section",{className:"discover-banner",children:(0,s.jsxs)(u.tq,{className:"wrapper-swiper",allowTouchMove:!1,autoHeight:!0,children:[(0,s.jsxs)(u.o5,{className:"first",children:[(0,s.jsx)("h3",{children:"Tenemos un AIWA especialmente para vos"}),(0,s.jsx)("h2",{children:"\xbfQu\xe9 estabas buscando?"}),(0,s.jsx)(u.tq,{className:"discover-swiper",modules:[g.W_],loop:!0,navigation:!0,style:{"--swiper-navigation-color":"#333","--swiper-navigation-size":"20px"},onSlideNextTransitionStart:()=>swipe("r"),onSlidePrevTransitionStart:()=>swipe("l"),children:x.map((e,n)=>(0,s.jsx)(u.o5,{className:"option-".concat(n),children:(0,s.jsx)("p",{children:e.title})},n))}),(0,s.jsx)(DiscoverButton,{d:"r"})]}),(0,s.jsxs)(u.o5,{className:"second",children:[(0,s.jsxs)("div",{className:"text",children:[e>=0&&(0,s.jsx)("h3",{children:x[e].resultText}),(0,s.jsx)(DiscoverButton,{d:"l"})]}),(0,s.jsx)("div",{className:"results",children:e>=0&&x[e].products.map((e,n)=>(0,s.jsx)(b.Z,{sku:e,showDesc:!0,showName:!0,showSku:!0},n))})]})]})})}function Constrictor(){return(0,s.jsxs)("section",{id:"constrictor",children:[(0,s.jsx)("div",{className:"backdrop"}),(0,s.jsxs)("div",{className:"logo",children:[(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(c(),{fill:!0,className:"constrictor-logo",src:"/images/components/Constrictor/constrictor-logo.png",alt:"constrictor logo"})}),(0,s.jsx)("h3",{children:"Nuestra l\xednea de productos gamer"})]}),(0,s.jsxs)("div",{className:"items",children:[(0,s.jsx)("div",{className:"item",children:(0,s.jsxs)("a",{href:"https://constrictor.com.ar/sillas/",children:[(0,s.jsx)(c(),{width:"255",height:"283",src:"/images/components/Constrictor/const-sillas.png",alt:"silla constrictor"}),(0,s.jsx)("h4",{children:"SILLAS"})]})}),(0,s.jsx)("div",{className:"item",children:(0,s.jsxs)("a",{href:"https://constrictor.com.ar/teclados/",children:[(0,s.jsx)(c(),{width:"255",height:"283",src:"/images/components/Constrictor/const-teclados.png",alt:"teclado constrictor"}),(0,s.jsx)("h4",{children:"TECLADOS"})]})}),(0,s.jsx)("div",{className:"item",children:(0,s.jsxs)("a",{href:"https://constrictor.com.ar/auriculares/",children:[(0,s.jsx)(c(),{width:"255",height:"283",src:"/images/components/Constrictor/const-headsets.png",alt:"headset constrictor"}),(0,s.jsx)("h4",{children:"AURICULARES"})]})}),(0,s.jsx)("div",{className:"item",children:(0,s.jsxs)("a",{href:"https://constrictor.com.ar/mouses/",children:[(0,s.jsx)(c(),{width:"255",height:"283",src:"/images/components/Constrictor/const-mouses.png",alt:"mouse constrictor"}),(0,s.jsx)("h4",{children:"MOUSES"})]})})]}),(0,s.jsx)("button",{children:(0,s.jsx)("a",{href:"https://constrictor.com.ar/",rel:"noopener noreferrer",target:"_blank",children:"Ver Todos"})})]})}var j=a(5079),f=a(9552);function CategoryBanner(){let e=(0,f.Z)();return(0,s.jsxs)("section",{className:"category-banner",children:[(0,s.jsx)("h2",{children:"BUSC\xc1 POR CATEGOR\xcdAS"}),(0,s.jsx)(u.tq,{className:"category-swiper",modules:[g.W_],slidesPerView:e.width>=850?"4":"1",initialSlide:e.width>=850?"4":"1",spaceBetween:0,loop:!0,navigation:!0,children:j.gD.filter(e=>!1==e.hidden).map((e,n)=>(0,s.jsx)(u.o5,{className:"category-banner-slide",children:(0,s.jsxs)(l(),{href:e.route,children:[(0,s.jsx)("div",{className:"image-wrapper",children:(0,s.jsx)(c(),{fill:!0,src:e.cover,alt:e.name})}),(0,s.jsx)("h3",{children:e.name})]})},n))})]})}function Home(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:m.Z.aiwaElec}),(0,s.jsx)("meta",{name:"title",content:"Aiwa Electronics"})]}),(0,s.jsxs)("main",{className:"index",children:[(0,s.jsx)(u.tq,{tag:"section",className:"main-banner",modules:[g.W_,g.tl],loop:!0,navigation:!0,pagination:{clickable:!0},children:d.map((e,n)=>(0,s.jsx)(u.o5,{className:"main-banner-slide",children:(0,s.jsx)(MainBanner,{banner:e,isFirst:0==n})},n))}),(0,s.jsx)(p.Z,{}),(0,s.jsx)(DiscoverBanner,{}),(0,s.jsx)(Constrictor,{}),(0,s.jsx)(CategoryBanner,{})]})]})}}},function(e){e.O(0,[662,128,341,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);