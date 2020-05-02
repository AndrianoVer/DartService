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

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
	if (!e.target.matches('.dropbtn')) {
		var myDropdown = document.getElementById("myDropdown");
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
}