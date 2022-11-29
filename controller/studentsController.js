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

const addNewStudent = () => {
  const students = dataManager.readData("data.json");
  const studentName = display.getInput("Please enter a name: ");
  const studentClass = display.getInput("Please enter a class: ");
  students.push({ name: studentName, class: studentClass });
  dataManager.writeData(students, "data.json");
  display.printMessage(
    `Student ${studentName} has been added in database`,
    false
  );
};

const deleteStudent = () => {
  const students = dataManager.readData("data.json");
  const toDelete = display.getInput("Please enter a name: ");
  const newStudents = students.filter((s) => s.name !== toDelete);
  dataManager.writeData(newStudents, "data.json");
  display.printMessage(
    `Database updated, ${toDelete} has been removed from database`,
    false
  );
};

const updateStudent = () => {
  const students = dataManager.readData("data.json");
  const studentToRename = display.getInput(
    "Please enter student name which you want to rename :)) : "
  );
  const newName = display.getInput("Please enter NEW name: ");
  const newStudents = students.map((s) =>
    s.name === studentToRename ? { ...s, name: newName } : s
  );
  dataManager.writeData(newStudents, "data.json");
  display.printMessage(
    `Database updated, ${studentToRename} has been rename to ${newName}`,
    false
  );
};

const hasChosen = () => {
  const userOption = display.getInput("Please enter a number: ");
  if (userOption === "1") {
    getAllStudents();
  } else if (userOption === "2") {
    addNewStudent();
  } else if (userOption === "3") {
    updateStudent();
  } else if (userOption === "4") {
    deleteStudent();
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
