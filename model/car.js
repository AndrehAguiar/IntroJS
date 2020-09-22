import { Model } from "./model.js";
import { Brand } from "./brand.js";
class Car extends (Brand, Model) {
    constructor(brand, model, id, ano, door, color) {
        super(brand, model);
        this._id = id;
        this._model = model;
        this._year = ano;
        this._color = color;
        this._door = door;
    }
    get id() {
        return this._id;
    }
    get brand() {
        return this._brand;
    }
    get modelo() {
        return this._modelo;
    }
    get year() {
        return this._year;
    }
    get color() {
        return this._color;
    }
    get door() {
        return this._door;
    }
    /**
     * @param {Number} id
     */
    set id(id) {
        this._id = id;
    }
    /**
     * @param {Brand} brand
     */
    set brand(brand) {
        this._brand = brand;
    }
    /**
     * @param {Model} model
     */
    set model(model) {
        this._model = model;
    }
    /**
     * @param {Number} year
     */
    set year(year) {
        this._year = year;
    }
    /**
     * @param {String} color
     */
    set color(color) {
        this._color = color;
    }
    /**
     * @param {Number} door
     */
    set door(door) {
        this._door = door;
    }
    showDescription() {
        return `${this.prensentModel()}
        (${this.year}), ${this.color}, ${this.door}`;
    }
};
export { Car };