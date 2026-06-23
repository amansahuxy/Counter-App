let count=0;

let countText=document.getElementById("count");
 const incBtn=document.getElementById("incr");
 const dcrBtn=document.getElementById("dcr");
 const rstBtn=document.getElementById("rst");

 incBtn.addEventListener("click",()=>{
    count++;
    countText.innerText=count;
    
 })

  dcrBtn.addEventListener("click",()=>{
    count--;
    countText.innerText=count;
    
 })
  rstBtn.addEventListener("click",()=>{
    count=0;
    countText.innerText=count;
    
 })