/*
	Here, « this » is typeof globalThis and refer to the global object, window
	.innerWidth: the window width
*/

addEventListener('scroll', () => {
	const navBar = document.querySelector('.navbar');

	//It works like a condition with .classList.add() and .classList.remove()
	this.innerWidth >= 1045 && navBar.classList.toggle('sticky', this.scrollY > 0)
});
