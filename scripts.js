// Constant Variables
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalAmountElement = document.getElementById("total-amount");

// Creates the starting total amount
let totalAmount = 0;

// This function updates the total amount
function updateTotal(amount) {
    totalAmount += amount; // List the new amount when calculated
    totalAmountElement.textContent = totalAmount.toFixed(2); //toFixed turns the numbers into a string
}

// Function to add a row to the expense table
function addExpenseRow(name, cost, category, date) {
    // Create a new table row
    const row = document.createElement("tr");

    // Create blocks for each column/row created
    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    //Creates the row where the result data will diaplay
    const costCell = document.createElement("td");
    costCell.textContent = `$${cost.toFixed(2)}`; 
    costCell.style.color = cost >= 0 ? "green" : "red"; // Green for income, red for expense

    //Creates the row where the category data will display
    const categoryCell = document.createElement("td");
    categoryCell.textContent = category;

    //Creates the row where the date data will display
    const dateCell = document.createElement("td");
    dateCell.textContent = date;
// Creates the row where the result data will also display
    const resultCell = document.createElement("td");
    resultCell.textContent = cost >= 0 ? "Income" : "Expense"; // Income for gaining money, expense for spending or losing money
    resultCell.style.color = cost >= 0 ? "green" : "red";

    // Places the blocks of data in the rows 
    row.appendChild(nameCell);
    row.appendChild(costCell);
    row.appendChild(categoryCell);
    row.appendChild(dateCell);
    row.appendChild(resultCell);

    // Adds the row by targeting the tbody
    expenseList.appendChild(row);
}

// Uses an event listener to submit the form
expenseForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get values from the form inputs
    const name = document.getElementById("expense-type").value.trim();
    const cost = parseFloat(document.getElementById("expense-cost").value);
    const category = document.getElementById("expense-category").value;
    const date = document.getElementById("expense-date").value;

    // Validation to make sure all fields are filled out 
    if (!name || isNaN(cost) || !category || !date) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Add a new expense row to the table
    addExpenseRow(name, cost, category, date);

    // Update the total amount
    updateTotal(cost);

    // Reset the form fields
    expenseForm.reset();
});




