/* In dit script plaats je de code om de kaart te tonen in de aside van de contactpagina. De coördinaten van de parking in Gent zijn: 51.0424221 en 3.7258331.
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let mapP = L.map('mapP1').setView([51.3027093, 4.56511245], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapP);


/*L.marker([51.3027093, 4.56511245]).addTo(mapP);*/

let sj = L.marker([51.3027093, 4.56511245]).addTo(mapP);

sj.bindPopup("<b>Sint-Job-in-'t-Goor</b>").openPopup();