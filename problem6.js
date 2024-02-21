const inventory= require ('./data')

function BMW_AUDI(data) {
    if(Array.isArray(data)){
    let twoCars = [];
    for (let index = 0; index < data.length; index++) {
        if (data[index].car_make === "BMW" || data[index].car_make === "Audi") {
            twoCars.push(data[index]);
        }
    }
    return twoCars;
}
}
module.exports = BMW_AUDI;
