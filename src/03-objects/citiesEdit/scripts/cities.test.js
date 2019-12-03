import { functions, City, Community } from "./cities.js"

test("console C&C", () => {
    console.log("hello community and cities from test.js");
    functions.helloCities();
});

/////////////////////CLASS CITY TESTING (130D)//////////////////////////
let key = 1;

// showInfo:
test('check show', () => {

    let testCity = new City(key, 'Calgary', 51.0447, -114.0719, 1267344);
    const showStringInfo = testCity.showInfo();
    expect(showStringInfo).toBe(`Key:1 || Name:Calgary || Latitude:51.0447 || Longitude:-114.0719 || Population:1267344`);
});
// movedIn and MovedOut
test('check movedIn and movedOut', () => {
    let testCity = new City(key, 'Calgary', 51.0447, -114.0719, 1267344);
    expect(testCity.population).toBe(1267344);
    testCity.movedIn(1000000);
    expect(testCity.population).toBe(2267344);
    testCity.movedOut(1000000);
    expect(testCity.population).toBe(1267344);
});
// howBig
test('check how big a city is', () => {
    let newCity = new City(key, 'Red Deer', 52.2690, -113.8116, 100418);
    let largeTown = new City(key++, 'Medicine Hat', 50.0421, -110.7197, 63260);
    let town = new City(key++, 'Strathmore', 51.0378, -113.4004, 13528);
    let village = new City(key++, 'Flagstaff County', 52.6531, -111.8823, 639);
    let hamlet = new City(key++, 'Tilt Cove', 49.88499646, -55.622830842, 6);

    expect(newCity.howBig()).toBe('City');
    expect(largeTown.howBig()).toBe('Large Town');
    expect(town.howBig()).toBe('Town');
    expect(village.howBig()).toBe('Village');
    expect(hamlet.howBig()).toBe('Hamlet');
});

// whichSphere:
test('check whichSphere', () => {
    let northCity = new City(key++, 'Calgary', 51.0447, -114.0719, 1267344);
    northCity.whichSphere();
    expect(northCity.hemisphere).toBe('Northern Hemisphere');

    let southCity = new City(key++, 'Sydney', -33.870453, 151.208755, 4741874);
    southCity.whichSphere();
    expect(southCity.hemisphere).toBe('Southern Hemisphere');
});


//////////////////CLASS COMMUNITY TESTING 130D ///////////////////////////////
test('check getPopulation, ', () => {
    let cityController = new Community();

    //'createCity test'
    cityController.createCity(key++, 'Medicine Hat', 50.0421, -110.7197, 63260);
    cityController.createCity(key++, 'Yellowknife', 62.453972, -114.371788, 19569);
    cityController.createCity(key++, 'Red Deer', 52.2690, -113.8116, 100418);
    let sydneyObj = cityController.createCity(key++, 'Sydney', -33.870453, 151.208755, 4741874);

    // CHECK 'GET TOTAL POPULATION'
    expect(cityController.getAllPopulation()).toBe(4925121);

    //CHECK 'DELETECITY'
    let mapCities = cityController.cities.map(city => { return city.name; });
    expect(mapCities).toEqual(['Medicine Hat', 'Yellowknife', 'Red Deer', 'Sydney']);
    cityController.deleteCity('Red Deer');
    mapCities = cityController.cities.map(city => { return city.name; });
    expect(mapCities).toEqual(['Medicine Hat', 'Yellowknife', 'Sydney']);

    // CHECK 'NORTHERN AND SOUTHERN CITIES'
    expect(cityController.getMostNorthern().name).toBe('Yellowknife');
    expect(cityController.getMostSouthern().name).toBe('Sydney');

});

//     // CHECK POPULATION CONTROL, MOVE IN AND OUT
//     expect(sydneyObj.population).toBe(4741874);
//     cityController.populationControl(sydneyObj, "moveOut", 1000000);
//     expect(sydneyObj.population).toBe(3741874);
//     cityController.populationControl(sydneyObj, "moveIn", 1000000);
//     expect(sydneyObj.population).toBe(4741874);
// });
// test('check card are loaded given an array', () => {
//     let cityController = new Community();
//     let serverData = [
//         {key: 1, name: 'Medicine Hat', latitude: 50.0421, longitude: -110.7197, population: 63260},
//         {key: 2, name: 'Yellowknife', latitude: 62.453972, longitude: -114.371788, population: 19569},
//         {key: 5, name: 'Red Deer', latitude: 52.269, longitude: -113.8116, population: 100418}];
//     let mapCities = cityController.cities.map(city => {return city.name;});
//     expect(mapCities).toEqual([]);

//     cityController.loadCitiesServer(serverData);
//     mapCities = cityController.cities.map(city => {return city.name;});
//     expect(mapCities).toEqual(["Medicine Hat", "Yellowknife", "Red Deer",]);
// });


// // // 130E PRACITCING REFERENCE

// test('check referece', () => {
//     let myCity = new City (key++, 'Calgary', 51.0447, -114.0719, 1267344);
//     let myFav = myCity;
 
//     expect(myCity.population).toBe(1267344);
//     expect(myFav.population).toBe(1267344);

//     expect(myCity.population).toBe(1267344);
//     myCity.movedIn(1000000);
//     expect(myCity.population).toBe(2267344);
//     expect(myFav.population).toBe(2267344);

//     expect(myFav.population).toBe(2267344);
//     myFav.movedIn(1000000);
//     expect(myFav.population).toBe(3267344);
//     expect(myCity.population).toBe(3267344);

//  });
