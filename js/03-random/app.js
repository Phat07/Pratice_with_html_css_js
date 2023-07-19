let number1=document.getElementById('number1')
let number2=document.getElementById('number2')
let id=document.getElementById('both')
let click=document.getElementById('click')

click.addEventListener('click',() =>{
  let b1=number1.value
  let b2=number2.value
  let number;
  number=getRndInteger(+b1,+b2)
  console.log(number)
  if(number<b2 && number>b1){
    id.value=number
  }
})
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// let arr=[1,2,3]
// let ar1= arr.map((i)=>
//   i+1
// )
// console.log(ar1)
