/*8- Crea script para generar pirámide siguiente con los números del 1 al número 
que indique el usuario (no mayor de 50)
1
12
123
1234
12345
123456*/
let numero = parseInt(prompt("ingrese un numero"))
let i, j;
if (Number(numero) == numero) {
    if (numero > 0 && numero <= 50) {
        for (let i = 0; i <= numero; i++) {
            for (let j = 1; j <= i; j++) {
                document.write(j)
                
            }
            document.write("<br>")
        }
    }
}