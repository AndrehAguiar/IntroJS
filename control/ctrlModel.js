import { Model } from "../model/model.js";

const modelsSet = new Set();

!JSON.parse(localStorage.getItem('Models'))
    ? localStorage.setItem('Models', JSON.stringify(modelsSet))
    : JSON.parse(localStorage.getItem('Models'));

const readModels = function () {
    const models = JSON.parse(localStorage.getItem('Models'));
    return models;
}

const store = readModels();

const writeModels = function (obj) {
    console.log(obj.model, obj);
    store[obj.model] = obj;
    localStorage.setItem('Models', JSON.stringify(store));
}

const setModel = function (brand, model) {
    const newModel = new Model(brand, model);
    writeModels(newModel);
}

export { setModel, readModels };