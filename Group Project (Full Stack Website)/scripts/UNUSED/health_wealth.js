var mental_card = document.getElementById("mental-card");
var physical_card = document.getElementById("physical-card");
// console.log(mental_card_1.getElementsByTagName("img")[0]);
mental_card.addEventListener("mouseover", change_IMG1);
physical_card.addEventListener("mouseover", change_IMG2);
mental_card.addEventListener("mouseout", change_IMG1);
physical_card.addEventListener("mouseout", change_IMG2);

var curr_enlarge1 = false; 
var curr_enlarge2 = false; 

function change_IMG1() {
    if (curr_enlarge1 == false) {
        var curr_img = mental_card.getElementsByTagName("img")[0];
        curr_img.style.width = "65%"
        curr_enlarge1 = true;
    }
    else{
        var curr_img = mental_card.getElementsByTagName("img")[0];
        curr_img.style.width = "50%"
        curr_enlarge1 = false;
    }
}

function change_IMG2() {

    if (curr_enlarge2 == false) {
        var curr_img = physical_card.getElementsByTagName("img")[0];
        curr_img.style.width = "65%"
        curr_enlarge2 = true;
    }
    else{
        var curr_img = physical_card.getElementsByTagName("img")[0];
        curr_img.style.width = "50%"
        curr_enlarge2 = false;
    }
}



