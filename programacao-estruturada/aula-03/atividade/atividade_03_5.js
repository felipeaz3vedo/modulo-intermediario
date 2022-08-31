// # a) Altere o arquivo Atividade_03_5.js para que seja usado o modo rigoroso (strict mode) de JavaScript.
// Ao recarregar a página, o texto deveria desaparecer. Por que isso aconteceu?

// 'use strict';

// x = 'Deu ';
// y = 'Certo!!!';
// z = x + y;
// document.getElementById('saida').innerHTML = z;

//não deu certo pois o strict mode não permite utilizar variáveis que não foram declaradas

// =======================================================================================================================

// # b) Altere o arquivo Atividade_03_5.js novamente, de modo que, mantendo o uso do modo rigoroso, o texto “Deu Certo!!!
// ” volte a aparecer ao recarregar a página.

'use strict';

const x = 'Deu ';
const y = 'Certo!!!';
const z = x + y;
document.getElementById('saida').innerHTML = z;
