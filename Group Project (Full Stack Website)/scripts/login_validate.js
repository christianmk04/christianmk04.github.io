var user = 
    {
        email : "mariamnoelle@gmail.com",
        password : "Mariamnoelle123!"
    }

function validateLogin(){
    var error_msgs = [];

    var email = document.getElementById("form3Example3").value;
    var password = document.getElementById("form3Example4").value;
    console.log(email, password);

    if (email == user["email"] && password == user["password"]) {
        window.location.href = "/HomeLandingAbout/homepage.html";
    }

    // Blank email / password
    if (email == "" || password == "") {
        if (email == "") {
            console.log(1);
            error_msgs.push("Email cannot be empty");
        }
        if (password == "") {
            console.log(2);
            error_msgs.push("Password cannot be empty")
        }
    }

    else{
        var email_check = email.split("@");
        // multiple @ in email
        if (email_check.length!=2) {
            console.log(3);
            error_msgs.push("Invalid Email")
        }
        else{
            var handle = email_check[0];
            var domain = email_check[1];
            // checking for invalid characters in handle
            const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
            var new_string = handle.replace(regex, '')
            if (new_string != handle) {
                console.log(4);
                error_msgs.push("Invalid Email")
            }
            else{
                var domain_check = domain.split(".")
                if (domain_check[1] != "com") {
                    console.log(5);
                    error_msgs.push("Invalid Email")
                }
                else{
                    var new_string1 = domain_check[1].replace(regex, '')
                    if(new_string1 != domain_check[1]){
                        console.log(6);
                        error_msgs.push("Invalid Email")
                    }
                    else{
                        if (email != user["email"]) {
                            console.log(7);
                            error_msgs.push("Email Does Not Exist")
                        }
                        if (password != user["password"]) {
                            console.log(8);
                            error_msgs.push("Password is incorrect")
                        }
                    }
                }
            }
        }
        
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
}


function resetfields() {

    document.getElementById("form3Example3").value = "";
    document.getElementById("form3Example4").value = "";
    document.getElementById("form2Example33").checked = false;
    document.getElementById("error_msg").innerHTML = "";
}