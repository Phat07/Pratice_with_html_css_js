$(document).ready(function () {
  let todos = [
    {
      id: makeId(5),
      name: 'slEeping edit',
      level: 1,
      isCompleted: true
    },
    {
      id: makeId(5),
      name: 'eating',
      level: 3,
      isCompleted: false
    },
    {
      id: makeId(5),
      name: 'tede new',
      level: 2,
      isCompleted: true
    },
    {
      id: makeId(5),
      name: 'todo 2',
      level: 1,
      isCompleted: true
    },
    {
      id: makeId(5),
      name: 'todo 3',
      level: 1,
      isCompleted: false
    },
    {
      id: makeId(5),
      name: 'todo 4',
      level: 2,
      isCompleted: false
    },
    {
      id: makeId(5),
      name: 'todo 5',
      level: 3,
      isCompleted: false
    },
    {
      id: makeId(5),
      name: 'todo 6',
      level: 1,
      isCompleted: false
    },
    {
      id: makeId(5),
      name: 'coding',
      level: 3,
      isCompleted: false
    },
    {
      id: makeId(5),
      name: 'dfdfg',
      level: 1,
      isCompleted: false
    },
  ];


  // let elName = document.getElementById('name');
  // let elLevel = document.getElementById('level');
  // let elSave = document.getElementById('btn-save');
  // let elCancel = document.getElementById('cancel');
  // let elListTodo = document.getElementById('todos');
  // let elDelete = document.getElementById('btn-danger');
  // let elSearch = document.getElementById('search');
  // let elFilterLevel = document.getElementById('filter-level');
  // let elSortBy = document.getElementById('sort-by');
  // let elSortDir = document.getElementById('sort-dir');

  let elName = $('#name');
  let elLevel = $('#level');
  let elSave = $('#btn-save');
  // let elCancel = $('#cancel');
  let elListTodo = $('#todos');
  // let elDelete = $('#btn-danger');
  // let elSearch = $('#search');
  let elFilterLevel = $('#filter-level');
  let elSortBy = $('#sort-by');
  let elSortDir = $('#sort-dir');
  let idEdit = '';

  let sortBy = 'name';
  let sortDir = 'asc';



  let title=$('#my-title');
  let btnRemove=$('.btn-remove')


  let itemText=$('.item-list');

  itemText.on('click',".item-test",(e)=>{
    console.log(e.target);
  })

  itemText.html(`
  <li class='item-test'>Item1</li>
  <li>Item2</li>
  <li>Item3</li>
  <li>Item4</li>
  `)
  elListTodo.on('click',".btn-delete",function () {
    const el=$(this)
    const id=el.data('id')
    console.log(id);
  })

  createList(todos, '')
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
  function createList(items, searchValue = '') {
    // console.log("hello");
    let html = '';
    items.forEach((item) => {
      let completed = item.isCompleted ? 'completed' : '';
      let todoName = item.name;

      if (searchValue !== '') {
        //eat
        // <mark>e</marl>ating
        const regex = new RegExp(searchValue, 'gim');
        todoName = todoName.replace(regex, (match) => {
          return `<mark>${match}</mark>`
        })
      }
      let levelColor = '';
      let levelText = '';
      switch (item.level) {
        case 1:
          levelColor = 'secondary';
          levelText = 'Thấp';
          break;
        case 2:
          levelColor = 'info';
          levelText = 'Bình Thường';
          break;
        case 3:
          levelColor = 'danger';
          levelText = 'Cao';
          break;
      }
      html += `
          <li class="item mb-1">
                <div class="d-flex align-items-center justify-content-between">
                  <span role="button" class="todo-name ${completed}">${todoName}</span>
                  <span class="badge bg-${levelColor}">${levelText}</span>
                  <div class="action">
                    <button class="btn btn-sm btn-primary" data-id=${item.id}>
                      Sửa
                    </button>
                    <button class="btn btn-sm btn-delete btn-danger" data-id=${item.id}>
                      Xóa
                    </button>
                  </div>
                </div>
              </li>`;
    });
    elListTodo.html(html)
    elListTodo.innerHTML = html;
  }
  
  elSave.on('click',function () {
    // console.log(1111);
    console.log("inputName",elName.val());
    elName.val()
  })
})

