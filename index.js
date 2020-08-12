/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18

if (votingAge < 18) {
    console.log(flase);
} else {
    console.log(true);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let chocolate = 'dark';
let taste = 'bad';

if (taste === 'good') {
    chocolate = 'dark';
}
else if (taste === 'bad'){
    chocolate = 'milk';
}

console.log(chocolate);

// Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number('1999'))

//Task d: Write a function to multiply a*b 

function multiply(a,b) {
    console.log(a*b);
}
multiply(3,7)

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age) {
    console.log(7*age);
}
dogYears(25);

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements //
// adult dogs at least 1 year //
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year //
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(weight, age){
    if (weight <= 5 && age >= 1){
        console.log(weight*.05);
    }
    else if (weight <= 10 && weight >= 6 && age >= 1){
        console.log(weight*.04);
    }
    else if (weight <= 15 && weight >= 11 && age >= 1){
        console.log(weight*.03);
    }
    else if (weight > 15 && age >= 1){
        console.log(weight*.02);
    }
    else if (age >= .16 && age <= .33){
        console.log(weight*.10);
    }
    else if (age >= .34 && age <= .58){
        console.log(weight*.5);
    }
    else if (age >= .59 && age <= 1){
        console.log(weight*.4);
    }
    else {
        console.log('Invalid parameters');
    }
}

dogFeeder(15,1)

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let computerChoice = Math.random();

if (computerChoice <= 0.34) {
    computerChoice = 'rock'
}
else if (computerChoice <= 0.67) {
    computerChoice = 'paper'
}
else if (computerChoice >= 0.67) {
    computerChoice = 'sissors'
}

function rockPaperSissors(userChoice, computerChoice) {
    
    if (userChoice === computerChoice) {
        console.log('Draw')
    }
    else if (userChoice === 'rock' && computerChoice === 'sissors') {
        console.log('You win!')
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win!')
    }
    else if (userChoice === 'sissors' && computerChoice === 'paper') {
        console.log('You win!')
    }
    else {
        console.log('You lose!')
    }
}

rockPaperSissors('rock', computerChoice);

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km) {
    console.log(km * .621371)
}

kmToMiles(5)

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function ftToCm(ft) {
    console.log(ft * 30.48)
}

ftToCm(5)

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong (bottles) {
    for (let i=bottles; i > 0; i--){
        console.log(i + " bottles of soda on the wall " + i + " bottles of soda, take one down pass it around " + (i - 1) + " bottles of soda on the wall")
    }
}

annoyingSong(99)

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grades(number) {
    if (number >= 90) {
        console.log("A")
    }else if (number >= 80 && number < 90) {
        console.log("B")
    }else if (number >= 70 && number < 80) {
        console.log("C")
    }else if (number >= 60 && number < 70) {
        console.log("D")
    }else {
        console.log("F")
    }
}

grades(100)

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

// let computerChoice = Math.random();

// if (computerChoice <= 0.34) {
//     computerChoice = 'rock'
// }
// else if (computerChoice <= 0.67) {
//     computerChoice = 'paper'
// }
// else if (computerChoice >= 0.67) {
//     computerChoice = 'sissors'
// }

// function rockPaperSissors(userChoice, computerChoice) {
    
//     if (userChoice === computerChoice) {
//         console.log('Draw')
//     }
//     else if (userChoice === 'rock' && computerChoice === 'sissors') {
//         console.log('You win!')
//     }
//     else if (userChoice === 'paper' && computerChoice === 'rock') {
//         console.log('You win!')
//     }
//     else if (userChoice === 'sissors' && computerChoice === 'paper') {
//         console.log('You win!')
//     }
//     else {
//         console.log('You lose!')
//     }
// }

let userInput = prompt("Rock, Paper, or Sissors?")
rockPaperSissors(userInput, computerChoice);
