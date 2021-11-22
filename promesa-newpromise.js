console.log('promesas');

function sumarUno(numero) {
	var promesa = new Promise((resolve, reject) => {
		/* Operador ternario */
		/* numero >= 10 ? reject('El numero es mayor que 9') : null; */
		console.log(numero);
		if (numero >= 12) {
			reject('El numero es mayor que 9');
		}
		setTimeout(() => {
			resolve(numero + 1);
		}, 800);
	});
	return promesa;
}

/* PROMESAS HELL */
/* El .then indica, que cuando termine la promesa haga lo siguiente */

/* sumarUno(5).then((resp) => {
	console.log('promesas HELL');
	console.log(resp);
	sumarUno(resp).then((resp2) => {
		console.log(resp2);
	});
}); */
/* El problema aca es que no hay ningun beneficio directo por que siempre estoy indentando promesas */
console.log('');
console.log('');
/* Realizando una optimizacion en un promesa retornado otra promesa */
/* sumarUno(9)
	.then((resp) => {
		console.log('promesas optimizacion');
		console.log('a ', resp);
		return sumarUno(resp);
	})
	.then((resp) => {
		console.log('b ', resp);
		return sumarUno(resp);
	})
	.then((resp) => {
		console.log('c ', resp);
		//return sumarUno(resp);
	}); */

/* Realizando una tercera optimizacion en llamado multiple de promesas */
/* sumarUno(9)
	.then(sumarUno)
	.then(sumarUno)
	.then((resp) => {
		console.log(resp);
	}); */

/* Realizando una tercera optimizacion en llamado multiple de promesas y capturando errores*/
sumarUno(9)
	.then(sumarUno)
	.then(sumarUno)
	.then(sumarUno)
	.then((resp) => {
		console.log(resp);
	})
	.catch((error) => {
		console.log('Error en promesas');
		console.log(error);
	});

/* capturando el error en promesas*/
/* sumarUno(9)
	.then((resp) => {
		console.log(resp);
	})
	.catch((error) => {
		console.log('Error en promesas');
		console.log(error);
	});
 */
