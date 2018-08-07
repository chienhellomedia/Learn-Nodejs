var addSync = function(a, b) {
    if (isNaN(a) || isNaN(b))
    throw new Error("Invalid input");
    return a + b;
}
var add = function (a, b) {

}

try {
    var result = addSync(1, 2);
    console.log(result);
} catch (error) {
    console.log(error.message);
}