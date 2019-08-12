const DataStore = require('electron-store');
const store = new DataStore({ name: 'Todos Data' });

module.exports = {
	getTodos() {
		// store.set('todos', [
		// 	{ id: '1', title: 'Learning Electron', completed: false }
		// ]);
		return store.get('todos') || [];
	},
	addTodo(newTodo) {
		const todos = [...store.get('todos'), newTodo];
		store.set('todos', todos);
	}
};
