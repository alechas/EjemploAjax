
function MostrarError()
{
	//var funcionAjax=$.ajax({url:"nexoNoExiste.php",type:"post",data:{queHacer:"MostrarTexto"}});
	//funcionAjax.done(function(retorno){
	//	$("#principal").html(retorno);
	//	$("#informe").html("Correcto!!!");
	//});
	//funcionAjax.fail(function(retorno){
	//		$("#principal").html("error :(");
	//	$("#informe").html(retorno.responseText);		
	//});
	//funcionAjax.always(function(retorno){
	//	//alert("siempre "+retorno.statusText);
	//});
	//$.ajax(); // devuelve RETORNO o CALLBACK  // es el retorno, devuelve ERROR o Correcto, 
	//Correcto, devuelve en codigo(PHP,ASP) el resultado
	//Error, devuelve el error

	$.ajax({url:"NoExistelalala.php"})
	.then(function(respuesta){ //envia


		$("#principal").html(respuesta);
		$("#informe").html("Correcto!!!");
		// console.info("primero, antes de alert",respuesta);
		// alert("primero" + respuesta);
		// console.info("primero",respuesta);
	},function(error){ //recive
		$("#principal").html(":(");
		$("#informe").html(error.responseText);
		// alert("Segundo" + error);
		// console.info("segundo",error);
	});
}


function MostrarSinParametros()
{
	// var funcionAjax=$.ajax({url:"nexoTexto.php"});

	// funcionAjax.done(function(retorno){
	// 	$("#principal").html(retorno);
	// 	$("#informe").html("Correcto!!!");
	// });
	// funcionAjax.fail(function(retorno){
	// 	$("#principal").html(":(");
	// 	$("#informe").html(retorno.responseText);	
	// });
	// funcionAjax.always(function(retorno){
	// 	//alert("siempre "+retorno.statusText);

	// });


}

function Mostrar(queMostrar)
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}

function MostarLogin()
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}