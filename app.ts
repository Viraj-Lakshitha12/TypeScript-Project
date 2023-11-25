// classes

class person{
    public name:string;
    public age:number;
    private nic:string;

    constructor(name:string,age:number,nic:string) {
        this.name=name;
        this.age=age;
        this.nic=nic;
    }
}
let person1 = new person("kamal",20,"232323233");
console.log(person1);
console.log(person1.name);
// console.log(person1.nic); cant access
