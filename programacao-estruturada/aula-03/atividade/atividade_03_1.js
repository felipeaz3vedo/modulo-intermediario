function soma_e_escreve() {
    var x = Number(document.getElementById('entrada1').value);
    var y = Number(document.getElementById('entrada2').value);

    const z = x + y;

    return (document.getElementById('saida').innerHTML = z);
}
