// dom manipulation:
// const infosUl = document.createElement('ul');
// const infoItem = document.createElement('li');
// const itemDivs = document.querySelectorAll('.infoItem');
export let filledForm = [];
export const createForm = (infos) => {
    var _a;
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
    let arrCheckeds = [];
    (_a = infos.resources) === null || _a === void 0 ? void 0 : _a.forEach(resource => {
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
    arrCheckeds.length > 0 ? filledForm.push(arrCheckeds) : filledForm.push('not answered');
    infos.details.length > 0 ? filledForm.push(infos.details) : filledForm.push('Not filled');
    const domizedValues = filledForm.map((item) => {
        if (!Array.isArray(item))
            return `<p>${item}</p>`;
        else
            return `<div>${item.map(nestedItem => {
                return `<br> ${nestedItem}`;
            })}</div>`;
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
         });
     });
};
