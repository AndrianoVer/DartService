document.querySelector('.try-free').onmouseenter = () => {
	document.querySelector('.buy-now').style.background = 'white';
	console.log('it works-1');
}

document.querySelector('.try-free').onmouseleave = () => {
	document.querySelector('.buy-now').style.background = '#061e37';
	console.log('it works-2');
}
// document.querySelector('.buy-now').onmouseenter = () => {
// 	document.querySelector('.try-free').style.background = '#061e37';
// }