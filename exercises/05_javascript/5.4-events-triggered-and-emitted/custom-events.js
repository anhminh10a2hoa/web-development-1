//eventlistener for button
document.getElementById("roll-button").addEventListener('click', rollDice);

//total rolls
const total_rolls = document.getElementById("totals").querySelector("span");

//counters
const counter_one = document.getElementById("ones").querySelector("p");
const counter_two = document.getElementById("twos").querySelector("p");
const counter_three = document.getElementById("threes").querySelector("p");
const counter_four = document.getElementById("fours").querySelector("p");
const counter_five = document.getElementById("fives").querySelector("p");
const counter_six = document.getElementById("sixes").querySelector("p");

//roll-button image
const button_span = document.getElementById("roll-button").querySelector("span");

//eventlistener for custom event "rollDice"
document.addEventListener('rollDice', function (event) {
    console.log(event.detail.value);

    total_rolls.textContent++;

    switch (event.detail.value) {
        case 1:
            increment(counter_one);
            changeImage("&#9856;");
            break;
        case 2:
            increment(counter_two);
            changeImage("&#9857;");
            break;
        case 3:
            increment(counter_three);
            changeImage("&#9858;");
            break;
        case 4:
            increment(counter_four);
            changeImage("&#9859;");
            break;
        case 5:
            increment(counter_five);
            changeImage("&#9860;");
            break;
        case 6:
            increment(counter_six);
            changeImage("&#9861;");
            break;
        default:
        console.log("nopan antama arvo on ei ole 1-6");
    }
});

function increment(counter) {
    if(counter.textContent === "-") {
        counter.textContent = 1;
    } else {
        counter.textContent++;
    }
}

function changeImage(new_content) {
    button_span.innerHTML = new_content;
}