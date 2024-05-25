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
let prevKey = "";
let prevValue = "";
let sign = 0;
let error = false;
let input_buttons = document.querySelectorAll(".input");

function operate(num1, num2, op){
    let result = 0;
    if (op === "+"){
        result = add(num1, num2);
    }
    else if (op === "-"){
        result = subtract(num1, num2);
    }
    else if (op === "*"){
        result = multiply(num1, num2);
    }
    else if (op === "/"){
        result = divide(num1, num2);
    }

    return truncateDecimal(result).toString();

}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", (event) => {
    if (event.target.classList.contains("clearKey")){
        displayValue = "";
        input_buttons.forEach((btn) => {
            btn.disabled = false;
        });
    }
    else if (event.target.classList.contains("numKey")){
        if ((displayValue != "") && (prevKey.classList.contains("equalKey"))){
            displayValue = event.target.textContent;
        }
        else {
            if (sign) {
                displayValue = Number(prevValue + event.target.textContent).toString();
                sign = 0;
            }
            else {
                displayValue += event.target.textContent;
            }
        }

    }
    //Find out if the expression is complete to evaluate
    else if ((event.target.classList.contains("opKey")) || (event.target.classList.contains("equalKey"))){
        if (errorCheck(prevKey, event.target)) {
            displayValue = "Math Error ... ";
            input_buttons.forEach((btn) => {
                btn.disabled = true;
            })
        }

        else {
            console.log("if else condition didn't execute.");
            let arr = displayValue.split(" ");
            let no_of_spaces = arr.length - 1;
            if (no_of_spaces == 2 ){
                displayValue = operate(Number(arr[0]), Number(arr[2]), arr[1]);
            }

            //Add spacing only if it's an operation key
            if (event.target.classList.contains("opKey")){
                if ((event.target.textContent == "+" || event.target.textContent == "-") && displayValue == ""){
                    sign = 1;
                }
                displayValue += " " + event.target.textContent + " ";
            }
        }
    }

    prevKey = event.target;
    prevValue = event.target.textContent;
    screen.textContent = displayValue;
}));

function errorCheck(prevKey, currKey) {

    if (displayValue) {
        if ((prevKey.classList.contains("arith")) && ( (currKey.classList.contains("arith")) || currKey.classList.contains("equalKey"))){
            return true;
        }
    }
    else if((currKey.textContent == "*") || (currKey.textContent == "/")){
        return true;
    }
    return false;
}

function truncateDecimal(value){
    let arr = (value.toString()).split(".");
    if (arr[1]. length > 2){
        return (value.toFixed(2));
    }
    else{
        return value;
    }

}