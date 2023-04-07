var bingo_data = 
{
    "Go out in the sun" : "../../img/bingo/sun.png",
    "Take a walk" : "../../img/bingo/walking.png",
    "Meditate" : "../../img/bingo/meditation.png",
    "Dress Up" : "../../img/bingo/dressup.png",
    "Take a breather" : "../../img/bingo/breathing.png",
    "Read a book" : "../../img/bingo/book.png",
    "Self Affirmation" : "../../img/bingo/self-esteem.png",
    "See a film" : "../../img/bingo/watching-a-movie.png",
    "Watch a funny video" : "../../img/bingo/video.png",
    "Meet friends" : "../../img/bingo/friends.png",
    "Eat good food" : "../../img/bingo/hot-pot.png",
    "Journal" : "../../img/bingo/journal.png",
    "A Relaxing Bath" : "../../img/bingo/bathtub.png",
    "Call a friend" : "../../img/bingo/video-call.png",
    "Go to the park" : "../../img/bingo/park.png",
    "Go for a run" : "../../img/bingo/running.png"
}

var bg_colors = 
[
    "rgb(250, 227, 245)",
    "rgb(251, 207, 207)",
    "rgb(252, 234, 220)",
    "lightgoldenrodyellow",
    "lightpink",
    "rgb(230, 231, 255)",
    "rgb(163, 244, 240)",
    "rgb(236, 243, 253)",
    "lightcyan",
    "lightgreen",
    "lightcoral",
    "lightseagreen",
    "rgb(247, 200, 182)",
    "rgb(255, 255, 227)",
    "rgb(200, 220, 247)",
    "rgb(250, 228, 240)"
]

function initialiseBoard() {
    // console.log();
    var order1 = generateOrder();
    var order2 = generateOrder();
    var index = 0;
    for (var [key, value] of Object.entries(bingo_data)) {
        // console.log(`${key}: ${value}`);
        var curr_box_id = "box" + order1[index];
        var curr_box = document.getElementById(curr_box_id);
        // console.log(index, order2[index]-1);
        // console.log(bg_color[order2[index]]);
        curr_box.style.backgroundColor = bg_colors[order2[index]]; 
        var curr_box_img = curr_box.getElementsByTagName("img")[0]
        var curr_box_span = curr_box.getElementsByTagName("span")[0];
        
        curr_box_img.src = value;
        curr_box_span.innerText = key;

        index += 1;
    }
      
}

function generateOrder(){
    var return_arr = [];
    while (return_arr.length < 16) {
        var random_int = (Math.floor(Math.random()*16));
        if (return_arr.includes(random_int) == false) {
            return_arr.push(random_int)
        }
    }
    return return_arr
}

var bingobox =
[
    [
        ["box0", false],
        ["box1", false],
        ["box2", false],
        ["box3", false]
    ],
    [
        ["box4", false],
        ["box5", false],
        ["box6", false],
        ["box7", false]
    ],
    [
        ["box8", false],
        ["box9", false],
        ["box10", false],
        ["box11", false]
    ],
    [
        ["box12", false],
        ["box13", false],
        ["box14", false],
        ["box15", false]
    ]
]


function checkItem(item) {
    // console.log(item);
    var item_id = item.id;
    for(boxes of bingobox){
        for(box of boxes){
            if (box[0] == item_id) {
                if (box[1] == true) {
                    box[1] = false
                    document.getElementById(item_id).style.filter = "brightness(100%)";
                }
                else{
                    box[1] = true;
                    document.getElementById(item_id).style.filter = "brightness(50%)";
                }
                
            }
        }
    }

    


    checkBoard();
    // console.log(bingo_count);
    // return bingo_count
}

function checkBoard() {
    var bingo_count = 0;
    var horizontal = checkHorizontal();
    var vertical = checkVertical();
    var diagonals = checkDiagonals();
    bingo_count += horizontal + vertical + diagonals;

    var curr_bingo_count = Number(document.getElementById("num_bingos").innerText);

    if (bingo_count > curr_bingo_count) {
        alert("BINGO!");
    }
    document.getElementById("num_bingos").innerText = bingo_count;
}

function checkDiagonals() {
    var return_count = 0;
    if (bingobox[0][0][1] == true && bingobox[1][1][1] == true && bingobox[2][2][1] == true && bingobox[3][3][1] == true) {
        return_count += 1;
    }
    if (bingobox[0][3][1] == true && bingobox[1][2][1] == true && bingobox[2][1][1] == true && bingobox[3][0][1] == true) {
        return_count += 1;
    }
    return return_count;
}

function checkHorizontal() {
    var return_count = 0;
    for(boxes of bingobox){
        if (boxes[0][1] == true && boxes[1][1] == true && boxes[2][1] == true && boxes[3][1] == true) {
            return_count += 1;
        }
    }
    return return_count;
}

function checkVertical() {
    var return_count = 0;
    for (let index = 0; index <= 3; index++) {
        if (bingobox[0][index][1] == true && bingobox[1][index][1] == true && bingobox[2][index][1] == true && bingobox[3][index][1] == true) {
            return_count += 1;
        }
    }
    return return_count;
}

