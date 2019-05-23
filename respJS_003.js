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
    var aux = Number.parseInt(document.getElementById('numeroQ1').value);function isPrimo(numero) {
    if(numero === 2) { return true; } 
    else if (numero < 2 || numero % 2 === 0) {	return false; }
    for(let i = 3; i <= Math.sqrt(numero); i += 2) {
        if(numero % i === 0) { return false; }
    }
    return true;
}
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



var primos = [];
function Q2() {
    console.log('Q2');
    var aux = Number.parseInt(document.getElementById('numeroQ2').value);
    // Segue aqui seu código 
    primos.push(2);
    for(let numero = 3; numero <= aux; numero += 2) {
            let chk = true;
	    for(let i = 0; i < primos.length; i++) {
		if(numero % primos[i] === 0) {
		    chk = false;
                    break;
		}
	    }
            if(chk) { primos.push(numero); }
    }
    console.log(primos);
    document.getElementById('RQ2').innerHTML = primos;
}

function isPrimo(numero) {
    if(numero === 2) { return true; } 
    else if (numero < 2 || numero % 2 === 0) {	return false; }
    for(let i = 3; i <= Math.sqrt(numero); i += 2) {
        if(numero % i === 0) { return false; }
    }
    return true;
}

function Q2alt() {Number
    var primos2 = [];
    console.log('Q2alt');
    var aux = Number.parseInt(document.getElementById('numeroQ2').value);
    // Segue aqui seu código 
    for(let i = 0; i <= aux; i++) {
        if(isPrimo(i)) { primos2.push(i); }
    }
    console.log(primos2);
    document.getElementById('RQ2alt').innerHTML = primos2;
}

var listaStrings = [];

function acrescentaSTR() {
	var aux = document.getElementById('novaString').value;
	listaStrings.push(aux);
	document.getElementById('novaString').value = "";
	document.getElementById('auxQ3').innerHTML = listaStrings;
	console.log(listaStrings);
}

function Q3() {
    console.log('Q3');
    for(let i = 0; i < listaStrings.length; i++) {
		listaStrings[i] = listaStrings[i].toUpperCase();
	}
    console.log(listaStrings);
    document.getElementById('RQ3').innerHTML = listaStrings;
}

function QuickSort_(A, lo, hi) { // X é array

	function partition(A, lo, hi) {
		var pivot = A[hi];
		var i = lo;
		var aux;
		for(let j = lo; j < hi; j++) {
			if(A[j] < pivot) {
				aux = A[i];
				A[i] = A[j];
				A[j] = aux;
				i++;
			}
		}
		aux = A[i];
		A[i] = A[hi];
		A[hi] = aux;
		return i;
	}

	var p;
    if(lo < hi){
        p = partition(A, lo, hi);
        QuickSort_(A, lo, p - 1);
        QuickSort_(A, p + 1, hi);
    }
}

function QuickSort(X) {
	var Y = Array.from(X);
	QuickSort_(Y, 0, Y.length-1);
	return Y;
}

function Q4() {
    console.log('Q4');
    var aux = document.getElementById('numerosQ4').value;
    var numerosQ4 = aux.split(';');
    var ordenados;
    for (let i = 0; i < numerosQ4.length; i++) {
		numerosQ4[i] = Number.parseFloat(numerosQ4[i]);
	}
	console.log('****' + numerosQ4);
    ordenados = QuickSort(numerosQ4);
    console.log(ordenados);
    document.getElementById('RQ4').innerHTML = ordenados;
}


// =================

var matrizA = [];
var matrizB = [];

function mostraMatriz(M) {
	mhtml = "<table>";
	for (let i = 0; i < M.length; i++) {
		mhtml += "<tr><td>|</td>";
		for (let j = 0; j < M[i].length; j++) {
			mhtml += "<td style=\"text-align:right\">" + 
				M[i][j] + "</td>";
		}
		mhtml += "<td>|</td></tr>";
	}
	mhtml += "</table>";
	return mhtml;
}

function appendMA() {
	var aux = (document.getElementById('linhaA').value).split(';');
	document.getElementById('linhaA').value = "";
	for (let i = 0; i < aux.length; i++) {
		aux[i] = Number.parseFloat(aux[i]);
	}
	matrizA.push(aux);
	console.log(matrizA);
	document.getElementById('MA').innerHTML = mostraMatriz(matrizA);
}

function appendMB() {
	var aux = (document.getElementById('linhaB').value).split(';');
	document.getElementById('linhaB').value = "";
	for (let i = 0; i < aux.length; i++) {
		aux[i] = Number.parseFloat(aux[i]);
	}
	matrizB.push(aux);
	console.log(matrizB);
	document.getElementById('MB').innerHTML = mostraMatriz(matrizB);
}

function multMatrix(A, B) { // mxn nxp
	var C = [];
	for(let i = 0; i < A.length; i++) {
		aux = [];
		for(let j = 0; j < B[0].length; j++) {
			aux.push(0);
		}
		C.push(aux);
	}
	for(let i = 0; i < A.length; i++) {
		for(let j = 0; j < B[0].length; j++) {
			for(let k = 0; k < B.length; k++) {
				C[i][j] += A[i][k] * B[k][j];
			}
		}
	}
	return C;
}

function Q5() {
    console.log('Q5');
    var C = multMatrix(matrizA, matrizB);
    console.log(C);
    document.getElementById('RQ5').innerHTML = mostraMatriz(C);
}
