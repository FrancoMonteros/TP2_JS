/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número 
que indique el usuario (no mayor de 50)  de la siguiente forma : 
(suponiendo que indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/
let num = parseInt(prompt("ingrese un numero"));
let i, j;
if (Number(num) == num) {
    if (num > 0 && num <= 50) {
        for (let i = num; i >=1; i--) {
            for (let j = i; j >=1 ; j--) {
                document.write(i)
                
            }
            document.write("<br>")
        }
    }
}