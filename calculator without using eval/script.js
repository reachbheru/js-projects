const outputList = [];


function inputButton(inputValue) {
  if (inputValue === "=") {
    calculate();
  }
  else if (inputValue === "C") { 
    clear();
  }
  else {
    outputList.push(inputValue);
    updateDisplay();
  }
}


function updateDisplay() {
  const resultField = document.getElementById("result");
  const stringExpression = new String(outputList);
  const expression = stringExpression.replaceAll(",","");
  resultField.value = expression;
}


function clear() {
  outputList.length = 0;
  updateDisplay(); 
}


function backspace(){
    if(outputList.length > 0){
        outputList.pop();
    }
    updateDisplay();
}


function calculate() {
  const stringExpression = new String(outputList);
  const expression = stringExpression.replaceAll(",","");
  outputList.length = 0; 
  const result = evaluateExpression(expression);
  outputList.push(result);
  document.getElementById("result").value = result;
  updateDisplay();
}


function evaluateExpression(expression){

  const func =  new Function('return '+expression);
  return func();
}