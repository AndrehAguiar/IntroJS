import { createMenu } from "./menu.js";
import { createContainer } from "./container.js";
import { listBrands } from "../view/vwBrand.js";
import { listModels } from "../view/vwModel.js";
import { listCars } from "../view/vwCar.js";

document.addEventListener('DOMContentLoaded', function () {

    const createHeader = function () {

        const header = document.createElement('header');
        header.id = 'headerContent';
        header.className = 'head';
        header.innerHTML = 'Header Aqui!';

        document.body.appendChild(header);

    }
    const createFooter = function () {
        const footer = document.createElement('footer');
        footer.id = 'footerContent';
        footer.className = 'foot';
        footer.innerHTML = 'Footer aqui!';

        document.body.appendChild(footer);
    }

    createMenu();
    createHeader();
    createContainer();
    createFooter()
    listBrands();
    listModels();
    listCars();
});
