export default class{initContainer(){const t=document.getElementById("toast-container");if(!t){const t=document.getElementsByTagName("body")[0],e=document.createElement("div");return e.id="toast-container",t.appendChild(e),e}return t}createRow(){const t=document.createElement("div");return t.id="notification",t}createMessage(t){const e=document.createElement("span");return e.innerText=t,e}showElement(t){t.style.opacity="0";let e=.05;const n=setInterval(()=>{e+=.05,t.style.opacity=String(e),e>=1&&(t.style.opacity="1",clearInterval(n))},10);setTimeout(()=>{this.hideElement(t)},3e3)}hideElement(t){let e=1;const n=setInterval(()=>{e-=.05,t.style.opacity=String(e),e<=0&&(t.remove(),clearInterval(n))},10)}stackElement(t){const e=this.initContainer(),n=this.createRow(),s=this.createMessage(t);return n.append(s),e.append(n),n}success(t){const e=this.stackElement(t);e.classList.add("success"),this.showElement(e)}info(t){const e=this.stackElement(t);e.classList.add("info"),this.showElement(e)}warn(t){const e=this.stackElement(t);e.classList.add("warn"),this.showElement(e)}danger(t){const e=this.stackElement(t);e.classList.add("danger"),this.showElement(e)}}
//# sourceMappingURL=main.modern.js.map
