"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),i=r.n(c),s=r(791),o=r(689),l=r(243),p=r(184);t.default=function(){var e=(0,o.UO)().movieId,t=(0,s.useState)([]),r=(0,a.Z)(t,2),c=r[0],h=r[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=8e0989dbac705c526907a37342af002c"));case 3:r=t.sent,h(r.data.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),0===c.length?(0,p.jsx)("div",{children:"Loading..."}):(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:c.map((function(e){return e.profile_path?(0,p.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:e.name,style:{marginRight:"20px"}}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{children:(0,p.jsx)("strong",{children:e.name})}),(0,p.jsxs)("p",{children:["Character: ",e.character]})]})]},e.id):null}))})})}}}]);
//# sourceMappingURL=597.84724da0.chunk.js.map