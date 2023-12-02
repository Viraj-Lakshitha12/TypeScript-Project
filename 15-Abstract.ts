//abstract
abstract class Animal{
    abstract move():void;
    eat(){
        console.log("eat");
    }
}

class Cat extends Animal{
    move(): void {
        console.log("cat");
    }

}

class Bird extends Animal{
    move(): void {
        console.log("Bird");
    }

}

let animal1:Animal = new Cat();
let animal2:Animal = new Bird();

animal1.eat();
animal1.move();

animal2.eat();
animal2.move();