/* empty css                      */import{i as d,S as m}from"./assets/vendor-6b0e5f77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const l=document.querySelector(".form"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");a.classList.add("hide");l.addEventListener("submit",r=>{r.preventDefault(),a.classList.remove("hide"),u(r).then(t=>h(t)).catch(t=>console.log(t)),l.reset()});function u(r){const t=r.target.elements.search.value;a.classList.add("loader");const i=`https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function h(r){r.hits.length===0&&d.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const t=r.hits.map(e=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="image-text">
       <div class="image-text-item"> 
        <h2>Likes</h2>
        <span class="span-size">${e.likes}</span>
       </div> 
       <div class="image-text-item"> 
        <h2>Views</h2>
        <span class="span-size">${e.views}</span>
       </div> 
       <div class="image-text-item"> 
        <h2>Comments</h2>
        <span class="span-size">${e.comments}</span>
       </div> 
       <div class="image-text-item"> 
        <h2>Downloads</h2>
        <span class="span-size">${e.downloads}</span>
       </div> 
      </div>
    </li>`).join("");c.innerHTML="",c.innerHTML=t;const i={captionSelector:"img",captionsData:"alt",captionDelay:250};new m(".gallery a",i).refresh(),a.classList.add("hide")}
//# sourceMappingURL=commonHelpers2.js.map
