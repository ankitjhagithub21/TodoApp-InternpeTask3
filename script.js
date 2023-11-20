const addBtn = document.getElementById('addBtn')
const userInput = document.getElementById('userInput')
const myForm = document.getElementById('myForm')
const todoList = document.getElementById('todoList')

const todos = JSON.parse(localStorage.getItem('todos')) || []

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo(userInput.value)
    userInput.value = ""

})

const addTodo = (todo) => {

    todos.push(todo)
   
    updateLs()
}

const updateLs = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
    displayList()
}

const removeTodo = (index) => {
    todos.splice(index, 1);
    updateLs()
}
const displayList = () => {

    if (todos.length === 0) {
        todoList.innerHTML = "<p class='empty'>List is empty !!<p>"

    } else {
        todoList.innerHTML = ""
        todos.forEach((todo, index) => {
            let li = document.createElement('li')
            li.innerHTML = `
           <div>
          
           <span>${todo}</span>
           </div>
            <div>
            <button onclick="removeTodo(${index})"><i class="fa-solid fa-trash"></i> </button>
            <button onclick="editTodo(${index})"><i class="fa-solid fa-edit"></i></button>
            </div>
            
            `
            todoList.appendChild(li)
        })
    }

}



const editTodo = (index) => {
    let newTodo = prompt("Edit Todo", todos[index])
    if (newTodo != null) {
        todos[index] = newTodo
    }
    updateLs()

}

displayList()