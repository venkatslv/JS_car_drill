let inventory = require ('./data')

function tofindlastcar(data) {
    if (Array.isArray(data) && data.length > 0) {
        return data.reduce((acc, curr) => curr);
    } 
}


module.exports = tofindlastcar;