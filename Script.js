// function taschenrechner() {
//     var operator = document.getElementById("operator");
//     var a = document.getElementById("Zahl1").value;
//     var b = document.getElementById("Zahl2").value;
//     var x = document.getElementById("operator").value;

//     if (operator == "+") {
//         x = a + b;
//         alert(x);
//     } else if (operator == "-") {
//         x = a - b;
//         alert(x);
//     } else if (operator == "*") {
//         x = a * b;
//         alert(x);
//     } else if (operator == "/") {
//         x = a / b;
//         alert(x);
//     } else if (operator == "%") {
//         x = a % b;
//         alert(x);
//     } else {
//         alert("Bitte für den Operator nur folgende Zeichen benutzen: +, -, *, /, %")
//     }

//     switch (operator) {
//         case "+":
//             x = a + b
//             alert(x);
//         case "-":
//             x = a - b
//             return x;
//         case "*":
//             x = a * b;
//             return x;
//         case "/":
//             x = a / b;
//             return x;
//         case "%":
//             x = a % b;
//             return x;
//         default:
//             alert("Bitte für den Operator nur folgende Zeichen benutzen: +, -, *, /, %")
//             break;
//     }
// }

function rechner(){
    var operand1 = document.getElementById("Zahl1").value;
    var operand2 = document.getElementById("Zahl2").value;
    var operator = document.getElementById("operator").value;
    var res;

    switch (operator) {
      case "+" :
        res = parseInt(operand1) + parseInt(operand2)
        break;
      case "-" :
        res = operand1 - operand2
        break;
      case "*" :
        res = operand1 * operand2
        break;
      case "/" :
        res = operand1 / operand2
        break;
      case "%" :
        res = operand1 % operand2
        break;
      default :
        alert("Bitte überprüfe deine Eingabe nochmals!");
        break;
    }
    alert(res);
  }

function coinFlip() {
    var coin = Math.floor(Math.random() * 2);
    if (coin == 0) {
        alert("Es ist Kopf!");
    } else {
        alert("Es ist Zahl!")
    }
}