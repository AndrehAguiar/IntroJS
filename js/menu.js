import { formCreate } from "./form.js";
const navs = ['Brand', 'Model', 'Car'];

const createMenu = function () {
    const menu = document.createElement('menu');
    menu.id = 'mainMenu';
    menu.className = 'headMenu';

    document.body.appendChild(menu);

    navs.forEach(element => {
        const nav = getNav(menu);
        nav.id = `opt${element}`;
        nav.innerHTML += element;
        getAdd(nav);
        menu.appendChild(nav);

        let idElement = document.getElementById(`opt${element}`);

        idElement.addEventListener('click', formCreate);

    });
}

const getNav = function (menu) {
    const nav = document.createElement('nav');
    nav.className = 'menuMain';
    return nav;
}

const getAdd = function (nav) {
    const i = document.createElement('i');
    i.id = nav.id;
    i.className = 'fas fa-plus-square';
    nav.appendChild(i);
}
export { createMenu, navs };