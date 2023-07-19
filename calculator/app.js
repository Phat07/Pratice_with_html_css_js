let numberOne=document.getElementById('number-one');
let numberTwo=document.getElementById('number-two');
let result=document.getElementById('result')
let sum=document.getElementById('btn-sum')
let subtract=document.getElementById('btn-subtract')
let multiply=document.getElementById('btn-multiply');
let divide=document.getElementById('btn-divide')
sum.addEventListener('click',() =>{
  // let sumBoth= +number1 + +number2;
  // result.innerText='Result: '+sumBoth;
  bothNumber('sum');
})
subtract.addEventListener('click',() =>{
  // let sumBoth= +number1 - +number2;
  // result.innerText='Result: '+sumBoth;
  bothNumber('subtract')
})
multiply.addEventListener('click',() =>{
  // let number1=numberOne.value;
  // let number2=numberTwo.value;
  // let sumBoth= +number1 * +number2;
  // result.innerText='Result: '+sumBoth;
  bothNumber('multiply')
})
divide.addEventListener('click',() =>{
  // let number1=numberOne.value;
  // let number2=numberTwo.value;
  // let sumBoth= +number1 / +number2;
  // result.innerText='Result: '+ sumBoth.toFixed(3);
  bothNumber('divide')
})
function bothNumber(type='sum'){
  let number1=numberOne.value
  let number2=numberTwo.value
  let number;
  switch(type){
    case 'sum':
      number=+number1 + +number2
      break;
    case 'subtract':
      number=+number1 - +number2
      break;
    case 'multiply':
      number=+number1 * +number2
      break;
    case 'divide':
      number=+number1 / +number2
      number.toFixed(3)
      break;
  }
  result.innerText='Result: '+number
}
