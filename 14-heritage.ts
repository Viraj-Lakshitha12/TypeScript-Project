//heritage
enum Classfication{
    MAMALS,
    BIRDS
}

interface Animal{
    classfication:Classfication
}


class Person implements Animal{
    protected name:string
    nic:number
    age:number
    classfication: Classfication=Classfication.MAMALS;

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

    constructor(name:string,nic:number,age:number,subject:string,collage:string,classfication:Classfication) {
        super(name,nic,age);
        this.subject=subject;
        this.collage=collage;
        this.classfication=classfication;
    }
    getName():string{
        return this.name;
    }

}

let teacher = new Teacher("Kavindu",12345,35,"CSE","IJSE",Classfication.MAMALS);
console.log("Name : "+teacher.getName());
console.log("Age : "+teacher.age)
console.log(teacher.nic)
console.log(teacher.collage)
console.log(teacher.subject)
console.log(teacher.classfication)