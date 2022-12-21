function rechner(){
    var operand1 = document.getElementById("Zahl1").value;
    var operand2 = document.getElementById("Zahl2").value;
    var operator = document.getElementById("operator").value;
    var res;

    switch (operator) {
      case "+" :
        res = parseFloat(operand1) + parseFloat(operand2)
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