
let textArea = document.querySelector(`textarea`);
let display = document.querySelector('#caracteresSobrando');
function checaMarcado() {
    // console.log(inputSelect.value !== 'hvnt' && inputRadio !== '');

    if (textArea.value.length <= 0) {
        alert("Please, fill the required fields or click 'Skip'!");
        sinalizaInput(textArea);
    }
    return (textArea.value.length > 0);
}

textArea.addEventListener('input', () => {
    renderizaNumeros(textArea);
});


function sinalizaInput(input) {


    input.classList.add('animacaoUnselected');
    setTimeout(() => {
        input.classList.remove('animacaoUnselected');
    }, 2000);

}


function renderizaNumeros(valorSobrando) {
    display.innerHTML = `${valorSobrando.value.length}/130`
}