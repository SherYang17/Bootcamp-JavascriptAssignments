// 1. Get the header element
const header = document.querySelector("header");
console.log("This is the Header: ", header);

// 2. Get all the section elements
const sectionElements = document.querySelectorAll("section");
console.log("This is the sectionElements: ", sectionElements);

// 3. Get the section element with class="current"
const currentSection = document.querySelector("section.current");
console.log("This is the currentSection:", currentSection);

// 4. Get the section that comes after the current section
const nextSection = currentSection.nextElementSibling;
console.log("This is the nextSection:", nextSection);

// 5. Get the h2 node from the section before the 'current' section
const previousSection = currentSection.previousElementSibling;
const h2Node = previousSection.querySelector("h2");
console.log("This is the h2Node: ", h2Node);
// const h2BeforeCurrent = document.querySelector('.current').previousElementSibling.querySelector('h2');
// console.log("This is the h2Node Number2: ", h2BeforeCurrent);

// 6. Get the div that contains the section that has an h2 with a class of 'highlight'
const divWithHighlight = document.querySelector("div.col h2.highlight").parentNode.parentNode;
//const divWithHighlight = document.querySelector('h2.highlight').parentNode.parentNode;
console.log("This is the divContainingHighlight: ", divWithHighlight);

// 7. Get all the sections that contain an H2 (using a single statement)
const sectionsContainingH2 = document.querySelectorAll("section:has(h2)");
  console.log("This is the sectionsContainingH2: ", sectionsContainingH2);





//https://javascript.info/onload-ondomcontentloaded
//https://javascript.info/onload-ondomcontentloaded
//https://stackoverflow.com/questions/46744616/uncaught-typeerror-cannot-read-property-nextsibling-of-undefined
//https://www.w3schools.com/jsref/met_document_addeventlistener.asp
//https://www.javascripttutorial.net/javascript-dom/javascript-domcontentloaded/
//https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
//RIDICULOUS


//document.addEventListener('DOMContentLoaded', () => {
//OR
//document.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });
//previous siblings
//https://www.w3schools.com/jsref/prop_element_previouselementsibling.asp
// wowwwwwwwwwwwwwwwwwwwwwwwww it didn't work because I didnt have the event listener. Works 100% with listener. 




//document at the dom, dealing with browsers, node is like I dont know what that is. That's why there is error ReferenceError document is not defined. Run code on chrome >:).
//OMG document.addEventListener("DOMContentLoaded", function() {
//});
//
//had so many issues cause i had script in header