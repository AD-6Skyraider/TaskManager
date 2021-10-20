// TASK MANAGER

// Using a Template Literal because it recognizes line breaks.
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks (These two items are just so that there's something we can see as an example already in the tasks.) 
const tasks = [
    `Charge MacBook`,
    `Master JavaScript`
];

// For displaying tasks to the user
let showTasks = ``;

// For storing the value of a new task.
let newTask;

// For storing the number of the task to remove.
let num;

//  For storing the value of the removed task.
let removed;

// Displays the menu for the user to select an option. Also, set's the user's response to the UserInput variable.
// Using the toUpperCase method to convert the user's response to Uppercase. 
let userInput = prompt(menu).toUpperCase();

// Loops and continues to display the menu until the user ends/closes the program (Task Manager) - Enters "Close" (UPPERCASE or Lowercase)
while (userInput !== `CLOSE`){
    
    // Checks if user entered "TASKS (UPPERCASE or Lowercase)."
    if (userInput === `TASKS`){

        // The For Of Loop is used here to concatenate each task in the tasks array to the showTasks string variable.
        for (task of tasks){

            // Using \n to create a new line after each task.
            showTasks += `${task}\n`;
        }
        
        // Displays the current tasks to the user
        alert(showTasks);

        //  Set the value of the showTasks string variable back to an empty string
        showTasks = "";
    }

    // Checks if users entered `NEW` (UPPERCASE or Lowercase)
    if (userInput === `NEW`){

        // Prompts the user to enter a new task and stores their response
        newTask = prompt(`Please enter a new task:`);

        // Continues looping and prompting the user until they enter in something. NOTE: If the user does NOT type anything and just clicks ok, then the value returned is an empty string.
        while (newTask === ``){
            newTask = prompt(`Please enter a new task:`);
        }

        // Alerts the user that their new user has been added.
        alert(`"${newTask}" has been added!`);

        // Adds the users entry as a new item at the end of the tasks array.
        tasks.push(newTask);
    }

    // Checks if the user entered `REMOVE (UPPERCASE or Lowercase).`
    if (userInput === `REMOVE`){

        // Concatenates each task/item in the tasks array to the showTasks string variable. Also, sets/displays a number for each task.
        for (i = 0; i < tasks.length; i++){

            // Adding 1 to i (the index) so the number will start displaying at 1. Also, using \n to create a new line.
            showTasks += `${i + 1}: ${tasks[i]}\n`;
        }

        // Prompts the user to enter a number and stores their response to the num variable. 
        // Also, using \n to creat a new line.
        // Subtracting 1 from the users entry so that it matches the index of the item that the user wants to remove from the tasks array.
        // Just like with ParseInt, JavaScript will attempt to convert a string into a number when you try to subtract from it. So ParseInt is not necessary here.
       num = prompt(`Please enter a number to remove:\n${showTasks}`) -1;

    // Loop that continues looping until the user enters a valid number
    // Verifies the user entered a whole (AKA Not a decimal) that is one of the options in the prompt (AKA Within the number range from 1 to length of the tasks array)
    // The first condition (Math.floor(num) !== num) checks to see if the user entered a decimal
    // The second condition (num < 0) checks to see if the user entered 0 or a negative number
    // The third condition (num >= tasks.length) checks to see if the user entered a number that is higher than those that were displayed to the user
    // The fourth condition (!num) checks to see if the user entered something that cannot be converted into a number which causes the value of the NUM variable to be NaN (Not A Number) which has a default boolean value of false
        while (Math.floor(num) !== num || < 0 || num >= tasks.length || !num){

            // Alerts the user they have not entered a valid number
            alert(`Not a valid entry`);

            // Prompts user again and attempts to subtract 1 from their response.
            num = prompt(`Please enter a number to remove:\n${showTasks}`) -1;

        }

        // Removes the task/item selected by the user from the task array. Also, sets the task/item that was removed to the REMOVE variable. NOTE: Splice returns the value(s) that is removed as an item(s) in an array.  
        removed = tasks.splice(num, 1);

        // Alerts user with the task/item that has been removed. NOTE: Using index on the REMOVED variable here because splice returns the value that is removed as an item in an array.
        alert(`"${removed[0]}" has been removed`);

        // Sets the value of the showTasks string variable back to an empty string.
        showTasks = ``;

    }

    // Displays the menu again
    // // Using the toUpperCase method to convert the user's response to Uppercase. 
    userInput = prompt(menu).toUpperCase();
}

// Alerts the user that they have closed the program.
alert(`Thank you for using the Task Manager`);