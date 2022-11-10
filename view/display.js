const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

/**
 * Gets list of inputs from the user.
 *     Sample call:
 *         get_inputs(["Name","School Class","Subject"],
 *                    "Please provide your personal information")
 *     Sample display:
 *         Please provide your personal information
 *         Name <user_input_1>
 *         School Class <user_input_2>
 *         Subject <user_input_3>
 * @param labelsArray array of inputs
 * @param title title of the "input section"
 * @returns {*[]} array of data given by the user. Sample return:
 *             [<user_input_1>, <user_input_2>, <user_input_3>]
 */
const getInputs = (labelsArray, title) => {
    let inputs = [];
    console.log(`${title}`);
    for (const labelsArrayElement of labelsArray) {
        inputs.push(labelsArrayElement);
    }
    return inputs;
}

const printMessage = (message, error = false) => {
    if (error) {
        console.log(`\x1b[33m ${message} \x1b[0m`);
    } else {
        console.log(`${message}`);
    }
}

module.exports = {printMessage, getInputs};