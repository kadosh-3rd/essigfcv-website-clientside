const loader = document.querySelector('.loader');

addEventListener('load', () => {
	loader.classList.add('fading-out');
	setTimeout(() => {
		document.body.removeChild(loader);
	}, 2000);
})
