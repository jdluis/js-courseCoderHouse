/*
¿Que animal el cual contiene 5 letras estamos escondiendo? */


let animal = "tigre";
let pista1 = "i";
let pista2 = "e";
let cont = 4;
let propuesta;

    do {
         propuesta = prompt("¿Que animal contiene 5 letras, tienes " + cont + " intentos.")
         if(propuesta != animal && cont > 2) {
            alert ("Intentalo de nuevo");
        } else if (cont == 1) {
            alert("Te ayudo un poco mas, contiene la letra: " + pista2)
        } else if (cont == 2) {
            alert("Te ayudo un poco, contiene la letra: " + pista1)
        } else if (propuesta == animal) {
            alert ("Enhorabuena el animal era " + animal);
            break
        }
        cont = cont - 1;
    } while (cont >= 0) {

    }
   
    if (propuesta != animal) {
        alert("Que pena, no lo has conseguido")
    }
