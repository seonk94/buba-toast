import './toast.scss';
export default class Toast {
    initContainer(): HTMLElement;
    createRow(): HTMLDivElement;
    createMessage(message: string): HTMLSpanElement;
    showElement(element: HTMLElement): void;
    hideElement(element: HTMLElement): void;
    stackElement(message: string): HTMLDivElement;
    success(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    danger(message: string): void;
}
