// # Abra a página Atividade_03_6.html e note que nada é exibido. Altere o arquivo Atividade_03_6.js de maneira que, usando o modo rigoroso de JavaScript e todas as variáveis apresentadas, ao recarregar a página, sejam exibidos os números 30, 70 e 100. Você pode criar novas variáveis.

// let x = 10;
// var x = 20;

// document.getElementById("saida1").innerHTML = a;
// {
//   let x = 30;
//   var x = 40;
//   document.getElementById("saida2").innerHTML = b;
// }
// document.getElementById("saida3").innerHTML = c;

'use strict';

let x = 10;
var y = 20;
const a = x + y;

document.getElementById('saida1').innerHTML = a;

{
    var z = 30;
    var w = 40;
    const b = z + w;
    document.getElementById('saida2').innerHTML = b;
}
const c = x + y + z + w;
document.getElementById('saida3').innerHTML = c;
