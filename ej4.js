//4- Realiza un script que pida números hasta que se pulse “cancelar”. 
//Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
//Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let suma = 0;
while(confirm('quieres agregar otro numero?')) {
    let numero = prompt("introduce un numero");
    if (Number(numero) == numero) {
        numero = Number(numero);
        suma= suma + numero;
    } else {
        if (numero != undefined) {
            alert(numero + " no es un numero");
        }
    }
}
document.write(suma);