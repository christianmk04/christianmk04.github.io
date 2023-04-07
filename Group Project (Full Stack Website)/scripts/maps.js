  // Ajax call
  function getLoc(action) {
    var addr = encodeURI(document.getElementById("addr").value);
    console.log(addr);
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addr + "&key=AIzaSyAEBeYTGw-Q-PuSz5yF5q2bL5O70yOjOWA";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // following code may throw error if user input is invalid address
            // so we use try-catch block to handle errors
            try { 
                // expected response is JSON data
                var data = JSON.parse(this.responseText);
                console.log(data);

                var info = '';
                if (action == 'postcode') {
                    // display postal code, given an address
                    info = getPostCode(data);
                } else {
                    // display full address, given post code or partial addr
                    info = getFullAddress(data);
                }
                console.log(info);
                
                document.getElementById("display").innerHTML = info;
                
                // refresh the hidden input values with new lat lng coordinates
                var coordinate = getLatLng(data);
                document.getElementById("lat").value = coordinate["lat"];
                document.getElementById("lng").value = coordinate["lng"];
                // now refresh the map
                initMap();
                
            } catch(err) { // show error message
                // not a good idea to directly show err.message 
                // as it may contain sensitive info
                // document.getElementById("display").innerHTML = err.message;

                // show a predefined error message string
                document.getElementById("display").innerHTML = "Sorry, invalid address. Please try again!";
            }
        }
    };
    
    xhttp.open("GET", url, true);
    xhttp.send();
}

function getFullAddress (data) {
    var addr = data["results"][0]["formatted_address"];
    var loc = getLatLng(data);
    return addr + "<br> lat: " + loc["lat"] + ", lng: " + loc["lng"];
}

function getLatLng(data) {
    var location= data["results"][0]["geometry"]["location"];
    console.log(location)
    return location; 
}

function getPostCode(data) {
    var addrcomponents = data["results"][0]["address_components"];
    var postcode = addrcomponents.filter(postcodeHelper);
    // country is an array but there should be only one element
    return postcode[0]["long_name"];
}

function postcodeHelper(addr) {  
    return addr["types"][0] == "postal_code" ;
}


function getKeys(data){
    // data["results"][0] is an object
    // this gets the keys/properties of results[0] object
    var keys = Object.keys(data["results"][0]);
    for (key of keys) {
        // this prints --
        /*  address_components
            formatted_address
            geometry
            place_id
            plus_code
            types */
        document.getElementById("display").innerHTML += key + "<br>";
    }
}

function getCountry(data) {
    // this is an array
    var addrcomponents = data["results"][0]["address_components"];
    // The filter() method creates a new array with array elements that passes a test.
    var country = addrcomponents.filter(countryHelper);
    // country is an array but there should be only one element
    return country[0]["long_name"];
}

function countryHelper(addr, index) {  
    return addr["types"][0] == "country" ;
}


function triggerBtnClick(){
    document.getElementById('getAddress').click();
}