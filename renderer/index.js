const { ipcRenderer } = require('electron');

ipcRenderer.on('fetch-todos', (event, todos) => {
	//render the todos in html
	const todoItems = todos.reduce((prevValue, currentValue) => {
		prevValue += `<li class="list-group-item"> ${currentValue.title} </li>`;
		return prevValue;
	}, '');
	const todoList = document.getElementById('todoList');

	todoList.innerHTML = todoItems;
});
