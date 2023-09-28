const outputList = [];//creating a array to hold input value


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
  const stringExpression = new String(outputList);//making inputValues into a expression
  const expression = stringExpression.replaceAll(",","");//removing commas from stringExpression
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
  const stringExpression = new String(outputList);//making inputValues into a expression
  const expression = stringExpression.replaceAll(",","");//removing commas from stringExpression
  outputList.length = 0;//clearing outputList 
  const result = evaluateExpression(expression);
  outputList.push(result);
  document.getElementById("result").value = result;
  updateDisplay();
}


function evaluateExpression(expression){

  const func =  new Function('return '+expression);//this function will return the calculated value
  return func();
}