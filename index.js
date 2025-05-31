import{a as u,S as f,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="50613672-fd7de6baad1a69b0c755a9f02",m="https://pixabay.com/api/";async function y(s){const r={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(m,{params:r})).data}let c;function h(s){const r=document.querySelector(".gallery"),n=s.map(o=>`
      <div class="photo-card">
        <a href="${o.largeImageURL}">
          <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span>${o.likes}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span>${o.views}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span>${o.comments}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span>${o.downloads}</span>
          </div>
        </div>
      </div>
    `).join("");r.innerHTML=n,c?c.refresh():c=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){const s=document.querySelector(".gallery");s.innerHTML=""}function v(){document.querySelector(".loader").classList.remove("is-hidden")}function l(){document.querySelector(".loader").classList.add("is-hidden")}const d=document.querySelector(".form"),b=d.querySelector('input[name="search-text"]');d.addEventListener("submit",L);async function L(s){s.preventDefault();const r=b.value.trim();if(g(),!r){a.warning({title:"Warning",message:"Please enter a search term",position:"topRight"});return}try{v();const n=await y(r);if(l(),n.hits.length===0){a.info({title:"Info",message:"No images found. Please try again.",position:"topRight"});return}h(n.hits)}catch{l(),a.error({title:"Error",message:"Error fetching images. Please try again.",position:"topRight"})}}
//# sourceMappingURL=index.js.map
