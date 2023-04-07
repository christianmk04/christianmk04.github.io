// const { default: axios } = require("axios");

var sos_button = document.getElementById("sos_button");
sos_button.addEventListener("click", sos_alert);


var months_arr = {
    1 : "January",
    2 : "February",
    3 : "March",
    4 : "April",
    5 : "May",
    6 : "June",
    7 : "July",
    8 : "August",
    9 : "September",
    10 : "October",
    11 : "November",
    12 : "December"
}

var temp_holding_loc = "416A Fernvale Lane #16-17, 791416"

function sos_alert() {

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // console.log(day, month, year, hours, minutes, seconds)

    // var tele_api = "https://api.telegram.org/bot5532657135:AAEUOVOZBPtnZI5cZUG1OvbrDqKSGhBBtCs/getUpdates"

    // axios.get(tele_api)
    // .then(response => {
    //     console.log(response.data);
    // })
    // .catch(error => {
    //     console.log(error);
    // })

    var time_string = `${hours}:${minutes}:${seconds} on ${day} ${months_arr[month]} ${year}`
    alert("Your SOS message has been received and forwarded to the Singapore Police Force at " + time_string + `. \n\n Your emergency address : ${temp_holding_loc}. \n\nPlease try to remain calm and be away from your assailant as much as possible. The authorities will be right with you shortly.`)
}