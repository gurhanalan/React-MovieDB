(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),s=(a(15),a(1)),o=a(3),i=a(6),m=a.n(i),u=a(9),v="https://www.omdbapi.com/?apikey=".concat("ed495db8"),E=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)({show:!1,msg:""}),s=Object(o.a)(l,2),i=s[0],E=s[1],b=Object(n.useState)([]),f=Object(o.a)(b,2),p=f[0],d=f[1],g=Object(n.useState)(null),h=Object(o.a)(g,2),N=h[0],j=h[1],O=function(){var e=Object(u.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:"True"===(n=e.sent).Response?(d(n.Search||n),E({show:!1,msg:""}),n.totalResults&&j(n.totalResults)):E({show:!0,msg:n.Error}),c(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O("".concat(v).concat(e))}),[e]),{isLoading:r,error:i,data:p,totalResults:N}},b=r.a.createContext(),f=function(e){var t=e.children,a=Object(n.useState)("batman"),c=Object(o.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)(1),m=Object(o.a)(i,2),u=m[0],v=m[1],f=E("&s=".concat(l,"&page=").concat(u)),p=f.isLoading,d=f.error,g=f.data,h=f.totalResults;return r.a.createElement(b.Provider,{value:{isLoading:p,error:d,movies:g,query:l,setQuery:s,totalResults:h,setPage:v,page:u}},t)},p=function(){return Object(n.useContext)(b)},d=function(){var e=p(),t=e.query,a=e.setQuery,n=e.error,c=e.totalResults,l=e.setPage,s=e.page,o=Math.ceil(c/10),i=Array.from({length:o});return r.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault()}},r.a.createElement("h2",null,"search movies"),r.a.createElement("input",{type:"text",className:"form-input",value:t,onChange:function(e){a(e.target.value),l(1)}}),n.show&&r.a.createElement("div",{className:"error"},"Incorrect IMDb ID."===n.msg?"Please enter a movie name":n.msg),!n.show&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"movies-result"},"Total ".concat(c," Results ")),r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{className:"prev-btn",onClick:function(){s>2&&l((function(e){return e-1}))}},"prev"),i.map((function(e,t){return r.a.createElement("button",{key:t,className:"page-btn ".concat(t+1===s?"active-btn":null),onClick:function(){l(t+1)}}," ",t+1)})),r.a.createElement("button",{className:"next-btn",onClick:function(){s<o&&l((function(e){return e+1}))}},"next"))))},g=a(4),h="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png",N=function(){var e=p(),t=e.movies;return e.isLoading?r.a.createElement("div",{className:"loading"}):r.a.createElement("section",{className:"movies"},t.map((function(e){var t=e.imdbID,a=e.Poster,n=e.Title,c=e.Year;return r.a.createElement(g.b,{to:"/movies/".concat(t),key:t,className:"movie"},r.a.createElement("article",null,r.a.createElement("img",{src:"N/A"===a?h:a,alt:n}),r.a.createElement("div",{className:"movie-info"},r.a.createElement("h4",{className:"title"},n),r.a.createElement("p",null,c))))})))},j=function(){return r.a.createElement("main",null,r.a.createElement(d,null),r.a.createElement(N,null))},O=function(){var e=Object(s.g)().id,t=E("&i=".concat(e)),a=t.isLoading,n=t.error,c=t.data;if(a)return r.a.createElement("div",{className:"loading"});if(n.show)return r.a.createElement("div",{className:"page-error"},r.a.createElement("h1",null,n.msg),r.a.createElement(g.b,{to:"/",className:"btn"},"back to movies"));var l=c.Poster,o=c.Title,i=c.Plot,m=c.Year;return r.a.createElement("section",{className:"single-movie"},r.a.createElement("img",{src:"N/A"===l?h:l,alt:o}),r.a.createElement("div",{className:"single-movie-info"},r.a.createElement("h2",null,o),r.a.createElement("p",null,i),r.a.createElement("h4",null,m),r.a.createElement(g.b,{to:"/",className:"btn"},"back to movies")))};var w=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",element:r.a.createElement(j,null)}),r.a.createElement(s.a,{path:"/movies/:id",element:r.a.createElement(O,null)}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null,r.a.createElement(g.a,null,r.a.createElement(w,null)))),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.19aee299.chunk.js.map