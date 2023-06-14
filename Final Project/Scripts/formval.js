document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    const nameRegex = /^[a-zA-Z\s'-]{2,}$/;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const textBox = document.getElementById("textBox").value;
  
    // Clear previous error messages
    clearErrorMessages();
  
    // Validate First Name
    if ((firstName.trim() === "") || (!nameRegex.test(firstName))) {
      displayErrorMessage("Please enter a valid first name.", "first-name-error");
    }
  
    // Validate Last Name
    if ((lastName.trim() === "") || (!nameRegex.test(lastName))) {
      displayErrorMessage("Please enter a valid last name.", "last-name-error");
    }
  
    // Validate Email
    if ((email.trim() === "") || (!isValidEmail(email))) {
      displayErrorMessage("Please enter a valid email address.", "email-error");
    }
  
    // Validate Message
    if (textBox.trim() === "") {
      displayErrorMessage("Message is required.", "message-error");
    }
  
    // Form is valid, proceed with submission or further processing
    // ...
  });
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function displayErrorMessage(message, errorContainerId) {
    const errorContainer = document.getElementById(errorContainerId);
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;
    errorContainer.appendChild(errorMessage);
  }
  
  function clearErrorMessages() {
    const errorContainers = document.querySelectorAll(".error-message");
    errorContainers.forEach(function(container) {
      container.remove();
    });
  }
  