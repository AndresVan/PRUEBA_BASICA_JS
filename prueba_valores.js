"use strict"

function calcular(datoA, datoB, sumarCB, restarCB){
    var suma = datoA + datoB;
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCB(restar);
}
calcular(2,3, function(resultado){
    console.log(resultado);
}, function(resultado){
    console.log(resultado);
})
//La estructura es: calcular(d1,d2,func1,func2)