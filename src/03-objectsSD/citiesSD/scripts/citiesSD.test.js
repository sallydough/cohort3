import {functions, City, Community} from "./citiesSD.js"

test( "hW", () => {
    console.log("heyo");
    functions.helloWorld();
  
});

////////////////////// City ////////////////////////////

test ("show", () => {
    let k = new City("Kelly", 12, 4, 123);
    expect(k.show()).toBe("Kelly, 12, 4, 123");
})

test ("movedIn", () => {
    let k = new City("Kelly", 12, 4, 100);
    expect(k.movedIn(200)).toBe(300);
})

test ("movedOut", () => {
    let k = new City("Kelly", 12, 4, 10);
    expect(k.movedOut(200)).toBe("Please enter number within current population");
    expect(k.movedOut(-1)).toBe("Please enter number within current population");
    expect(k.movedOut(9)).toBe(1);
})

test ("movedIn", () => {
    let k = new City("Kelly", 12, 4, 200000);
    let a = new City("Kelly", 12, 4, 30000);
    let b = new City("Kelly", 12, 4, 2000);
    let c = new City("Kelly", 12, 4, 10);
    expect(k.howBig()).toBe("- Kelly is a City");
    expect(a.howBig()).toBe("- Kelly is a Large Town");
    expect(b.howBig()).toBe("- Kelly is a Town");
    expect(c.howBig()).toBe("- Kelly is a Hamlet");    
});

////////////////// Community //////////////////////////

test("community whichSphere()", () => {
    let a = new City("Kelly", 12, 4, 30000);
    let community = new Community("Fake Community");
    a.latitude = 12;
    expect(community.whichSphere(a)).toBe("Kelly is located in the Northern Hemisphere");
    a.latitude = -40;
    expect(community.whichSphere(a)).toBe("Kelly is located in the Southern Hemisphere");
    a.latitude = -99;
    expect(community.whichSphere(a)).toBe('Please enter valid points');
    a.latitude = "poop"
    expect(community.whichSphere(a)).toBe('Please enter valid numbers, fool!');
});

test("community createCity()", () => {
    let community = new Community("Fake Community");
    var m = community.createCity("Sally", 80, 34, 345)
    expect(m.show()).toBe("Sally, 80, 34, 345")
    
});

// test("community", () => {
//     let a = new City("Kelly", 12, 4, 30000);
//     let community = new Community("Fake Community");
//     a.latitude = 12;
