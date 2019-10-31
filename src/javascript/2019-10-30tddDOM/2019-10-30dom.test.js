import functions from './2019-10-30dom.js';


test("helloworldd", () => {
    console.log("hello world");
    functions.helloWorldDom("hello World");
});

//
test("createCard", () => {
    let groupCardDiv = document.createElement("div");
    functions.counter = 0;

    const div1 = functions.createCard(groupCardDiv);
    // const x = div1.getAttribute("count");
    expect(div1.getAttribute("count")).toBe("1");
    // // expect(x).toBe("1");
    expect(div1.textContent).toEqual("Card Number 1");

    const div2 = functions.createCard(groupCardDiv);
    expect(div2.getAttribute("count")).toBe("2");
    expect(div2.textContent).toEqual("Card Number 2");

});

test( "addCard", () => {
    functions.counter = 0;

    let groupCardDiv = document.createElement("div");
    expect(groupCardDiv.childElementCount).toBe(0);

    functions.addCard(groupCardDiv);
    expect(groupCardDiv.childElementCount).toBe(1);
    functions.addCard(groupCardDiv);
    expect(groupCardDiv.childElementCount).toBe(2);
    functions.addCard(groupCardDiv);
    expect(groupCardDiv.childElementCount).toBe(3);
    // // console.log(groupCardDiv.children[0]);

    // console.log(groupCardDiv.children[0].getAttribute("count"));
    // console.log(groupCardDiv.children[1].getAttribute("count"));

    // console.log(groupCardDiv.children[2].getAttribute("count"));

    // expect(groupCardDiv.children[0].getAttribute("count")).toEqual("1");
    // expect(groupCardDiv.children[0].getAttribute("count")).toEqual("2");
    // expect(groupCardDiv.children[0].getAttribute("count")).toEqual("3");

  
})
