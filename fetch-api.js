const url = 'https://reqres.in/api/products/3';

/* Concatenacion de promesas  */
fetch(url)
	.then((resp) => resp.json())
	.then((respObj) => {
		console.log(respObj);
	});
