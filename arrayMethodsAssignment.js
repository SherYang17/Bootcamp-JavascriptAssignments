const users = [
  {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
  {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
  {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
  {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
  {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
  {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
  {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
  {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

// Find a user named 'Jose'
const jose = users.find(users => users.firstName === "Jose"); //case sensitive
console.log(jose);

// Get an array of all the premium members
const premiumMembersArray = users.filter(users => users.isPremiumMember === true);
console.log(premiumMembersArray);

// Get an array of all the user last names
const userLastNamesArray = users.map(users => users.lastName);
console.log(userLastNamesArray);

// Get an array of the full names who have logged in more than 10 times
const recurringUser = users.filter(users => users.logins > 10);
const recurringUserFullName = recurringUser.map(recurringUser => recurringUser.firstName + ' ' + recurringUser.lastName);
console.log(recurringUserFullName);

// Get the total number of logins for the list of users
const totalLogin = users.reduce((accumulator, user) => accumulator + user.logins, 0);
console.log(totalLogin);


//line 30, accumulator = value reslting array 0
//line 30, currentValue = user
//line 30, go to Sum Of Values https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
    // const sum = objects.reduce(
    //   (accumulator, currentValue) => accumulator + currentValue.x,
    //   0,
    // );

    // console.log(sum);