let keyDownHighlight = function(event, $keyboard) {
    let keyCode = event.code;
    if (!keyCode) return;

    let $key = $keyboard.querySelector(`[data-key-code="${keyCode}"`);
    if (!$key) return;

    $key.classList.add("keyboard__key_pressed");
};

let keyUpHighlight = function(event, $keyboard) {
    let keyCode = event.code;
    if (!keyCode) return;

    let $key = $keyboard.querySelector(`[data-key-code="${keyCode}"`);
    if (!$key) return;

    $key.classList.remove("keyboard__key_pressed");
};

let keyDownTranslate = function(event, keyboardManager) {
    if (event.shiftKey && event.altKey) {
        let localStorageLanguage = localStorage.getItem("language");
        let newLanguage = localStorageLanguage === "ru" ? "en" : "ru";

        keyboardManager.translateKeyboard(newLanguage);
    }
};

let keyDownCapsLock = function(event, keyboardManager) {
    if (event.getModifierState("CapsLock")) {
        keyboardManager.toUpperCase();
    } else {
        keyboardManager.toLowerCase();
    }
};

let keyDownTab = function(event, $textField) {
    if (event.code !== "Tab") return;

    event.preventDefault();

    let ind = $textField.selectionStart;
    let firstPart = $textField.value.slice(0, ind) + "\t";
    let secondPart = $textField.value.slice(ind);

    $textField.value = firstPart + secondPart;
    $textField.selectionStart = ind + "\t".length;
    $textField.selectionEnd = $textField.selectionStart;
}

let mouseDownKey = function(event, $textField, keyboardManager) {
    let $key = event.target.closest(".keyboard__key");
    if (!$key) return;

    $key.classList.add("keyboard__key_pressed");

    let keyCode =  $key.dataset.keyCode;
    let keyValue = $key.innerHTML;
    let text = $textField.value;

    switch (keyCode) {
        case "Backspace":
            {
                let ind = $textField.selectionStart;
                let firstPart = $textField.value.slice(0, ind - 1);
                let secondPart = $textField.value.slice(ind);

                $textField.value = firstPart + secondPart;
                $textField.selectionStart = ind - 1;
                $textField.selectionEnd = $textField.selectionStart;

                break;
            }
        case "Tab":
            {
                let ind = $textField.selectionStart;
                let firstPart = $textField.value.slice(0, ind) + "\t";
                let secondPart = $textField.value.slice(ind);

                $textField.value = firstPart + secondPart;
                $textField.selectionStart = ind + "\t".length;
                $textField.selectionEnd = $textField.selectionStart;

                break;
            }
        case "CapsLock":
            if (localStorage.getItem("isUppercased") === "false") {
                keyboardManager.toUpperCase();
            } else {
                keyboardManager.toLowerCase();
            }

            break;
        case "Enter":
            {
                let ind = $textField.selectionStart;
                let firstPart = $textField.value.slice(0, ind) + "\n";
                let secondPart = $textField.value.slice(ind);

                $textField.value = firstPart + secondPart;
                $textField.selectionStart = ind + "\n".length;
                $textField.selectionEnd = $textField.selectionStart;

                break;
            }
        case "Space":
            {
                let ind = $textField.selectionStart;
                let firstPart = $textField.value.slice(0, ind) + " ";
                let secondPart = $textField.value.slice(ind);

                $textField.value = firstPart + secondPart;
                $textField.selectionStart = ind + " ".length;
                $textField.selectionEnd = $textField.selectionStart;

                break;
            }
        case "Meta":
            {
                let ind = $textField.selectionStart;
                let firstPart = $textField.value.slice(0, ind) + "❖";
                let secondPart = $textField.value.slice(ind);

                $textField.value = firstPart + secondPart;
                $textField.selectionStart = ind + "❖".length;
                $textField.selectionEnd = $textField.selectionStart;

                break;
            }
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
            {
                let ind = $textField.selectionStart;
                let firstPart = $textField.value.slice(0, ind) + keyValue;
                let secondPart = $textField.value.slice(ind);

                $textField.value = firstPart + secondPart;
                $textField.selectionStart = ind + keyValue.length;
                $textField.selectionEnd = $textField.selectionStart;
            }
    }
};

let mouseUpKey = function(event) {
    let $key = event.target.closest(".keyboard__key");
    if (!$key) return;

    $key.classList.remove("keyboard__key_pressed");
};

let focusOnTextField = function($textField) {
    $textField.focus();
;}




export let eventHandlers = {
    addAllEventListeners: function($keyboard, $textField, keyboardManager) {
         document.body.addEventListener("keydown", (event) => {
            keyDownTranslate(event, keyboardManager);
            keyDownCapsLock(event, keyboardManager);
         });
         document.body.addEventListener("keyup", (event) => {
             keyUpHighlight(event, $keyboard);
         });
         document.body.addEventListener("keydown", (event) => {
            focusOnTextField($textField); 
            keyDownTab(event, $textField); 
            keyDownHighlight(event, $keyboard); 
         });
         document.body.addEventListener("click", () => {
            focusOnTextField($textField); 
         });

         $keyboard.addEventListener("mousedown", (event) => {
            mouseDownKey(event, $textField, keyboardManager);
         });
         $keyboard.addEventListener("mouseup", mouseUpKey);
    },
};

