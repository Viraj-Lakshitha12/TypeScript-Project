// types

let student1={id:1,name:"kamal",age:25,faculty:'CSE'};
let student2={id:2,name:"Amal",age:24,faculty:'TONIC'};
let student3=10;
let student4={id:3,name:"Amara",age:24,faculty:'TONIC',uni:'Uoc'};

let student:{id:number,name:string,age:number,faculty:string,uni?:string} []= [];
student.push(student1);
student.push(student2);
// student.push(student3); cant push
student.push(student4);



