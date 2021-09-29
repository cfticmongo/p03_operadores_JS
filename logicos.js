// Operadores lógicos

// Operador lógico AND &&

let value1 = 12;
let value2 = 13;
let value3 = 12;

let result = value2 < value1 && value1 === value3; // false && true lo que devuelve es false
console.log(result);

// Operador lógico OR inclusivo ||

result =  value2 < value1 || value1 === value3; // true
console.log(result);

// Operador lógico NOT ! (negación unaria)

let open = false;

open = !open;

console.log(open); // true

// Operador condicional (ternario)
// <expresión-de-condición-boolean> ? <valor1-para-true> : <valor2-para-false>; 

let estado;
let aceptaTerminos = true;
let edadParticipante = 19;

estado = edadParticipante >= 18 && aceptaTerminos ? 'Ok' : 'Rejected';
console.log(estado);

// Precedencia de operadores (Habitual en lenguajes d programación)

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Para romper precedencia usar paréntesis

value1 = 5;
value2 = 10;
value3 = 4;

result = (value1 + value2) / value3;
console.log(result);