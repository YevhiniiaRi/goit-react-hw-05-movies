"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{266:function(e,t,n){n.r(t);var r=n(861),c=n(439),i=n(757),o=n.n(i),u=n(791),a=n(87),s=n(184);t.default=function(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),n=t[0],i=t[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=8e0989dbac705c526907a37342af002c");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r=n.results.filter((function(e){return e.title&&""!==e.title.trim()})),i(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)("ul",{children:n.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},861:function(e,t,n){function r(e,t,n,r,c,i,o){try{var u=e[i](o),a=u.value}catch(s){return void n(s)}u.done?t(a):Promise.resolve(a).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,i){var o=e.apply(t,n);function u(e){r(o,c,i,u,a,"next",e)}function a(e){r(o,c,i,u,a,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=266.bad31f08.chunk.js.map