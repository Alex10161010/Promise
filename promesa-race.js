function sumarLento(numero) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(numero + 1);
		}, 800);
	});
}

const sumarRapido = (numero) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			//resolve(numero + 1);
			reject('Error suma rapida');
		}, 300);
	});
};

/* Promise.all([sumarLento(5), sumarRapido(6)]).then((respuestas) => {
	console.log(respuestas);
}); */

/* El método Promise.race(iterable) retorna una promesa que se cumplirá o no tan pronto como una de las
promesas del argumento iterable se cumpla o se rechace, con el valor o razón de rechazo de ésta. */

/* Cuando alguna de las promesas da error va a cancelar el proceso */
Promise.race([sumarLento(5), sumarRapido(6)])
	.then((respuesta) => {
		console.log(respuesta);
	})
	.catch(console.error);
/* Nota:
Esta opcion de promeesa, prodemos determinar que es mas rapido si la lectura de internet o la lectura local
en el dispositivo
 */