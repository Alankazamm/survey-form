function checaMarcado() {
    // console.log(inputSelect.value !== 'hvnt' && inputRadio !== '');
    let totalChecked = document.querySelectorAll(`input[name='sv-cbx-ivst']:checked`);
   
    return (totalChecked.length > 0);
}

