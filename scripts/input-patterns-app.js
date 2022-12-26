let txtInptName = document.querySelector("#fname");
txtInptName.pattern = '([a|A-z|Z])+\\s([a|A-z|Z])';

let txtInptEmail = document.querySelector("#email");
txtInptEmail.pattern = "/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\w+)*(\\.\\w{2,3})+$/";


function ValidarInputs(input1) {
    const mailPattern = "/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\w+)*(\\.\\w{2,3})+$/";
    if (input1.value.match(mailPattern)) {
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