let radiusCircle = +prompt(`Enter radius of circle only on int number`);
let areaCircle = Math.PI * radiusCircle**2;
console.log(areaCircle);


let age = +prompt(`How many are you years?`);
const retirementAge = 65;
let startRerirementAge = retirementAge-age;
let todayDate = new Date();
let currYear = todayDate.getFullYear();
let whenStartRetirementAge = currYear + startRerirementAge;
alert(`Your retirement age begins through ${startRerirementAge} years in ${whenStartRetirementAge}`);

let num = parseInt(prompt('enter yuor number'));

function reverse(num) {
  let result = 0;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }
return result;
}
alert(reverse(num));


// let chyslo = prompt('Please, enter number');
// chyslo.split().reverse();
// alert(chyslo);
// даний метод у мене не спрацював, буду вдячна,якщо вкажете чому)
