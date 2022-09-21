// 5. Complete o corpo da função inserir() do arquivo Atividade_07_5.js de maneira que, ao clicarmos o botão OK da página Atividade_07_5.html,
// o "Texto a inserir" dado como entrada seja inserido no texto "Entrada" na "Posição" especificada.

const inserir = () => {
  const entrada = document.querySelector('#entrada').value;
  const insercao = document.querySelector('#insercao').value;
  const posicao = +document.querySelector('#posicao').value;
  const saida = document.querySelector('#saida');

  const antes = entrada.slice(0, posicao);
  const depois = entrada.slice(posicao);

  saida.innerHTML = antes + insercao + depois;
};
