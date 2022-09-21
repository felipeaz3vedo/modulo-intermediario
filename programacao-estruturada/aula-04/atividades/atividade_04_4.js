/* 4 - Você já aprendeu o Teorema de Pitágoras? Ele diz que em qualquer triângulo retângulo, o quadrado da hipotenusa é igual à soma do quadrado dos catetos.
- Ilustração do teorema de pitágoras
Ilustração do teorema de pitágoras
Neste exercício, vamos desenvolver uma página que recebe os valores da hipotenusa e dos dois catetos e escrever "true" quando o triângulo for retângulo, ou seja, se o quadrado da hipotenusa é igual à soma do quadrado dos catetos. Caso contrário, escreveremos "false" na página. Veja um exemplo abaixo:

- Resultado esperado do exercício
hipotnusa: 5
cateto: 4
cateto: 3
true



a) Defina a função ler_entrada, que recebe o nome de um campo numérico e retorna o valor lido desse campo.
b) Defina a função escrever_saida, que recebe o nome de um campo e um valor e escreve no campo recebido como argumento o valor, também recebido como argumento.
c) Defina a função quadrado, que recebe um número x e retorna x2 (lembre-se que x2 = x).
d) Usando as funções acima, escreva o campo da função pitagoras, a fim de concluir o exercício. */

//a)
function ler_entrada(entrada) {
    return Number(document.getElementById(entrada).value);
}

//b
function escrever_saida(elemento, resultado) {
    return (document.getElementById(elemento).innerHTML = resultado);
}

//c
function quadrado(valor) {
    return valor ** 2;
}

//d
function pitagoras() {
    const hipotenusa = ler_entrada('hipotenusa');
    const cateto1 = ler_entrada('cateto1');
    const cateto2 = ler_entrada('cateto2');

    const quadradoHipotenusa = quadrado(hipotenusa);
    const quadradoCateto1 = quadrado(cateto1);
    const quadradoCateto2 = quadrado(cateto2);

    const resultado = quadradoHipotenusa === quadradoCateto1 + quadradoCateto2;

    escrever_saida('saida', resultado);
}
