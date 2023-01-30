import navigate from "./index";

export interface Infos {
    name: string;
    email: string;
    age: string;
    status: string;
    market?: string;
    invest?: string;
    resources?: string[];
    details?: string;

}
// dom manipulation:
// const infosUl = document.createElement('ul');
// const infoItem = document.createElement('li');
const itemDivs:NodeListOf<HTMLElement> = document.querySelectorAll('.infoItem');

let filledForm: Array<string | string[]> = [];

export const createForm = (infos: Infos) => {
    filledForm = [];
    filledForm.push(infos.name);
    filledForm.push(infos.email);
    filledForm.push(infos.age);

    switch (infos.status) {
        case '2':
            filledForm.push('My account status is okay.');
            break;
        case '3':
            filledForm.push("I'm currently having financial issues.");
            break;
        default:
            filledForm.push("Not answered.");
            break;
    }

    switch (infos.market) {
        case 'stk':
            filledForm.push('stock market');
            break;
        case 'fx':
            filledForm.push('foreign exchange');
            break;
        case 'cmd':
            filledForm.push('commodity');
            break;
        case 'bond':
            filledForm.push('bond market');
            break;
        case 'cripto':
            filledForm.push('cryptocurrency market');
            break;
        default:
            filledForm.push("Not answered.");
            break;
    }
    switch (infos.invest) {
        case '2':
            filledForm.push("My bank's manager advices me.");
            break;
        case '3':
            filledForm.push("I flip a coin");
            break;
        default:
            filledForm.push("Not answered.");
            break;
    }
    let arrCheckeds: string[] = [];
    infos.resources?.forEach(resource => {
        switch (resource) {
            case 'books':
                arrCheckeds.push('Books and articles');
                break;
            case 'ytb':
                arrCheckeds.push('YouTube tutorial videos');
                break;
            case 'courses':
                arrCheckeds.push('online or face to face courses');
                break;
            case 'exp':
                arrCheckeds.push('experience with little investment');
                break;
        }
    });

    arrCheckeds.length >0? filledForm.push(arrCheckeds):filledForm.push('not answered');
    infos.details!.length > 0 ? filledForm.push(infos.details!) : filledForm.push('Not filled');

    
    const domizedValues: string[] = filledForm.map((item):string => {
        if (!Array.isArray(item)) return `<p>${item}</p>`
        else
            return  `<p>${item.map(nestedItem => {
                return ` <br>${nestedItem}`;
            })}</p>`;
           
            
            // item.map(nestedItem => {
            //     infoItem.innerHTML = nestedItem;
            //     infosUl.appendChild(infoItem);
            // })
    });
    // fazer um forEach no itemDiv pra colocar cara domized dentro do respectivo
    // que tera o titulo em tag estática + item convertido em li
    itemDivs.forEach((div, index) => {
        domizedValues.forEach((value, i) => {
            if (i === index) {
                div.innerHTML = value;
            }
        })
    });
    
}