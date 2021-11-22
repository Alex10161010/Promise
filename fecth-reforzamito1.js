const nombre = document.querySelector('#nombre');
const genero = document.querySelector('#genero');

fetch('https://swapi.dev/api/people/1')
	.then((resp) => {
		if (resp.status == 200 || resp.ok) {
			return resp.json();
		} else {
			throw new Error('No existe el usuario 1');
		}
	})
	.then(({ name, gender }) => {
		nombre.textContent = name;
		genero.textContent = gender;
	})
	.catch((error) => {
		console.log(error);
	});
