// grabs all the cards in the deck
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

//flipCard performs 2 tasks: 1) adds 'flip' class to card clicked
function flipCard() {
	if (lockBoard) return;
	if (this === firstCard) return;

	this.classList.add('flip');
	//2) creates logic for clicking
	if (!hasFlippedCard) {
		//first click
		hasFlippedCard = true;
		firstCard = this; //this is element that fired event (memory-card)

		return;
	}
	// second click
	hasFlippedCard = false;
	secondCard = this; //this is element that fired event (memory-card)

	checkForMatch();
}

function checkForMatch() {
	// do cards match?
	if (firstCard.dataset.name === secondCard.dataset.name) {
		disableCards();
		// It matches
	} else {
		unflipCards();
	}
}

function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);

	resetBoard();
}

function unflipCards() {
	lockBoard = true;

	// doesn't match
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');

		resetBoard();
	}, 1500);
}

function resetBoard() {
	[ hasFlippedCard, lockBoard ] = [ false, false ];
	[ firstCard, secondCard ] = [ null, null ];
}

(function shuffle() {
	cards.forEach((card) => {
		let randomPos = Math.floor(Math.random() * 12);
		card.style.order = randomPos;
	});
})(); // IFFY

//loop through the cards and assign them a click listener and executes flipCard function
for (let card of cards) {
	card.addEventListener('click', flipCard);
}
// cards.forEach((card) => card.addEventListener('click', flipCard));
