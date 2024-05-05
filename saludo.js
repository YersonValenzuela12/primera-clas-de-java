
var nombre = " Pedrito";
var edad;
var presenteOno;
var apellido;


//alert ("Hola Mundo con JAVASCRIPT" + nombre);

//OPERADORES ARITMÉTICOS
var suma = 35 + 3;
console.log(suma);

var resta = 20-4;
console.log(resta);

var multi = 5*5;
console.log(multi);

var divi = 30/2;
console.log(divi);

var resto = 60%2;
console.log(resto); 

var resto = 41%3;
console.log(resto); 

//OPERADORES COMPARACIÓN/RELACIONALES

console.log(5>2); 
console.log(98<1); 
console.log(3!=3); 
console.log("============"); 

var numero = 9;
console.log(4==numero); 

//OPERADORES LÓGICOS

var edad = 18;
var dni = false;
//AND
console.log(edad >= 18 && dni==true); 

console.log("============");

//OR
console.log(edad >= 18 || dni==true);

console.log("============");
/*Sumar, Restar, multiplicar y dividir 
    dos numeros 5 y 3 */


//var
    /*1. Tiene un alcance de función o global
      2. Puede ser redeclarado dentro del mismo ámbito
      3. No tiene restricciones sobre su reasignación o mutabilidad
      4. No está limitado al ámbito de bloque, lo que puede llevar
        a errores.

        ejemplo:

            var x = 10;
            var x = 20; // Esto no arroja error, x se redefine

            function ejemplo(){
                var y = 30;
                if (true){
                    var y = 40; // La variable y se redefine dentro del bloque
                    console.log(y);
                }
                console.log(y);
            }
    
    
    */
    
//let

          /*
            1. Tiene un alcance, lo que significa que solo es visible
            dentro del bloque en el que se declara.

            2. No puede ser redeclarado en el mismo ámbito.

            3. Puede ser reasignado, pero no redeclarado.

            4. Se utiliza comúnmente para variables cuyo valor cambiará
            
        ejemplo:

        let a = 10;
        let a = 20; // Esto arrojará un error, a ya está declarado 

            function ejemplo(){
                let b = 30;
                if (true){
                    b = 40;
                    console.log(y);
                }
                console.log(y);
            }

            
            */
//CONST

            /*
                1. Tiene un alcance  similar a let
                2. No puede ser redeclarado ni reasignado después de la inicialización
                3. Se utiliza para declarar constantes cuyo valor no cambiará.

                ejemplos:

                cost c = 10;
                c=20;

                const pi = 3.14159
                pi = 3;
            
            
            */
        

                //let a = 10;
                //let a = 20; // Esto arrojará un error, a ya está declarado 
        
                    //function ejemplo(){
                        let b = 30;
                        if (true){
                            let b = 40;
                            console.log(b);
                        }
                        console.log(b);
                    //}
/* FUNCIONES*/

/* 1. Calcular el factorial de un numero 
   2. Verificar si un numero es primo 
   3. Contar palabras en una cadena
   4. Escribir una función que tome una cadena como argumento y devuelva la misma
   cadena pero al revés.
   5. Escribir una función que tome el radio de un círculo como argumento y devuelva
   el área del circulo
*/

/*5. Escribir una función que tome el radio de un círculo como argumento y devuelva
   el área del circulo*/

   function calcularAreaCirculo(radio){
        return Math.PI * radio * radio;
    }

    console.log(calcularAreaCirculo(5));



    