function passwordCheck(password) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const uppercase = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g;
    const lowercase = /[abcdefghijklmnopqrstuvwxyz]/g;
    const number = /[0123456789]/g;
    var new_string1 = password.replace(regex, '');
    var new_string2 = password.replace(uppercase, '');
    var new_string3 = password.replace(lowercase, '');
    var new_string4 = password.replace(number, '');

    console.log(new_string1,new_string2,new_string3,new_string4);
    var error_arr = [];
    if (password.length == new_string1.length) {
        error_arr.push(1)
    }
    if (password.length == new_string2.length) {
        error_arr.push(2)
    }
    if (password.length == new_string3.length) {
        error_arr.push(3)
    }
    if (password.length == new_string4.length) {
        error_arr.push(4)
    }

    return error_arr
}

function registrationValidation() {
    var error_msgs = [];

    var email = document.getElementById("input_email").value;
    var password = document.getElementById("input_password").value;
    var cfm_password = document.getElementById("cfm_password").value;

    console.log(email);

    if (email == "" || password == "" || cfm_password == "") {
        if (email == "") {
            error_msgs.push("Email cannot be empty");
        }
        if (password == "") {
            error_msgs.push("Password cannot be empty");
        }
        if (cfm_password == "") {
            error_msgs.push("Confirm Password cannot be empty")
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
                        if (password != cfm_password) {
                            error_msgs.push("Passwords do not match.")
                        }
                        else if(password.length<8){
                            error_msgs.push("Password is too short")
                        }
                        else{
                            var error_arr = passwordCheck(password);
                            for(err of error_arr){
                                if (err == 1) {
                                    error_msgs.push("Password needs at least 1 special character")
                                }
                                if (err == 2) {
                                    error_msgs.push("Password needs at least 1 uppercase character")
                                }
                                if (err == 3) {
                                    error_msgs.push("Password needs at least 1 lowercase character")
                                }
                                if (err == 4) {
                                    error_msgs.push("Password needs at least 1 numeric character")
                                }
                            }
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
    else{
        window.location.href="/HomeLandingAbout/homepage.html"
    }

}