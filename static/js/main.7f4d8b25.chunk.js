(this.webpackJsonpreact_memory_game=this.webpackJsonpreact_memory_game||[]).push([[0],[,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},,function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),r=t(5),s=t.n(r),i=(t(10),t(3)),m=t(2),o=(t(11),t(12),t(0)),d=function(e){var c=e.card,t=e.handleChoice,a=e.flipped,n=e.disabled;return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:a?"flipped":"",children:[Object(o.jsx)("img",{className:"front",src:c.src,alt:"card front"}),Object(o.jsx)("img",{className:"back",src:"/react_memory_game/img/cover.png",alt:"card back",onClick:function(){n||t(c)}})]})})},u=[{src:"/react_memory_game/img/helmet-1.png",matched:!1},{src:"/react_memory_game/img/potion-1.png",matched:!1},{src:"/react_memory_game/img/ring-1.png",matched:!1},{src:"/react_memory_game/img/scroll-1.png",matched:!1},{src:"/react_memory_game/img/shield-1.png",matched:!1},{src:"/react_memory_game/img/sword-1.png",matched:!1}];var l=function(){var e=Object(a.useState)([]),c=Object(m.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)(0),s=Object(m.a)(r,2),l=s[0],j=s[1],b=Object(a.useState)(null),g=Object(m.a)(b,2),h=g[0],O=g[1],f=Object(a.useState)(null),p=Object(m.a)(f,2),_=p[0],x=p[1],v=Object(a.useState)(!1),y=Object(m.a)(v,2),N=y[0],k=y[1],S=function(){var e=[].concat(u,u).sort((function(){return Math.random()-.5})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Math.random()})}));O(null),x(null),n(e),j(0)};Object(a.useEffect)((function(){h&&_&&(k(!0),h.src===_.src?(n((function(e){return e.map((function(e){return e.src===h.src?Object(i.a)(Object(i.a)({},e),{},{matched:!0}):e}))})),w()):setTimeout(w,1e3))}),[h,_]),Object(a.useEffect)((function(){S()}),[]);var M=function(e){h?x(e):O(e)},w=function(){O(null),x(null),j((function(e){return e+1})),k(!1)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Magic Math"}),Object(o.jsx)("button",{onClick:S,children:"New Game"}),Object(o.jsx)("div",{className:"card-grid",children:t.map((function(e){return Object(o.jsx)(d,{card:e,handleChoice:M,flipped:e===h||e===_||e.matched,disabled:N},e.id)}))}),Object(o.jsxs)("p",{children:["Turns: ",l]})]})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.7f4d8b25.chunk.js.map