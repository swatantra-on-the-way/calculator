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

function splitOperation(operation) {
    let arr = operation.split(" ");
    let num1 = +arr[0];
    let num2 = +arr[2];
    let operator = arr[1];
    operate(operator, num1, num2);
}

function operate(operator, num1, num2){
    if (operator === "+"){
        let result = add(num1, num2);
    }
    else if (operator === "-"){
        let result = subtract(num1, num2);
    }
    else if (operator === "*"){
        let result = multiply(num1, num2);
    }
    else if (operator === "/"){
        let result = divide(num1, num2);
    }
    else{
        let result = "Please recheck your operator value.";
    }
}

