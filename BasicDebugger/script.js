//object is very disorganized, fixed it to look more structured, guess we can assume 3 others don't have a location
//only Danny Shavez is capitalized
const storeOwners = [
    {name: "charles", store: 1 },
    {name: "sally", store: 1 },
    {name: "cassandra", store: 1 },
    {name: "Danny Shavez", store: 1, location: "in NM"}
];

const listNumberOfStores = function () {
    let totalLocations = 0; //i can't iterate without calling something
    for (let i = 0; i < storeOwners.length; i++) {
        //  let totalLocations = totalLocations + i; //totalLocations  + i would just concatenate the strings
        totalLocations = storeOwners[i].store; //iterate per store owner
    }
    return totalLocations; //removed return i because i isn't defined
};

//defined too early, moved it down
let locations = listNumberOfStores(); //function is missing the parenthesis, I added it in ()

function tellMeMyStores() {
    console.log("Hey, can you tell me who owns the stores?");
    if (locations > 0) {
    // console.log("Of course, we have " + locations + " stores"); //this was so sneaky. Not totalLocations because its a private local variable. But, assignment doesn't ask for this console log so commented
    //   else { //I was going to add a
    // console.log("No Stores"); //close off the if else statement but it will not be called on anyways.
    //   }
}
} 
function hasStore() {
    for (let i = 0; i <= 2; i++) { //not sure where 2 came from? Removed it to reference the storeowners
            let people = storeOwners[i].name;  //have to iterate per store owner
            let person = people; //change it from people.tostring to each array [0].  let person = people[0] brings back first letter in names and [1] breaks.
            console.log("Yes, " + person + " has one"); //has one? sure.
    }
}


tellMeMyStores();
hasStore();

// let man = Object.keys(storeOwners[2]); //deleting this because we dont need an extra variable to define a variable
// console.log("Location only works for David")
let mister = storeOwners[3].name; //storeowner array 0 pulls the 2 arrays, list
let whereHeLives = storeOwners[3].location; //mister.location; //
console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");








//https://stackoverflow.com/questions/914715/how-to-loop-through-all-but-the-last-item-of-a-list


// I don't think below function works right. 
// function hasStore() {
//     for (let i = 0; i < storeOwners.length; i++) { //not sure where 2 came from? Removed it to reference the storeowners
//             people = Object.keys(storeOwners);
//             let person = people.toString();        //what?? tostring?
//             console.log("Yes, " + person + " has one");
//     }
// }
//



//original code below
// const storeOwners = [
//     { charles: 1 },
//    { sally: 1 },
//   { cassandra: 1 },
//     {
//          "Danny Shavez": 1,
//         location: "in NM",
// },
// ];

// let locations = listNumberOfStores;

// const listNumberOfStores = function () {
// for (let i = 0; i < storeOwners.length; i++) {
//          let totalLocations = totalLocations + i;
//   }
//  return i;
// };

// function tellMeMyStores() {
// console.log("Hey, can you tell me how many stores you have?");
//     if (locations > 0) {
//            console.log("Of course, we have " + totalLocations + " stores");
//   }
// }

// function hasStore() {
// for (let i = 0; i < 2; i++) {
//           people = Object.keys(storeOwners);
//         let person = people.toString();
//            console.log("Yes, " + person + " has one");
// }
// }

// tellMeMyStores();
// hasStore();

// let man = Object.keys(storeOwners[2]);
// let mister = man[2];

// let whereHeLives = mister.location;
// console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");