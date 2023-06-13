// Regular expression to validate the name format (minimum 2 alphabetic characters)
const nameRegex = /^[a-zA-Z]{2,}$/g;

// Regular expression to validate the facilitator name (must be one of: Josh, Fazil, Chris)
const facilitatorRegex = /^(Josh|Fazil|Chris)$/i;

// Function to set the error message for a form control
function setErrorMessage(formControl, errorMessage) {
    formControl.classList.add("error");
    const errorMessageInput = formControl.querySelector(".error-message");
    errorMessageInput.textContent = errorMessage;
}

// Function to clear the error message for a form control
function clearError(formControl) {
    return function clearErrorDebug(){
        if (formControl.classList.contains("error")) {
            formControl.classList.remove("error");
            const errorMessageInput = formControl.querySelector(".error-message");
            errorMessageInput.textContent = "";
        }
    };
}

// Function to add error reset event handlers for form controls
function addErrorReset(formControl) {
    const inputs = formControl.querySelectorAll("input");
    Array.from(inputs).forEach((input) => {
        if (input.type === "checkbox" || input.type === "radio") {
            formControl.onchange = clearError(formControl);
        } else {
            formControl.onkeyup = clearError(formControl);
        }
    });
}

// Wait for the DOM to be fully loaded and parsed
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed", event);

    // Get the form element
    const form = document.getElementById("form");

    // Add error reset event handlers for each form control
    const firstNameControl = document.getElementById("firstNameInput");
    addErrorReset(firstNameControl);

    const lastNameControl = document.getElementById("lastNameInput");
    addErrorReset(lastNameControl);

    const facilitatorControl = document.getElementById("facilitatorInput");
    addErrorReset(facilitatorControl);

    // Handle form submission
    form.onsubmit = async function onsubmitDebug(e) {
        let isValid = true;

        // Get form input values
        const inputData = new FormData(e.target);
        const input = Object.fromEntries(inputData);

        // Validate the first name
        if (!input.firstName) {
            setErrorMessage(firstNameControl, "First name is required!");
            isValid = false;
        } else if (!input.firstName.match(nameRegex)) {
            setErrorMessage(firstNameControl, "First name does not follow the required format!");
            isValid = false;
        }

        // Validate the last name
        if (!input.lastName) {
            setErrorMessage(lastNameControl, "Last name is required!");
            isValid = false;
        } else if (!input.lastName.match(nameRegex)) {
            setErrorMessage(lastNameControl, "Last name does not follow the required format!");
        }

        // Validate the facilitator name
        if (!input.facilitator) {
            setErrorMessage(facilitatorControl, "Facilitator name is required!");
            isValid = false;
        } else if(!input.facilitator.match(facilitatorRegex)) {
            setErrorMessage(facilitatorControl, "Facilitator must be one of the following: Josh, Fazil, Chris!");
            isValid = false;
        }

        // Prevent form submission if there are validation errors
        if (!isValid) {
            e.preventDefault();
        }
    };
});