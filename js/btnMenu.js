((opened=false) => {
	const menu = document.querySelector('.nav-menu');
	const btn = document.querySelector('.menu-btn');

	btn.addEventListener('click', () => {
		!opened ? (
			btn.classList.add('opened'),
			menu.classList.add('active'),
			opened = !opened
		) : (
			btn.classList.remove('opened'),
			menu.classList.remove('active'),
			opened = false
		)
	})
})();
