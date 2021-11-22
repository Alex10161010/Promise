/* Si queremos obtener todo el contenido de texto */

fetch('no-encontrado2.html')
	.then((resp) => {
		if (resp.status != 404 || resp.ok) {
			return resp.text();
		} else {
			throw new Error('No existe el archivo');
		}
	})
	.then((html) => {
		/* Un error dentro de la promesa va a dispar el error */
		let body = document.querySelector('body');
		body.innerHTML = html;
	})
	.catch((error) => {
		console.log('Error en la peticion');
		console.log(error);
	});
