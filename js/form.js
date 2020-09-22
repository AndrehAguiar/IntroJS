import { navs } from "./menu.js";
import { brandForm } from "../view/vwBrand.js";
import { modelForm } from "../view/vwModel.js";
import { carForm } from "../view/vwCar.js";

const createTitle = function (arg) {
    const title = document.createElement('h2');
    title.innerHTML = `Register new ${arg}`;
    return title;
}

const createOption = function (arg) {
    const optMenu = document.createElement('select');
    optMenu.name = `${arg.name}`;
    optMenu.id = `${arg.name}`;
    arg.form.appendChild(optMenu);

    const select = document.querySelector(`#${arg.name}`);

    const value = arg.values;

    Object.keys(value).forEach(key => {
        const option = document.createElement('option');
        option.innerText = key;
        option.value = Object.values(value[key]);
        select.appendChild(option);
    });

    return optMenu;

}

const createInput = function (arg) {

    const input = document.createElement('input');
    input.placeholder = `${arg.placeholder}`;
    input.id = `inp${arg.id}`;
    input.type = `${arg.type}`;
    input.required = 'required';
    return input;
}

const createButton = function (arg) {

    const button = document.createElement('button');
    button.type = arg;
    button.id = 'btn';
    button.className = arg === 'submit' ? 'confirm' : 'cancel';
    button.textContent = arg;
    return button;

}

const formCreate = function (e) {

    const btn = e.path[0].id;
    switch (btn) {
        case `opt${navs[0]}`:
            brandForm();
            break;
        case `opt${navs[1]}`:
            modelForm();
            break;
        case `opt${navs[2]}`:
            carForm();
            break;
        default:
            return alert('Class not found!')
    }
}

export { formCreate, createTitle, createInput, createButton, createOption };