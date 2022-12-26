
let textArea = document.querySelector(`textarea`);

function checaMarcado() {
    // console.log(inputSelect.value !== 'hvnt' && inputRadio !== '');
   
   
    return (textArea.value.length > 0);
}

textArea.addEventListener('input', () => {
   return console.log(textArea.value.length - 130);
});

