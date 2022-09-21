// 1. Complete o corpo da função exibirData() do arquivo Atividade_08_1.js de maneira que,
// ao clicarmos no botão OK da página Atividade_08_1.html, seja exibida a data de hoje no formato
// brasileiro, ou seja, DD/MM/AAAA. Lembre-se que meses são armazenados de 0 a 11.

const exibirData = () => {
  const saida = document.querySelector('#saida');
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();

  saida.innerHTML = `${day}/${month}/${year}`;
};
