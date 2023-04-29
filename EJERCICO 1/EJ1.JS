/* const USUARIO_NOMBRE_REGISTRADO = "pepe";
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
 */

// Hecho con ayrton

const usuario = document.querySelector("#usuario");
const contrasenia = document.querySelector("#contrasenia");
const mensaje = document.querySelector("#mensaje");
const titulo = document.querySelector("#titulo");

titulo.innerHTML = "POR FAVOR INGRESE SU USUARIO Y CONTRASEÑA"
titulo.style.color = "brown";

function ingresar() {
    let usuario1 = usuario.value;
    let contrasenia2 = contrasenia.value;
    if (((usuario1 == "pepe") && (contrasenia2 == "asd123")) || ((usuario1 == "laura") && (contrasenia2 == "qwerty"))) {
        mensaje.innerHTML = "BIENVENIDO A SU PERFIL";
        mensaje.style.color = "green";
    } else mensaje.innerHTML = "Error en su usuario o contraseña"
           mensaje.style.color = "red"; {
    }
}