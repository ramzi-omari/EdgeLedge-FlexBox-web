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

// Smooth Scrolling (hash #)
// we target the links 'a' clicked in the navbar
// .btn for the read more

$("#navbar a, .btn").on("click", function (event) {
  if (this.hash != "") {
    event.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        // scroll to the id clicked -100px
        scrollTop: $(hash).offset().top - 100,
      },
      //speed 800ms
      800
    );
  }
});
