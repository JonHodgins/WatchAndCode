const todoList = {
  todos: [],
  displayTodos() {
    if (this.todos.length === 0) {
      console.log('There are no todos!');
    } else {
      console.log('My todos:');
      for (let i = 0; i < this.todos.length; i += 1) {
        const todo = this.todos[i];
        if (todo.completed) {
          console.log('(x)', todo.todoText);
        } else {
          console.log('( )', todo.todoText);
        }
      }
    }
  },

  addTodo(todoText) {
    this.todos.push({
      todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo(index, todoText) {
    this.todos[index].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },
  toggleCompleted(index) {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
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
    this.displayTodos();
  }
};

const handlers = {
  displayTodos() {
    todoList.displayTodos();
  },
  toggleAll() {
    todoList.toggleAll();
  },
  addTodo() {
    const addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  }
};
