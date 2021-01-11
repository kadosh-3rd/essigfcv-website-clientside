/*
	Here, « this » is typeof globalThis and refer to the global object, window
	.innerHeight: the window height, divisible by [1.1 ; 2]
	.innerWidth: the window width
*/

addEventListener('scroll', () => {
		const welcomeSection = document.querySelector('.welcome-section'),
		latestNewsSection = document.querySelector('.inner')
		scrollingUp = document.querySelector('.scrollingUp')
	let welcomeSectionPosition = welcomeSection.getBoundingClientRect().top,//la position de l'élément par rapport au top du document
		latestNewsSectionPosition = latestNewsSection.getBoundingClientRect().top
		
	scrollingUp.addEventListener('click', () => {
		this.scrollBy({
			top: welcomeSectionPosition+40,
			left: 0,
			behavior: "smooth"
		})
	})

	//+425 pour ajuster sur mobile le déclenchement de l'animation suivant la taille de l'écran
	welcomeSectionPosition < this.innerHeight+425 && welcomeSection.classList.add('reveal');

	latestNewsSectionPosition < this.innerHeight+75 && latestNewsSection.classList.add('news-section-reveal');

	scrollingUp.style.visibility = latestNewsSectionPosition < this.innerHeight-525 ? "visible" : "hidden";
})
