!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).bubaToast=t()}(this,function(){return function(){function e(){}var t=e.prototype;return t.initContainer=function(){var e=document.getElementById("toast-container");if(!e){var t=document.getElementsByTagName("body")[0],n=document.createElement("div");return n.id="toast-container",t.appendChild(n),n}return e},t.createRow=function(){var e=document.createElement("div");return e.id="notification",e},t.createMessage=function(e){var t=document.createElement("span");return t.innerText=e,t},t.showElement=function(e){var t=this;e.style.opacity="0";var n=.05,i=setInterval(function(){n+=.05,e.style.opacity=String(n),n>=1&&(e.style.opacity="1",clearInterval(i))},10);setTimeout(function(){t.hideElement(e)},3e3)},t.hideElement=function(e){var t=1,n=setInterval(function(){t-=.05,e.style.opacity=String(t),t<=0&&(e.remove(),clearInterval(n))},10)},t.stackElement=function(e){var t=this.initContainer(),n=this.createRow(),i=this.createMessage(e);return n.append(i),t.append(n),n},t.success=function(e){var t=this.stackElement(e);t.classList.add("success"),this.showElement(t)},t.info=function(e){var t=this.stackElement(e);t.classList.add("info"),this.showElement(t)},t.warn=function(e){var t=this.stackElement(e);t.classList.add("warn"),this.showElement(t)},t.danger=function(e){var t=this.stackElement(e);t.classList.add("danger"),this.showElement(t)},e}()});
//# sourceMappingURL=main.umd.js.map