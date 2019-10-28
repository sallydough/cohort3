import { arrayExpression } from "@babel/types"
// ======================
// ADVANCED JAVASCRIPT
// ======================

// How to make neat JS:
        // 1. write variables
        // 2. write functions
        // 3. have return value
        // 4. call functions

// ========================
// SCOPE (variable access)
// ========================

// window (parent/root scope - all variables in windows are part of window's scope)
//  --------------------------------------------
// EXAMPLE: 
// 1. set var 'fun' as root scope
// 2. make 3 functions where child scope var 'fun' have different meanings
// 3. console.log(fun)
// 4. call all 3 functions to see in console log the var change accordingly

// Root Scope (window)
var fun = 5;

function funFunction() {
    // child scope
    var fun = "hello";
    console.log(1, fun);
}

function funnerFunction() {
    var fun = "Byee";
    console.log(2, fun);
}

function funestFunction() {
    var fun = "AHHHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funnerFunction();
funestFunction();


// ========================
// ADVANCED CONTROL FLOW
// ========================

// --------------------------------------
// --------------------------------------
//  TENERARY OPERATOR
// --------------------------------------
// [FORMULA/syntax:]
// 
//      functionconditon(true/false) ? expr1(true) : expr2(false);   

//                (is this function true or false? 
//                -if its true, provide expr1. 
//                -if its false, provide expr2)
// ----------------------------------------------------
// [EXAMPLE]:
// 1. make function with parameter as boolean
// 2. make var 'answer' = condtion() ? "true string" : "false string"

function isUserValid(bool) {
    return bool;
}

var answer = isUservalid(true) ? "You may Enter" : "Access Denied";

// call function
answer;
// if you type 'answer' in console, will give "You may enter"
// --------------------------------------------------------------
//
// --------------------------
// --------------------------
// SWITCH STATEMENT
// -------------------------------
// 1. make function with direction parameters
// 2. create variable 'whatHappens'
// 3. make switch statement... [contain switch/case/break/default]
// 4. return value
// 
function moveCommand(direction) {
    var whatHappens;
    // switch statement means "check direction, if the direction is forward, 'whatHappens' is "you encounter a monster"
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
            // if statement is "forward" and true, 'break;' means it will break out of the switch statement and move to 'return whatHappens;'
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "please enter a valid direction";
            break;
        default:
            whatHappens = "please enter valid direction";
    }
    return whatHappens;
}
// in console:
window.moveCommand("right");
// will give "you found a river"
// -------------------------------------------------------
//
// ================================
// ECMAScript5&6 === JavaScript
// ================================
//
//      BABEL [babeljs.io]
//          = converts all javascript files into processable files where all browsers can read it
//         
//-------------------------
//-------------------------
// let + const
//-------------------------


// const        - keeps the value consistent and constant, never changes in your code
//              -can change properties of a constant (if constant is object, but not the const)
//                      ex) obj.wizardLevel = true;
// let          - use if reassigning variable // if wrapped in curly bracket{}, it only applies in that certain new scope
//
//[example]:

const player = "Bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel =true;
    console.log('inside', wizardLevel);
}
console.log('outside', wizardLevel)

// in console, results will be :
// inside true
// outside false

// -------------------------
// ====================
// OBJECT PROPERTIES
// ====================
// ex) changing property of constant if an object:

const obj = {
    player: 'Bobby',
    experience: 100,
    wizardLevel: false;
}

// change property of obj:

obj.wizardLevel = true;
// ------------------------------

const player = obj.player;     
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// the above and below do the same thing
//goes into obj properties, finds player property, asigns const as player
//bottom is more cleaner

const { player, experience} = obj;
let { wizardLevel } = obj;
// --------------------------
// ---------------
// TEMPLATE STRING
// ---------------
// can have a cleaner string using single quotes
// inside single quote, use ${const reference} to reference a const

const name = "Sally";
const age = 34;
const pet = "horse";

const greetingBest = 'Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!'

//-------------------
//default argument
//-------------------

function greet(name='', age=30, pet='cat') {
    return 'Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have';
})

greet();
// return regular statement

greet("billy", 50, monkey);
// returns 'Hello billy you seem to be 40. what a lovely monkey you have'

//-----------------
//JS symbol
//------------------
//
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 =Symbol('foo');

// sym2 === sym3 = false
//symbol used to create completely unique type
//identifyer for object properties

//-----------------
//ARROW FUNCTIONS
//------------------
function add(a,b) {
    return a + b;
}

// can be written as

const add2 = (a, b) => a + b;

// =================================
// ADVANCED FUNCTIONS
// ===================================

const first = () => {
    const greet = "Hi";
    const second = () => {
        const name= "bobby";
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc;

// when we call newFunc(); === return second === alert("Hi")


// closures
// -the function ran 
//- the function elecuted
// -its never going to execute again
// -but its going to remember that there are references to the variables
// child scope always has access to parent scope
// -child scope always has access to parent scope
//-parent doesnt have access to child scope



//----------
//currying
//-----------
//process of converting function that takes multiply arguments, 
//into a function that takes them one at a time
//changing function to only accepting one function at a time

const multiply = (a,b) => a*b
const curriedMultiply = (a) => (b) => a*b
const multiplyBy5 = curriedMultiply(5);

curriedMultiply(3)(4);
// =12
multiplyBy5(5);
// =25

// ----------
//COMPOSE
//------------
// putting two fucntions together
//to make a 3rd function
//where output of one function is the input of another
//

const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num +1;

compose(sum, sum)(5);// 

// Avoid Side effects & functional purity 
//
//side effect= actions that happen in the function that we dont know about
//always want a return = only gives one value = deterministic
//whatever you inut into parameters of function, it will always return one exact value and not have error or undefinied
//
//
//=============================
//ADVANCED ARRAYS
//==============================
//
//forLoop
//forEach   (loops over something and does what function says)

const array = [1,2,10,16];

const double = []
const newArray = array.forEach(num) => {
    double.push(num * 2);
}

console.log(double);
// doing loops:
// map                  (loop over each function, return array, always need to return)
// filter 
// reduce

const mapArray = array.map(num) => {
    return num *2;
}

// filter  (filter array with conditon)
const filterArray = array.filter (num => {
    return num > 5
})
// will filter each array number into function and if any number greater than five, will filter into array
// answer : [10, 16]

// reduce (can filter and map with 'reduce')
// accum - starting numbersomething where we can store the information that happens in the body of the function

const reduceArray = array.reduce((accumulator, number)) => {
    return accumulator + num;
}, 0);

console.log('reduce', reduceArray);
// "0" (specifies accumulator)

// always returns a value
//no side effects










// ============================================
// D.O.M (Document Object Model)  // JAVASCRIPT
// =============================================

developer.mozilla.org/en-US/docs/Web/Events   (has DOM Events and function)


// ==============================
// D.O.M (Document Object Model)
// ==============================

DOM - something the browser creates for us to edit/modify HTML/CSS

JavaScript engine - look at js file and read it and execute javascript file line by line
therefore, together:
    -Use js to talk with the dom

Document is an object 
Window (big parent = describes the browser) is an object with properties

web browser has window object that has a property document that specifies what should be displayed
the dom reads HTML/CSS. JS read by v8 engine,
if stuff needs to be changed, document can talk with windows to modify


request html,css
then makes a dom

---------------------------------------------------------------


// ======================
// DOM Selectors
// =====================

document.getElementsByTagName();         (grabs element of tag element (ex: <h1>))
document.getElementsByClassName();       (grab element by 'class' attribute in html)
document.getElementByID();               (gets element using id attribute)


document.querySelector("h1");                        (selects only first one it can find)
document.querySelectorAll("li, h1")[array list];     (selects all of li and h1)

***check canIuse.com to see if selector can be used throughout all browsers

document.querySelector("li").getAttribute("random") = finds attribute 'random' = 23
document.querySelector("li").setAttribute("attributeNAme", "what you want to change its value to") = changes 23 into 1000



{/* ===================
##Changing Styles
=================== */}

style.{property}  //ok

        document.querySelector("h1").style    (querySelector grabs elements and then use className to change the file)
        document.querySelector("h1").style.background = "yellow";  (changes background of selected into yellow)

className

        var h1 = document.querySelector("h1");
        h1.className= "coolTitle"   (will go into your css file, find .coolTitle and set h1 to have a class called "coolTitle" which changes the font of h1 to "coolTitle")

classList()

        document.querySelector("li").classList (goes selects "li" and finds its classList)

domcument.querySelector("li").classList.add()
""classList.remove()
""classList.toggle()   (turn something on/off - goes back and forth)

document.querySelector("h1").innerHTML = "change inner html stuff" (grabs inner HTML of element and you can manipulate and change contents within)

parentElement  (finds parent element of selected element)
    document.querySelectorAll("li")[1].parentElement;  (finds 2nd array of list and finds parent element of li = <ul>)
children (finds children of selected element)


Cache selectors in variables
make a variable for the selected element

var h1 = document.querySelector("h1")

-----------------------------------------------------------------

{/* ============================================
DOM EVENTS developer.mozilla.org/en-US/docs/Web/Events
=========================================== */}
1. reference <script type="text/javascript" src="script.js"></script>
2. work on all javascript functioning in script.js file

{/* ------------------
KEYBOARD EVENTS
------------------ */}

addEventListener("click", function();)  (add event to "mouse or key' events)
createElement(element);                 (creates new element)
document.createTextNode(value);         (creates/gives value to text input)
.value                                  (gives value of selector)
.length                                 (length of value)
element.appendChild(variable)           (append a child to element which is 'variable' )
.keyCode                   

how to write an input and add it to list:
1. write variables that geteleemntbyid of certain id tag
        var button=document.getelementbyid("li");
        var input=document.geteleemntbyid("userinput")
        var ul=document.queryselector("ul");
2. add button event listener (button.addeventlistener("click", function() {
    var li = document.createelement("li");
    li.appendchild("document.createtextnode("testing");
    ul.appendchild(li);
}))
3.

// ----------------
// MOUSE EVENTS
// ---------------
.addEventListener("click", function());     (when you click button, console log)
"mouseenter"              (whenever you hover over button, it will log)
"mouseleave"              (when ever you leave the button, itll console log)


var button = document.getElementByTagName("button")[0];

button.addEventListener("click", (what you want to do baseed on the click)function() {
    console.log("CLICK!!!")
})


-------------------------------------------------------------------

EX) add input text and whatever is written in it will add to page list:

[1.In HTML:]

<button id="enter"">Enter</button>                              (creates button with "Enter" on it)
<input id="userInput" type="text" placeholder="enter items"     (what is written inside textbox)>  (creates textbox with "enterItems" in it)
<script type="text/javascript" src="source.js">                 (link JS file in the bottom of the body tag)

[2. In JavaScript:]

var button = document.getElementById("enter");  (html <button id="enter">Enter</button> )
var input= document.getElementById("userInput"); (html <input id="userInput" type="text"> )
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");                   (createElement)
    li.appendChild(document.createTextNode(input.value));   (append a child to li that is newly created li from input.value)
    ul.appendChild(li);                                     (append a child to ul that is "li")
    input.value = "";                                       (after we add input value to list, we want the new string to be empty)
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}


*** if you want to add list when you 'click' the enter button: *

        button.addEventListener("click", addListAfterClick());        (if anyone clicks "button", it will run function "addListAfterClick")
        console.log(input.value)

*** if you want to press "enter" button to submit the list input: *

        input.addEventListener("keypress", addListAfterKeypress(event));     (if anyone press "input" Enter key, it will run function "addListAfterKeypress")




{/* ///////////////////////////////////////////////
//SEC11 Exercise07 : 'Objects/Arrays for FB App'
/////////////////////////////////////////////// */}
// create successful FB login:
var usernamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

function signIn (user,pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
            console.log(newsfeed);
        } else {
            alert( "sorry, wrong user or pass!");
        }
}

//call function to be executed:
signIn(usernamePrompt,passwordPrompt);

{/* ///////////////////////////////////////////////
//SEC11 Exercise07 : 'Objects/Arrays for FB App'
/////////////////////////////////////////////// */}
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var fbUserPass = {
    username: "Sally",
    password: "ducks"
}

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
    {
        username: "Sally",
        password: "ducks"
    }
];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
    {
        username: "Candis",
        timeline: "Yo Whatssup?"
    },
    {
        username: "Gabby",
        timeline: "Life be dope"
    },
    {
        username: "Bob"
        timeline: "I commence in cool shit"
    }
]
{/* 
///////////////////////////////////////////////
//SEC11 Exercise06 : 'Arrays'
/////////////////////////////////////////////// */}

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

{/* 
///////////////////////////////////////////////
//SEC11 Exercise05 : 'Make Keyless Car Better'
/////////////////////////////////////////////// */}

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

{/* ///////////////////////////////////////////////
//SEC11 Exercise04 : 'Make a Keyless Car'
/////////////////////////////////////////////// */}

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

{/* ///////////////////////////////////////////////
//SEC11 Exercise03 : 'Make a Calculator'
/////////////////////////////////////////////// */}

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

{/* ///////////////////////////////////////////////
//SEC11 Exercise01 : 'Number,Strings,Booleans,Comparisons'
/////////////////////////////////////////////// */}

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