let loadScreenBuilder = {
    getLoadScreenElement: function() { 
        let $loadScreen = document.createElement("div");

        $loadScreen.classList.add("load-sreen");
        $loadScreen.innerHTML = 
        `<div class="load-screen">
            <div class="load-screen__dots-wrapper">
                <div class="load-screen__dots"></div>
                <div class="load-screen__dots"></div>
                <div class="load-screen__dots"></div>
            </div>
        </div>`;

        return $loadScreen;
    }
}

let $elem = loadScreenBuilder.getLoadScreenElement();

document.body.append($elem);