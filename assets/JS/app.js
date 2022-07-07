
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
    li=`<li><span class="span" id="content">${input}</span><button id="del" class="btn btn-danger" onclick="Delete(event)">Delete</button></li>`
    document.getElementById('ul').innerHTML +=li
  

    
}


ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('check');
  }
}, false);

