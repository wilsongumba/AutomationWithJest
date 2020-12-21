function add(x, y){
    return x+y;
}

function total(shipping, subTotal){
    return '$' + add(shipping,subTotal);
}

module.exports = total, add;