const display = require("../view/display");
const studentsController = require("./studentsController");

const choose = () => {
    display.getInput("Please enter a number: ", response => {
        if (response === "1") {
            studentsController.submenu();
        } else if (response === "2") {
            display.printMessage("Not implemented yet.", true);
            mainMenu();
        } else if (response === "0") {
            display.printMessage("Bueno, hasta la vista, companeros!");
            process.exit();
        } else {
            display.printMessage("There is no such option.", true);
            mainMenu();
        }
    });
}

const handleMenu = () => {
    display.printMessage("Welcome to 'Universidad Técnica de Buenas Maneras y Pistoleros!'");
    const mainMenuOptions = ["Exit program", "School Students", "Statistics"];
    display.printMenu("Main Menu", mainMenuOptions);
}

const mainMenu = () => {
    handleMenu();
    try {
        choose();
    } catch (error) {
        display.printMessage(error, true)
    }
}

module.exports = {mainMenu};