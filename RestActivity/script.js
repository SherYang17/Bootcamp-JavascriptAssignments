// connect javascript to all the buttons then add the functions later
document.getElementById("btnGetPost").addEventListener("click", getAllPosts);
document.getElementById("btnId10").addEventListener("click", getPostId10);
document.getElementById("btnNewPost").addEventListener("click", createNewPost);
document.getElementById("btnReplace12").addEventListener("click", replacePostId12);
document.getElementById("btnUpdate12").addEventListener("click", updateTitlePostId12);
document.getElementById("btnDelete12").addEventListener("click", deletePostId12);


// use functions per each button
// Get all posts
function getAllPosts() {
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => displayOutput(JSON.stringify(posts)))
        .catch(error => console.log("Error: " + error));
}
//  This is equivalent to /comments?postId=1
//      fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//      .then((response) => response.json())
//      .then((json) => console.log(json));
//  https://canvas.stiegleredtech.org/courses/3/pages/what-are-rest-principles?module_item_id=911

// Get post with id of 10
function getPostId10() {
    fetch("http://jsonplaceholder.typicode.com/posts/10")
        .then(response => response.json())
        .then(post => displayOutput(JSON.stringify(post)))
        .catch(error => displayOutput("Error: " + error))
        .catch(error => console.log("Error: " + error));
}
//  https://canvas.stiegleredtech.org/courses/3/pages/what-are-rest-principles?module_item_id=911

// Create a new post and log the id generated for it by the server
function createNewPost() {
    fetch("http://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "New Post",
            body: "This is a new post",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(post => displayOutput("New post created with ID: " + post.id))
        .catch(error => console.log("Error: " + error))
        .catch(error => displayOutput("Error: " + error));
}
// POST, allows you to create or update data. Create a user using the following block
// https://canvas.stiegleredtech.org/courses/3/pages/what-are-rest-principles?module_item_id=911


// Replace the post with id of 12 and render the responseJSON
function replacePostId12() {
    fetch("http://jsonplaceholder.typicode.com/posts/12", {
        method: "PUT",
        body: JSON.stringify({
            id: 12,
            title: "Replaced Post",
            body: "I replaced the title with Replaced Post. ",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(post => displayOutput(JSON.stringify(post)))
        .catch(error => console.log("Error: " + error))
        .catch(error => displayOutput("Error: " + error));
}
// PUT and DELETE, allows you to create or update data
// https://canvas.stiegleredtech.org/courses/3/pages/what-are-rest-principles?module_item_id=911



// Update the title of post with id of 12 and render responseJSON
function updateTitlePostId12() {
    fetch("http://jsonplaceholder.typicode.com/posts/12", {
        method: "PATCH",
        body: JSON.stringify({
            title: "This title is updated"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(post => displayOutput(JSON.stringify(post)))
        .catch(error => console.log("Error: " + error))
        .catch(error => displayOutput("Error: " + error));
}
// Canvas is missing patch? Canvas had 4 rest api methods but PUT will error out the output. 
// https://www.restapitutorial.com/lessons/httpmethods.html


// Delete the post with id of 12 and render a success message
function deletePostId12() {
    fetch("http://jsonplaceholder.typicode.com/posts/12", {
        method: "DELETE"
    })
        .then(() => {displayOutput("Post with ID 12 has been deleted");})
        .catch(error => console.log("Error: " + error))
        .catch(error => displayOutput("Error: " + error));
}
// PUT and DELETE, allows you to create or update data
// https://canvas.stiegleredtech.org/courses/3/pages/what-are-rest-principles?module_item_id=911


// output everything into the P tag
function displayOutput(content) {
    document.getElementById("output").innerHTML = content;
}


// THERES NOT ENOUGHT TIME TO WRITE NOTES



function myButton() {
    alert("You are a brave soul!");
  }