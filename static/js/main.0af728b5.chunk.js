(this.webpackJsonpreact_memory_game=this.webpackJsonpreact_memory_game||[]).push([[0],[,,,,,,,,,,function(c,e,t){},function(c,e,t){},function(c,e,t){},,function(c,e,t){"use strict";t.r(e);var n=t(1),a=t.n(n),r=t(5),s=t.n(r),i=(t(10),t(3)),d=t(2),u=(t(11),t(12),t(0)),o=function(c){var e=c.card,t=c.handleChoice,n=c.flipped,a=c.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:n?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(u.jsx)("img",{className:"back",src:"/img/cover.png",alt:"card back",onClick:function(){a||t(e)}})]})})},l=[{src:"/img/helmet-1.png",matched:!1},{src:"/img/potion-1.png",matched:!1},{src:"/img/ring-1.png",matched:!1},{src:"/img/scroll-1.png",matched:!1},{src:"/img/shield-1.png",matched:!1},{src:"/img/sword-1.png",matched:!1}];var j=function(){var c=Object(n.useState)([]),e=Object(d.a)(c,2),t=e[0],a=e[1],r=Object(n.useState)(0),s=Object(d.a)(r,2),j=s[0],m=s[1],b=Object(n.useState)(null),h=Object(d.a)(b,2),O=h[0],f=h[1],p=Object(n.useState)(null),g=Object(d.a)(p,2),x=g[0],v=g[1],N=Object(n.useState)(!1),k=Object(d.a)(N,2),S=k[0],M=k[1],w=function(){var c=[].concat(l,l).sort((function(){return Math.random()-.5})).map((function(c){return Object(i.a)(Object(i.a)({},c),{},{id:Math.random()})}));f(null),v(null),a(c),m(0)};Object(n.useEffect)((function(){O&&x&&(M(!0),O.src===x.src?(a((function(c){return c.map((function(c){return c.src===O.src?Object(i.a)(Object(i.a)({},c),{},{matched:!0}):c}))})),_()):setTimeout(_,1e3))}),[O,x]),Object(n.useEffect)((function(){w()}),[]);var C=function(c){O?v(c):f(c)},_=function(){f(null),v(null),m((function(c){return c+1})),M(!1)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Magic Math"}),Object(u.jsx)("button",{onClick:w,children:"New Game"}),Object(u.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(u.jsx)(o,{card:c,handleChoice:C,flipped:c===O||c===x||c.matched,disabled:S},c.id)}))}),Object(u.jsxs)("p",{children:["Turns: ",j]})]})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.0af728b5.chunk.js.map