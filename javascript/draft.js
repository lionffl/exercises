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
printNumberType(2);

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
showStar(3);

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

primeList(5);

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

const greetings = new String("Hello!");
console.log(greetings);

function Address(street,city,zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function createAddress(street,city,zipCode) {
    return {
        street,
        city,
        zipCode,
    }
}

const address = createAddress("Marcos Macedo","Fortaleza","60150-190");
const address2 = createAddress("Maria Tomásia","Fortaleza","60150-170");

function showAddress(object) {
    for (let keys in object) {
        console.log(keys,object[keys]);
    }
}

console.log(address2);

function compareKey(address1,address2) {
    const address1Array = Object.keys(address1);
    const address2Array = Object.keys(address2);
    let answer = "";
    if (address1Array.length !== address2Array.length) {
        console.log("Properties are not the same.")
    } else {
        for (let i = 0 ; i < address1Array.length ; i++) {
            if (address1Array[i] === address2Array[i]) {
                answer = "Properties are the same."
            } else {
                answer = "Properties are not the same."
            }
        }
    }
    console.log(answer);
}

function compareValue(address1,address2) {
    const address1Array = Object.values(address1);
    const address2Array = Object.values(address2);
    let answer = "";
    if (address1Array.length !== address2Array.length) {
        console.log("Values are not the same.")
    } else {
        for (let i = 0 ; i < address1Array.length ; i++) {
            if (address1Array[i] === address2Array[i]) {
                answer = "Values are the same."
            } else {
                answer = "Values are not the same."
            }
        }
    }
    console.log(answer);
}

showAddress(address);
compareKey(address,address2);
compareValue(address,address2);

function makePost(title,post,author) {
    return {
        title,
        post,
        author,
        views: 0,
        comments: [],
        status: true,
    }
}

let comments = [
    { author: "Lion", msg: "this is a comment" },
    { author: "I am the author 2", msg: "this is a comments too" }
]
const post1 = makePost("This is a blog title","This is a blog post", "Lion")

Object.defineProperty(post1, 'views', { value: 4 });
Object.defineProperty(post1, 'coments', { value: comments[1] });
Object.defineProperty(post1, 'status', { value: false });

console.log(post1);

// const author = comments.find(function(author) {
//     return author.author === 'Lion';
// });

const author = comments.find((findAuthor) => findAuthor.author === 'Lion');

console.log(author);

const numbers = [1,2,3,4];

// for (let i = 0 ; i < numbers.length ; i++) {
//     console.log(numbers[i])
// }

// for (number of numbers) {
//     console.log(number);
// }

// numbers.forEach(function(number) {
//     console.log(number);
// })

// numbers.forEach((number) => console.log(number));

const textTitle = "Esse é um título de um texto"

function makeUrl(string) {
    const split = string.split(' ');
    const join = split.join('-');
    const url = join.toLowerCase();
    return url
}

console.log(makeUrl(textTitle));

// const age = prompt('How old are you?');
// if (age >= 18) {
//     alert('Ok, you are free to go.')
// } else alert('Sorry, you have to leave')



// function encode(string) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let encodedVowels = ['1', '2', '3', '4', '5'];
//     let newWord = string.replace(/a/g,'4').replace(/e/g,'2');
//     return newWord;
// }


// console.log(encode('merda merda'))


let word = 'sagui';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let encodedVowels = ['1', '2', '3', '4', '5'];
let arrayOfWordLetters = [];
let encodedWord = '';

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    arrayOfWordLetters.push(word[i]);
}

for (let i = 0; i < arrayOfWordLetters.length; i++) {
    for (let j = 0; j < arrayOfWordLetters.length; j++) {
        if (arrayOfWordLetters[i] === vowels[j]) {
            arrayOfWordLetters[i] = encodedVowels[j];
        } else { arrayOfWordLetters[i] = arrayOfWordLetters[i] }
    }
}

for (let i = 0; i < arrayOfWordLetters.length; i++) {
    encodedWord = encodedWord + arrayOfWordLetters[i];
}



console.log(arrayOfWordLetters);
console.log(encodedWord);

let array = [];
let arrayOfNumbers = [];
let cupOfWater = 0;

function hydrate(string) {
    
  
    for (let i = 0; i < string.length; i++) {
      array.push(string[i])
    }
  
    for (let i = 0; i < array.length; i++) {
      if (Number.isInteger(parseInt(array[i]))) {
        arrayOfNumbers.push(array[i])
      }
    } 
  
    for (let number of arrayOfNumbers) {
      cupOfWater = cupOfWater + parseInt(number); 
    }
    
    switch (cupOfWater) {
        case 1:
            return `${cupOfWater} copo de água`;
        default:
            return `${cupOfWater} copos de água`; 
    }
  }

console.log(array);
console.log(arrayOfNumbers);
console.log(hydrate("0 copos, 1 de vodka"));