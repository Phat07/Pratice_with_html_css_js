const elMainMenu = document.getElementsByClassName('main-menu');

API.get('categories_news').then((res) => {
  console.log(res.data);
  const data = res.data.data;
  renderMenus(data);
});

const token=localStorage.getItem('FE20_ACCESS_TOKEN')
let html1=''
if(token){
  html1=`
  <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Admin</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="dropdown-item" href="login.html">Đăng nhập</a></li>
          <li class="nav-item"><a class="dropdown-item" href="register.html">Đăng ký</a></li>
        </ul>
  `
}else{
  html1=`
  <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Tài khoản</a>
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="dropdown-item" href="login.html">Đăng nhập</a></li>
          <li class="nav-item"><a class="dropdown-item" href="register.html">Đăng ký</a></li>
        </ul>
  `
}

function renderMenus(listItems) {
  let html = '';
  let htmlChild = '';
  listItems.forEach((item, index) => {
    if (index < 3) {
      html += /*html*/ `<li class="nav-item"><a class="nav-link" href="category.html?id=${item.id}">${item.name}</a></li>`;
    } else {
      htmlChild += /*html*/ `<li class="nav-item"><a class="dropdown-item" href="category.html?id=${item.id}">${item.name}</a></li>`;
    }
  });
  for (let i = 0; i < elMainMenu.length; i++) {
    elMainMenu[i].innerHTML =
      html +
      /*html*/ `
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Danh mục khác</a>
        <ul class="dropdown-menu">${htmlChild}</ul>
      </li>
      <li class="nav-item dropdown">
        ${html1}
      </li>
      `;
  }
}