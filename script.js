const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const operate = function (operator, a, b) {

     a = parseInt(a);
     b = parseInt(b);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

const clearDisplay = function() {
    const divDisplay = document.querySelector('.display');
    divDisplay.textContent = "";
};
const addDisplayValue = function (value) {
    const divDisplay = document.querySelector('.display');
    divDisplay.textContent += value;
};
const getDisplayValue = function () {
    const divDisplay = document.querySelector('.display');
    return divDisplay.textContent;
};

let a = "0";
let b = "0";
let op = "";
let calcStage = 0; // 0: initial 1: get 1st value 2: get op 3: get 2nd value, calculate and display
addDisplayValue("0");

const main = function (e) {
    
    if (e.target.id === "clear") {
        clearDisplay();
        a = b = "0";
        addD
    isplayValue("0");
        calcStage = 0;
    };
    if (calcStage === 0) {
        if (e.target.className === "key number") {
            clearDisplay();
            addD
        isplayValue(e.target.id);
            calcStage = 1;
        };
    }  else if (calcStage === 1) {
        if (e.target.className === "key number") {
            addD
        isplayValue(e.target.id);
        };

        if (e.target.className === "key operator") {
            op = e.target.id;
            a = getDisplayValue();
            calcStage = 2;
        };
    } else if (calcStage === 2) {
        if (e.target.className === "key operator") {
            op = e.target.id;
        };

        if (e.target.className === "key number") {
            clearDisplay(); // wahrscheinlich nicht wenn aus der loop kommend
            addD
        isplayValue(e.target.id);
            calcStage = 3;
        };
    } else if (calcStage === 3) {
        if (e.target.className === "key number") { 
            addD
        isplayValue(e.target.id);
        };

        if (e.target.className === "key operator") {
            a = operate(op, a, getDisplayValue());
            clearDisplay();
            addD
        isplayValue(a);
            op = e.target.id;
            calcStage = 2;
        };

        if (e.target.id === "enter") {
            b = getDisplayValue();
            const result = operate(op, a, b);
            clearDisplay();
            addD
        isplayValue(result);
            a = result;
            b = "0";
            calcStage = 1;
        }; 
    };
};

window.addEventListener('click', main);

