
function querySelector(element) {
	return document.querySelector(element);
}

function querySelectorAll(elements) {
	return document.querySelectorAll(elements);
}

function convertToArray(data) {
	return Array.from(data)
}



function toggleActiveState(target,className) {
	
	var navList = target.closest(`.${className}`);

	var activeNavList = querySelector(`.${className}.active`);

	navList != activeNavList && activeNavList?.classList?.remove("active")
	 	
	navList.classList.toggle("active")
}




function modal(time) {
	document.addEventListener('click', e => {

		let target = e.target;

		if (target.classList.contains("modal-open")) {

			let modal = document.querySelector(e.target.dataset.modal);

			let modalType = modal.dataset.type;

			modal.style.display = "flex"

			setTimeout(() => {
				modal.style.opacity = 1
				modal.classList.add(`${modalType}-show`)
			})

			
		}

		if (target.classList.contains("modal-close")) {

			let modal = document.querySelector(e.target.dataset.close);
			let modalType = modal.dataset.type;
			modal.style.opacity = 0
			setTimeout(() => modal.style.display = "none", time)
			modal.classList.remove(`${modalType}-show`)

		}

	})
}


