let sucos = ["caja", "melao", "melancia"];

// for(suco of sucos) {
//     console.log(suco);
// }

// let i = 0;

// while(i < 3) {
//     console.log(sucos[i]);
//     i++
// }

for (i = 0 ; i < 3 ; i++) {
    console.log(sucos[i]);
}

function definirMaior(x,y) {
    let maiorNum;
    if (x>y) {
        maiorNum = x;
        console.log(maiorNum);
    }
    else {
        maiorNum = y;
        console.log(maiorNum);
    }
}

definirMaior(10,4);

function printStringInObject(object) {

    for (prop in object) {
        if (typeof object[prop] === "string") {
            console.log(prop, object[prop]);
        }
    }

}

let user = {
    nome: 'Felipe',
    idade: 33,
}
printStringInObject(user);


// Divisível por 3 -> Fizz
// Divisível por 5 -> Buzz
// Divisível por 3 e por 5 -> FizzBuzz
// Não divisível por 3 nem por 5 -> Exibir numero
// Não é um númerp -> Exibir não é um número


function fizzBuzz(x) {
    let result;
    if (isNaN(x) === true) { 
        result = "Não é um número"
    }
    else if (x % 5 === 0 && x % 3 === 0) {
        result = "FizzBuzz"
    }    
    else if (x % 3 === 0) {
        result = "Fizz";
    } 
    else if (x % 5 === 0) {
        result = "Buzz";
    } 
    else if (x % 5 !== 0 && x % 3 !== 0) {
        result = x
    }
   console.log(result);
}
fizzBuzz("5");

// Velocidade máxima de até 70km/h
// A cada 5km/h acima do limite, 1 ponto
// Pontos acima de 12 suspendem a carteira

function speedCheck(speed) {
    let maxSpeed = 70;
    let incrementInterval = 5;
    let maxPoints = 12;
    let points = Math.floor((speed - maxSpeed) / incrementInterval);
    let tolerance = maxSpeed + incrementInterval - 1;

    if (speed <= maxSpeed) {
        console.log(`Your speed is ${speed}, no penalty applied.`);
    }
    else if (speed >= maxSpeed && points >= maxPoints) { 
        console.log(`Your speed is ${speed}km/h, a penalty of ${points} has been applied and you lost your license.`)
    }
    else if (speed >= maxSpeed && speed > tolerance) {  
    console.log(`Your speed is ${speed}km/h, a penalty of ${points} has been applied.`)
    }
    else { 
        console.log(`Your speed is ${speed}km/h. Be careful, you are over the speed limit by ${speed-maxSpeed}, but no penalty has been applied for now.`) 
    }
}
speedCheck(75);

function defineNumberType(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else { return "Odd" }
}

function printNumberType(number) {    
    let array = [];

    for (let i = 0 ; i <= number ; i++) {
        array.push(i);
        console.log(`${array[i]} is ${defineNumberType(array[i])}`);
    }
}
printNumberType(5);

// Função retorna soma dos múltiplos de 3 e 5 em um dado intervalo

function sumMultiple(number) {
    let arrayOfFive = [];
    let arrayOfThree = [];

    for (let i = 0 ; i <= number ; i++) {
        if (i % 3 === 0) {
            arrayOfThree.push(i);
        }
        else if (i % 5 === 0) {
            arrayOfFive.push(i);
        }
    }

    let sumOfThree = 0;
    let sumOfFive = 0;

    for (let i = 0 ; i < arrayOfThree.length ; i++) {
        sumOfThree = sumOfThree + arrayOfThree[i];
    }
    console.log(`Sum of multiple of three  = ${sumOfThree}`)
    
    for (let i = 0 ; i < arrayOfFive.length ; i++) {
        sumOfFive = sumOfFive + arrayOfFive[i];
    }
    console.log(`Sum of multiple of five  = ${sumOfFive}`)
    console.log(`Therefore, the sum of multiple of five and three = ${sumOfFive+sumOfThree}`)
}
sumMultiple(10);

// Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: D
// 90-100: A

const grades = [90,91,89];

function averageGrade(grades) {
    let averageGrade = 0;
    for (let i = 0 ; i < grades.length ; i++) {
        averageGrade = averageGrade + grades[i];
    }
    averageGrade = Math.floor(averageGrade / grades.length);
    
    if (averageGrade >= 0 && averageGrade <= 59) {
        console.log(`Average grade = ${averageGrade} - F`);
    }
    else if (averageGrade >= 60 && averageGrade <= 69) {
        console.log(`Average grade = ${averageGrade} - D`);
    }
    else if (averageGrade >= 70 && averageGrade <= 79) {
        console.log(`Average grade = ${averageGrade} - C`);
    }
    else if (averageGrade >= 80 && averageGrade <= 89) {
        console.log(`Average grade = ${averageGrade} - B`);
    }
    else if (averageGrade >= 90 && averageGrade <= 100) {
        console.log(`Average grade = ${averageGrade} - A`);
    }
}
averageGrade(grades);

function showStar(number) {
    star = '';
    for (let i = 0 ; i < number ; i++) {
        star = star + '*';
        console.log(star);
    }
}
showStar(5);

//Função para mostrar numeros primos

function isPrime(number) {
    let divisor = 0;
    for (let i = 0 ; i <= number ; i++) {
        if (number % i === 0) {
            divisor++;
        }
    }
    if (divisor === 2 && number > 1) { 
        // console.log(`${number} have ${divisor} divisors, therefore it is a prime number.`)
        return true;
    } else { 
        // console.log(`${number} have ${divisor} divisors, therefore it is not a prime number.`) 
        return false;
    }
}

function primeList(listOfNumbers) {
    for (let i = 0 ; i <= listOfNumbers ; i++) {
        if (isPrime(i) === true) {
            console.log(`${i} is a prime number`);
        }
    }
}
primeList(15);

function registerClient(name,taxNumber,service) {
    return { 
        name,
        taxNumber,
        service,
    }
}
const client = registerClient("Casa dos Ventos",1111111,"Energias Renováveis");

console.log(client);


function Client(name,taxNumber,service) {
    this.name = name;
    this.taxNumber = taxNumber;
    this.service = service;
}

const client2 = new Client("Casa dos Ventos",1111111,"Energias Renováveis");

console.log(client2);

const client3 = {...client2};
console.log(client3);




