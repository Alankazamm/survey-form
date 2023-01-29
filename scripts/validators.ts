import { createForm, Infos } from "./filledInfos.js";
import navigate from "./index.js";

type input = HTMLInputElement | null;
type multInput = NodeListOf<HTMLInputElement>;

// filled form infos

// inputs from status page
const statusSelect: input = document
    .querySelector('#status-select');
const statusRadios: multInput = document
    .querySelectorAll('input[name="markets"]');

// inputs from invest page
const investSelect: input = document
    .querySelector('#invest-select');
const investCheckboxes: multInput = document
    .querySelectorAll('input[type="checkbox"]');

// input from details page
const detailsTxtArea: input = document
    .querySelector('#details-textarea');

// input from contact page
const email: input = document
    .querySelector('#email')!;
const fullname: input = document
    .querySelector('#fullname')!;
const age: input = document
    .querySelector('#age')!;

// get radio/checkbox values

let radioValue = '';
let checkboxValue: string[] = [];
// 
const formHandler = () => {
    const infos: Infos = {
        name: fullname.value,
        email: email.value,
        age: age.value,
        status: statusSelect?.value || '',
        market: radioValue || '',
        invest: investSelect?.value || '',
        resources: checkboxValue,
        details: detailsTxtArea?.value || '',
    }
    createForm(infos);
}
export const validateHandler = (buttonId: string) => {
    switch (buttonId) {
        case 'next-status':
            radioValue = '';
            statusRadios?.forEach(radio => radio.checked ? radioValue = radio.value : null);
            console.log(radioValue)
            statusSelect!.value !== '1'
                && radioValue !== '' ?
                navigate('invest') :
                alert('Please fill corretly the form');
            break;
        case 'next-invest':
            checkboxValue = [];
            investCheckboxes?.forEach(checkbox => checkbox.checked ? checkboxValue.push(checkbox.value) : null);
            
            investSelect?.value !== '1' && checkboxValue.length > 0 ?
                navigate('details') :
                alert('Please fill corretly the form');
            break;
        case 'next-details':
            typeof detailsTxtArea?.value?.length === 'number'
                && detailsTxtArea?.value?.length > 0 ?
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
}