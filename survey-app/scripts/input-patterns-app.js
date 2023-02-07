let txtInptName = document.querySelector("#fname");
let namePattern = /^[A-Za-z]+\s[A-Za-z]/;

let txtInptEmail = document.querySelector("#email");
let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/;

let nbrAge = document.querySelector("#age");
let agePattern = /([0-9]|[1-9][0-9]|99)/;


txtInptName.pattern = namePattern;
txtInptEmail.pattern = emailPattern;
nbrAge.pattern = agePattern;


function checaMarcado() {
    // console.log(inputSelect.value !== 'hvnt' && inputRadio !== '');
    let checkNome = false;
    let checkEmail = false;
    let checkAge = false;

    (namePattern.test(txtInptName.value) && (txtInptName.value.length > 0)) ? checkNome = true : checkNome;

    (emailPattern.test(txtInptEmail.value) && (txtInptEmail.value.length > 0)) ? checkEmail = true : checkEmail;

    (agePattern.test(nbrAge.value) && (nbrAge.value.length > 0)) ? checkAge = true : checkAge;


    if (!txtInptName || !checkEmail || !checkAge) {
        alert("Please, fill correctly the required fields!");
        checkNome ? checkNome : sinalizaInput(txtInptName);
        checkEmail ? checkEmail : sinalizaInput(txtInptEmail);
        checkAge ? checkAge : sinalizaInput(nbrAge);
    }


    return (checkNome && checkEmail && checkAge);
}



function sinalizaInput(input) {

    input.classList.add('animacaoUnselected');
    setTimeout(() => {
        input.classList.remove('animacaoUnselected');
    }, 2000);
}