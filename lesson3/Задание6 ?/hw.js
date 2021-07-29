"use strict";


/* Изначально эту задачку попробовала решить путем добавления элементов в массив 
Но тут почему-то при запуске html файла в хроме консоль сначала выдает один результат, 
а при обновлении страницы - уже другой, с "пирамидкой" из массивов, почему так? 
 */
let pyramide = [];
for (let i = 0; i < 20; i++) {
    pyramide.push("x")
    console.log(pyramide)
}


/* for (let i = 0; i < 20; i++) {
    var str = '';
    for (let n = 0; n < i + 1; n++) {
        str += "x";
    }
    console.log(str)
} */


/* for (let x = 'x'; x.length <= 20; x += 'x') {
    console.log(x);
} */
