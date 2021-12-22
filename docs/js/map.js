//The token to access mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoidGlsYWRlaHVuIiwiYSI6ImNrdXdhNzczaDBlN2sydW1yYTQwMzM5MHUifQ.n9w_c_FBhfcJOR-QADQcpA';

//Ask user for their permission to get their location
navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation, {enableHighAccuracy: true})

function successLocation(position){
    console.log(position.coords.longitude);
    console.log(position.coords.latitude);
    //setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([4.35, 50.84])
}

//new map being created
function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        //style = what type of map do I want
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12
      })
}
