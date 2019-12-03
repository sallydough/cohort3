import { functions, City, Community } from "./cities.js"

test("console C&C", () => {
    console.log("hello community and cities from test.js");
    functions.helloCities();
});

/////////////////////CLASS CITY TESTING (130D)//////////////////////////
let key = 1;

test('check show', () => {

    let testCity = new City(key, 'Calgary', 51.0447, -114.0719, 1267344);
    const showStringInfo = testCity.showInfo();
    expect(showStringInfo).toBe(`Key:1 || Name:Calgary || Latitude:51.0447 || Longitude:-114.0719 || Population:1267344`);
});

test('check movedIn and movedOut', () => {
    let testCity = new City(key, 'Calgary', 51.0447, -114.0719, 1267344);
    expect(testCity.population).toBe(1267344);
    testCity.movedIn(1000000);
    expect(testCity.population).toBe(2267344);
    testCity.movedOut(1000000);
    expect(testCity.population).toBe(1267344);
});

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
