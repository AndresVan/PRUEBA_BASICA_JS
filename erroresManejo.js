/*try {
    var x = y;
} catch (error) {
    console.log(error.message)
    console.log(error.name)
}*/
var valor1 = 5;
var valor2 = 8;

try {
    if (valor1 > valor2){
        console.log(valor1+" es mayor que "+valor2)
    }
    else{
        throw new Error(valor1 + " no es mayor que "+ valor2) // Aquí se detona un error usando throw y Error
    }
} catch (error) {
    console.log(error);
}