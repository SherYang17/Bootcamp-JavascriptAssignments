// Create an IIFE named taskManager that contains the following functionality:
// A private variable named tasks to store task descriptions. It should be initialized as an empty array.
let taskManager = (function () {
    let tasks = [];
  
  // A addTask function that takes a task description as an argument and adds it to the tasks array.
    function addTask(aTask) {
      tasks.push(aTask);
    }

  // A displayTasks function that logs all tasks in the tasks array to the console.
    function displayTasks() {
        console.log(tasks);
    }

  //The IIFE should return an object with the addTask and displayTasks functions.
    return {
      addTask: addTask,
      displayTasks: displayTasks
    };
  })();

  // Add three sample tasks using the taskManager's addTask function.
  taskManager.addTask("First Task");
  taskManager.addTask("Second Task");
  taskManager.addTask("Third Task");

  //Use the taskManager to display the list of tasks.
  taskManager.displayTasks();





  //First line function with a IIFE
  //https://developer.mozilla.org/en-US/docs/Glossary/IIFE
  //https://circleci.com/blog/ci-cd-for-js-iifes/
  //