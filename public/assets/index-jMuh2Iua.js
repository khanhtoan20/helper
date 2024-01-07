(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function g(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(e){if(e.ep)return;e.ep=!0;const c=g(e);fetch(e.href,c)}})();const s=t=>{let n=t;return[()=>n,e=>n=e]},b="data:image/svg+xml,%3csvg%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eGitHub%3c/title%3e%3cpath%20d='M12%20.297c-6.63%200-12%205.373-12%2012%200%205.303%203.438%209.8%208.205%2011.385.6.113.82-.258.82-.577%200-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422%2018.07%203.633%2017.7%203.633%2017.7c-1.087-.744.084-.729.084-.729%201.205.084%201.838%201.236%201.838%201.236%201.07%201.835%202.809%201.305%203.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93%200-1.31.465-2.38%201.235-3.22-.135-.303-.54-1.523.105-3.176%200%200%201.005-.322%203.3%201.23.96-.267%201.98-.399%203-.405%201.02.006%202.04.138%203%20.405%202.28-1.552%203.285-1.23%203.285-1.23.645%201.653.24%202.873.12%203.176.765.84%201.23%201.91%201.23%203.22%200%204.61-2.805%205.625-5.475%205.92.42.36.81%201.096.81%202.22%200%201.606-.015%202.896-.015%203.286%200%20.315.21.69.825.57C20.565%2022.092%2024%2017.592%2024%2012.297c0-6.627-5.373-12-12-12'/%3e%3c/svg%3e";document.head.innerHTML+=`
    <link rel="icon" type="image/svg+xml" href="${b}" />
`;document.querySelector("#app").innerHTML=`
<div class="setting">
        <div class="checkbox-wrapper-35">
            <input value="private" name="switch" id="live" type="checkbox" class="switch">
            <label for="live">
                <span class="switch-x-text">live_mode:</span>
                <span class="switch-x-toggletext">
                    <span class="switch-x-unchecked"><span class="switch-x-hiddenlabel">Unchecked: </span>Off</span>
                    <span class="switch-x-checked"><span class="switch-x-hiddenlabel">Checked: </span>On</span>
                </span>
            </label>
        </div>
        <div class="checkbox-wrapper-35">
            <input value="private" name="switch" id="dark" type="checkbox" class="switch">
            <label for="dark">
                <span class="switch-x-text">dark_mode:</span>
                <span class="switch-x-toggletext">
                    <span class="switch-x-unchecked"><span class="switch-x-hiddenlabel">Unchecked: </span>Off</span>
                    <span class="switch-x-checked"><span class="switch-x-hiddenlabel">Checked: </span>On</span>
                </span>
            </label>
        </div>
    </div>
    <div class="wrapper">
        <div class="interface">
            <div class="function shadowed">
                <label class="func-name" for="inputJson">parseJSON</label>
                <textarea class="func-input" id="inputJson" rows="5" placeholder='{ "key": "value" }'></textarea>
                <button class="func-action" id="actionJson"></button>
                <textarea class="func-output" id="formattedJsonOutput" rows="5" readonly></textarea>
            </div>
            <div class="function shadowed">
                <label class="func-name" for="inputUrl">decodeURL</label>
                <textarea class="func-input" id="inputUrl" rows="1" placeholder="https://example.com"></textarea>
                <button class="func-action" id="actionUrl"></button>
                <textarea class="func-output" id="decodedUrlOutput" rows="1" readonly></textarea>
            </div>
            <div class="function shadowed">
                <label class="func-name" for="inputString">string.length</label>
                <textarea class="func-input" id="inputString" rows="1" placeholder="Enter your string"></textarea>
                <button class="func-action" id="actionString"></button>
                <textarea class="func-output" id="stringLengthOutput" rows="1" readonly></textarea>
            </div>
        </div>
    </div>
`;const[o,S]=s(document.getElementById("live")),[w,I]=s(document.getElementById("dark")),[h,U]=s(document.body),[i,J]=s(document.getElementById("inputUrl")),[f,B]=s(document.getElementById("decodedUrlOutput")),[L,M]=s(document.getElementById("actionUrl")),[d,N]=s(document.getElementById("inputString")),[k,A]=s(document.getElementById("stringLengthOutput")),[O,P]=s(document.getElementById("actionString")),[l,C]=s(document.getElementById("inputJson")),[v,R]=s(document.getElementById("formattedJsonOutput")),[E,V]=s(document.getElementById("actionJson")),u=function(){const t=i().value;try{const n=decodeURIComponent(t);f().value=n}catch{f().value="Error decoding URL"}},p=function(){const n=d().value.length;k().value=n},m=function(){const t=l().value;try{const n=JSON.stringify(JSON.parse(t),null,4);v().value=n}catch{v().value="Error formatting JSON"}},y=function(t){t?(i().addEventListener("input",u),d().addEventListener("input",p),l().addEventListener("input",m),localStorage.setItem("live-mode",o().checked)):(i().removeEventListener("input",u),d().removeEventListener("input",p),l().removeEventListener("input",m),localStorage.setItem("live-mode",o().checked))},x=function(t){t?(document.body.classList.add("dark-mode"),localStorage.setItem("dark-mode",!0)):(document.body.classList.remove("dark-mode"),localStorage.setItem("dark-mode",!1))};o().addEventListener("change",({target:t})=>{y(t.checked)});w().addEventListener("change",({target:t})=>{x(t.checked)});L().addEventListener("click",u);E().addEventListener("click",m);O().addEventListener("click",p);document.addEventListener("DOMContentLoaded",t=>{console.warn("collecting... ",localStorage),localStorage.getItem("dark-mode")==="true"&&(h().classList.add("dark-mode"),w().checked=!0,x(!0)),localStorage.getItem("live-mode")==="true"&&(o().checked=!0,y(!0)),new URLSearchParams(window.location.search).get("env")==="dev"&&h().classList.add("lord-mode")});
