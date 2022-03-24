// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  var cont = 0;
  for(var i in objeto){
    array[cont] = [i, objeto[i]];
    cont++;
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const abecedario = 'abcdefghijklmnñopqrstuvwxyz';
  var contCaracter = 0;
  var objetoCaracteres = {};
  for (var i = 0; i < abecedario.length; i++){
    for (var j = 0; j < string.length; j++){
      if (abecedario[i] == string[j]){
        contCaracter++;
      }
    }
    if (contCaracter != 0){
      objetoCaracteres[abecedario[i]] = contCaracter;
    }
    contCaracter = 0;
  }
  return objetoCaracteres;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const abcMayus = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  var contMayus = 0;
  var contAbc = abcMayus.length;
  var contMinus = 0;
  var arrayMayus = [];
  var arrayMinus = [];
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < abcMayus.length; j++) {
      if (s[i] == abcMayus[j]) {
        arrayMayus[contMayus] = s[i];
        contMayus++;
      } else {
        contAbc--;
      }
    }
    if (contAbc == 0) {
      arrayMinus[contMinus] = s[i];
      contMinus++;
    } 
    contAbc = abcMayus.length;
  }
  return arrayMayus.join('') + arrayMinus.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arrayNuevo = str.split('');
  var temp = 0;
  var espacio = -1;
  for (var i = 0; i < arrayNuevo.length; i++) {
    if (arrayNuevo[i] == ' ') {
      espacio = i;
      arrayNuevo[i] = arrayNuevo[i];
    } else if (i == 0) {
      arrayNuevo[i] = arrayNuevo[i];
    } else if(espacio != 0 && i == espacio + 1) {
      arrayNuevo[i] = arrayNuevo[i];
    } else {
      for (var j = i; j > espacio + 1; j--) {
        temp = arrayNuevo[j-1];
        arrayNuevo[j-1] = arrayNuevo[j];
        arrayNuevo[j] = temp;
      }
    }
  }
  return arrayNuevo.join('');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var stringNumero = numero + '';
  var arrayNumeroIzq = stringNumero.split('');
  var arrayNumeroDer = [];
  for (var i = 0; i < arrayNumeroIzq.length; i++){
    arrayNumeroDer[i] = arrayNumeroIzq[(arrayNumeroIzq.length-1)-i]; 
  }
  if (arrayNumeroIzq.join('') == arrayNumeroDer.join('')) {
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

