import { Brand } from "./brand.js";
class Model extends Brand {
    constructor(brand, model) {
        super(brand);
        this._model = model;
    }
    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
    /**
     * @param {Brand} brand
     */
    set brand(brand) {
        this._brand = brand;
    }
    /**
     * @param {String} model
     */
    set model(model) {
        this._model = model;
    }
    presentModel() {
        return `model ${this._model}, `
    }
}
export { Model };