var contenedor = document.getElementById('root');
var txtPersonajes = document.getElementById("txt-personajes");

var request = new XMLHttpRequest()
request.open('GET', 'https://rickandmortyapi.com/api/character/', true)
request.onload = function () {


    var data = JSON.parse(this.response);
    console.log(data);
    var tamano = data.results.length;


    for (i = 0; i < tamano; i++) {


        var carta = document.createElement('div');
        carta.setAttribute('class', 'card');
        contenedor.appendChild(carta);



        var imagen = document.createElement('img');
        imagenes = data.results[i].image;
        imagen.src = imagenes;
        carta.appendChild(imagen);

        var textGender=document.createElement("p");
        textGender.innerText=data.results[i].gender;

        var textOrigin=document.createElement("p");
        textOrigin.innerText=data.results[i].origin.name;
        var textName = document.createElement("p");
        textName.innerText = data.results[i].name;
        var textSpecie = document.createElement("p");
        textSpecie.innerText = data.results[i].species;
        var textStatus = document.createElement("p");
        textStatus.innerText = data.results[i].status;


       carta.addEventListener("click", (e) => {

            contenedor.classList.add("selectImage");
            e.target.classList.add("imageSelected"); 
            txtPersonajes.appendChild( textGender);
            txtPersonajes.appendChild( textOrigin);               
            txtPersonajes.appendChild(textName);
            txtPersonajes.appendChild(  textStatus);
            txtPersonajes.appendChild(textSpecie);

        });

    }

}




request.send();

