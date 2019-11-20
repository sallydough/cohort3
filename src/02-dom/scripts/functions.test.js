import functions from "./functions.js";

test("helloDOMWorld", () => {
    console.log("hey DOM world from test.js");
    functions.helloDOMWorld();
});

test("createCard Function", () => {
    let count = 0;
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
    let idMainDiv = document.createElement("div");
    idMainDiv.id = "idMainDiv";
    // let idMainDiv = document.getElementById("idMainDiv")
    let newDiv = functions.createCard(idMainDiv);
    newDiv.setAttribute("key", count);
    idMainDiv.appendChild(newDiv);
    // document.body.appendChild(mainDiv);
    expect(idMainDiv.children[0].getAttribute("key")).toBe("1");
    console.log(count);
    functions.addBeforeButton(newDiv, idMainDiv);
    console.log(count);
    expect(idMainDiv.children[0].getAttribute("key")).toBe("2");
    expect(idMainDiv.children[1].getAttribute("key")).toBe("1");
    functions.addBeforeButton(newDiv, idMainDiv);
    expect(idMainDiv.children[0].getAttribute("key")).toBe("2");
    expect(idMainDiv.children[1].getAttribute("key")).toBe("3");
    expect(idMainDiv.children[2].getAttribute("key")).toBe("1");
});

test("addAfterFunction", () => {
    let count = 0;
    count++;
    console.log(count);
    let mainDiv = document.createElement("div");
    mainDiv.id = "idMainDiv";
    let newDiv = functions.createCard(mainDiv);
    newDiv.setAttribute("key", count);
    mainDiv.appendChild(newDiv);
    // document.body.appendChild(mainDiv);
    expect(mainDiv.children[0].getAttribute("key")).toBe("1");
    console.log(count);
    functions.addAfterButton(newDiv.nextSibling, idMainDiv);
    console.log(count);
    expect(mainDiv.children[0].getAttribute("key")).toBe("1");
    expect(mainDiv.children[1].getAttribute("key")).toBe("2");
    functions.addAfterButton(newDiv.nextSibling, idMainDiv);
    expect(mainDiv.children[0].getAttribute("key")).toBe("1");
    expect(mainDiv.children[1].getAttribute("key")).toBe("3");
    expect(mainDiv.children[2].getAttribute("key")).toBe("2");
});

test("deleteButton", () => {
    let count = 0;
    count++;
    console.log(count);
    let mainDiv = document.createElement("div");
    mainDiv.id = "idMainDiv";
    let newDiv = functions.createCard(mainDiv);
    newDiv.setAttribute("key", count);
    mainDiv.appendChild(newDiv);
    let delButtton = document.createElement("bottom");
    newDiv.appendChild(delButtton);
    // document.body.appendChild(mainDiv);
    expect(mainDiv.children[0].getAttribute("key")).toBe("1");
    console.log(count);
    functions.deleteButton(delButtton);
    console.log(count);
    expect(mainDiv.children.length).toEqual(0);
});


