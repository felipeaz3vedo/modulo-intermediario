// 5. Complete o corpo da função converter() do arquivo Atividade_08_5.js de maneira que, ao clicarmos no
// botão OK da página Atividade_08_5.html, seja exibido o número em horas e minutos que corresponde à
// quantidade de minutos dado como entrada. Por exemplo, para 200 minutos, deverá ser exibido 3h20m.

const converter = () => {
  const minutos = document.querySelector('#minutos').value;
  const saida = document.querySelector('#saida');

  saida.innerHTML = `${Math.trunc(minutos / 60)}h${minutos % 60}m`;
};
