const inventory = require ('./data')

function caryears(data) {
    if (Array.isArray(data) && data.length > 0) {
        const caryears = data.map(car => car.car_year);
        return caryears;
    } 
}


module.exports = caryears;