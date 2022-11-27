const readlineSync = require("readline-sync");
const RESET = "\x1b[0m";
const RED = "\x1b[1m\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const PURPLE = "\x1b[35m";
const CYAN = "\x1b[36m";

/**
 * Gets input from the user.
 * @param title title of input section
 */
const getInput = (title) => {
    return readlineSync.question(`\n${YELLOW}${title}${RESET}`);
}

/**
 * Displays a message
 * @param message string to be displayed
 * @param error optional true for error messages
 */
const printMessage = (message, error = false) => {
    if (error) {
        console.log(`${RED}${message}${RESET}`);
    } else {
        console.log(`${GREEN}${message}${RESET}`);
    }
}

/**
 * Prints data as a table to the console
 * @param rawData array of objects
 * @param title title of the table for printing
 */
function printData(rawData, title) {
    console.log(`${CYAN}${title}${RESET}`);
    for (let i = 0; i < rawData.length; i++) {
        let line = "";
        for (const [key, value] of Object.entries(rawData[i])) {
            line += `${key}:${BLUE}${value}${RESET} `;
        }
        console.log(line);
        console.log('-----------------------------------------');
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
    console.log(`${PURPLE}${title}${RESET}`);
    for (let i = 0; i < optionsArray.length; i++) {
        console.log(`(${i}) ${optionsArray[i]}`);
    }
}

module.exports = {printMessage, getInput, printMenu, printData};