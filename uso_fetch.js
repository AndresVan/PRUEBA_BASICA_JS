var traer = document.getElementById("boton");
var postear = null;         //Se crea una variable nula, que más adelante se usará

traer.addEventListener('click', function(){
 
    fetch('http://jsonplaceholder.typicode.com/posts') //Trae la info de esa url
    .then(data => data.json()) //Darle formato a los datos con un arrow function
    .then(data => {
        postear = data; //Se le da un uso a la variable postear con el valor de data
        mostrarDatos(postear);
    })
})

function mostrarDatos(postear){
    postear.map((postear, i) =>{
        let titulo = document.createElement('h1');

        titulo.innerHTML = (i+1) + "-" + postear.title;
        contenedor.appendChild(titulo);
    })
}