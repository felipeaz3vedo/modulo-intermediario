// 3. Complete o corpo da função diasNoMes() do arquivo Atividade_08_3.js de maneira que, ao clicarmos no
// botão OK da página Atividade_08_3.html seja exibida a quantidade de dias, no ano atual, do mês dado como
// entrada, o qual deverá ser um valor entre 1 (janeiro) e 12 (dezembro).
// DICA: O dia 0 é o último dia do mês anterior

const diasNoMes = () => {
  const month = Number(document.getElementById('mes').value);

  const today = new Date();
  const year = today.getFullYear();

  const days = new Date(year, month, 0).getDate();

  const response = `O mês de ${month} do ano ${year} tem ${days} dias`;

  document.getElementById('saida').innerHTML = response;
};
