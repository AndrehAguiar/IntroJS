import { formCreate, newCar } from "./form.js";
//import { lstCars } from "./carro.js";

const geral = document.getElementById('geral');

const newForm = function () {

    formCreate();
    const formNewCar = document.querySelector('.createCarro');
    formNewCar.addEventListener('submit', newCar);
    formNewCar.addEventListener('reset', init);

}
/*
const init = function () {

    geral.innerHTML = `
    <button id="btn" class="formNew">Novo carro</button>
    <span id='lstTitle'></span>
    <ul class="list" id="lstCar"></ul >`;

    const lstTitle = document.getElementById('lstTitle');
    const lstCar = document.getElementById('lstCar');
    const formNew = document.querySelector('.formNew');
    formNew.addEventListener('click', newForm);
    lstCars();
}
init();

export { init };*/