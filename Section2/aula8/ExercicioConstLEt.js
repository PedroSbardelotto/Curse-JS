/* 

Pedro Sbardellotto tem 30 anos, peso 84 kg 
tem 18. de altura e seu imc é de 25.999999999
pedro Sbardelltto nasceu em 1997
*/

const nome = 'Pedro'; 
const sobrenome = 'Sbardellotto';
const idade = 30;
const peso = 120;
const alturaM = 1.80; 
let imc = peso / (alturaM * alturaM) ; // peso dividio por altura vezes altura
let anoNascimento = 1997 ; 

console.log (nome+" "+sobrenome+",tem "+idade+" anos, pesa "+peso+"\n"+"tem "+alturaM+" de altura e seu imc é de: "+imc+"\n"+nome+" "+sobrenome+"nasceu em"+anoNascimento)
console.log("-----------------------------")
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg' );
console.log('tem', alturaM, 'de alura e seu imc é de', imc);
console.log(nome, 'nasceu em', anoNascimento,'.');
console.log("-----------------------------") // tample strings
console.log(`${nome}, ${sobrenome},tem ${idade}, pesa ${peso} kg` );
console.log(`tem ${alturaM} de altura e seu imc é de: ${imc} `);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);