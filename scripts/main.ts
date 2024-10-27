import { series } from './data.js';
import { Serie } from './Serie.js';

document.addEventListener("DOMContentLoaded", () => {
    const seriesTable = document.getElementById("series-list")!;
    const averageSeasonsElement = document.getElementById("average-seasons")!;

    displaySeriesInTable(series);
    const averageSeasons = calculateAverageSeasons(series);
    averageSeasonsElement.innerHTML = `Seasons average: ${averageSeasons.toFixed(2)}`;
});

function displaySeriesInTable(series: Serie[]): void {
    const seriesTable = document.getElementById("series-list")!;
    series.forEach((serie) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        seriesTable.appendChild(row);
    });
}

function calculateAverageSeasons(series: Serie[]): number {
    const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalSeasons / series.length;
}
