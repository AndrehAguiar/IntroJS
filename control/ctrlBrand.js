import { Brand } from "../model/brand.js";

const brandsSet = new Set();

!JSON.parse(localStorage.getItem('Brands'))
    ? localStorage.setItem('Brands', JSON.stringify(brandsSet))
    : JSON.parse(localStorage.getItem('Brands'));

const readBrands = function () {
    const brands = JSON.parse(localStorage.getItem('Brands'));
    return brands;
}

const store = readBrands();

const write = function (obj) {
    console.log(obj.name, obj);
    store[obj.name] = obj;
    localStorage.setItem('Brands', JSON.stringify(store));
}
const setBrand = function (brand) {
    const newBrand = new Brand(brand);
    write(newBrand);
}
const getBrand = function (brand) {
    return brandsSet.has(brand) ? { 'Brand': brand } : 'This brand is not registered!';
}
const getBrands = function () {
    console.log('control list', brandsSet.values());
    let brands = brandsSet.values();
    return brands;
}
export { setBrand, readBrands };