//GRUPO: Felipe S, David, Breno, Radrigo, Ruan

import soma from './soma.js';
import subtracao from './subtracao.js';
import multiplicacao from './multiplicacao.js';
import divisao from './divisao.js';


let escolhaUser = prompt("Esolha a operação [1]somar, [2]subtrair, [3]multiplicação, [4]divisão.");

let valoresUserA = prompt("Digite o primero valor: ");
let valoreUserB = prompt("Digite o segundo valor: ");

valoresUserA = parseInt(valoresUserA);
valoreUserB = parseInt(valoreUserB);


switch (escolhaUser) {
    case '1':
        alert(soma(valoresUserA,valoreUserB));
        
        break;

    default:
        break;
}


