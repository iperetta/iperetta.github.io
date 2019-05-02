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

console.log(EsfericaParaCartesiana(1, Math.PI/3, Math.PI/6));
console.log(EsfericaParaCartesiana(3, Math.PI/6, Math.PI/3, 5));
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
console.log(P + " " + Q);



