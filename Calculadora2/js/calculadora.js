//Constantes electron
const {BrowserWindow}=require('electron').remote;
const app = require('electron').app;
const path = require('path');
const url = require('url');
//Otra ventana
let ventanaCalculadoraCientifica;

function ventanaCalculadoracientifica(){
	ventanaCalcCient = new BrowserWindow({width:1000, height:500});
	ventanaCalcCient.loadURL(url.format({
		pathname: path.join(__dirname, 'calccientifica.html'),
		protocol: 'file',
		slashes: true
	}));
	ventanaCalculadoracientifica.webContents.openDevTools();
	ventanaCalculadoracientifica.show();
}



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

function igual(){
	var valor1=document.calculadora.Operando1.value;
	var valor2=document.calculadora.Operando2.value;
	document.calculadora.Resultado.value= eval(valor1+operador+valor2);//eval=toma string que sea una operacion matematica y lo resuelve
}

function borrar(){
	operador="";
	document.calculadora.Operando1.value=0;
	document.calculadora.Operando2.value=0;
	document.calculadora.Resultado.value=0;
}