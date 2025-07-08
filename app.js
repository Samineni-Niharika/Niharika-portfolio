const toggle = document.getElementById("toggle");
const light=document.getElementById("light");
 const body=document.body
function f1(){
   
  toggle.classList.toggle("hide");
 
  light.classList.toggle("hide")
 
  body.style.backgroundColor='black'
  body.style.color='white'

  
  
}

function f2(){
   
  toggle.classList.toggle("hide");
  
  light.classList.toggle("hide")
  body.style.backgroundColor='white'
  body.style.color='black'
  


}
const sidebarr = document.getElementById("sidebarr");

function sidebar(){
 
 sidebarr.classList.toggle('hide');
}

const dwh = document.getElementById("dwh");
const dwl = document.getElementById("dwl");
function toggleDisplayByWidth(){
if(window.innerWidth<900)
{
  dwh.classList.add('hide')
  dwl.classList.remove('hide')

}
else{
   dwl.classList.add('hide')
  dwh.classList.remove('hide')
   sidebarr.classList.add('hide');
}
}

toggleDisplayByWidth();

window.addEventListener('resize', toggleDisplayByWidth);