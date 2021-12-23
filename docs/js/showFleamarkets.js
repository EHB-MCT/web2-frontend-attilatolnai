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
        <div id="box">
        
        <h3>${input.name}</h3>
        <p>Where: ${input.location}</p>
        <p>When: ${input.date}</p>
        <p>What time: ${input.time}</p>
        </div>
        </br>
        `  
    })
    document.getElementById("container").innerHTML= HTMLstring;
}