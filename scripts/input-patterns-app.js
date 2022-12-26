let txtInptName = document.querySelector("#fname");
let namePattern = '^[A-Za-z]+\\s[A-Za-z]';

let txtInptEmail = document.querySelector("#email");
let emailPattern = "/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\w+)*(\\.\\w{2,3})+$/";


let nome = "";
txtInptName.addEventListener('input', () => {
    if (txtInptName.value.match(emailPattern)){
        nome = txtInptName.value;
    } else txtInptName.value = nome;
    console.log(nome);
} )

function ValidarInputs(input1) {
    const mailPattern = "/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\w+)*(\\.\\w{2,3})+$/";
    if (input1.value.test(mailPattern)) {
        return true;
    }
    else {
        const teste = document.createElement('p');
        teste.setAttribute('id', 'teste');
        teste.innerText = 'Oi';
        document.body.append(teste);
        return false;
    }
}


