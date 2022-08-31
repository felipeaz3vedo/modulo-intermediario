 
//     1 - Identificadores 

//     # Podem ser iniciadas com _, $ ou letras;
//     # Podem conter _, $, letras e dígitos;
//     # Não podem conter palavras reservadas do JS

//==================================================================================================================================
//    2 - Atribuições

//    # Usando sublinhado => valor_total
//    # Upper Camel-Case => ValorTotal
//    # Lower Camel-Case => valorTotal (padrão)

//    2 - Declarando várias variáveis 

//    # O js permite declarar mais de uma varíavei na mesma linha
        
        var a = 'Olá mundo ', b = 20, valorTotal = a + b  
        console.log(a, b, valorTotal); // => Olá mundo 20 Olá mundo 20
        
        var valorTotal; 
        console.log(valorTotal); // => Olá mundo 20
        

//    # Caso não seja atribuído nenhum valor a variável ela terá valor undefined
        
        var c;
        console.log(c); // => undefined

//==================================================================================================================================
//     3 - Hoisting

//     # As declarações são movidas para o topo do documento
        
        d = 100;
        console.log(d); // => 100
        var d;

//     # As atribuições não são içadas
        
        var e;
        console.log(e); // => undefined
        e = 100


//     # O strict mode ('use strict') NO TOPO do arquivo não permite içamentos
        
        e = 100;
        console.log(e); // => undefined
        var e;

//     # O strict mode ('use stict') NO TOPO do arquivo não pormite utilizar varíáveis que ainda não foram declaradas
        
        f = 100;
        console.log(f); // => undefined

//     # const e let não são içadas

//==================================================================================================================================
//     4 - Escopo 
        
//     # var tem escopo global e caso seja declarada dentro de uma funçao tem escopo de função


//     # a partir do ES6 foi introduzido o escopo de bloco que são delimitados por chaves (var não pode ter escopo de bloco)
        
{
                var g = 100;
                let h = 100;

        }

        console.log(g); // => 100
        console.log(h); // => undefined

//     # let e const não podem ser declaradas mais de um vez (let pode ter seu valor reatribuído)

//==================================================================================================================================
//     4 - Constantes

//     # A atribuição do valor de uma const tem que acontecer imediatamente a sua declaração

        // const PI;
        // const PI = 3.14; // => ERRO

//     # Quando forem objetos poderão ter suas propriedades alteradas

//     # Quando forem arrays poderão ter seus elementos alterados

//==================================================================================================================================
//     5 - Atribuições

        let i = i + 2
        i += 2

        i = i - 2
        i -= 2

        i = i * 2
        i *= 2

        i = i / 2
        i /= 2
        
        i = i % 2 
        i %= 2
        
        










        

