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
    if (arr.length == 1){
        return +arr[0];
    }
    let num1 = +arr[0];
    let num2 = +arr[2];
    let operator = arr[1];
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


function addListenerToButtons() {
    keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
        key.addEventListener("click", (event) => {
            if(key.textContent === "+" || key.textContent === "-" || key.textContent === "*" || key.textContent === "/"){
                console.log(`display value is: ${displayValue}`);
                let result = splitOperation(displayValue);
                displayValue = result + " " + key.textContent + " ";
            }
            else if(key.textContent === "="){
                let result = splitOperation(displayValue).toString();
                displayValue = result;
                console.log(displayValue);
            }
            else if (key.textContent === "CLS"){
                displayValue = "";
            }
            else{
                displayValue += key.textContent;
            }
            screen.textContent = displayValue;
        })

    })
}


