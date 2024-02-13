(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const u="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='%23fff'%20class='bi%20bi-robot'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M6%2012.5a.5.5%200%200%201%20.5-.5h3a.5.5%200%200%201%200%201h-3a.5.5%200%200%201-.5-.5ZM3%208.062C3%206.76%204.235%205.765%205.53%205.886a26.58%2026.58%200%200%200%204.94%200C11.765%205.765%2013%206.76%2013%208.062v1.157a.933.933%200%200%201-.765.935c-.845.147-2.34.346-4.235.346-1.895%200-3.39-.2-4.235-.346A.933.933%200%200%201%203%209.219V8.062Zm4.542-.827a.25.25%200%200%200-.217.068l-.92.9a24.767%2024.767%200%200%201-1.871-.183.25.25%200%200%200-.068.495c.55.076%201.232.149%202.02.193a.25.25%200%200%200%20.189-.071l.754-.736.847%201.71a.25.25%200%200%200%20.404.062l.932-.97a25.286%2025.286%200%200%200%201.922-.188.25.25%200%200%200-.068-.495c-.538.074-1.207.145-1.98.189a.25.25%200%200%200-.166.076l-.754.785-.842-1.7a.25.25%200%200%200-.182-.135Z'/%3e%3cpath%20d='M8.5%201.866a1%201%200%201%200-1%200V3h-2A4.5%204.5%200%200%200%201%207.5V8a1%201%200%200%200-1%201v2a1%201%200%200%200%201%201v1a2%202%200%200%200%202%202h10a2%202%200%200%200%202-2v-1a1%201%200%200%200%201-1V9a1%201%200%200%200-1-1v-.5A4.5%204.5%200%200%200%2010.5%203h-2V1.866ZM14%207.5V13a1%201%200%200%201-1%201H3a1%201%200%200%201-1-1V7.5A3.5%203.5%200%200%201%205.5%204h5A3.5%203.5%200%200%201%2014%207.5Z'/%3e%3c/svg%3e",f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='%23fff'%20class='bi%20bi-person'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M8%208a3%203%200%201%200%200-6%203%203%200%200%200%200%206Zm2-3a2%202%200%201%201-4%200%202%202%200%200%201%204%200Zm4%208c0%201-1%201-1%201H3s-1%200-1-1%201-4%206-4%206%203%206%204Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516%2010.68%2010.289%2010%208%2010c-2.29%200-3.516.68-4.168%201.332-.678.678-.83%201.418-.832%201.664h10Z'/%3e%3c/svg%3e",l=document.querySelector("form"),i=document.querySelector("#chat_container");let d;function m(t){t.textContent="",d=setInterval(()=>{t.textContent+=".",t.textContent==="...."&&(t.textContent="")},300)}function h(t,r){let a=0,o=setInterval(()=>{a<r.length?(t.innerHTML+=r.charAt(a),a++):clearInterval(o)},20)}function p(){const t=Date.now(),a=Math.random().toString(16);return`id-${t}-${a}`}function c(t,r,a){return`
        <div class="wrapper ${t&&"ai"}">
            <div class="chat">
                <div class="profile">
                    <img 
                      src=${t?u:f} 
                      alt="${t?"bot":"user"}" 
                    />
                </div>
                <div class="message" id=${a}>${r}</div>
            </div>
        </div>
    `}const g=async t=>{t.preventDefault();const r=document.getElementById("msg").value.trim();i.innerHTML+=c(!1,r),l.reset();const a=p();i.innerHTML+=c(!0," ",a),i.scrollTop=i.scrollHeight;const o=document.getElementById(a);m(o);const e=await fetch("https://syntax-sync.vercel.app/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:r})});if(clearInterval(d),o.innerHTML=" ",e.ok){const s=(await e.json()).bot.trim();h(o,s)}else{const n=await e.text();o.innerHTML="Something went wrong",alert(n)}};l.addEventListener("submit",g);
