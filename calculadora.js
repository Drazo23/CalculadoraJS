let numero1 = parseInt(prompt("ingrese un numero"));
let operacion = prompt ("Ingresa una operacion +, -, *, /");
let numero2 = parseInt(prompt("ingrese un numero"));

let mensaje;
switch (operacion){
    case "+":
        mensaje= (numero1 + numero2);
        break;
    case "*":
        mensaje= (numero1*numero2);
        break;
    case "/":
        mensaje= (numero1/numero2);
        break;
    case "-":
        mensaje= (numero1-numero2);
        break;
    default:
        mensaje= "ingrese una opcion correcta"
        break;
}

alert (mensaje);
