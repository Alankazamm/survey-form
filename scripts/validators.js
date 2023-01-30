import { createForm } from "./filledInfos.js";
import navigate from "./index.js";
// filled form infos
// inputs from status page
const statusSelect = document
    .querySelector('#status-select');
const statusRadios = document
    .querySelectorAll('input[name="markets"]');
// inputs from invest page
const investSelect = document
    .querySelector('#invest-select');
const investCheckboxes = document
    .querySelectorAll('input[type="checkbox"]');
// input from details page
const detailsTxtArea = document
    .querySelector('#details-textarea');
// input from contact page
const email = document
    .querySelector('#email');
const fullname = document
    .querySelector('#fullname');
const age = document
    .querySelector('#age');
// get radio/checkbox values
let radioValue = '';
let checkboxValue = [];
// 
const formHandler = () => {
    const infos = {
        name: fullname.value,
        email: email.value,
        age: age.value,
        status: (statusSelect === null || statusSelect === void 0 ? void 0 : statusSelect.value) || '',
        market: radioValue || '',
        invest: (investSelect === null || investSelect === void 0 ? void 0 : investSelect.value) || '',
        resources: checkboxValue,
        details: (detailsTxtArea === null || detailsTxtArea === void 0 ? void 0 : detailsTxtArea.value) || '',
    };
    createForm(infos);
    navigate('sucess');
};
export const validateHandler = (buttonId) => {
    var _a, _b;
    switch (buttonId) {
        case 'next-status':
            radioValue = '';
            statusRadios === null || statusRadios === void 0 ? void 0 : statusRadios.forEach(radio => radio.checked ? radioValue = radio.value : null);
            console.log(radioValue);
            statusSelect.value !== '1'
                && radioValue !== '' ?
                navigate('invest') :
                alert('Please fill corretly the form');
            break;
        case 'next-invest':
            checkboxValue = [];
            investCheckboxes === null || investCheckboxes === void 0 ? void 0 : investCheckboxes.forEach(checkbox => checkbox.checked ? checkboxValue.push(checkbox.value) : null);
            (investSelect === null || investSelect === void 0 ? void 0 : investSelect.value) !== '1' && checkboxValue.length > 0 ?
                navigate('details') :
                alert('Please fill corretly the form');
            break;
        case 'next-details':
            typeof ((_a = detailsTxtArea === null || detailsTxtArea === void 0 ? void 0 : detailsTxtArea.value) === null || _a === void 0 ? void 0 : _a.length) === 'number'
                && ((_b = detailsTxtArea === null || detailsTxtArea === void 0 ? void 0 : detailsTxtArea.value) === null || _b === void 0 ? void 0 : _b.length) > 0 ?
                navigate('contact') :
                alert('Please fill corretly the form');
            break;
        case 'next-contact':
            /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullname.value)
                && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value)
                && age.value.length > 0 ?
                formHandler() :
                alert('Please fill corretly the form');
    }
};
