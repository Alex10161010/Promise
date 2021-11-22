let img = document.querySelector('img');

/**
 * https://developer.mozilla.org/es/docs/Web/API/Blob
 *Un objeto Blob representa un objeto tipo fichero de  datos planos inmutables.
 *Los Blobs representan datos que no necesariamente se encuentran en un formato nativo de JavaScript.
 *La interfaz File se encuentra basada en un Blob, heredando y expendiendo la funcionalidad de un Blob
 *para soportar archivos en el sistema del usuario.
 *
 *
 */

fetch('imagen.jpg')
	.then((rep) => rep.blob())
	.then((imagen) => {
		console.log(imagen);
		let imgPath = URL.createObjectURL(imagen);
		img.src = imgPath;
	});

/**
 * El URL.createObjectURL()método estático crea un que DOMStringcontiene una URL que representa el
 * objeto dado en el parámetro.La duración de la URL está vinculada a la document de la ventana en la que
 * se creó. La URL del nuevo objeto representa el Fileobjeto u Blobobjeto especificado .
 * Para liberar la URL de un objeto, llame revokeObjectURL().
 */
