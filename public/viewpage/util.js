import { modalInfobox } from "./elements.js";

export function info(title, body, closeModal) {
    if (closeModal) closeModal.hide();

    modalInfobox.title.innerHTML = title;
    modalInfobox.body.innerHTML = body;
    modalInfobox.modal.show();
}
export function disableButton(button) {

    button.disable = true;
    const originalLable = button.innerHTML;
    button.innerHTML = 'wait...';
    return originalLable;
}
export function enableButton(button, label) {
    if (label) button.innerHTML = label;
    button.disable = false;
}