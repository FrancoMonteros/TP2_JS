//15- Realiza un script que cuente el número de vocales que tiene un texto.
let texto_voc = prompt("ingrese un texto");
let texto_long = texto_voc.length;
let contador = 0;
for (i = 0; i < texto_long; i++) {
    const element = texto_voc.toLowerCase().charAt(i);
    if ((element == "a") || (element == "e") || (element == "i") || (element == "o") || (element == "u")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");