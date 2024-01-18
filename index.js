// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const color = 'red';

console.log(color);

//TODO: ADD redeclarable variable
var animal ='cow';
var animal = 'goat';
console.log(animal, animal)
//TODO: ADD re-assignable but not redeclarable variable
let tree = 'acacia';
let flower = 'rose';
console.log(tree, flower)
//let has a block scope
for (var i=0; i < 5 ; i++) {
    console.log(i)
}


// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const number = 3;

//TODO: Create a redeclarable variable with a boolean value
let light = false
var lighten = true
    console.log(light)
//TODO: Create a re-assignable variable with a string value
let tool = 'jembe'


// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
console.log('hello'+' '+'john')

//TODO: Interpolate string (`${}`)
let greetings = 'Hello'
let name = 'John'
let numbering = 18 + 6
console.log(greetings, name)
console.log('hello'+' '+'john')
console.log(`Hi ${name}`)
console.log(`${name} is ${numbering} years!`)
console.log(numbering, `shillings is all that ${name} has!`)

//TODO: Convert to uppercase
let friends = ('Sharko De Shark')
console.log(friends.toUpperCase())

//TODO: Convert to lowercase
let friend = 'Sharko De Shark 6'
console.log(friends.toLowerCase())

//TODO: Index a specific character
let index = friends.indexOf('a') // u need to indicate the letter or number, it picks always first xter
console.log(index) 

let indexing = friend.charAt('3') //it shows the number of letter
console.log(indexing)

//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality

console.log('18'===18)
//TODO: strict inequality

console.log(18!=='18', 'line 76')
//TODO: equality

console.log('17'==17)
//TODO: inequality

console.log('17'!=17, 'line 82')
//TODO: greater than

console.log(17 > 17)
console.log(23 > 17, 'line 86')
//TODO: less than

console.log(16 < 17)
//TODO: greater or equal to

console.log(23 >= 17, 'line 92')
//TODO: less or equal to
console.log(23 <= 17, 'line 94')


// 5.0 CONTROL FLOW
// TODO: if-else statement
let marks = 90
if (marks > 80) {
    console.log('Grade is A')
} else if (marks >= 60) {
    console.log('Grade is B')
}else {
    console.log('Grade is C')
}

//TODO: switch-case

let score = 60; // the switch case uses strict inequality
switch(score){
    case  80:
        console.log('Grade is A')
        break;
    case 60:
        console.log('Grade is B')
        break;
    case 40:
        console.log('Grade is C')
        break;
    default:
        console.log('Grade is D')

}




