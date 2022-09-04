/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – 
entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, 
deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/
let texto_cadena = prompt("ingrese un texto");
let longitud_cadena = texto_cadena.length;
let texto;
let i;
for (i = 0; i < longitud_cadena ; i++) {
    texto = texto_cadena.charAt(i);
    if (i == longitud_cadena -1) {
        document.write(texto)
    } else {
        document.write(texto + "-")
    }
    
}