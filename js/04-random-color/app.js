let btn=document.getElementById('btn');
let id=document.getElementById('id');
let color=document.getElementById('color');
btn.addEventListener('click',function(){
    let array='';
    // console.log(array)
    for (let index = 0; index < 6; index++) {
      array+=ranDom6()      
    }
    id.innerText='#'+array;
    color.style.backgroundColor=id.innerText
    btn.style.backgroundColor=id.innerText
    // console.log(id.innerText)
})

let number=ranDom6()
// console.log(number)
// let id1='abcdef0123456789'
// console.log(id1.length)
// console.log(Math.floor(Math.random()*id1.length))
function ranDom6(){
  let id='abcdef0123456789'
  return id[Math.floor(Math.random()*id.length)]
}

