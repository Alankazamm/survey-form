function checaMarcado(inputSelect, inputRadio) {
    // console.log(inputSelect.value !== 'hvnt' && inputRadio !== '');
    let checkRadio = false;
    inputRadio.forEach(element => element.checked ? checkRadio = true : checkRadio);

    let checkSelect = false;
    if (inputSelect.getAttribute('class') === 'changed') checkSelect = true;

    if (checkSelect === false || checkRadio === false) {
        alert("Please, fill the required fields or click 'Skip'!");
        checkRadio ? checkRadio : sinalizaInput(document.querySelector('.df-form-section'));
        checkSelect ? checkSelect : sinalizaInput(inputSelect);
    } 

   
    return (checkRadio && checkSelect);
}

function selectClicked() {
    document.querySelector(`select[name='sv-select-status']`).setAttribute('class', 'changed');
}

function sinalizaInput(input) {
   
    input.classList.add('animacaoUnselected');
    setTimeout(() => {
        input.classList.remove('animacaoUnselected');
    }, 2000);
}