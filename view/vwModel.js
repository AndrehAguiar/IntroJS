import { createList } from "../js/container.js";
import { createTitle, createInput, createButton, createOption } from "../js/form.js";
import { readBrands } from "../control/ctrlBrand.js"
import { setModel, readModels } from "../control/ctrlModel.js";

const listModels = function () {

    createList('Model');
    const models = readModels();

    Object.keys(models).forEach(key => {
        const dl = document.createElement('dl');
        let dd = document.querySelector('#Model', 'dl');
        dd.appendChild(dl);
        dl.innerText = key;
    });
}

const modelForm = function () {

    if (!document.getElementById('formModel')) {

        const form = document.createElement('form');
        form.method = '';
        form.id = 'formModel';
        form.action = ''
        container.innerHTML = '';
        container.appendChild(form);

        const formModel = document.getElementById('formModel');

        const titleModel = createTitle('Model');
        form.appendChild(titleModel);

        const arg = {
            'name': 'brands', 'form': formModel, 'values': readBrands()
        };
        const optMenu = createOption(arg);
        formModel.appendChild(optMenu);

        const inpModel = createInput({
            "placeholder": 'Type the model?',
            "id": 'Model',
            "type": "text"
        });
        formModel.appendChild(inpModel);

        const submit = createButton('submit');
        formModel.appendChild(submit);

        const cancel = createButton('cancel');
        formModel.appendChild(cancel);
        cancel.addEventListener('click', function () {
            window.location.replace('./');
        })

        formModel.addEventListener('submit', function () {

            const modelBrand = document.querySelector('#formModel select')
            const newModel = document.querySelector('#inpModel');
            const brand = modelBrand.value;
            const model = newModel.value;
            setModel(brand, model);

        });

    } else {
        container.removeChild(document.getElementById('formBrand'));
    }
}

export { modelForm, listModels };