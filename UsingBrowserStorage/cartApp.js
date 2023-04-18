// In cartApp.js, write a script that does the following:
// 1. Create a function called initializeCart that checks if there's a cart in localStorage; if not, it initializes an empty cart and stores it in localStorage.
function initializeCart() {                           // Create a function called initializeCart
  if (localStorage.getItem("cart") === null) {        // if there's not a cart in localStorage
    localStorage.setItem("cart", JSON.stringify([])); // if not, it initializes an empty cart and stores it in localStorage. *note, will store in array because the homework has 3 objects in array format
  }
}
initializeCart(); // run the function so that it begins an empty cart array. There is no cart in localstorage, hence, this creation. 

// 2. Create a function called addItem that takes an item object as a parameter, retrieves the cart from localStorage, adds the item to the cart, and then stores the updated cart back into localStorage.
function addItem(item) {                               // Create a function called addItem that takes an item object as a parameter
  let cart = JSON.parse(localStorage.getItem("cart")); // retrieves the cart from localStorage, [you must use parse to retrieve a string], let variable = the retrieval 
  cart.push(item);                                     // adds the item to the cart, use push() method
  localStorage.setItem("cart", JSON.stringify(cart));  // and then stores the updated cart back into localStorage
}

// 3. Create a function called removeItem that takes an item id as a parameter, retrieves the cart from localStorage, removes the item with the given id from the cart, and then stores the updated cart back into localStorage.
// We don't even have a remove button? So we're just making this to make?
function removeItem(itemId) {                          // Create a function called removeItem that takes an item id as a parameter
  let cart = JSON.parse(localStorage.getItem("cart")); // retrieves the cart from localStorage
  cart = cart.filter(item => item.id !== itemId);      // removes the item with the given id from the cart
  localStorage.setItem("cart", JSON.stringify(cart));  // and then stores the updated cart back into localStorage
}

// 4. Create a function called displayCart that retrieves the cart from localStorage and logs the cart contents to the console.
function displayCart() {                               // Create a function called displayCart
  let cart = JSON.parse(localStorage.getItem("cart")); // that retrieves the cart from localStorage
  console.log(cart);                                   // and logs the cart contents to the console
}

// 5. Create event listeners for the add item form and display cart button to call the respective functions.
function eventListeners () {
  // add item button
  document.getElementById("addItemForm").addEventListener("submit", function() {   // grab formid addItemForm that encapsulates the fields, add eventlistener to the button "add item" button with type=submit, function kicks off the next part
      const itemName = document.getElementById("itemName").value;                  // grab itemname textform and declare it a variable
      const itemPrice = parseFloat(document.getElementById("itemPrice").value);    // grab itemprice numberform and declare it a variable, added parsefloat because number comes back as string without parse
      const item = {id: Date.now(), name: itemName, price: itemPrice};             // copy style of hw objects, date.now() used for the id??, no need for math generator
      addItem(item);                                                               // pass the item into the additem function declared earlier on step 1
  });
  // display cart button 
  document.getElementById("displayCartButton").addEventListener("click", function() {  // LOL the cart wont display, need below to trigger the button to display inside the console
      displayCart();
  });
}

// 6. closed off teh listener and fire this off!
document.addEventListener("DOMContentLoaded", eventListeners); // need to run this so that EVERYTHIGN actually works and will prompt, always use this in header too, 





// Step 1: Create a function called initializeCart that checks if there's a cart in localStorage; if not, it initializes an empty cart and stores it in localStorage.
//      Create a function to check if there is anything in teh cart. If nothing then create a cart with an empty array.
//      Because it's JSON, to store array or objects you must convert to string first
//      getItem () - allows you to access the data stored in the browsers localStorageobject, method only accepts 1 parameter which is key and returns string
//          localStorage.getItem('name'); || JSON.parse(localStorage.getItem('user'));
//      setItem () - allows you to store values in local storage
//          setItem(keyName, keyValue) / keyName is string containing name of key you want to create/update / keyValye is string containing valye u want to give key to create/update
//          examples -> localStorage.setItem("bgcolor", "red"); || localStorage.setItem("image", "myCat.png"); || localStorage.setItem("mytime", Date.now());
//          examples -> localStorage.setItem('user', JSON.stringify(userArray));
//      Run the initializeCart function so that it is triggered whent he webpage  starts
//      use setItem() method

// Step 2: Create a function called addItem that takes an item object as a parameter, retrieves the cart from localStorage, adds the item to the cart, and then stores the updated cart back into localStorage.
//      JSON.parse()– the JSON.parse method converts a string into its corresponding object or value as described by the string
//      Function basically takes a item as a parameter and adds it to the cart which is stored in localStorage and then saves to storage
//      push() from earlier homeworks (so variable + push())
//      setItem () - allows you to store values in local storage


// Step 3: Create a function called removeItem that takes an item id as a parameter, retrieves the cart from localStorage, removes the item with the given id from the cart, and then stores the updated cart back into localStorage.
//      We don't even use this??
//      Function basically removes an item from the cart based on itemID
//      filter () - constructs new array of all values returning a truthy value
//      Example below
//          const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//          const result = words.filter(word => word.length > 6);
//          filter(city => city.population < 3000000)
//          array.filter(function(currentValue, index, arr), thisValue)
//          cart = cart.filter(item => item.id !== itemId);

// Step 4: Create a function called displayCart that retrieves the cart from localStorage and logs the cart contents to the console.
//      Literally the same as step 2 but just console logging the display cart
//      getItem () - allows you to access the data stored in the browsers localStorageobject, method only accepts 1 parameter which is key and returns string
//      declare a variable to hold the information and then parse it to convert it to string

// Step 5: Create event listeners for the add item form and display cart button to call the respective functions.
//      This basically enables a user to add an item or display an item from the cart. Need this to fire off into the console.
//      the submit button, usually there is a page refresh but since theres no action going on,
//      itemprice, must use parseFloat to convert string to number because it keeps appearing as string on the console
//      ex) parseFloat(quantity);
//      Example below on addEventListener()
//          1.document.addEventListener("click", myFunction);
//          2.document.addEventListener("click", function(){
//              document.getElementById("demo").innerHTML = "Hello World";
//            });
//          3.document.addEventListener("click", function(){
//              document.body.style.backgroundColor = "red";
//            });
//      ID = date.now() is a good random ID generator
//        https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13
//        can use math.floor(math.random() * 100) or date.now()
//        why code unique numbers with math.floor when you can use datenow??

//Step 6:
//      DomContentLoaded - event fires when the HTML document has been completely parsed, and all deferred scripts have downloaded and executed
//      Example => addEventListener("DOMContentLoaded", (event) => {});

// Reused so many code, couldve just made a global variable to pass it through the functions


// Definitions
//      getItem () - allows you to access the data stored in the browsers localStorageobject, method only accepts 1 parameter which is key and returns string
//      setItem () - allows you to store values in local storage
//      JSON.parse () – the JSON.parse method converts a string into its corresponding object or value as described by the string (aka take string, make it javascript object)
//      filter () - constructs new array of all values returning a truthy value
//      parseFloat() - accept a string and convert it into a floating-point number
//      addEventListener() - requires a string which is the name of the event that will be triggered
//      document.getElementById() - returns an Element object representing the element whose id property matches the specified string




// To create the key value, reference this doc https://blog.logrocket.com/localstorage-javascript-complete-guide/
// MDM typical sites
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// JSON parse https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// JSON stringify https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// Add Event Listener https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// Sending Form Data https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// random id generator https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13
// google 🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏