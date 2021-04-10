import "./index.scss";
export type ToastType = "success" | "warn" | "info" | "danger";
interface Option {
  icon: "success" | "warn" | "info" | "danger"
}

function initContainer () {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    const body = document.getElementsByTagName('body')[0];

    const container = document.createElement('div');
    container.id = 'toast-container';

    body.appendChild(container);
    return container;
  }
  return toastContainer;
}

const toast = (message: string, type : ToastType = "success", option?: Option) => {

  function createRow () {
    const notificationElement = document.createElement('div');
    notificationElement.id = 'notification';

    return notificationElement;
  }

  function showElement (element: HTMLElement) {
    element.style.opacity = '0';
    let opacity = 0.05;
    const animation = setInterval(() => {
      opacity += 0.05;
      element.style.opacity = String(opacity);

      if (opacity >= 1) {
        element.style.opacity = '1';
        clearInterval(animation);
      }
    }, 10);

    setTimeout(() => {
      hideElement(element);
    }, 3000);
  }

  function hideElement (element: HTMLElement) {
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

  const rowElement = createRow();
  const containerElement = initContainer();
  containerElement.append(rowElement);
  rowElement.innerHTML = `${message}`;
  rowElement.classList.add(type);

  if (option?.icon) {
    const iconElement = document.createElement("div");
    iconElement.classList.add("toast-icon");
    rowElement.prepend(iconElement);
  }

  showElement(rowElement);

  return rowElement;
};

export default toast;