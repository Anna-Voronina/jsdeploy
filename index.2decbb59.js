!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"9p9yL":"index.2decbb59.js","2dPzb":"amazon.3c3f1cde.webp","82OGy":"amazon.b0a6f23c.png","glj45":"apple.78ef44cc.webp","cKFxX":"apple.34efda77.png","kLXsS":"bookshop.bf5b4137.webp","jA3cI":"bookshop.11f8a97b.png","bBRCa":"shopping-list.44809c59.js"}'));var c=a("bpxeT"),r=a("2TvXO"),i=a("hrrt1");var s;c=a("bpxeT"),r=a("2TvXO");s=a("aNJCr").getBundleURL("9p9yL")+a("iE7OH").resolve("2dPzb");var l;l=a("aNJCr").getBundleURL("9p9yL")+a("iE7OH").resolve("82OGy");var u;u=a("aNJCr").getBundleURL("9p9yL")+a("iE7OH").resolve("glj45");var d;d=a("aNJCr").getBundleURL("9p9yL")+a("iE7OH").resolve("cKFxX");var p;p=a("aNJCr").getBundleURL("9p9yL")+a("iE7OH").resolve("kLXsS");var v;v=a("aNJCr").getBundleURL("9p9yL")+a("iE7OH").resolve("jA3cI");var f=a("4LMMA"),m=(i=a("hrrt1"),a("i9Oqj")),g=new(0,i.SwaggerAPI),b=document.querySelector(".backdrop"),k=document.querySelector(".modal-close-btn"),y=document.querySelector(".modal-btn"),h=document.querySelector(".modal-info"),L=document.querySelector(".modal-book"),w={};function x(){document.querySelectorAll(".book-link").forEach((function(e){return e.addEventListener("click",_)}))}function _(e){return E.apply(this,arguments)}function E(){return(E=e(c)(e(r).mark((function t(n){var o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),document.body.style.overflow="hidden",b.classList.toggle("is-hidden"),b.addEventListener("click",R),window.addEventListener("keydown",C),k.addEventListener("click",T),e.prev=6,g.bookId=n.currentTarget.dataset.id,e.next=10,g.fetchBookById();case 10:o=e.sent,w=o.data,console.log(w),A(w),S(w),y.addEventListener("click",H),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(6);case 21:case"end":return e.stop()}}),t,null,[[6,18]])})))).apply(this,arguments)}function S(e){var t=f.default.load("bookList");if(t&&0!==t.length){var n=!0,o=!1,a=void 0;try{for(var c,r=t[Symbol.iterator]();!(n=(c=r.next()).done);n=!0){if(book=c.value,book.title===e.title)return void q();B()}}catch(e){o=!0,a=e}finally{try{n||null==r.return||r.return()}finally{if(o)throw a}}}else B()}function H(){var e=f.default.load("bookList"),t=document.querySelector(".modal-book-name").textContent;"add to shopping list"===y.textContent?(f.default.addBookToStorage(w),q(),(0,m.countBook)()):(e.forEach((function(e,n,o){if(e.title===t)return o.splice(n,1)})),f.default.save("bookList",e),0===e.length&&f.default.remove("bookList"),(0,m.countBook)(),B())}function B(){y.textContent="add to shopping list",h.style.display="none"}function q(){y.textContent="remove from the shopping list",h.style.display="block"}function A(t){var n='<img\nclass="modal-img"\nsrc='.concat(t.book_image,'\nalt="Book cover"\n/>\n<div class="modal-info-container">\n<p class="modal-book-name">').concat(t.title,'</p>\n<p class="modal-book-author">').concat(t.author,'</p>\n<p class="modal-list-name is-hidden">').concat(t.list_name,'</p>\n<p class="modal-book-desc">').concat(t.description,'\n</p>\n<div class="modal-icons-container">\n  <a href="').concat(t.buy_links[0].url,'" target="_blank" rel="noopener noreferrer"\n    ><picture class="modal-icon">\n      <source\n        srcset="').concat(e(s),'"\n        type="image/webp"\n      />\n      <source\n        srcset="').concat(e(l),'"\n        type="image/png"\n      />\n      <img\n        src="').concat(e(l),'"\n        alt="Amazon"\n      /> </picture\n  ></a>\n  <a href="').concat(t.buy_links[1].url,'" target="_blank" rel="noopener noreferrer"\n    ><picture class="modal-icon">\n      <source\n        srcset="').concat(e(u),'"\n        type="image/webp"\n      />\n      <source\n        srcset="').concat(e(d),'"\n        type="image/png"\n      />\n      <img\n        src="').concat(e(d),'"\n        alt="Apple Books"\n      /> </picture\n  ></a>\n  <a href="').concat(t.buy_links[4].url,'" target="_blank" rel="noopener noreferrer"\n    ><picture class="modal-icon">\n      <source\n        srcset="').concat(e(p),'"\n        type="image/webp"\n      />\n      <source\n        srcset="').concat(e(v),'"\n        type="image/png"\n      />\n      <img\n        src="').concat(e(v),'"\n        alt="Bookshop"\n      /></picture\n  ></a>\n</div>\n</div>');L.innerHTML=n}function C(e){"Escape"===e.key&&T()}function R(e){e.target===b&&T()}function T(){b.classList.toggle("is-hidden"),document.body.style.overflow="visible",b.removeEventListener("click",R),window.removeEventListener("keydown",C),k.removeEventListener("click",T)}var O,j=document.querySelector(".aside-list"),F=document.querySelector(".aside-title"),N=document.querySelector(".main-content"),M=new(0,i.SwaggerAPI),U=(O=e(c)(e(r).mark((function t(){var n,o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.fetchBooksCategoryList();case 3:n=e.sent.data,o=n.map((function(e){return'<a class="aside-link" ><li class="aside-item">'.concat(e.list_name,"</li></a>")})).join(""),j.innerHTML=o,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])}))),function(){return O.apply(this,arguments)});U();var I=null;j.addEventListener("click",(function(t){var n=t.target.textContent;M.categoryName=n,I&&I.classList.remove("active"),(I=t.target).classList.add("active"),F.classList.remove("active");var o=function(){var t=e(c)(e(r).mark((function t(){var o,a,c,i,s,l;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.fetchBooksByCategory(n);case 3:o=e.sent.data,console.log(o),a=o[0].list_name,c=a.split(" "),i=c[c.length-1],s=c.slice(0,c.length-1).join(" "),l="".concat(s,' <span class="categories-title-decor">').concat(i,"</span>"),N.innerHTML='<h1 class="categories-title">'.concat(l,'</h1> <ul class="categories-item">').concat(o.map((function(e){var t=e.book_image,n=e.description,o=e.title,a=e.author,c=e._id;return'\n\n<li class="category-list-item">\n<a class="book-link" href="" data-id = "'.concat(c,'">\n<div class="book-thumb">\n<img class="book-image" src="').concat(t,'" alt="').concat(n,'" />\n<div class="book-overlay">\n<p class="book-overlay-text">quick view</p>\n</div>\n</div>\n<div class="book-card-content">\n<h2 class="book-title">').concat(o,'</h2>\n<p class="book-author">').concat(a,"</p>\n</div>\n</a>\n</li>")})).join(""),"</ul>"),x(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();o()})),a("71ZRj"),a("i8Q71");c=a("bpxeT"),r=a("2TvXO"),i=a("hrrt1");function J(e){return e.map((function(e){var t=e.book_image,n=e.description,o=e.title,a=e.author,c=e._id;return'<li class="books-list-item">\n                 <a class="book-link" href="" data-id="'.concat(c,'">\n                    <div class="book-thumb">\n                      <img class="book-image" src="').concat(t,'" alt="').concat(n,'" />\n\n                        <div class="book-overlay">\n                       <p class="book-overlay-text">quick view</p>\n                       </div>\n                       </div>                     \n                     <div class="book-card-content">\n                     <h2 class="book-title">').concat(o,'</h2>\n                     <p class="book-author">').concat(a,"</p>\n                     </div>\n                 </a>                    \n              </li>")})).join("")}var X=document.querySelector(".category-list"),z=document.querySelector(".home-title"),P=new(0,i.SwaggerAPI),D=0;function G(){return(G=e(c)(e(r).mark((function t(){var n,o,a,c,i;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.fetchTopBooks();case 3:for(n=e.sent.data,o=0;o<4;o++)a=n[o].books,c=0,D<=767&&(c=1),D>=768&&D<1440&&(c=3),D>=1440&&(c=5),i='<li class="category-list-item top-list-item">\n        <p class="category-name" data-category-name="'.concat(a[0].list_name,'">').concat(a[0].list_name,'</p>\n        <ul class="books-list">\n          ').concat(J(a.slice(0,c)),'\n        </ul>\n       <button class="category-list-button">see more</button>  \n      </li>'),X.insertAdjacentHTML("beforeend",i),K();e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:x();case 11:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function K(){document.querySelectorAll(".category-list-button").forEach((function(e){e.addEventListener("click",Q)}))}function Q(e){return W.apply(this,arguments)}function W(){return(W=e(c)(e(r).mark((function t(n){var o,a;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=n.target.previousElementSibling.previousElementSibling.textContent,P.categoryName=o,e.next=5,P.fetchBooksByCategory();case 5:a=e.sent.data,z.innerHTML=Z(o),X.classList.add("category-list-click"),X.innerHTML=J(a),V(o),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function Z(e){var t=e.split(" "),n=t[t.length-1],o=t.slice(0,t.length-1).join(" ");return'<span class="home-title-decor">'.concat(o," </span>").concat(n)}function V(e){var t=document.querySelectorAll(".aside-item"),n=document.querySelector(".aside-title");t.forEach((function(t){e===t.textContent&&(n.classList.toggle("active"),t.classList.toggle("active"))}))}onload=function(e){D=e.target.body.clientWidth},function(){G.apply(this,arguments)}(),a("b3EoS")}();
//# sourceMappingURL=index.2decbb59.js.map