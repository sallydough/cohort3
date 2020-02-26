import Node from './linkedlistsSD'

let a = new Node (1, "cow");
test("linkedlist class" , () => {
    expect(a.show()).toBe("The ID number is 1 & subject is cow");
});

a.next = new Node (20, "bird");

test("next node is 20/bird" , () => {
    expect(a.next.show()).toBe("The ID number is 20 & subject is bird");
});
test("next node is null" , () => {
    expect(a.next.next).toBe(null);
});

//—Write a test where you create a few nodes and find the last of each, add a couple nodes to the end, and do some testing again (TDD)
//—Write a method that adds one to the end and test it
//——Write test that adds one to the middle

