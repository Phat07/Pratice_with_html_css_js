// truy xuất thông qua by Id  
let elmH1 = document.getElementById('title')
console.log("elmH1", elmH1)
let contentH1 = elmH1.innerText;
console.log("contentH1", contentH1)
// gán nội dung vào thẻ html 

// anonymous function -> hàm không tên
// phương thức addListener
let bntChangeTitle = document.getElementById('btn-change-title')
bntChangeTitle.addEventListener("click", () => {
  // console.log('hello')
  elmH1.innerText = elmH1.innerText + '01';
})

