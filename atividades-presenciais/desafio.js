
const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'impressora', qtde: 1, preco: 649.5, fragil: true },
    { nome: 'caderno', qtde: 4, preco: 27.1, fragil: false },
    { nome: 'lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'tesoura', qtde: 1, preco: 19.2, fragil: true }
  ];
  
  const media = carrinho
    .filter(item => item.fragil === true)
    .map(curr => curr.qtde * curr.preco)
    .reduce((acc, curr, _, array) => acc + curr / array.length, 0);