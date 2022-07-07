
var addBtn=document.getElementById("btn_add");
var ul=document.getElementById("ul")
var li="";
var delbtn = document.getElementById('del')
var chkbox = document.getElementById('checkbox')
function Delete(event){
    event.target.parentElement.remove()
}



addBtn.onclick = ()=>{
    var input=document.getElementById("input").value;
    li=`<li><span class="span" id="content">${input}</span> <input id="checkbox" type="checkbox"><button id="del" class="btn btn-danger" onclick="Delete(event)">Delete</button></li>`
    document.getElementById('ul').innerHTML +=li
  

    
}


    
// function ticked(event){
//     document.getElementById('content').style.textdecoration ='line-through'

// }

var ul = document.querySelector('ul');
ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('check');
  }
}, false);

// chkbox.addEventListener('click',(event)=>{
//     if (event.target.tagName === 'input') {
//         event.target.classList.toggle('check');
//       }
//     }, false
// )

// addBtn.addEventListener("click",function() {
//  li=`<li>${input.value} <div class="btn btn-danger">Delete</div></li>`
//  ul.insertAdjacentHTML("beforeend",li)
//  document.getElementById("input").value=""
//  Getbtn()
// })

// function Getbtn() {
// document.querySelectorAll(".btn").forEach(x=>{
//    x.addEventListener("click",function (e) {
//     
//    })
//    li=ul.innerHTML
  
// })
// }
