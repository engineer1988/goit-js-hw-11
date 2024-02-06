/* empty css                      */import{S as i}from"./assets/vendor-b41a7778.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.querySelector(".form");const s=document.querySelector(".button"),a=document.querySelector(".gallery");s.addEventListener("click",()=>{u().then(r=>f(r)).catch(r=>console.log(r))});function u(){return fetch("https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=dog_type=photo").then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(r){const o=r.map(n=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${n.largeImageURL}">
        <img class="gallery-image" src="${n.previewURL}" alt="${n.pageURL}" />
      </a>
    </li>
      `).join("");a.insertAdjacentHTML("beforeend",o)}const d={captionsData:"alt",captionDelay:250};new i(".gallery a",d);
//# sourceMappingURL=commonHelpers2.js.map
