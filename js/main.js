let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.737232, lng: 3.086472 },
    zoom: 8,
  });
  const marker = new google.maps.Marker({
    position: { lat: 36.737232, lng: 3.086472 },
    map: map,
  });
}
