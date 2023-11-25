
let ownerName_inputElement = document.getElementById('ownerName') as HTMLInputElement;
let fixedAmount_inputElement = document.getElementById('fixedAmount') as HTMLInputElement;

let addFix_btn = document.getElementById('addFixBtn');

addFix_btn.addEventListener('click',() =>{
   let ownerName =  ownerName_inputElement.value;
   let fixedAmount = fixedAmount_inputElement.value;
   console.log(`owner : ${ownerName} , fixed amount :${fixedAmount}`);


});