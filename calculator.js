let userinput = document.getElementById("userinput")

let expression = '';

function press(num) {
    expression += num;
    userinput.value = expression;
}

function equal() {
    userinput.value = eval(expression);
    expression = '';
}

function mita() {
    expression = '';
    userinput.value = expression;
}