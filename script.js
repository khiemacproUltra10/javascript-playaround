let age = 0;
const myText = document.getElementById("ageInput");
const mySubmit = document.getElementById("submitButton");
const myResult = document.getElementById("resultMessage");


mySubmit.addEventListener("click", function() {
    age = myText.value;
    // Convert the input to a number
    age = Number(age);

    if (isNaN(age)) {
        myResult.textContent = `Please enter a valid number for your age.`;
        myText.value = ""; // Clear the input field
        myText.focus(); // Set focus back to the input field
        return;
    }
    if (age >= 100) {
      myResult.textContent = `You are TOO OLD to enter this site.`;
    } else if (age >= 18) {
        myResult.textContent = `You are ${age} years old. You can enter this site.`;
    } else if (age == 0) {
        myResult.textContent = `You can't enter. You were just born.`;
    } else if (age < 0) {
        myResult.textContent = `You can't enter. You are not born yet.`;
    } else {
        myResult.textContent = `You must be 18+ to enter this site.`;
    }
});