// Type the typescript heading part
interface User {
    id: number;
    name: string;
    email: string;
}


// Create an array of user objects called users. Each user object should have an id, name, and email property.
const users = [
    {id:1, name:"Sher Yang", email:"sheryang@stiegler.com"},
    {id:6, name:"Elizabeth Drobinski", email:"eliz@stiegler.com"},
    {id:3, name:"Alexa Dickenson", email:"alexa@stiegler.com"},
    {id:4, name:"Ong Vang", email:"ong@stiegler.com"},
    {id:5, name:"Kelan Blash", email:"kelan@stiegler.com"}
];

// Implement a function called fetchUserById that accepts a user ID as an argument and returns a promise.
function fetchUserById(userId: number) {
    return new Promise((resolve, reject) => {                                       //promise should resolve with the user object, otherwise, it should reject with an error message
    setTimeout(() => {                                                              //simulate an asynchronous request with setTimeout
        const user = users.find(user => user.id === userId);                        // Find the user with the given ID in the users array
        if (user) {
            resolve(user);                                                          // If the user is found, resolve the promise with the user object
        } else {
            reject(new Error ("UserID" + userId + " is does not exist."));          // Otherwise, reject the promise with an error message
        }
    }, 1000);                                                                       //to delay the resolution or rejection of the promise by 1 second (1000 milliseconds)
});
}

// Use the fetchUserById function to fetch the user with ID 1.
fetchUserById(1)
    .then((user) => {console.log("Fetched user:", user);})
    .catch((error) => {console.log("Error fetching data:", error);
});


// Next, chain another fetchUserById call to fetch the user with ID 2.
fetchUserById(2)
    .then((user) => {console.log("Fetched user:", user);})                          //Log the user object if the promise is fulfilled
    .catch((error) => {console.log("Error fetching data:", error);                  // the error message if the promise is rejected.
});



