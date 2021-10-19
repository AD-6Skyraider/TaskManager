// TASK MANAGER

// Using a Template Literal because it recognizes line breaks.
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Displays the menu for the user to select an option. Also, set's the user's response to the UserInput variable.
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends/closes the program (Task Manager) - Enters "Close"
while (userInput !== `CLOSE`){
    // OTHER OPTIONS

    // Displays the menu again
    userInput = prompt(menu);
}

// Alerts the user that they have closed the program.
alert(`Thank you for using the Task Manager`);