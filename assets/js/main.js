"use strict"

// Задание 1
console.log(document.querySelector('div'));
console.log(document.querySelector('ul'));
console.log(document.querySelector('ul > li:last-child'));


// Задание 2
let ul = document.querySelectorAll('ul > li');
for (let li of ul) {
    console.log(li.innerHTML);
    li.classList.add('list-item');
    console.log(li.className);
}

// Задание 3
let num = +prompt('Введите число');

for (let i = 0; i < num; i++) {
    let body = document.querySelector('body');
    let div = document.createElement('div');
    div.className = 'square';
    div.style.background = 'purple';
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.margin = '20px'
    body.append(div);
}

// Задание 4
let body = document.querySelector('body');
let form = document.createElement('form');
let inputName = document.createElement('input');
let inputEmail = document.createElement('input');
let btn = document.createElement('button');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '20px';
form.style.width = '300px';

inputName.placeholder = 'Введите имя';
inputName.style.padding = '10px';

inputEmail.placeholder = 'Введите email';
inputEmail.style.padding = '10px';

btn.innerHTML = 'Отправить';
btn.style.padding = '10px';


form.append(inputName, inputEmail, btn);
body.append(form);