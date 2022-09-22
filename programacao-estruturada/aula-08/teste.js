function FirstFactorial(num) {
  let aux = 1;
  let acc = 1;

  while (aux <= num) {
    acc *= aux;
    aux++;
  }

  return acc;
}

console.log(FirstFactorial(4));
