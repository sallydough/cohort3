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
    mainDiv.appendChild(functions.createCard(mainDiv));
    expect(mainDiv.children[1].getAttribute("key")).toBe("2");
    mainDiv.appendChild(functions.createCard(mainDiv));
    expect(mainDiv.children[2].getAttribute("key")).toBe("3");
});
    
test("addBeforeFunction", () => {
    let count = 0;
    count++;
    console.log(count);
    let mainDiv = document.createElement("div");
    mainDiv.id = "idMainDiv";
    let newDiv = functions.createCard(mainDiv);
    newDiv.setAttribute("key", count);
    mainDiv.appendChild(newDiv);
    document.body.appendChild(mainDiv);
    expect(mainDiv.children[0].getAttribute("key")).toBe("1");
    console.log(count);
    functions.addBeforeButton(newDiv, idMainDiv);
    console.log(count);
    expect(mainDiv.children[0].getAttribute("key")).toBe("2");
    expect(mainDiv.children[1].getAttribute("key")).toBe("1");
    functions.addBeforeButton(newDiv, idMainDiv);
    expect(mainDiv.children[0].getAttribute("key")).toBe("2");
    expect(mainDiv.children[1].getAttribute("key")).toBe("3");
    expect(mainDiv.children[2].getAttribute("key")).toBe("1");
});

test("addAfterFunction", () => {
    count = 0;
    count++;
    console.log(count);
    let mainDiv = document.createElement("div");
    mainDiv.id = "idMainDiv";
    let newDiv = functions.createCard(mainDiv);
    newDiv.setAttribute("key", count);
    mainDiv.appendChild(newDiv);
    document.body.appendChild(mainDiv);
    expect(mainDiv.children[0].getAttribute("key")).toBe("1");
    console.log(count);
    functions.addAfterButton(newDiv.nextSibling, idMainDiv);
    console.log(count);
    expect(mainDiv.children[0].getAttribute("key")).toBe("1");
    expect(mainDiv.children[1].getAttribute("key")).toBe("2");
    functions.addAfterButton(newDiv.nextSibling, idMainDiv);
    expect(mainDiv.children[0].getAttribute("key")).toBe("1");
    expect(mainDiv.children[1].getAttribute("key")).toBe("2");
    expect(mainDiv.children[2].getAttribute("key")).toBe("3");
});

// test("deleteButton", () => {
//     count = 0;
//     count++;
//     console.log(count);
//     let mainDiv = document.createElement("div");
//     mainDiv.id = "idMainDiv";
//     let newDiv = functions.createCard(mainDiv);
//     newDiv.setAttribute("key", count);
//     mainDiv.appendChild(newDiv);
//     document.body.appendChild(mainDiv);
//     expect(mainDiv.children[0].getAttribute("key")).toBe("1");
//     console.log(count);
//     functions.deleteButton(newDiv, idMainDiv);
//     console.log(count);
//     expect(mainDiv.children[0].getAttribute("key")).toBe("null");
//     // expect(mainDiv.children[1].getAttribute("key")).toBe("1");
//     // functions.addAfterButton(newDiv, idMainDiv);
//     // expect(mainDiv.children[0].getAttribute("key")).toBe("2");
//     // expect(mainDiv.children[1].getAttribute("key")).toBe("3");
//     // expect(mainDiv.children[2].getAttribute("key")).toBe("0");
// });



// 2. Div.child[0] addBefore//addAfter testing

// test("createCard Function", () => {
//     let mainDiv = document.createElement("div");
//     let childDiv = functions.createCard(mainDiv);
//     mainDiv.appendChild(childDiv);
//     expect(mainDiv.getAttribute("key")).toEqual("1");
//     functions.createCard(mainDiv);
//     expect(mainDiv.getAttribute("key")).toEqual("2");

// });



