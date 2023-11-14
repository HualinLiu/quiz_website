//#region helpful constants
const choiceId1 = "choice1";
const choiceId2 = "choice2";
const choiceId3 = "choice3";
const imageId = "animal_picture";
//#endregion helpful constants

//#region get elements from the HTML
const ButtonChoice1 = document.getElementById(choiceId1);
const ButtonChoice2 = document.getElementById(choiceId2);
const ButtonChoice3 = document.getElementById(choiceId3);

const AnimalImage = document.getElementById(imageId);
//#endregion get elements from the HTML

//#region quiz state variables
let accuracy = -1; // -1 means first question
//#endregion quiz state variables

// set the choices shown on the document
function SetChoices() {}

// update the accuracy
function UpdateAccuracy() {}

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

// update the document with a new image
function ChangeImage() {}

// create a whole new question
// new set of choices
// new animal picture
function NewQuestion() {}
