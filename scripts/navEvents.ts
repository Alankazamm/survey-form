import  navigate  from "./index.js";
import { validateHandler } from "./validators.js";

const backButtons = document.querySelectorAll('.back-button');
const skipButtons = document.querySelectorAll('.skip-button');

const nextButtons = [
    document.querySelector('#next-status'),
    document.querySelector('#next-invest'),
    document.querySelector('#next-details'),
    document.querySelector('#next-contact'),
]

nextButtons.forEach((button) =>
    button!.addEventListener('click', () => validateHandler(button!.id)))



const pages = ['welcome', 'start', 'status', 'invest', 'details', 'contact', 'sucess'];

backButtons.forEach((button,index) => {
    button.addEventListener('click', () => {
        navigate(pages[index]);
    });
});

skipButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        index + 1 < pages.length -1 ?
            navigate(pages[index + 1]) :
            navigate('welcome');
    });
});

