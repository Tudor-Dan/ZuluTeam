const fs = require("fs");
const display = require("../view/display");

/**
 * Reads json file and returns it as an array
 * @param fileName name of file to read
 * @return {*|*[]|*[]} array of objects
 */
const readData = (fileName) => {
    let result = [];
    try {
        const data = fs.readFileSync(`${__dirname}/${fileName}`, "utf8");
        result = JSON.parse(data);
        return result;
    } catch (error) {
        display.printMessage(error, true);
        return result;
    }
}

/**
 * Overwrites the json file with new data
 * @param newData array of objects
 * @param fileName name of file to write
 */
function writeData(newData, fileName) {
    try {
        const rawData = JSON.stringify(newData);
        fs.writeFileSync(`${__dirname}/${fileName}`, rawData, "utf8");
    } catch (e) {
        console.log(e);
    }
}

module.exports = {readData, writeData};