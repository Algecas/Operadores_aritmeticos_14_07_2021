//Pedir 2 datos por pantalla y almacenarlo en dos variables diferentes:
//Variable 1(num1)  Variable 2 (num2)
//Realizar todas las Operacion arigmeticas vistas en la clase
//Mostra en la consola todos los posibles resultados
//Extra: Por medio de una venta emergente(alert) Dar la maxima
//informacion del desarrallodar del aplicativo en cuestion

//declaración de variables
let num1, num2, postIncremento, preIncremento, 
nombre, edad, fechaNacimiento, fechaActual, descripcion, area, operacion;

//Inicialización de variables
nombre = `Albert Stephen Gerena Castellanos`;
edad = 27;
tiempoTranscurrido = Date.now();
fechaActual = new Date(tiempoTranscurrido);
descripcion = `El presente sistema permitira el ingreso de dos variables númericas; en la primera sección mostrara el funcionamiento de los operadores aritmeticos y en la segunda sección una operación aritmetica teniendo en cuenta la prioridad de cada operador`;

alert(`${descripcion}\n\nDesarrollador: ${nombre}\nEdad: ${edad}\nFechha de acceso: ${fechaActual}`);

num1 = parseInt(prompt("Ingrese el primer valor númerico"));
num2 = parseInt(prompt("Ingrese el segundo valor númerico"));

console.log(`Los datos ingresados son:\na: ${num1} \nb: ${num2}`);

//Sección 1: Operadores Aritmeticos
//Operador de Incremento

//post-Incremento
console.log(`\nSección 1: Operadores Aritmeticos:\n\nPara ${num1}...`);
num1++;
num1++;
console.log(`...el post-incremento doble es ${num1}\n`);

//pre-Incremento
console.log(`El pre-incremento de ${num2} es ${++num2}`);


//post-decremento
console.log(`Para ${num1}...`);
num1--;
num1--;
console.log(`...el pre-incremento doble es ${num1}\n`);

//pre-decremento
console.log(`El pre-decremento de ${num2} es ${--num2}`);


//Sección 2: Operaciones Aritemticas
console.log(`\nSección 2: Operación aritmetica`);

//Calculo area triangulo
area = (num1*num2)/2;
console.log(`\nEl area del triangulo cuya base es igual a ${num1} y la altura ${num2} es: ${area}`);

//Operación con jerarquia automatica
operacion = num1 - num2 + num1 * num2 / num1;
console.log(`\nOperación: ${num1} - ${num2} + ${num1} * ${num2} / ${num1}\nResultado: ${operacion}`);
//Operación con jerarquia automatica agregando resto
operacion = num1 - num2 + num1 * num2 / num1 % num2;
console.log(`\nOperación: ${num1} - ${num2} + ${num1} * ${num2} / ${num1} % ${num2}\nResultado: ${operacion}`);
//Operación con jerarquia automatica agregando resto por fuera de parentesis
operacion = (num1 - num2 + num1 * num2 / num1) % num2;
console.log(`\nOperación: (${num1} - ${num2} + ${num1} * ${num2} / ${num1}) % ${num2}\nResultado: ${operacion}`);
//Operación dividida por parentesis en cada operador
operacion = ((((num1 - num2) + num1) * num2) / num1);
console.log(`\nOperación: ((((${num1} - ${num2}) + ${num1}) * ${num2}) / ${num1})\nResultado: ${operacion}`);
//Operación dividida por parentesis en cada operador incluyendo resto
operacion = (((((num1 - num2) + num1) * num2) / num1) % num2);
console.log(`\nOperación: (((((${num1} - ${num2}) + ${num1}) * ${num2}) / ${num1}) % ${num2})\nResultado: ${operacion}`);

//Ejecicios clase
// pos-incremento 
// debugger
// let num = 0;
// num++;
// num++;
// num++;
// num++;
// num++;
// console.log(num);


// pre-incremento 
// let num = 5;

// alert(++num);


// pos-decremento 
// let num = 10;
// alert(-num);

// modulo = 1
// multiplicacion = 2
// division =  3
// resta = 4
// suma = 5



