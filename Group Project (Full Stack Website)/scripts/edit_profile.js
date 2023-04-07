function uploadImage() {
    var file_link = document.getElementById("myFile").value;
    if (file_link == "") {
        document.getElementById("error_msg").innerText = "Select a file before uploading!"
    }
    else{
        document.getElementById("profile_picture").src = "../img/jx.jpg"
        document.getElementById("error_msg").innerText = ""
    }
}

function validateFields() {
    var error_msgs = [];
    var postal = document.getElementById("postal_code").value;
    var birthdate = document.getElementById("birthdate").value;
    var phone = document.getElementById("ph_number").value;
    
    console.log(birthdate);
    const number = /[0123456789]/g;
    var postal_new = postal.replace(number, '');
    var phone_new = phone.replace(number, '');

    if (postal.length != 6) {
        error_msgs.push("Enter valid postal code!");
    }
    else{
        if (postal_new != 0) {
            error_msgs.push("Enter valid postal code!");
        }
    }

    if (phone.length != 8) {
        error_msgs.push("Enter valid phone number!");
    }
    else{
        if (phone_new != 0) {
            error_msgs.push("Enter valid phone number!");
        }
    }

    if (birthdate == "") {
        error_msgs.push("Enter in birthdate!");
    }

    var date_split = birthdate.split("-");
    var year = Number(date_split[0]);
    var new_date = new Date();
    var new_year = new_date.getFullYear();
    var difference = new_year - year;

    if (difference <= 19) {
        error_msgs.push("Enter valid birthdate!");
    }


    if (error_msgs.length>0) {
        console.log(error_msgs);
        var error_text = `<span>Error Occured:</span><ul>`
    
        for(msg of error_msgs){
            error_text += `<li>${msg}</li>`;
        }
        error_text += "</ul>"
    
    
        document.getElementById("error_msg").innerHTML = error_text
    }
    else{
        window.location.href="/HomeLandingAbout/homepage.html"
    }


}