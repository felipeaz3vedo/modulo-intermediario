// 2. Complete o corpo da função truncar() do arquivo Atividade_07_2.js de maneira que, ao clicarmos o botão OK da página Atividade_07_2.html, 
// seja escrita a quantidade especificada de caracteres do texto dado como entrada.

const truncar = () => {
  const texto = document.querySelector('#texto').value;
  const quantidade = +document.querySelector('#quantidade').value;
  const saida = document.querySelector('#saida');

  const truncado = texto.slice(0, quantidade);

  saida.innerHTML = truncado;
};
