const todoList = {
  todos: [],
  addTodo(todoText) {
    this.todos.push({
      todoText,
      completed: false
    });
  },
  changeTodo(index, todoText) {
    this.todos[index].todoText = todoText;
  },
  deleteTodo(index) {
    this.todos.splice(index, 1);
  },
  toggleCompleted(index) {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
  },
  toggleAll() {
    let allTrue = true;
    // Check if every todo is complete
    for (let i = 0; i < this.todos.length; i += 1) {
      if (this.todos[i].completed === false) {
        allTrue = false;
        break;
      }
    }
    // If every todo is complete, set them all to false
    if (allTrue) {
      for (let i = 0; i < this.todos.length; i += 1) {
        this.todos[i].completed = false;
      }
      // Otherwise, set them all to true
    } else {
      for (let i = 0; i < this.todos.length; i += 1) {
        this.todos[i].completed = true;
      }
    }
  }
};

// eslint-disable-next-line no-unused-vars
const view = {
  displayTodos() {
    const todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (let i = 0; i < todoList.todos.length; i += 1) {
      const todosLi = document.createElement('li');
      let todoTextWithCompletion = '';
      if (todoList.todos[i].completed === true) {
        todoTextWithCompletion = `(x) ${todoList.todos[i].todoText}`;
      } else {
        todoTextWithCompletion = `( ) ${todoList.todos[i].todoText}`;
      }
      todosLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todosLi);
    }
  }
};

// eslint-disable-next-line no-unused-vars
const handlers = {
  addTodo() {
    const addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo() {
    const changeTodoTextInput = document.getElementById('changeTodoTextInput');
    const changeTodoIndexInput = document.getElementById('changeTodoIndexInput');
    todoList.changeTodo(changeTodoIndexInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoIndexInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo() {
    const deleteTodoIndexInput = document.getElementById('deleteTodoIndexInput');
    todoList.deleteTodo(deleteTodoIndexInput.valueAsNumber);
    deleteTodoIndexInput.value = '';
    view.displayTodos();
  },
  toggleCompleted() {
    const toggleCompletedIndexInput = document.getElementById('toggleCompletedIndexInput');
    todoList.toggleCompleted(toggleCompletedIndexInput.valueAsNumber);
    toggleCompletedIndexInput.value = '';
    view.displayTodos();
  },
  toggleAll() {
    todoList.toggleAll();
    view.displayTodos();
  }
};
