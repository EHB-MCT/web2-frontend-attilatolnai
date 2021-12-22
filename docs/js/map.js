//The token to access mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoidGlsYWRlaHVuIiwiYSI6ImNrdXdhNzczaDBlN2sydW1yYTQwMzM5MHUifQ.n9w_c_FBhfcJOR-QADQcpA';

//Ask user for their permission to get their location
navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation, {enableHighAccuracy: true})

function successLocation(position){
    //console.log(position.coords.longitude); TEST OK
    //console.log(position.coords.latitude); TEST OK
    setupMapUser([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMapDefault([4.35, 50.84])
}

//new map being created for the user's location, which has a zoomed in view of their location
function setupMapUser(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 18
      })
}
//new map being created for the default location, which has an overview of Brussels
function setupMapDefault(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12
      })
}
