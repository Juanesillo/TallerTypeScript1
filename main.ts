
import { Series } from './series.js';

import { dataSeries } from './dataSerie.js';

let coursesTbody: HTMLElement = document.getElementById('series')!;
const totalCreditElm: HTMLElement = document.getElementById("total-Temporadas")!;



renderCoursesInTable(dataSeries);


totalCreditElm.innerHTML = `${getTotalSeassons(dataSeries)}`

function renderCoursesInTable(series: Series[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.nombre}</td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporada}</td>`;
    coursesTbody.appendChild(trElement);
  });
}



function getTotalSeassons(series: Series[]): number {
  let totalT: number = 0;
  series.forEach((serie) => totalT += serie.temporada);
  return totalT;
}