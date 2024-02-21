const inventory = require ('./data')

function tofindouttheunder2000year(data) {
    if (Array.isArray(data)) {
        return data.filter(car => car.car_year <= 2000).map(car => car.car_year);
    }
}


module.exports = tofindouttheunder2000year;


