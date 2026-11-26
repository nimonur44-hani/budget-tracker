
console.log("Welcome to SpendWise!");

// 1. Collect user input
let budget = Number(prompt("Enter your monthly budget (KSh):"));
let expenses = Number(prompt("Enter your total expenses (KSh):"));

const currency = "KSh";

// 2. Function to calculate balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 3. Function to display budget information
function displayBudgetSummary(budget, expenses, balance) {
    console.log("Monthly Budget: " + currency + " " + budget);
    console.log("Total Expenses: " + currency + " " + expenses);
    console.log("Remaining Balance: " + currency + " " + balance);
}

// 4. Validate inputs
if (
    !Number.isFinite(budget) ||
    !Number.isFinite(expenses) ||
    budget <= 0 ||
    expenses < 0
) {
    console.log("Invalid input. Please enter valid amounts.");
} else {
    // 5. Calculate balance
    let balance = calculateBalance(budget, expenses);

    // 6. Display results
    displayBudgetSummary(budget, expenses, balance);
}

