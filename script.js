const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText) {
        const newTodo = {
            text: todoText,
            completed: false
        };
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }
});

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        if (todo.completed) {
            todoItem.classList.add('completed');
        }
        todoItem.innerHTML = `
            <span>${todo.text}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(todoItem);

        const completeBtn = todoItem.querySelector('.complete-btn');
        completeBtn.addEventListener('click', () => {
            todo.completed = !todo.completed;
            renderTodos();
        });

        const deleteBtn = todoItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            renderTodos();
        });
    });
}
