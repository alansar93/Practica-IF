const USUARIO_NOMBRE_REGISTRADO = "pepe";
const USUARIO_CONTRASENIA_REGISTRADA = "asd123";
const USUARIO_NOMBRE_REGISTRADA1 = "laura";
const USUARIO_CONTRASENIA_REGISTRADA1 = "123asd";


let nombreUsuarioIngresado = prompt("ingrese nombre de usuario");
let contraseniaUsuarioIngresado = prompt("ingrese contrasenia");

if ((nombreUsuarioIngresado == USUARIO_NOMBRE_REGISTRADO) && (contraseniaUsuarioIngresado == USUARIO_CONTRASENIA_REGISTRADA))  {
    document.write("bienvenido")
    } else if ((nombreUsuarioIngresado == USUARIO_NOMBRE_REGISTRADA1) && (contraseniaUsuarioIngresado == USUARIO_CONTRASENIA_REGISTRADA1)){
        document.write ("bienvenida")
    }else document.write("incorrecto")

 
// Hecho con ayrton