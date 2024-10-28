import {dataSeries} from './dataSeries.js';


var seriesTbody = document.getElementById('series');
var totalCreditElm = document.getElementById("total-Temporadas");

renderCoursesInTable(dataSeries);

totalCreditElm.innerHTML = "" + getTotalSeassons(dataSeries);

function renderCoursesInTable(series) {
    series.forEach(function (serie) {
        console.log(serie.imagen);
        var trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.nombre}</td>
            <td>${serie.canal}</td>
            <td>${serie.temporada}</td>
            <td><img src="${serie.imagen}"  style="width: 50px; height: 50px;" /></td>`;
        seriesTbody.appendChild(trElement);
    });
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