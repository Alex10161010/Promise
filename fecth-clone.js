const url = 'https://reqres.in/api/users/1';

/* Clonacion de respuestas */
fetch(url).then((resp) => {
	resp
		.clone()
		.json()
		.then(({ data }) => {
			console.log(data);
		});

	resp
		.clone()
		.json()
		.then(({ data }) => {
			console.log(data.first_name);
		});

	resp.json().then(({ data }) => {
		console.log(data);
	});
});

/* Existe una manera de clonar una peticion usualmente esta se llama dos veces maximo es se vera cuando
veamos la parte del cache y el manejo de los datos


clone(): crea un clon de la respuesta que rompe la relacion que tiene javascript con los objecto
    resp.clone().json()
*/
