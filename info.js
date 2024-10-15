// Obtener el parámetro 'id' de la URL
const params = new URLSearchParams(window.location.search);
const equipoId = parseInt(params.get('id'), 10);


fetch('equipos.json')
    .then(response => response.json())
    .then(data => {
        const equipo = data.find(e => e.id === equipoId);

        if (equipo) {

            document.getElementById('nombreEquipo').innerText = equipo.equipo;
            document.getElementById('infoEquipo').innerText = equipo.information;


            document.getElementById('imagenEquipo').src = equipo.imagen;
            document.getElementById('imagenEquipo').alt = equipo.equipo;
        } else {
            document.getElementById('nombreEquipo').innerText = 'Equipo no encontrado';
            document.getElementById('infoEquipo').innerText = 'El equipo solicitado no existe en nuestros registros.';
        }
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
        document.getElementById('nombreEquipo').innerText = 'Error';
        document.getElementById('infoEquipo').innerText = 'Hubo un error al cargar la información del equipo.';
    });
