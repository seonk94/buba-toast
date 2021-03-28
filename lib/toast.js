export default class Toast {
    constructor() {

    }

    initContainer() {
        const toastContainer = document.getElementById("toast-container");
        if (!toastContainer) {
            const body = document.getElementsByTagName("body")[0];

            const container = document.createElement("div");
            container.id = "toast-container";
            container.style.position = "fixed";
            container.style.zIndex = "999";
            container.style.top = "80px";
            container.style.bottom = "auto";
            container.style.left = "auto";
            container.style.right = "24px";
            container.style.width = "200px";

            body.appendChild(container);
            return container;
        }
        return toastContainer;
    }

    createRow() {
        const notificationElement = document.createElement("div");

        notificationElement.style.padding = "16px";
        notificationElement.style.marginBottom = "8px";
        notificationElement.style.borderRadius = "6px";
        notificationElement.style.display = "flex";
        notificationElement.style.alignItems = "center";
        notificationElement.style.background = "#e5e5e5";
        notificationElement.style.color = "#000";
    
        return notificationElement;
    }

    createMessage(message) {
        const messageElement = document.createElement("span");
        messageElement.innerText = message;
        return messageElement;
    }

    showElement(element) {
        element.style.opacity = "0";
        let opacity = 0.05;
        const animation = setInterval(() => {
            opacity += 0.05;
            element.style.opacity = String(opacity);

            if (opacity >= 1) {
                element.style.opacity = "1";
                clearInterval(animation);
            }
        }, 10);

        setTimeout(() => {
            this.hideElement(element);
        }, 3000)
    }

    hideElement(element) {
        let opactiy = 1;
        const animation = setInterval(() => {
            opactiy -= 0.05;
            element.style.opacity = String(opactiy);

            if (opactiy <= 0) {
                element.remove();
                clearInterval(animation);
            }
        }, 10);
    }

    stackElement(message) {
        const containerElement = this.initContainer();
        const rowElement = this.createRow();
        const messageElement = this.createMessage(message); 

        rowElement.append(messageElement);
        containerElement.append(rowElement);
        return rowElement;
    }

    success(message) {
        const resultElement = this.stackElement(message);
        resultElement.style.background = "#68B3C8"
        this.showElement(resultElement);
    }
    info(message) {
        const resultElement = this.stackElement(message);
        resultElement.style.background = "#7AC29A"
        this.showElement(resultElement);
    }
    warn(message) {
        const resultElement = this.stackElement(message);
        resultElement.style.background = "#F3BB45"
        this.showElement(resultElement);
    }
    danger(message) {
        const resultElement = this.stackElement(message);
        resultElement.style.background = "#CC2127"
        this.showElement(resultElement);
    }
}