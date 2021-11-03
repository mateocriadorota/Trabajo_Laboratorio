"use strict";
document.getElementById("boton").onclick = function(){	
	validarPreguntas();
}	

function validarPreguntas(){
	var formulario = document.getElementById("formu");
	var Nota = 0;
	//Pregunta 1
	for(var i = 0; i<=3; i++){
		if(formulario.Pregunta1[i].checked == true){
			var index = i;
		}
	}
	switch(index){
		case 0:
			document.getElementById("peru").style.background = "red";
			document.getElementById("peruT").style.background = "red";
			document.getElementById("Lima").style.background = "green";
			document.getElementById("LimaT").style.background = "green";
			break;
		case 1:
			document.getElementById("Lima").style.background = "green";
			document.getElementById("LimaT").style.background = "green";
			Nota = Nota + 2.5;
			break;
		case 2:
			document.getElementById("Montevideo").style.background = "red";
			document.getElementById("MontevideoT").style.background = "red";
			document.getElementById("Lima").style.background = "green";
			document.getElementById("LimaT").style.background = "green";
			break;
		case 3:
			document.getElementById("Caracas").style.background = "red";
			document.getElementById("CaracasT").style.background = "red";
			document.getElementById("Lima").style.background = "green";
			document.getElementById("LimaT").style.background = "green";
			break;
	}
	//Pregunta 2
	index = 0;
	for(i = 0; i<=3; i++){
		if(formulario.Pregunta2[i].checked == true){
			index = i;
		}
	}
	switch(index){
		case 0:
			document.getElementById("Madrid").style.background = "red";
			document.getElementById("MadridT").style.background = "red";
			document.getElementById("Brasilia").style.background = "green";
			document.getElementById("BrasiliaT").style.background = "green";
			break;
		case 1:
			document.getElementById("Brasil").style.background = "red";
			document.getElementById("BrasilT").style.background = "red";
			document.getElementById("Brasilia").style.background = "green";
			document.getElementById("BrasiliaT").style.background = "green";
			break;
		case 2:
		
			document.getElementById("Brasilia").style.background = "green";
			document.getElementById("BrasiliaT").style.background = "green";
			Nota = Nota + 2.5;
			break;
		case 3:
			document.getElementById("Lisboa").style.background = "red";
			document.getElementById("LisboaT").style.background = "red";
			document.getElementById("Brasilia").style.background = "green";
			document.getElementById("BrasiliaT").style.background = "green";
			break;

	}
	//Pregunta 3
	var text = document.getElementById("AconcaguaT").value;
	var box = document.getElementById("caja");
	
	if(text.toUpperCase() == "VERDADERO"){
		box.innerHTML = "CORRECTO!!";
		box.style.color = "green"
		Nota = Nota + 2.5;
	}
	else{
		box.innerHTML = "INCORRECTO!!";
		box.style.color = "red"
	}

	//Pregunta 4
	 if(formulario.Pregunta4[0].checked == true && formulario.Pregunta4[2].checked == true&&
	 	formulario.Pregunta4[1].checked != true && formulario.Pregunta4[3].checked != true){
		Nota = Nota + 2.5;
		document.getElementById("España").style.background = "green";
		document.getElementById("EspañaT").style.background = "green";

		document.getElementById("Francia").style.background = "green";
		document.getElementById("FranciaT").style.background = "green";

	}
	else{
		index = 0;
		for(i = 0; i<=3; i++){
			if(formulario.Pregunta4[i].checked == true){
				index = i;
				if (index == 1) {
					document.getElementById("Egipto").style.background = "red";
					document.getElementById("EgiptoT").style.background = "red";
				}
				else{
					if(index == 3){
						document.getElementById("Rusia").style.background = "red";
						document.getElementById("RusiaT").style.background = "red";	
					}
				}

			}
		}
		
		document.getElementById("España").style.background = "green";
		document.getElementById("EspañaT").style.background = "green";

		document.getElementById("Francia").style.background = "green";
		document.getElementById("FranciaT").style.background = "green";
	}

	var calificacion = document.getElementById("calificacion");
	if(Nota >= 6){
		calificacion.innerHTML = "Su calificacion es:"+Nota;
		calificacion.style.color = "green";
	}
	else{
		calificacion.innerHTML = "Su calificacion es:"+Nota;
		calificacion.style.color = "red";
	}
	document.getElementById("boton").style.display = "none";
	return false;
}
