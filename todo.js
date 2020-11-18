const form = document.querySelector('#todo-form');
const input = document.querySelector('input');
const listContainer = document.querySelector('#list-container');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	createNewTodo();
	input.value = '';
});

function createNewTodo() {
	const newTodo = document.createElement('li');
	const markDone = document.createElement('button');
	const removeBtn = document.createElement('button');
	newTodo.innerText = input.value;
	markDone.innerText = 'Mark Done';
	removeBtn.innerText = 'Remove';
	newTodo.append(markDone, removeBtn);
	listContainer.append(newTodo);
}

listContainer.addEventListener('click', function(e) {
	if (e.target.outerText === 'Remove') {
		e.target.parentElement.remove();
	} else if (e.target.outerText === 'Mark Done') {
		e.target.parentElement.classList.toggle('linethrough');
	}
});
