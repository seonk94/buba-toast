import "./index.css";
import toast, { ToastType } from "../lib/index";

const defaultButtons = document.getElementsByClassName("default-toast");

Array.from(defaultButtons).forEach((button) => {
  button.addEventListener("click", () => {
    const toastType = (button as HTMLButtonElement).name as ToastType;
    toast(button.innerHTML, toastType)
  });
});

const iconButtons = document.getElementsByClassName("icon-toast");

Array.from(iconButtons).forEach((button) => {
  button.addEventListener("click", () => {
    const toastType = (button as HTMLButtonElement).name as ToastType;
    toast(button.innerHTML, toastType, { icon: toastType });
  });
});