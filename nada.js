// var r = 1;
// var phi = Math.PI/3; // 60°
// var theta = Math.PI/6; // 30°
// console.log("raio= " + r + "; phi= " + phi + "rad"
//     + "; theta= " + theta + "rad");
// var x = r*Math.cos(theta)*Math.sin(phi);
// var y = r*Math.sin(theta)*Math.sin(phi);
// var z = r*Math.cos(phi);
// console.log("x= " + x + "; y= " + y + "; z= " + z);

// r = 3;
// phi = Math.PI/6; // 60°
// theta = Math.PI/3; // 30°
// console.log("raio= " + r + "; phi= " + phi + "rad"
//     + "; theta= " + theta + "rad");
// x = r*Math.cos(theta)*Math.sin(phi);
// y = r*Math.sin(theta)*Math.sin(phi);
// z = r*Math.cos(phi);
// console.log("x= " + x + "; y= " + y + "; z= " + z);

// r = 2;
// phi = Math.PI/4; // 60°
// theta = Math.PI/4; // 30°
// console.log("raio= " + r + "; phi= " + phi + "rad"
//     + "; theta= " + theta + "rad");
// x = r*Math.cos(theta)*Math.sin(phi);
// y = r*Math.sin(theta)*Math.sin(phi);
// z = r*Math.cos(phi);
// console.log("x= " + x + "; y= " + y + "; z= " + z);

function round(numero, casasdecimais) {
    return Math.round(numero*Math.pow(10, casasdecimais))/Math.pow(10, casasdecimais);
}

function EsfericaParaCartesiana(r, phi, theta, casasdecimais=3) {
    //console.log("raio= " + r + "; phi= " + phi + "rad" + "; theta= " + theta + "rad");
    let x = round(r*Math.cos(theta)*Math.sin(phi), casasdecimais);
    let y = round(r*Math.sin(theta)*Math.sin(phi), casasdecimais);
    let z = round(r*Math.cos(phi), casasdecimais);
    return "x= " + x + "; y= " + y + "; z= " + z;
}
var x = 2; // () -> f() -> *,/ -> +,-

console.log(EsfericaParaCartesiana(1, Math.PI/3, Math.PI/6));
console.log(EsfericaParaCartesiana(3, Math.PI/(6*x), Math.PI/3, 5));
console.log(EsfericaParaCartesiana(2, Math.PI/4, Math.PI/4));


function XXX(arg) {

	if (arg === 0) {
		var P = 1;
		let Q = 2;
		console.log(P + " " + Q);
	}
	//console.log(P + " " + Q);
}
XXX(0);
//console.log(P + " " + Q);

var rrr;
if (1 == "1.0") { console.log("True"); } else { console.log("False"); } 
if (1 === "1.0") { console.log("True"); } else { console.log("False"); } 
if (!rrr) { console.log("True"); } else { console.log("False"); } 

let x1 = "5.0";
switch(x1) {
	case 5: console.log("A"); break;
	case "teste": console.log("B"); break;

}


function fat(numero) {
	return (numero === 0 || numero === 1)? 1 : fat(numero-1)*numero;
}
console.log(fat(5));
console.log(fat(12));
console.log(fat(15));
console.log(fat(30));


//else if ((!a&&!b) || (!a&&!c) || (!b&&!c))

