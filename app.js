//generic
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var array1 = [1, 2, 3, 4, 5];
var array2 = ["Hello", "IJSE", "GDSE", "Panadura"];
var array3 = [new Student("Viraj", 22),
    new Student("Kamal", 23),
    new Student("Amal", 24)];
function RemoveLastItem(array) {
    return array.slice(0, array.length - 1);
}
var numbers = RemoveLastItem(array1);
console.log(numbers);
var strings = RemoveLastItem(array2);
console.log(strings);
var student = RemoveLastItem(array3);
console.log(student);
