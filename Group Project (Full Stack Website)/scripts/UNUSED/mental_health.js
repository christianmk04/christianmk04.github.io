// var mental_cards = document.getElementsByClassName("mental-card");
var mental_card_1 = document.getElementById("mental-card-1");
var mental_card_2 = document.getElementById("mental-card-2");
var mental_card_3 = document.getElementById("mental-card-3");
var mental_card_4 = document.getElementById("mental-card-4");
// console.log(mental_card_1.getElementsByTagName("img")[0]);
mental_card_1.addEventListener("mouseover", change_IMG1);
mental_card_2.addEventListener("mouseover", change_IMG2);
mental_card_3.addEventListener("mouseover", change_IMG3);
mental_card_4.addEventListener("mouseover", change_IMG4);
mental_card_1.addEventListener("mouseout", change_IMG1);
mental_card_2.addEventListener("mouseout", change_IMG2);
mental_card_3.addEventListener("mouseout", change_IMG3);
mental_card_4.addEventListener("mouseout", change_IMG4);

var curr_enlarge1 = false; 
var curr_enlarge2 = false; 
var curr_enlarge3 = false; 
var curr_enlarge4 = false; 

function change_IMG1() {
    if (curr_enlarge1 == false) {
        var curr_img = mental_card_1.getElementsByTagName("img")[0];
        curr_img.style.width = "70%"
        curr_enlarge1 = true;
    }
    else{
        var curr_img = mental_card_1.getElementsByTagName("img")[0];
        curr_img.style.width = "50%"
        curr_enlarge1 = false;
    }
}

function change_IMG2() {

    if (curr_enlarge2 == false) {
        var curr_img = mental_card_2.getElementsByTagName("img")[0];
        curr_img.style.width = "65%"
        curr_enlarge2 = true;
    }
    else{
        var curr_img = mental_card_2.getElementsByTagName("img")[0];
        curr_img.style.width = "50%"
        curr_enlarge2 = false;
    }
}

function change_IMG3() {

    if (curr_enlarge3 == false) {
        var curr_img = mental_card_3.getElementsByTagName("img")[0];
        curr_img.style.width = "70%"
        curr_enlarge3 = true;
    }
    else{
        var curr_img = mental_card_3.getElementsByTagName("img")[0];
        curr_img.style.width = "50%"
        curr_enlarge3 = false;
    }
}

function change_IMG4() {
    if (curr_enlarge4 == false) {
        var curr_img = mental_card_4.getElementsByTagName("img")[0];
        curr_img.style.width = "60%"
        curr_enlarge4 = true;
    }
    else{
        var curr_img = mental_card_4.getElementsByTagName("img")[0];
        curr_img.style.width = "50%"
        curr_enlarge4 = false;
    }
}