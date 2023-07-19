console.log("hello world");
let score1=document.getElementById("box-score1");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");
let btn6=document.getElementById("btn6");
let score2=document.getElementById("box-score2");

btn1.addEventListener("click",function(){
    score1.innerText= +btn1.innerText + +score1.innerHTML
    if(score1.innerText<10){
      score1.innerText= 0 +score1.innerText;
    }
});
btn2.addEventListener("click",function(){
  score1.innerText= +btn2.innerText + +score1.innerHTML
  if(score1.innerText<10){
    score1.innerText= 0 +score1.innerText;
  }
});
btn3.addEventListener("click",function(){
  score1.innerText= +btn3.innerText + +score1.innerHTML
  if(score1.innerText<10){
    score1.innerText= 0 +score1.innerText;
  }
});
btn4.addEventListener("click",function(){
  score2.innerText= +btn4.innerText + +score1.innerHTML
  if(score2.innerText<10){
    score2.innerText= 0 +score2.innerText;
  }
});
btn5.addEventListener("click",function(){
score2.innerText= +btn5.innerText + +score1.innerHTML
if(score2.innerText<10){
  score2.innerText= 0 +score2.innerText;
}
});
btn6.addEventListener("click",function(){
score2.innerText= +btn6.innerText + +score1.innerHTML
if(score2.innerText<10){
  score2.innerText= 0 +score2.innerText;
}
});
