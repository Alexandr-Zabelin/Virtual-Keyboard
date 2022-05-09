const ENGLISH_KEYBOARD_CONTENT = "QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./".split("");
const RUSSIAN_KEYBOARD_CONTENT = "ЙЦУКЕНГШЩЗХЪ\\ФЫВАПРОЛДЖЭЯЧСМИТЬБЮ/".split("");
const SERVICE_KEYBOARD_CONTENT = ("`1234567890-=".split(""))
                                                 .concat(
                                                    ("⇽ Tab CapsLock Enter ⇧ &#8593; ⇧ Ctrl Win Alt Alt Ctrl &#8592; &#8595; &#8594;").split(" ")
                                                    );


function getUserKey(keyCode, englishKeyValue, russianKeyValue, language="en") {
    let $key = document.createElement("button");

    $key.setAttribute("type", "button");
    $key.dataset.keyCode = keyCode;
    $key.dataset.englishKeyValue = englishKeyValue;
    $key.dataset.russianKeyValue = russianKeyValue;

    if (language === "en") {
        $key.dataset.keyValue = englishKeyValue; 
    } else {
        $key.dataset.keyValue = russianKeyValue; 
    }

    $key.classList.add("keyboard__key");
    $key.classList.add("keyboard__key_for-users");

    $key.innerHTML = $key.dataset.keyValue;

    return $key;
}

function getServiceKey(keyCode, keyValue) {
    let $key = document.createElement("button");

    $key.setAttribute("type", "button");
    $key.dataset.keyCode = keyCode;
    $key.dataset.keyValue = keyValue;

    $key.classList.add("keyboard__key");
    $key.classList.add("keyboard__key_for-services");

    $key.innerHTML = keyValue;

    return $key;
}


                                                
export let keyboardManager = {
    getKeyboardElement: function() { 
        let localStorageLanguage = localStorage.getItem("language");
        let language = localStorageLanguage === null ? "en" : localStorageLanguage;
        let localStorageIsUppercased = localStorage.getItem("isUppercased");
        let isUppercased = localStorageIsUppercased === null ? "true" : localStorageIsUppercased;

        let $keyboard = document.createElement("div");
        let $keyboardWrapper = document.createElement("div");

        $keyboard.classList.add("keyboard");
        $keyboardWrapper.classList.add("keyboard__wrapper");

        {
            let $key = getServiceKey("Backquote", SERVICE_KEYBOARD_CONTENT[0]);  // get `

            $keyboardWrapper.append($key);
        }

        for (let s = 1; s < 11; s++) {   // get digits (1 - 0)
            let $key = getServiceKey("Digit" + SERVICE_KEYBOARD_CONTENT[s], SERVICE_KEYBOARD_CONTENT[s]);

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("Minus", SERVICE_KEYBOARD_CONTENT[11]);  // get -

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("Equal", SERVICE_KEYBOARD_CONTENT[12]);  // get =

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("Backspace", SERVICE_KEYBOARD_CONTENT[13]); // Backspace

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey(SERVICE_KEYBOARD_CONTENT[14], SERVICE_KEYBOARD_CONTENT[14]);  // Tab

            $keyboardWrapper.append($key);
        }

        
        for (let u = 0; u < 10; u++) {   // get first letter row
            let $key = getUserKey("Key" + ENGLISH_KEYBOARD_CONTENT[u], ENGLISH_KEYBOARD_CONTENT[u], RUSSIAN_KEYBOARD_CONTENT[u], language); 

            $keyboardWrapper.append($key);
        }
        
        {
            let $key = getUserKey("BracketLeft", ENGLISH_KEYBOARD_CONTENT[10], RUSSIAN_KEYBOARD_CONTENT[10], language); 

            $keyboardWrapper.append($key);
        }

        {
            let $key = getUserKey("BracketRight", ENGLISH_KEYBOARD_CONTENT[11], RUSSIAN_KEYBOARD_CONTENT[11], language); 

            $keyboardWrapper.append($key);
        }

        {
            let $key = getUserKey("Backslash", ENGLISH_KEYBOARD_CONTENT[12], RUSSIAN_KEYBOARD_CONTENT[12], language); 

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey(SERVICE_KEYBOARD_CONTENT[15], SERVICE_KEYBOARD_CONTENT[15]);   // get CapsLock

            $keyboardWrapper.append($key);
        }

        for (let u = 13; u < 22; u++) {   // get second letter row
            let $key = getUserKey("Key" + ENGLISH_KEYBOARD_CONTENT[u], ENGLISH_KEYBOARD_CONTENT[u], RUSSIAN_KEYBOARD_CONTENT[u], language); 

            $keyboardWrapper.append($key);
        }

        {
            let $key = getUserKey("Semicolon", ENGLISH_KEYBOARD_CONTENT[22], RUSSIAN_KEYBOARD_CONTENT[22], language); 

            $keyboardWrapper.append($key);
        }

        {
            let $key = getUserKey("Quote", ENGLISH_KEYBOARD_CONTENT[23], RUSSIAN_KEYBOARD_CONTENT[23], language); 

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey(SERVICE_KEYBOARD_CONTENT[16], SERVICE_KEYBOARD_CONTENT[16]);   // get Enter

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("ShiftLeft", SERVICE_KEYBOARD_CONTENT[17]);   // get Left Shift

            $keyboardWrapper.append($key);
        }

        for (let u = 24; u < 31; u++) {  // get the third letter row
            let $key = getUserKey("Key" + ENGLISH_KEYBOARD_CONTENT[u], ENGLISH_KEYBOARD_CONTENT[u], RUSSIAN_KEYBOARD_CONTENT[u], language); 

            $keyboardWrapper.append($key);
        }

        {
            let $key = getUserKey("Comma", ENGLISH_KEYBOARD_CONTENT[31], RUSSIAN_KEYBOARD_CONTENT[31], language);  // get Comma

            $keyboardWrapper.append($key);
        }

        {
            let $key = getUserKey("Period", ENGLISH_KEYBOARD_CONTENT[32], RUSSIAN_KEYBOARD_CONTENT[32], language);  // get Period

            $keyboardWrapper.append($key);
        }

        {
            let $key = getUserKey("Slash", ENGLISH_KEYBOARD_CONTENT[33], RUSSIAN_KEYBOARD_CONTENT[33], language);  // get Slash

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("ArrowUp", SERVICE_KEYBOARD_CONTENT[18]);   // get ArrowUp

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("ShiftRight", SERVICE_KEYBOARD_CONTENT[19]);   // get Right Shift

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("ControlLeft", SERVICE_KEYBOARD_CONTENT[20]);   // get Left Ctrl

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("Meta", SERVICE_KEYBOARD_CONTENT[21]);   // get Meta or Win 

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("AltLeft", SERVICE_KEYBOARD_CONTENT[22]);   // get AltLeft

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("Space", "");   // get Space

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("AltRight", SERVICE_KEYBOARD_CONTENT[23]);   // get AltRight

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("ControlRight", SERVICE_KEYBOARD_CONTENT[24]);   // get ControlRight

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("ArrowLeft", SERVICE_KEYBOARD_CONTENT[25]);   // get ArrowLeft

            $keyboardWrapper.append($key);
        }
        
        {
            let $key = getServiceKey("ArrowDown", SERVICE_KEYBOARD_CONTENT[26]);   // get ArrowDown

            $keyboardWrapper.append($key);
        }

        {
            let $key = getServiceKey("ArrowRight", SERVICE_KEYBOARD_CONTENT[27]);   // get ArrowRight

            $keyboardWrapper.append($key);
        }

        $keyboard.append($keyboardWrapper);
        this.$keyboard = $keyboard;

        if (isUppercased === "false") {
            this.toLowerCase(true);
        }

        localStorage.setItem("language", language);
        localStorage.setItem("isUppercased", isUppercased);


        return this.$keyboard;
    },

    translateKeyboard: function(language = "en") {
        if (localStorage.getItem("language") === language) return;

        let keysToTranslate = this.$keyboard.querySelectorAll(".keyboard__key_for-users");

        if (language === "en") {
            keysToTranslate.forEach($key => {
                $key.dataset.keyValue = $key.dataset.englishKeyValue;

                $key.innerHTML = $key.dataset.keyValue;

                localStorage.setItem("language", "en");
            });
        } else {
            keysToTranslate.forEach($key => {
                $key.dataset.keyValue = $key.dataset.russianKeyValue;

                $key.innerHTML = $key.dataset.keyValue;

                localStorage.setItem("language", "ru");
            });
        }
    },

    toUpperCase: function(brute=false) {
        if (localStorage.getItem("isUppercased") === "true" && !brute) return;

        let keysToUppercase = this.$keyboard.querySelectorAll(".keyboard__key_for-users");

        keysToUppercase.forEach($key => {
            $key.dataset.keyValue = $key.dataset.keyValue.toUpperCase();
            $key.dataset.russianKeyValue = $key.dataset.russianKeyValue.toUpperCase();
            $key.dataset.englishKeyValue = $key.dataset.englishKeyValue.toUpperCase();

            $key.innerHTML = $key.dataset.keyValue;

            localStorage.setItem("isUppercased", "true");
        });
    },

    toLowerCase: function(brute=false) {
        if (localStorage.getItem("isUppercased") === "false" && !brute) return;

        let keysToLowercase = this.$keyboard.querySelectorAll(".keyboard__key_for-users");

        keysToLowercase.forEach($key => {
            $key.dataset.keyValue = $key.dataset.keyValue.toLowerCase();
            $key.dataset.russianKeyValue = $key.dataset.russianKeyValue.toLowerCase();
            $key.dataset.englishKeyValue = $key.dataset.englishKeyValue.toLowerCase();

            $key.innerHTML = $key.dataset.keyValue;

            localStorage.setItem("isUppercased", "false");
        });
    },
}

