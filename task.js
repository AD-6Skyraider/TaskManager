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

// Displays the menu for the user to select an option. Also, set's the user's response to the UserInput variable.
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends/closes the program (Task Manager) - Enters "Close"
while (userInput !== `CLOSE`){
    
    // Checks if user entered "TASKS."
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

    // Displays the menu again
    userInput = prompt(menu);
}

// Alerts the user that they have closed the program.
alert(`Thank you for using the Task Manager`);