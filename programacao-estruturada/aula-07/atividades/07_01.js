// 1. Complete o corpo da função vazia() do arquivo Atividade_07_1.js de maneira que, ao clicarmos o botão OK da página Atividade_07_1.html,
// seja escrito "true" na página se o campo de entrada estiver vazio. Caso contrário, devemos escrever "false" na página.

const vazia = () => {
  const entrada = document.querySelector('#entrada').value;
  const saida = document.querySelector('#saida');

  entrada.length === 0
    ? (saida.innerHTML = 'true')
    : (saida.innerHTML = 'false');
};
