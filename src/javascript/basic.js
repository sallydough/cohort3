console.log("Welcome to basic js");


const buttonClickkity = document.getElementById("inputButton");
buttonClickkity.addEventListener('click', wordWord);

function wordWord() {

    let grabbedTextValue = document.getElementById("numberRandomness");
    let textValueValue = grabbedTextValue.value
    console.log(textValueValue);
    let valueSize = size(textValueValue);
    const grabbedTextContentSpace = document.getElementById("textSizeContent");
    grabbedTextContentSpace.textContent = valueSize;

    console.log(Number(numberRandomness.value) + 1);
}

// this function is sepARATE SO CONSIDER IT ITS OWN WORLD AND HAVING ITS OWN LOGIC
function size(number) {
    if (number < 10) {
        return "small";
    }
    else if (number <= 19) {
        return "med";
    }
    else if (number >= 20) {
        return "large";
    }
};




