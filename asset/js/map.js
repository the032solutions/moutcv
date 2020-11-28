// Initialize and add the map
function initMap() {
    // The location of UPV
    const UPV = { lat: 39.48185948798729, lng: -0.33965401470055445 };
    // The map, centered at UPV
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: UPV,
    });
    //load geojson layer
map.data.loadGeoJson('map.geojson');

    // The marker, positioned at UPV
    const marker = new google.maps.Marker({
      position: UPV,
      map: map,
    });
  }
  
