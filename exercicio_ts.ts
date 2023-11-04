function multiplicar (n1: number, n2: number): number {
    return n1 * n2;
}

function apresentar (nome: string): string {
    return `Olá ${nome}`;
}
let n1 = parseFloat(prompt('Digite o primeiro número: ') ?? "");
let n2 = parseFloat(prompt('Digite o segundo número: ') ?? "");

let resultado: number = multiplicar(n1, n2);
console.log(resultado);
let nome: string = prompt ("Digite seu nome: ") ?? "";  
console.log(apresentar(nome));