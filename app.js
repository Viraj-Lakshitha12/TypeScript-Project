console.log("Hello Typescript");
function sum(num1, num2) {
    return num1 + num2;
}
var n1 = '10';
var n2 = 20;
// +n1 + convert to string to number
var value1 = sum(+n1, +n2);
console.log("value is :" + value1);
var value2 = sum(+n1, +n2);
console.log("value is :" + value2);
