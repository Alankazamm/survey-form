function checaMarcado(inputSelect, inputRadio) {
    // console.log(inputSelect.value !== 'hvnt' && inputRadio !== '');
    let checkRadio = false;
    inputRadio.forEach(element => {
        if (element.checked === true) {
            checkRadio = true;
        }
    })
    console.log(checkRadio)
    return (checkRadio === true && inputSelect.getAttribute('class') === 'changed');
}

function selectClicked() {
    document.querySelector(`select[name='sv-select-status']`).setAttribute('class', 'changed');
}