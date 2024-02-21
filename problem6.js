const inventory= require ('./data')

function BMW_AUDI(data) {
    if (Array.isArray(data)) {
        return data.filter(car => car.car_make === "BMW" || car.car_make === "Audi");
    }
}

module.exports = BMW_AUDI;
