(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),u=(n(15),n(1)),l=n(9),o=n(7),s=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}}))};s.propType={setCategories:n.n(o).a.func.isRequired};var m=function(e){var t=e.title,n=e.url;return console.log(n),r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("p",null,t," "))},p=n(4),f=n.n(p),d=n(8),g=function(){var e=Object(d.a)(f.a.mark((function e(t){var n,a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=r7smesNco3RoljhkiG7r2rfV2eLMnQYl"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){g(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,i=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),i&&r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))))},v=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(s,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(E,{key:e,category:e})}))))};i.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b5b8d759.chunk.js.map