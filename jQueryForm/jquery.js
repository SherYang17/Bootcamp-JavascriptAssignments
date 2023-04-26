$(function() {                            // 1. Page cannot be manipulated safely until the document is ready
    $("#submit").on("click", function() { // 2. Create a function that will fire when the submit <button> is clicked
      let name = $("#name");              // 3. store the variables you've name, email, and phone number
      let email = $("#email");            // 3. store the variables you've name, email, and phone number
      let phone = $("#phone");            // 3. store the variables you've name, email, and phone number
      let required = [name, email, phone]; //  4. create an array named required

      for (let i = 0; i < required.length; i++) {  // 5. Utilize a for loop to iterate of the entire required array
        if (required[i].val() === "") {            // 6. use an if statement to check the value of each array item, if the array item is equal to an empty string (""
          $("#message").text("Please Fill Out Required Fields").addClass("warning"); // 7. populate the message <p> with the following text: "Please Fill Out Required Fields", add the warning class to this message
          required[i].prev("label").addClass("warning");    // 8. Attach the warning class to the array item's <label> note: You want the label to turn red, if the field is empty
        } else {
          required[i].prev("label").removeClass("warning"); // 9. once the field has something other than a blank string. make sure the warning class is removed
        }
      } // close out the for loop
      
      // utilize another if statement
      if ($("label.warning").length === 0) {                 // 10. verify that no <label>'s have the warning class //IF RED WARNING LABEL = 0, THEN REMOVE THE FORM
        $("#form").remove();                                 // 11. remove the form from the DOM
        $("#pre-form h2").text("Thanks for your feedback!"); // 12. manipulate the <h2> to say: "Thanks for your feedback!"
      }
    });
  }); // close your function



// 1_________________________________________________________________________________________________________
// 1. Page cannot be manipulated safely until the document is ready
// Document cannot load until ready -> https://learn.jquery.com/using-jquery-core/document-ready/ (2021 documentation)
// This is to prevent any jQuery code from running before the document is finished loading (is ready).
// Document Ready Event function
//      $(document).ready(function(){
//          jQuery methods go here...
//      });
// Was going to use code to the right but it's striked out $(document).ready(function() { Further documentation suggests depreciation -> https://stackoverflow.com/questions/64522990/vs-code-editor-strikes-through-click-function-text-jquery
// Old way, pre-2022 way is still okay to use...

// alternative code thats a shorter method than above, use either or
//      $(function(){
          // jQuery methods go here...

//          });
// https://www.w3schools.com/jquery/jquery_syntax.asp




// 2_________________________________________________________________________________________________________
// 2. Create a function that will fire when the submit <button> is clicked
// The on() method attaches one or more event handlers for the selected elements.
// Was going to use .click() but it's striked out. Further documentation suggests depreciation -> https://stackoverflow.com/questions/64522990/vs-code-editor-strikes-through-click-function-text-jquery
//      $("#submit").click(function() {


// 3_________________________________________________________________________________________________________
// 3. store the variables you've name, email, and phone number
// The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.
// To find an element with a specific id, write a hash character, followed by the id of the HTML element:
// regular way = let variable = test
// jquery way  = let variable = $("#test")


// 4
//  4. create an array named required
// Just create an array
// array = [a, b, c, d]

// 5 & 6_________________________________________________________________________________________________________
// 5. Utilize a for loop to iterate of the entire required array
// 6. use an if statement to check the value of each array item, if the array item is equal to an empty string (""
// 	for (expression 1; expression 2; expression 3) {
	  // code block to be executed
//  }
// Example
//  const numbers = [1, 2, 3, 4, 5];
//  for (let i = 0; i < numbers.length; i++) {
      // console.log(numbers[i]);
//  }



// 7_________________________________________________________________________________________________________
// 7. populate the message <p> with the following text: "Please Fill Out Required Fields", add the warning class to this message
// Can write it as what I have
// $("#message").text("Please Fill Out Required Fields").addClass("warning");
// or
// $("#message").text("Please Fill Out Required Fields");
// $("#message").addClass("warning");




// 8_________________________________________________________________________________________________________
// 8. Attach the warning class to the array item's <label> note: You want the label to turn red, if the field is empty
//  For each array (required) iteration, prev label, add class


// 9_________________________________________________________________________________________________________
// 9. once the field has something other than a blank string. make sure the warning class is removed
//  For each array (required) iteration, prev label, add class


// 10_________________________________________________________________________________________________________
// 10. verify that no <label>'s have the warning class
// check to make sure that if warning label === 0, meaning there are no red warning labels, then move to next



// 11_________________________________________________________________________________________________________
// 11. remove the form from the DOM
// use remove() method
// takes elements out of the DOM. Use .remove() when you want to remove the element itself, as well as everything inside it.


// 12_________________________________________________________________________________________________________
// 12. manipulate the <h2> to say: "Thanks for your feedback!"
// change .text
// get or set the text content of an HTML element.
// https://api.jquery.com/text/
