function rechner(a, b, operator) {
    var operator = document.getElementById("operator");
    var x = operator.getElementById("operator");

    if (operator == "+") {
        x = a + b;
        alert(x);
    } else if (operator == "-") {
        x = a - b;
        alert(x);
    } else if (operator == "*") {
        x = a * b;
        alert(x);
    } else if (operator == "/") {
        x = a / b;
        alert(x);
    } else if (operator == "%") {
        x = a % b;
        alert(x);
    } else {
        alert("Bitte für den Operator nur folgende Zeichen benutzen: +, -, *, /, %")
    }

    // switch (operator) {
    //     case "+":
    //         x = a + b;
    //         alert(x);
    //     case "-":
    //         x = a - b;
    //         return x;
    //     case "*":
    //         x = a * b;
    //         return x;
    //     case "/":
    //         x = a / b;
    //         return x;
    //     case "%":
    //         x = a % b;
    //         return x;
    //     default:
    //         alert("Bitte für den Operator nur folgende Zeichen benutzen: +, -, *, /, %")
    //         break;
    // }
}

function coinFlip() {
    var coin = Math.floor(Math.random() * 2);
    if (coin == 0) {
        alert("Es ist Kopf!");
    } else {
        alert("Es ist Zahl!")
    }
}