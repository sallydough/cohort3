import functions from "./functions.js";

test("helloDOMWorld", () => {
    console.log("hey DOM world from test.js");
    functions.helloDOMWorld();
});

let count = 0;
test("createCard Function", () => {
    count++;
    let mainDiv = document.createElement("div");
    let newDiv = functions.createCard(mainDiv);
    newDiv.setAttribute("key", count);
    mainDiv.appendChild(newDiv);
    expect(mainDiv.children[0].getAttribute("key")).toBe("1");
    functions.createCard(mainDiv);
    expect(mainDiv.children[1].getAttribute("key")).toBe("2");
    functions.createCard(mainDiv);
    console.log(newDiv["key"])
    expect(mainDiv.children[2].getAttribute("key")).toBe("3");
});

test("addBeforeButton", () => {
    let count = 0;
    let countArray = [];

})


// 2. Div.child[0] addBefore//addAfter testing

// test("createCard Function", () => {
//     let mainDiv = document.createElement("div");
//     let childDiv = functions.createCard(mainDiv);
//     mainDiv.appendChild(childDiv);
//     expect(mainDiv.getAttribute("key")).toEqual("1");
//     functions.createCard(mainDiv);
//     expect(mainDiv.getAttribute("key")).toEqual("2");

// });



