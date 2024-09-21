'use strict'

// 1 задание

zad1.onclick = function () {

    console.log(document.body.firstElementChild);
    console.log(document.body.children[1]);
    console.log(document.body.children[1].lastElementChild);
}

// 2 задание

zad2.onclick = function () {

    let elems = document.querySelectorAll('li');

    for (let elem of elems) {
        elem.classList.add('.list-item');
    }
}

// 3 задание

zad3.onclick = function () {

    let value = +prompt('Введите цифру', 0);

    for (let i = 1; i <= value; i++) {
        let div = document.createElement('div');
        div.className = 'block';
        div.innerHTML = `${i} блок`;
        document.body.append(div);
    }
}


// 4 задание

zad4.onclick = function () {

    let form = document.createElement('form');
    let name = document.createElement('input');
    let email = document.createElement('input');
    let btn = document.createElement('button');

    name.placeholder = 'Имя';
    email.placeholder = 'Email';
    btn.innerHTML = 'Отпраить';

    document.body.append(form);
    document.body.lastElementChild.append(name);
    document.body.lastElementChild.append(email);
    document.body.lastElementChild.append(btn);

}
