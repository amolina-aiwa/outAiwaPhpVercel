(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[313],{9572:function(n,e,s){"use strict";var c=s(4836);e.Z=void 0;var r=c(s(4938)),i=s(5893);e.Z=(0,r.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"}),"Error")},7678:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lineas/[lin]",function(){return s(8151)}])},7203:function(n,e,s){"use strict";s.d(e,{Z:function(){return NotFound}});var c=s(5893),r=s(1664),i=s.n(r),t=s(9572),a=s(9008),l=s.n(a);function NotFound(n){let{desc:e}=n,s=e||"No se ha encontrado lo que buscabas";return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l(),{children:(0,c.jsx)("title",{children:s})}),(0,c.jsxs)("main",{id:"not-found",children:[(0,c.jsx)(t.Z,{sx:{fontSize:50}}),(0,c.jsx)("h1",{children:"Lo sentimos"}),(0,c.jsx)("h2",{children:s}),(0,c.jsx)(i(),{href:"/",children:(0,c.jsx)("button",{children:"Volver al inicio"})})]})]})}},8151:function(n,e,s){"use strict";s.r(e),s.d(e,{__N_SSG:function(){return h},default:function(){return Lines}});var c=s(5893),r=s(5675),i=s.n(r),t=s(1163),a=s(9263),l=s(7203),o=s(9008),d=s.n(o),u=s(7294);function LineBanner(n){let{line:e}=n;(0,u.useEffect)(()=>{window.innerWidth<850&&(document.querySelector(".banner").src=e.bannerMobile)});let s="waterproof"!==e.name.toLowerCase();return(0,c.jsxs)("section",{className:"line-banner",children:[s&&(0,c.jsx)("div",{className:"logo",children:(0,c.jsx)(i(),{src:e.logo,alt:"logo ".concat(e.name),fill:!0})}),(0,c.jsxs)("h3",{children:[" ",e.desc," "]}),(0,c.jsx)(i(),{className:"banner",src:e.banner,alt:"banner ".concat(e.name),fill:!0,priority:!0})]})}function LineProductCard(n){let{prod:e}=n,s=(0,t.useRouter)();return(0,c.jsxs)("div",{className:"line-product",onClick:()=>{s.push("/productos/".concat(e.sku))},style:{cursor:"pointer"},children:[(0,c.jsx)("div",{className:"bg"}),(0,c.jsx)("div",{className:"image",children:(0,c.jsx)(i(),{src:e.imgs[0],fill:!0,alt:"Product ".concat(e.sku)})}),(0,c.jsx)("p",{className:"sku",children:e.sku}),(0,c.jsx)("p",{className:"title",children:e.shortDesc}),(0,c.jsx)("p",{className:"desc",children:e.longDesc}),(0,c.jsx)("button",{className:"verMasButton",children:"Ver m\xe1s"})]})}var h=!0;function Lines(n){let{lineas:e}=n,s=(0,t.useRouter)(),{lin:r}=s.query,o=e.find(n=>n.link==="/lineas/".concat(r));if(void 0===o)return(0,c.jsx)(l.Z,{desc:'No se ha encontrado la l\xednea "'.concat(r,'"')});let u=a.R.filter(n=>n.line===o.name&&n.buyLink);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d(),{children:(0,c.jsx)("title",{children:"L\xednea ".concat(o.displayName," | Aiwa Electronics")})}),(0,c.jsxs)("main",{className:"linea ".concat(r),children:[(0,c.jsx)(LineBanner,{line:o}),(0,c.jsxs)("section",{className:"line-products",children:[u.map((n,e)=>(0,c.jsx)(LineProductCard,{prod:n},e)),(0,c.jsx)("div",{className:"section-bg",children:(0,c.jsx)(i(),{src:o.background,fill:!0,alt:"Background de la l\xednea ".concat(o.displayName)})})]})]})]})}}},function(n){n.O(0,[263,774,888,179],function(){return n(n.s=7678)}),_N_E=n.O()}]);