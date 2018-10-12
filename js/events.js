//define functions here
function getIt(){
  $('p').on('click',(e)=>{alert('Hey!')})
}

function frameIt(){
  $('img').on('load',(e)=>$('img').addClass('tasty'))
}

function pressIt(){
  $('input').on('keydown',(e)=>{
    if(e.key==='G'){
      alert('You have pressed "G"!')
    }
  })
}

function submitIt(){
  $('form').on('submit',(e)=>{alert('Your form is going to be submitted now.')})
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()
submitIt()
// call functions here
});
