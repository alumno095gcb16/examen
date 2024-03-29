// JavaScript Document


$(document).ready(function(e){
	
	var watchID = null;
	
	document.addEventListener("deviceready", Dispositivo_Listo, false);
	
	function Dispositivo_Listo(){
		Comienza();
	}
	
	function Comienza() {
		
		var opciones = { frequency: 2000};
		
		watchID = navigator.accelerometer.watchAcceleration(Correcto, Error, opciones);
		navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalizacion);
	}
	
	function Detener(){
		if (watchID){
			navigator.accelerometer.clearWatch(watchID);
			watchID = null;
		}
	}
	
	function Correcto(acceleration) {
		var element = document.getElementById('acelerometro');
		
		element.innerHTML = 'Aceleracion en X:' + acceleration.x + '<br />' +
		                    'Aceleracion en Y:' + acceleration.y + '<br />' +
							'Aceleracion en Z:' + acceleration.z + '<br />' +
							'intervalo: ' + acceleration.timestamp + '<br />';
	}
	
	function Error () {
		alert('Error!');
	}
	
	function Localiza(posicion){
		var element = document.getElementById('geolocalizacion');
		element.innerHTML = 'Latitud:'    + posicion.coords.latitude    + '<br />' +
		                    'Longitud:'    + posicion.coords.longitude    + '<br />' +
							 'Altitud:'    + posicion.coords.altitude   + '<br />' +
							 'Presicion:'    + posicion.coords.accuracy   + '<br />' +
							 'Presicion de altitud:'    + posicion.coords.altitudeAccuracy    + '<br />' +
							 'Direccion:'    + posicion.coords.heading    + '<br />' +
							 'Velocidad'    + posicion.coords.speed    + '<br />' +
							 'Latitud'    + posicion.coords.timestamp   + '<br />';
	}
	
	function ErrorLocalizacion(error) {
		alert('codigo: '   + error.code   + '\n' +
		'mensaje: '  + error.message  + '\n');
	}
});

	
	
