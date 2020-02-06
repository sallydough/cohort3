const functions = {

    helloWorld: () => {
        console.log("hi");
    },
}

class City {
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        return `${this.name}, ${this.latitude}, ${this.longitude}, ${this.population}`;
    }

    movedIn(number) {
        this.population += number;
        return this.population;
        // test for negative numbers and word imput;
    }
    movedOut(number) {
        if (number > this.population || number <= -1) {
            return "Please enter number within current population";
        } else {
            this.population -= number;
            return this.population;
            // test for negative numbers,word imput, if imput movedout pop is lower than actually pop at time;
        }
    }

    howBig() {
        if (this.population > 100000) {
            return `- ${this.name} is a City`
        } else if (this.population >= 20000 && this.population <= 100000) {
            return `- ${this.name} is a Large Town`
        } else if (this.population >= 1000 && this.population <= 19999) {
            return `- ${this.name} is a Town`
        } else if (this.population > 100 && this.population < 1000) {
            return `- ${this.name} is a Village`
        } else return `- ${this.name} is a Hamlet`
    
    }
}


class Community {
    constructor(communityName) {
        this.cities = [];
        this.communityName = communityName;

// -city passed (name, pop, lat, long)
// -array of all cities longitude, sort thru (most north/southern)
// -array of cities populations, sum all (getpop)
// -new City (pop,name, long.lat) (createcity)
// -got thru arra of cities, splice city out of array(delete city)

    }

    whichSphere(city) {
        if(city.latitude > 0 && city.latitude < 90) {
            return `${city.name} is located in the Northern Hemisphere`;
        }
        if(city.latitude < 0 && city.latitude > -90) {
            return `${city.name} is located in the Southern Hemisphere`;
        }
        if(city.latitude == 0) {
            return `${city.name} is exactly on the Equator!`;
        }
        if(city.latitude > 90 || city.latitude < -90) {
            return `Please enter valid points`;
        } else return "Please enter valid numbers, fool!"
    }

    createCity(name, latitude, longitude, population) {
        let newCity = new City(name, latitude, longitude, population);
        this.cities.push(newCity);
        return newCity;
        //check if all 4 inouts are valid
    }

    deleteCity(array, city) {

    }

    getMostNorthern(array) {
        let latitudeArray = array.map(cities => cities.latitude);
        let mostNorthernLat = Math.max(...latitudeArray);
        let mostNorthernName =  latitudeArray.indexOf(mostNorthernName).name;
        return mostNorthernName;
    }

    getMostSorthern(array) {
        let latitudeArray = array.map(cities => cities.latitude);
        let mostSouthernLat = Math.min(...latitudeArray);
        let mostSouthernName =  latitudeArray.indexOf(mostSouthernName).name;
        return mostSouthernName;
    }

    getPopulation(array) {
        //map city array for population , add together, return populaton
    }
    
}


export { functions, City, Community };