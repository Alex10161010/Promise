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
			resolve(numero + 1);
			//reject('Error suma rapida');
		}, 300);
	});
};

/* Al fallar alguna promesa este termina, aunque nada mas fuese una Primise.All*/
/* El método Promise.all(iterable) devuelve una promesa que termina correctamente cuando todas las
promesas en el argumento iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo
pasado por la primera promesa que es rechazada.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
*/
Promise.all([sumarLento(5), sumarRapido(10)])
	.then((respuestas) => {
		const [resp1, resp2] = respuestas;
		console.log('Respuesta Lento:', resp1);
		console.log('Respuesta Rapido:', resp2);
		console.log('La suma de a + b =', resp1 + resp2);
	})
	.catch(console.log);
