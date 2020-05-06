let btnBuy = document.querySelector('.buy-now');
let btnFree = document.querySelector('.try-free');

btnFree.onmouseenter = () => {
	btnBuy.style.background = 'white';
	btnBuy.style.color = '#061e37';
}

btnFree.onmouseleave = () => {
	btnBuy.style.background = '#061e37';
	btnBuy.style.color = '#fff';
}

let headerBurger = document.querySelector('.header__burger');
let siteNavigation = document.querySelector('.site__navigation')
let body = document.querySelector('body');

headerBurger.onclick = function (event) {
	headerBurger.classList.toggle('active');
	siteNavigation.classList.toggle('active');
	body.classList.toggle('lock');

}

window.onload = function () {

	document.querySelector('.dropdown-menu').addEventListener('click', dropDown);

	function dropDown(event) {
		let eventTarget = event.target.className;
		if ((eventTarget == 'dropdowm-menu-item-header') || (eventTarget == 'right-side-header')) {
			let dataTab = event.target.getAttribute('data-tab');
			let tabBody = document.getElementsByClassName('dropdowm-menu-item-body')
			for (let i = 0; i < tabBody.length; i++) {
				if (dataTab == i) {
					tabBody[i].style.display = 'flex';
				} else {
					tabBody[i].style.display = 'none';
				}
			}
		}
	}
}