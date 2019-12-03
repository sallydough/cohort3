const functions = {

    helloCities: () => {
        console.log("hi cities");
    }
}

class City {
    constructor(key, name, latitude, longitude, population) {
        this.key = key;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        this.hemisphere = "";
    }

    showInfo() {
        return `Key:${this.key} || Name:${this.name} || Latitude:${this.latitude} || Longitude:${this.longitude} || Population:${this.population}`
    }
    movedIn(peopleIn) {
        this.population += parseInt(peopleIn);
    }
    movedOut(peopleOut) {
        this.population -= parseInt(peopleOut);
    }
    howBig(population) {
        if (this.population > 100000) return "City";
        else if (this.population > 20000) return "Large Town";
        else if (this.population > 1000) return "Town";
        else if (this.population > 100) return "Village";
        else return "Hamlet";
    }
    whichSphere() {
        let latitude = this.latitude;
        if (latitude > 0) {
            return this.hemisphere = 'Northern Hemisphere';
        }
        else { return this.hemisphere = 'Southern Hemisphere'; };
    }
}

class Community {
    constructor() {
        this.cities = [];
        this.byName = {};
        // this.message = "";
        this.counter = 0;
    }

    createCity(lastKey, name, latitude, longitude, population) {
        this.keyCount = lastKey;
        const newCity = new City(this.keyCount, name, latitude, longitude, population);
        this.hemisphere = newCity.whichSphere();
        this.type = newCity.howBig();
        this.cities.push(newCity);
        this.byName[name] = newCity;
        this.message = `${name} has been added.`;
        return newCity;

        // this.cities.push(new City(key, name, latitude, longitude, population, this.counter));
        // this.counter++;
    }

    deleteCity(deletedCity) {
        this.cities = this.cities.filter((e) => e.name != deletedCity);
        // delete this.byName[name];
        // this.message = `${name} has been deleted from your list.`
        // this.cities.forEach((key, index) => {
        //     if (key.name === name) {
        //         this.cities.splice(index, 1);
        //     }
        // });
    }

    getMostNorthern() {
        this.cities.sort(
            (city1, city2) => city2.latitude - city1.latitude
        );
        return this.cities[0];
    }

    getMostSouthern() {
        this.cities.sort(
            (city1, city2) => city2.latitude - city1.latitude
        );
        let lastItem = this.cities.length - 1;
        return this.cities[lastItem];
    }

    getAllPopulation() {
        const cityArray = [];
        this.cities.forEach(e => {
            cityArray.push(e.population);
            return cityArray;
        });
        const totalCityPopulation = cityArray.reduce((actual, current) => actual + current);
        return totalCityPopulation;
    }

    // loadCitiesServer (serverData) {
    //     serverData.map(city => {
    //         this.createCity(city.key, city.name, city.latitude, city.longitude, city.population);
    //     });
    //     this.message =  `Cities below have been loaded from the server.`
    //     return this.cities;
    // }
    // checkCityExists (latitude, longitude) {
    //     let checkExist = false;
    //     if (this.cities.length >= 1) {
    //         this.cities.forEach(city => {
    //             if (city.latitude === latitude && city.longitude === longitude) {
    //                 checkExist = true;
    //             };
    //         });
    //     };
    //     return checkExist;
    // }
    // populationControl (cityObj, change, amount) {

    //     if (change === 'moveOut') {
    //         this.message = 'City population has been updated.';
    //         return cityObj.movedOut(amount)
    //     }
    //     this.message = 'City population has been updated.';
    //     return cityObj.movedIn(amount);
    // }
    






}

export { functions, City, Community };