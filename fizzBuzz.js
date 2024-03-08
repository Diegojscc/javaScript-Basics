/*
1º Pedirle al usuario que introduzca un número, el cual
va a ser el limite hasta el que hay que contar.

2º Bucle desde 1 hasta el numero introducido

3º Dentro del bucle debemos ir comprobando que "i" sea divisible por 3 entonces "fizz", 
si es divisible por 5 entonces "buzz" y si es divisible por ambos entonces "FizzBuzz" y 
si no es divisible por ninguno que muestre "i".
*/

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
    if(i % 3 == 0 && i % 5 == 0) 
        console.log("FizzBuzz");
    else if (i % 5 == 0) 
        console.log("Buzz");
    else if (i % 3 == 0) 
        console.log("Fizz");
    else
        console.log(i);
}
