"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[847],{847:function(e,r,n){n.r(r);var s=n(861),i=n(439),t=n(757),c=n.n(t),a=n(791),l=n(689),d=n(87),o=n(243),h=n(184);r.default=function(){var e=(0,l.UO)().movieId,r=(0,a.useState)(null),n=(0,i.Z)(r,2),t=n[0],p=n[1];if((0,a.useEffect)((function(){var r=function(){var r=(0,s.Z)(c().mark((function r(){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=8e0989dbac705c526907a37342af002c"));case 3:n=r.sent,p(n.data),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),!t)return(0,h.jsx)("div",{children:"Loading..."});var x=t.title,u=t.release_date,v=t.vote_average,j=t.overview,f=t.genres,m=t.poster_path;return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:(0,h.jsx)(d.rU,{to:"..",className:"go-back-link",children:"Go back"})}),(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(m),alt:x,style:{marginRight:"20px",marginTop:"20px"}}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:[x," (",u.slice(0,4),")"]}),(0,h.jsxs)("p",{children:["User Score: ",v]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:j}),(0,h.jsx)("h3",{children:"Genres "}),(0,h.jsx)("p",{children:f.map((function(e){return(0,h.jsxs)("span",{children:[e.name," "]},e.id)}))})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("ul",{children:[(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsx)("li",{children:(0,h.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(d.rU,{to:"reviews",children:"Reviews"})})]}),(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(l.j3,{})})]})]})}}}]);
//# sourceMappingURL=847.d3bdb17a.chunk.js.map