const functions = {

    helloCities: () => {
        console.log("hi cities");
    }


}

class City {
    constructor (name, latitude, longitude, population) {}

    showInfo() {}
    movedIn() {}
    movedOut() {}
    howBig() {}
}

class Community {
    constructor() {}

    whichSphere() {}
    getMostNorthern() {}
    getMostSouthern() {}
    getAllPopulation() {}
    createCity() {}
    deleteCity() {}
}

export { functions, City, Community };