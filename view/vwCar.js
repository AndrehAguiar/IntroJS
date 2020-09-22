import { createList } from "../js/container.js";
import { createTitle, createInput, createButton, createOption } from "../js/form.js";
import { readModels } from "../control/ctrlModel.js"
import { setCar, readCars } from "../control/ctrlCar.js";

const listCars = function () {

    createList('Car');
    const cars = readCars();

    Object.keys(cars).forEach(key => {
        const dl = document.createElement('dl');
        let dd = document.querySelector('#Car', 'dl');
        dl.style.borderLeft = `${cars[key]['_color']} solid 1rem`;
        dd.appendChild(dl);
        dl.innerText = `${cars[key]['_model']}/${cars[key]['_name']}: ${cars[key]['_door']} Doors`;
    });
}

const carForm = function () {

    if (!document.getElementById('formCar')) {

        const form = document.createElement('form');
        form.method = '';
        form.id = 'formCar';
        form.action = ''
        container.innerHTML = '';
        container.appendChild(form);

        const formCar = document.getElementById('formCar');

        const titleCar = createTitle('Car');
        form.appendChild(titleCar);

        const optModels = readModels();
        const objModels = {};

        Object.keys(optModels).forEach(element => {
            objModels[element] = { "_model": element };
        });
        const arg = {
            'name': 'models', 'form': formCar, 'values': objModels
        };
        const optMenu = createOption(arg);
        formCar.appendChild(optMenu);

        const inpAno = createInput({
            "placeholder": 'What year?',
            "id": 'Year',
            "type": "number"
        });
        formCar.appendChild(inpAno);

        const inpCor = createInput({
            "placeholder": 'What color?',
            "id": 'Color',
            "type": "color"
        });
        formCar.appendChild(inpCor);

        const inpDoor = createInput({
            "placeholder": 'How many doors?',
            "id": 'Doors',
            "type": "number"
        });
        formCar.appendChild(inpDoor);

        const submit = createButton('submit');
        formCar.appendChild(submit);

        const cancel = createButton('cancel');
        formCar.appendChild(cancel);
        cancel.addEventListener('click', function () {
            window.location.replace('./');
        })

        formCar.addEventListener('submit', function () {
            const slcModel = document.querySelector('#formCar select');
            const model = slcModel.value;

            const inpYear = document.querySelector('#inpYear');
            const year = inpYear.value;

            const inpColor = document.querySelector('#inpColor')
            const color = inpColor.value;

            const inpDoor = document.querySelector('#inpDoors')
            const door = inpDoor.value;

            setCar(model, year, door, color);

        });

    } else {
        container.removeChild(document.getElementById('formCar'));
    }
}

export { carForm, listCars };