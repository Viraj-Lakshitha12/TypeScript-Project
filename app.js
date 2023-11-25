// classes
var person = /** @class */ (function () {
    function person(name, age, nic) {
        this.name = name;
        this.age = age;
        this.nic = nic;
    }
    return person;
}());
var person1 = new person("kamal", 20, "232323233");
console.log(person1);
person1.name = "AAAAA";
console.log(person1);
