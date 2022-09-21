// 6. Complete o corpo da função verificar_minuscula() do arquivo Atividade_07_6.js de maneira
// que, ao clicarmos o botão OK da página Atividade_07_6.html, seja escrito "true" na página, se o campo de entrada estiver com todas as
// letras minúsculas. Caso contrário, devemos escrever "false" na página.

const verificar_minuscula = () => {
  const entrada = document.querySelector('#entrada').value;
  const saida = document.querySelector('#saida');

  saida.innerHTML = String(entrada === entrada.toUpperCase());
};
