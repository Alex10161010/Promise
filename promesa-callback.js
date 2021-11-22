console.log('promesas');

/* supongamos que nuestra funcion es asincrona y que tarda cierto tiempo en
devolver una respuesta esto lo simulamos con ayuda de un  setTimeout*/
function sumarUno(numero, callback) {
	/* Como saber si existe un error en el callback se estable de la siguiente manera
        callback(1parametro, 2parametro)
        1 parametro: indica si existe algun error
        2 parametro: si no sucede ningun error el segundo argumento o despues son la respuesta
    */

	if (numero >= 4) {
		callback('Este numero es nuy alto no puedo procesarlo');
		return;
	}
	setTimeout(() => {
		/* En este caso se agrega el null en el primer parametro si no existe un error */
		callback(null, numero + 1);
	}, 800);
}

/* La respuesta sin un callback es un undefinido */

/* miestras cuando se ocupa un callback este espera a que pase el tiempo y ejecuta la accion despues */
/* Este ejemplo muestra  se vuelve un poco complicado*/
sumarUno(2, (error, resp) => {
	if (error) {
		console.log(error);
		return;
	}
	console.log(resp);
	sumarUno(resp, (error, resp2) => {
		if (error) {
			console.log(error);
			return;
		}
		console.log(resp2);
		sumarUno(resp2, (error, resp3) => {
			if (error) {
				console.log(error);
				return;
			}
			console.log(resp3);
		});
	});
});

/* La desventaja de este codigo es que es demasiado codigo para algo sensillo
    A esto se le conoce como el
    Infierno de los callback
*/
