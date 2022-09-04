/*17- Realiza un script que muestre la posición de la primera vocal de un texto 
introducido por teclado.*/
let texto17 = prompt("ingrese un texto");
let i = 0;
let posicion = 0;
do {
    if (texto17.substr(posicion,1)=="a" || texto17.substr(posicion,1)=="e"|| texto17.substr(posicion,1)=="i"|| texto17.substr(posicion,1)=="o"|| texto17.substr(posicion,1)=="u") {
        document.write("la posicion de la primera vocal es " + posicion);
        i++;
    }else{
        posicion++
    }
} while (i==0);