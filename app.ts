//generic

class Student{
    name:string
    age:number
    constructor(name:string,age:number) {
        this.name=name;
        this.age=age;
    }
}

let array1:number[]=[1,2,3,4,5];
let array2:string[]=["Hello","IJSE","GDSE","Panadura"];
let array3:Student[]=[new Student("Viraj",22),
    new Student("Kamal",23),
    new Student("Amal",24)];


function RemoveLastItem<T>(array:T[]):T[] {
    return array.slice(0,array.length-1);
}

let numbers = RemoveLastItem<number>(array1);
console.log(numbers);
let strings = RemoveLastItem<string>(array2);
console.log(strings);
let student = RemoveLastItem<Student>(array3);
console.log(student);


class SmartArray<T>{
    private array:T[];
    constructor(array:T[]) {
        this.array=array;
    }
}

new SmartArray(array1);
new SmartArray(array2);
new SmartArray(array3);