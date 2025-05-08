// Map sint-job 

let map = L.map('apMap').setView([51.3027093, 4.56511245], 14); 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let sintJobMarker = L.marker([51.3027093, 4.56511245]).addTo(map);
sintJobMarker.bindPopup("<b>Sint-Job-in-'t-Goor</b>").openPopup();