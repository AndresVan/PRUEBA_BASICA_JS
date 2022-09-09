//--------- Creando objeto perro -------------
const myDog = {
// Se crean las propiedades del objeto perro (myDog)
  "name": "Golden",         //Se definen como String
  "legs" : 4,
  "tails" : 1,
  "friends": ["Onix", "Benji"] //Se define como array.
  };

// --------- Llamando a la propiedad del objeto ----------
const gato = {
    "nombre": "Pelusa",
    "patas": 4,
    "cola": 1,
  };
  // Usando punto
  const valorNombre = gato.nombre;     //con el punto se trae la propiedad nombre del objeto gato
  const valorPatas = gato.patas;        //con el punto se trae la propiedad patas del objeto gato
  console.log(gato);
  // Usando []
  /*const valorNombre1 = gato[nombre];     //con corchetes se trae la propiedad nombre del objeto gato
  const valorPatas1 = gato [patas];        //con corchetes se trae la propiedad patas del objeto gato*/

function actualizarGato(cambiogato){
  cambiogato.bigotes = 6;
  
}
actualizarGato(gato);
console.log(gato);
