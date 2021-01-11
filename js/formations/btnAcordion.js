/*
	Acordion button..
	Made by Mathis
*/

const btn = document.querySelectorAll('.header-text'),
	chevronRuban = document.querySelectorAll('.chevron__ruban'),
	formationsContent = document.querySelectorAll('.formations_content');
let displayed = false;


btn.forEach((value, key) => {
	btn[key].addEventListener('click', () => {
		!displayed ? (
			chevronRuban[key].classList.add('opened_chevron'),
			formationsContent[key].style.display = "contents",
			displayed = true
		) : (
			chevronRuban[key].classList.remove('opened_chevron'),
			formationsContent[key].style.display = "none",
			displayed = false
		)
	})	
})
