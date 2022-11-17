let numero1 = parseInt(prompt("Ingrese un numero"));
let operacion = prompt ("Ingresa una operacion +, -, *, /");
let numero2 = parseInt(prompt("Ingrese un numero"));
let mensaje;
if(operacion=== "/" && numero1 ===0 || numero2===0){
    alert("No se puede dividir por 0")
}else{if(operacion!= "+, -, /, *"){
    alert("Ingrese un operador valido entre +, -, *, / para optener un resultado valido")
    }else{
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
        }
    }
}


alert ("Su resultado es" + " " + mensaje);
