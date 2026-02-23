var map = L.map('map').setView([-22.857534517086357, -47.041830152313544], 12);

var titles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([-22.857534517086357, -47.041830152313544]).addTo(map)
