const cables =  document.querySelectorAll(".cable");
const btn = document.querySelector(".btn");
const index = [];
const title2 =  document.querySelector(".title");
const displayB = () =>{
  const cableWhiteGreen = document.querySelector(".cable:nth-child(1)");
const cableGreen = document.querySelector(".cable:nth-child(2)");
const cableWhiteOrange = document.querySelector(".cable:nth-child(3)");
const cableBlue = document.querySelector(".cable:nth-child(4)");
  const cablewhiteBlue = document.querySelector(".cable:nth-child(5)");
const cableOrange = document.querySelector(".cable:nth-child(6)");
  
  if(cableWhiteOrange.style.order){

    cables.forEach(item=>item.style.removeProperty('order'));
    title2.textContent ="568-A";
  }
  else{

  cableWhiteOrange.style.order ="-8";
  cableOrange.style.order ="-7";
  cableWhiteGreen.style.order ="-6";
  cableGreen.style.order ="-2";
  cableBlue.style.order ="-3";
  cablewhiteBlue.style.order ="-3";
    title2.textContent ="568-B";
    
    
  }

  
}

btn.addEventListener("click",displayB);


