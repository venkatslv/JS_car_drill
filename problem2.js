let inventory = require ('./data')

function lastcar(data){
    if(Array.isArray(data)){
    return data[data.length-1]
}
}

module.exports = lastcar;