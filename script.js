function doubleArray(arr){
    var doubled = arr.map(function (elem){
        return elem * 2;
    });
    return doubled;
}
var values = [10, 8, 12, 36];
var doubledFinal = doubleArray(values);
console.log(doubledFinal);
var overTwenty = doubledFinal.filter(function (doubledFinal){
    return doubledFinal > 20;
});
console.log(overTwenty);
var total = overTwenty.reduce(function (sum, value){
    return sum + value;
});
console.log(total);