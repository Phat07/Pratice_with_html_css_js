let number = document.getElementById('number');
// console.log(number)
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let save = document.getElementById('save');
let savednumber = document.getElementById('saved-number')
increase.addEventListener('click', () => {
  number.innerText++;
  // setNewValue('increase')
  // console.log(value)

})
decrease.addEventListener('click', () => {
  number.innerText--;
})
reset.addEventListener('click', () => {
  number.innerText = 0;
})
save.addEventListener('click', () => {
  // value1=value;
  // console.log(value1)
  // array.push(value1)
  // let item=array.join('|')
  let save = number.innerText
  savednumber.innerText += save + '|'

  // savednumber.innerText = 'Save Numbers: ' + item + '|';
  // savednumber.innerText = 'Save Numbers: ' + value; 
})
function setNewValue(type='increase'){
  let contentH2=parseInt(number);
  switch(type){  
    case 'increase':
      contentH2+=1
      break;
    case 'decrease':
      contentH2-=1;
      break
    case 'reset':
      contentH2=0
      break
  }

}

