"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
function numeroAleatorio(a, b) {
    return lodash_1.random(a, b);
}
console.log('Numero aleatorio: ', numeroAleatorio(2, 5));
console.log('Aleatorio', lodash_1.random(10, 20));
