"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[601],{240:function(e,r,t){t.d(r,{Bt:function(){return v},Df:function(){return o},Y5:function(){return l},d5:function(){return d},z1:function(){return u}});var n=t(861),a=t(757),s=t.n(a),i=t(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="034807affda3ec91f179dd3de3e4274d",o=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/trending/all/day",{params:{api_key:c,language:"en-US"}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/search/movie",{params:{api_key:c,language:"en-US",query:r}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(r),{params:{api_key:c,language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n,a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(c,"&language=en-US"),e.prev=1,n={method:"GET",headers:{accept:"application/json"}},e.next=5,fetch(t,n);case 5:return a=e.sent,e.next=8,a.json();case 8:return i=e.sent,e.abrupt("return",i.cast);case 12:throw e.prev=12,e.t0=e.catch(1),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n,a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(c,"&language=en-US"),e.prev=1,n={method:"GET",headers:{accept:"application/json"}},e.next=5,fetch(t,n);case 5:return a=e.sent,e.next=8,a.json();case 8:return i=e.sent,e.abrupt("return",i.results||[]);case 12:throw e.prev=12,e.t0=e.catch(1),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(r){return e.apply(this,arguments)}}()},601:function(e,r,t){t.r(r),t.d(r,{default:function(){return S}});var n=t(861),a=t(439),s=t(757),i=t.n(s),c=t(791),o=t(689),u=t(87),l=t(414),d="MovieCard_movieCard__jf5v8",v="MovieCard_movieCardPoster__cOS3B",p="MovieCard_movieCardInfo__we+78",h="MovieCard_movieCardTitle__EpyYN",f="MovieCard_movieCardDetailsHeading__7FScS",m="MovieCard_movieCardDetails__eN88T",_="MovieCard_genresList__5957d",x="MovieCard_genreItem__0Cgvp",g=t(184),j=function(e){var r=e.movieDetails,t=(e.isDetails,r.release_date.split("-")[0]);return r?(0,g.jsxs)("section",{className:d,children:[(0,g.jsx)("div",{children:(0,g.jsx)("img",{src:r.poster_path?"https://image.tmdb.org/t/p/w500/".concat(r.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r.title,className:v})}),(0,g.jsxs)("div",{className:p,children:[(0,g.jsxs)("h2",{className:h,children:[r.title," (",t,")"]}),(0,g.jsxs)("p",{className:m,children:["User Score: ",Math.round(r.popularity),"%"]}),(0,g.jsx)("h3",{className:f,children:"Overview"}),(0,g.jsx)("p",{className:m,children:r.overview}),(0,g.jsx)("h3",{className:f,children:"Genres"}),(0,g.jsx)("ul",{className:_,children:r.genres.map((function(e){return(0,g.jsx)("li",{className:x,children:e.name},e.id)}))})]})]}):(0,g.jsx)(l.Z,{})},w="BackButton_backButton__SI3qJ",k=function(e){var r,t,n=e.onClick,a=(0,o.TH)(),s=(0,o.s0)(),i=null!==(r=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==r?r:"/";return(0,g.jsx)("button",{onClick:function(){n?n():s(i)},className:w,children:"Go Back"})},N="MovieDetails_additionalBlock__406xt",C="MovieDetails_additionalBlockTitle__9OFJN",b="MovieDetails_additionalNavLinks__-Lu-S",y="MovieDetails_movieNavLink__riSkc",M=t(240),S=function(){var e=(0,o.UO)().movieId,r=(0,c.useState)(null),t=(0,a.Z)(r,2),s=t[0],d=t[1];(0,c.useEffect)((function(){var r=function(){var r=(0,n.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e){r.next=11;break}return r.prev=1,r.next=4,(0,M.Y5)(e);case 4:t=r.sent,d(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.error("Error fetching data:",r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]);return s?(0,g.jsxs)("div",{children:[(0,g.jsx)(k,{}),(0,g.jsxs)("div",{children:[(0,g.jsx)(j,{movieDetails:s}),(0,g.jsxs)("div",{className:N,children:[(0,g.jsx)("h4",{className:C,children:"Additional information"}),(0,g.jsxs)("ul",{className:b,children:[(0,g.jsx)("li",{children:(0,g.jsx)(u.rU,{to:"/movies/".concat(s.id,"/cast"),className:y,children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(u.rU,{to:"/movies/".concat(s.id,"/reviews"),className:y,children:"Reviews"})})]})]})]}),(0,g.jsx)(o.j3,{})]}):(0,g.jsx)(l.Z,{})}}}]);
//# sourceMappingURL=601.41fad383.chunk.js.map