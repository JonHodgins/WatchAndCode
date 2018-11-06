var todos = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

// Display the todos
function displayTodos() {
    console.log('My todos:', todos);
}

// Add a new todo
function addTodo(newTodo) {
    todos.push(newTodo);
    displayTodos();
}

// Swap a todo out with a new todo
function changeTodo(index, newTodo) {
    todos[index] = newTodo;
    displayTodos();
}

// Delete a todo
function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}