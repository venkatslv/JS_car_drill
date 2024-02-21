let inventory = require ('./data')

function cardata(data) {
    if(Array.isArray(data)){
    for (let car of data) {
        if (car.id === 33) {
            return car;
        }
    }
}
}
// let result = cardata(inventory);
// console.log(result);

module.exports = cardata;