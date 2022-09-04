/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/
let cadenatex = prompt("ingresa un texto");
let long_cadena = cadenatex.length;
let j;
let resultado = ""
for ( j = 0; j < long_cadena; j++) {
    const element = cadenatex.charAt(j);
    resultado = element + resultado;
}
document.write(resultado);