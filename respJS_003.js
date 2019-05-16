var pares = [];
function isPar(numero) {
    if(numero%2 == 0) {
        return true;
    } else {
        return false;
    }
}
function Q1() {
    console.log('Q1');
    var aux = Number.parseInt(document.getElementById('numeroQ1').value);
    // Segue aqui seu código 
    for(let i = 0; i <= aux; i++) {
        if(isPar(i)) {
            pares.push(i);
        }
    }
    console.log(pares);
    document.getElementById('RQ1').innerHTML = pares;
}



function Q1alt() {
    console.log('Q1');
    var pares2 = [];
    var aux = document.getElementById('numeroQ1').value;
    // Segue aqui seu código 
    for(let i = 0; i <= aux; i += 2) {
        pares2.push(i);
    }
    console.log(pares2);
    document.getElementById('RQ1alt').innerHTML = pares2;
}


