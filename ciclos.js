//---------CICLO WHILE--------
/*const ourArray = [];    //Se crea un array vacío
let i = 0;              //se define la variable de interacción

while (i < 5) {         //se inicializa el while
  ourArray.push(i);     //Se agrega con push en orden el llenado del array
  i++;                  //Se incrementa de uno en uno
}                       
console.log(ourArray);  //Muestra el valor del array

//--------CICLO FOR--------
const myArray = [];     //Se crea un array vacío

for (let i=1; i<6; i++){ //se inicializa el for desde 1 hasta 5 de uno en uno
  myArray.push(i);       //Se agrega con push en orden el llenado del array
}
console.log(myArray);  //Muestra el valor del array
//----- GENERANDO PARES
const myArray2 = [];

for(let i =1; i<=9; i+=2){ //Aquí suma de 2 en 2
  myArray2.push(i);
}
console.log(myArray2); //Debe Generar: [ 1, 3, 5, 7, 9 ]
*/
//--------
/*const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
*/
//-------Multiplicando los valores del Array ------
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0 ; i< arr.length; i++){   //interactúa con las posiciones del array cuenta que son 3 en total
    for(let j = 0; j<arr[i].length; j++){ //Interactúa con la posición interna del 1er array ([1,2]) y así hasta pasar por todos
      product *= arr[i][j]; //multiplica el arr en la posición i (0) del array externo y luego la posición j (0) del array interno hasat cumplir con todos
    }
    console.log(product);
  }
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);