//-------- Uso de función con parámetros -------------------
var c = 0;
functionWithArgs(1,2); //Se llama la función y se envían argumentos
functionWithArgs(7,9);

function functionWithArgs(a,b){
  c = a+b;
  console.log(c);
  
}
//-------- Uso de return -----------------------------------

const answer = timesFive(2);
console.log(answer);

function timesFive (num){
  return num*5;
}

//-------- Ejemplo Función con uso Cola --------------------

// Setup
const testArr = [1, 2, 3, 4, 5];

function nextInLine(arr, item) {
  // Only change code below this line
  let arr1 = arr.push(item); //agrega item al final del array
  let arr2 = arr.shift(); //elimina primer dato
  return arr2; //regresa el número que fue removido
  // Only change code above this line
}

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));