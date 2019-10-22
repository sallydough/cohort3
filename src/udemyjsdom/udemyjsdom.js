import { arrayExpression } from "@babel/types"

///////////////////////////////////////////////
//SEC11 Exercise07 : ''
///////////////////////////////////////////////



///////////////////////////////////////////////
//SEC11 Exercise06 : 'Arrays'
///////////////////////////////////////////////

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();

// 2. Sort the array in order.
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.splice(0,1);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];


///////////////////////////////////////////////
//SEC11 Exercise05 : 'Make Keyless Car Better'
///////////////////////////////////////////////

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

function checkDriverAge(number) {
    var ageNumber = prompt("What is your age?");
    if (ageNumber < 18) {
        alert("you are too young to drive");
    } else if (ageNumber ===18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else if (ageNumber >18) {
        alert("Powering On. Enjoy the ride!");
    }
}

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.
var checkDriverAge2 = function(ageNumber) {
    var ageNumber = prompt("What is your age?");
    if (aNumber(ageNumber) < 18) {
        alert("you are too young to drive");
    } if (Number(ageNumber) ===18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else if (aNumber(ageNumber) >18) {
        alert("Powering On. Enjoy the ride!");
    }
}

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
it returns "Powering On. Enjoy the ride!"

function checkDriverAge(ageNumber) {
 
    if (Number(ageNumber) < 18) {
        return("you are too young to drive");
    } if (Number(ageNumber) ===18) {
        return("Congratulations on your first year of driving. Enjoy the ride!");
    } else if (Number(ageNumber) >18) {
        return ("Powering On. Enjoy the ride!");
    }
}

///////////////////////////////////////////////
//SEC11 Exercise04 : 'Make a Keyless Car'
///////////////////////////////////////////////

//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

var ageNumber = prompt("What is your age?");

if (ageNumber < 18) {
    alert("you are too young to drive");
} if (ageNumber ===18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (ageNumber >18) {
    alert("Powering On. Enjoy the ride!");
}

///////////////////////////////////////////////
//SEC11 Exercise03 : 'Make a Calculator'
///////////////////////////////////////////////

// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

var firstNumber = prompt("type in a first number");
var secondNumber = prompt("type in a second number");
var sumFirstSecond = Number(firstNumber) + Number(secondNumber);
alert(sumFirstSecond);

///////////////////////////////////////////////
//SEC11 Exercise02 : 'Variables'
///////////////////////////////////////////////

// add variable "firstName" and "lastName" // so that they equal your name
var firstName = "Sally";
var lastName = "Do";

// create a variable that holds the answer // of "firstName" + " " + "lastName"

var fullName = firstName + " " + lastName;

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
a + b // what is the answer here?       2 + 21 = 23

// What is c equal to?
var c;      undefined

///////////////////////////////////////////////
//SEC11 Exercise01 : 'Number,Strings,Booleans,Comparisons'
///////////////////////////////////////////////

//Evaluate the below:
5 + "34"                '534'
5 - "4"                 1
10 % 5                  0
5 % 10                  5
"Java" + "Script"       'JavaScript'
" " + " "               '  '
" " + 0                 ' 0'
true[1] + true[1]       2 / true
true[1] + false[0]       1
false + true             1
false - true            -1
3 - 4                   -1
"Bob" - "bill"          NaN

//Evaluate the below comparisons:
5 >= 1                  true
0 === 1                 false
4 <= 1                  false
1 != 1                  false
"A"[0] > "B"[1]         false  
"B"[1] < "C"[2]         true   
"a"[1] > "A"[0]         true
"b"[2] < "A"[0]         false 
true === false          false        
true != true            false

// Make the string: "Hi There! It's "sunny" out" by using the + sign:
"Hi There!" + " It\'s \"sunny\" out"