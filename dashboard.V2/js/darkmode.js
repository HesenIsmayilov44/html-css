var check='dark';
document.getElementById('slider').addEventListener("click",function(){
 document.body.classList.toggle('light');
 if(check==='dark'){
  document.getElementById('mode').innerText='Dark Mode';
  check='light';
 }else{
   document.getElementById('mode').innerText='Light Mode';
   check='dark';
 }

})
let a=5;
let b='a';
if(a!==b)console.log("true");
else console.log('false');

/* Ilk once light mode ucun bu qeder kod yazmisdim :(  
var check=true;
    var body = document.getElementById('body');
    var cards = document.getElementsByClassName('cardjs');
    var header=document.getElementById('header');
    var black_text=document.getElementsByClassName('black-textjs');

  document.getElementById('slider').addEventListener("click",function(){

    if(check==true){
      for(var i=0;i<cards.length;i++){
      cards[i].style.background="#f0f3fb";
      }
      for(var i=0;i<black_text.length;i++){
      black_text[i].style.color="#1f222b";
      }

      header.style.background="#f7f9fe";
      body.style.background="white";

      check=false;

    }else if(check==false){
      for(var i=0;i<cards.length;i++){
      cards[i].style.background="#252b43";
      }
      for(var i=0;i<black_text.length;i++){
      black_text[i].style.color="#fffffd";
      }

      header.style.background="#20222f";
      body.style.background="#1e202a";
      check=true;
    }
  })
function hover(x){

  if(check==true)x.style.background="#343a58";
  else x.style.background="#e1e3f0";
}
function out(y){
  if(check==true)y.style.background="#252b43";
  else y.style.background="#f0f3fb";
}*/