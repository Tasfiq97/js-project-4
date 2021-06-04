let textInput= document.getElementById("text-input")

let addBtn=document.getElementById("btn-add")

let cardDisplay=document.getElementById("card-display")
    
let noNote=document.getElementById("no-note")

let removeArea= document.getElementById("btn-remove")
let viewBtn= document.getElementById("view-full")


let showFull =document.getElementById("show-note")

   let alertFunc =document.getElementById("alert")

addBtn.addEventListener("click", function(){
  if(textInput.value==""){
   alertFunc.innerHTML=`<div id="alert" class="alert alert-danger" role="alert">
  please write something !!!
 </div>`
 alertFunc.style.fontSize="1.2rem"
setTimeout(() => {
  alertFunc.innerHTML=""
}, 2000);
  }else{
let newCard=document.createElement("div")
cardDisplay.appendChild(newCard)

noNote.replaceWith(newCard)
if(textInput.value.length < 30){
  newCard.innerHTML=`<div class='row' style='width: 18rem'>
<div class='col-sm-6'>
  <div class='card'>
    <div class='card-body'>
     <p class='card-text'>`+" "+ textInput.value+ "💯" +" "+
     `
    </div>
  </div>
</div>
</div>`
 
}else{
  newCard.innerHTML=`<div class='row'>
  <div class='col-sm-6'>
    <div class='card'>
      <div class='card-body'>
       <p class='card-text'>`+ 'click to view full note ' +
       `
      
      </div>
    </div>
  </div>
  </div>`
  let btnElm=document.createElement("button")
   newCard.appendChild(btnElm)
   btnElm.innerHTML="view full size"
btnElm.addEventListener("click",function(){
  newCard.innerHTML= newCard.innerHTML=`<div class='row'>
  <div class='col-sm-6' style='width: 18rem'>
    <div class='card'>
      <div class='card-body'>
       <p class='card-text'>`+ textInput.value +
       `
      
      </div>
    </div>
  </div>
  </div>`

})
}


removeArea.addEventListener("click",function(){
  textInput.value=""
})




}

})







