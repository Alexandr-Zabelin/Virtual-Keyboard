import {loadScreenBuilder} from "../assets/load-screen/scripts/load-screen-builder.js";
import {textareaBuilder} from "../assets/textarea/scripts/textarea-builder.js";
import {keyboardManager} from "../assets/keyboard/scripts/keyboard-manager.js";
import {eventHandlers as keyboardEventHandler} from "../assets/keyboard/scripts/events-handlers.js";
import {popupBuilder as greetPopupBuilder}   from "../assets/greet-popup/scripts/greet-popup-builder.js";
import {eventHandler as greetPopupEveentHandler} from  "../assets/greet-popup/scripts/event-handlers.js";

let appendElemToWrapper = function($elem) {
    $wrapper.append($elem);
}


let $wrapper = document.createElement("div");
$wrapper.classList.add("content");
document.body.append($wrapper);

let $loadScreen = loadScreenBuilder.getLoadScreenElement();
appendElemToWrapper($loadScreen);
window.addEventListener("load", () =>
{
    setTimeout(() => {
        $loadScreen.classList.add("display_none");
    }, 3 * 1000);
});

let $popup = greetPopupBuilder.getPopup();
appendElemToWrapper($popup);
greetPopupEveentHandler.addAllEventListeners();

let $form = textareaBuilder.getFormWithTextarea();
$form.classList.add("content__form");
appendElemToWrapper($form);

let $keyboard = keyboardManager.getKeyboardElement();
$keyboard.classList.add("content__keyboard");
appendElemToWrapper($keyboard);
keyboardEventHandler.addAllEventListeners($keyboard, $form.querySelector(".text-form__textarea"), keyboardManager);


document.body.append($wrapper);