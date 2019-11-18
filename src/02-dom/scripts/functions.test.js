import functions from "./functions.js";

test("helloDOMWorld", () => {
    console.log("hey DOM world from test.js");
    functions.helloDOMWorld();
});

let count = 1;
test("createCard Function", () => {
    let mainDiv = document.createElement("div");
    // mainDiv.setAttribute("key", count++);
    let newDiv = functions.createCard(mainDiv);
    newDiv.setAttribute("key", count++)
    mainDiv.appendChild(newDiv);
    expect(mainDiv.getAttribute("key")).toEqual("1");
    functions.createCard(mainDiv);
    expect(mainDiv.getAttribute("key")).toEqual("2");
});



// 1. Create parent div
// ==== Process function createCard
// ==== So if count is 1, 2, 3,
// 2. Div.child[0] addBefore//addAfter testing

// test("createCard Function", () => {
//     let mainDiv = document.createElement("div");
//     let childDiv = functions.createCard(mainDiv);
//     mainDiv.appendChild(childDiv);
//     expect(mainDiv.getAttribute("key")).toEqual("1");
//     functions.createCard(mainDiv);
//     expect(mainDiv.getAttribute("key")).toEqual("2");

// });



