import {functions, City, Community} from "./citiesSD.js"

test( "hW", () => {
    console.log("heyo");
    functions.helloWorld();
  
});

////////////////////// City ////////////////////////////

test ("show", () => {
    let k = new City(1, "Kelly", 12, 4, 123);
    expect(k.show()).toBe("Kelly, 12, 4, 123");
})

test ("movedIn", () => {
    let k = new City(1, "Kelly", 12, 4, 100);
    expect(k.movedIn(200)).toBe(300);
})

test ("movedOut", () => {
    let k = new City(1, "Kelly", 12, 4, 10);
    expect(k.movedOut(200)).toBe("Please enter number within current population");
    expect(k.movedOut(-1)).toBe("Please enter number within current population");
    expect(k.movedOut(9)).toBe(1);
})

test ("movedIn", () => {
    let k = new City(1, "Kelly", 12, 4, 200000);
    let a = new City(2, "Kelly", 12, 4, 30000);
    let b = new City(3, "Kelly", 12, 4, 2000);
    let c = new City(4, "Kelly", 12, 4, 10);
    expect(k.howBig()).toBe("- Kelly is a City");
    expect(a.howBig()).toBe("- Kelly is a Large Town");
    expect(b.howBig()).toBe("- Kelly is a Town");
    expect(c.howBig()).toBe("- Kelly is a Hamlet");    
});

////////////////// Community //////////////////////////

test("community whichSphere()", () => {
    let a = new City(1, "Kelly", 12, 4, 30000);
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

test('test deleteCity', () => {
    const community = new Community("Test Community");
    community.createCity("new city 1", 80, -100, 1200000);
    community.createCity("new city 2", 10.17, -40.21, 50005);
    community.createCity("new city 3", -48.17, 48.17, 77812);
    community.createCity("new city 4", 88.91, 114.56, 1);
    expect(community.cities).toEqual(
        [
            { "key": 1, "latitude": 80, "longitude": -100, "name": "new city 1", "population": 1200000 },
            { "key": 2, "latitude": 10.17, "longitude": -40.21, "name": "new city 2", "population": 50005 },
            { "key": 3, "latitude": -48.17, "longitude": 48.17, "name": "new city 3", "population": 77812 },
            { "key": 4, "latitude": 88.91, "longitude": 114.56, "name": "new city 4", "population": 1 }
        ]
    );
    expect(community.deleteCity(community.cities, 2))
        .toEqual(
            [
                { "key": 1, "latitude": 80, "longitude": -100, "name": "new city 1", "population": 1200000 },
                { "key": 2, "latitude": 10.17, "longitude": -40.21, "name": "new city 2", "population": 50005 },
                { "key": 4, "latitude": 88.91, "longitude": 114.56, "name": "new city 4", "population": 1 }
            ]
        );
});

test('test getPopulation total for all cities', () => {
    const community = new Community("Test Community");
    community.createCity("city 1", 60.01, -115.01, 1000000);
    community.createCity("city 2", 10.17, -40.21, 48967);
    community.createCity("city 3", -48.17, 48.17, 23960);
    community.createCity("city 4", 88.91, 114.56, 1);
    expect(community.getPopulation(community.cities)).toBe(1072928);
});

