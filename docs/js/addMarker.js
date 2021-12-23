window.onload = function () {
    postData()
}

async function postData() {
    document.getElementById("from").addEventListener("submit", e => {
        e.preventDefault();

        let inputPinName = document.getElementById("pin_name").value;
        let inputTags = document.getElementById("tags").value;
        let inputDescription = document.getElementById("description").value;
        let inputLongitude = document.getElementById("longitude").value;
        let inputLatitude = document.getElementById("latitude").value;
        //need to figure out how to add user location to it

            fetch("https://web2-courseproject-attila.herokuapp.com/dataPerson", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pinName: inputPinName,
                    Tags: inputTags,
                    Description: inputDescription,
                    Longitude: inputLongitude,
                    Latitude: inputLatitude
                })
            }).then(response =>{
                return response.json()
            }).then(async data => {
                console.log('Success:', data);
                await postData();
            })

    }), getData()
}