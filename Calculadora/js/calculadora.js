//Variable global
var operador="";
function numero(num){
	if (operador=="") { //Operando1
		var valorinicial=document.calculadora.Operando1.value;
		if (valorinicial=="0") {
			document.calculadora.Operando1.value="";
		}
		//concatena los valores de num
		//con los del operando1
		document.calculadora.Operando1.value=
		document.calculadora.Operando1.value + num;

	}
	else{ //Operando2
		var valorinicial=document.calculadora.Operando2.value;
		if (valorinicial=="0") {
			document.calculadora.Operando2.value="";
		}
		document.calculadora.Operando2.value=
		document.calculadora.Operando2.value + num;
	}
}

function operadores(ope){
	operador=ope
}