const nav=document.getElementById('main-menu-item');
const row=document.getElementById('row')
const firstRow=document.getElementById('first-row')
const lastRow=document.getElementById('row-last')
fetch('https://apiforlearning.zendvn.com/api/v2/categories_news')
.then((respone)=> respone.json())
.then((res)=>{
  console.log(res);
  const data=res.data
  renderMenu(data)
})

function renderMenu(items){
  let html=''
  items.forEach(e => {
    html+=`<li class="nav-item">
    <a class="nav-link" href="#">${e.name}</a>
  </li>`
  });
  nav.innerHTML=html
}
function renderRow(items){
  let html=''
  items.forEach(e => {
    html+=`<div class="col-6">
    <div class="card mb-4">
      <img src="${e.thumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${e.title}</h5>
        <p class="card-text">${e.description}</p>
      </div>
    </div>
  </div>`
  });
  row.innerHTML=html
}
fetch('https://apiforlearning.zendvn.com/api/v2/articles?limit=4')
.then((respone)=>respone.json())
.then((res)=>{
  const data=res.data
  renderRow(data)
  console.log(data);
})
fetch('https://apiforlearning.zendvn.com/api/v2/articles/popular?limit=7')
.then((respone)=>respone.json())
.then((res)=>{
  const data=res.data
  console.log(data);
  const rowFirst=data.slice(0,2)
  renderPopularFirstRow(rowFirst)
  const rowLast=data.slice(2)
  renderPopularLastRow(rowLast) 

})
function renderPopularFirstRow(items){
  let html=''
  items.forEach(e => {
    html+=`<div class="col-6">
    <div class="card">
      <img src="${e.thumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${e.title}</h5>
        <p class="card-text">${e.description}
        </p>
      </div>
    </div>
  </div>`
  });
  firstRow.innerHTML=html
}
function renderPopularLastRow(items){
  let html=''
  items.forEach(e => {
    html+=`<div class="row">
    <div class="col-4">
      <img src="${e.thumb}" class="img-fluid rounded"
        alt="...">
    </div>
    <div class="col-8">
      <h4>${e.title}</h4>
      <p>${e.publish_date}</p>
    </div>
  </div>`
  });
  lastRow.innerHTML=html
}



