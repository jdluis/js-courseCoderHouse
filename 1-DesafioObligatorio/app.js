let adminLog;

/*Datos provicionales del administrador principal*/
let adminName_1 = "";
let adminPass_1 = "";

/*Permite identificar cuando un Admin se ha logeado, devolviendo el valor true a la variable adminLogin, para mas adelante mostrar algo con ella*/
function Registrar() {
  adminName_1 = prompt("Introduzca su nombre");
  adminPass_1 = prompt("Introduzca su contraseña");
  alert("Admin registrado sadisfactoriamente");
  console.log("Se ha registrado correctamente el admin: " + adminName_1);
}

function Login() {
  let adminName = prompt("Introduzca su nombre");
  let adminPass = prompt("Introduzca su contraseña");

  if (adminName == adminName_1 && adminPass == adminPass_1) {
    console.log("Login realizado correctamente");
    alert("Bienvenido " + adminName);
    return (adminLog = true);
  } else {
    alert("No se ha podido logear, consulte el log");
    console.log(
      "Los datos introducidos no corresponden con ningun Administrador"
    );
    return (adminLog = false);
  }
}

//Simplemente uniendolo a un boton o algo funcionaria para cambiar el estado de log del admin
function Logout() {
  alert("Te has deslogeado correctamente");
  console.log("Admin " + adminName_1 + " deslogeado");
  return (adminLog = false);
}

//Init
Registrar();
Login();
Logout();
