import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const o=document.querySelector(".btn"),r=document.querySelector(".user-list");o.addEventListener("click",()=>{c().then(e=>i(e)).catch(e=>console.log(e))});function c(){return fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function i(e){console.log(e);const n=e.map(t=>`
          <li>
            <p><b>Name</b>: ${t.name}</p>
            <p><b>Email</b>: ${t.email}</p>
            <p><b>Company</b>: ${t.company.name}</p>
          </li>
      `).join("");r.insertAdjacentHTML("beforeend",n)}
//# sourceMappingURL=commonHelpers3.js.map
