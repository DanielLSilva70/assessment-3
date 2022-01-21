console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('new submission')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.img.addEventListener('mouseover', compliment)

