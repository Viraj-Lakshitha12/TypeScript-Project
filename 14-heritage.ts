//heritage
class Person{
    protected name:string
    nic:number
    age:number

    constructor(name:string,nic:number,age:number) {
        this.name=name;
        this.nic=nic;
        this.age=age;
    }

    getName(): string {
        return this.name;
    }
}

class Teacher extends Person{

    subject:string
    collage:string

    constructor(name:string,nic:number,age:number,subject:string,collage:string) {
        super(name,nic,age);
        this.subject=subject;
        this.collage=collage;
    }
    getName():string{
        return this.name;
    }

}

let teacher = new Teacher("Kavindu",12345,35,"CSE","IJSE");
console.log("Name : "+teacher.getName());
console.log("Age : "+teacher.age);
console.log(teacher.nic);
console.log(teacher.collage);
console.log(teacher.subject);