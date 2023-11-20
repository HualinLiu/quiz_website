//#region The question
const question = "What is the animal in the picture?"
//#region The question

const animals = ["Panda", "Lion", "Penguin", "Shark", "Cat", "Dinosaur", "rabbit"];

//#region helpful constants
const choiceId1 = "choice1";
const choiceId2 = "choice2";
const choiceId3 = "choice3";
const imageId = "animal_picture";
const accuracyId = "accuracy";
const questionId = "question";
//#endregion helpful constants

//#region get elements from the HTML
const ButtonChoice1 = document.getElementById(choiceId1);
const ButtonChoice2 = document.getElementById(choiceId2);
const ButtonChoice3 = document.getElementById(choiceId3);
const AnimalImage = document.getElementById(imageId);
const AccuracyElement = document.getElementById(accuracyId);
const questionTest = document.getElementById(questionId);
//#endregion get elements from the HTML

//#region quiz state variables
let questions_correct = 0;
let questions_attempted = 0;
//#endregion quiz state variables

// set the choices shown on the document
function SetChoices() {
    ButtonChoice1.textContent = "cat";
    ButtonChoice2.textContent = "tiger";
    ButtonChoice3.textContent = "lion"
    questionTest.textContent = question;
}
SetChoices();
// update the accuracy
function UpdateAccuracy(correct) {
    // update statistics
    questions_attempted++;
    if (correct) {
        questions_correct++;
    }

    // update element to be accuracy as a percentage
    AccuracyElement.textContent = `${Math.round(
        (questions_correct / questions_attempted) * 100
    )}%`;
}

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
