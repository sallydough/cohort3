import functions from "./functions.js";

test("helloDOMWorld", () => {
    console.log("hey DOM world from test.js");
    functions.helloDOMWorld();
});

test("createCard Function", () => {
    let mainDiv = document.createElement("div");
    functions.createCard(mainDiv);










    console.log("hey DOM world from test.js");
    expect(functions.showButtonFunction()).toBe(1);
});


