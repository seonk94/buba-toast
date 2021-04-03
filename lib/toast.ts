import './toast.scss';
export default class Toast {
  initContainer () {
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

  createRow () {
    const notificationElement = document.createElement('div');
    notificationElement.id = 'notification';

    return notificationElement;
  }

  createMessage (message: string) {
    const messageElement = document.createElement('span');
    messageElement.innerText = message;
    return messageElement;
  }

  showElement (element: HTMLElement) {
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
      this.hideElement(element);
    }, 3000);
  }

  hideElement (element: HTMLElement) {
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

  stackElement (message: string) {
    const containerElement = this.initContainer();
    const rowElement = this.createRow();
    const messageElement = this.createMessage(message);

    rowElement.append(messageElement);
    containerElement.append(rowElement);
    return rowElement;
  }

  success (message: string) {
    const resultElement = this.stackElement(message);
    resultElement.classList.add('success');
    this.showElement(resultElement);
  }

  info (message: string) {
    const resultElement = this.stackElement(message);
    resultElement.classList.add('info');
    this.showElement(resultElement);
  }

  warn (message: string) {
    const resultElement = this.stackElement(message);
    resultElement.classList.add('warn');
    this.showElement(resultElement);
  }

  danger (message: string) {
    const resultElement = this.stackElement(message);
    resultElement.classList.add('danger');
    this.showElement(resultElement);
  }
}
