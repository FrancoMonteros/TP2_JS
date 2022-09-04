/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique 
el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/
let nombre1 = prompt("nombre 1");
let edad1 = parseInt(prompt("edad 1"));

let nombre2 = prompt("nombre 2");
let edad2 = parseInt(prompt("edad 2"));

let nombre3 = prompt("nombre 3");
let edad3 = parseInt(prompt("edad 3"));

let mayor = Math.max(edad1,edad2,edad3);
if (mayor == edad1) {
    document.write("El mayor es " + nombre1)
}if (mayor == edad2) {
    document.write("El mayor es " + nombre2)
}if (mayor == edad3) {
    document.write("El mayor es " + nombre3)
}