!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");a.disabled=!0,e.addEventListener("click",(function(d){d.preventDefault(),a.disabled=!1,e.disabled=!0,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),a.addEventListener("click",(function(d){clearInterval(t),e.disabled=!1,a.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.faeda0e3.js.map