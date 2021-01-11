//Get DOM elements
const mainSection = document.querySelector('.main-section');
const postSection = document.querySelector('.post-section');
const loadContainer = document.querySelector('.load-container');

const failureIcon = document.createElement('div');
failureIcon.classList.add('failure-icon');


//Huge Statements
(async() => {
	try {
		const res = await fetch('https://essigfcv-adb.herokuapp.com/api/posts');
		const postData = await res.json();


		mainSection.removeChild(loadContainer);

		//Functions
		const toBase64 = arr => {
			arr = new Uint8Array(arr);
			return btoa(
				arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
			);
		}


		postData.forEach(post => {

			// localStorage.setItem(post._id, JSON.stringify(post));
			// !localStorage.getItem('postStorageDate') && localStorage.setItem('postStorageDate', Date.now());

			
			//Creating elements
			const postItem = document.createElement('div');
			const imgDate = document.createElement('div');
			const coverPic = document.createElement('img');
			const date = document.createElement('div');
			const day = document.createElement('span');
			const month = document.createElement('span');
			const year = document.createElement('span');
			const description = document.createElement('p');
			const btnContainer = document.createElement('div');
			const postTitle = document.createElement('h2');
			const city = document.createElement('div');
			const modalBtn = document.createElement('span');
			const modal = document.createElement('div');
			const modalContent = document.createElement('div');
			const modalHeader = document.createElement('div');
			const modalTitle = document.createElement('h2');
			const modalImg = document.createElement('img');
			const modalDescription = document.createElement('p');
			const modalBody = document.createElement('div');
			const modalFooter =  document.createElement('div');
			const modalFooterText = document.createElement('h5');
			const closeBtn = document.createElement('span');
			
			
			//Initializing elements
			city.textContent = 'franceville';
			coverPic.src = `data:image/jpeg;base64,${toBase64(post.coverPic.data)}`;
			coverPic.alt = post.title;
			const formatedDate = new Date(post.createdAtDate);
			day.textContent = `${formatedDate.getDate()} `;
			month.textContent = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(formatedDate);
			year.textContent = ` ${formatedDate.getFullYear()}`;
			postTitle.textContent = post.title;
			description.textContent = `${post.description.substring(0, 320)}...`;
			modalBtn.textContent = 'Lire la suite';
			modalTitle.textContent = post.title;
			modalImg.src = `data:image/jpeg;base64,${toBase64(post.coverPic.data)}`;
			modalImg.alt = post.title;
			modalDescription.textContent = post.description;
			modalFooterText.textContent = 'Franceville';
			closeBtn.innerHTML = '&times;'
			
			
			//Adding Classes
			city.classList.add('city');
			imgDate.classList.add('imgDate');
			coverPic.classList.add('imgCover');
			date.classList.add('date');
			day.classList.add('day');
			month.classList.add('month');
			year.classList.add('year');
			postTitle.classList.add('titlePost');
			description.classList.add('postDescription');
			btnContainer.classList.add('mt-mb');
			modalBtn.classList.add('modal-btn');
			modal.classList.add('modal');
			modalHeader.classList.add('modal-header');
			modalTitle.classList.add('modal-title');
			modalImg.classList.add('modal-img');
			modalBody.classList.add('modal-body');
			modalFooter.classList.add('modal-footer');
			modalContent.classList.add('modal-content');
			closeBtn.classList.add('close');
			postItem.classList.add('post-item');


			//Initializing modal events
			modalBtn.addEventListener('click', () => modal.style.display = 'block')

			closeBtn.addEventListener('click', () => modal.style.display = 'none')

			window.addEventListener('click', event => {
				if (event.target === modal) {
					modal.style.display = 'none';
				}
			})

			document.addEventListener('keydown', e => {
				if (e.code==='Escape') {
					if (modal.style.display === 'block') {
						modal.style.display = 'none'
					}
				}
			})

			
			//Adding and Organizing Elements in the DOM
			date.append(day, month, year);
			btnContainer.append(modalBtn);
			imgDate.append(coverPic, date);
			modalHeader.append(closeBtn, modalTitle);
			modalBody.append(modalImg, modalDescription);
			modalFooter.append(modalFooterText);
			modalContent.append(modalHeader, modalBody, modalFooter);
			modal.append(modalContent);
			postItem.append(city, imgDate, postTitle, description, btnContainer, modal);
			postSection.append(postItem);
		});

		console.log(postData);

	} catch (err) {
		console.error(err);
		loadContainer.children[0].replaceWith(failureIcon);
		loadContainer.children.item(1).textContent = 'Échec de connexion à la base de données...';
	}
})();