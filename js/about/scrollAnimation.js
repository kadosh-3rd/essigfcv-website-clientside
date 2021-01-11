/*
	Here, « this » is typeof globalThis and refer to the global object, window
	.innerHeight: the window height, divisible by [1.1 ; 2]
	.innerWidth: the window width
*/

addEventListener('scroll', () => {
	const nav = document.querySelector('.navbar'),
		schoolsBlock = document.querySelector('.schools-block'),
		admissionSection = document.querySelector('.admission-section'),
		scrollingUp = document.querySelector('.scrollingUp');
	let schoolsBlockPosition = schoolsBlock.getBoundingClientRect().top,
		admissionSectionPosition = admissionSection.getBoundingClientRect().top;
	

		this.scrollY > 0 ? nav.classList.add('fixed') : nav.classList.remove('fixed');
		this.innerWidth >= 995 && nav.classList.toggle('sticky', this.scrollY > 0);

		scrollingUp.addEventListener('click', () => {
		this.scrollBy({
			top: -1970,
			left: 0,
			behavior: "smooth"
		})
	});

	admissionSectionPosition < this.innerHeight && admissionSection.classList.add('block-reveal');

	schoolsBlockPosition < this.innerHeight && schoolsBlock.classList.add('block-reveal');

	scrollingUp.style.visibility = schoolsBlockPosition < this.innerHeight-875 ? "visible" : "hidden";
})
