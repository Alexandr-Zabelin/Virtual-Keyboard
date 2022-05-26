let closePopupEvent = function(event) {
    let $button = event.target.closest(".greet-popup__button");

    if (!$button && !event.target.classList.contains("greet-popup")) return;

    let $popupWindow = document.querySelector(".greet-popup__window");

    $popupWindow.classList.add("scaledToZero");

    let $popup = document.querySelector(".greet-popup");

    $popup.classList.add("bg_transparent");
    
    setTimeout(() =>  $popup.classList.add("display_none"), 300);
}


export let eventHandler = {
    addAllEventListeners: function() {
        document.querySelector(".greet-popup").addEventListener("click", closePopupEvent);
    }
}
