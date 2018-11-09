const { writeFileSync } = require('fs');

const getNewId = (array) => {
    if (array.length > 1) {
        return array[array.length - 1 ].id + 1
    } else {
        return 1
    }
};

const newDate = () => new Date().toString();

// checks if id exists in array
const mustBeInArray = (array, id) => {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id);

        if(!row) {
            reject({
                message: 'ID is not good',
                status: 404
            });
        }
        resolve(row);
    });
};

const writeJSONFile = (filename, content) => {
    writeFileSync(filename, JSON.stringify(content), 'utf8', err => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = {
    getNewId,
    newDate,
    mustBeInArray,
    writeJSONFile
};