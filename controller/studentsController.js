const display = require("../view/display");
const dataManager = require("../model/dataManager");

const getAllStudents = () => {
  const students = dataManager.readData("data.json");
  display.printData(students, "Students Table:");
};

const getNumberOfSchoolClasses = () => {
  const students = dataManager.readData("data.json");
  const classes = [];
  students.forEach((s) =>
    Object.keys(s).forEach((key) =>
      key.includes("subject") && !key.includes("Mark")
        ? !classes.includes(s[`${key}`])
          ? classes.push(s[`${key}`])
          : null
        : null
    )
  );
  display.printMessage(
    `There is a total of ${classes.length} school classes`,
    false
  );
};


const hasChosen = () => {
  const userOption = display.getInput("Please enter a number: ");
  if (userOption === "1") {
    getAllStudents();
  } else if (userOption === "2") {
    display.printMessage("'Add student' not implemented yet.", true);
  } else if (userOption === "3") {
    display.printMessage("'Update student' not implemented yet.", true);
  } else if (userOption === "4") {
    display.printMessage("'Delete student' not implemented yet.", true);
  } else if (userOption === "5") {
    getNumberOfSchoolClasses();
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
    "Add a new student",
    "Update student",
    "Delete student",
    "Get number of school classes",
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
