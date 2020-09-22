class Brand {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    /**
     * @param {String} name
     */
    set name(name) {
        this._name = name;
    }
    present() {
        return `This car is a ${this._name} `;
    }
}
export { Brand };