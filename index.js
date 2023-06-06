console.log('Pre-Entrega 01');

/* Vamos a solicitarle al cliente que ingrese su nombre de usuario */

let userName = prompt ('Ingrese su nombre de usuario');
// vamos a repetir hasta que ingrese 'Matt1994'
while(userName != 'Matt1994'){
    switch(userName){
        case 'matt1994':
            alert('El nombre debe tener mayusculas');
            break;
        case 'MATT1994':
            alert('Solo la primer letra debe estar en mayúscula');
            break;
        default:
            alert('Nombre de usuario incorrecto');
            break;
    }
    userName = prompt('Ingrese su nombre de usuario');
    if(userName == 'Matt1994'){
        alert('Bienvenido!');
    }
}

/* Vamos a calcular el costo total de estos productos que quiere comprar el cliente. */
let play5 = 300000;
let joystick = 60000;
let fifa23 = 25000;

let resultado = play5 + joystick + fifa23;
console.log(resultado);

/* Vamos a determinar el monto en cuotas del cliente.*/

let cantidadDeCuotas = parseInt(prompt('Ingrese la cantidad de cuotas'));
console.log(cantidadDeCuotas);
const cuotas = function (resultado, cantidadDeCuotas) { return resultado / cantidadDeCuotas}
console.log( cuotas(resultado,cantidadDeCuotas));

/* Ejemplo de guia para realizar el ejercicio */

// const suma = function (a, b) { return a + b }
// const resta = function (a, b) { return a - b }
// console.log( suma(15,20) )
// console.log( resta(15,5) )