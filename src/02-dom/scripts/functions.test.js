import functions from "./functions.js";

test("helloDOMWorld", () => {
    console.log("hey DOM world from test.js");
    functions.helloDOMWorld();
});

test("createCard Function", () => {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("count", 1);
    // mainDiv.getAttribute()
    functions.createCard(mainDiv);
    expect(mainDiv.getAttribute("count")).toEqual("1");
});

// test("createCard Function", () => {
//     let mainDiv = document.createElement("div");

//     expect(mainDiv.getAttribute("count")).toEqual("1");
// });








//     console.log("hey DOM world from test.js");
//     expect(functions.showButtonFunction()).toBe(1);
// });


