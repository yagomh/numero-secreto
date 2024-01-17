let listaDeNumerosSorteados = [];
let numLimite = 100;
let numeroSecreto;
let tentativas = 1;


//-----------------------------------------------------
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolh um número entre 1 e 30';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {
        rate: 1.2
    });
}
//-----------------------------------------------------

function gerarNumeroRandom() {
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroRandom();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {

        exibirTextoNaTela('h1', 'ACERTOU!');

        let palavraTentativa = tentativas > 1 ? 'TENTATIVAS' : 'TENTATIVA';

        let msgTentativa = `VOCÊ DESCOBRIU O NÚMERO SECRETO COM ${tentativas} ${palavraTentativa}!!!`;

        exibirTextoNaTela('p', msgTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        chute > numeroSecreto ? exibirTextoNaTela('p', 'O número secreto é menor') : exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMsgInicial() {
    numeroSecreto = gerarNumeroRandom();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numLimite}`);
}


exibirMsgInicial();



// //--------------------------------------------------------



// let listaGenerica = [];

// let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];


// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');


// console.log(linguagensDeProgramacao.length );
// --------------------------------------------


// let peso = 84;
// let altura = 1.87; 

// function verificarChute(){
//     let calculaImc = imc(peso, altura);
//     alert(`imc é de: ${calculaImc}`);
// }

// function imc(peso, altura) {
//     let imcCalc = peso / (altura*altura);
//     return imcCalc.toFixed(2);
// }


// verificarChute();























// //--------------------------------------------------------




// function msgHelloWorld(){
//     console.log('Hello World!!');
// }

// function showName(name){
//     console.log(`Hello ${name}!!!`);  
// }

// function showDobro(num1){
//     return (num1 * 2);
// }

// function showMedia(num1, num2, num3){
//     return (num1 + num2 + num3)/3;
// }

// function maiorMenor(num1, num2){
//         return num1 > num2 ? num1 : num2;
//     }
// }

// function potenciacao(num1){
//     return (num1 * num1)
// }

// function desafio08(){
// msgHelloWorld();
// showName(prompt('Digite seu nome: '));
// let num1 = parseInt(prompt('Digite o 1º numero: ')); 
// let num2 = parseInt(prompt('Digite o 2º numero: ')); 
// let num3 = parseInt(prompt('Digite o 3º numero: '));

// console.log(`O dobro do 1º número é: ${showDobro(num1)}`);
// console.log(`A média dos 3 números é: ${showMedia(num1, num2, num3)}`);
// console.log(`Entre número digitado 1º e 2º o maior é: ${maiorMenor(num1, num2)}`);
// console.log(`A potenciação do 1º número é: ${potenciacao(num1)}`);
// }