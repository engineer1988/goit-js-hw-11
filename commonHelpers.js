import{i as c,S as m}from"./assets/vendor-6b0e5f77.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function u(o){const t=`https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${o.target.elements.search.value}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}const n=document.querySelector(".gallery"),h=document.querySelector(".loader");function p(o){o.hits.length===0&&c.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const r=o.hits.map(t=>`
            <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
              <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
            </a>
            <div class="image-text">
             <div class="image-text-item">
              <h2>Likes</h2>
              <span class="span-size">${t.likes}</span>
             </div>
             <div class="image-text-item">
              <h2>Views</h2>
              <span class="span-size">${t.views}</span>
             </div>
             <div class="image-text-item">
              <h2>Comments</h2>
              <span class="span-size">${t.comments}</span>
             </div>
             <div class="image-text-item">
              <h2>Downloads</h2>
              <span class="span-size">${t.downloads}</span>
             </div>
            </div>
          </li>`).join("");n.innerHTML="",n.innerHTML=r,h.classList.add("hide")}const l=document.querySelector(".form"),d=document.querySelector(".loader");d.classList.add("hide");l.addEventListener("submit",o=>{o.preventDefault(),d.classList.remove("hide"),u(o).then(r=>p(r)).catch(r=>c.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${r}`})),l.reset()});const g={captionSelector:"img",captionsData:"alt",captionDelay:250};new m(".gallery a",g).refresh();
//# sourceMappingURL=commonHelpers.js.map
