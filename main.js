const contenedor_cards = document.getElementById("contenedor_cards");
const inputBusqueda = document.getElementById('buscar');

let equiposFiltrados = [];
let equiposFiltradosInput = [];


fetch("equipos.json")
    .then(res => res.json())
    .then(equipos => {
        console.log(equipos);
        crearTarjetas(equipos);
        equiposFiltrados = equipos;
    });

let templateCard = "";


function crearTarjetas(equipos) {
    templateCard = "";

    for (const equipo of equipos) {
        templateCard += `
        <div class="card">
            <img src="${equipo.imagen}" alt="${equipo.equipo} ${equipo.id}">
            <p>${equipo.equipo}</p>
            <a class="btn btn-danger" href="./informacion.html?id=${equipo.id}">Ver más</a>
        </div>`;
    }

    contenedor_cards.innerHTML = templateCard;
}


inputBusqueda.addEventListener('input', () => {
    const inputValue = inputBusqueda.value.toLowerCase();

    crearTarjetasInput(inputValue);

    if (equiposFiltradosInput.length === 0) {
        contenedor_cards.innerHTML = "<h2>Sin Resultados</h2>";
    }
});


function crearTarjetasInput(textoBusqueda) {

    equiposFiltradosInput = equiposFiltrados.filter(equipo =>
        equipo.equipo.toLowerCase().includes(textoBusqueda)
    );

    templateCard = "";

    for (const equipo of equiposFiltradosInput) {
        templateCard += `
        <div class="card">
            <img src="${equipo.imagen}" alt="${equipo.equipo} ${equipo.id}">
            <p>${equipo.equipo}</p>
            <a id="boton" class="btn btn-danger" href="./informacion.html?id=${equipo.id}">Ver más</a>
        </div>`;
    }

    contenedor_cards.innerHTML = templateCard;
}
