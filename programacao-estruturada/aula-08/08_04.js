// 4. Complete o corpo da função fds() do arquivo Atividade_08_4.js de maneira que, ao clicarmos no botão OK da
// página Atividade_08_3.html seja exibido true apenas se a data selecionada for em um final de semana.
// Caso contrário, deverá ser exibido false.

const fds = () => {
  const date = new Date(document.querySelector('#data').value);
  const saida = document.querySelector('#saida');

  const checkDay = date.getDay() === 5 || date.getDay() === 6;

  saida.innerHTML = checkDay;
};
