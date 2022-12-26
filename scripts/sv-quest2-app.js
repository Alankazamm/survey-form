function checaMarcado() {
    // console.log(inputSelect.value !== 'hvnt' && inputRadio !== '');
    let totalChecked = document.querySelectorAll(`input[name='sv-cbx-ivst']:checked`);
   
    return (totalChecked.length > 0);
}



function checaMarcado() {
    // console.log(inputSelect.value !== 'hvnt' && inputRadio !== '');
    let totalChecked = document.querySelectorAll(`input[name='sv-cbx-ivst']:checked`);
    




    if (totalChecked.length <= 0) {
        alert("Please, fill the required fields or click 'Skip'!");
      sinalizaInput(document.querySelectorAll('.ipt-wrap'))
    } 

   
    return (totalChecked.length > 0 );
}

function sinalizaInput(input) {
   
    input.forEach(el => {
        el.classList.add('animacaoUnselected');
        setTimeout(() => {
            el.classList.remove('animacaoUnselected');
        }, 2000);
    });
}
