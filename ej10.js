/*10- Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/
let i , j
let filas = parseInt(prompt("Introduce un numero de filas"));
let columnas = parseInt(prompt("Introduce un numero de columnas"));
let res= filas * columnas;

document.write("<table>")

for (let i = 0; i < filas; i++) {
    document.write("<tr>")
    for (let j = 0; j < columnas; j++) {
        document.write("<td>");
        document.write(res);
        res--;
        document.write("</td>");
        
    }
    document.write("</tr>");
}
document.write("</table>");