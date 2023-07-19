
const category = document.getElementById('category')
const pageItem = document.getElementsByClassName('page-item')
const pagination = document.getElementById('pagination')


const queryString = new URLSearchParams(window.location.search);
let id= parseInt(queryString.get('id'));

// API.get(`categories_news/${id}/articles?limit=6&page=1`).then((res) => {
//   console.log(res.data.data)
//   const data = res.data.data
//   renderCategories(data)
// })
let currentPage=1;
pagination.addEventListener(('click'), e=>{
  e.preventDefault()
  const el=e.target;
  // const active=document.querySelector('.page-item').classList;
  // console.log(pagination.querySelector('.page-item').classList.add("active"));
  // active.add('active')
  
  if(el.classList.contains('page-link')){
    console.log(el.innerText);
    currentPage=+el.innerText
    fetchArticles(currentPage)
    window.scrollTo(0,0)
  }else if(el.classList.contains('btn-next')){
    console.log(el);
    currentPage++
    fetchArticles(currentPage)
    window.scrollTo(0,0)
  }else if(el.classList.contains('btn-prev')){
    currentPage--;
    fetchArticles(currentPage)
  }
})


function renderCategories(listCategories) {
  let html = ''
  listCategories.map((cate) => (
    html += `
      <article class="item post col-md-6 col-lg-4">
                  <div class="card">
                    <figure class="card-img-top overlay overlay-1 hover-scale">
                      <a href="#">
                        <img src=${cate.thumb} alt="" />
                      </a>
                      <figcaption>
                        <h5 class="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div class="card-body">
                      <div class="post-header">
                        <!-- /.post-category -->
                        <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" href="./blog-post.html">${cate.title}</a></h2>
                      </div>
                      <!-- /.post-header -->
                      <div class="post-content">
                        <p>${cate.description}</p>
                      </div>
                      <!-- /.post-content -->
                    </div>
                    <!--/.card-body -->
                    <div class="card-footer">
                      <ul class="post-meta d-flex mb-0">
                        <li class="post-date"><i class="uil uil-calendar-alt"></i><span>${dayjs(cate.publish_date).fromNow()}</span></li>
                        <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>4</a></li>
                        <li class="post-likes ms-auto"><a href="#"><i class="uil uil-heart-alt"></i>5</a></li>
                      </ul>
                      <!-- /.post-meta -->
                    </div>
                    <!-- /.card-footer -->
                  </div>
                  <!-- /.card -->
                </article>
      `
  ))
  category.innerHTML = html
}

fetchArticles()
function fetchArticles(page = 1) {  
  API.get(`categories_news/${id||1}/articles?limit=6&page=${page}`).then((res) => {
    console.log(res.data);
    const data = res.data.data;
    renderCategories(data)
    const totalPage = res.data.meta.last_page
    console.log(totalPage);
    let html = ''
    const disabledBtnNext = currentPage === 20 ? 'disabled' : '';
  const disabledBtnPrev = currentPage === 1 ? 'disabled' : '';
    for (let index = 1; index < totalPage; index++) {
      let active=currentPage!==index?'':'active'
      html += `
      <li class="page-item ${active}"><a class="page-link" href="#">${index}</a></li>
      `
    }
    pagination.innerHTML = `<li class="page-item ${disabledBtnPrev}">
    <a class="page-link bnt-prev" href="#" aria-label="Previous">
      <span aria-hidden="true" class="btn-prev"><i class="uil uil-arrow-left btn-prev"></i></span>
    </a>
    </li>`+ html + `
    <li class="page-item ${disabledBtnNext}">
                  <a class="page-link btn-next" href="#" aria-label="Next">
                    <span aria-hidden="true" class="btn-next"><i class="uil uil-arrow-right btn-next"></i></span>
                  </a>
  </li>
  `
  });

}
