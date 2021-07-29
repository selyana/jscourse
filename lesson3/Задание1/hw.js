"use strict";

/* не совсем понимаю, в каких случаях прописывается else if, а в каких просто else */

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " - это ноль");
    }
    else if (i % 2 == 0) {
        console.log(i + " - четное число");
    }
    else if (i % 2 !== 0) {
        console.log(i + " - нечетное число");
    }
}
