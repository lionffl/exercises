/*
const firstName = "Felipe";
const lastName = "Lima";
*/

let firstName = "Felipe";
let lastName = "Lima";

let sentence = `Olá, senhor ${lastName}, como estás? Poderia chamá-lo apenas de ${firstName}?`;
console.log(sentence);

sentence = "Olá, senhor " + lastName + ", como estás? Poderia chamá-lo apenas de " + firstName + "?";
console.log(sentence.toLowerCase());

/*
const monthlyRent = 3000;
const monthlySalary = 12000; 
const yearlyRent = monthlyRent * 12;
const yearlySalary = monthlySalary * 12;
const rentSalaryRatio = yearlyRent/yearlySalary*100;
*/

let financeProfile = {
    monthlyRent: 3000,
    monthlySalary: 12000,
        getSalary() {
            return this.monthlySalary
        }
}

let yearlyRent = financeProfile.monthlyRent * 12;
let yearlySalary = financeProfile.monthlySalary * 12;
let rentSalaryRatio = yearlyRent/yearlySalary*100;

console.log(yearlyRent);
console.log(yearlySalary);
console.log(rentSalaryRatio);

if(rentSalaryRatio <= 30) {
    console.log("You are fine.")
} else {
    console.log("Be careful with your costs.")
}


array = [
    "segunda",
    "terça",
];

console.log(array[1]);

array.push("quarta");

console.log(array[2]);


let numberOfPayments = 0;

for (let i = 0; i < 5; i++) {
    console.log(numberOfPayments);
    numberOfPayments++;
}

console.log(numberOfPayments);

let word = "";
const letter = "f";

for (let i = 0; i <= 5; i++) {
    console.log(word);
    word += letter;
}

console.log(word);

console.log(Math.floor(Math.random()*6+1));


