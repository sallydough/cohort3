const functions = {

    helloWorld: () => {
        console.log("hi");
    },
}

class City {
    constructor(key, name, latitude, longitude, population) {
        this.key = Number(key);
        this.name = name;
        this.latitude = Number(latitude);
        this.longitude = Number(longitude);
        this.population = Number(population);
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
        this.counter = 0;

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
        this.counter++;
        let newCity = new City(this.counter, name, latitude, longitude, population);
        this.cities.push(newCity);
        return newCity;
        //check if all 4 inouts are valid
    }

    deleteCity(array, index) {
        array.splice(index, 1);
        return array;
    }

    getMostNorthern(array) {
        let latitudeArray = array.map(cities => cities.latitude);
        let mostNorthernLat = Math.max(...latitudeArray);
        let mostNorthernName =  latitudeArray.indexOf(mostNorthernLat);
        return array[mostNorthernName].name;
    }

    getMostSouthern(array) {
        let latitudeArray = array.map(cities => cities.latitude);
        let mostSouthernLat = Math.min(...latitudeArray);
        let mostSouthernName =  latitudeArray.indexOf(mostSouthernLat);
        return array[mostSouthernName].name;
        
    }

    getPopulation(array) {
        const city_populations = array.map(array => array.population);
        const total_populations = city_populations.reduce((sum, num) => sum + num);
        return total_populations;
        //map city array for population , add together, return populaton
    }

    findCity(array, cityKey) {
        let array_keys = array.map(city => city.key);
        let found_key = array_keys.find((key) => key == cityKey)
        let found_index = array_keys.indexOf(found_key);
        return found_index;
    }
    
}


export { functions, City, Community };