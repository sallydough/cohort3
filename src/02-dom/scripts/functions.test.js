import functions from "./functions.js";

test("helloDOMWorld", () => {
    console.log("hey DOM world from test.js");
    functions.helloDOMWorld();
});

test("createCard Function", () => {
    functions.counterReset();
    
    let mainDiv = document.createElement("div");
    let newDiv = functions.createCard(mainDiv);
    newDiv.setAttribute("key", functions.counter);
    mainDiv.appendChild(newDiv);
    expect(mainDiv.children[0].getAttribute("key")).toBe("1");
    mainDiv.appendChild(functions.createCard(mainDiv));
    expect(mainDiv.children[1].getAttribute("key")).toBe("2");
    mainDiv.appendChild(functions.createCard(mainDiv));
    expect(mainDiv.children[2].getAttribute("key")).toBe("3");
});
    
test("addBeforeFunction", () => {
    functions.counterReset();
    
   
    let idMainDiv = document.createElement("div");
    idMainDiv.id = "idMainDiv";
    // let idMainDiv = document.getElementById("idMainDiv")
    let newDiv = functions.createCard(idMainDiv);
    newDiv.setAttribute("key", functions.counter);
    idMainDiv.appendChild(newDiv);
    // document.body.appendChild(mainDiv);
    expect(idMainDiv.children[0].getAttribute("key")).toBe("1");
    // console.log(count);
    functions.addBeforeButton(newDiv, idMainDiv);
    // console.log(count);
    expect(idMainDiv.children[0].getAttribute("key")).toBe("2");
    expect(idMainDiv.children[1].getAttribute("key")).toBe("1");
    functions.addBeforeButton(newDiv, idMainDiv);
    // console.log(count);
    console.log(idMainDiv.children[0])
    expect(idMainDiv.children[0].getAttribute("key")).toBe("2");
    expect(idMainDiv.children[1].getAttribute("key")).toBe("3");
    expect(idMainDiv.children[2].getAttribute("key")).toBe("1");
});

test("addAfterFunction", () => {
    functions.counterReset();

    // console.log(count);
    let idMainDiv = document.createElement("div");
    idMainDiv.id = "idMainDiv";
    let newDiv = functions.createCard(idMainDiv);
    newDiv.setAttribute("key", functions.counter);
    idMainDiv.appendChild(newDiv);
    // document.body.appendChild(mainDiv);
    expect(idMainDiv.children[0].getAttribute("key")).toBe("1");
    // console.log(count);
    functions.addAfterButton(newDiv.nextSibling, idMainDiv);
    // console.log(count);
    expect(idMainDiv.children[0].getAttribute("key")).toBe("1");
    expect(idMainDiv.children[1].getAttribute("key")).toBe("2");
    functions.addAfterButton(newDiv.nextSibling, idMainDiv);
    expect(idMainDiv.children[0].getAttribute("key")).toBe("1");
    expect(idMainDiv.children[1].getAttribute("key")).toBe("3");
    expect(idMainDiv.children[2].getAttribute("key")).toBe("2");
});

test("deleteButton", () => {
    functions.counterReset();

    // console.log(count);
    let mainDiv = document.createElement("div");
    mainDiv.id = "idMainDiv";
    let newDiv = functions.createCard(mainDiv);
    newDiv.setAttribute("key", functions.counter );
    mainDiv.appendChild(newDiv);
    let delButtton = document.createElement("bottom");
    newDiv.appendChild(delButtton);
    // document.body.appendChild(idMainDiv);
    expect(mainDiv.children[0].getAttribute("key")).toBe("1");
    // console.log(count);
    functions.deleteButton(delButtton);
    // console.log(count);
    expect(mainDiv.children.length).toEqual(0);
});


