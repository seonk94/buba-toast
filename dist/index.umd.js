!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).toast=t()}(this,function(){return function(e,t){return void 0===t&&(t="success"),function(e,t){var n,o=((n=document.createElement("div")).id="notification",n);return function(){var e=document.getElementById("toast-container");if(!e){var t=document.getElementsByTagName("body")[0],n=document.createElement("div");return n.id="toast-container",t.appendChild(n),n}return e}().append(o),o.innerHTML=""+e,o.classList.add(t),function(e){e.style.opacity="0";var t=.05,n=setInterval(function(){t+=.05,e.style.opacity=String(t),t>=1&&(e.style.opacity="1",clearInterval(n))},10);setTimeout(function(){!function(e){var t=1,n=setInterval(function(){t-=.05,e.style.opacity=String(t),t<=0&&(e.remove(),clearInterval(n))},10)}(e)},3e3)}(o),o}(e,t)}});
//# sourceMappingURL=index.umd.js.map
