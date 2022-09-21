/* 3 - Complete o corpo da função positivo do arquivo Atividade_04_3.js, de forma que essa função escreva, no parágrafo de identificador “saída”, o valor "true", se os dois valores
passados como entrada forem maiores que zero, ou "false", se pelo menos um dos dois valores passados como entrada for menor ou igual a zero. Você deverá fazer uso das funções
ler_entrada, escrever_saida e maior, as quais também precisarão ter seus corpos definidos. */

function positivos() {
  const x = ler_entrada('entrada1');
  const y = ler_entrada('entrada2');

  const z = [x, y];

  const result = maior(z, 0);

  escrever_saida('saida', result);
}

function ler_entrada(input) {
  return Number(document.getElementById(input).value);
}

function escrever_saida(element, result) {
  return (document.getElementById(element).innerHTML = result);
}

function maior(values, threshold) {
  return values.every(curr => curr > threshold);
}

