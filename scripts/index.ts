const pages: HTMLElement[] = [
    document.querySelector('.welcome-section')!,
    document.querySelector('.start-section')!,
    document.querySelector('.status-section')!,
    document.querySelector('.invest-section')!,
    document.querySelector('.details-section')!,
    document.querySelector('.contact-section')!,
    document.querySelector('.sucess-section')!
];

const [welcome, start, statuspage, invest, details, contact, sucess] = pages;

const navigate = (page: string) => {
    switch (page) {

        case 'welcome':
            sucess.style.display = 'none';
            welcome.style.display = 'flex';
            start.style.display = 'none';
            break;
        case 'start':
            welcome.style.display = 'none';
            start.style.display = 'flex';
            statuspage.style.display = 'none';
            break;
        case 'status':
            start.style.display = 'none';
            statuspage.style.display = 'flex';
            invest.style.display = 'none';
            break;
        case 'invest':
            statuspage.style.display = 'none';
            invest.style.display = 'flex';
            details.style.display = 'none';
            break;
        case 'details':
            invest.style.display = 'none';
            details.style.display = 'flex';
            contact.style.display = 'none';
            break;
        case 'contact':
            details.style.display = 'none';
            contact.style.display = 'flex';
            break;
        case 'sucess':
            contact.style.display = 'none';
            sucess.style.display = 'flex';
            break;

    }
}
export default navigate;