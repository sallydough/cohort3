import functions from "./functions.js";

test("helloDOMWorld", () => {
    console.log("hey DOM world from test.js");
    functions.helloDOMWorld();
});

test("createCard Function", () => {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("count", "1");
    functions.createCard(mainDiv);
    expect(mainDiv.getAttribute("count")).toEqual("1");
    // functions.createCard(mainDiv);
    // console.log(count);
    // expect(mainDiv.getAttribute("count")).toEqual("2");

});

// test("addBefore Function", () => {
//     let mainDiv = document.createElement("div");
//     let div1= document.createElement("div");
//     let div2 = document.createElement("div");
//     mainDiv.appendChild(div1);
//     mainDiv.appendChild(div2);
// mainDiv.set





//     mainDiv.setAttribute("count", 1);
//     // mainDiv.getAttribute()
//     functions.addBeforeButton(mainDiv);
//     expect(mainDiv.getAttribute("count")).toEqual("1");
// });

// test("createCard Function", () => {
//     let mainDiv = document.createElement("div");

//     expect(mainDiv.getAttribute("count")).toEqual("1");
// });








//     console.log("hey DOM world from test.js");
//     expect(functions.showButtonFunction()).toBe(1);
// });


