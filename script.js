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

     a = parseFloat(a);
     b = parseFloat(b);

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

function limitAndRoundNumber(number) {
    if (Math.round(number).toString().length > 9) {
        return "overflow";
    } else {
        const wholeDigits = Math.round(number).toString().length;
        const power = wholeDigits <= 8 ? 8 - wholeDigits : 0;
        const multiplier = 10**power;
        return Math.round(number * multiplier) / multiplier;
    };
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
        addDisplayValue("0");
        const divDisplay = document.querySelector('.display');
        divDisplay.classList.remove('nullWarning');
        calcStage = 0;
    };
    if (calcStage === 0) {
        if (e.target.className === "key number") {
            clearDisplay();
            addDisplayValue(e.target.id);
            const divDisplay = document.querySelector('.display');
            divDisplay.classList.remove('nullWarning');
            calcStage = 1;
        };
    }  else if (calcStage === 1) {
        if (e.target.className === "key number" && getDisplayValue().length < 9) {
            addDisplayValue(e.target.id);
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
            clearDisplay(); 
            if (e.target.id === "0") {
                addDisplayValue("What, Really? ...  Are You Ready for infinity ??"); 
                const divDisplay = document.querySelector('.display');
                divDisplay.classList.add('nullWarning');
                calcStage = 0;
            } else {
                addDisplayValue(e.target.id);
                calcStage = 3;
            };
            
        };
    } else if (calcStage === 3) {
        if (e.target.className === "key number" && getDisplayValue().length < 9) { 
            addDisplayValue(e.target.id);
        };

        if (e.target.className === "key operator") {
            a = limitAndRoundNumber(operate(op, a, getDisplayValue()));
            clearDisplay();
            addDisplayValue(a);
            if (a === "overflow") {
                calcStage = 0;
            } else {
                op = e.target.id;
                calcStage = 2;
            };
        };

        if (e.target.id === "enter") {
            b = getDisplayValue();
            const result = limitAndRoundNumber(operate(op, a, b));
            clearDisplay();
            addDisplayValue(result);
            if (result === "overflow") {
                calcStage = 0;
                a = b = "0";
            } else {
                a = result;
                b = "0";
                calcStage = 1;
            }; 
        };
    };
};

window.addEventListener('click', main);

//maximum 9 ziffern darstellen auch an anderen stellen im code
// add button highlighting


