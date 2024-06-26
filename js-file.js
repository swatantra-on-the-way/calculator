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
let dotKey = document.querySelector(".dotKey.input");
let input_buttons = document.querySelectorAll(".input");
let esc_button = document.querySelector(".backKey");

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
        if (num2 == 0){
            return "Math Error !!!";
        }
        result = divide(num1, num2);
    }
    if (result - Math.round(result) == 0){
        return result.toString();
    }
    // return truncateDecimal(result.toString());
    return result.toString();

}

function removeChar(){
    if (displayValue){
        let l = displayValue.length;
        if (displayValue.substring(l - 1) === " "){
            displayValue = displayValue.substring(0, l - 3);
        }

        else{
            displayValue = displayValue.substring(0, l - 1);
        }
    }
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", (event) => {
    if (event.target.classList.contains("clearKey")){
        displayValue = "";
        prevKey = "";
        prevValue = ""
        input_buttons.forEach((btn) => {
            btn.disabled = false;
            btn.classList.remove("mask");
        });
        esc_button.disabled = false;
        esc_button.classList.remove("mask");

        screen.classList.remove("error");
        screen.textContent = "0";
        return;
    }
    else if (event.target.classList.contains("numKey")){
        if ((displayValue != "") && (prevKey.classList.contains("equalKey"))){
            displayValue = event.target.textContent;
        }
        else {
            if (sign) {
                displayValue = prevValue + event.target.textContent;
                sign = 0;
            }
            else {
                displayValue += event.target.textContent;
            }
        }

    }

    else if(event.target.classList.contains("dotKey")){
        if(displayValue){
            if (prevKey.classList.contains("equalKey")){
                displayValue = ".";
            }
            else {
                displayValue += ".";
            }
        }
        else {
            displayValue = ".";
        }
        event.target.disabled = true;
        dotKey.classList.add("mask");
    }


    //Find out if the expression is complete to evaluate
    else if ((event.target.classList.contains("opKey")) || (event.target.classList.contains("equalKey"))){
        dotKey.disabled = false;
        dotKey.classList.remove("mask");
        if (errorCheck(prevKey, event.target)) {
            displayValue = "Math Error !!!";
        }

        else {
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

    else if (event.target.classList.contains("backKey")){
        removeChar();
    }

    if (displayValue === "Math Error !!!"){
        input_buttons.forEach((btn) => {
            btn.classList.add("mask");
            btn.disabled = true;
        })
        esc_button.disabled = true;
        esc_button.classList.add("mask");
        screen.classList.add("error");
        
    }

    prevKey = event.target;
    prevValue = event.target.textContent;
    screen.textContent = displayValue;
}));

function errorCheck(prevKey, currKey) {
    if (displayValue) {
        if (prevKey.classList.contains("opKey") || prevKey.classList.contains("dotKey")){
            return true;
        }
    }
    else {
        if(currKey.textContent == "*" || currKey.textContent == "/"){
            return true;
        }
    }
    return false;
}

