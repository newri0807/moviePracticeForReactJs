(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),u=n(8),i=n(1),s=n(7),o=n.n(s),m=n(10),v=n(13);var p=function(e){var t=e.coverImg,n=e.title,a=e.summary,c=e.genres,l=e.id;return r.a.createElement("div",null,r.a.createElement("img",{src:t}),r.a.createElement("h2",null,r.a.createElement(u.b,{to:"/movie/".concat(l)},n)),r.a.createElement("p",null,a),r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",{key:e},e)}))))};var f=function(){var e=Object(a.useState)(!0),t=Object(v.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),u=Object(v.a)(l,2),i=u[0],s=u[1],f=function(){var e=Object(m.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,s(t.data.movies),c(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useState)((function(){f()}),[]),console.log(i),r.a.createElement("div",null,n?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",null,i.map((function(e){return r.a.createElement(p,{key:e.id,id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres})}))))};var E=function(){var e=Object(i.f)().id,t=function(){var t=Object(m.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,console.log(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){t()}),[]),r.a.createElement("h1",null,"Detail")};var d=function(){return r.a.createElement(u.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/movie/:id"},r.a.createElement(E,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(f,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f990f0c6.chunk.js.map