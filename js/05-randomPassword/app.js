let lenght = document.getElementById('input-length');
let btnGenerate = document.getElementById('btn-generate');
let numberLenght = 0;
let result = document.getElementById('result');
let setlength = document.getElementById('length')
let checkboxNumbers = document.getElementById('checkbox-numbers')
let checkboxLetters = document.getElementById('checkbox-letters')
let checkboxSymbol = document.getElementById('checkbox-symbols')
lenght.addEventListener('input', () => {
  console.log('lenght:', lenght.value)
  numberLenght = lenght.value;
  setlength.innerText = numberLenght
})

function ranDomNumber() {
  let number = '0123456789'
  return number[Math.floor(Math.random() * number.length)]
}

function ranDomLetters() {
  var LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return LETTERS[Math.floor(Math.random() * LETTERS.length)]
}
function ranDomSymbol() {
  var SYMBOLS = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
}
let check1;
let check2;
let check3;
let array = ['']
checkboxNumbers.addEventListener('change', () => {
  check1 = checkboxNumbers.checked;

})
console.log(check1)
checkboxLetters.addEventListener('change', () => {
  check2 = checkboxLetters.checked;

})
console.log(check2)
checkboxSymbol.addEventListener('change', () => {
  check3 = checkboxSymbol.checked;
})
console.log(check3)


console.log(ranDomNumber())
console.log(ranDomLetters())
console.log(ranDomSymbol())


function ranDom() {
  let array = [ranDomNumber(), ranDomLetters(), ranDomSymbol()]
  return array[Math.floor(Math.random() * array.length)]
}
function ranDom1() {
  let array = [ranDomNumber(), ranDomLetters()]
  return array[Math.floor(Math.random() * array.length)]
}
function ranDom2() {
  let array = [ranDomNumber(), ranDomSymbol()]
  return array[Math.floor(Math.random() * array.length)]
}
function ranDom3() {
  let array = [ranDomSymbol(), ranDomLetters()]
  return array[Math.floor(Math.random() * array.length)]
}
btnGenerate.addEventListener('click', (e) => {
  let lenght1 = numberLenght
  let number1 = '';
  console.log('lenght:', lenght1)
  if((check1===true)&&(check2!==true)&&(check3!==true)){
    for (let index = 0; index < lenght1; index++) {
      number1+=ranDomNumber();      
    }
    console.log('check1 true:',number1)
  }
  if((check1!==true)&&(check2===true)&&(check3!==true)){
    for (let index = 0; index < lenght1; index++) {
      number1+=ranDomLetters();      
    }
    console.log('check2 true:',number1)
  }
  if((check1!==true)&&(check2!==true)&&(check3===true)){
    for (let index = 0; index < lenght1; index++) {
      number1+=ranDomSymbol();      
    }
    console.log('check3 true:',number1)
  }
  if(((check1===true)&&(check2===true))&&(check3!==true)){
    for (let index = 0; index < lenght1; index++) {
      number1+=ranDom1();      
    }
    console.log('check1 check2 true:',number1)
  }
  if((check1===true)&&(check2!==true)&&(check3===true)){
    for (let index = 0; index < lenght1; index++) {
      number1+=ranDom2();      
    }
    console.log('check1 check3 true:',number1)

  }
  if((check1!==true)&&(check2===true)&&(check3===true)){
    for (let index = 0; index < lenght1; index++) {
      number1+=ranDom3();      
    }
    console.log('check2 check3 true:',number1)

  }
  if((check1===true)&&(check2===true)&&(check3===true)){
    for (let index = 0; index < lenght1; index++) {
      number1+=ranDom();      
    }
    console.log('check1 check2 check3 true:',number1)

  }
  result.innerText=number1
  

}
)
