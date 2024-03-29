console.log("Hello Typescript");

// primitives - number, string, boolean

function sendSum(num1: number, num2: number, name: string, isWithName: boolean) {
    return isWithName ? `Hi , ${name} Sum is: ${num1 + num2}` : `Sum is: ${num1 + num2}`;
}
function findSum(num1: number, num2: number):number {
    return num1+num2;
}
function findMySum(num1: number|string, num2: number | string ):number  {
    if (typeof num1 === 'string' || typeof num2 === 'string'){  // type guard
        return +num1 + +num2;
    }else{
        return num1+num2;
    }
}

function findMySum2(num1: number|string, num2: number | string ):number | string {
    // @ts-ignore
    // return num1+num2;  //can error ignore
    if (typeof num1 === 'string' || typeof num2 === 'string'){  // type guard
        return +num1 + +num2;
    }else{
        return num1+num2;
    }
}

let n1 = '10';
let n2 = 20;

// +n1 converts string to number

let value1 = sendSum(+n1, +n2, "kamal", true);
console.log(value1);

let value2 = sendSum(+n1, +n2, "kamal", false); // changed isWithName to false
console.log(value2);

let findSum1 = findSum(10,20);
console.log("result : "+findSum1);

let findMySumValue1 = findMySum(100,200);
console.log("find My Sum : "+findMySumValue1);

let findMySumValue2 = findMySum('100',200);
console.log("find My Sum : "+findMySumValue2);

