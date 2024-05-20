let buttons = document.querySelectorAll(".disable");
function disableButtons(){
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function enableButtons(){
    buttons.forEach((button) => {
        button.disabled = false;
    });
}


function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function splitOperation(expr) {
    let arr = expr.split(" ");


    console.log(`expr length = ${expr.length}`);
    console.log(`expr content = ${expr}`);
    console.table(arr);

    if (arr.length == 1)
    {
        return expr;
    }
    else if(arr[2] == ""){
        disableButtons();
        return error;
    }
    let num1 = +arr[0];
    let num2 = +arr[2];
    let operator = arr[1];
    console.log("Here - 3rd");
    return operate(operator, num1, num2);
}

function operate(operator, num1, num2){
    let result = 0;
    if (operator === "+"){
        result = add(num1, num2);
    }
    else if (operator === "-"){
        result = subtract(num1, num2);
    }
    else if (operator === "*"){
        result = multiply(num1, num2);
    }
    else if (operator === "/"){
        result = divide(num1, num2);
    }
    return Math.round((result + Number.EPSILON) * 100) / 100;
}
screen = document.querySelector(".screen");
let input = screen.textContent;
displayValue = "";
addListenerToButtons();
let error = "Error!";


function addListenerToButtons() {
    keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
        key.addEventListener("click", (event) => {
            if(key.textContent === "+" || key.textContent === "-" || key.textContent === "*" || key.textContent === "/"){
                let result = splitOperation(displayValue);
                if (result == error){
                    displayValue = result;
                }
                else {
                    displayValue = result + " " + key.textContent + " ";
                }
            }
            else if(key.textContent === "="){
                console.log(displayValue);
                let result = splitOperation(displayValue).toString();
                displayValue = result;
            }
            else if (key.textContent === "CLS"){
                enableButtons();
                displayValue = "";
            }
            else{
                displayValue += key.textContent;
            }
            screen.textContent = displayValue;
        })

    })
}


