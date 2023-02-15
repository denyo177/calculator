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
let displayVal = "";

const displayNum = function (btn) {
    let id = btn.getAttribute('id');
    btn.addEventListener('click', function() {
        const divDisplay = document.querySelector('.display');
        divDisplay.textContent += id;
        displayVal = divDisplay.textContent;
        console.log(displayVal);
    });
    
};

// const keys = Array.from(document.querySelectorAll(".key"));
// keys.forEach(key => key.addEventListener('click'), displayNum() );

document.querySelectorAll('.key.number,#clear').forEach(button => displayNum(button));


// window.addEventListener('click', displayNum);


// key pressed : this numer in display
//eventlistener auf alle keys. den gewählten dann auslesen und 
// in display div mit der nr erstellen