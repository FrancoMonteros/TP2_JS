/*2- Escribir un programa que solicite una nota (número) de 0 a 10.
Luego mostrar la calificación en una alerta según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: notable
10: Sobresaliente
Si ingreso un número que no está dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.*/
let nota = parseInt(prompt("ingrese una nota"));
while (nota >= 0 && nota <= 10) {
    
    if (nota <= 2) {
        alert("muy deficiente")
        break
    } else if (nota <= 4) {
        alert(" insuficiente")
        break
    } else if (nota <= 6) {
        alert("suficiente")
        break    
    }else if (nota === 7) {
        alert("bien")
        break
    }else if (nota <= 9) {
        alert("notable")
        break
    } else if (nota === 10) {
        alert("sobresaliente")
        break
    } else if (nota > 10) {
        alert("número erróneo")
        break
    } else {
        alert("introduce un número válido")
        break
    }
}