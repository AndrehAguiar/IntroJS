import { createList } from "../js/container.js";
import { createTitle, createInput, createButton } from "../js/form.js";
import { setBrand, readBrands } from "../control/ctrlBrand.js";

const listBrands = function () {

    createList('Brand');
    const brands = readBrands();

    Object.keys(brands).forEach(key => {
        const dl = document.createElement('dl');
        let dd = document.querySelector('#Brand', 'dl');
        dd.appendChild(dl);
        dl.innerText = key;
    });
}

const brandForm = function () {

    if (!document.getElementById('formBrand')) {

        const form = document.createElement('form');
        form.method = '';
        form.id = 'formBrand';
        form.action = ''

        container.innerHTML = '';
        container.appendChild(form);

        const formBrand = document.getElementById('formBrand');

        const titleBrand = createTitle('Brand');
        form.appendChild(titleBrand);

        const inpBrand = createInput({
            "placeholder": 'Type the brand name?',
            "id": 'Brand',
            "type": "text"
        });
        formBrand.appendChild(inpBrand);

        const submit = createButton('submit');
        formBrand.appendChild(submit);

        const cancel = createButton('cancel');
        formBrand.appendChild(cancel);
        cancel.addEventListener('click', function () {
            window.location.replace('./');

        })

        formBrand.addEventListener('submit', function () {

            const newBrand = document.querySelector('#inpBrand');
            setBrand(newBrand.value);

        });

    } else {
        container.removeChild(document.getElementById('formBrand'));
    }
}

export { brandForm, listBrands };