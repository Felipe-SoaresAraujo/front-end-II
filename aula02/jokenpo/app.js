
const opcoes = ["pedra", "papel", "tesoura"]; //opções para jogar


const random = Math.floor(Math.random() * opcoes.length); //escolha do computador
console.log(random, opcoes[random]);

let jogador = prompt("Escolha [1]Pedra, [2]Papel, [3]Tesoura");
jogador = Number(jogador)-1; 


if (jogador == random){
    Alert("Empate!");
} else if(jogador == 0 && random == 1){
    Alert("Você perdeu!");
} else if(jogador == 0 && random == 2){
    Alert("Você ganhou!");
};
