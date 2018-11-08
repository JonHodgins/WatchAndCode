var todoList = {
    todos: [],

    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log('There are no todos!');
        } else {
            console.log('My todos:');
            for (var i = 0; i < this.todos.length; i++) {
                var todo = this.todos[i];
                if (todo.completed) {
                    console.log('(x)', todo.todoText);
                } else {
                    console.log('( )', todo.todoText);
                }
            }
        }
    },

    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function (index, todoText) {
        this.todos[index].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function (index) {
        this.todos.splice(index, 1);
        this.displayTodos();
    },
    toggleCompleted: function (index) {
        var todo = this.todos[index];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function () {
        var allTrue = true;
        //Check if every todo is complete
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === false) {
                allTrue = false;
                break;
            }
        }
        //If every todo is complete, set them all to false
        if (allTrue) {
            for (let i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = false;
            }
            //Otherwise, set them all to true
        } else {
            for (let i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function () {
    todoList.displayTodos();
})

toggleAllButton.addEventListener('click', function () {
    todoList.toggleAll();
})