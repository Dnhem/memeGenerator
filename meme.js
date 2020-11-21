const form = document.querySelector('form');
const h1 = document.querySelector('h1');
const topText = document.querySelector('#topText');
const bottomText = document.getElementById('bottomText');
const imgText = document.querySelector('#imagelink');
const memeResults = document.getElementById('memeResults');

setInterval(function() {
	h1.classList.toggle('flicker');
}, 1000);

form.addEventListener('submit', function(e) {
	e.preventDefault();
	console.log(imgText.value, topText.value, bottomText.value);
	printMeme(imgText.value, topText.value, bottomText.value);
	topText.value = '';
	bottomText.value = '';
	imgText.value = '';
});

function printMeme(image, topText, bottomText) {
	let meme = `<div class ="meme" class="box">
      <img class="meme" id="memeImage" src="${image}">
			<p class="topText" id="textOutput">${topText}</p>
			<p class="bottomText" id="textOutput">${bottomText}</p>
			</div>`;
	memeResults.innerHTML += meme;
}

window.addEventListener('click', function(e) {
	let parent = e.target.parentNode;
	if (parent && parent.classList && parent.classList.contains('meme')) {
		parent.remove();
	}
});
