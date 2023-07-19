// id, name, mức độ quan trọng(1,2,3-> small,medium,high)
// id: chuỗi ngẫu nhiên có 12 ký tự -> jsrandomString
// let todos = [
//   {
//     id: makeId(12),
//     name: 'coding',
//     level: 3,
//   },
//   {
//     id: makeId(12),
//     name: 'sleeping',
//     level: 1,
//   },
//   {
//     id: makeId(12),
//     name: 'eating',
//     level: 2,
//   },
// ]

let todos = JSON.parse(localStorage.getItem('todo'))
let elTodos = document.getElementById('todo-list');
let search = document.getElementById('search')

let idEdit = ''

search.addEventListener('input', () => {
  const value = search.value.toLowerCase().trim();
  const newTodos = todos.filter((todo) => {
    return todo.name.includes(value);
  })
  elTodos.innerHTML = ''
  newTodos.forEach(todo => {
    elTodos.innerHTML += `<li>
    <strong>Id: </strong>${todo.id} 
    - <strong>Name: </strong>${todo.name} 
    - <strong>Level: </strong>${todo.level}
    -<button class="btn-delete" data-id=${todo.id}>Delete</button>
    </li>`
  })
})

// btnDelete.addEventListener((click),()=>{
//   console.log(1111);
// })
// console.log(todos);



todos.forEach(todo => {
  elTodos.innerHTML += `<li>
  <strong>Id: </strong>${todo.id} 
  - <strong>Name: </strong>${todo.name} 
  - <strong>Level: </strong>${todo.level}
  -<button class="btn-delete" data-id=${todo.id}>Delete</button>
  -<button class="btn-edit" data-id=${todo.id}>Edit</button>
  </li>`
})

elTodos.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('btn-edit')) {
    const todoId = el.dataset.id;
    idEdit = todoId
    const item = todos.find((item) => item.id === todoId)
    console.log("item", item);
    name.value = item.name
    level.value = item.level
  }

})


elTodos.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('btn-delete')) {
    const todoId = el.dataset.id;
    todos = todos.filter((item) => {
      return item.id !== todoId;
    })
  }
  elTodos.innerHTML = ''
  todos.forEach(todo => {
    elTodos.innerHTML += `<li>
    <strong>Id: </strong>${todo.id} 
    - <strong>Name: </strong>${todo.name} 
    - <strong>Level: </strong>${todo.level}
    -<button class="btn-delete" data-id=${todo.id}>Delete</button>
    -<button class="btn-edit" data-id=${todo.id}>Edit</button>
    </li>`
  })
  localStorage.setItem('todo', JSON.stringify(todos))

})

// const btnDelete = document.getElementsByClassName('btn-delete');
// console.log(btnDelete);
// for (let index = 0; index < btnDelete.length; index++) {
//   let todo = [...todos]
//   btnDelete[index].addEventListener("click", () => {
//     console.log(todo);
//     const id = btnDelete[index].dataset.id;
//     todo = todos.filter((todo) => todo.id !== id)
//     todos = todo
//     elTodos.innerHTML = ''
//     todos.forEach(todo => {
//       elTodos.innerHTML += `<li>
//       <strong>Id: </strong>${todo.id} 
//       - <strong>Name: </strong>${todo.name} 
//       - <strong>Level: </strong>${todo.level}
//       -<button class="btn-delete" data-id=${todo.id}>Delete</button>
//     -<button class="btn-edit" data-id=${todo.id}>Edit</button>
//       </li>`
//     })
//     localStorage.setItem('todo', JSON.stringify(todos))
//   })
// }


function makeId(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}



let name = document.getElementById('name');
let level = document.getElementById('level');
let save = document.getElementById('btn-save');


save.addEventListener('click', () => {
  let nameValue = name.value.trim();
  let levelValue = level.value;
  if (nameValue === '') {
    alert('điền thông tin')
    return;
  }

  if (idEdit) {
    //edit
    const index = todos.findIndex((todo) => todo.id === idEdit)
    todos[index].name = nameValue
    todos[index].level = levelValue
    // todos
  } else {
    let newTodo = {
      id: makeId(12),
      name: nameValue,
      level: +levelValue
    }
    todos.push(newTodo)
    // console.log(todos);

  }
  idEdit = ''
  elTodos.innerHTML = ''
  todos.forEach(todo => {
    // console.log(todo);
    elTodos.innerHTML += `<li>
      <strong>Id: </strong>${todo.id} 
      - <strong>Name: </strong>${todo.name} 
      - <strong>Level: </strong>${todo.level}
      - <button class="btn-delete" data-id=${todo.id}>Delete</button>
    -<button class="btn-edit" data-id=${todo.id}>Edit</button>
      </li>`
  })
  name.value = '',
  level.value = 1
  localStorage.setItem('todo', JSON.stringify(todos))
})
