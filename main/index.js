import {textareaBuilder} from "../assets/textarea/scripts/textarea-builder.js";
import {keyboardManager} from "../assets/keyboard/scripts/keyboard-manager.js";
import {eventHandlers as keyboardEventHandler} from "../assets/keyboard/scripts/events-handlers.js";
import {popupBuilder as greetPopupBuilder}   from "../assets/greet-popup/scripts/greet-popup-builder.js";
import {eventHandler as greetPopupEveentHandler} from  "../assets/greet-popup/scripts/event-handlers.js";

let appendElemToBody = function($elem) {
    document.body.append($elem);
}


let $form = textareaBuilder.getFormWithTextarea();
appendElemToBody($form);
console.log($form);

let $keyboard = keyboardManager.getKeyboardElement();
appendElemToBody($keyboard);
keyboardEventHandler.addAllEventListeners($keyboard, $form.querySelector(".text-form__textarea"), keyboardManager);


let $popup = greetPopupBuilder.getPopup();
appendElemToBody($popup);
greetPopupEveentHandler.addAllEventListeners();