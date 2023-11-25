console.log("Hello Typescript");
// primitives - number, string, boolean
function sendSum(num1, num2, name, isWithName) {
    return isWithName ? "Hi , ".concat(name, " Sum is: ").concat(num1 + num2) : "Sum is: ".concat(num1 + num2);
}
var n1 = '10';
var n2 = 20;
// +n1 converts string to number
var value1 = sendSum(+n1, +n2, "kamal", true);
console.log("value is :" + value1);
var value2 = sendSum(+n1, +n2, "kamal", false); // changed isWithName to false
console.log("value is :" + value2);
