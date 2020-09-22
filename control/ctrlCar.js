import { Car } from "../model/car.js";
import { readModels } from "./ctrlModel.js"

const carsSet = new Set();

!JSON.parse(localStorage.getItem('Cars'))
    ? localStorage.setItem('Cars', JSON.stringify(carsSet))
    : JSON.parse(localStorage.getItem('Cars'));

const readCars = function () {
    const cars = JSON.parse(localStorage.getItem('Cars'));
    return cars;
}

const store = readCars();
const modelStore = readModels();

const write = function (obj) {
    console.log(obj.id, obj);
    store[obj.id] = obj;
    localStorage.setItem('Cars', JSON.stringify(store));
}

const setCar = function (model, year, door, color) {
    const id = Object.keys(store).length;
    const brand = modelStore[model]['_name'];
    const newCar = new Car(brand, model, id, year, door, color);
    write(newCar);
}

export { setCar, readCars };