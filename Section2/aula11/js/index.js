// No ambiente do navegasdor (client-side javaScript), o objeto global window disponibiliza 3 metodos nativos simples para exibir caixas de dialogo interativas diretamente na inteface do user 

// importante saber 
// Bloqueantes (sincrono) enquanto qulaquer um dessas tês caixas estiver aberta na tela, a execuçõ do código JS e a renderização da página ficam congeladas até que o usário responda.

//Uso no Desenvolvimento Moderno: Como a aparencia dessas caixas depende do navegador/sistema operacional e não pode ser personalizada por CSS, no mercado de trabalho elas costumam ser substituidas por modais personalizados criados em HTML/CSS, no entanto para testes rápidos, projetos simples e estudos de lógica elas são super praticas 


// 1. Alert()
// exibe uma caixa de mensagem simples apenas com um botão de ok.É usado para emitir avisos ou notificações para o usuário.
// retorna undefined 

alert('Atençaõ: seus dados foram salvos')

// 2. confirm()
// exibe uma caixa de confirmação com uma mensagem e dois botões ( ok e cancelar) é muito utilizado para confirmar ações destrutivas ( como apagar um registro).
//retorna um valor boelano ( ok = ture | cancelar = false)

const desejaExcluir = confirm("tem certeza que deseja deletar este item?")

if (desejaExcluir) {
    console.log(`item deletado com sucesso.`);
} else { 
    console.log('Operação cancelada pelo usuário');
};


//3. prompt()
// exibe uma caixa com um campo de texto para o usuário digitar um valor, acompanhado dos botões ( ok e cancel), retorna a string digitada pelo user se ele cancelar ou fechar a janela, o retorno será null. 

const nomeUsuario = prompt('por favor digite seu nome:');

if(nomeUsuario !== null && nomeUsuario.trim() !== ""){
    console.log(` bem vindo ${nomeUsuario}!`)
} else {
    console.log("o usuario cancelou ou não digitou o nome.")
}; 




let primeiroNumero = prompt('Digite um valor: ');
let segundoNumero = prompt('Digire outro valor:');
primeiroNumero = Number (primeiroNumero);
segundoNumero = Number(segundoNumero);

alert(`Resultado: ${primeiroNumero + segundoNumero}`);