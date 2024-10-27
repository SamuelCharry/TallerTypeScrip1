import { series } from './data.js';
document.addEventListener("DOMContentLoaded", function () {
    var seriesTable = document.getElementById("series-list");
    var averageSeasonsElement = document.getElementById("average-seasons");
    displaySeriesInTable(series);
    var averageSeasons = calculateAverageSeasons(series);
    averageSeasonsElement.innerHTML = "Seasons average: ".concat(averageSeasons.toFixed(2));
});
function displaySeriesInTable(series) {
    var seriesTable = document.getElementById("series-list");
    series.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td>").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        seriesTable.appendChild(row);
    });
}
function calculateAverageSeasons(series) {
    var totalSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0);
    return totalSeasons / series.length;
}
