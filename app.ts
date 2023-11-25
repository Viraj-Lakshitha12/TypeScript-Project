
// @ts-ignore

let student:{
    id:number,
    name:string,
    age:number,
    salary:number
};
student={id:1,name:"amal",age:30,salary:50000};

// student={id:1,name:"amal",age:30,salary:50000,collage:"ABC"};
// student=10;

console.log(student);


//----------------------------------------- distance calculator -------------------------------------------------------------------

function calcDistance(location1:{lon:number ,lat:number} , location2:{lon:number,lat:number}) {


    let lon1=location1.lon;
    let lat1=location1.lat;

    let lon2=location2.lon;
    let lat2=location2.lat;

    // ---- calc distance  ----
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Radius of the Earth in kilometers (mean value)
    const R = 6371;

    // Calculate the distance
    return R * c;
}
//
// let location1 = {lon:80.7718,lat:7.8731}
// let location2 = {lon:133.7751,lat:25.2744}

const lat1Input = document.getElementById('lat1') as HTMLInputElement;
const lon1Input = document.getElementById('lon1') as HTMLInputElement;

const lat2Input = document.getElementById('lat2') as HTMLInputElement;
const lon2Input = document.getElementById('lon2') as HTMLInputElement;


let btnElement = document.getElementById('btn');
let resultElement = document.getElementById('result');

btnElement.addEventListener('click',()=>{
    let location1 = {lon:+lat1Input.value,lat:+lon1Input.value}
    let location2 = {lon:+lat2Input.value,lat:+lon2Input.value}

    let distance = calcDistance(location1,location2);
    console.log(distance);

    resultElement.innerText=`${distance.toFixed(2)}  KM`;
});