var steps_txt_arr = 
[
    "Let's Begin. Find somewhere comfortable to sit. Preferably, somewhere quiet. If you can, close your eyes.",

    "Start by breathing in through your nose for 4 seconds. Imagine taking in all of your surroundings. Inhale deeply.",

    "Hold your breath for 7 seconds.Feel your self preparing to release the stress and anxiety that you are experiencing",

    "Exhale through your mouth for 8 seconds. Breathe out slowly and release all the accumulated stress and anxiety.",

    "Now you're ready to begin. Click 'Start' once you are ready. Click 'Previous' to see the instructions again.",
]

var buttons_arr = [
    `<div class="col">
        <button class="btn btn-lg btn-primary breathing-btn" id="prev_button" disabled>
            Previous
        </button>
    </div>
    <div class="col"></div>
    <div class="col">
        <button class="btn btn-lg btn-primary breathing-btn" id="next_button" onclick="next_page()">
            Next
        </button>
    </div>`,

    `<div class="col">
        <button class="btn btn-lg btn-primary breathing-btn" id="prev_button" onclick="prev_page()">
            Previous
        </button>
    </div>
    <div class="col"></div>
    <div class="col">
        <button class="btn btn-lg btn-primary breathing-btn" id="next_button" onclick="next_page()">
            Next
        </button>
    </div>`,

    `<div class="col">
        <button class="btn btn-lg btn-primary breathing-btn" id="prev_button" onclick="prev_page()">
            Previous
        </button>
    </div>
    <div class="col"></div>
    <div class="col">
        <button class="btn btn-lg btn-primary breathing-btn" id="next_button" onclick="next_page()">
            Next
        </button>
    </div>`,

    `<div class="col">
        <button class="btn btn-lg btn-primary breathing-btn" id="prev_button" onclick="prev_page()">
            Previous
        </button>
    </div>
    <div class="col"></div>
    <div class="col">
        <button class="btn btn-lg btn-primary breathing-btn" id="next_button" onclick="next_page()">
            Next
        </button>
    </div>`,
    
    `<div class="col">
        <button class="btn btn-lg btn-primary breathing-btn" id="prev_button" onclick="prev_page()">
            Previous
        </button>
    </div>
    <div class="col"></div>
    <div class="col">
        <button class="btn btn-lg btn-primary breathing-btn" id="start_button" onclick="startTimer()" onclick="setTimeout(clearTimer,20000)">
            Start
        </button>
    </div>`,

    `<div class="col">
        <button class="btn btn-lg btn-primary breathing-btn" id="stop_button" onclick="startTimer()">
            Go Again
        </button>
    </div>
    
    <div class="col">
    <a href="../Mental Health/mental_health_landing.html">
        <button class="btn btn-lg btn-primary breathing-btn h-100" id="back_button">
            Go Back
        </button>
    </a>
    </div>
    
    <div class="col">
    <a href="../../HomeLandingAbout/homepage.html">
        <button class="btn btn-lg btn-primary breathing-btn h-100" id="home_button">
            Home
        </button>
    </a>
    </div>`
]

var count = 0;
 
var i = 0;
var speed = 120;
var txt = ""
var stop_flag = false;

function typeWriter() {
    document.getElementById("steps").innerHTML = steps_txt_arr[count].substring(0, i);
  
    if(i++ != steps_txt_arr[count].length){
        console.log("test", i);
        setTimeout(typeWriter, speed);   
    }
}


function pageLoad() {
    // var breather_steps = document.getElementById("steps");
    // // breather_steps.innerHTML = "";
    console.log("=== pageLoad ===");
    txt = steps_txt_arr[count]
    document.getElementById("steps").innerHTML = txt
    // typeWriter();
}

function prev_page() {
    count -= 1;
    // if (i < steps_txt_arr[count + 1].length) {
    //     stop_flag = true;
    // }

    i = 0;
    txt = steps_txt_arr[count];
    output_step();
    // typeWriter()
    button_change();
}

function next_page() {
    count += 1;
    // if (i < steps_txt_arr[count - 1].length) {
    //     stop_flag = true;
    // }

    i = 0;
    txt = steps_txt_arr[count];
    output_step();
    // typeWriter()
    button_change();
}

function output_step() {
    var breather_steps = document.getElementById("steps");
    console.log(steps_txt_arr[count]);
    breather_steps.innerHTML = steps_txt_arr[count]
}

function button_change(){
    var button_div = document.getElementById("buttons")

    button_div.innerHTML = buttons_arr[count]
}

var time_count = 0;
var stopper = false;
function startTimer() {  

    var button_div = document.getElementById("buttons");
    button_div.innerHTML = "";

    let myTimer = setInterval(breathing, 1000);

    if (time_count != 0) {
        time_count = 0;
        clearInterval(myTimer)
    }
    console.log(time_count);
}
7


function breathing() {
    time_count += 1;
    var timer_div = document.getElementById("steps")

    if (time_count <= 4) {
        timer_div.innerHTML =
        `
        <span>Breathe In for 4 seconds...</span>
        <span>${time_count}</span>
        `
    }
    else if(time_count <= 11){
        timer_div.innerHTML =
        `
        <span>Hold your breath for 7 seconds... (Till 11 seconds)</span>
        <span>${time_count}</span>
        `
    }
    else if(time_count <= 20){
        timer_div.innerHTML =
        `
        <span>Breathe out for 8 seconds... (Till 20 seconds)</span>
        <span>${time_count}</span>
        `
    }

    if(time_count == 21){
        // clearInterval(myTimer);
        var button_div = document.getElementById("buttons");
        timer_div.innerHTML =
        `<span>Experience Tranquility<span>`;

        // button_div.class = "row justify-content-center row-cols-5"
        button_div.innerHTML = buttons_arr[5]
    }
}





