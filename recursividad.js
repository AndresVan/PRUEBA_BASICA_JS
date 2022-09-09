/*const conteoREgresivo = (a) =>{
    if(a<0) return
    console.log(a);
    return conteoREgresivo(a-1)
}
conteoREgresivo(10);
*/
function conteoRegresivo (a){
    if (a<0) {
        return;
    } else{
        console.log(a);
        return conteoRegresivo(a-1); //Aquí se llama la función varias veces y le resta 1 a "a"
    }
}
conteoRegresivo(5)