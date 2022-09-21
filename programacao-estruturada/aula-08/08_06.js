// 6. Complete o corpo da função idade() do arquivo Atividade_08_6.js de maneira que, ao clicarmos o botão OK da
// página Atividade_08_6.html, seja exibida a idade de uma pessoa cuja data de nascimento foi inserida como
// entrada. Leve em consideração apenas datas de nascimento após 1970.

const idade = () => {
  const nascimento = new Date(document.getElementById('data').value);
  const hoje = new Date();

  const idade_ms = hoje.getTime() - nascimento.getTime();
  const idade = new Date(idade_ms);
  console.log(idade.getUTCFullYear());

  const idade_ano = Math.abs(idade.getUTCFullYear() - 1970);

  const resposta = idade_ano + ' anos';

  document.getElementById('saida').innerHTML = resposta;
};
