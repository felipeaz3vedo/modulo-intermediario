// 4. Complete o corpo da função maiuscula() do arquivo Atividade_07_4.js de maneira que, ao clicarmos o botão OK da página Atividade_07_4.html,
// o texto dado como entrada seja escrito com a primeira letra maiúscula.

const maiuscula = () => {
  const entrada = document.querySelector('#entrada').value;
  const saida = document.querySelector('#saida');

  saida.innerHTML = entrada[0].toUpperCase().concat(entrada.slice(1));
};
