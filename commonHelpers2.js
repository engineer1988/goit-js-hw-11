import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as l,S as c}from"./assets/vendor-6b0e5f77.js";const o=document.querySelector(".form"),n=document.querySelector(".gallery"),i=document.querySelector(".loader");i.classList.add("hide");o.addEventListener("submit",e=>{e.preventDefault(),i.classList.remove("hide"),h(e).then(s=>m(s)).catch(s=>console.log(s)),o.reset()});function h(e){const s=e.target.elements.search.value;i.classList.add("loader");const r=`https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function m(e){e.hits.length===0&&l.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const s=e.hits.map(t=>`
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
    </li>`).join("");n.innerHTML="",n.innerHTML=s;const r={captionSelector:"img",captionsData:"alt",captionDelay:250};new c(".gallery a",r).refresh(),i.classList.add("hide")}
//# sourceMappingURL=commonHelpers2.js.map
