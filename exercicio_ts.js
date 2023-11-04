"use strict";
var _a, _b, _c;
function multiplicar(n1, n2) {
    return n1 * n2;
}
function apresentar(nome) {
    console.log(`Olá ${nome}`);
}
let n1 = parseFloat((_a = prompt('Digite o primeiro número: ')) !== null && _a !== void 0 ? _a : "");
let n2 = parseFloat((_b = prompt('Digite o segundo número: ')) !== null && _b !== void 0 ? _b : "");
let resultado = multiplicar(n1, n2);
console.log(resultado);
let nome = (_c = prompt("Digite seu nome: ")) !== null && _c !== void 0 ? _c : "";
apresentar(nome);
