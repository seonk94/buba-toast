import "./index.css";
import toast, { ToastType } from "../lib/index";

const buttons  = document.getElementsByClassName("toast-button") ;


Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    toast(button.innerHTML, (button as HTMLButtonElement).name as ToastType)
  })
})

