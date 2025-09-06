// ================== Part 1: Basics ==================
// Variables, Data Types, Conditionals
function checkAge() {
  // Ask the user for their age (prompt returns a string)
    let age = prompt("Enter your age:");

  // Convert input from string to number
    age = Number(age);

  // Conditional check using if/else
    if (age >= 18) {
    // If age is 18 or older
    document.getElementById("output1").innerText = "✅ You are an adult!";
    } else {
    // If age is less than 18
    document.getElementById("output1").innerText = "❌ You are under 18.";
    }
}

// ================== Part 2: Functions ==================
// Functions make code reusable and DRY (Don't Repeat Yourself)

// Function to calculate total cost
function calculateTotal(quantity, price) {
    let total = quantity * price; // Multiply inputs
  // Display result inside <p id="output2">
    document.getElementById("output2").innerText = `Total: $${total}`;
    return total; // Return value in case we want to reuse it
}

// Function to format a name (capitalize first letter only)
function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Example use: will log "Ogada" in browser console
console.log(formatName("ogadA"));

// ================== Part 3: Loops ==================
// Loops help us repeat tasks without writing code multiple times
function showCountdown() {
    let output = "";

  // Loop from 5 down to 1
    for (let i = 5; i >= 1; i--) {
        output += i + " "; // Add numbers separated by space
    }

  // Display countdown result
    document.getElementById("output3").innerText = output;
}

// ================== Part 4: DOM Manipulation ==================
// DOM = Document Object Model (structure of the page)

// 1. Toggle a class on/off (e.g., highlight text)
document.getElementById("toggleBtn").addEventListener("click", function () {
    document.getElementById("domText").classList.toggle("highlight");
});

// 2. Change text content dynamically when user clicks the paragraph
document.getElementById("domText").addEventListener("click", function () {
    this.innerText = "🔥 You clicked me!";
});

// 3. Add a new list item dynamically
function addNewItem() {
    let ul = document.getElementById("itemList"); // Find <ul>
    let li = document.createElement("li");        // Create new <li>
    li.innerText = "New item added!";             // Set text for list item
    ul.appendChild(li);                           // Add <li> to <ul>
}
