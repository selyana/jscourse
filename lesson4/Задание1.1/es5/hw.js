"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function (price) {
    this.price = this.price - (this.price / 100) * 25
}

const products = new Product("item", 300);
products.make25PercentDiscount();
console.log(products);