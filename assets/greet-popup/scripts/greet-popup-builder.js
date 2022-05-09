export let popupBuilder = {
    getPopup: function() {
        let $popup = document.createElement("div");

        $popup.classList.add("greet-popup");
        $popup.innerHTML = `<div class="greet-popup__window">
        <div class="greet-popup__text text">
            <h2 class="text__heading">Welcome to my Virtual Keyboard web page!</h2>
            <p class="text__paragraph">Keyboard is intended for standart QWERTY layout and Windows OS family. If you use another keyboard layout or another OS, please write about your expirience of using my keyboard, I'd really appriciate it.</p>
            <p class="text__paragraph">There are two available languages for the keyboard: English and Russian. To change the language of layout please press together <kbd>Left Shift</kbd> and <kdb>Left Alt</kdb>.</p>
            <p>Caps Lock will synchronize with your keyboard while typing, meaning that if you turn on the virtual CapsLock, but your keyboard CapsLock is off, virtual keyboard will 
            automatically turn it's CapsLock off too, and vice versa.</p>
            <p class="text__paragraph">If it is possible, please leave the channels to contact you in your review. Have just checks and have a nice day!</p>
        </div>
        <div class="greet-popup__button-wrapper">
            <button class="greet-popup__button" type="button">Got It!</button>
        </div>
        </div>`

        return $popup;
    }
}
