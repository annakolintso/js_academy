/*Написать функцию makeCard. Она принимает 3 аргумента и возвращает объект как на скриншоте.
Месяц должен быть выбран случайно при запуске функции и всегда состоять из двух чисел.
Год должен быть выбран случайно из таких чисел 30, 29, 28, 34.
CVV должен всегда состоять из 3 чисел и быть случайным.
Если в функцию не передать имени и фамилии она будет без имени.
 */

'use strict';

function makeCard(type, name = '', surname = '') {
    if (typeof type !== 'string' || typeof name !== 'string' || typeof surname !== 'string') {
        alert('Message incorrect!');
        return;
    }
    let fullName = (`${name} ${surname}`).toUpperCase();
    let code = Math.round(Math.random() * 1000);
    let months = Math.ceil(Math.random() * 11);
    if (months < 10) {
        months = `0${months}`;
    }
    let years = [30, 29, 28, 34];
    let year = years[Math.floor(Math.random() * years.length)];
    let fullDate = `${months}/${year}`;
    let data = {
        type: type,
        name: fullName,
        cvv: code,
        date: fullDate,
    }
    if (name === '' || surname === ''){
        delete data.name;
    }
        return data;
}

let myCard = makeCard('VISA', 'Anna', "Kolintso");
let cardWithoutName = makeCard('VISA');
console.log(myCard)
console.log(cardWithoutName)


