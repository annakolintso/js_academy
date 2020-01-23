'use strict';

function transformString(message) {
    if (typeof message !== 'string') {
        alert('Message incorrect!');
        return;
    }
    let str = '';
    for (let i = 0; i < message.length; i++) {
        str += message[i] + '-';
    }
    str = str.split(' ');
    str[str.length - 1] = str[str.length - 1].toUpperCase();
    str = str.join(' ');
    return str;
}

console.log(transformString('I know JavaScript a little!'));
console.log(transformString(34));