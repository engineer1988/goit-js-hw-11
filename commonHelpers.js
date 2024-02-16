import{i as d,S as u}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function m(o){const s=`https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${o.target.elements.search.value}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function h(o){return o.hits.length===0&&d.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),o.hits.map(s=>`
            <li class="gallery-item">
            <a class="gallery-link" href="${s.largeImageURL}">
              <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
            </a>
            <div class="image-text">
             <div class="image-text-item">
              <h2>Likes</h2>
              <span class="span-size">${s.likes}</span>
             </div>
             <div class="image-text-item">
              <h2>Views</h2>
              <span class="span-size">${s.views}</span>
             </div>
             <div class="image-text-item">
              <h2>Comments</h2>
              <span class="span-size">${s.comments}</span>
             </div>
             <div class="image-text-item">
              <h2>Downloads</h2>
              <span class="span-size">${s.downloads}</span>
             </div>
            </div>
          </li>`).join("")}const l=document.querySelector(".form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");n.classList.add("hide");l.addEventListener("submit",o=>{o.preventDefault(),n.classList.remove("hide"),m(o).then(t=>h(t)).then(t=>p(t)).catch(t=>console.log(t)),l.reset()});function p(o){c.innerHTML="",c.innerHTML=o;const t={captionSelector:"img",captionsData:"alt",captionDelay:250};new u(".gallery a",t).refresh(),n.classList.add("hide")}
//# sourceMappingURL=commonHelpers.js.map
