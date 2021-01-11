addEventListener('scroll', () => {
	const nav = document.querySelector('.navbar');

	this.scrollY > 0 ? nav.classList.add('fixed') : nav.classList.remove('fixed');
	this.innerWidth >= 995 && nav.classList.toggle('sticky', this.scrollY > 0);
})
