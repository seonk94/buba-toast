import Toast from "./toast";

document.addEventListener("DOMContentLoaded", () => {
    const toast = new Toast();

    let success = document.getElementById("success");
    let info = document.getElementById("info");
    let warn = document.getElementById("warn");
    let danger = document.getElementById("danger");

    [success, info, warn, danger].forEach(button => button.addEventListener("click", () => {
        toast[button.id](button.id);
    }))
})