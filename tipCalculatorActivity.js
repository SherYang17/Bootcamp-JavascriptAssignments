// Create a variable for the total amount of the bill (before the tip)
let totalAmount = 200;

// Create a function named 'calculateTip'
function calculateTip(amount) {  // - Takes in an amount as an argument, then later, when calling the function, use the variable (totalAmount) from above.
  return amount * 0.2;           // ( It should multiply the bill variable by 20% of the total and return that value)
}

// Create another function called 'getBillTotal' and it should do the following things:
function getBillTotal(amount) { // - Take any amount as an argument
  let tip = calculateTip(totalAmount); //- call the 'calculateTip' function
  return amount + tip; // - return the amount + the tip amount
}

// Console log each function and state what it is returning.
console.log("Tip: $" + calculateTip(totalAmount));
console.log("Total: $" + getBillTotal(totalAmount));

// Bonus, enable the 2 digits
let tip = calculateTip(totalAmount);
let twoDigits = tip.toFixed(2);      //https://linuxhint.com/round-number-to-2-decimal-places-javascript/
console.log("Total with 2 digits:$ " + twoDigits);





// tip calculating function https://canvas.stiegleredtech.org/courses/3/pages/functions?module_item_id=821
