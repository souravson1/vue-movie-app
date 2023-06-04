(function(){"use strict";var e={3823:function(e,n,t){var o=t(9242),r=t(3396);const i=(0,r._)("h1",null,[(0,r._)("span",null,"Vue"),(0,r.Uk)("Movies")],-1);function a(e,n){const t=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r.Wm)(t,{to:"/"},{default:(0,r.w5)((()=>[i])),_:1})]),(0,r._)("main",null,[(0,r.Wm)(o)])],64)}var u=t(89);const l={},s=(0,u.Z)(l,[["render",a]]);var c=s,v=t(2483),p=t(7139);const m={class:"home"},f={class:"feature-card"},d=(0,r._)("img",{src:"https://cdn.oneesports.gg/cdn-data/2023/01/Anime_SuzumenoTojimari_Movie_Poster-1024x576.jpg",alt:"Suzume Poster",class:"featured-img"},null,-1),h=(0,r._)("div",{class:"detail"},[(0,r._)("h3",null,"Suzume"),(0,r._)("p",null,"Suzume is Shinkai's third collaboration with Radwimps and Tanaka, after Your Name (2016) and Weathering with You (2019), and was inspired by the Tōhoku earthquake and tsunami.")],-1),w=(0,r._)("input",{type:"submit",value:"Search"},null,-1),_={class:"movie-list"},g={class:"product-img"},y=["src"],b={class:"type"},k={class:"detail"},O={class:"year"};function j(e,n,t,i,a,u){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("div",f,[(0,r.Wm)(l,{to:"/movie/tt0409591"},{default:(0,r.w5)((()=>[d,h])),_:1})]),(0,r._)("form",{onSubmit:n[1]||(n[1]=(0,o.iM)((e=>i.SearchMovies()),["prevent"])),class:"search-box"},[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"What are you looking for?","onUpdate:modelValue":n[0]||(n[0]=e=>i.search=e)},null,512),[[o.nr,i.search]]),w],32),(0,r._)("div",_,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.movies,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"movie",key:e.imdbID},[(0,r.Wm)(l,{to:"/movie/"+e.imdbID,class:"movie-link"},{default:(0,r.w5)((()=>[(0,r._)("div",g,[(0,r._)("img",{src:e.Poster,alt:"Movie Poster"},null,8,y),(0,r._)("div",b,(0,p.zw)(e.Type),1)]),(0,r._)("div",k,[(0,r._)("p",O,(0,p.zw)(e.Year),1),(0,r._)("h3",null,(0,p.zw)(e.Title),1)])])),_:2},1032,["to"])])))),128))])])}var z=t(4870),P={apikey:"c3173c01"},S={setup(){const e=(0,z.iH)(""),n=(0,z.iH)([]),t=()=>{""!=e.value&&fetch(`https://www.omdbapi.com/?apikey=${P.apikey}&s=${e.value}`).then((e=>e.json())).then((t=>{n.value=t.Search,e.value="",console.log(n.value)}))};return{search:e,movies:n,SearchMovies:t}}};const M=(0,u.Z)(S,[["render",j]]);var D=M;const T={class:"movie-detail"},x=["src"];function W(e,n,t,o,i,a){return(0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("h2",null,(0,p.zw)(o.movie.Title),1),(0,r._)("p",null,(0,p.zw)(o.movie.Year),1),(0,r._)("img",{src:o.movie.Poster,alt:"Movie Poster",class:"featured-img"},null,8,x),(0,r._)("p",null,(0,p.zw)(o.movie.Plot),1)])}var Y={setup(){const e=(0,z.iH)({}),n=(0,v.yj)();return(0,r.wF)((()=>{fetch(`https://www.omdbapi.com/?apikey=${P.apikey}&i=${n.params.id}&plot=full`).then((e=>e.json())).then((n=>{e.value=n}))})),{movie:e}}};const H=(0,u.Z)(Y,[["render",W]]);var $=H;const Z=[{path:"/",name:"home",component:D},{path:"/movie/:id",name:"Movie Detail",component:$}],C=(0,v.p7)({history:(0,v.PO)("/"),routes:Z});var F=C;(0,o.ri)(c).use(F).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var u=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],l=o[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(l)var c=l(t)}for(n&&n(o);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunkvue_movie_app"]=self["webpackChunkvue_movie_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3823)}));o=t.O(o)})();
//# sourceMappingURL=app.9ced1ef8.js.map