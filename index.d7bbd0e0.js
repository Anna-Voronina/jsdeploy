!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){o[t]=e},e.parcelRequired7c6=a);var c=a("hrrt1");var i=document.querySelector(".aside-list"),r=document.querySelector(".main-content");console.log(r);var s=new(0,c.SwaggerAPI);s.fetchBooksCategoryList().then((function(t){var e=t.data.map((function(t){return'<a class="aside-link"><li class="aside-item">'.concat(t.list_name,"</li></a>")})).join("");i.innerHTML=e})).catch((function(t){console.log(t)}));i.addEventListener("click",(function(t){var e=t.target.textContent;s.categoryName=e,s.fetchBooksByCategory(e).then((function(t){var e=t.data,n=e[0].list_name.split(" "),o=n.length/2,a=n.slice(0,o).join(" "),c=n.slice(o).join(" "),i="".concat(a,' <span class="categories-title-decor">').concat(c,"</span>");r.innerHTML='<h1 class="categories-title">'.concat(i,'</h1> <ul class="categories-item">').concat(e.map((function(t){var e=t.book_image,n=t.description,o=t.title,a=t.author;return'\n\n<li class="category-list-item">\n<a class="book-link" href="">\n<img class="book-image" src="'.concat(e,'" alt="').concat(n,'" />\n<div class="book-card-content">\n<h2 class="book-title">').concat(o,'</h2>\n<p class="book-author">').concat(a,"</p>\n</div>\n</a>\n</li>")})).join(""),"</ul>")})).catch((function(t){console.log(t)}))})),a("71ZRj"),a("ekC86"),a("i8Q71");var l=a("bpxeT"),u=a("2TvXO");c=a("hrrt1");function d(t){return t.map((function(t){var e=t.book_image,n=t.description,o=t.title,a=t.author,c=t._id;return'<li class="books-list-item">\n                 <a class="book-link" href="" data-id="'.concat(c,'">\n                    <div class="book-thumb">\n                      <img class="book-image" src="').concat(e,'" alt="').concat(n,'" />\n\n                        <div class="book-overlay">\n                       <p class="book-overlay-text">quick view</p>\n                       </div>\n                       </div>                     \n                     <div class="book-card-content">\n                     <h2 class="book-title">').concat(o,'</h2>\n                     <p class="book-author">').concat(a,"</p>\n                     </div>\n                 </a>                    \n              </li>")})).join("")}var p=document.querySelector(".category-list"),f=document.querySelector(".home-title"),g=new(0,c.SwaggerAPI),h=0;function v(){return(v=t(l)(t(u).mark((function e(){var n,o,a,c,i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.fetchTopBooks();case 3:for(n=t.sent.data,o=0;o<4;o++)a=n[o].books,c=0,h<=767&&(c=1),h>=768&&h<1440&&(c=3),h>=1440&&(c=5),i='<li class="category-list-item top-list-item">\n        <p class="category-name" data-category-name="'.concat(a[0].list_name,'">').concat(a[0].list_name,'</p>\n        <ul class="books-list">\n          ').concat(d(a.slice(0,c)),'\n        </ul>\n       <button class="category-list-button">see more</button>  \n      </li>'),p.insertAdjacentHTML("beforeend",i),m();t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(){document.querySelectorAll(".category-list-button").forEach((function(t){t.addEventListener("click",b)}))}function b(t){return k.apply(this,arguments)}function k(){return(k=t(l)(t(u).mark((function e(n){var o,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=n.target.previousElementSibling.previousElementSibling.textContent,g.categoryName=o,t.next=5,g.fetchBooksByCategory();case 5:a=t.sent.data,f.innerHTML=y(o),p.classList.add("category-list-click"),p.innerHTML=d(a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function y(t){var e=t.split(" "),n=e.length/2,o=e.slice(0,n).join(" "),a=e.slice(n).join(" ");return"".concat(o,' <span class="home-title-decor">').concat(a,"</span>")}onload=function(t){h=t.target.body.clientWidth},function(){v.apply(this,arguments)}()}();
//# sourceMappingURL=index.d7bbd0e0.js.map
