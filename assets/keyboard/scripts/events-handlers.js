let keyDownHighlight = function(event) {
    let keyCode = event.code;
    if (!keyCode) return;

    let $key = keyboard.querySelector(`[data-key-code="${keyCode}"`);
    if (!$key) return;

    $key.classList.add("keyboard__key_pressed");
};

let keyUpHighlight = function(event) {
    let keyCode = event.code;
    if (!keyCode) return;

    let $key = keyboard.querySelector(`[data-key-code="${keyCode}"`);
    if (!$key) return;

    $key.classList.remove("keyboard__key_pressed");
};

let keyDownTranslate = function(event) {
    if (event.shiftKey && event.altKey) {
        let localStorageLanguage = localStorage.getItem("language");
        let newLanguage = localStorageLanguage === "ru" ? "en" : "ru";

        keyboardManager.translateKeyboard(newLanguage);
    }
};

let keyDownCapsLock = function(event) {
    if (event.getModifierState("CapsLock")) {
        keyboardManager.toUpperCase();
    } else {
        keyboardManager.toLowerCase();
    }
};

let keyDownTab = function(event, $textField) {
    if (event.code !== "Tab") return;

    event.preventDefault();

    $textField.value += "\t";
}

let mouseDownKey = function(event, $textField) {
    let $key = event.target.closest(".keyboard__key");
    if (!$key) return;

    $key.classList.add("keyboard__key_pressed");

    let keyCode =  $key.dataset.keyCode;
    let keyValue = $key.innerHTML;
    let text = $textField.value;

    switch (keyCode) {
        case "Backspace":
            text = text.split("");
            text.pop();
            text = text.join("");

            break;
        case "Tab":
            text += "\t";

            break;
        case "CapsLock":
            if (localStorage.getItem("isUppercased") === "false") {
                keyboardManager.toUpperCase();
            } else {
                keyboardManager.toLowerCase();
            }

            break;
        case "Enter":
            text += "\n";

            break;
        case "Space":
            text += " ";

            break;
        case "Meta":
            text += "❖";

            break;
        case "ShiftLeft":
            break;
        case "ShiftRight":
            break;
        case "ControlLeft":
            break;
        case "ControlRight":
            break;
        case "AltLeft":
            break;
        case "AltRight":
            break;   
        default:
            text += keyValue;
    }

    $textField.value = text;
};

let mouseUpKey = function(event) {
    let $key = event.target.closest(".keyboard__key");
    if (!$key) return;

    $key.classList.remove("keyboard__key_pressed");
};

let focusOnTextField = function($textField) {
    textArea.focus();
;}


let keyDownHandler = function(event) {
    keyDownHighlight(event);
    keyDownTranslate(event);
    keyDownCapsLock(event);
};

let keyUpHandler = function(event) {
    keyUpHighlight(event);
};


export let eventHandlers = {
    addAllEventListeners: function($keyboard, $textField) {
         document.body.addEventListener("keydown", keyDownHandler);
         document.body.addEventListener("keyup", keyUpHandler);
         document.body.addEventListener("keydown", (event) => {
            focusOnTextField($textField); 
            keyDownTab(event, $textField);  
         });
         document.body.addEventListener("click", () => {
            focusOnTextField($textField); 
         });

         $keyboard.addEventListener("mousedown", (event) => {
            mouseDownKey(event, $textField);
         });
         $keyboard.addEventListener("mouseup", mouseUpKey);
    },
};

