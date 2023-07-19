let yellow = document.getElementById('yellow')
let green = document.getElementById('green')
let red = document.getElementById('red')
let white = document.getElementById('white')

let content = document.getElementById('content')

let size = document.getElementById('sld-line-height')
let index = document.getElementById('sld-text-align')

let increase = document.getElementById('increase')
let decrease = document.getElementById('decrease')


// localStorage.setItem("fontSize", 1);
// localStorage.setItem("textAlign", 2);
// localStorage.clear()


let size1= localStorage.getItem('fontSize')
content.style.fontSize=size1

// content.style.fontSize=localFontSize;
// index.style.textAlign=localTextAlign;

index.addEventListener('change', () => {
  // if (index.value === 'left') {
  //   console.log('11');
  //   content.style.textAlign = "left"
  // }
  content.style.textAlign = index.value
  content.style.textAlign = index.value
  content.style.textAlign = index.value
  content.style.textAlign = index.value
  // localStorage.setItem
})


size.addEventListener('change', () => {
  console.log(size.value);
  if (+size.value === 1) {
    // console.log('1',1);
    content.style.lineHeight = '1';

  }
  if (+size.value === 2) {
    // console.log('2',2);
    content.style.lineHeight = '2';


  }
  if (+size.value === 3) {
    // console.log('3',3);
    content.style.lineHeight = '3';
  }
})
increase.addEventListener('click', () => {
  let value = window.getComputedStyle(content).getPropertyValue('font-size')
  value = parseInt(value)
  value++;
  content.style.fontSize = value + 'px';
  localStorage.setItem("fontSize", value+'px')
 
})
decrease.addEventListener('click', () => {
  let value = window.getComputedStyle(content).getPropertyValue('font-size')
  value = parseInt(value)
  value--;
  content.style.fontSize = value + 'px';
})

yellow.addEventListener('click', () => {
  // content.style.color='yellow'
  changeColor('yellow')
})
green.addEventListener('click', () => {
  // content.style.color='yellow'
  changeColor('green')
})
red.addEventListener('click', () => {
  // content.style.color='yellow'
  changeColor('red')
})
white.addEventListener('click', () => {
  // content.style.color='yellow'
  changeColor('white')
})

function changeColor(name) {
  if (name === 'yellow') {
    content.style.color = 'yellow'
  }
  if (name === 'red') {
    content.style.color = 'red'
  }
  if (name === 'green') {
    content.style.color = 'green'
  }
  if (name === 'white') {
    content.style.color = 'white'
  }
  // return content.style.color;
}