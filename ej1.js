/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
si la edad ingresada no es un número válido indicarlo en un mensaje.*/
let edad_usuario =parseInt(prompt("ingrese su edad"));
let edad = 18
while (edad ) {
    if (edad <= edad_usuario) {
        alert("puedes conducir")
        break
    } else {
        alert("no puedes conducir")
        break
    }
}