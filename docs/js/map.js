//The token to access mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoidGlsYWRlaHVuIiwiYSI6ImNrdXdhNzczaDBlN2sydW1yYTQwMzM5MHUifQ.n9w_c_FBhfcJOR-QADQcpA';

//Ask user for their permission to get their location
navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation, {enableHighAccuracy: true})

//new map being created
var map = new mapboxgl.Map({
  container: 'map',
  //style of map = what type of map do I want => street
  style: 'mapbox://styles/mapbox/streets-v11'
});