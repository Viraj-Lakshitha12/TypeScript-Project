var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//heritage
var Person = /** @class */ (function () {
    function Person(name, nic, age) {
        this.name = name;
        this.nic = nic;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, nic, age, subject, collage) {
        var _this = _super.call(this, name, nic, age) || this;
        _this.subject = subject;
        _this.collage = collage;
        return _this;
    }
    Teacher.prototype.getName = function () {
        return this.name;
    };
    return Teacher;
}(Person));
var teacher = new Teacher("Kavindu", 12345, 35, "CSE", "IJSE");
console.log("Name : " + teacher.getName());
console.log("Age : " + teacher.age);
console.log(teacher.nic);
console.log(teacher.collage);
console.log(teacher.subject);
