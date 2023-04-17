

document.addEventListener("DOMContentLoaded", function () {
// Update the 'Apples' item to say 'Granny Smith Apples'
document.querySelector("#list li:nth-child(2)").innerText = "Granny Smith Apples"; //select the 2nd from list and innerText to rewrite it

// Remove 'Oat Milk' from the list
document.querySelector("#list li:nth-child(4)").remove(); //simply select the 4th from list and remove

// // Add an item 'Kombucha'
const kombuchaItem = document.createElement("li"); // const variable = create me a li
kombuchaItem.innerText = "Kombucha"; // variable text = kombucha
document.getElementById("list").appendChild(kombuchaItem); // get list id and append to kombuchaitem


// // Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
const newItems = ["protein bars", "almonds", "peanut butter"]; //create array
const list = document.getElementById("list"); // define the elementid list to a variable
list.innerHTML = ""; // make the variable blank with no text between quotes

// // Use for loop to add in the array, loops thru each item and creates list item and append at the end
for (let item of newItems) { //for each item inside newItems array created above
  const listItem = document.createElement("li"); //create a variable to define the creation of li's
  listItem.innerText = item; //each item looping thru newitems will write the text 
  list.appendChild(listItem); //append/rewrite to each listitem that it loops through
}

// // Add the class 'important' to the almonds item.
 document.querySelector("#list li:nth-child(2)").classList.add("important"); //element.classList.add("newClass");, just mounting it on
});










//https://bobbyhadz.com/blog/javascript-get-nth-child-of-element
// loop related document https://gomakethings.com/two-more-ways-to-create-html-from-an-array-of-data-with-vanilla-js/







// 8// const kombuchaItem = document.createElement("li");
// kombuchaItem.innerText = "Kombucha";
// document.getElementById("list").appendChild(kombuchaItem);