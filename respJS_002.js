function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    // Segue aqui seu código 
    var resp = divide(x,y);
    console.log(resp);
    document.getElementById('RQ1').innerHTML = resp;
}

function divide(x, y) {
    return 'X / Y: ' + x + ' / ' + y + ' com Quociente = ' + Math.floor(x/y) + '; Resto = ' + (x%y);
}
