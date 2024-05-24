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

let displayValue = "";
let screen = document.querySelector(".screen");
let prevKey ="";

function operate(num1, num2, op){
    let result = 0;
    if (op === "+"){
        result = add(num1, num2);
    }
    else if (op === "-"){
        result = add(num1, num2);
    }
    else if (op === "*"){
        result = multiply(num1, num2);
    }
    else if (op === "/"){
        result = divide(num1, num2);
    }
    return result.toString();

}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", (event) => {
    if (event.target.className == "numKey"){
        if (prevKey == "equalKey"){
            displayValue = event.target.textContent;
        }
        else {
            displayValue += event.target.textContent;
        }

    }
    //Find out if the expression is complete to evaluate
    else if (event.target.className == "opKey" || event.target.className == "equalKey"){
        let arr = displayValue.split(" ");
        let no_of_spaces = arr.length - 1;
        if (no_of_spaces == 2){
            displayValue = operate(Number(arr[0]), Number(arr[2]), arr[1]);
        }
    }

    //Add spacing only if it's an operation key
    if (event.target.className == "opKey"){
            displayValue += " " + event.target.textContent + " ";
        }
    
    prevKey = event.target.className;
    screen.textContent = displayValue;
}));