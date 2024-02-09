import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as l,S as c}from"./assets/vendor-16e51dcd.js";const i=document.querySelector(".form"),n=document.querySelector(".button"),s=document.querySelector(".gallery"),r=document.querySelector(".loader");r.classList.add("hide");n.addEventListener("click",()=>{r.classList.remove("hide"),h().then(e=>g(e)).catch(e=>console.log(e)),i.reset()});function h(){const e=i.search.value;r.classList.add("loader");const o=`https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function g(e){e.hits.length===0&&l.error({backgroundColor:"rgb(239, 64, 64)",titleSize:"16px",titleColor:"rgb(250, 250, 251)",messageColor:"rgb(250, 250, 251)",title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query."});const o=e.hits.map(a=>`
      <li class="gallery-item">
      <a class="gallery-link" href=${a.largeImageURL}>
        <img class="gallery-image" src=${a.webformatURL} alt=${a.tags} />
      </a>
    </li>
      `).join("");s.innerHTML="",s.innerHTML=o;const t={captionsData:"alt",captionDelay:250};new c(".gallery a",t).refresh(),r.classList.add("hide")}
//# sourceMappingURL=commonHelpers2.js.map
