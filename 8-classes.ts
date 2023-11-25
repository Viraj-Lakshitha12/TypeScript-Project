// classes

class person{
    public name:string;
    private age:number;
    readonly nic:string;

    constructor(name:string,age:number,nic:string) {
        this.name=name;
        this.age=age;
        this.nic=nic;
    }
}
let person1 = new person("kamal",20,"232323233");
console.log(person1);
// person1.nic="123"; cant edit
console.log(person1);
console.log(person1.name);
// console.log(person1.nic); cant access


class DBConnection{
    private static connection:string;

    private constructor(value:string) {
        DBConnection.connection=value;
    }

    public static getConnection(){
        if (!DBConnection.connection){
            new DBConnection("test connection");
        }
        return DBConnection.connection;
    }
}

let connection = DBConnection.getConnection();
console.log(connection);