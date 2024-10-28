import {dataSeries} from './dataSeries.js';


var seriesTbody = document.getElementById('series');
var totalCreditElm = document.getElementById("total-Temporadas");

renderCoursesInTable(dataSeries);

totalCreditElm.innerHTML = "" + getTotalSeassons(dataSeries);

function renderCoursesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");

        // Cambia el contenido del nombre a un enlace que maneje el clic
        var nombreCelda = "<td><a href='#' class='serie-link' data-id='" + serie.id + "'>" + serie.nombre + "</a></td>";

        trElement.innerHTML = "<td>" + serie.id + "</td>" +
            nombreCelda +
            "<td>" + serie.canal + "</td>" +
            "<td>" + serie.temporada + "</td>" +
            "<td><img src='" + serie.imagen + "' alt='" + serie.nombre + "' /></td>";

        seriesTbody.appendChild(trElement);
    });

    // Agrega el evento click a los enlaces de las series
    const serieLinks = document.querySelectorAll('.serie-link');
    serieLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            const serieId = this.getAttribute('data-id');
            mostrarDetallesSerie(serieId);
        });
    });
}

// Nueva función para mostrar los detalles de la serie
function mostrarDetallesSerie(id) {
    const serie = dataSeries.find(serie => serie.id === parseInt(id));
    if (serie) {
        document.getElementById('detalle-nombre').innerText = serie.nombre;
        document.getElementById('detalle-imagen').src = serie.imagen;
        document.getElementById('detalle-canal').innerText = "Canal: " + serie.canal;
        document.getElementById('detalle-temporada').innerText = "Temporadas: " + serie.temporada;
        document.getElementById('detalle-resumen').innerText = serie.resumen;
        document.getElementById('detalle-link').href = serie.link;

        // Mostrar la card de detalles
        document.getElementById('serie-details').style.display = 'block';
    }
}



function getTotalSeassons(series) {
    var totalT = 0;
    var show = 0;
    series.forEach(function (serie) {
        return totalT = totalT + serie.temporada,
            show += 1;
    });

    return totalT/ show;
}