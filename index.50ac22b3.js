function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"7bk21":"index.50ac22b3.js","7QMdA":"amazon.3c3f1cde.webp","CgNCO":"amazon.b0a6f23c.png","3CFHC":"apple.78ef44cc.webp","hYuvF":"apple.34efda77.png","lKiFj":"bookshop.bf5b4137.webp","1dJFY":"bookshop.11f8a97b.png","cjv10":"shopping-list.8bd6dcbd.js"}'));var i=a("b2XdZ");var s;s=new URL(a("kyEFX").resolve("7QMdA"),import.meta.url).toString();var l;l=new URL(a("kyEFX").resolve("CgNCO"),import.meta.url).toString();var c;c=new URL(a("kyEFX").resolve("3CFHC"),import.meta.url).toString();var r;r=new URL(a("kyEFX").resolve("hYuvF"),import.meta.url).toString();var d;d=new URL(a("kyEFX").resolve("lKiFj"),import.meta.url).toString();var u;u=new URL(a("kyEFX").resolve("1dJFY"),import.meta.url).toString();var m=a("b5rV1"),p=(i=a("b2XdZ"),a("lPDaB"));const g=new(0,i.SwaggerAPI),b=document.querySelector(".backdrop"),k=document.querySelector(".modal-close-btn"),y=document.querySelector(".modal-btn"),f=document.querySelector(".modal-info"),v=document.querySelector(".modal-book");let h={};function w(){document.querySelectorAll(".book-link").forEach((e=>e.addEventListener("click",L)))}async function L(t){t.preventDefault(),document.body.style.overflow="hidden",b.classList.toggle("is-hidden"),b.addEventListener("click",F),window.addEventListener("keydown",E),k.addEventListener("click",H);try{g.bookId=t.currentTarget.dataset.id;const o=await g.fetchBookById();h=o.data,console.log(h),function(t){const o=`<img\nclass="modal-img"\nsrc=${t.book_image}\nalt="Book cover"\n/>\n<div class="modal-info-container">\n<p class="modal-book-name">${t.title}</p>\n<p class="modal-book-author">${t.author}</p>\n<p class="modal-list-name is-hidden">${t.list_name}</p>\n<p class="modal-book-desc">${t.description}\n</p>\n<div class="modal-icons-container">\n  <a href="${t.buy_links[0].url}" target="_blank" rel="noopener noreferrer"\n    ><picture class="modal-icon">\n      <source\n        srcset="${e(s)}"\n        type="image/webp"\n      />\n      <source\n        srcset="${e(l)}"\n        type="image/png"\n      />\n      <img\n        src="${e(l)}"\n        alt="Amazon"\n      /> </picture\n  ></a>\n  <a href="${t.buy_links[1].url}" target="_blank" rel="noopener noreferrer"\n    ><picture class="modal-icon">\n      <source\n        srcset="${e(c)}"\n        type="image/webp"\n      />\n      <source\n        srcset="${e(r)}"\n        type="image/png"\n      />\n      <img\n        src="${e(r)}"\n        alt="Apple Books"\n      /> </picture\n  ></a>\n  <a href="${t.buy_links[4].url}" target="_blank" rel="noopener noreferrer"\n    ><picture class="modal-icon">\n      <source\n        srcset="${e(d)}"\n        type="image/webp"\n      />\n      <source\n        srcset="${e(u)}"\n        type="image/png"\n      />\n      <img\n        src="${e(u)}"\n        alt="Bookshop"\n      /></picture\n  ></a>\n</div>\n</div>`;v.innerHTML=o}(h),function(e){const t=m.default.load("bookList");if(!t||0===t.length)return void S();for(book of t){if(book.title===e.title)return void _();S()}}(h),y.addEventListener("click",$)}catch{}}function $(){const e=m.default.load("bookList"),t=document.querySelector(".modal-book-name").textContent;"add to shopping list"===y.textContent?(m.default.addBookToStorage(h),_(),(0,p.countBook)()):(e.forEach(((e,o,n)=>{if(e.title===t)return n.splice(o,1)})),m.default.save("bookList",e),0===e.length&&m.default.remove("bookList"),(0,p.countBook)(),S())}function S(){y.textContent="add to shopping list",f.style.display="none"}function _(){y.textContent="remove from the shopping list",f.style.display="block"}function E(e){"Escape"===e.key&&H()}function F(e){e.target===b&&H()}function H(){b.classList.toggle("is-hidden"),document.body.style.overflow="visible",b.removeEventListener("click",F),window.removeEventListener("keydown",E),k.removeEventListener("click",H)}const C=document.querySelector(".aside-list"),q=document.querySelector(".aside-title"),A=document.querySelector(".main-content"),R=new(0,i.SwaggerAPI);(async()=>{try{const{data:e}=await R.fetchBooksCategoryList(),t=e.map((e=>`<a class="aside-link" ><li class="aside-item">${e.list_name}</li></a>`)).join("");C.innerHTML=t}catch(e){console.log(e)}})();let x=null;C.addEventListener("click",(e=>{const t=e.target.textContent;R.categoryName=t,x&&x.classList.remove("active"),x=e.target,x.classList.add("active"),q.classList.remove("active");(async()=>{try{const{data:o}=await R.fetchBooksByCategory(t);console.log(o);const n=o[0].list_name.split(" "),a=n[n.length-1],i=`${n.slice(0,n.length-1).join(" ")} <span class="categories-title-decor">${a}</span>`;A.innerHTML=`<h1 class="categories-title">${i}</h1> <ul class="categories-item">${e=o,e.map((e=>{const{book_image:t,description:o,title:n,author:a,_id:i}=e;return`\n\n<li class="category-list-item">\n<a class="book-link" href="" data-id = "${i}">\n<div class="book-thumb">\n<img class="book-image" src="${t}" alt="${o}" />\n<div class="book-overlay">\n<p class="book-overlay-text">quick view</p>\n</div>\n</div>\n<div class="book-card-content">\n<h2 class="book-title">${n}</h2>\n<p class="book-author">${a}</p>\n</div>\n</a>\n</li>`})).join("")}</ul>`,w()}catch(e){console.log(e)}var e})()})),a("3gLCb"),a("bUb57");i=a("b2XdZ");function B(e){return e.map((e=>{const{book_image:t,description:o,title:n,author:a,_id:i}=e;return`<li class="books-list-item">\n                 <a class="book-link" href="" data-id="${i}">\n                    <div class="book-thumb">\n                      <img class="book-image" src="${t}" alt="${o}" />\n\n                        <div class="book-overlay">\n                       <p class="book-overlay-text">quick view</p>\n                       </div>\n                       </div>                     \n                     <div class="book-card-content">\n                     <h2 class="book-title">${n}</h2>\n                     <p class="book-author">${a}</p>\n                     </div>\n                 </a>                    \n              </li>`})).join("")}const T=document.querySelector(".category-list"),j=document.querySelector(".home-title"),M=new(0,i.SwaggerAPI);let X=0;function U(){document.querySelectorAll(".category-list-button").forEach((e=>{e.addEventListener("click",N)}))}async function N(e){try{const t=e.target.previousElementSibling.previousElementSibling.textContent;M.categoryName=t;const{data:o}=await M.fetchBooksByCategory();j.innerHTML=function(e){const t=e.split(" "),o=t[t.length-1];return`<span class="home-title-decor">${t.slice(0,t.length-1).join(" ")} </span>${o}`}(t),T.classList.add("category-list-click"),T.innerHTML=B(o),function(e){const t=document.querySelectorAll(".aside-item"),o=document.querySelector(".aside-title");t.forEach((t=>{e===t.textContent&&(o.classList.toggle("active"),t.classList.toggle("active"))}))}(t)}catch(e){console.log(e)}}onload=e=>{X=e.target.body.clientWidth},async function(){try{const{data:e}=await M.fetchTopBooks();for(let t=0;t<4;t++){let o=e[t].books,n=0;X<=767&&(n=1),X>=768&&X<1440&&(n=3),X>=1440&&(n=5);const a=`<li class="category-list-item top-list-item">\n        <p class="category-name" data-category-name="${o[0].list_name}">${o[0].list_name}</p>\n        <ul class="books-list">\n          ${B(o.slice(0,n))}\n        </ul>\n       <button class="category-list-button">see more</button>  \n      </li>`;T.insertAdjacentHTML("beforeend",a),U()}}catch(e){console.log(e)}w()}(),a("gyeM6");
//# sourceMappingURL=index.50ac22b3.js.map