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

let num1 = 0;
let num2 = 0;
let op = "";
let displayValue = "";
let screen = document.querySelector(".screen");

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
    if (button.className == "numKey"){
        displayValue += event.target.textContent;

    }

    else if (button.className == "opKey"){
        displayValue += " " + event.target.textContent + " ";
    }

    else if (button.className == "equalKey") {
        let arr = displayValue.split(" ");
        displayValue = operate(Number(arr[0]), Number(arr[2]), arr[1]);

    }

    screen.textContent = displayValue;
}));