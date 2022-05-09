let getFormWithTextareaService = function() {
    let $form = document.createElement("form");

    $form.setAttribute("action", "#");
    $form.setAttribute("method", "GET");
    $form.classList.add("text-form");

    $form.innerHTML = `<textarea name="text" id="text" cols="50" rows="20" class="text-form__textarea"></textarea>`;

    return $form;
}

export let textareBuilder = {
    getFormWithTextarea: getFormWithTextareaService,
}


