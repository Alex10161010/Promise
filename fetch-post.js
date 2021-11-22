const url = 'https://reqres.in/api/users';

let usuario = {
	nombre: 'Alex',
	edad: 29,
};

/* Concatenacion de promesas  */
fetch(url, {
	/* Definicion de las propiedades del fetch */
	method: 'POST',
	body: JSON.stringify(usuario),
	/* Los header en el cual indica el tipo de data que se esta enviando */
	headers: {
		'Content-Type': 'application/json',
	},
})
	.then((resp) => resp.json())
	.then(console.log)
	.catch(console.error);
