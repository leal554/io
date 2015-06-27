function Validar(){
	var resp = true;
	var msg = "<h1>ERROS:</h1>";

	if(document.form1.nome.value.length < 10){
		alert("O nome dever� ter pelo menos 10 caracteres...");
			msg = msg + "O nome dever� ter pelo menos 10 caracteres... <br />";
			document.getElementById("nome").className = "bordaRed";

		resp = false;
	}
	else
		document.getElementById("nome").className = "bordaGreen";

	if(document.form1.email.value.indexOf("@") == -1 ||
		document.form1.email.value == ""){
		alert("Digite um email v�lido!");

		msg = msg + "Digite um email v�lido! <br />";

		document.getElementById("email").className = "bordaRed";

		resp = false;
	}
	else
		document.getElementById("email").className = "bordaGreen";

	if(isNaN(document.form1.idade.value) ||
		document.form1.idade.value == ""){
		alert("Digite uma idade v�lida!");

		msg = msg + "Digite uma idade v�lida! <br />";

		document.getElementById("idade").className = "bordaRed";

		resp = false;
	}
	else
		document.getElementById("idade").className = "bordaGreen";

	if(document.form1.assunto.value.length < 10){
		alert("O assunto dever� ter pelo menos 10 caracteres...");
			msg = msg + "O assunto dever� ter pelo menos 10 caracteres... <br />";
			document.getElementById("assunto").className = "bordaRed";

		resp = false;
	}
	else
		document.getElementById("assunto").className = "bordaGreen";

				
	if(!resp){
		document.getElementById("erro").innerHTML = msg;
		document.getElementById("erro").style.display="block";
	}
	else{
		alert("Contato efetuado com sucesso! responderemos assim que poss�vel, obrigado!");
		msg = msg + "Contato efetuado com sucesso! responderemos assim que poss�vel, obrigado! <br />";
		document.getElementById("nome").className = "bordaGreen";
		document.getElementById("email").className = "bordaGreen";
		document.getElementById("idade").className = "bordaGreen";
		document.getElementById("assunto").className = "bordaGreen";
	}


	return resp;
}