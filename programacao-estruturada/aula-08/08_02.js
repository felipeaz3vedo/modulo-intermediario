// 2. Complete o corpo da função difDatas() do arquivo Atividade_08_2.js de maneira que, ao clicarmos no
// botão OK da página Atividade_08_2.html, seja exibida a quantidade de milissegundos e a quantidade de
// dias entre as duas datas. Considere que a primeira data inserida (Data 1) é anterior à segunda data
// inserida (Data 2). Note que, neste exemplo, os arquivos disponibilizados apresentam como tratar datas
// em páginas HTML.

const difDatas = () => {
  const date1 = new Date(document.querySelector('#data1').value);
  const date2 = new Date(document.querySelector('#data2').value);
  const saida = document.querySelector('#saida');

  const milDif = date2.getTime() - date1.getTime();
  console.log(milDif);
  const daysDif = Math.floor(milDif / (24 * 60 * 60 * 1000));
  console.log(daysDif);

  saida.innerHTML = `Diferença em milissegundos: ${milDif} <br>
  Diferença em dias: ${daysDif}`;
};
