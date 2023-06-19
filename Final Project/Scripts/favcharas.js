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