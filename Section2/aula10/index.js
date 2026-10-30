// 1 string (cadeia de caracteres)
// usado para presentar textos, podem ser delimitadors por aspas simples, duplas ou cases para template strings

const nome = "Pedro";
const saudacao = "ola!";
console.log(nome, saudacao)

// 2. number 
// representa tanto numeros inteiros quanto de ponto flutuante(decimais). o JS não diferencia int de float
const idade= 30;
const altura = 1.60;
const tempNegativa = -5;

//3. bigint (numero inteiro grande)
// usado para representar numeros inteiro muito grandes que ultrapassam o limite seguro do tipo number ( number.MAX_SAFE_INTEGER). É identificado pelo sufixo n.

const numeroGrande = 900003030404050506506n;
const resultado = numeroGrande + 2n;

//4. boolean ( boleano)
// possui apenas dois valores possiveis TRUE ou FALSE, muito usado em estruturas condicionais 
const estalogado = true;
const tempermissao = false;
if (estalogado) {
    console.log("Acesso permitido.")
} else {
    console.log("Acesso negado.")
};

// 5. undefined ( indefinido)
// indica que uma váriavel foi declarada, mas ainda não recebeu nenhum valor. 
 let cargoAtual;
 console.log(cargoAtual) // output: undefined


//6. Null ( nulo) representa a ausencia intencionar de qualquer valor ou objeto. Diferente de indefined

// Mais tarde, se a requisiçaõ falhar ou lomparmos os dados:
respostaServidor = null;
console.log(respostaServidor); // output: null 

//7. symbol (simbolo) instroduzido no es6, cria valores únicos e imutaveis. geralemnte é usado para criar chaves de ojatos que precisam ser ocultas ou exclusivas, evitando colisões de nomes

const idUnico = Symbol("id");
const usuario = {
    [idUnico]: 12345,
    nome: "Ana"
}; 

console.log(usuario[idUnico]); // output 12345

