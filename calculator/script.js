// creating a list to hold input values
const outputList = [];

// function which takes input
function inputButton(value) {

    if (value === "=") {
        calculate();
    }
    else if (value === "C") {
        clear();
    }
    else{
        outputList.push(value)
        updateDisplay();
    }          
}

// function to display value
function updateDisplay() {

    const resultField = document.getElementById("result");
    resultField.value = outputList.join('');

}

// function for calculation
function calculate() {

    const expression = outputList.join('');
    const result = eval(expression);
    document.getElementById("result").value = result;
    outputList.length = 0;
    outputList.push(result.toString());

}

function clear() {

    outputList.length = 0;
    document.getElementById("result").values = '';
    document.getElementById("result").outerHTML= '<td><input type="text" id="result" readonly></td>';

}