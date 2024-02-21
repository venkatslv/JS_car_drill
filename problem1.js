let inventory = require ('./data')

function tofindoutcar(data) {
    if (Array.isArray(data)) {
        return data.filter(car => car.id === 33);
    }
}

module.exports = tofindoutcar;