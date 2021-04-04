import './index.scss';
type ToastType = "success" | "warn" | "info" | "danger";
const toast = (message: string, type : ToastType = "success") => {
  
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

  function stackElement (message: string, type: ToastType) {
    const rowElement = createRow();
    const containerElement = initContainer();
    containerElement.append(rowElement);
    rowElement.innerHTML = `${message}`;
    rowElement.classList.add(type);

    showElement(rowElement);
    return rowElement;
  }

  return stackElement(message, type);
};

export default toast;