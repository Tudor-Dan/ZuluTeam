const display = require("../view/display");
const dataManager = require("../model/dataManager");

const students = dataManager.readData("data.json");

const getAllStudents = () => {
  display.printData(students, "Students Table:");
};
const numberOfStudents = () => {
  display.printMessage(`there is a total of ${students.length} students`);
};

const hasChosen = () => {
  const userOption = display.getInput("Please enter a number: ");
  if (userOption === "1") {
    getAllStudents();
  } else if (userOption === "2") {
    numberOfStudents();
  } else if (userOption === "3") {
    display.printMessage("'Update student' not implemented yet.", true);
  } else if (userOption === "4") {
    display.printMessage("'Update student' not implemented yet.", true);
  } else if (userOption === "5") {
    display.printMessage("'Delete student' not implemented yet.", true);
  } else if (userOption === "0") {
    return false;
  } else {
    display.printMessage("There is no such option.", true);
  }
  return true;
};

const handleSubmenu = () => {
  const optionsArray = [
    "Exit submenu",
    "List students",
    "Number of students",
    "Add a new student",
    "Update student",
    "Delete student",
  ];
  display.printMenu("Student Classes Submenu", optionsArray);
};

const submenu = () => {
  let isRunning = true;
  while (isRunning) {
    handleSubmenu();
    try {
      isRunning = hasChosen();
    } catch (error) {
      display.printMessage(error, true);
    }
  }
};

module.exports = { submenu };
