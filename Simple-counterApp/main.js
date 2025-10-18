let c = 0,
  ci = 0,
  cd = 0;
const count = document.getElementById("count");
const incCount = document.getElementById("incCount");
const decCount = document.getElementById("decCount");


function inc() {
    c++; // increase main counter by 1
    ci = (ci >= 10) ? 0 : ci + 1; // increase incCount, but reset to 0 if it reaches 10
    update(); // call update function to refresh UI
}

function dec() {
    c = c > 0 ? c - 1 : 0; // decrease counter, but don't go below 0
    cd = (cd >= 10) ? 0 : cd + 1; // increase decCount, reset if >= 10
    update();
}

function update() {
    count.textContent = c;       // show main counter
    incCount.textContent = ci;   // show increment clicks
    decCount.textContent = cd;   // show decrement clicks
}