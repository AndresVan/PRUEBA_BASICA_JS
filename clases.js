//---------Clase "Padre"----
class numeroSerial{
    constructor(numSerie){
        this.numSerie = numSerie;
    }
}

//----- Creación de la clase "Hija"------
class Pantalla extends numeroSerial {     //La clase "hija" hereda con extends los atrib. y métodos del "padre" 
    constructor(numSerie, marca, resolucion, pulgadas){  //Inicializando instancias con el constructor
//----Este apartado hace referencia a las propiedades de la clase----
        super(numSerie)     //Se debe usar super para inicializar el constructor padre
        this.marca = marca;        //El this hace referencia a que ese dato cargado es de ESA instancia que lo llamó
        this.resolucion = resolucion;
        this.pulgadas = pulgadas;
    }
//-----Aquí se hallan los métodos de la clase ----
encendido(){
    console.log("La pantalla " + this.marca + " con serial # "+ this.numSerie + " se ha encendido");
}

}

tvSala = new Pantalla('115487','SONY','4K','50');        // Aquí se está instanciando (creando un objeto) con new de 
//la clase Pantalla y se envían parámetros. 
tvHabitacion = new Pantalla('2458785','LG', 'FHD', '27'); 