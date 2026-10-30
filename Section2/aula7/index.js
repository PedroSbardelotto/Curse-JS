// não podemos criar constates com palavras reservadas
// constants precisam ter nomes significativos 
// nõa podemos comeaçar o nome de um variavel com um número 
// não podem conter esáõs ou traços
// Utilizamos camelCase
// Case_sensitive
// naõ podemos redeclarar constanta ou modificar o valor 
// não utilize var, utilize let. 
/* 

2. Uso do const (Valores Imutáveis)
Use const para variáveis cujas referências não devem ser alteradas.

Nota: Em objetos e arrays declarados com const, a referência da variável é fixa, mas as suas propriedades ou elementos internos podem ser modificados.

*/

// Retribuição direta gera erro 
//const PI = 3.14159;
// PI = 3.14 // Uncaugth TypeErros: Assignment to constant variable. 

// Mutabilidade interna em objetos e arrays é permitida: 
//const usuario = {nome: "Pedro", idade: 30};
//usuario.idade = 31; // Permitido! ALteração de propriedade interna. 
// usuario = { nome: "Ana" }; // Erro! Reatribuição de referência.

//const tarefas = ["Estudar JS"]
//tarefas.push("Treinar"); // Permitido Alteração do conteúdo do array 

// console.log(typeof resultado) -> função que te mostra o typo de dado da variavel
const primeiroNumero = 20; 
const segundoNumero = 40; 
const resultado= primeiroNumero * segundoNumero; 
console.log(resultado);


