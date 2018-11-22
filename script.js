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
    this.todos.forEach(todo => {
      if (todo.completed === false) {
        allTrue = false;
      }
    });

    this.todos.forEach(todo => {
      // Case 1: If everything is true, make everything false
      if (allTrue) {
        todo.completed = false;
        // Case 2: Otherwise, make everything true
      } else {
        todo.completed = true;
      }
    });
  }
};

const view = {
  displayTodos() {
    const todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    todoList.todos.forEach((todo, index) => {
      const todosLi = document.createElement('li');
      let todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = `(x) ${todo.todoText}`;
      } else {
        todoTextWithCompletion = `( ) ${todo.todoText}`;
      }

      todosLi.id = index;
      todosLi.textContent = todoTextWithCompletion;
      todosLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todosLi);
    }, this);
  },
  createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.className = 'deleteButton';
    // deleteButton.addEventListener('click', todoList.deleteTodo(todoId));
    return deleteButton;
  },
  setupEventListeners() {
    const todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', event => {
      // Get the element that was clicked on
      const elementClicked = event.target;
      if (elementClicked.className === 'deleteButton') {
        // Pass the index of the li to deleteTodo
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id, 10));
      }
    });
  }
};

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
  deleteTodo(index) {
    todoList.deleteTodo(index);
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

view.setupEventListeners();
