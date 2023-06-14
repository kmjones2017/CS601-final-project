// Code for making a table of favorite characters
document.addEventListener("DOMContentLoaded", function() {
    const tableContainer = document.getElementById("table-container");
    const url = "favcharas.json";
  
    fetch(url)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed with status code " + response.status);
        }
      })
      .then(function(data) {
        // Process the returned JSON data
        const table = createTable(data["favorite characters"]);
        tableContainer.appendChild(table);
      })
      .catch(function(error) {
        console.error("Error:", error);
      });
  
    function createTable(data) {
      const table = document.createElement("table");
  
      // Create table header
      const headerRow = table.insertRow();
      Object.keys(data[0]).forEach(function(key) {
        const th = document.createElement("th");
        th.textContent = key.toUpperCase();
        headerRow.appendChild(th);
      });
  
      // Create table rows
      data.forEach(function(item) {
        const row = table.insertRow();
        Object.values(item).forEach(function(value) {
          const cell = row.insertCell();
          cell.textContent = value;
        });
      });
  
      return table;
    }
  });

// Code for validating form

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  const nameRegex = /^[a-zA-Z]{2,}$/g;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const textBox = document.getElementById("textBox").value;

  // Clear previous error messages
  clearErrorMessages();

  // Validate First Name
  if ((firstName.trim() === "") && (!nameRegex.test(firstName))) {
  displayErrorMessage("Please enter a valid first name.", "first-name-error" );
  return;
}

// Validate Last Name
if ((lastName.trim() === "") && (!nameRegex.test(lastName))) {
  displayErrorMessage("Please enter a valid last name.", "last-name-error");
  return;
}

  // Validate Email
  if ((email.trim() === "") && (!isValidEmail(email))) {
    displayErrorMessage("Please enter a valid email address.", "email-error");
    return;
  }

  // Validate Message
  if (textBox.trim() === "") {
    displayErrorMessage("Message is required.", "message-error");
    return;
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
  errorContainer.textContent = message;
}

function clearErrorMessages() {
  const errorContainers = document.querySelectorAll(".error-message");
  errorContainers.forEach(function(container) {
    container.textContent = "";
  });
}

