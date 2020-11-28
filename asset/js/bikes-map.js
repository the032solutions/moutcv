let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: new google.maps.LatLng(39.48185948798729, -0.33965401470055445),
    mapTypeId: "terrain",
  });
  map.data.loadGeoJson('http://mapas.valencia.es/lanzadera/opendata/Tra-carril-bici/JSON');

}