//The token to access mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoidGlsYWRlaHVuIiwiYSI6ImNrdXdhNzczaDBlN2sydW1yYTQwMzM5MHUifQ.n9w_c_FBhfcJOR-QADQcpA';

//Ask user for their permission to get their location
navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation, {enableHighAccuracy: true})

//----------------------------------USER LOCATION-------------------------------------
function successLocation(position){
    //console.log(position.coords.longitude); TEST OK
    //console.log(position.coords.latitude); TEST OK
    setupMapUser([position.coords.longitude, position.coords.latitude])
}
//----------------------------------DEFAULT LOCATION-------------------------------------
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
    //Navigational controls to zoom in/out and rotate
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
    //No directions here because it wouldn't make sense to use it for very short distances
}

//new map being created for the default location, which has an overview of Brussels
function setupMapDefault(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12
    })
    //Navigational controls to zoom in/out and rotate
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
    //Direction to go from one location to the next
    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric'
    });
    map.addControl(directions, 'top-left');
}
