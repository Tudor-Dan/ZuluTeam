const readline = require("readline");

/**
 * Gets input from the user.
 * @param title title of input section
 * @param callback callback function that returns user input
 */
const getInput = (title, callback) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let response;
    rl.setPrompt(title);
    rl.prompt();
    rl.on("line", userInput => {
        response = userInput;
        rl.close();
    });
    rl.on("close", () => {
       return callback(response);
    });
}

/**
 * Displays a message
 * @param message string to be displayed
 * @param error optional true for error messages
 */
const printMessage = (message, error = false) => {
    if (error) {
        console.log(`\x1b[33m ${message} \x1b[0m`);
    } else {
        console.log(`${message}`);
    }
}

/**
 * Displays a menu. Sample output:
 *         Main menu:
 *             (1) School Students
 *             (2) Statistics
 *             (0) Exit program
 * @param title menu title
 * @param optionsArray array of strings - options that will be shown in menu
 */
const printMenu = (title, optionsArray) => {
    console.log(title);
    for (let i = 0; i < optionsArray.length; i++) {
        console.log(`(${i}) ${optionsArray[i]}`);
    }
}

module.exports = {printMessage, getInput, printMenu};