const slides = [
	'site-hero',
	'delfi-de-la-rua-A_InfAQM_lU-unsplash',
	'examDUT',
	'priscilla-du-preez-ggeZ9oyI-PE-unsplash',
	'baim-hanif-pYWuOMhtc6k-unsplash'
];
let i = 0;
const diapoBckg = document.querySelector('.hero-section').style;

const changeBgImgViaAtrbt = () => {
	diapoBckg.background = `url(img/${slides[i]}.jpg) #094657 no-repeat`;
	diapoBckg.backgroundSize = 'cover';
	diapoBckg.backgroundAttachment = 'fixed';
    diapoBckg.backgroundPosition = i===1 ? '50% 52%' : i===3 ? '20% 40%' : 'center -.2%';
	diapoBckg.opacity = '1';

	i < slides.length - 1 ? i++ : i=0;
	
	setTimeout(changeBgImgViaAtrbt, 4500);
}
// Here, « this » is typeof globalThis and refer to the global object, window
this.onload = changeBgImgViaAtrbt;
