const display = require('../view/display');
const dataManager = require('../model/dataManager');

const getAllStudents = () => {
  const students = dataManager.readData('data.json');
  display.printData(students, 'Students Table:');
};

const getNumberOfStudentsForEachClass = () => {
  const students = dataManager.readData('data.json');
  const numberOfStudentsForEachClass = {};
  students.forEach((element) => {
    if (!numberOfStudentsForEachClass[element.class]) {
      numberOfStudentsForEachClass[element.class] = 1;
    } else {
      numberOfStudentsForEachClass[element.class]++;
    }
  });
  display.printData(
    [numberOfStudentsForEachClass],
    'Number of students for each class'
  );
};

const hasChosen = () => {
  const userOption = display.getInput('Please enter a number: ');
  if (userOption === '1') {
    getAllStudents();
  } else if (userOption === '2') {
    display.printMessage("'Add student' not implemented yet.", true);
  } else if (userOption === '3') {
    display.printMessage("'Update student' not implemented yet.", true);
  } else if (userOption === '4') {
    display.printMessage("'Delete student' not implemented yet.", true);
  } else if (userOption === '6') {
    getNumberOfStudentsForEachClass();
  } else if (userOption === '0') {
    return false;
  } else {
    display.printMessage('There is no such option.', true);
  }
  return true;
};

const handleSubmenu = () => {
  const optionsArray = [
    'Exit submenu',
    'List students',
    'Add a new student',
    'Update student',
    'Delete student',
    'Number of students for each class'
  ];
  display.printMenu('Student Classes Submenu', optionsArray);
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

module.exports = { submenu, getNumberOfStudentsForEachClass };
