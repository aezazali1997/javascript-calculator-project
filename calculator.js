const screen=document.querySelector('.screen');
let total=0;
let buffer="0";
let prevOperator=null;

const buttonClick = (value) =>{
      if(isNaN(value)){
        handleSymbol(value);
      }
      else{
        handleNumber(value);
      }
      screen.innerText=buffer;
}
function handleSymbol(symbol){
switch(symbol)
 { case 'C':
    total=0;
    buffer="0";
    break;
    case "←":
    if(buffer.length===1)
    {
      buffer="0"
    }
    else
    {
        buffer=buffer.substr(0,buffer.length-1);
        }
      break;
    case "=":
     if(prevOperator===null)
      {
        return
      }
      doCalculation(+buffer);
      prevOperator=null;
      buffer=total;
      total=0;
      break;
    case "÷": 
    case "×": 
    case "+": 
    case "-":
      handleMath(symbol);
      break; 
    }   
}
function handleMath(operator){
    if(buffer==='0'){
      return;
    }
    if(total===0){
      total=+buffer
    }
    else{
    doCalculation(+buffer);
}
prevOperator=operator;
buffer="0";
}
function doCalculation(value){
  if(prevOperator==='+'){
    total+=value;
  }
  else if(prevOperator==='-'){
    total-=value;
  }
  else if(prevOperator==='×'){
    total*=value;
  }
  else if(prevOperator==='÷'){
    total/=value;
  }
}
function handleNumber(numString)
        {
    if(buffer==="0"){
      buffer=numString
    }
    else{
      buffer+=numString;
    }
}


document.querySelector('.calc-btn')
.addEventListener('click',({target})=>{
    buttonClick(target.innerText);
})