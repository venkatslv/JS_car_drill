const inventory = require ('./data')


function carmodels(data) {
    if (Array.isArray(data) && data.length > 0) {
        const sortedModels = data.map(car => car.car_model)
                                 .sort((a, b) => a.localeCompare(b));
        return sortedModels;
    } 
}

module.exports = carmodels;