const url = 'https://reqres.in/api/users/100';

/* r */
fetch(url)
	.then((resp) => {
		if (resp.ok) {
			/* Trasforma la peticion en un json y retorna */
			return resp.json();
		} else {
			/* Si existe algun Error
			envia un mensaje personalizado */
			throw new Error('No existe el usuario 100');
		}
	})
	.then(console.log)
	.catch((error) => {
		console.log('Error en la peticion');
		console.log(error);
	});
