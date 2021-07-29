"use strict";

/* сейчас все используют es6 или предыдущий стандарт тоже в ходу? ведь класс является псевдоклассом в es6, как я поняла 
 */

class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(price) {
        this.price = this.price - (this.price / 100) * 25
    }

}

const products = new Product("item", 300);
products.make25PercentDiscount();
console.log(products);