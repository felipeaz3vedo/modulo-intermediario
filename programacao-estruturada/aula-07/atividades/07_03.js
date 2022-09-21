// 3. Complete o corpo da função proteger() do arquivo Atividade_07_3.js de maneira que, ao clicarmos o botão OK da página Atividade_07_3.html,
// seja escrita a versão protegida de um e-mail dado como entrada. Essa versão mostra apenas metade dos caracteres presentes antes do @, seguido por ... e,
// finalmente, a parte final do e-mail, que começa do @. Por exemplo, aluno@imd.ufrn.br é transformado em al...@imd.ufrn.br. Para este exercício, considere
// apenas que e-mails válidos serão inseridos.

const proteger = () => {
  var entrada = document.getElementById('email').value;
  var pos = entrada.indexOf('@');
  var antes = entrada.substring(0, pos);
  console.log('antes: ' + antes);
  var depois = entrada.slice(pos + 1, entrada.length);
  var antesFinal = antes.slice(0, Math.floor(antes.length / 2.0));
  console.log('antesFinal: ' + antesFinal);
  var resultado = antesFinal + '...@' + depois;

  document.getElementById('saida').innerHTML = resultado;
};
