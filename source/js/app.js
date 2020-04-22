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