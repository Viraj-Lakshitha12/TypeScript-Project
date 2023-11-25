// classes

class person{
    name:string;
    age:number;
    nic:string;

    constructor(name:string,age:number,nic:string) {
        this.name=name;
        this.age=age;
        this.nic=nic;
    }
}
let person1 = new person("kamal",20,"232323233");
console.log(person1);