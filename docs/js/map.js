//The token to access mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoidGlsYWRlaHVuIiwiYSI6ImNrdXdhNzczaDBlN2sydW1yYTQwMzM5MHUifQ.n9w_c_FBhfcJOR-QADQcpA';

//Ask user for their permission to get their location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})


window.onload = function(){
    getDataMarket()
    //getDataPerson()

    //postDataMarket()
    //postDataPerson()
}

//Get data from the database
async function getDataMarket() {
    let data = await fetch("https://web2-courseproject-attila.herokuapp.com/dataMarket")
    let json = await data.json();
    let HTMLstring = "";

    json.forEach(input => {
        HTMLstring +=`
        <p>${input._id}</p>
        <p>${input.name}</p>
        <p>${input.location}</p>
        <p>${input.date}</p>
        <p>${input.time}</p>
        `
    })
    document.getElementById("container").innerHTML= HTMLstring;


  }


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
        style: 'mapbox://styles/tiladehun/ckxhpvz30iysa15s9u2kon835',
        center: center,
        zoom: 18
    })
    //Navigational controls to zoom in/out and rotate
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
    //No directions here because it wouldn't make sense to use it for very short distances

    //For visitor created markers
    const visitorMarker = new mapboxgl.Marker({
        color: "#FBB03B"
    })
    .setLngLat([4.322200,50.842302])
    .addTo(map);

    //For seller created markers
    const sellerMarker = new mapboxgl.Marker({
        color: "#F15A24"
    })
    .setLngLat([4.322000,50.842302])
    .addTo(map);

}

//new map being created for the default location, which has an overview of Brussels
function setupMapDefault(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/tiladehun/ckxhpvz30iysa15s9u2kon835',
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

    //This adds a static marker to the map
    //For fleamarkets
    const fleaMarker = new mapboxgl.Marker({
        color: "#4D4D4D"
    })
    .setLngLat([4.322641,50.842302])
    .addTo(map);
}

