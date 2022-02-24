                                 /*
let IngresarNombre = prompt("Ingrese su nombre");
let IngresarApellido = prompt("Ingrese su apellido");

let fullName = IngresarNombre + " " + IngresarApellido;

console.log("Nombre del Usuario: " + fullName.toUpperCase()); //Escribe un String y devuelve una variable a la que le he puesto un metodo para convertir en mayusculas.
console.log("¡Bienvenido, " + IngresarNombre + "!");
                                  */


/*Actividad 1*/
/*
let name = "Homer";
let apellido = "Simnson";
let edad = 44;
*/
/*Actividad 2*/
/*
function actividad2() {
  const CITY1 = "New York";
  const CITY2 = "Boston";
  const CITY3 = "Las Palmas";
  const CITY4 = "Barcelona";
  const CITY5 = "Baly";
}
*/

/*Actividad 3*/
/*
class Carnet {
  constructor(name, apellido, sexo, nacimiento, ciudad, caducidad) {
    this._name = name;
    this._apellido = apellido;
    this._sexo = sexo;
    this._nacimiento = nacimiento;
    this._ciudad = ciudad;
    this._caducidad = caducidad;
  }
}

let carnet1 = new Carnet(
  "Jose Daniel",
  "De Luis Ramirez",
  "H",
  "07-02-95",
  "Las Palmas",
  2026
);

console.log(`Ciudad de expedicion del carnet: ${carnet1._ciudad}. \n 
            Nombre: ${carnet1._name}
            Apellido: ${carnet1._apellido}
            Fecha de Nacimiento: ${carnet1._nacimiento}
            Sexo: ${carnet1._sexo}
            Caducidad: ${carnet1._caducidad}
            `);

*/
/*Actividad 4*/
                                   /*
const unidadFamiliar = () => {
  let names = [];

  for (let i = 0; i < 5; i++) {
    let x = prompt("Por Favor, introduce 5 nombres de su unidad familiar");
    names[i] = x;
  }
  alert(`Su unidad familiar se compone de: \n
    ${names[0]},
    ${names[1]},
    ${names[2]},
    ${names[3]},
    ${names[4]},
`);
};

unidadFamiliar();
                                    */


/*Actividad 5: Descuentos*/
/*
let totalPrice = prompt('Ingrese la cantidad total de su compra');
let descuento = prompt('Ingrese el descuento que desea (20%,30%,40%..)');
let descontado = totalPrice * descuento / 100;
let precioFinal = totalPrice - descontado;

console.log(`El descuento sobre la compra total introducida: ${totalPrice}, con el descuento de un ${descuento}%, es: ${descontado}, por lo que el precio final del producto se queda en: ${precioFinal}.
`)

*/

/*Actividad 6: Descuentos*/
/*
let nombreUsuario = prompt("Introduce tu nombre")
let name1 = "Pedro";
let name2 = "Juan";

if (nombreUsuario == name1 || nombreUsuario == name2 ) {
    console.log("Fui yo")
} else {
    console.log("Yo no fui")
}
*/

/*Actividad 7: Apretar Y*/
//El enunciado estaba mal, se debe usar || como habia pensado en un principio
/*
let teclaIntroducida = prompt("Pulsa cualquier tecla");

let teclaY = "Y";
let teclay = "y";

if (teclaIntroducida == teclaY || teclaIntroducida == teclay) {
    console.log("Correcto")
} else {
    console.log("Error");
};
*/