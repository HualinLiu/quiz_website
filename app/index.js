let ButtonChoice1 = document.getElementById("choice1");
let ButtonChoice2 = document.getElementById("choice2");
let ButtonChoice3 = document.getElementById("choice3");

function Choice1Action() {
    alert("choice 1 clicked");
}
ButtonChoice1.addEventListener("click", Choice1Action, false);

function Choice2Action() {
    alert("choice 2 clicked");
}
ButtonChoice2.addEventListener("click", Choice2Action, false);

function Choice3Action() {
    alert("choice 3 clicked");
}
ButtonChoice3.addEventListener("click", Choice3Action, false);
