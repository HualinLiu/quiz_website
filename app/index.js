//#region helpful constants
const choiceId1 = "choice1";
const choiceId2 = "choice2";
const choiceId3 = "choice3";
//#endregion helpful constants

//#region get elements from the HTML
let ButtonChoice1 = document.getElementById("choice1");
let ButtonChoice2 = document.getElementById("choice2");
let ButtonChoice3 = document.getElementById("choice3");
//#endregion get elements from the HTML

// get correct choice
// get the text for the button chosen
// verify correctness
// update accuracy
function ChoiceAction(event) {
    // get the clicked button
    // event.currentTarget returns the element clicked (the button in this event)
    const choiceButton = event.currentTarget;

    alert(`${choiceButton.id} clicked`);
}
ButtonChoice1.addEventListener("click", ChoiceAction, false);
ButtonChoice2.addEventListener("click", ChoiceAction, false);
ButtonChoice3.addEventListener("click", ChoiceAction, false);
