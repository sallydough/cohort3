console.log("Welcome to basic js");

//const = a variable thT YOU CAN NEVER CHANGE
// let variable that can be changed
// when I click buttonField, it will prompt and call the function onButtonClicked
// const helloWorldField.addEventListener("click", )

const buttonField= document.getElementById("inputButtonn");
    console.log(buttonField);
buttonField.addEventListener("click", onButtonClicked);
const numberTextValue= document.getElementById("numberRandomness");
const printResult = document.getElementById("textSize");

function onButtonClicked() {
    let result= Number(numberTextValue.value);
    let resultSize =size(result);
    // WE PUT A NUMBER VALUE IN SIZE() FUNCTION AND IT RETURNS A STRING(SMALL,MED,LARGE). THAT RETURN VALUE EQUALS RESULTSIZE
    printResult.textContent = resultSize;

    console.log("I am in the click event");

}

// this function is sepARATE SO CONSIDER IT ITS OWN WORLD AND HAVING ITS OWN LOGIC
function size(number) {
    if(number < 10) {
        return "small";
    } 
    else if(number <=19) {
        return "med";
    }
     else if(number>=20){
        return "large";
    }
};

// hover on Header
// randomize provinces


// function helloWorldHeader() {
// var provinces = ["Hello Alberta", "Hello BC" , "Hello Sask", "Hello Manitoba", "Hello Ontario", "Hello New Brunswick", "Hello Prince Edward Island", "Hello Nova Scotia", "Hello NWT", "Hello Yukon"]
// }




