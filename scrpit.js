let res=document.getElementById("result"); // acces the div 
function displayRes(val){
  res.innerText+=val; 
}

let boxes=document.querySelectorAll(".mainObj")
boxes.forEach((box)=>{
  box.addEventListener("click",(e)=>{
    let clickedValue = e.target.innerText;
    displayRes(clickedValue)
    console.log("click");
  })
})

// Backspace
let clear = document.querySelector(".clear");
clear.addEventListener("click",(e)=>{
  res.innerText.toString();
  let currentTExt = res.innerText;
    let newText = currentTExt.slice(0,-1);
    res.innerText = newText;
});

// clear Screen 
function clearSpace(){
  let nul = " "
  res.innerText = nul
}
let allClearBtn = document.querySelector(".clearBtn");
allClearBtn.addEventListener("click",clearSpace) 

// EqualTO btn 
let equalBtn = document.querySelector(".equalbtn");
equalBtn.addEventListener("click", (e)=>{
   let preResult =  res.innerText
   let result = eval(preResult);
   res.innerText = result;
})

// Operator repetation 
function displayRes(val){
  let lastChar = res.innerText.slice(-1);

  if((isOperator(lastChar) && isOperator(val)) || (lastChar === '.' && val === '.'))
  {
    return;
  }else{
    res.innerText += val;
  }
};

function isOperator(char){
  let operator = ['+','-','*','/','%']
  return operator.includes(char);
}