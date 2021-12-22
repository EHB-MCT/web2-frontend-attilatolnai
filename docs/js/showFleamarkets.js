window.onload = function(){
    getDataMarket() //WORKING
}

//Get data from the database collection "fleamarkets" => DONE AND WORKING
async function getDataMarket() {
    let data = await fetch("https://web2-courseproject-attila.herokuapp.com/dataMarket")
    let json = await data.json();
    let HTMLstring = "";
    
    json.forEach(input => {
        //<p>${input._id}</p>
        // <p>${input.longitude}</p>
        // <p>${input.latitude}</p>
        HTMLstring +=`
        <p>Name:</p>
        <p>${input.name}</p>
        <p>Where: ${input.location}</p>
        <p>When: ${input.date}</p>
        <p>What time: ${input.time}</p>
        </br>
        `  
    })
    document.getElementById("container").innerHTML= HTMLstring;
}