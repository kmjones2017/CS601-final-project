document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("fetch-button");

button.addEventListener("click", function() {
fetch("degrees.json")
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Request failed with status code " + response.status);
    }
  })
  .then(function(data) {
    // Process the returned JSON data
    createTable(data.schools);
  })
  .catch(function(error) {
    console.error("Error:", error);
  });
});

function createTable(schools) {
const table = document.createElement("table");

// Create table header
let headerRow = table.insertRow();
Object.keys(schools[0]).forEach(function(key) {
  let th = document.createElement("th");
  th.textContent = key.toUpperCase();
  headerRow.appendChild(th);
});

// Create table rows
schools.forEach(function(school) {
  let row = table.insertRow();
  Object.values(school).forEach(function(value) {
    let cell = row.insertCell();
    cell.textContent = value;
  });
});

// Add the table to the webpage
let tableContainer = document.getElementById("table-container");
tableContainer.innerHTML = "";
tableContainer.appendChild(table);
}
});