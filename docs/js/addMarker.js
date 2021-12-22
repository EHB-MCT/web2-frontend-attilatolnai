window.onload = function () {
    postData()
}

function postData() {
    document.getElementById("from").addEventListener("submit", e => {
        e.preventDefault();

        let inputPinName = document.getElementById("pin_name").value;
        let inputTags = document.getElementById("tags").value;
        let inputDescription = document.getElementById("course").value;
        //need to figure out how to add location to it

            fetch("https://web2-courseproject-attila.herokuapp.com/dataPerson", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pinName: inputPinName,
                    Tags: inputTags,
                    Description: inputDescription
                })
            })

    }), getData()
}