//operadores aritméticos
const a = 10;
const b = 3;

// Operações básicas
const soma = a + b;          // 13
const subtracao = a - b;     // 7
const multiplicacao = a * b; // 30
const divisao = a / b;       // 3.333...

// Módulo (Resto da divisão)
const resto = a % b;         // 1 (porque 3 * 3 = 9, e falta 1 para chegar a 10)

// Exponenciação (Potência)
const potencia = 2 ** 4;     // 16 (2 * 2 * 2 * 2)

console.log({ soma, subtracao, multiplicacao, divisao, resto, potencia });

// Incremento e Decremento
// estes operadores modificam o calor da váriavel diretamente adicionando ou subtraindo 1: 


let vidas = 3;
vidas--; // Agora vale 2 (perdeu uma vida)

let pontos = 10;
pontos++; // agora vale 11 ganhou um ponto 


// atribuição aritimética ( atalhos) 
// Frequentemente precisamos atualizar o valor de um variável aplicando uma operação matemática sobre ela mesma, o js possui atalhos para isso:
let saldo = 100

saldo += 50;
saldo -= 50;
saldo *= 50;
saldo /= 50;