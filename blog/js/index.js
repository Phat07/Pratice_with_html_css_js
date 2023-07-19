
const elArticlesLatest = document.getElementById('articles-latest');
const elArticlesPopularTop = document.getElementById('articles-popular-top');
const elArticlesPopularBottom = document.getElementById('articles-popular-bottom');
const btnLoadMore = document.getElementById('btn-load-more');
let currentPage = 1;

// const API = axios.create({
//   baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
// });

// API.get('categories_news').then((res) => {
//   const data = res.data.data;
//   renderMenus(data);
// });

const searchForm=document.getElementsByClassName('search-form');

for (let index = 0; index < searchForm.length; index++) {
  searchForm[index].addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputKeyword=searchForm[index].querySelector('[name="keyword"]')
    const value=encodeURIComponent(inputKeyword.value)
    console.log(value);
    window.location.href=`search.html?keyword=${value}`
  })
  
}

fetchArticlesLatest();

// API.get('articles/popular?limit=7').then((res) => {
//   const data = res.data.data;
//   let htmlTop = '';
//   let htmlBottom = '';

//   data.forEach((item, index) => {
//     if (index < 2) {
//       htmlTop += renderArticleItemPopularTop(item);
//     } else {
//       htmlBottom += renderArticleItemPopularBottom(item);
//     }
//   });
//   elArticlesPopularTop.innerHTML = htmlTop;
//   elArticlesPopularBottom.innerHTML = htmlBottom;
// });



btnLoadMore.addEventListener('click', () => {
  btnLoadMore.innerText = 'Đang tải thêm ...'
  btnLoadMore.disabled = true;
  currentPage++;
  fetchArticlesLatest(currentPage);
});

function fetchArticlesLatest(page = 1) {
  API.get(`articles?limit=4&page=${page}`).then((res) => {
    const data = res.data.data;
    console.log(data);
    renderArticlesLatest(data);
  });
}

// function renderMenus(listItems) {
//   let html = '';
//   let htmlChild = '';
//   listItems.forEach((item, index) => {
//     if (index < 3) {
//       html += /*html*/ `<li class="nav-item"><a class="nav-link" href="#">${item.name}</a></li>`;
//     } else {
//       htmlChild += /*html*/ `<li class="nav-item"><a class="dropdown-item" href="#">${item.name}</a></li>`;
//     }
//   });

//   for (let i = 0; i < elMainMenu.length; i++) {
//     elMainMenu[i].innerHTML =
//       html +
//       /*html*/ `
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Danh mục khác</a>
//         <ul class="dropdown-menu">${htmlChild}</ul>
//       </li>`;
//   }
// }

function renderArticlesLatest(listItems) {
  let html = '';
  listItems.forEach((item) => {
    html += renderArticleItemLatest(item);
  });
  if (currentPage === 1) elArticlesLatest.innerHTML = '';
  elArticlesLatest.innerHTML += html;
  btnLoadMore.innerText = 'Xem thêm';
  btnLoadMore.disabled = false;
}

function renderArticleItemLatest(item) {
  return /*html*/ `
  <article class="item post col-md-6">
    <div class="card shadow-lg h-100">
      <figure class="card-img-top overlay overlay-1"><a href="#"> <img src="${item.thumb}"
            alt="" /></a>
        <figcaption>
          <h5 class="from-top mb-0">Read More</h5>
        </figcaption>
      </figure>
      <div class="card-body">
        <div class="post-header">
          <div class="post-category">
            <a href="#" class="hover link-yellow" rel="category">${item.category.name}</a>
          </div>
          <h2 class="post-title h3 mt-1 mb-3"><a class="link-navy" href="./blog-post.html">${item.title}</a></h2>
        </div>
        <div class="post-content">
          <p class="line-clamp line-clamp-4">${item.description}</p>
        </div>
      </div>
      <div class="card-footer">
        <ul class="post-meta d-flex mb-0">
          <li class="post-date"><i class="uil uil-calendar-alt"></i><span>${dayjs(item.publish_date).fromNow()}</span></li>
          <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>4</a></li>
          <li class="post-likes ms-auto"><a href="#"><i class="uil uil-heart-alt"></i>5</a></li>
        </ul>
      </div>
    </div>
  </article>`;
}

function renderArticleItemPopularTop(item) {
  return /*html*/ `
  <div class="col-lg-6 mb-4">
    <figure class="overlay caption caption-overlay rounded mb-0 h-100">
      <a href="#" class="h-100"> 
        <img src="${item.thumb}" class="h-100" alt="" />
      </a>
      <figcaption style="background: rgba(0, 0, 0, 0.5)">
        <span class="badge badge-lg bg-white text-uppercase mb-3">${item.category.name}</span>
        <h2 class="post-title h3 mt-1 mb-3"><a href="./blog-post.html">${item.title}</a></h2>
        <ul class="post-meta text-white mb-0">
          <li class="post-date"><i class="uil uil-calendar-alt"></i><span>${dayjs(item.publish_date).fromNow()}</span></li>
          <li class="post-author"><a href="#"><i class="uil uil-user"></i><span>By Sandbox</span></a></li>
          <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>3<span> Comments</span></a></li>
        </ul>
      </figcaption>
    </figure>
  </div>`;
}

function renderArticleItemPopularBottom(item) {
  return /*html*/ `
  <li>
    <figure class="rounded"><a href="./blog-post.html"><img src="${item.thumb}" alt="" /></a>
    </figure>
    <div class="post-content">
      <h6 class="mb-2"> <a class="link-dark line-clamp line-clamp-1" title="${item.title}" href="./blog-post.html">${item.title}</a> </h6>
      <ul class="post-meta">
        <li class="post-date"><i class="uil uil-calendar-alt"></i><span>${dayjs(item.publish_date).fromNow()}</span></li>
        <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>3</a></li>
      </ul>
      <!-- /.post-meta -->
    </div>
  </li>`;
}
