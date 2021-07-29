"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },
];

products.sort(function (product1, product2) {
    return product1.price - product2.price;
});
console.log(products);

/* я не понимаю, почему у меня выводятся неверные данные в консоли  */

products.filter(function (product) {
    return "photos" in product && product.photos.length > 0
});
console.log(products);

/* можно ли для проверки наличия фото использовать метод includes?
 */