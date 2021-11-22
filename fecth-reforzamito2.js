const postData = (name, gender) => {
	let data = {
		nombre: name,
		genero: gender,
	};
	return fetch('https://swapi.dev/api/users', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

fetch('https://swapi.dev/api/people/1')
	.then((resp) => {
		if (resp.status == 200 || resp.ok) {
			return resp.json();
		} else {
			throw new Error('No existe el usuario 1');
		}
	})
	.then(({ name, gender }) => postData(name, gender))
	.then(console.log)
	.catch((error) => {
		console.log(error);
	});
