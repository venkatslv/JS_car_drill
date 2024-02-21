const inventory = require ('./data')

function carmodels(data) {
    if(Array.isArray(data)){
    let sortedModels = [];
    for (let index = 0; index < data.length; index++) {
        sortedModels.push(data[index].car_model);
    }
    sortedModels.sort(); 
    return sortedModels;
}
}

module.exports = carmodels;