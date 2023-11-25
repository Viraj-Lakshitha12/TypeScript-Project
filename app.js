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
console.log(person1.name);
// console.log(person1.nic); cant access
var DBConnection = /** @class */ (function () {
    function DBConnection(value) {
        DBConnection.connection = value;
    }
    DBConnection.getConnection = function () {
        if (!DBConnection.connection) {
            new DBConnection("test connection");
        }
        return DBConnection.connection;
    };
    return DBConnection;
}());
var connection = DBConnection.getConnection();
console.log(connection);
