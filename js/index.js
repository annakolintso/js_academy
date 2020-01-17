"use strict";
function play (length, word, period) {
    for (let i=0; i<length; i++){
        console.log(i+1);
        if ((i + 1)  % period == 0){
            console.log(word);
        }
    }
}
play(12, 'Kawabanga', 3);