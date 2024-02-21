const inventory = require ('./data')

function tofindouttheunder2000year(data) {
    if(Array.isArray(data)){
    let underYear = [];
    for (let index = 0; index < data.length; index++) {
        if (data[index].car_year <= 2000) {
            underYear.push(data[index].car_year);
        }
    }
    return underYear;
}
}

module.exports = tofindouttheunder2000year;


