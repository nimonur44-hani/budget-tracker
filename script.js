
console.log("Welcome to SpendWise!");

// 1. Store monthly budget
let budget = 0;

// 2. Store multiple expenses using an array
let expenses = [];

// 3. Calculate total expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// 4. Calculate remaining balance
function calculateBalance() {
    return budget - calculateTotalExpenses();
}

// 5. Display budget information on the webpage
function updateDashboard() {
    const total = calculateTotalExpenses();
    const balance = calculateBalance();

    document.getElementById("budget").textContent =
        "KSh " + budget.toLocaleString();

    document.getElementById("totalExpenses").textContent =
        "KSh " + total.toLocaleString();

    document.getElementById("balance").textContent =
        "KSh " + balance.toLocaleString();

    // Decision making using conditionals
    const status = document.getElementById("budgetStatus");

    if (balance < 0) {
        status.textContent = "Warning! You have exceeded your budget.";
    } else if (total >= budget * 0.8) {
        status.textContent = "Careful! You are approaching your budget limit.";
    } else {
        status.textContent = "Good job! You are within your budget.";
    }

    // Display expense records using a loop
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        const item = document.createElement("li");

        item.textContent =
            expenses[i].name + " - KSh " +
            expenses[i].amount.toLocaleString();

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            expenses.splice(i, 1);
            updateDashboard();
        });

        item.appendChild(deleteButton);
        expenseList.appendChild(item);
    }
}

// 6. Handle budget form submission
document.getElementById("budgetForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const budgetInput = Number(document.getElementById("budgetInput").value);

    if (!Number.isFinite(budgetInput) || budgetInput <= 0) {
        alert("Please enter a valid monthly budget.");
        return;
    }

    budget = budgetInput;
    updateDashboard();
});

// 7. Handle adding expenses
document.getElementById("expenseForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("expenseName").value.trim();
    const amount = Number(document.getElementById("expenseAmount").value);

    if (name === "" || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }

    expenses.push({
        name: name,
        amount: amount
    });

    document.getElementById("expenseForm").reset();

    updateDashboard();
});
