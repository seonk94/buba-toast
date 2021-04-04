import './index.scss';
declare type ToastType = "success" | "warn" | "info" | "danger";
declare const toast: (message: string, type?: ToastType) => HTMLDivElement;
export default toast;
