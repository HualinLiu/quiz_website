//#region The question
const question = "What is the animal in the picture?";
//#region The question

const animals = [
    "Panda",
    "Lion",
    "Penguin",
    "Shark",
    "Cat",
    "Dinosaur",
    "rabbit",
];

//#region get elements from the HTML
const ButtonChoice1 = document.getElementById("choice1");
const ButtonChoice2 = document.getElementById("choice2");
const ButtonChoice3 = document.getElementById("choice3");
const AnimalImage = document.getElementById("animal_picture");
const AccuracyElement = document.getElementById("accuracy");
const questionTest = document.getElementById("question");
//#endregion get elements from the HTML

//#region quiz state variables
let questions_correct = 0;
let questions_attempted = 0;
//#endregion quiz state variables

// set the choices shown on the document
function SetChoices() {
    ButtonChoice1.textContent = "cat";
    ButtonChoice2.textContent = "tiger";
    ButtonChoice3.textContent = "lion";
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
function SetImage(animal) {
    AnimalImage.setAttribute("src", `images/${animal.toLowerCase()}.jpg`);
}
SetImage("Shark");

// create a whole new question
// new set of choices
// new animal picture
function NewQuestion() {}
