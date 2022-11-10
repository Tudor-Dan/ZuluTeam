const display = require('/view/display');

const choose = () => {
    const option = display.getInputs(["Please enter a number: "], "")[0];
    switch (option) {
        case '0':
            display.printMessage("Bueno, hasta la vista, companeros!");
            process.exit(0);
        default:
            display.printMessage("There is no such option.", true);
    }
}

const handleMenu = () => {
    display.printMessage("Welcome to 'Universidad Técnica de Buenas Maneras y Pistoleros!'");
}

const mainMenu = () => {
    while (true) {
        handleMenu();
        try {
            choose();
        } catch (error) {
            display.printMessage(error, true)
        }
    }
}

module.exports = {mainMenu}