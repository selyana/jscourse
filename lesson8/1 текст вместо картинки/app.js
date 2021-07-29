'use strict';

//ТУТ Я НЕ СТАЛА ИСПОЛЬЗОВАТЬ ОБЪЕКТ С ИНФОРМАЦИЕЙ О КАРТОЧКЕ, ВСЕ ДЕЛАЛА ЧЕРЕЗ ПЕРЕДАЧУ ОБЪЕКТА СОБЫТИЯ - ПРАВИЛЬНО ЛИ Я ИСПОЛЬЗОВАЛА ЕГО? 

// 1. 

let buttons = document.querySelectorAll('button');

// 1.1 

buttons.forEach(function (button) {
    button.addEventListener('click', handleClick);
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    // 2. 

    const cardNode = clickedButtonEvent.target.parentNode;

    const textOnButton = clickedButtonEvent.target.innerText;

    if (textOnButton == 'Подробнее') { // 4.1 
        showMoreText(clickedButtonEvent); // 
    } else if (textOnButton == 'Отмена') { // 4.3 
        // 4.4 
        hideMoreText(clickedButtonEvent);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(clickedButtonEvent) {
    // 5. 
    clickedButtonEvent.target.parentNode.querySelector('img').style.display = 'block';

    // 5.1 
    clickedButtonEvent.target.parentNode.querySelector('.desc').remove();

    // 5.2 
    clickedButtonEvent.target.parentNode.querySelector('button').innerText = 'Подробнее';


}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(clickedButtonEvent) {
    // 6. 
    clickedButtonEvent.target.parentNode.querySelector('img').style.display = 'none';

    // 6.1 
    const text = 'Lorem ipsum dolor sit amet';

    // 6.2 
    clickedButtonEvent.target.parentNode.querySelector('.productName').insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    // 6.3 
    clickedButtonEvent.target.parentNode.querySelector('button').innerText = 'Отмена';

}