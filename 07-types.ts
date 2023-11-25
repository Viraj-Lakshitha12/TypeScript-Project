// types ---> 1) custom types and interface

type Graduate = {id:number,name:string,age:number,faculty:string,uni?:string}

interface Graduate2{
    id:number,
    name:string,
    age:number,
    faculty:string
}

let student:Graduate []= [];
let teachers:Graduate []= [];

let teachers1:Graduate2 []= [];

let student1={id:1,name:"kamal",age:25,faculty:'CSE'};
let student2={id:2,name:"Amal",age:24,faculty:'TONIC'};


student.push(student1);
student.push(student2);




