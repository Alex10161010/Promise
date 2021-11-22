console.log('Hola Fetch json');

var request = new XMLHttpRequest();
/* const url = 'https://reqres.in/api/products/3'; */
request.open('GET', 'https://reqres.in/api/products', true);
/* Mandar algun argumento */
request.send(null);

request.onreadystatechange = function (state) {
	if (request.readyState === 4) {
		let resp = request.response;
		let respObj = JSON.parse(resp);
		console.log(respObj);
	}
};
