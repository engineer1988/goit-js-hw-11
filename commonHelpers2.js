import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{S as l}from"./assets/vendor-ec4d60e6.js";const c=document.querySelector(".form"),n=document.querySelector(".button"),s=document.querySelector(".gallery"),r=document.querySelector(".loader");r.classList.add("hide");n.addEventListener("click",()=>{r.classList.remove("hide"),i().then(e=>h(e)).catch(e=>console.log(e)),c.reset()});function i(){const e=c.search.value;r.classList.add("loader");const o=`https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function h(e){const o=e.hits.map(a=>`
      <li class="gallery-item">
      <a class="gallery-link" href=${a.largeImageURL}>
        <img class="gallery-image" src=${a.webformatURL} alt=${a.tags} />
      </a>
    </li>
      `).join("");s.innerHTML="",s.innerHTML=o;const t={captionsData:"alt",captionDelay:250};new l(".gallery a",t).refresh(),r.classList.add("hide")}
//# sourceMappingURL=commonHelpers2.js.map
