
let ownerName_inputElement = document.getElementById('ownerName') as HTMLInputElement;
let fixedAmount_inputElement = document.getElementById('fixedAmount') as HTMLInputElement;

let addFix_btn = document.getElementById('addFixBtn');

addFix_btn.addEventListener('click',() =>{
   let ownerName =  ownerName_inputElement.value;
   let fixedAmount = fixedAmount_inputElement.value;
   console.log(`owner : ${ownerName} , fixed amount :${fixedAmount}`);

   let rate = +12.5;
   let annual_interest = (+fixedAmount*12.5)/100;
  let account =  new Account_Details(ownerName,+fixedAmount,rate,annual_interest)
});

class Account_Details {
   owner_name:string;
   fixed_amount:number;
   interest_rate:number;
   annual_interest:number;

   constructor(owner_name:string,fixed_amount:number,interest_rate:number,annual_interest:number) {
      this.owner_name=owner_name;
      this.fixed_amount=fixed_amount;
      this.interest_rate=interest_rate;
      this.annual_interest=annual_interest;
   }

}