console.log("Hello Typescript");

// primitives - number, string, boolean

function sendSum(num1: number, num2: number, name: string, isWithName: boolean) {
    return isWithName ? `Hi , ${name} Sum is: ${num1 + num2}` : `Sum is: ${num1 + num2}`;
}

let n1 = '10';
let n2 = 20;

// +n1 converts string to number

let value1 = sendSum(+n1, +n2, "kamal", true);
console.log("value is :" + value1);

let value2 = sendSum(+n1, +n2, "kamal", false); // changed isWithName to false
console.log("value is :" + value2);
