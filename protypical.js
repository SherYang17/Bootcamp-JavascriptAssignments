// 1. Create a constructor function for a Person. Each person should
// have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (an array).
function Person (firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;
  this.family = [];      // 4. Add a property on the Person object called family which is an empty array.

  Person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
  }

  // 3. Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:
  // peter.toString(); // Peter Oleary, Favorite Color: Green, Favorite Number: 42
  Person.prototype.toString = function () {
    return this.fullName() + ", Favorite Color: " + this.favoriteColor + ", Favorite Number: " + this.favoriteNumber;
  }
} // Function Person ends right here

// 5. Add a function on the Person.prototype called addToFamily
  Person.prototype.addToFamily = function (thisisaperson) {
      if (thisisaperson instanceof Person && !this.family.includes(thisisaperson)) {    //includes refers to line 9 this.family
          this.family.push(thisisaperson);
      }
      return this.family.length;   //This method should return the length of the family array.
  }


let peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']);
let sher = new Person("Sher", "Yang", "Green", 17, ["Burger", "Fries", "Oreos"]);
let elizabeth = new Person("Elizabeth", "Drobinski", "Yellow", 1, ["Salt", "Pepper", "Hot Sauce"]);
let alexa = new Person("Alexa", "Dickenson", "Black", 200, ["Bread", "Pasta", "Water"]);


//Test Out That Above
peter.toString();
console.log("This is the peter to string question #3: " + peter.toString());
peter.addToFamily(sher);
peter.addToFamily(sher); //Shouldn't work because of line 24
peter.addToFamily(elizabeth);
peter.addToFamily(alexa);
console.log("Peter's Family is: ", peter.family);





// instanceof is a binary operator we use to test if an object is of a given type

// line 23
// if my new person "thisisaperson" tests against my object Person AND DOES NOT equal inside this family
// includes( ) -> This method checks if an array includes the element that passes the condition, returning true or false as appropriate.












