(this["webpackJsonpreact-lushlace"]=this["webpackJsonpreact-lushlace"]||[]).push([[0],{20:function(e,t,c){e.exports={card:"Card_card__2Twvz",plus:"Card_plus__3-jqb",favorite:"Card_favorite__ThOgl"}},21:function(e,t,c){e.exports={overlay:"Drawer_overlay__32DMl",overlayVisible:"Drawer_overlayVisible__3jBHJ",drawer:"Drawer_drawer__2Wdjc",items:"Drawer_items__h5_ii"}},43:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(36),s=c.n(n),i=(c(43),c(44),c(13)),l=c(11),o=c(8),j=c.n(o),d=c(12),u=c(4),b=c(5),h=c.n(b),x=r.a.createContext({}),m=function(){var e=r.a.useContext(x),t=e.cartItems,c=e.setCartItems,a=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:c,totalPrice:a}},O=c(15),f=c(19),p=c(20),v=c.n(p),g=c(25),N=c(1);var C=function(e){var t=e.id,c=e.title,a=e.imgUrl,n=e.price,s=e.onFavorite,i=e.onPlus,l=e.favorited,o=void 0!==l&&l,j=(e.added,e.loading),d=void 0!==j&&j,b=r.a.useContext(x).isItemAdded,h=r.a.useState(o),m=Object(u.a)(h,2),O=m[0],f=m[1],p={id:t,parentId:t,title:c,imgUrl:a,price:n};return console.log(c,b(t)),Object(N.jsx)("div",{className:v.a.card,children:d?Object(N.jsxs)(g.a,{speed:2,width:600,height:400,viewBox:"0 0 600 400",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(N.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"260",height:"280"}),Object(N.jsx)("rect",{x:"0",y:"285",rx:"10",ry:"10",width:"260",height:"30"}),Object(N.jsx)("rect",{x:"0",y:"320",rx:"10",ry:"10",width:"200",height:"30"}),Object(N.jsx)("rect",{x:"0",y:"355",rx:"10",ry:"10",width:"160",height:"45"}),Object(N.jsx)("rect",{x:"215",y:"355",rx:"10",ry:"10",width:"45",height:"45"})]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:v.a.favorite,onClick:function(){s(p),f(!O)},children:Object(N.jsx)("img",{src:O?"img/heartlike.svg":"img/heart.svg",alt:"Unliked"})}),Object(N.jsx)("img",{width:"100%",height:350,src:a,alt:"Comp"}),Object(N.jsx)("h5",{children:c}),Object(N.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(N.jsxs)("div",{className:"d-flex flex-column",children:[Object(N.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(N.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),i&&Object(N.jsx)("img",{className:v.a.plus,onClick:function(){i(p)},src:b(t)?"img/btncheck.svg":"img/Group91.svg",alt:"Plus"})]})]})})};var w=function(e){Object(f.a)(e);var t=r.a.useContext(x),c=t.favorites,a=t.onAddToFavorite;return Object(N.jsxs)("div",{className:"content p-40",children:[Object(N.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(N.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(N.jsx)("div",{className:"d-flex flex-wrap",children:c.map((function(e,t){return Object(N.jsx)(C,Object(O.a)({favorited:!0,onFavorite:a},e),t)}))})]})};var y=function(e){var t=m().totalPrice;return Object(N.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(N.jsx)(i.b,{to:"/App.js",children:Object(N.jsxs)("div",{className:"d-flex align-center",children:[Object(N.jsx)("img",{width:40,height:40,src:"img/mini.png",alt:"logotype"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"text-uppercase",children:"REACT LUSHLACE"}),Object(N.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u0440\u0443\u0436\u0435\u0432\u043d\u043e\u0433\u043e \u0431\u0435\u043b\u044c\u044f"})]})]})}),Object(N.jsxs)("ul",{className:"d-flex",children:[Object(N.jsxs)("li",{className:"mr-30 cu-p",onClick:e.onClickCart,children:[Object(N.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"Cart"}),Object(N.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(N.jsx)("li",{className:"mr-20 cu-p",children:Object(N.jsx)(i.b,{to:"favorites",path:"Favorites",children:Object(N.jsx)("img",{width:18,height:18,src:"img/Vector.png",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(N.jsx)("li",{children:Object(N.jsx)(i.b,{to:"/Orders",children:Object(N.jsx)("img",{width:18,height:18,src:"img/Union.svg",alt:"User"})})})]})]})},k=function(e){var t=e.title,c=e.image,a=e.description,n=r.a.useContext(x).setCartOpened;return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(N.jsx)("img",{className:"mb-20",width:"120px",src:c,alt:"PIZDA"}),Object(N.jsx)("h2",{children:t}),Object(N.jsx)("p",{className:"opacity-6",children:a}),Object(N.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(N.jsx)("img",{src:"img/strel.svg",alt:"XUY"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})})},I=c(21),_=c.n(I);var S=function(e){var t=e.onClose,c=e.onRemove,a=e.items,n=void 0===a?[]:a,s=e.opened,i=m(),l=i.cartItems,o=i.setCartItems,b=i.totalPrice,x=r.a.useState(null),O=Object(u.a)(x,2),f=O[0],p=O[1],v=r.a.useState(!1),g=Object(u.a)(v,2),C=g[0],w=g[1],y=r.a.useState(!1),I=Object(u.a)(y,2),S=I[0],A=I[1],F=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,h.a.post("http://localhost:3001/orders",{items:l});case 4:t=e.sent,c=t.data,p(c.id),l.map((function(e){return h.a.delete("http://localhost:3001/Cart/".concat(e.id))})),w(!0),o([]),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044f");case 15:return e.prev=15,A(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{className:"".concat(_.a.overlay," ").concat(s?_.a.overlayVisible:""),children:Object(N.jsxs)("div",{className:_.a.drawer,children:[Object(N.jsxs)("h2",{className:"d-flex justify-between mb-30 mt-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(N.jsx)("img",{onClick:t,className:"removeBtn cu-p",src:"img/plus.svg",alt:"Close"})]}),n.length>0?Object(N.jsxs)("div",{className:"d-flex flex-column flex ",children:[Object(N.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(N.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(N.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"cartItemImg"}),Object(N.jsxs)("div",{className:"mr-20 flex",children:[Object(N.jsx)("p",{className:"mb-5",children:e.title}),Object(N.jsx)("b",{children:e.price})]}),Object(N.jsx)("img",{onClick:function(){return c(e.id)},className:"removeBtn",src:"img/plus.svg",alt:"plus"})]},e.id)}))}),Object(N.jsxs)("div",{className:"cartTotalBlock",children:[Object(N.jsxs)("ul",{children:[Object(N.jsxs)("li",{className:"d-flex",children:[Object(N.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e: "}),Object(N.jsx)("div",{}),Object(N.jsxs)("b",{children:[b," \u0440\u0443\u0431."]})]}),Object(N.jsxs)("li",{className:"d-flex",children:[Object(N.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 50%:"}),Object(N.jsx)("div",{}),Object(N.jsxs)("b",{children:[b/2," \u0440\u0443\u0431. "]})]})]}),Object(N.jsxs)("button",{disabled:S,onClick:F,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(N.jsx)("img",{src:"img/strel.svg",alt:"Arrow"})]})]})]}):Object(N.jsx)(k,{title:C?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430 \u043a\u043e\u0440\u043e\u043b\u0435\u0432\u0430",description:C?"\u0412\u0430\u0448\u0430 \u0437\u0430\u043a\u0430\u0437 #".concat(f," \u043e\u0444\u043e\u0440\u043c\u043b\u044f\u0435\u0442\u0441\u044f \u0430 \u043f\u043e\u043a\u0430 \u0438\u0434\u0438\u0442\u0435 \u043f\u043b\u0430\u0442\u0438\u0442\u0435 \u043d\u043e\u043b\u043e\u0433\u0438"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0438\u043d \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442 \u0431\u0435\u043b\u044c\u044f, \u0447\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437",image:C?"img/order.jpg":"img/empty-cart.jpg"})]})})},A=c(2);var F=function(e){var t=e.items,c=e.searchValue,a=e.setSearchValue,r=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,i=e.isLoading;return Object(N.jsxs)("div",{className:"content p-40",children:[Object(N.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(N.jsx)("h1",{children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443:"'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u044b"}),Object(N.jsxs)("div",{className:"search-block d-flex",children:[Object(N.jsx)("img",{src:"img/search.svg",alt:"Search"}),c&&Object(N.jsx)("img",{onClick:function(){return a("")},className:"clear cu-p",src:"img/plus.svg",alt:"Close"}),Object(N.jsx)("input",{onChange:r,value:c,placeholder:"\u041f\u043e\u0438\u0441\u043a.."})]})]}),Object(N.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(i?Object(l.a)(Array(10)):e).map((function(e,t){return Object(N.jsx)(C,Object(O.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))}()})]})};var T=function(e){Object(f.a)(e);var t=r.a.useContext(x),c=(t.onAddToCart,t.onAddToFavorite),a=r.a.useState([]),n=Object(u.a)(a,2),s=n[0],i=n[1],o=r.a.useState(!0),b=Object(u.a)(o,2),m=b[0],p=b[1];return r.a.useEffect((function(){Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("http://localhost:3001/orders");case 3:t=e.sent,c=t.data,i(c.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),p(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041a\u043e\u0447\u043a\u0430 \u0445\u0443\u0451\u0447\u043a\u0430"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(N.jsxs)("div",{className:"content p-40",children:[Object(N.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(N.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(N.jsx)("div",{className:"d-flex flex-wrap",children:(m?Object(l.a)(Array(10)):s).map((function(e,t){return Object(N.jsx)(C,Object(O.a)({onFavorite:function(e){return c(e)},loading:m},e),t)}))})]})};var P=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),c=t[0],a=t[1],n=r.a.useState([]),s=Object(u.a)(n,2),i=s[0],o=s[1],b=r.a.useState([]),m=Object(u.a)(b,2),O=m[0],f=m[1],p=r.a.useState(""),v=Object(u.a)(p,2),g=v[0],C=v[1],k=r.a.useState(!1),I=Object(u.a)(k,2),_=I[0],P=I[1],B=r.a.useState(!0),U=Object(u.a)(B,2),V=U[0],D=U[1];r.a.useEffect((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t,c,r,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([h.a.get("http://localhost:3001/cart"),h.a.get("http://localhost:3001/favorites"),h.a.get("http://localhost:3001/sneakers")]);case 3:t=e.sent,c=Object(u.a)(t,3),r=c[0],n=c[1],s=c[2],D(!1),f(n.data),o(r.data),a(s.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var E=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{i.find((function(e){return Number(e.parentId)==Number(t.id)}))?(h.a.delete("http://localhost:3001/Cart/".concat(t.id)),o((function(e){return e.filter((function(e){return Number(e.id)!=Number(t.id)}))}))):(h.a.post("http://localhost:3001/Cart",t),o((function(e){return[].concat(Object(l.a)(e),[t])})))}catch(c){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!O.find((function(e){return e.id==t.id}))){e.next=5;break}h.a.delete("http://localhost:3001/Favorites/".concat(t.id)),e.next=10;break;case 5:return e.next=7,h.a.post("http://localhost:3001/Favorites",t);case 7:c=e.sent,a=c.data,f((function(e){return[].concat(Object(l.a)(e),[a])}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert("\u0445\u0443\u0439 \u043d\u0435 \u0432 \u0436\u043e\u043f\u0435");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(x.Provider,{value:{items:c,cartItems:i,favorites:O,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)==Number(e)}))},onAddToFavorite:L,onAddToCart:E,setCartOpened:P,setCartItems:o},children:Object(N.jsxs)("div",{className:"wrapper clear",children:[Object(N.jsx)(S,{items:i,onClose:function(){P(!1)},onRemove:function(e){try{h.a.delete("http://localhost:3001/Cart/".concat(e)),o((function(t){return t.filter((function(t){return Number(t.id)!=Number(e)}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b")}},opened:_}),Object(N.jsx)(y,{onClickCart:function(){return P(!0)}}),Object(N.jsx)(A.a,{path:"",exact:!0,children:Object(N.jsx)(F,{items:c,cartItems:i,searchValue:g,setSearchValue:C,onChangeSearchInput:function(e){C(e.target.value)},onAddToFavorite:L,onAddToCart:E,isLoading:V})}),Object(N.jsx)(A.a,{path:"Favorites",component:w,exact:!0,children:Object(N.jsx)(w,{})}),Object(N.jsx)(A.a,{path:"orders",component:T,exact:!0,children:Object(N.jsx)(T,{})})]})})};s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(i.a,{children:Object(N.jsx)(P,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.daebd0cb.chunk.js.map