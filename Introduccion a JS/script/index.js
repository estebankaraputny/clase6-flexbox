// TIPOS DE DATOS
/* Tipos de datos */

//Number - Número
12
55
200006
64458

console.log(15);
console.log(2000);



/*comillas simples rectas (Alt + 0039)*/

//String - Texto

"Hola Mundo";
'Hola Pedro';
"Frases de texto";

console.log("¡¡¡Hola mundo!!!");
console.log('11222', 54484);


//Bool - Booleano 

false 
true
false 
false

console.log(true);
console.log(false);


//Operadores matematicos

20 + 10; //30 - SUMA +
30 + 10; //40
10 - 5; //5 - RESTA -
50 - 25; //25
10 * 5; //50 MULTIPLICACIÓN *
5 * 10; //50
100 / 10; //10 DIVISIÓN /
50 / 2; //25

console.log("resultado de 100 / 10: ", 100 / 10);
console.log("resultado de 10 * 10: ", 10 * 10);
console.log("resultado de 200 + 100: ", 200 + 100);
console.log("resultado de 50 - 10: ", 50 - 10);

//Operadores de comparación

20 === 20; //True - Igual estricto
50 !== 20; //True - Distinto a estricto
15 < 20; //True - Menor que
15 > 20; //False - Mayor que
200 <= 150; //False - Menor o igual que
400 >= 200; //True - Mayor o igual que

"Hola" === "hola"; //False
"Hola mundo" !== "Hola"; //True

console.log(20 < 10); //False
console.log(20 <= 20); //True
console.log(15 > 10); //True
console.log(1000 > 1003); //False
console.log("Hola" === "hola"); //False
console.log("hola" === "hola"); //True

//VARIABLES DE TIPO LET 
//let nombreVar = value;

let num1 = 20;
let num2 = 60;

console.log(num1 + num2); //SI x4, NO x0 
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//Concatenar = unir dos o más strigns y variables

let miNombre = "Esteban";

console.log("Este individuo se llama: " + miNombre);

let apellido = "Karaputny";
let edad = 24;

console.log("Mi nombre es " + miNombre + 
    " " + apellido);

//VARIABLE DE TIPO CONST

const miNombre2 = "Esteban";
const apellido2 = "Karaputny";


//CONDICIONALES

/* 
if (condicion){
    //código a ejecutar si la condición se cumple
} 
*/

let numX = 50;
let numY = 20;
let hola = "Hola";
let holA = "Hola";

//Condicional IF

if(numX >= numY){
    //Código si verdadero
    console.log("Es mayor o igual");
}

if(hola === holA){
    console.log("Son iguales");
}


//IF Y ELSE
let numero1 = 20;
let numero2 = 10;


if(numero1 <= numero2){
    console.log(numero1 + " " + "Es menor que" + " " + numero2);
} else{
    console.log(numero1 + " " + "Es mayor que" + " " + numero2);
}

/**Realizar un programa que compare la edad de diferentes usuarios
 *  y defina si es mayor de edad. Si no es mayor,
 * debemos ver en consola: “La persona nombre no es mayor”. 
 * Y si es mayor: “La persona nombre es mayor”. */

let nombreUno = "Juan";
let edadPUno = 15;

let nombreDos = "Pedro";
let edadPDos = 24;

let nombreTres = "Maria";
let edadPTres = 25;

let nombreCuatro = "Mateo";
let edadPCuatro = 10;

let nombreCinco= "Sofia";
let edadPCinco = 12;

//Persona uno JUAN
if(edadPUno >= 18){
    console.log("La persona" + " " + nombreUno + " " 
        + "es mayor, porque tiene: " + edadPUno);
} else{
    console.log("La persona" + " " + nombreUno + " "
         + "es menor, porque tiene: " + edadPUno);
}

//Persona dos PEDRO
if(edadPDos >= 18){
    console.log("La persona" + " " + nombreDos + " " 
        + "es mayor, porque tiene: " + edadPDos);
} else{
    console.log("La persona" + " " + nombreDos + " "
         + "es menor, porque tiene: " + edadPDos);
}

//Persona tres MARIA
if(edadPTres >= 18){
    console.log("La persona" + " " + nombreTres + " " 
        + "es mayor, porque tiene: " + edadPTres);
} else{
    console.log("La persona" + " " + nombreTres + " "
         + "es menor, porque tiene: " + edadPTres);
}

//Persona cuatro MATEO
if(edadPCuatro >= 18){
    console.log("La persona" + " " + nombreCuatro + " " 
        + "es mayor, porque tiene: " + edadPCuatro);
} else{
    console.log("La persona" + " " + nombreCuatro + " "
         + "es menor, porque tiene: " + edadPCuatro);
}

//Persona cinco SOFIA
if(edadPCinco >= 18){
    console.log("La persona" + " " + nombreCinco + " " 
        + "es mayor, porque tiene: " + edadPCinco);
} else{
    console.log("La persona" + " " + nombreCinco + " "
         + "es menor, porque tiene: " + edadPCinco);
}


