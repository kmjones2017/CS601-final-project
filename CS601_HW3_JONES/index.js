// Welcome the visitor with an alert
alert("Hello! Welcome to my site!")

// Ask for the user's name
let userName = prompt("Please, enter your name.");

// Greet the user
if (userName !== null) {
  alert("Hello, " + userName + "!");
}
// Function to ask the user for two numbers and add them together
function addition() {
   
    // Ask the user for number and validate that it isn't NaN
    let firstNumber = Number(prompt("Enter your first number, please."));
    while (Number.isNaN(firstNumber)) {
        alert("Invalid input. Please, try again.");
        firstNumber = Number(prompt("Enter your first number, please."));
    }

    // Ask the user for another number and validate it
    let secondNumber = Number(prompt("Enter your second number, please."));
    while (Number.isNaN(secondNumber)) {
        alert("Invalid input. Please, try again.");
        secondNumber = Number(prompt("Enter your second number, please."));
    }

    // Add the two numbers together
    let result = firstNumber + secondNumber;
    
    // Display the result
    alert(`The sum of your two numbers is: ${result}`);

    // Display whether the result is a large number or not
    if (result > 10) {
        alert("That is a big number.");
    } else {
        alert("That is a small number.");
    }

    // Ask the user if they want to continue
    let restart = confirm("Do you want to add two more?");
       
    // Loop until the user opts out
    while (restart) {
            firstNumber = Number(prompt("Enter your first number, please."));
            while (isNaN(firstNumber)) {
                alert("Invalid input. Please, try again.")
                firstNumber = Number(prompt("Enter your first number, please."));
            }

            secondNumber = Number(prompt("Enter your second number, please."));
            while (isNaN(secondNumber)) {
                alert("Invalid input. Please, try again.")
                secondNumber = Number(prompt("Enter your second number, please."));
            }

            result = firstNumber + secondNumber
            alert(`The sum of your two numbers is: ${result}`);
        
            if (result > 10) {
            alert("That is a big number.");
        }   else {
            alert("That is a small number.");
        }
            restart = confirm("Do you want to add two more?");
    }
    // Thank the visitor for using the program
    alert("Thank you for using my calculator!");
}


